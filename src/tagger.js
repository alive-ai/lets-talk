var DEFAULT_TAG = 'NN';

var definitions = {
	fr: require('../lang/fr.dict.js'),
	en: require('../lang/en.dict.js')
};

var taggers = {
	fr: require('../lang/fr.rdr.js'),
	en: require('../lang/en.rdr.js')
};

function tag(word, lang) {
	var size = word.length;
	var wordL = word.toLowerCase();
	var dicRow = lang.dictionnary[size];
	var result = null;
	// dirrect match (normal & lower case)
	if (dicRow) {
		result = lang.dictionnary[size][word];
		if (!result) {
			result = lang.dictionnary[size][wordL];
		}
		if (result) return result; // found from dictionnary
	}
	// ends with		
	for(var offset = 1; offset < size; offset ++) {
		dicRow = lang.endsWith[size - offset];
		if (dicRow) {
			result = dicRow[wordL.substring(offset, size)];
			if (result) return result; // found that ends with
		}
	}
	// starts with (seems not used from dictionnary)
	for(var offset = size - 1; offset > 0; offset ++) {
		dicRow = lang.startsWith[offset];
		if (dicRow) {
			result = dicRow[wordL.substring(0, offset)];
			if (result) return result; // found that ends with
		}
	}
	return false;
};

/**
 * Handling the parser
 */
var context = function(words, lang) {
	this.lang = lang;
	this.words = [];
	this.success = 0;
	this.offset = 0;
	if (!definitions.hasOwnProperty(lang)) {
		throw new Error('Unable to handle ' + lang);
	}
	var dict = definitions[lang];
	for(var i = 0; i < words.length; i++) {
		var func = tag(words[i], dict);
		this.words.push([words[i], func, func ? 0 : -1]);
		if (func !== false) {
			this.success ++;
		}
	}
	this.success = this.success / words.length;
};

/**
 * Use the rdr to correct the tagging
 */
context.prototype.correct = function(maxRun) {
	if (!taggers.hasOwnProperty(this.lang)) {
		throw new Error('Unable to handle ' + this.lang);
	}
	var it = 0;
	var changed = false;
	var tagger = taggers[this.lang];
	while(it++ < maxRun) {
		this.success = 0;
		for(this.offset = 0; this.offset < this.words.length; this.offset++) {
			this.w = this.words[this.offset][0];
			this.t = this.words[this.offset][1];
			if (!this.t) {
				this.t = DEFAULT_TAG;
			}
			this.t = tagger(this);
			if (this.t && this.t !== this.words[this.offset][1]) {
				this.words[this.offset][1] = this.t;
				this.words[this.offset][2] = it; // track when it was changed
				changed = true;
			}
			if (this.words[this.offset][1]) {
				this.success ++;
			}
		}
		this.success = this.success / this.words.length;
		if (!changed) {
			break;
		}
	}
};

/**
 * Checking tags or words from the current offset
 */
context.prototype.n = function(pos, at, check) {
	var idx = this.offset + pos;
	if (idx > -1 && idx < this.words.length) {
		return this.words[idx][at] === check;
	} else {
		return false;
	}
};

/**
 * Checking tags or words from the current offset
 */
context.prototype.s = function(size, check) {
	if (size > 0) {
		return this.w.substring(0, size) === check;
	} else {
		return this.w.substring(size) === check;
	}
};


/**
 * @throws Error when the detection level is low
 */
module.exports = function(words, lang) {
	var ctx = new context(words, lang);
	// if more than 3 words detection is less 20% 
	if (words.length > 3 && ctx.success < 0.2) {
		throw new Error('Unable to understand text in ' + lang);
	}
	// correcting max 2 times each word
	ctx.correct(2);	

	// Checking the detection levels
	if (ctx.success < 0.5) {
		throw new Error('Unable to understand text in ' + lang);		
	} else {
		return ctx.words;
	}
};