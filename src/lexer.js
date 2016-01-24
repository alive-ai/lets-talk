
var puctuation = [
	'"', '\'', ',', ';', '.', '?', '!', '(', ')', '+', '%', '€', '$', '/', ':', '='
];
var num = ['0','1','2','3','4','5','6','7','8','9'];
var wordBreak = [
	'-', ' ', '\t', '\r', '\n'
];

/**
 * Cut a string into words and tokens
 */
function getWordsItems(text) {
	var items = [];
	var item = '';
	var minus = false;
	for(var offset = 0; offset < text.length; offset ++) {
		var char = text[offset];
		if (char === '\'' && item.length === 1) {
			items.push(item + char);
			item = '';
			continue;
		}
		if (char === '-' && (text[offset + 1] === '\r' || text[offset + 1] === '\n')) {
			offset ++;
			if (text[offset] === '\r' && text[offset + 1] === '\n') {
				// windows style line break
				offset ++;
			}
			continue; // word separation as a line break 
		} else {
			if (puctuation.indexOf(char) !== -1) {
				if (item) {
					items.push(item);
					item = '';
				}
				minus = false;
				items.push(char);
			} else if (wordBreak.indexOf(char) !== -1) {
				if (char === '-') {
					minus = true;
				}
				if (item) {
					items.push(item);
					item = '';
				}
			} else {
				if (minus) {
					if (num.indexOf(char) !== -1) {
						items.push('-');
					}
					minus = false;
				}
				item += char;
			}
		}
	}
	if (item) {
		items.push(item);
	}
	return items;
}


/**
 * Scan a text
 */
module.exports = function(string, lang) {
	var words = getWordsItems(string);
	var sentences = [
		{
			'type': 'sentence', 
			'mode': '.',
			'words': []
		}
	];
	var sentenceIndex = 0;

	for(var i = 0; i < words.length; i++) {
		var item = words[i];
		if (item === '.' || item === '?' || item === '!' || item === ';' || item === ':' || item === '/') {
			if (item === '/') item = ';'; // they are synonyms
			sentences[sentenceIndex].mode = item;
			sentenceIndex ++;
			sentences.push({
				'type': 'sentence', 
				'mode': '.',
				'words': []
			});
		} else {
			sentences[sentenceIndex].words.push(item.toLowerCase());
		}
	}
	if (sentences[sentenceIndex].words.length === 0) {
		sentences.pop();
	}
	return sentences;
};