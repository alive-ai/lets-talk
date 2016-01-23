var fs = require('fs');

console.log('Reading ', process.argv[2]);

var reader = require('readline').createInterface({
  input: fs.createReadStream(process.argv[2])
});

var rootNode = {
	parent: null,
	level: 0,
	condition: [],
	conclusion: 'object.conclusion = "NN"',
	childs: []
};
var lineNo = 0;
var current = rootNode;

reader.on('line', function(line) {
	lineNo++;
	if (lineNo === 1) {
		// ignore the first line (root node)
		return;
	}

	// line = condition : conclusion
	try {
		var ast = parse(line);
	} catch(e) {
		throw new Error('Error at line ' + lineNo + ' : ' + e.message);
	}
	


	// handling recursion
	var parent = null;
	if (ast.level === current.level) {
		parent = current.parent; // sibling
	} else if (ast.level === current.level + 1) {
		parent = current; // child
	} else if (ast.level < current.level) {
		parent = current;
		for(var i = current.level - ast.level; i > -1; i--) {
			parent = parent.parent;
			if (!parent) {
				break; // reach root error
			}
		}
	}
	if (!parent) {
		throw new Error('Bad identation at line ' + lineNo + ' - level ' + level);
	}

	// check if handle syntax
	if (ast.conclusion[0] !== 'object' && ast.conclusion[1] !== 'conclusion') {
		throw new Error('Bad conclusion at line ' + lineNo);
	}

	// check if handle conditions
	for(var i = 0; i < ast.conditions.length; i++) {
		if (ast.conditions[i][0] !== 'object') {
			throw new Error('Bad condition #' + (i + 1) + ' at line ' + lineNo);
		}
	}

	// add the new node
	current = {
		parent: parent,
		level: ast.level,
		conditions: ast.conditions,
		conclusion: ast.conclusion,
		childs: []
	};
	parent.childs.push(current);

}).on('close', function() {
	console.log('Writing ', process.argv[3]);
	fs.open(process.argv[3], 'w+', function(err, fd) {
		if (err) {
			return console.error(err);
		}
		fs.writeSync(fd, [
			'/**',
			' * File Generated From ' + process.argv[2] + ' at ' + (new Date()),
			' * by Lets-Talk engine : https://github.com/ichiriac/lets-talk',
			' * Licensed under MIT by Ioan CHIRIAC',
			' * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham',
			' */',
			'module.exports = function(reader) {',
			''
			].join('\n')
		); 
		for(var i in rootNode.childs) {
			fs.writeSync(fd, visitNode(rootNode.childs[i], '\t'));
		}
		fs.writeSync(fd, '\treturn "NN";\n};');
	})
});

function visitNode(node, tab) {
	var conditions = [];
	for(var i = 0; i < node.conditions.length; i++) {
		conditions.push('reader.' + node.conditions[i][1] + '("' + node.conditions[i][2] + '")');
	}
	if (node.childs.length > 0) {
		var code = tab + 'if (' + conditions.join(' && ') + ') {\n';
		for(var i in node.childs) {
			code += visitNode(node.childs[i], tab + '\t');
		}
		code += tab + '\treturn "' + node.conclusion[2] + '";\n';
		code += tab + '}\n';
		return code;
	} else {
		return tab + 'if (' + conditions.join(' && ') + ') return "' + node.conclusion[2] + '";\n';
	}
}

var T_NAME = 1;
var T_STRING = 2;
var T_EQUAL = 3;
var T_PROP = 4;
var T_SEP = 5;

function parse(cmd) {
	var result = {
		level: 0,
		conditions: [],
		conclusion: null
	};
	var len = cmd.length;

	// tokenize
	var isText = false;
	var tokens = [];
	var token = [T_NAME, ''], c, i; 
	for(i = 0; i < len; i++) {
		c = cmd.charAt(i);
		if (c === '\t') {
			result.level ++;
		} else {
			break;
		}
	}
	for(;i < len; i++) {
		c = cmd.charAt(i);
		if (isText) {
			if (c === '"') {
				isText = false;
				tokens.push(token);
				token = [T_NAME, ''];
			} else {
				token[1] += c;
			}
		} else {
			if (c === ' ') {
				if (token[1].length > 0) tokens.push(token);
				token = [T_NAME, ''];
			} else if (c === '.' || c === ':') {
				if (token[1].length > 0) tokens.push(token);
				tokens.push([c === '.' ? T_PROP : T_SEP, c]);
				token = [T_NAME, ""];
			} else if (c === '=') {
				if (token[1].length > 0) tokens.push(token);
				if (cmd.charAt(i + 1) === '=') i++;
				tokens.push([T_EQUAL]);
				token = [T_NAME, ""];
			} else if (c === '"') {
				if (token[1].length > 0) tokens.push(token);
				isText = true;
				token = [T_STRING, ''];
			} else {
				token[1] += c;
			}			
		}
	}
	if (token[1].length > 0) tokens.push(token);

	// build an ast
	// check ::= T_NAME T_PROP T_NAME T_EQUAL T_STRING
	// program ::= check ( T_NAME"and" check)* T_SET check
	var isCond = true;
	for(var i = 0; i < tokens.length; i++) {
		if (tokens[i][0] !== T_NAME) {
			throw new Error('Expected T_NAME');
		}
		var what = tokens[i][1];
		if (tokens[++i][0] !== T_PROP) {
			throw new Error('Expected T_PROP');
		}
		if (tokens[++i][0] !== T_NAME) {
			throw new Error('Expected T_NAME');
		}
		var prop = tokens[i][1];
		if (tokens[++i][0] !== T_EQUAL) {
			throw new Error('Expected T_EQUAL');
		}
		if (tokens[++i][0] !== T_STRING) {
			throw new Error('Expected T_STRING');
		}
		var value = tokens[i][1];

		if (isCond) {
			if (tokens[++i][0] === T_SEP) {
				isCond = false;
			} else if (tokens[i][0] !== T_NAME || tokens[i][1].toLowerCase() !== 'and') {
				throw new Error('Expected T_SEP or T_AND');
			}
			result.conditions.push([what, prop, value]);				
		} else {
			result.conclusion = [what, prop, value];
			break;
		}
	}
	if (++i !== tokens.length) {
		throw new Error('Expected end of line');
	}
	return result;
}