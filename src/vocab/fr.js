
var present = function() {
	
};

module.exports = {
	/** PRONOMS : "P", Pers, Singular/Plural, Gender **/
	"je": 		["P", 1, "S"],
	"j'":  		["P", 1, "S"],
	"tu": 		["P", 2, "S"],
	"t'": 		["P", 2, "S"],
	"il": 		["P", 3, "S", "M"],
	"elle": 	["P", 3, "S", "F"],
	"ça": 		["P", 3, "S", "?"],
	"nous": 	["P", 1, "P"],
	"on": 		["P", 1, "P"],
	"vous": 	["P", 2, "P"],
	"ils": 		["P", 3, "P", "M"],
	"elles": 	["P", 3, "P", "F"],
	/** VERBS : "V", Time, PersonN°, Singular/Plural', Gender **/
	"avoir":  ['V', 'I', '?', '?'],
	// PRESENT :
	"ai":     ['V', 'P', '1', 'S', '?'],
	"as":     ['V', 'P', '2', 'S', '?'],
	"a":      ['V', 'P', '3', 'S', '?'],
	"avons":  ['V', 'P', '1', 'P', '?'],
	"avez":   ['V', 'P', '2', 'P', '?'],
	"ont":    ['V', 'P', '3', 'P', '?'],
	// FUTURE :
	"aurais": ['V', 'F', '1', 'S', '?'],
	"auras":  ['V', 'F', '2', 'S', '?'],
	"aura":   ['V', 'F', '3', 'S', '?'],
	"aurons": ['V', 'F', '1', 'P', '?'],
	"aurez":  ['V', 'F', '2', 'P', '?'],
	"auront": ['V', 'F', '3', 'P', '?'],
	
};