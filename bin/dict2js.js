var fs = require('fs');

console.log('Reading ', process.argv[2]);

var reader = require('readline').createInterface({
  input: fs.createReadStream(process.argv[2])
});

var tags = {};
var enders = {};
var starters = {};
var dico = {};
reader.on('line', function(line) {
	var parts = line.split(' ');
	if (!tags.hasOwnProperty(parts[1])) {
		tags[parts[1]] = { nb: 0, size: 0 };
	}
	if (
		parts[0].indexOf('-') === -1
		&& parts[0].indexOf('\'') === -1
	) {
		var size = parts[0].length;
		tags[parts[1]].nb ++;
		tags[parts[1]].size += size;
		if (parts[0].substring(0, 2) === '.*') {
			parts[0] = parts[0].substring(2);
			if (!enders.hasOwnProperty(size - 2)) {
				enders[size - 2] = {};
			}
			enders[size - 2][parts[0]] = parts[1];
		} else if (parts[0].substring(-2) === '.*') {
			parts[0] = parts[0].substring(0, parts[0].length - 2);
			if (!starters.hasOwnProperty(size - 2)) {
				starters[size - 2] = {};
			}
			starters[size - 2][parts[0]] = parts[1];
		} else {
			if (!dico.hasOwnProperty(size)) {
				dico[size] = {};
			}
			dico[size][parts[0]] = parts[1];
		}
	}
}).on('close', function() {
	console.log('Statistics :\n', tags);
	console.log('====================================\n', 'Writing ', process.argv[3]);
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
			''
			].join('\n')
		); 
		fs.writeSync(fd, 'module.exports = {\n\t"startsWith":');
		fs.writeSync(fd, JSON.stringify(starters));
		fs.writeSync(fd, ',\n\t"endsWith":');
		fs.writeSync(fd, JSON.stringify(enders));
		fs.writeSync(fd, ',\n\t"dictionnary":');
		fs.writeSync(fd, JSON.stringify(dico));
		fs.writeSync(fd, '\n};');
	});
});