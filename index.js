module.exports = {
	lexer: require('./src/lexer'),
	tagger: require('./src/tagger'),
	read: function(text, lang) {
		text = this.lexer(text, lang);
		for(var i = 0; i < text.length; i++) {
			text[i].words = this.tagger(text[i].words, lang);
		}
		return text;
	}
};