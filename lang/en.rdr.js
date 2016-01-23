/**
 * File Generated From data/pos/english.rdr at Sat Jan 23 2016 18:02:20 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(reader) {
	if (reader.tag === "PRP$") {
		if (reader.nextTag1("IN")) return "PRP";
		if (reader.word === "her" && reader.nextTag1(",")) return "PRP";
		if (reader.word === "her" && reader.nextTag1(".")) return "PRP";
		if (reader.word === "her" && reader.nextWord1("to")) return "PRP";
		if (reader.word === "her" && reader.nextTag1("DT")) return "PRP";
		if (reader.word === "her" && reader.nextTag1("RP")) return "PRP";
		if (reader.nextWord1("and")) return "PRP";
		return "PRP$";
	}
	if (reader.tag === "VBG") {
		if (reader.nextWord1("of")) {
			if (reader.word === "consisting") return "VBG";
			if (reader.word === "disposing" && reader.nextTag1("IN")) return "VBG";
			if (reader.nextTag2("VBG")) return "VBG";
			if (reader.prevTag2("IN") && reader.prevTag1("NN")) return "VBG";
			if (reader.nextWord2("its")) return "VBG";
			return "NN";
		}
		if (reader.prevTag1("JJ")) {
			if (reader.prevWord1("busy")) return "VBG";
			if (reader.prevWord2("and") && reader.prevWord1("other")) return "VBG";
			if (reader.prevWord1("further") && reader.nextWord1("the")) return "VBG";
			if (reader.prevTag1("JJ") && reader.nextTag1("PRP$")) return "VBG";
			if (reader.prevTag1("JJ") && reader.nextTag1("JJ")) return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "managing") return "VBG";
			if (reader.prevWord1("many")) return "VBG";
			if (reader.prevWord1("several")) return "VBG";
			if (reader.word === "operating" && reader.nextWord1("systems")) return "VBG";
			if (reader.prevWord2("is")) return "VBG";
			if (reader.prevWord2("a") && reader.word === "holding") return "VBG";
			if (reader.word === "remaining") {
				if (reader.prevWord2("the") && reader.word === "remaining") return "JJ";
				return "VBG";
			}
			if (reader.prevTag2("JJ") && reader.prevTag1("JJ") && reader.word === "holding") return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "working" && reader.nextTag1("NN")) return "JJ";
			if (reader.word === "trying" && reader.nextTag1("TO")) return "VBG";
			if (reader.word === "operating" && reader.nextWord1("unit")) return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "being") return "VBG";
			if (reader.word === "easing" && reader.nextTag1("IN") && reader.nextTag2("NNP")) return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "going") return "VBG";
			if (reader.word === "operating" && reader.nextTag1("NN") && reader.nextTag2("MD")) return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "existing" && reader.nextTag1("NNS")) return "VBG";
			if (reader.nextTag1("NN") && reader.nextTag2("NNS")) return "VBG";
			if (reader.nextWord1("up")) return "VBG";
			if (reader.nextWord2("from")) return "VBG";
			if (reader.nextWord1("group")) return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "generating") return "VBG";
			if (reader.prevWord1("worth") && reader.nextWord1("for")) return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "rolling") return "VBG";
			if (reader.prevWord2("n't")) return "VBG";
			if (reader.prevTag1("JJ") && reader.word === "pending") return "VBG";
			if (reader.nextWord2("is")) return "JJ";
			return "NN";
		}
		if (reader.word === "operating" && reader.nextTag1("NN")) {
			if (reader.prevWord1("the")) return "VBG";
			if (reader.prevWord1("reported") && reader.word === "operating") return "VBG";
			return "NN";
		}
		if (reader.prevTag1("DT") && reader.word === "selling") return "NN";
		if (reader.prevTag1("NN") && reader.nextTag1(".")) {
			if (reader.prevWord1("time") && reader.nextWord1(".")) return "VBG";
			if (reader.prevTag2("PRP$")) return "VBG";
			if (reader.prevWord2("the")) return "VBG";
			return "NN";
		}
		if (reader.word === "operating" && reader.nextTag1("NNS")) {
			if (reader.nextTag2("TO")) return "VBG";
			if (reader.nextWord2("of")) return "VBG";
			if (reader.prevTag2("NN")) return "VBG";
			return "NN";
		}
		if (reader.prevTag1("DT") && reader.nextTag1(".")) return "NN";
		if (reader.prevTag1("DT") && reader.nextTag1("IN")) {
			if (reader.prevWord1("those")) return "VBG";
			return "NN";
		}
		if (reader.nextTag1(",") && reader.nextTag2("NN")) return "NN";
		if (reader.word === "selling" && reader.nextWord2("the")) return "NN";
		if (reader.prevTag1("DT") && reader.nextTag1(",")) {
			if (reader.nextTag2("JJ")) return "VBG";
			return "NN";
		}
		if (reader.prevTag1("DT") && reader.word === "following") {
			if (reader.prevTag2("CC")) return "VBG";
			if (reader.word === "following" && reader.nextWord2(",")) return "VBG";
			return "JJ";
		}
		if (reader.word === "shipping" && reader.nextTag1("NNS")) return "NN";
		if (reader.prevTag1("NN") && reader.nextTag1("VBZ")) return "NN";
		if (reader.prevTag1("IN") && reader.nextTag1("VBZ")) return "NN";
		if (reader.word === "buying" && reader.nextTag1("VBD")) return "NN";
		if (reader.nextWord1("managers") && reader.nextWord2("'")) return "NN";
		if (reader.word === "playing" && reader.nextWord1("field")) return "NN";
		if (reader.word === "buying" && reader.nextTag1("IN")) {
			if (reader.prevTag2("VBN")) return "VBG";
			return "NN";
		}
		if (reader.word === "coming" && reader.nextTag1("NNS") && reader.nextTag2(",")) return "JJ";
		if (reader.prevTag2("VBD") && reader.prevTag1("PRP$")) return "NN";
		if (reader.prevTag1("DT") && reader.word === "recruiting") return "NN";
		if (reader.prevTag1("IN") && reader.word === "living") return "NN";
		if (reader.prevWord1("policy") && reader.word === "making") return "NN";
		if (reader.prevWord1("fund") && reader.word === "raising") return "NN";
		if (reader.prevTag2("CD") && reader.prevTag1("NN") && reader.word === "holding") return "NN";
		if (reader.prevWord2("was") && reader.prevWord1("a")) return "JJ";
		if (reader.prevWord1("very")) return "JJ";
		if (reader.word === "matching" && reader.nextTag1("NNS") && reader.nextTag2("IN")) return "JJ";
		if (reader.prevTag1("PRP$") && reader.nextTag1("CC")) return "NN";
		if (reader.word === "holding" && reader.nextWord1(".") && reader.nextWord2("")) return "NN";
		if (reader.nextTag1("CC") && reader.nextTag2("JJ")) {
			if (reader.prevTag1("VBZ")) return "VBG";
			if (reader.prevTag2("JJ")) return "JJ";
			return "NN";
		}
		if (reader.word === "gathering" && reader.nextWord1(",")) return "NN";
		if (reader.prevWord1(",") && reader.word === "shipping") return "NN";
		if (reader.nextWord1("group")) return "NN";
		if (reader.prevTag1("") && reader.word === "Buying" && reader.nextTag1("NN")) return "NN";
		if (reader.nextWord1("point")) return "NN";
		if (reader.prevTag1("DT") && reader.word === "finding") return "NN";
		if (reader.prevTag1("DT") && reader.word === "weakening" && reader.nextTag1("NN")) return "NN";
		if (reader.prevWord2("if")) return "NN";
		if (reader.prevTag1("NN") && reader.word === "selling" && reader.nextTag1("IN")) return "NN";
		if (reader.nextWord1("at") && reader.nextWord2("its")) return "NN";
		if (reader.word === "clearing" && reader.nextTag1("NNS")) return "NN";
		if (reader.prevWord2("``") && reader.prevWord1("The")) return "NN";
		if (reader.prevWord1("a") && reader.word === "working") return "NN";
		if (reader.prevTag1("JJR") && reader.nextTag1("NN")) return "NN";
		if (reader.prevTag1("NN") && reader.word === "buying" && reader.nextTag1(",")) return "NN";
		if (reader.prevTag1("NNP") && reader.nextTag1("VBZ")) return "NN";
		if (reader.word === "acting" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevWord1("most")) {
			if (reader.prevTag2("IN") && reader.prevTag1("JJS")) return "VBG";
			return "JJ";
		}
		if (reader.prevWord1("as") && reader.nextWord1("as")) return "JJ";
		if (reader.prevWord2("of") && reader.prevWord1("the") && reader.word === "underlying") return "JJ";
		if (reader.word === "coming" && reader.nextTag1("NN") && reader.nextTag2("IN")) return "JJ";
		if (reader.word === "underlying" && reader.nextWord1("bill")) return "JJ";
		if (reader.prevWord2("as") && reader.prevWord1("a")) {
			if (reader.nextWord2("of")) return "VBG";
			return "JJ";
		}
		if (reader.word === "rolling" && reader.nextWord1("bearings")) return "JJ";
		return "VBG";
	}
	if (reader.tag === "VBD") {
		if (reader.prevTag1("VBZ")) {
			if (reader.prevTag1("VBZ") && reader.word === "were") return "VBD";
			if (reader.prevTag1("VBZ") && reader.word === "was") return "VBD";
			if (reader.word === "got") return "VBD";
			if (reader.word === "said" && reader.nextWord1("the")) return "VBD";
			if (reader.word === "added" && reader.nextTag1("NN") && reader.nextTag2("IN")) return "JJ";
			if (reader.prevWord1("has") && reader.word === "had" && reader.nextWord1("to")) return "VBD";
			if (reader.word === "said" && reader.nextTag1("IN") && reader.nextTag2("PRP$")) return "VBD";
			if (reader.word === "said" && reader.nextWord2("'s")) return "VBD";
			if (reader.prevWord1("has") && reader.word === "had" && reader.nextWord1("an")) return "VBD";
			if (reader.prevWord2("Union")) return "VBD";
			if (reader.prevWord1("has") && reader.word === "had" && reader.nextWord1("its")) return "VBD";
			return "VBN";
		}
		if (reader.prevTag1("VBP")) {
			if (reader.word === "was") return "VBD";
			if (reader.prevWord2("We") && reader.word === "had") return "VBD";
			if (reader.prevWord2("I") && reader.prevWord1("'ve") && reader.word === "had") return "VBD";
			if (reader.prevTag1("VBP") && reader.word === "said" && reader.nextTag1("NNP")) return "VBD";
			if (reader.word === "said" && reader.nextTag1(",") && reader.nextTag2("``")) return "VBD";
			if (reader.suffixL3("ere")) return "VBD";
			if (reader.word === "said" && reader.nextTag1("IN") && reader.nextTag2("NNS")) return "VBD";
			return "VBN";
		}
		if (reader.prevTag1("VBD")) {
			if (reader.prevTag1("VBD") && reader.word === "was") return "VBD";
			if (reader.suffixL3("ere")) return "VBD";
			if (reader.word === "had" && reader.nextWord1("been")) return "VBD";
			if (reader.prevWord2("we")) return "VBD";
			if (reader.prevWord2("he") && reader.prevWord1("said")) return "VBD";
			return "VBN";
		}
		if (reader.prevWord1("be")) return "VBN";
		if (reader.prevWord2("has")) {
			if (reader.word === "had" && reader.nextWord1("a")) return "VBD";
			if (reader.prevWord1("n't") && reader.nextWord1("his")) return "VBD";
			return "VBN";
		}
		if (reader.prevWord2("have")) {
			if (reader.prevWord1("all") && reader.nextWord1("to")) return "VBD";
			if (reader.prevTag1("VBN") && reader.word === "had") return "VBD";
			if (reader.prevWord2("have") && reader.prevWord1("n't") && reader.word === "had") return "VBD";
			return "VBN";
		}
		if (reader.nextWord1("by")) {
			if (reader.suffixL3("ell")) return "VBD";
			if (reader.nextTag2("RB")) return "VBD";
			if (reader.nextTag1("IN") && reader.nextTag2("$")) return "VBD";
			if (reader.word === "responded" && reader.nextTag1("IN")) return "VBD";
			if (reader.word === "declined" && reader.nextTag1("IN") && reader.nextTag2("CD")) return "VBD";
			if (reader.suffixL3("ose")) return "VBD";
			if (reader.prevWord1("earnings") && reader.word === "declined" && reader.nextWord1("by")) return "VBD";
			if (reader.suffixL3("gan")) return "VBD";
			if (reader.nextWord2("5")) return "VBD";
			if (reader.word === "stopped") return "VBD";
			if (reader.prevTag2("IN") && reader.prevTag1("VBG")) return "VBD";
			return "VBN";
		}
		if (reader.prevTag2("VBD") && reader.prevTag1("RB")) return "VBN";
		if (reader.prevWord1("the")) {
			if (reader.suffixL4("")) {
				if (reader.suffixL2("st")) return "JJ";
				return "NN";
			}
			if (reader.suffixL3("ced")) return "JJ";
			if (reader.prevWord1("the") && reader.word === "wound") return "NN";
			if (reader.prevWord2("with")) return "JJ";
			if (reader.suffixL3("ned")) return "JJ";
			if (reader.prevWord2("over") && reader.prevWord1("the")) return "JJ";
			return "VBN";
		}
		if (reader.word === "ended" && reader.nextTag1("NNP") && reader.nextTag2("CD")) {
			if (reader.nextWord2("13")) return "VBD";
			if (reader.prevWord2(",") && reader.word === "ended") return "VBD";
			if (reader.prevWord2("third")) return "VBD";
			if (reader.prevWord2("12")) return "VBD";
			return "VBN";
		}
		if (reader.prevWord1("been")) return "VBN";
		if (reader.prevTag2("VBP") && reader.prevTag1("RB")) return "VBN";
		if (reader.prevWord1("previously") && reader.word === "announced") return "VBN";
		if (reader.prevWord1("a")) {
			if (reader.suffixL4("")) return "NN";
			if (reader.prevTag2("VBG") && reader.prevTag1("DT")) return "JJ";
			return "VBN";
		}
		if (reader.prevWord2("is")) {
			if (reader.nextWord1("n't")) return "VBD";
			return "VBN";
		}
		if (reader.prevWord1("an")) {
			if (reader.prevTag2("IN") && reader.prevTag1("DT") && reader.word === "added") return "VBN";
			return "JJ";
		}
		if (reader.prevWord2("n't")) {
			if (reader.suffixL4("")) return "VBD";
			return "VBN";
		}
		if (reader.word === "continued" && reader.nextTag1("NN")) {
			if (reader.prevTag1("``") && reader.word === "continued" && reader.nextTag1("NN")) return "VBN";
			if (reader.nextWord1("use")) return "VBN";
			if (reader.word === "continued" && reader.nextTag1("NN") && reader.nextTag2("NN")) return "VBN";
			if (reader.word === "continued" && reader.nextWord1("yesterday")) return "VBD";
			return "JJ";
		}
		if (reader.prevWord1("previously") && reader.word === "reported") {
			if (reader.prevTag2("NNP") && reader.prevTag1("RB")) return "VBD";
			return "VBN";
		}
		if (reader.prevWord1("to")) return "VB";
		if (reader.prevTag2(",") && reader.prevTag1("VBG")) return "VBN";
		if (reader.word === "ordered" && reader.nextTag1("TO")) return "VBN";
		if (reader.word === "included" && reader.nextWord1("in")) return "VBN";
		if (reader.prevWord2("12") && reader.prevWord1("months")) return "VBN";
		if (reader.word === "advanced" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag1("MD")) {
			if (reader.prevWord1("'d")) return "VBN";
			if (reader.nextWord1("to") && reader.nextWord2("reduce")) return "VBD";
			return "VB";
		}
		if (reader.prevTag1("JJ") && reader.word === "hit") return "NN";
		if (reader.word === "contained" && reader.nextTag1("IN")) return "VBN";
		if (reader.word === "lost" && reader.nextTag1("IN") && reader.nextTag2("DT")) {
			if (reader.prevTag1("PRP") && reader.nextTag1("IN")) return "VBD";
			return "VBN";
		}
		if (reader.prevTag1("CD") && reader.word === "asked") return "VBN";
		if (reader.word === "advanced" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevTag1("JJ") && reader.word === "thought") return "NN";
		if (reader.prevWord2("be")) {
			if (reader.nextTag2("IN")) return "VBD";
			return "VBN";
		}
		if (reader.word === "expressed" && reader.nextTag1("IN")) return "VBN";
		if (reader.word === "signed" && reader.nextTag1("IN") && reader.nextTag2("DT")) return "VBN";
		if (reader.word === "continued" && reader.nextTag1("NNS")) return "VBN";
		if (reader.prevTag1("PRP$") && reader.nextTag1("NN")) {
			if (reader.nextWord2("is")) return "JJ";
			return "VBN";
		}
		if (reader.word === "reported" && reader.nextWord1("for")) return "VBN";
		if (reader.word === "thought" && reader.nextTag1("TO")) return "VBN";
		if (reader.word === "earned" && reader.nextTag1("IN")) return "VBN";
		if (reader.prevTag2("PRP") && reader.prevTag1("POS")) return "VBN";
		if (reader.prevWord1("for")) {
			if (reader.prevTag2("NN")) return "JJ";
			return "VBN";
		}
		if (reader.prevTag2("") && reader.prevTag1("IN")) return "VBN";
		if (reader.prevWord2("") && reader.prevWord1("The")) return "VBN";
		if (reader.prevWord2("had")) return "VBN";
		if (reader.word === "reflected" && reader.nextWord1("in")) return "VBN";
		if (reader.word === "spent" && reader.nextWord1("on")) return "VBN";
		if (reader.prevWord1("of")) {
			if (reader.prevTag1("IN") && reader.nextTag1("NN")) return "VBN";
			if (reader.prevTag1("IN") && reader.word === "thought" && reader.nextTag1("CC")) return "NN";
			return "JJ";
		}
		if (reader.prevTag2("MD")) return "VB";
		if (reader.word === "added" && reader.nextTag1("NN") && reader.nextTag2(".")) return "VBN";
		if (reader.prevTag1("WRB") && reader.word === "noted" && reader.nextTag1(",")) return "VBN";
		if (reader.prevTag1("NNS") && reader.word === "continued" && reader.nextTag1("IN")) return "VBN";
		if (reader.word === "reported" && reader.nextWord1("in") && reader.nextWord2("the")) return "VBN";
		if (reader.prevWord1("first") && reader.nextWord1("in")) return "VBN";
		if (reader.prevTag1("NN") && reader.word === "added" && reader.nextTag1("TO")) return "VBN";
		if (reader.prevTag1("NN") && reader.word === "sent" && reader.nextTag1("TO")) return "VBN";
		if (reader.prevTag2("NN") && reader.prevTag1("POS")) return "VBN";
		if (reader.prevWord2("") && reader.prevWord1("Having")) return "VBN";
		if (reader.prevWord1("shares") && reader.word === "bought") return "VBN";
		if (reader.word === "attributed" && reader.nextWord1("to")) return "VBN";
		if (reader.prevWord1("being") && reader.word === "raised") return "VBN";
		if (reader.word === "found" && reader.nextWord1("in")) return "VBN";
		if (reader.prevWord1("from")) return "VBN";
		if (reader.word === "raised" && reader.nextWord1("in")) return "VBN";
		return "VBD";
	}
	if (reader.tag === "``") return "``";
	if (reader.tag === "VBN") {
		if (reader.prevTag1("NNP")) {
			if (reader.prevTag2("NNP") && reader.prevTag1("NNP") && reader.word === "OFFERED") return "VBN";
			if (reader.suffixL2("en")) return "VBN";
			if (reader.prevTag2("CD")) return "VBN";
			if (reader.prevTag1("NNP") && reader.word === "made" && reader.nextTag1("IN")) return "VBN";
			if (reader.prevWord2("the") && reader.word === "set") return "NN";
			if (reader.prevTag1("NNP") && reader.word === "based" && reader.nextTag1("IN")) return "VBN";
			if (reader.word === "owned" && reader.nextWord1("by")) return "VBN";
			if (reader.nextWord1("shortly")) return "VBN";
			if (reader.word === "valued" && reader.nextWord1("at")) return "VBN";
			if (reader.nextWord2("last")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("PRP")) {
			if (reader.prevWord1("they") && reader.word === "set") return "VBP";
			if (reader.prevWord1("them")) return "VBN";
			if (reader.suffixL2("en")) return "VBN";
			if (reader.prevWord2("get") && reader.prevWord1("it")) return "VBN";
			if (reader.suffixL4("nown")) return "VBN";
			if (reader.prevWord2("finds") && reader.prevWord1("itself")) return "VBN";
			if (reader.prevWord1("him")) return "VBN";
			if (reader.prevWord1("himself")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("DT")) {
			if (reader.prevWord1("something") && reader.word === "called" && reader.nextWord1("the")) return "VBN";
			if (reader.suffixL2("en")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("WP")) return "VBD";
		if (reader.prevTag1("NNS") && reader.nextTag1("DT")) {
			if (reader.nextWord1("each") && reader.nextWord2("year")) return "VBN";
			return "VBD";
		}
		if (reader.prevWord1("that")) {
			if (reader.prevTag2("VBD") && reader.prevTag1("IN")) return "VBN";
			if (reader.nextTag1("IN") && reader.nextTag2("$")) return "VBN";
			if (reader.prevWord2("and")) return "VBN";
			if (reader.word === "changed" && reader.nextTag1("NNS") && reader.nextTag2(",")) return "VBN";
			if (reader.suffixL2("en")) return "VBN";
			if (reader.suffixL4("ined")) return "VBN";
			if (reader.word === "damaged") return "VBN";
			if (reader.suffixL4("ched")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1(",") && reader.nextTag1("DT")) {
			if (reader.word === "given") return "VBN";
			if (reader.word === "considered" && reader.nextWord1("the")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag2("NNP") && reader.prevTag1("RB")) {
			if (reader.nextWord1("by")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("WDT")) return "VBD";
		if (reader.prevTag2("PRP") && reader.prevTag1("RB")) {
			if (reader.prevWord2("it") && reader.word === "been") return "VBN";
			return "VBD";
		}
		if (reader.prevWord2("The")) {
			if (reader.prevTag1("RB")) return "VBN";
			if (reader.suffixL4("cted")) return "VBN";
			if (reader.nextTag1("IN") && reader.nextTag2("CD")) return "VBN";
			if (reader.word === "estimated" && reader.nextWord2("the")) return "VBN";
			return "VBD";
		}
		if (reader.word === "increased" && reader.nextTag1("CD")) return "VBD";
		if (reader.prevTag1("NN") && reader.nextTag1("JJ")) {
			if (reader.nextTag2("TO")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("CC") && reader.nextTag1("DT")) {
			if (reader.suffixL2("en")) return "VBN";
			if (reader.word === "set" && reader.nextTag1("DT") && reader.nextTag2("NN")) return "VB";
			if (reader.prevWord2("stocks") && reader.prevWord1("and")) return "VBP";
			return "VBD";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("PRP$")) return "VBD";
		if (reader.prevTag1("TO")) {
			if (reader.suffixL3("sed")) return "VBN";
			if (reader.suffixL3("ned")) return "VBN";
			if (reader.suffixL3("ted")) {
				if (reader.prevTag2("NNS") && reader.prevTag1("TO")) return "JJ";
				return "VBN";
			}
			if (reader.suffixL3("ved")) return "VBN";
			if (reader.nextTag2("VBN")) return "JJ";
			return "VB";
		}
		if (reader.prevTag2("NN") && reader.prevTag1("RB")) {
			if (reader.nextWord1("by")) return "VBN";
			if (reader.nextWord1("in")) return "VBN";
			if (reader.prevWord1("ever")) return "VBN";
			if (reader.nextWord1("at")) return "VBN";
			if (reader.prevWord2("%")) return "VBN";
			if (reader.nextWord1("for") && reader.nextWord2("the")) return "VBN";
			if (reader.prevWord1("once") && reader.word === "used" && reader.nextWord1("to")) return "VBN";
			if (reader.nextWord1("to") && reader.nextWord2("the")) return "VBN";
			if (reader.suffixL2("en")) return "VBN";
			if (reader.prevTag1("RB") && reader.word === "considered") return "VBN";
			if (reader.prevWord1("already") && reader.nextWord1("to")) return "VBN";
			if (reader.nextTag2("VBZ")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("NNS")) return "VBD";
		if (reader.prevWord2(",") && reader.prevWord1("and")) {
			if (reader.prevWord1("and") && reader.nextWord1("with")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNPS")) {
			if (reader.nextWord2("World")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("NN")) {
			if (reader.suffixL4("ured")) return "JJ";
			if (reader.nextTag2("CC")) return "VBN";
			if (reader.prevWord2("a") && reader.word === "called") return "VBN";
			if (reader.nextWord1("yesterday") && reader.nextWord2("by")) return "VBN";
			if (reader.prevTag2("TO")) return "VBN";
			if (reader.prevTag2("VBG") && reader.prevTag1("NN")) return "VBN";
			if (reader.prevTag2("VBN")) return "VBN";
			if (reader.prevWord2("the") && reader.prevWord1("closing") && reader.word === "listed") return "JJ";
			return "VBD";
		}
		if (reader.prevTag1("MD")) {
			if (reader.prevWord1("'d")) return "VBN";
			return "VB";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("PRP")) return "VBD";
		if (reader.prevTag1(",") && reader.nextTag1("PRP$")) return "VBD";
		if (reader.prevTag1("NNS") && reader.nextTag1("PRP$")) return "VBD";
		if (reader.prevTag1("NN") && reader.nextTag1("CD")) return "VBD";
		if (reader.prevTag1("NNS") && reader.nextTag1("NN")) {
			if (reader.prevTag2("JJ") && reader.prevTag1("NNS") && reader.word === "called") return "VBN";
			if (reader.word === "released" && reader.nextWord1("yesterday")) return "VBN";
			if (reader.prevWord1("companies")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("JJ")) {
			if (reader.nextWord2("week")) return "VBN";
			if (reader.suffixL2("en")) return "VBN";
			if (reader.nextWord1("full")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("NNP")) {
			if (reader.prevTag1("NNS") && reader.word === "called" && reader.nextTag1("NNP")) return "VBN";
			if (reader.prevTag1("NNS") && reader.word === "issued" && reader.nextTag1("NNP")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("PRP")) return "VBD";
		if (reader.word === "set" && reader.nextWord1("of")) return "NN";
		if (reader.prevTag1("CC") && reader.nextTag1("PRP")) return "VBD";
		if (reader.prevTag1("NNS") && reader.word === "increased") {
			if (reader.word === "increased" && reader.nextTag1("IN") && reader.nextTag2("CD")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("DT") && reader.nextTag1("DT")) return "VBD";
		if (reader.prevWord1("more")) {
			if (reader.suffixL4("fied")) return "VBN";
			if (reader.prevTag2("NNP")) return "VBN";
			return "JJ";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("RP")) {
			if (reader.prevTag2("PRP$")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("JJR")) return "VBD";
		if (reader.prevTag2("NNP") && reader.prevTag1("JJ")) return "VBD";
		if (reader.prevTag1("CC") && reader.nextTag1("PRP$")) return "VBD";
		if (reader.prevTag1("CC") && reader.nextTag1("NNP")) return "VBD";
		if (reader.prevTag1("NN") && reader.nextTag1("RP")) {
			if (reader.nextWord1("out") && reader.nextWord2("by")) return "VBN";
			if (reader.nextTag2("RB")) return "VBN";
			if (reader.nextWord1("up") && reader.nextWord2("for")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("CD") && reader.nextTag1("DT")) return "VBD";
		if (reader.prevTag2("WP") && reader.prevTag1("RB")) return "VBD";
		if (reader.prevWord2("at") && reader.word === "expected") return "JJ";
		if (reader.prevTag1("NN") && reader.word === "increased") return "VBD";
		if (reader.prevTag1(",") && reader.nextTag1("PRP")) {
			if (reader.prevTag1(",") && reader.word === "provided") return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("CD")) {
			if (reader.word === "aged" && reader.nextTag1("CD")) return "VBN";
			if (reader.suffixL4("ated")) return "JJ";
			return "VBD";
		}
		if (reader.prevWord1("government")) return "VBD";
		if (reader.prevTag2("MD") && reader.prevTag1("RB")) return "VB";
		if (reader.prevTag2("WDT") && reader.prevTag1("RB")) return "VBD";
		if (reader.prevTag1(",") && reader.nextTag1("CD")) return "VBD";
		if (reader.prevWord2("the") && reader.prevWord1("company")) return "VBD";
		if (reader.prevTag2("POS") && reader.prevTag1("NNS")) return "VBD";
		if (reader.prevTag1("NNS") && reader.nextTag1("$")) return "VBD";
		if (reader.prevTag1("VB") && reader.nextTag1("NNS")) {
			if (reader.suffixL3("red")) return "VBN";
			return "JJ";
		}
		if (reader.word === "insured" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevTag1("NN") && reader.nextTag1("$")) return "VBD";
		if (reader.prevTag2(".")) return "VBD";
		if (reader.word === "estimated" && reader.nextWord1("that")) {
			if (reader.prevTag2("PRP")) return "VBN";
			if (reader.prevTag1("VBP") && reader.word === "estimated" && reader.nextTag1("IN")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1(",") && reader.nextTag1("RP")) {
			if (reader.nextWord2("in")) return "VBN";
			return "VBD";
		}
		if (reader.prevWord1(",") && reader.word === "proposed") {
			if (reader.nextWord1("by")) return "VBN";
			return "VBD";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("VBG")) return "VBD";
		if (reader.word === "alleged" && reader.nextTag1("JJ")) return "JJ";
		if (reader.prevTag1("DT") && reader.word === "required" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag1("DT") && reader.word === "merged" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag2("NNP") && reader.prevTag1("``")) return "VBD";
		if (reader.prevWord1("also") && reader.nextWord1("the")) return "VBD";
		if (reader.prevWord1("court")) return "VBD";
		if (reader.prevWord1("others")) return "VBD";
		if (reader.prevWord1("and") && reader.nextWord1("at")) return "VBD";
		if (reader.prevTag1("NN") && reader.word === "led" && reader.nextTag1("TO")) return "VBD";
		if (reader.prevTag2(":") && reader.prevTag1("CC")) return "VBD";
		if (reader.nextWord1("down") && reader.nextWord2("the")) return "VBD";
		if (reader.prevWord1("family")) return "VBD";
		if (reader.prevWord1("and") && reader.word === "reduced") return "JJ";
		if (reader.word === "held" && reader.nextTag1("NN") && reader.nextTag2("IN")) return "JJ";
		if (reader.prevWord2("of") && reader.prevWord1("a")) return "JJ";
		if (reader.word === "extended" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevWord1("remains") && reader.nextWord1("to")) return "JJ";
		if (reader.word === "proposed" && reader.nextWord1("acquisition")) return "JJ";
		if (reader.prevWord2("million") && reader.prevWord1("of")) return "JJ";
		if (reader.prevWord1("with") && reader.word === "proven") return "JJ";
		if (reader.prevWord2("In") && reader.prevWord1("a")) return "JJ";
		if (reader.word === "expected" && reader.nextTag1("NN") && reader.nextTag2("NN")) return "JJ";
		if (reader.prevWord2("because") && reader.prevWord1("of")) {
			if (reader.prevWord2("because") && reader.word === "prolonged") return "VBN";
			return "JJ";
		}
		if (reader.prevWord1("go")) return "JJ";
		if (reader.nextWord1("area")) return "JJ";
		if (reader.prevWord2("does") && reader.prevWord1("n't")) return "VB";
		if (reader.prevWord1("helped")) return "VB";
		if (reader.prevWord1("the") && reader.word === "left") return "NN";
		if (reader.prevTag1("NNS") && reader.word === "believed" && reader.nextTag1("IN")) return "VBD";
		if (reader.prevTag2("NNP") && reader.prevTag1(",") && reader.word === "called") return "VBD";
		if (reader.prevWord2("however") && reader.prevWord1(",")) return "VBD";
		if (reader.word === "sought" && reader.nextTag1("TO") && reader.nextTag2("VB")) return "VBD";
		if (reader.prevTag1("NNS") && reader.word === "returned") return "VBD";
		if (reader.prevWord1("yesterday")) return "VBD";
		if (reader.prevTag1("NN") && reader.nextTag1("JJR")) return "VBD";
		if (reader.prevTag1("NNS") && reader.word === "managed" && reader.nextTag1("TO")) return "VBD";
		if (reader.word === "caused" && reader.nextTag1("NNP")) return "VBD";
		if (reader.prevTag1("NN") && reader.word === "returned") return "VBD";
		if (reader.prevWord1("and") && reader.word === "sought") return "VBD";
		if (reader.prevWord1("police")) return "VBD";
		if (reader.word === "produced" && reader.nextTag1("JJ")) return "VBD";
		if (reader.prevTag1("IN") && reader.word === "tripled" && reader.nextTag1("TO")) return "VBD";
		if (reader.prevTag1("NN") && reader.word === "changed") return "VBD";
		if (reader.prevTag1("NN") && reader.word === "followed") return "VBD";
		if (reader.word === "filed" && reader.nextWord1("for")) {
			if (reader.prevTag1("VBP") && reader.word === "filed") return "VBN";
			return "VBD";
		}
		if (reader.prevWord1(",") && reader.word === "left") return "VBD";
		if (reader.prevTag1(",") && reader.word === "offered" && reader.nextTag1("$")) return "VBD";
		if (reader.prevTag1("NN") && reader.word === "acquired") return "VBD";
		if (reader.prevWord1(",") && reader.nextWord1("financing")) return "VBD";
		if (reader.prevWord1("lawmakers")) return "VBD";
		if (reader.prevWord1("traders")) return "VBD";
		if (reader.prevTag1(",") && reader.word === "believed") return "VBD";
		if (reader.prevWord1("giant")) return "VBD";
		if (reader.prevTag1("NN") && reader.word === "settled") return "VBD";
		if (reader.prevTag1("NN") && reader.word === "determined") return "VBD";
		if (reader.prevWord1("eventually")) return "VBD";
		if (reader.prevTag1("NN") && reader.word === "offered" && reader.nextTag1("TO")) return "VBD";
		if (reader.prevTag1("DT") && reader.word === "calculated") return "JJ";
		if (reader.word === "hidden" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag1("RB") && reader.word === "damaged" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevTag1("CC") && reader.word === "related") {
			if (reader.nextWord2(",")) return "VBN";
			return "JJ";
		}
		if (reader.prevTag2("VB") && reader.prevTag1("JJR")) return "JJ";
		if (reader.word === "unified" && reader.nextTag1("NN") && reader.nextTag2("IN")) return "JJ";
		if (reader.prevWord1("became") && reader.word === "convinced") return "JJ";
		if (reader.prevWord2("before") && reader.prevWord1("the") && reader.word === "scheduled") return "JJ";
		if (reader.prevTag1("JJS") && reader.word === "experienced") return "JJ";
		if (reader.prevTag2("PRP") && reader.prevTag1("VBP") && reader.word === "worried") return "JJ";
		if (reader.nextWord1("restructuring")) return "JJ";
		if (reader.prevTag1("IN") && reader.word === "improved" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevWord2("that") && reader.prevWord1("a")) return "JJ";
		if (reader.word === "diminished" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevWord1("two")) return "JJ";
		if (reader.word === "crowded" && reader.nextTag1("NN")) return "JJ";
		if (reader.nextWord1("nation")) return "JJ";
		if (reader.prevWord1("so")) {
			if (reader.prevWord2(",")) return "VBN";
			return "JJ";
		}
		if (reader.prevWord2("is") && reader.prevWord1("the")) return "JJ";
		if (reader.prevWord2("the") && reader.prevWord1("widely") && reader.word === "used") return "JJ";
		if (reader.prevTag2("JJ") && reader.prevTag1("CC")) {
			if (reader.suffixL3("red")) return "VBN";
			if (reader.nextWord2("a")) return "VBN";
			return "JJ";
		}
		if (reader.word === "combined" && reader.nextWord1("companies")) return "JJ";
		if (reader.prevTag2("VBZ") && reader.prevTag1("PRP$")) return "JJ";
		if (reader.prevWord2("such")) return "JJ";
		if (reader.word === "retired" && reader.nextTag1("NN") && reader.nextTag2("IN")) return "JJ";
		if (reader.prevTag1("RB") && reader.word === "prepared" && reader.nextTag1("TO")) return "JJ";
		if (reader.prevTag2("DT") && reader.prevTag1("JJS")) {
			if (reader.nextTag2("NN")) return "VBN";
			return "JJ";
		}
		if (reader.prevWord1("the") && reader.nextWord1(",")) return "JJ";
		if (reader.prevTag2("VBD") && reader.prevTag1("DT") && reader.word === "estimated") return "JJ";
		if (reader.prevWord1("little") && reader.nextWord1(".")) return "JJ";
		return "VBN";
	}
	if (reader.tag === "POS") {
		if (reader.prevTag1("PRP") && reader.word === "'s") return "VBZ";
		if (reader.word === "'s" && reader.nextTag1("DT")) return "VBZ";
		if (reader.prevWord1("that") && reader.word === "'s") return "VBZ";
		if (reader.prevWord1("That") && reader.word === "'s") return "VBZ";
		if (reader.prevTag1("EX") && reader.word === "'s") return "VBZ";
		if (reader.prevTag1("WP") && reader.word === "'s") return "VBZ";
		if (reader.prevTag1("NN") && reader.nextTag1("IN")) return "VBZ";
		if (reader.nextTag1("RB") && reader.nextTag2("VB")) return "PRP";
		return "POS";
	}
	if (reader.tag === "''") return "''";
	if (reader.tag === "VBP") {
		if (reader.prevTag1("MD")) return "VB";
		if (reader.prevTag1("TO")) return "VB";
		if (reader.prevWord1("n't")) return "VB";
		if (reader.prevTag2("MD")) {
			if (reader.prevWord2("can") && reader.word === "are") return "VBP";
			return "VB";
		}
		if (reader.prevWord1("the")) return "NN";
		if (reader.prevWord1("not")) return "VB";
		if (reader.prevWord2("n't")) return "VB";
		if (reader.word === "need" && reader.nextTag1("IN")) {
			if (reader.prevTag1("PRP") && reader.word === "need" && reader.nextTag1("IN")) return "VBP";
			return "NN";
		}
		if (reader.prevWord1("does")) return "VB";
		if (reader.prevTag1(",") && reader.word === "say" && reader.nextTag1(",")) return "VB";
		if (reader.prevWord1("and") && reader.word === "say") return "VB";
		if (reader.prevWord1("did")) return "VB";
		if (reader.prevWord1("do")) return "VB";
		if (reader.prevWord1("a")) return "NN";
		if (reader.prevWord2("make")) return "VB";
		if (reader.word === "need" && reader.nextTag1("RB") && reader.nextTag2("VB")) return "MD";
		if (reader.prevWord2("does")) return "VB";
		if (reader.prevWord2("Do")) return "VB";
		if (reader.prevTag1("PRP$")) return "NN";
		if (reader.prevTag1("POS")) return "NN";
		if (reader.prevTag1("JJ") && reader.nextTag1(".")) return "NN";
		if (reader.prevTag1("IN") && reader.word === "regard") return "NN";
		if (reader.prevWord2("not")) return "VB";
		if (reader.prevWord2("do")) return "VB";
		if (reader.prevTag1("DT") && reader.word === "wonder") return "NN";
		if (reader.prevTag1("VB") && reader.word === "stand") return "VB";
		if (reader.prevTag1("CC") && reader.word === "do" && reader.nextTag1("DT")) return "VB";
		if (reader.word === "do" && reader.nextTag1("JJR")) return "VB";
		if (reader.nextWord1("?")) return "VB";
		if (reader.prevWord1("me")) return "VB";
		if (reader.prevTag2("TO") && reader.prevTag1("RB")) return "VB";
		if (reader.prevWord1("no")) return "NN";
		if (reader.prevWord2("a")) {
			if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "are") return "VBP";
			return "NN";
		}
		if (reader.prevWord1("is")) return "JJ";
		if (reader.prevTag1("NNP") && reader.word === "Am" && reader.nextTag1("NNP")) return "NNP";
		return "VBP";
	}
	if (reader.tag === "WDT") return "WDT";
	if (reader.tag === "JJ") {
		if (reader.prevTag1("DT") && reader.nextTag1("IN")) {
			if (reader.prevTag1("DT") && reader.word === "first") return "JJ";
			if (reader.suffixL2("me")) return "JJ";
			if (reader.suffixL3("her")) return "JJ";
			if (reader.word === "last" && reader.nextTag1("IN")) return "JJ";
			if (reader.word === "third" && reader.nextTag1("IN") && reader.nextTag2("DT")) return "JJ";
			if (reader.prevTag1("DT") && reader.word === "few") return "JJ";
			if (reader.prevTag1("DT") && reader.word === "fourth") return "JJ";
			if (reader.prevWord1("a") && reader.word === "little") {
				if (reader.nextWord1("for")) return "RB";
				return "JJ";
			}
			if (reader.word === "high" && reader.nextTag1("IN") && reader.nextTag2("CD")) return "JJ";
			if (reader.prevWord2("and") && reader.prevWord1("the") && reader.word === "third") return "JJ";
			if (reader.prevTag1("DT") && reader.word === "poor" && reader.nextTag1("IN")) return "JJ";
			if (reader.prevWord1("the") && reader.nextWord1("with")) return "JJ";
			if (reader.word === "high" && reader.nextWord2("$")) return "JJ";
			if (reader.prevWord2("from") && reader.prevWord1("a") && reader.word === "low") return "JJ";
			if (reader.prevWord1("those")) return "JJ";
			if (reader.word === "high" && reader.nextWord2("the")) return "JJ";
			if (reader.prevTag2("RB") && reader.prevTag1("DT") && reader.word === "third") return "JJ";
			if (reader.prevWord1("all")) return "JJ";
			if (reader.prevWord1("each")) return "JJ";
			if (reader.nextWord1("by")) return "JJ";
			if (reader.prevTag1("DT") && reader.word === "Republican") return "NNP";
			return "NN";
		}
		if (reader.word === "much" && reader.nextTag1("JJR")) return "RB";
		if (reader.word === "Soviet" && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevTag1("MD")) {
			if (reader.nextTag1("VB")) {
				if (reader.prevTag2("PRP") && reader.prevTag1("MD") && reader.word === "further") return "RBR";
				return "RB";
			}
			if (reader.suffixL3("ely")) return "RB";
			if (reader.suffixL4("ther")) {
				if (reader.prevWord1("would")) return "RB";
				if (reader.nextTag2("JJ")) return "RB";
				return "RBR";
			}
			if (reader.nextTag1("NNS") && reader.nextTag2("NN")) return "JJ";
			return "VB";
		}
		if (reader.word === "British" && reader.nextTag1("NNP")) {
			if (reader.nextWord1("Deloitte")) return "JJ";
			return "NNP";
		}
		if (reader.prevTag1("JJ") && reader.nextTag1("IN")) {
			if (reader.word === "such" && reader.nextWord1("as")) return "JJ";
			if (reader.prevWord1("distant")) return "JJ";
			if (reader.prevWord1("little")) return "JJ";
			if (reader.prevWord2("was")) return "JJ";
			if (reader.word === "low" && reader.nextWord1("of")) return "JJ";
			if (reader.prevTag1("JJ") && reader.word === "late") return "RB";
			if (reader.prevTag1("JJ") && reader.word === "Republican" && reader.nextTag1("IN")) return "NNP";
			return "NN";
		}
		if (reader.prevTag1("TO") && reader.nextTag1("DT")) return "VB";
		if (reader.prevTag1("JJ") && reader.nextTag1(".")) {
			if (reader.word === "outstanding" && reader.nextWord2("")) return "JJ";
			if (reader.suffixL3("tic")) return "JJ";
			if (reader.prevWord1("little") && reader.nextWord1(".")) return "JJ";
			if (reader.word === "Republican" && reader.nextWord1(".")) return "NNP";
			return "NN";
		}
		if (reader.prevTag1("DT") && reader.nextTag1(".")) {
			if (reader.word === "other" && reader.nextTag1(".")) return "JJ";
			if (reader.suffixL2("me")) return "JJ";
			if (reader.suffixL3("ese")) return "NNPS";
			if (reader.prevWord1("a") && reader.word === "little") return "JJ";
			if (reader.word === "latter" && reader.nextTag1(".") && reader.nextTag2("")) return "JJ";
			if (reader.prevTag1("DT") && reader.word === "first") return "JJ";
			if (reader.suffixL3("ing")) return "JJ";
			return "NN";
		}
		if (reader.nextTag1("VBD")) {
			if (reader.suffixL4("irst")) {
				if (reader.prevWord1("at")) return "JJ";
				if (reader.prevTag1("DT") && reader.nextTag1("VBD")) return "JJ";
				return "RB";
			}
			if (reader.suffixL3("ong")) return "RB";
			if (reader.suffixL2("ny")) return "JJ";
			if (reader.prevWord1("a")) return "JJ";
			if (reader.nextWord1("hit")) return "JJ";
			if (reader.prevTag2("NN") && reader.prevTag1("IN")) return "JJ";
			if (reader.word === "outstanding" && reader.nextTag1("VBD")) return "JJ";
			if (reader.suffixL3("her")) {
				if (reader.word === "further") {
					if (reader.prevTag1("VBD")) return "RBR";
					return "RB";
				}
				return "JJ";
			}
			if (reader.prevTag1("CC") && reader.nextTag1("VBD")) return "JJ";
			if (reader.nextWord1("thought")) return "JJ";
			if (reader.word === "French") return "NNP";
			if (reader.word === "Chinese" && reader.nextTag1("VBD")) return "NNP";
			if (reader.prevTag1("RB")) {
				if (reader.suffixL4("")) return "RB";
				return "JJ";
			}
			if (reader.prevTag1(",") && reader.word === "few" && reader.nextTag1("VBD")) return "JJ";
			if (reader.prevWord1("in") && reader.word === "general") return "JJ";
			if (reader.prevWord2("Express") && reader.prevWord1("said") && reader.word === "net") return "JJ";
			if (reader.suffixL2("xt")) return "JJ";
			if (reader.prevWord2("unit") && reader.prevWord1(",") && reader.word === "net") return "JJ";
			if (reader.word === "old") return "JJ";
			if (reader.suffixL3("tic")) return "JJ";
			return "NN";
		}
		if (reader.word === "European" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "long" && reader.nextTag1("VBN")) return "RB";
		if (reader.word === "early" && reader.nextTag1("IN")) return "RB";
		if (reader.nextTag1("POS")) {
			if (reader.word === "other" && reader.nextWord1("'s")) return "JJ";
			return "NN";
		}
		if (reader.nextWord1("Airways")) return "NNP";
		if (reader.word === "long" && reader.nextTag1("IN")) {
			if (reader.nextTag1("IN") && reader.nextTag2("CD")) return "JJ";
			return "RB";
		}
		if (reader.word === "past" && reader.nextWord1(",")) return "NN";
		if (reader.nextWord1("of") && reader.nextWord2("$")) {
			if (reader.prevWord2("concern") && reader.word === "net") return "JJ";
			return "NN";
		}
		if (reader.prevTag1("NN") && reader.word === "chief") return "NN";
		if (reader.word === "Canadian" && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevTag1("NNS") && reader.word === "next") return "IN";
		if (reader.prevTag2("MD") && reader.prevTag1("RB")) return "VB";
		if (reader.word === "such" && reader.nextTag1("DT")) {
			if (reader.prevWord1("from") && reader.word === "such") return "JJ";
			if (reader.prevWord2("been") && reader.word === "such") return "JJ";
			if (reader.nextWord2("accord")) return "JJ";
			if (reader.prevWord1("'s") && reader.word === "such" && reader.nextWord1("a")) return "JJ";
			if (reader.prevTag2("JJ") && reader.prevTag1("IN") && reader.word === "such") return "JJ";
			if (reader.nextWord2("great")) return "JJ";
			if (reader.prevWord2("likelihood") && reader.word === "such") return "JJ";
			return "PDT";
		}
		if (reader.prevTag1("TO") && reader.word === "open") return "VB";
		if (reader.prevTag1("TO") && reader.word === "slow") return "VB";
		if (reader.word === "top" && reader.nextTag1("IN")) return "NN";
		if (reader.word === "early" && reader.nextTag1("DT") && reader.nextTag2("NN")) return "RB";
		if (reader.nextWord1("operating") && reader.nextWord2("officer")) return "NN";
		if (reader.prevTag1("DT") && reader.nextTag1("MD")) {
			if (reader.suffixL2("se")) return "NNPS";
			if (reader.nextWord2("take")) return "JJ";
			return "NN";
		}
		if (reader.word === "light" && reader.nextWord1("of")) return "NN";
		if (reader.prevTag1("NN") && reader.word === "giant") return "NN";
		if (reader.prevTag1("TO") && reader.nextTag1("RP")) return "VB";
		if (reader.word === "key" && reader.nextTag1("TO")) return "NN";
		if (reader.word === "future" && reader.nextWord1(",")) return "NN";
		if (reader.nextWord1("changed")) return "RB";
		if (reader.word === "late" && reader.nextTag1("IN")) {
			if (reader.prevWord1("until") && reader.word === "late") return "JJ";
			return "RB";
		}
		if (reader.prevTag1("RB") && reader.word === "own") {
			if (reader.prevTag2("NNS") && reader.prevTag1("RB") && reader.word === "own") return "VBP";
			if (reader.prevTag2("CC") && reader.prevTag1("RB") && reader.word === "own") return "JJ";
			return "VB";
		}
		if (reader.prevWord1("on") && reader.word === "average") return "NN";
		if (reader.word === "chief" && reader.nextTag1("IN")) {
			if (reader.prevWord1("as") && reader.word === "chief" && reader.nextWord1("of")) return "JJ";
			return "NN";
		}
		if (reader.word === "worth" && reader.nextWord1("of")) return "NN";
		if (reader.prevWord1("attorney")) return "NN";
		if (reader.prevTag1("NNS") && reader.word === "overseas") return "RB";
		if (reader.prevWord1("to") && reader.word === "complete") return "VB";
		if (reader.prevWord1("very") && reader.word === "much") {
			if (reader.nextWord1(",") && reader.nextWord2("''")) return "JJ";
			return "RB";
		}
		if (reader.word === "future" && reader.nextTag1(".")) return "NN";
		if (reader.suffixL4("stry")) {
			if (reader.nextWord2(",")) return "JJ";
			return "NN";
		}
		if (reader.word === "little" && reader.nextTag1("JJR") && reader.nextTag2("IN")) return "RB";
		if (reader.word === "further" && reader.nextTag1("IN")) return "RBR";
		if (reader.word === "Japanese" && reader.nextTag1("VBP")) {
			if (reader.prevTag2(",")) return "NNS";
			if (reader.word === "Japanese" && reader.nextTag1("VBP") && reader.nextTag2("RB")) return "NNP";
			return "NNPS";
		}
		if (reader.prevWord2("expected") && reader.prevWord1("to")) return "VB";
		if (reader.word === "net" && reader.nextTag1("IN")) return "NN";
		if (reader.prevTag1("NN") && reader.word === "first") {
			if (reader.prevTag1("NN") && reader.word === "first" && reader.nextTag1("NN")) return "JJ";
			return "RB";
		}
		if (reader.suffixL4("iest")) return "JJS";
		if (reader.prevTag1("NN") && reader.word === "standard") return "NN";
		if (reader.prevWord1("in") && reader.nextWord1(".")) return "NN";
		if (reader.word === "early" && reader.nextWord1("trading") && reader.nextWord2("in")) return "RB";
		if (reader.word === "overseas" && reader.nextWord1(",")) return "RB";
		if (reader.word === "further" && reader.nextWord1(".")) {
			if (reader.word === "further" && reader.nextWord2("''")) return "RBR";
			if (reader.prevTag2("NNS")) return "RBR";
			return "RB";
		}
		if (reader.word === "hard" && reader.nextTag1("IN")) return "RB";
		if (reader.nextWord1("Airlines")) return "NNP";
		if (reader.word === "limited" && reader.nextTag1("TO")) return "VBN";
		if (reader.prevWord1("due") && reader.nextWord1(",")) return "CD";
		if (reader.prevWord1("they")) {
			if (reader.suffixL2("ed")) return "VBD";
			return "VBP";
		}
		if (reader.prevWord1("in") && reader.word === "excess" && reader.nextWord1("of")) return "NN";
		if (reader.word === "public" && reader.nextTag1(",")) return "NN";
		if (reader.word === "Net" && reader.nextTag1("IN")) return "NN";
		if (reader.prevTag1("NN") && reader.word === "complex") return "NN";
		if (reader.prevWord2("the") && reader.word === "average") {
			if (reader.nextWord2("of")) return "JJ";
			return "NN";
		}
		if (reader.word === "likely" && reader.nextTag1("MD")) return "RB";
		if (reader.word === "first" && reader.nextTag1("VBN")) {
			if (reader.prevTag1("DT")) return "JJ";
			return "RB";
		}
		if (reader.word === "Small" && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevTag1("DT") && reader.word === "Second") return "NNP";
		if (reader.prevTag1("TO") && reader.nextTag1("PRP$")) return "VB";
		if (reader.word === "principal" && reader.nextTag1("CC")) return "NN";
		if (reader.word === "net" && reader.nextWord1("to")) return "NN";
		if (reader.prevTag1("NNP") && reader.word === "chief") {
			if (reader.nextWord2("officer")) return "JJ";
			return "NN";
		}
		if (reader.word === "much" && reader.nextTag1("RB")) return "RB";
		if (reader.prevTag1("NN") && reader.word === "overseas") return "RB";
		if (reader.word === "Swiss" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "Municipal" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "further" && reader.nextWord1(",")) return "RBR";
		if (reader.word === "further" && reader.nextTag1("VBN")) {
			if (reader.prevTag1("VBN") && reader.word === "further") return "RB";
			if (reader.prevTag1("VBD") && reader.nextTag1("VBN")) return "RB";
			return "RBR";
		}
		if (reader.prevTag1("NN") && reader.word === "next" && reader.nextTag1("NNP")) return "IN";
		if (reader.prevWord1("Series")) return "CD";
		if (reader.prevTag1("TO") && reader.nextTag1("PRP")) return "VB";
		if (reader.prevTag1("NNS") && reader.nextTag1("DT")) {
			if (reader.suffixL2("ed")) return "VBD";
			if (reader.nextWord1("this")) return "RB";
			return "VBP";
		}
		if (reader.prevWord2("as") && reader.prevWord1("a") && reader.word === "whole") return "NN";
		if (reader.prevTag1("DT") && reader.word === "public" && reader.nextTag1("VBZ")) return "NN";
		if (reader.prevTag1("RB") && reader.word === "long" && reader.nextTag1("RB")) return "RB";
		if (reader.prevTag1("DT") && reader.word === "little" && reader.nextTag1("JJ")) return "RB";
		if (reader.word === "Real" && reader.nextWord1("Estate")) return "NNP";
		if (reader.word === "African" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "Republican" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "many" && reader.nextWord1("of") && reader.nextWord2("whom")) return "DT";
		if (reader.suffixL4("duct")) return "NN";
		if (reader.nextTag1("WP") && reader.nextTag2("VBD")) {
			if (reader.suffixL2("an")) return "NNP";
			return "NN";
		}
		if (reader.prevTag1("JJ") && reader.word === "worth") return "NN";
		if (reader.word === "standard" && reader.nextTag1(".") && reader.nextTag2("")) return "NN";
		if (reader.prevTag1("PRP$") && reader.nextTag1("IN")) {
			if (reader.prevTag1("PRP$") && reader.word === "own") return "JJ";
			return "NN";
		}
		if (reader.prevWord1("a") && reader.nextWord1("to")) return "NN";
		if (reader.prevWord1("pretty") && reader.word === "much") return "RB";
		if (reader.word === "daily" && reader.nextWord1(".")) return "RB";
		if (reader.prevTag1("RB") && reader.word === "double" && reader.nextTag1("DT")) return "RB";
		if (reader.prevTag1("VBD") && reader.word === "short" && reader.nextTag1("IN")) return "RB";
		if (reader.word === "Asian" && reader.nextTag1("NNP") && reader.nextTag2("NNP")) return "NNP";
		if (reader.word === "Indian" && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevWord1("Supreme") && reader.word === "Soviet") return "NNP";
		if (reader.nextWord1("p.m.")) return "CD";
		if (reader.word === "slow" && reader.nextTag1("RB")) return "VB";
		if (reader.word === "future" && reader.nextTag1("VBZ")) return "NN";
		if (reader.suffixL3("car")) return "NN";
		if (reader.word === "average" && reader.nextTag1("IN")) return "NN";
		if (reader.word === "public" && reader.nextTag1("CC")) {
			if (reader.nextWord1("and") && reader.nextWord2("congressional")) return "JJ";
			return "NN";
		}
		if (reader.word === "rival" && reader.nextWord1(",")) return "NN";
		if (reader.prevWord1("of") && reader.nextWord1(".")) {
			if (reader.word === "late" && reader.nextTag1(".")) return "RB";
			return "NN";
		}
		if (reader.word === "potential" && reader.nextTag1(",")) return "NN";
		if (reader.suffixL4("pany")) return "NN";
		if (reader.suffixL4("-law")) return "NN";
		if (reader.word === "top" && reader.nextWord1(",")) return "NN";
		if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "commercial") return "NN";
		if (reader.suffixL4("sion")) {
			if (reader.prevWord1("a")) return "JJ";
			if (reader.nextTag2("VBN")) return "JJ";
			return "NN";
		}
		if (reader.prevWord1("its") && reader.word === "retail") return "NN";
		if (reader.word === "longtime" && reader.nextTag1("NNP")) return "NN";
		if (reader.word === "overseas" && reader.nextWord1(".")) return "RB";
		if (reader.prevTag1("NN") && reader.word === "downward") return "RB";
		if (reader.prevTag1("VBD") && reader.word === "late" && reader.nextTag1("JJ")) return "RB";
		if (reader.prevTag1("NNS") && reader.word === "early") return "RB";
		if (reader.word === "much" && reader.nextTag1("IN") && reader.nextTag2("PRP")) {
			if (reader.prevWord2("n't")) return "JJ";
			return "RB";
		}
		if (reader.prevWord1("seem") && reader.word === "likely" && reader.nextWord1("to")) return "RB";
		if (reader.word === "further" && reader.nextWord2("the")) return "RB";
		if (reader.word === "straight" && reader.nextWord2("the")) return "RB";
		if (reader.word === "daily" && reader.nextTag1("IN")) return "RB";
		if (reader.prevTag1("NNP") && reader.nextTag1("NNPS")) return "NNP";
		if (reader.word === "Swedish" && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevTag1("NNP") && reader.word === "Democratic" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "Japanese" && reader.nextWord1(",")) {
			if (reader.word === "Japanese" && reader.nextTag1(",") && reader.nextTag2("WP")) return "NNPS";
			return "NNP";
		}
		if (reader.word === "Australian" && reader.nextTag1("NNP") && reader.nextTag2("NNP")) return "NNP";
		if (reader.prevTag1("NNP") && reader.word === "Corporate") return "NNP";
		if (reader.word === "Private" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "weighted" && reader.nextTag1("IN")) return "VBN";
		if (reader.word === "pleased" && reader.nextWord2("the")) return "VBN";
		if (reader.prevTag1("NN") && reader.word === "preferred") {
			if (reader.nextWord2("will")) return "VBD";
			return "VBN";
		}
		if (reader.prevTag1("NN") && reader.word === "past") return "IN";
		if (reader.suffixL3("000")) return "CD";
		if (reader.word === "striking" && reader.nextTag1("DT") && reader.nextTag2("NN")) return "VBG";
		if (reader.prevTag2("") && reader.prevTag1("PRP")) return "VBD";
		if (reader.prevTag1("NNP") && reader.nextTag1("DT")) return "VBD";
		if (reader.prevWord2("did") && reader.prevWord1("n't") && reader.word === "open") return "VB";
		if (reader.nextWord1("their")) return "VB";
		if (reader.prevWord1("to") && reader.word === "foster") return "VB";
		if (reader.nextTag1("RP") && reader.nextTag2("DT")) return "VB";
		if (reader.word === "total" && reader.nextTag1("$")) {
			if (reader.prevWord2("or") && reader.word === "total") return "JJ";
			return "VBP";
		}
		if (reader.nextTag1("VBN") && reader.nextTag2("NNP")) return "NN";
		if (reader.prevWord2("the") && reader.word === "total") return "NN";
		if (reader.suffixL4("alty")) return "NN";
		if (reader.prevWord2("instructions") && reader.prevWord1("per")) return "NN";
		if (reader.word === "light" && reader.nextWord1(".") && reader.nextWord2("")) return "NN";
		if (reader.prevWord1("investing")) return "NN";
		if (reader.word === "potential" && reader.nextWord1("to")) return "NN";
		if (reader.prevWord2("in") && reader.prevWord1("the") && reader.word === "red") return "NN";
		if (reader.word === "public" && reader.nextTag1("TO")) return "NN";
		if (reader.word === "total" && reader.nextWord1("of")) return "NN";
		if (reader.word === "minimum" && reader.nextTag1("NN") && reader.nextTag2("NNS")) return "NN";
		if (reader.prevWord1("the") && reader.nextWord1(")")) return "NN";
		if (reader.word === "future" && reader.nextTag1("IN")) return "NN";
		if (reader.word === "fellow" && reader.nextTag1(",")) return "NN";
		if (reader.prevWord2("and") && reader.prevWord1("the") && reader.word === "public") return "NN";
		if (reader.prevTag1("CC") && reader.word === "principal") return "NN";
		if (reader.nextWord1("is") && reader.nextWord2("a")) return "NN";
		if (reader.suffixL4("ency")) return "NN";
		if (reader.word === "light" && reader.nextTag1("IN") && reader.nextTag2("DT")) return "NN";
		if (reader.word === "average" && reader.nextTag1("RB")) return "NN";
		if (reader.prevTag1("JJ") && reader.word === "past") return "NN";
		if (reader.prevTag1("DT") && reader.word === "public" && reader.nextTag1("VBN")) return "NN";
		if (reader.word === "savings-and-loan" && reader.nextTag1("NNS")) return "NN";
		if (reader.prevTag1("VBN") && reader.word === "minimum") return "NN";
		if (reader.prevWord1("a") && reader.nextWord1(";")) return "NN";
		if (reader.prevTag1("JJ") && reader.nextTag1("PRP")) return "NN";
		if (reader.word === "public" && reader.nextTag1(":")) return "NN";
		if (reader.prevTag1("NNP") && reader.word === "native") return "NN";
		if (reader.prevWord1("inspector")) return "NN";
		if (reader.word === "chief" && reader.nextTag1(",") && reader.nextTag2("VBD")) return "NN";
		if (reader.suffixL3("rgo")) return "NN";
		if (reader.prevWord1("the") && reader.word === "military" && reader.nextWord1("and")) return "NN";
		if (reader.word === "future" && reader.nextWord2("be")) return "NN";
		if (reader.nextWord1("concern") && reader.nextWord2("said")) return "NN";
		if (reader.prevTag1("JJ") && reader.word === "second" && reader.nextTag1("TO")) return "NN";
		if (reader.prevWord1("record") && reader.word === "high") return "NN";
		if (reader.prevTag1("PRP$") && reader.word === "loan-loss") return "NN";
		if (reader.prevTag1("DT") && reader.word === "contrary") return "NN";
		if (reader.word === "minimum" && reader.nextWord1("price")) return "NN";
		if (reader.suffixL3("icy")) return "NN";
		if (reader.suffixL3("ser")) return "NN";
		if (reader.word === "standard" && reader.nextWord1(",")) return "NN";
		if (reader.word === "potential" && reader.nextTag1("IN")) return "NN";
		if (reader.prevTag1("PRP") && reader.nextTag1("VBZ")) return "RB";
		if (reader.prevTag1("NNS") && reader.word === "first") return "RB";
		if (reader.word === "long" && reader.nextWord1(",")) return "RB";
		if (reader.word === "due" && reader.nextWord2("1992")) return "RB";
		if (reader.word === "long" && reader.nextWord2("")) return "RB";
		if (reader.word === "long" && reader.nextTag1("JJ") && reader.nextTag2("TO")) return "RB";
		if (reader.prevTag1("VBD") && reader.word === "little" && reader.nextTag1("IN")) return "RB";
		if (reader.prevWord1("a") && reader.word === "little" && reader.nextWord1("more")) return "RB";
		if (reader.prevWord1("be") && reader.word === "much") return "RB";
		if (reader.prevTag1("VBG") && reader.word === "hard") return "RB";
		if (reader.nextWord1("largest") && reader.nextWord2("steelmaker")) return "RB";
		if (reader.word === "much" && reader.nextTag1("IN") && reader.nextTag2("NNS")) return "RB";
		if (reader.prevTag1("VB") && reader.word === "first") return "RB";
		if (reader.prevTag2("NN") && reader.prevTag1("NN") && reader.word === "high") return "RB";
		if (reader.prevTag2("NN") && reader.prevTag1("NN") && reader.word === "late") return "RB";
		if (reader.word === "last" && reader.nextTag1("VBN") && reader.nextTag2("IN")) return "RB";
		if (reader.prevWord2("are") && reader.word === "much") return "RB";
		if (reader.prevTag1("NN") && reader.word === "early") return "RB";
		if (reader.word === "much" && reader.nextTag1("MD")) return "RB";
		if (reader.prevWord1("--") && reader.word === "first") return "RB";
		if (reader.word === "much" && reader.nextTag1("TO") && reader.nextTag2("NN")) return "RB";
		if (reader.prevTag1("DT") && reader.word === "Japanese" && reader.nextTag1("RB")) {
			if (reader.nextTag2("IN")) return "NNPS";
			return "NNP";
		}
		if (reader.word === "Senior" && reader.nextTag1("NNP")) return "NNP";
		if (reader.nextWord2("Inc.")) {
			if (reader.nextWord1("CBS")) return "JJ";
			return "NNP";
		}
		if (reader.nextWord1("Revolution")) return "NNP";
		if (reader.word === "Common" && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevTag1("") && reader.word === "NEW" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "German" && reader.nextWord2("of")) return "NNP";
		if (reader.prevTag1("NNP") && reader.word === "Good") return "NNP";
		if (reader.word === "Israeli" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "Chinese" && reader.nextTag1("NNP")) return "NNP";
		if (reader.word === "further" && reader.nextTag1("CC")) return "RBR";
		if (reader.prevTag2("DT") && reader.prevTag1("JJ") && reader.word === "preferred") return "VBN";
		if (reader.prevTag1("VBD") && reader.word === "troubled" && reader.nextTag1("IN")) return "VBN";
		if (reader.prevTag2("NN") && reader.prevTag1("IN") && reader.word === "troubled") return "VBN";
		if (reader.prevTag2("JJ") && reader.prevTag1("JJ") && reader.word === "preferred") return "VBN";
		if (reader.word === "detailed" && reader.nextTag1("IN")) return "VBN";
		if (reader.word === "limited" && reader.nextTag1("NN") && reader.nextTag2("IN")) return "VBN";
		if (reader.word === "limited" && reader.nextWord1("by")) return "VBN";
		if (reader.word === "subordinated" && reader.nextWord2(",")) return "VBN";
		if (reader.word === "troubled" && reader.nextTag1("NNS") && reader.nextTag2("VBP")) return "VBN";
		if (reader.word === "Outside" && reader.nextTag1("DT")) return "IN";
		if (reader.prevTag1("VBN") && reader.word === "next" && reader.nextTag1("NNP")) return "IN";
		return "JJ";
	}
	if (reader.tag === "WP") {
		if (reader.prevTag1("RB") && reader.nextTag1("NN")) return "WDT";
		if (reader.word === "what" && reader.nextTag1("NN") && reader.nextTag2("DT")) return "WDT";
		if (reader.word === "what" && reader.nextTag1("NN") && reader.nextTag2(",")) return "WDT";
		return "WP";
	}
	if (reader.tag === "VBZ") {
		if (reader.prevWord1("the")) return "NNS";
		if (reader.prevTag1("JJ") && reader.nextTag1("IN")) {
			if (reader.word === "is") return "VBZ";
			if (reader.prevTag1("JJ") && reader.word === "comes" && reader.nextTag1("IN")) return "VBZ";
			if (reader.nextWord1("with") && reader.nextWord2("the")) return "VBZ";
			if (reader.prevWord1("first")) return "VBZ";
			return "NNS";
		}
		if (reader.prevWord1("phone") && reader.word === "calls") return "NNS";
		if (reader.prevTag1("PRP$")) {
			if (reader.suffixL3("")) return "VBZ";
			return "NNS";
		}
		if (reader.prevTag1("JJ") && reader.nextTag1(",")) return "NNS";
		if (reader.word === "offers" && reader.nextTag1("IN")) return "NNS";
		if (reader.word === "hopes" && reader.nextTag1("IN")) {
			if (reader.prevTag1("NNP") && reader.word === "hopes" && reader.nextTag1("IN")) return "VBZ";
			if (reader.prevTag1("RB") && reader.nextTag1("IN")) return "VBZ";
			return "NNS";
		}
		if (reader.prevTag1("JJ") && reader.nextTag1(".")) return "NNS";
		if (reader.nextWord1("are")) return "NNS";
		if (reader.prevWord1("telephone")) return "NNS";
		if (reader.prevWord1("of")) return "NNS";
		if (reader.prevTag1("IN") && reader.word === "shows") return "NNS";
		if (reader.prevWord1("a") && reader.nextWord1("of")) return "NN";
		if (reader.prevTag1("NN") && reader.word === "'S") return "POS";
		if (reader.prevTag1("JJ") && reader.nextTag1("CC")) return "NNS";
		if (reader.prevWord2("on") && reader.word === "counts") return "NNS";
		if (reader.prevTag1("DT") && reader.nextTag1("CC")) return "NNS";
		if (reader.prevWord1("felony") && reader.word === "counts") return "NNS";
		if (reader.prevWord1("housing") && reader.word === "starts") return "NNS";
		if (reader.prevWord1("home") && reader.word === "runs") return "NNS";
		if (reader.prevTag1("NN") && reader.word === "needs" && reader.nextTag1(".")) return "NNS";
		if (reader.prevWord1("by")) return "NNS";
		if (reader.prevTag1("JJ") && reader.word === "shows") return "NNS";
		if (reader.word === "offers" && reader.nextTag1(",")) return "NNS";
		if (reader.word === "shows" && reader.nextWord2("")) return "NNS";
		if (reader.prevWord2("by") && reader.word === "means") return "NNS";
		if (reader.nextTag1("VBP") && reader.nextTag2("RB")) return "NNS";
		if (reader.prevTag1("VBG") && reader.word === "calls") return "NNS";
		if (reader.prevWord1("no")) return "NNS";
		if (reader.prevWord2("the") && reader.word === "causes") return "NNS";
		if (reader.prevTag1("JJ") && reader.nextTag1(":")) return "NNS";
		return "VBZ";
	}
	if (reader.tag === "DT") {
		if (reader.word === "all" && reader.nextTag1("DT")) {
			if (reader.prevTag2("''")) return "DT";
			if (reader.word === "all" && reader.nextTag1("DT") && reader.nextTag2("VB")) return "DT";
			if (reader.prevWord2("had") && reader.word === "all") return "DT";
			return "PDT";
		}
		if (reader.word === "no" && reader.nextTag1("RB")) {
			if (reader.prevTag2("IN") && reader.prevTag1("VBD") && reader.word === "no") return "DT";
			return "RB";
		}
		if (reader.prevTag1("NNP") && reader.word === "A") return "NNP";
		if (reader.prevTag1("") && reader.word === "All" && reader.nextTag1("DT")) return "PDT";
		if (reader.prevTag1("") && reader.word === "a" && reader.nextTag1(":")) return "SYM";
		if (reader.word === "A" && reader.nextTag1("POS")) return "NNP";
		if (reader.word === "all" && reader.nextWord1("his")) return "PDT";
		if (reader.word === "all" && reader.nextTag1("RB") && reader.nextTag2("JJ")) return "RB";
		if (reader.word === "all" && reader.nextWord1("right")) return "RB";
		if (reader.nextWord1("la")) return "FW";
		if (reader.prevWord1("") && reader.nextWord1("Mr.")) return "CC";
		if (reader.word === "all" && reader.nextWord2("again")) return "RB";
		if (reader.word === "any" && reader.nextWord1("better")) return "RB";
		if (reader.word === "no" && reader.nextTag1(".")) return "UH";
		if (reader.word === "A" && reader.nextTag1(",")) return "NNP";
		if (reader.prevWord2("had") && reader.word === "all") return "RB";
		if (reader.prevTag1("VBD") && reader.word === "no" && reader.nextTag1("JJR")) return "RB";
		if (reader.prevTag1("VB") && reader.word === "no" && reader.nextTag1("JJR")) return "RB";
		if (reader.prevTag2("CD") && reader.prevTag1("(") && reader.word === "A") return "NN";
		if (reader.prevTag1(",") && reader.word === "neither") return "CC";
		if (reader.word === "That" && reader.nextTag1("VBN") && reader.nextTag2("DT")) return "WDT";
		return "DT";
	}
	if (reader.tag === "#") return "#";
	if (reader.tag === "RP") {
		if (reader.prevTag1(",")) {
			if (reader.word === "out") return "IN";
			if (reader.word === "up" && reader.nextTag1("TO") && reader.nextTag2("CD")) return "IN";
			if (reader.nextWord1("5")) return "IN";
			if (reader.nextWord1("9\/32")) return "IN";
			if (reader.prevWord2("15\/32") && reader.word === "up") return "IN";
			if (reader.prevWord1(",") && reader.word === "up" && reader.nextWord1("31")) return "IN";
			return "RB";
		}
		if (reader.word === "out" && reader.nextWord1("of")) return "IN";
		if (reader.prevTag1("VBD") && reader.nextTag1("CD")) {
			if (reader.prevWord1("lay")) return "RP";
			if (reader.word === "off" && reader.nextTag1("CD") && reader.nextTag2("IN")) return "JJ";
			if (reader.prevWord1("was") && reader.nextWord1("60")) return "IN";
			return "RB";
		}
		if (reader.word === "up" && reader.nextTag1("TO")) {
			if (reader.nextTag1("TO") && reader.nextTag2("VB")) return "RP";
			if (reader.prevWord1("adds") && reader.word === "up") return "RP";
			if (reader.word === "up" && reader.nextTag1("TO") && reader.nextTag2("PRP$")) return "RP";
			if (reader.prevTag2("RB") && reader.prevTag1("VB") && reader.word === "up") return "RP";
			if (reader.prevWord1("move") && reader.nextWord1("to")) return "RB";
			return "IN";
		}
		if (reader.prevWord1("were")) return "RB";
		if (reader.word === "out" && reader.nextTag1("EX")) {
			if (reader.prevTag1("VB") && reader.word === "out") return "RB";
			return "IN";
		}
		if (reader.prevTag1("CC")) {
			if (reader.prevTag2("NN") && reader.prevTag1("CC") && reader.word === "off") return "IN";
			if (reader.prevWord2("in")) return "IN";
			return "RB";
		}
		if (reader.word === "up" && reader.nextTag1("CC")) {
			if (reader.word === "up" && reader.nextTag1("CC") && reader.nextTag2("PRP")) return "RP";
			if (reader.prevTag2("NN")) return "IN";
			if (reader.prevTag2("VBG") && reader.prevTag1("PRP")) return "RP";
			return "RB";
		}
		if (reader.prevWord1("are")) {
			if (reader.nextTag2("DT")) return "IN";
			return "RB";
		}
		if (reader.prevTag1("NNS") && reader.word === "off") {
			if (reader.word === "off" && reader.nextTag1("IN")) return "RP";
			return "IN";
		}
		if (reader.prevTag1("RB")) {
			if (reader.prevWord2("to") && reader.prevWord1("back")) {
				if (reader.nextWord1(".") && reader.nextWord2("")) return "RB";
				return "RP";
			}
			if (reader.prevWord2(",") && reader.prevWord1("also")) return "RB";
			return "IN";
		}
		if (reader.prevWord1("is") && reader.word === "up") {
			if (reader.prevTag2("NNP") && reader.prevTag1("VBZ")) return "RB";
			return "IN";
		}
		if (reader.prevWord1("was") && reader.word === "up") return "RB";
		if (reader.prevTag1("TO")) return "RB";
		if (reader.nextTag1(",") && reader.nextTag2("CC")) {
			if (reader.prevTag2("DT")) return "RP";
			if (reader.prevTag1("VBN") && reader.word === "out" && reader.nextTag1(",")) return "IN";
			return "RB";
		}
		if (reader.nextWord2("points")) return "RB";
		if (reader.prevWord1("go") && reader.word === "up") return "RB";
		if (reader.prevWord1("due") && reader.word === "out") {
			if (reader.prevTag2(",") && reader.prevTag1("JJ") && reader.word === "out") return "RB";
			return "IN";
		}
		if (reader.prevWord1("was") && reader.nextWord1(",")) return "JJ";
		if (reader.prevTag2("CD") && reader.prevTag1("NN") && reader.word === "out") return "RB";
		if (reader.prevTag2("VB") && reader.prevTag1("VBG") && reader.word === "off") return "RB";
		if (reader.prevWord1("day")) return "RB";
		if (reader.word === "out" && reader.nextWord1("and")) return "RB";
		if (reader.prevWord1("been")) return "RB";
		if (reader.prevTag2("NN") && reader.prevTag1("NN") && reader.word === "off") return "IN";
		if (reader.prevTag1("CD") && reader.word === "off") return "IN";
		if (reader.prevWord1("edged")) return "IN";
		if (reader.prevTag2("JJ") && reader.prevTag1("NN")) return "IN";
		if (reader.prevWord1("get") && reader.word === "off" && reader.nextWord1("the")) return "IN";
		return "RP";
	}
	if (reader.tag === "$") return "$";
	if (reader.tag === "NN") {
		if (reader.prevTag1("TO")) {
			if (reader.suffixL3("ity")) return "NN";
			if (reader.suffixL2("th")) return "NN";
			if (reader.prevWord2("according") && reader.prevWord1("to")) return "NN";
			if (reader.suffixL2("cy")) return "NN";
			if (reader.suffixL3("ory")) return "NN";
			if (reader.word === "approval" && reader.nextTag1("IN")) return "NN";
			if (reader.prevWord2("related")) return "NN";
			if (reader.prevWord1("to") && reader.nextWord1("'s")) return "NN";
			if (reader.prevWord2("According") && reader.prevWord1("to")) return "NN";
			if (reader.prevWord2("access")) return "NN";
			if (reader.suffixL4("ness")) return "NN";
			if (reader.suffixL3("ime")) return "NN";
			if (reader.nextTag1("CC") && reader.nextTag2("JJ")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "management") return "NN";
			if (reader.suffixL3("ism")) return "NN";
			if (reader.word === "government") return "NN";
			if (reader.prevTag1("TO") && reader.word === "market" && reader.nextTag1(".")) return "NN";
			if (reader.suffixL4("ball")) return "NN";
			if (reader.prevTag2("NN") && reader.prevTag1("TO") && reader.word === "date") return "NN";
			if (reader.prevWord2("led")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "trial") return "NN";
			if (reader.prevWord1("to") && reader.word === "college") return "NN";
			if (reader.prevWord1("to") && reader.word === "heart") return "NN";
			if (reader.prevWord2("due") && reader.prevWord1("to")) return "NN";
			if (reader.prevTag2("NNS") && reader.prevTag1("TO") && reader.word === "date") return "NN";
			if (reader.suffixL4("uter")) return "NN";
			if (reader.prevWord2("lead")) return "NN";
			if (reader.nextWord1("victims")) return "NN";
			if (reader.word === "life") return "NN";
			if (reader.suffixL4("hing")) return "NN";
			if (reader.suffixL4("ting")) return "NN";
			if (reader.prevWord1("To") && reader.nextWord1(",")) return "NN";
			if (reader.suffixL4("yone")) return "NN";
			if (reader.word === "No." && reader.nextTag1("CD")) return "NN";
			if (reader.word === "anybody") return "NN";
			if (reader.prevWord1("to") && reader.word === "home") return "NN";
			if (reader.prevTag1("TO") && reader.word === "gold") return "NN";
			if (reader.prevWord1("to") && reader.word === "investment") return "NN";
			if (reader.prevTag1("TO") && reader.word === "insurance") return "NN";
			if (reader.prevTag1("TO") && reader.word === "customer" && reader.nextTag1("NN")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "cancer") return "NN";
			if (reader.word === "cable") return "NN";
			if (reader.prevWord2("exposed")) return "NN";
			if (reader.word === "drug") return "NN";
			if (reader.prevTag1("TO") && reader.word === "success") return "NN";
			if (reader.suffixL4("king")) return "NN";
			if (reader.prevWord1("to") && reader.nextWord1("levels")) return "NN";
			if (reader.prevWord2("flight")) return "NN";
			if (reader.nextTag1("CC") && reader.nextTag2("NNS")) return "NN";
			if (reader.suffixL4("stry")) return "NN";
			if (reader.prevWord2("tied") && reader.prevWord1("to")) return "NN";
			if (reader.prevWord2("damage")) return "NN";
			if (reader.suffixL4("ding")) {
				if (reader.word === "building") return "VBG";
				return "NN";
			}
			if (reader.suffixL3("ery")) return "NN";
			if (reader.suffixL4("sing")) return "NN";
			if (reader.word === "market" && reader.nextTag1("NNS")) return "NN";
			if (reader.prevWord2("chemicals")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "double-C") return "NN";
			if (reader.word === "market" && reader.nextTag1("IN") && reader.nextTag2("NN")) return "NN";
			if (reader.prevWord1("to") && reader.nextWord1("arbitrage")) return "NN";
			if (reader.word === "none" && reader.nextWord2("")) return "NN";
			if (reader.prevWord1("to") && reader.word === "power" && reader.nextWord1(",")) return "NN";
			if (reader.suffixL4("rict")) return "NN";
			if (reader.word === "par") return "NN";
			if (reader.word === "air" && reader.nextTag1("CD") && reader.nextTag2("NNS")) return "NN";
			if (reader.prevWord1("to") && reader.nextWord1("cancer")) return "NN";
			if (reader.prevWord2("listen") && reader.prevWord1("to")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "fruition" && reader.nextTag1(".")) return "NN";
			if (reader.suffixL4("rage")) return "NN";
			if (reader.prevWord1("to") && reader.word === "farm") return "NN";
			if (reader.word === "execution" && reader.nextTag1("IN")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "service" && reader.nextTag1("NNS")) return "NN";
			if (reader.suffixL4("rter")) return "NN";
			if (reader.prevWord1("to") && reader.word === "abortion") return "NN";
			if (reader.nextWord1("countries")) return "NN";
			if (reader.word === "cash" && reader.nextWord1("flow")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "production") return "NN";
			if (reader.prevTag2("NN") && reader.prevTag1("TO") && reader.word === "tax") return "NN";
			if (reader.prevWord2("sentenced")) return "NN";
			if (reader.word === "takeover" && reader.nextTag1("NNS")) return "NN";
			if (reader.prevWord1("to") && reader.word === "year" && reader.nextWord1(".")) return "NN";
			if (reader.nextWord2("abroad")) return "NN";
			if (reader.prevWord2("head") && reader.word === "head") return "NN";
			if (reader.prevWord2("sent") && reader.prevWord1("to")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "completion" && reader.nextTag1("IN")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "television") return "NN";
			if (reader.prevWord1("to") && reader.nextWord1("speculation")) return "NN";
			if (reader.prevTag1("TO") && reader.word === "competition") return "NN";
			if (reader.prevWord2("loans") && reader.prevWord1("to")) return "NN";
			if (reader.prevWord2("attributable") && reader.prevWord1("to")) return "NN";
			if (reader.word === "market" && reader.nextTag1("IN") && reader.nextTag2("IN")) return "NN";
			if (reader.nextWord1("value") && reader.nextWord2(",")) return "NN";
			if (reader.suffixL2("od")) return "NN";
			if (reader.nextWord2("says")) return "NN";
			if (reader.prevWord2("referring") && reader.prevWord1("to")) return "NN";
			if (reader.suffixL2("ny")) return "NN";
			if (reader.suffixL2("lf")) return "NN";
			if (reader.prevWord2("taken")) return "NN";
			if (reader.prevWord2("addition") && reader.prevWord1("to")) return "NN";
			if (reader.nextWord1("items") && reader.nextWord2(".")) return "NN";
			if (reader.suffixL4("town")) return "NN";
			if (reader.suffixL3("ier")) return "NN";
			return "VB";
		}
		if (reader.prevTag1("MD")) {
			if (reader.suffixL3("one")) return "NN";
			return "VB";
		}
		if (reader.prevWord1("n't")) {
			if (reader.suffixL3("ing")) {
				if (reader.prevTag1("RB") && reader.nextTag1("RP")) return "VBG";
				if (reader.suffixL4("ding")) return "VBG";
				return "NN";
			}
			if (reader.prevTag1("RB") && reader.word === "part" && reader.nextTag1("IN")) return "NN";
			if (reader.prevWord2("is")) {
				if (reader.suffixL3("ing")) {
					if (reader.suffixL4("hing")) return "NN";
					return "VBG";
				}
				return "JJ";
			}
			if (reader.prevWord2("are") && reader.prevWord1("n't")) return "NN";
			if (reader.prevWord2("ai")) return "NN";
			if (reader.prevWord2("was") && reader.prevWord1("n't")) return "NN";
			return "VB";
		}
		if (reader.prevTag1("PRP")) {
			if (reader.prevWord1("it")) {
				if (reader.suffixL3("")) return "VBD";
				if (reader.prevTag2("VB") && reader.prevTag1("PRP") && reader.word === "work") return "VB";
				if (reader.prevWord2("let")) return "VB";
				if (reader.prevTag1("PRP") && reader.word === "right") return "RB";
				return "NN";
			}
			if (reader.prevWord1("he")) return "VB";
			if (reader.prevWord1("him")) {
				if (reader.prevTag1("PRP") && reader.nextTag1("IN")) return "NN";
				return "VB";
			}
			if (reader.prevWord1("them") && reader.nextWord1("a")) return "VB";
			if (reader.suffixL3("ght")) return "RB";
			if (reader.suffixL4("hing")) return "NN";
			if (reader.prevTag2("VBZ")) return "NN";
			if (reader.word === "access" && reader.nextTag1("TO")) return "NN";
			if (reader.suffixL4("ound")) return "VB";
			if (reader.prevWord2("did")) return "VB";
			if (reader.suffixL2("me")) return "NN";
			if (reader.suffixL4("ball")) return "NN";
			return "VBP";
		}
		if (reader.prevTag2("MD") && reader.prevTag1("RB")) return "VB";
		if (reader.prevTag2("NNS") && reader.prevTag1("RB")) {
			if (reader.suffixL3("ing")) return "VBG";
			if (reader.prevTag1("RB") && reader.word === "part" && reader.nextTag1("IN")) return "NN";
			if (reader.suffixL3("day")) return "NN";
			return "VBP";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("DT")) {
			if (reader.suffixL3("ing")) return "VBG";
			if (reader.nextWord2("year")) return "NN";
			if (reader.word === "study" && reader.nextTag1("DT")) return "VB";
			if (reader.suffixL2("ul")) return "VB";
			return "VBP";
		}
		if (reader.prevWord1("who")) {
			if (reader.suffixL2("ay")) return "NN";
			return "VBP";
		}
		if (reader.prevWord1("SCI") && reader.word === "TV") return "NNP";
		if (reader.word === "half" && reader.nextTag1("DT")) return "PDT";
		if (reader.word === "executive" && reader.nextTag1("NN") && reader.nextTag2("IN")) {
			if (reader.prevWord2("'s") && reader.word === "executive") return "NN";
			if (reader.word === "executive" && reader.nextWord1("officer") && reader.nextWord2("at")) return "NN";
			return "JJ";
		}
		if (reader.word === "official" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "right" && reader.nextTag1("RB")) return "RB";
		if (reader.prevTag1("CC") && reader.nextTag1("DT")) {
			if (reader.prevWord2(",") && reader.word === "offer") return "VBP";
			if (reader.suffixL2("ng")) return "VBG";
			if (reader.nextWord1("all")) return "NN";
			if (reader.word === "yesterday" && reader.nextWord1("the")) return "NN";
			return "VB";
		}
		if (reader.word === "right" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag2("TO") && reader.prevTag1("RB")) return "VB";
		if (reader.prevWord2(",") && reader.prevWord1("which")) return "VBP";
		if (reader.word === "executive" && reader.nextWord1("vice")) {
			if (reader.prevTag2(",") && reader.prevTag1("NNP")) return "NN";
			if (reader.prevTag2("VBN") && reader.prevTag1("JJ")) return "NN";
			if (reader.prevTag2(",") && reader.prevTag1("JJ") && reader.word === "executive") return "NN";
			return "JJ";
		}
		if (reader.nextTag1("NNPS")) {
			if (reader.nextTag1("NNPS") && reader.nextTag2("NN")) return "NN";
			if (reader.nextTag1("NNPS") && reader.nextTag2("MD")) return "NN";
			if (reader.nextWord1("Republicans")) return "NN";
			return "NNP";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1("RP")) {
			if (reader.suffixL2("ot")) return "VBD";
			return "VBP";
		}
		if (reader.word === "official" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevTag1("NNS") && reader.word === "show") return "VBP";
		if (reader.prevTag1("VBZ") && reader.nextTag1("DT")) {
			if (reader.prevWord1("has")) return "VBN";
			if (reader.prevTag2("PRP") && reader.prevTag1("VBZ")) return "NN";
			return "VBG";
		}
		if (reader.suffixL2("ky")) return "JJ";
		if (reader.prevTag1("") && reader.nextTag1("NNP")) return "NNP";
		if (reader.nextWord1("Service")) return "NNP";
		if (reader.prevWord1("began")) {
			if (reader.word === "yesterday") return "NN";
			return "VBG";
		}
		if (reader.prevWord1("companies")) return "VBP";
		if (reader.word === "half" && reader.nextTag1("NN")) return "JJ";
		if (reader.nextWord1("Corp.")) return "NNP";
		if (reader.prevWord1("officials")) return "VBP";
		if (reader.prevTag1("IN") && reader.word === "offering") return "VBG";
		if (reader.prevWord1(",") && reader.word === "closing") return "VBG";
		if (reader.word === "building" && reader.nextTag1("DT")) return "VBG";
		if (reader.word === "account" && reader.nextWord1("for")) {
			if (reader.prevTag1("NN") && reader.word === "account" && reader.nextTag1("IN")) return "NN";
			return "VBP";
		}
		if (reader.prevTag2("PRP") && reader.prevTag1("RB")) return "VBP";
		if (reader.prevWord1("rates")) return "VBP";
		if (reader.word === "planning" && reader.nextWord1("to")) return "VBG";
		if (reader.prevWord1("is") && reader.word === "offering") return "VBG";
		if (reader.prevTag1("VBP") && reader.nextTag1("DT")) {
			if (reader.prevWord1("have")) return "VBN";
			return "VBG";
		}
		if (reader.prevTag1("NNS") && reader.word === "note") return "VBP";
		if (reader.word === "equivalent" && reader.nextWord1("to")) return "JJ";
		if (reader.suffixL4("nary")) return "JJ";
		if (reader.word === "firm" && reader.nextTag1("NN")) {
			if (reader.prevWord1("law")) return "NN";
			return "JJ";
		}
		if (reader.prevTag1("RB") && reader.nextTag1("DT")) {
			if (reader.prevTag2("DT") && reader.prevTag1("RB")) return "NN";
			if (reader.suffixL3("ing")) return "VBG";
			if (reader.prevWord2("had")) return "VBN";
			return "VB";
		}
		if (reader.word === "spending" && reader.nextTag1("$") && reader.nextTag2("CD")) return "VBG";
		if (reader.nextWord1("their")) {
			if (reader.suffixL2("ng")) return "VBG";
			if (reader.prevTag1("IN") && reader.word === "half") return "PDT";
			if (reader.suffixL2("ty")) return "NN";
			return "VBP";
		}
		if (reader.word === "crude" && reader.nextTag1("NN")) {
			if (reader.prevTag2("NNS")) return "NN";
			return "JJ";
		}
		if (reader.prevTag1("DT") && reader.word === "executive" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevWord1("that") && reader.nextWord1("the")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "fear") return "VBP";
		if (reader.word === "range" && reader.nextWord1("from")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "work") return "VBP";
		if (reader.word === "bottom" && reader.nextWord1("line")) return "JJ";
		if (reader.suffixL4("ular")) return "JJ";
		if (reader.suffixL3("men")) return "NNS";
		if (reader.nextWord1("Inc.")) return "NNP";
		if (reader.prevWord1("help")) return "VB";
		if (reader.prevTag1("NNS") && reader.nextTag1("PRP")) {
			if (reader.nextTag1("PRP") && reader.nextTag2("VBN")) return "NN";
			return "VBP";
		}
		if (reader.word === "hope" && reader.nextTag1("TO")) return "VBP";
		if (reader.word === "right" && reader.nextTag1("NNS")) return "JJ";
		if (reader.nextWord1("Co.")) return "NNP";
		if (reader.prevTag1("CC") && reader.nextTag1("PRP$")) return "VB";
		if (reader.word === "offering" && reader.nextTag1("NNS")) return "VBG";
		if (reader.prevWord1("considering")) return "VBG";
		if (reader.prevTag1("NNS") && reader.word === "use") return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "caution") return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "face") return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "plan" && reader.nextTag1("TO")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "offer") return "VBP";
		if (reader.word === "front" && reader.nextTag1("NN")) {
			if (reader.nextWord2(",")) return "NN";
			return "JJ";
		}
		if (reader.nextWord1("Act")) return "NNP";
		if (reader.word === "Trading" && reader.nextTag1("NNP")) return "NNP";
		if (reader.nextWord1("them")) {
			if (reader.suffixL2("ng")) return "VBG";
			return "VB";
		}
		if (reader.word === "building" && reader.nextTag1("PRP$")) return "VBG";
		if (reader.prevTag1("IN") && reader.word === "reading") return "VBG";
		if (reader.prevTag1("VBD") && reader.word === "forecast") return "VBN";
		if (reader.prevWord1("people")) return "VBP";
		if (reader.prevWord1("are") && reader.nextWord1(".")) {
			if (reader.suffixL3("ing")) return "VBG";
			return "JJ";
		}
		if (reader.word === "middle" && reader.nextTag1("NN")) return "JJ";
		if (reader.nextWord1("Group")) return "NNP";
		if (reader.prevTag1("VBD") && reader.word === "trading" && reader.nextTag1("IN")) return "VBG";
		if (reader.word === "opening" && reader.nextWord1("up")) return "VBG";
		if (reader.word === "offering" && reader.nextTag1("JJ")) return "VBG";
		if (reader.word === "warning" && reader.nextWord1("that")) return "VBG";
		if (reader.word === "heating" && reader.nextTag1("RP")) return "VBG";
		if (reader.word === "spending" && reader.nextTag1("RB")) return "VBG";
		if (reader.prevWord1("been") && reader.word === "trading") return "VBG";
		if (reader.prevWord1("rules")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "result" && reader.nextTag1("IN")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "change") return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "rise") return "VBP";
		if (reader.prevTag2("IN") && reader.prevTag1("DT") && reader.word === "benchmark") return "JJ";
		if (reader.word === "alternative" && reader.nextTag1("NNS")) return "JJ";
		if (reader.word === "fine" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "bulk" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevWord1("are") && reader.nextWord1(",")) return "JJ";
		if (reader.prevTag1("DT") && reader.word === "official" && reader.nextTag1("NNP")) return "JJ";
		if (reader.prevWord2("at") && reader.word === "a.m.") return "RB";
		if (reader.word === "police" && reader.nextTag1("IN")) return "NNS";
		if (reader.nextWord1("Association")) return "NNP";
		if (reader.word === "Part" && reader.nextTag1("NNP")) return "NNP";
		if (reader.nextWord1("International")) return "NNP";
		if (reader.prevWord1("Lincoln") && reader.word === "S&L") return "NNP";
		if (reader.prevWord2("the") && reader.prevWord1("First")) return "NNP";
		if (reader.prevWord2("did") && reader.prevWord1("not")) return "VB";
		if (reader.prevTag1("CC") && reader.nextTag1("RP")) return "VB";
		if (reader.prevWord2("to") && reader.prevWord1("``")) {
			if (reader.nextTag1("NNS")) return "NN";
			if (reader.prevTag1("``") && reader.nextTag1("NN")) return "NN";
			return "VB";
		}
		if (reader.word === "opening" && reader.nextTag1("DT") && reader.nextTag2("NN")) return "VBG";
		if (reader.prevTag1("VB") && reader.word === "trading") {
			if (reader.nextTag1("IN") && reader.nextTag2("NNS")) return "NN";
			return "VBG";
		}
		if (reader.prevWord1("is") && reader.word === "building") return "VBG";
		if (reader.word === "filing" && reader.nextTag1("IN") && reader.nextTag2("NN")) return "VBG";
		if (reader.prevTag1(",") && reader.word === "building") return "VBG";
		if (reader.prevTag1("IN") && reader.word === "consulting") return "VBG";
		if (reader.word === "offering" && reader.nextTag1("DT")) return "VBG";
		if (reader.prevTag1("IN") && reader.word === "closing" && reader.nextTag1("IN")) return "VBG";
		if (reader.prevTag1("VB") && reader.word === "processing") return "VBG";
		if (reader.word === "mining" && reader.nextTag1("CC") && reader.nextTag2("VBG")) return "VBG";
		if (reader.word === "accounting" && reader.nextWord1("for")) {
			if (reader.prevWord2("up") && reader.prevWord1("their")) return "NN";
			return "VBG";
		}
		if (reader.prevTag1("IN") && reader.word === "backing") return "VBG";
		if (reader.prevWord2("will") && reader.prevWord1("begin")) return "VBG";
		if (reader.prevTag1("IN") && reader.word === "voting") return "VBG";
		if (reader.prevTag1("VBD") && reader.word === "spread") return "VBN";
		if (reader.prevTag1("NNS") && reader.word === "question") return "VBP";
		if (reader.prevTag1("NNPS") && reader.nextTag1("DT")) return "VBP";
		if (reader.prevWord1("that") && reader.word === "use") return "VBP";
		if (reader.prevTag2("WRB") && reader.prevTag1("NNS")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "hope") return "VBP";
		if (reader.word === "show" && reader.nextWord1("that")) return "VBP";
		if (reader.prevWord1("is") && reader.word === "right") return "JJ";
		if (reader.word === "bridge" && reader.nextWord1("loans")) return "JJ";
		if (reader.suffixL4("iant")) return "JJ";
		if (reader.prevWord1("and") && reader.word === "stock-index") return "JJ";
		if (reader.word === "assistant" && reader.nextTag1("NNP")) return "JJ";
		if (reader.prevWord1("all") && reader.word === "right") return "JJ";
		if (reader.prevTag1("DT") && reader.word === "alternative" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "official" && reader.nextTag1("JJ") && reader.nextTag2("NN")) return "JJ";
		if (reader.word === "front" && reader.nextTag1("NNS")) return "JJ";
		if (reader.word === "assistant" && reader.nextWord1("director")) return "JJ";
		if (reader.prevTag1("VBP") && reader.word === "right") return "JJ";
		if (reader.suffixL2("fy")) return "JJ";
		if (reader.nextWord1("'s") && reader.nextWord2("a")) return "NNP";
		if (reader.prevWord2("Dreyfus") && reader.word === "Dollar") return "NNP";
		if (reader.nextWord2("Inc.")) return "NNP";
		if (reader.prevWord1("USA") && reader.word === "Today") return "NNP";
		if (reader.prevWord2("does") && reader.prevWord1("not")) return "VB";
		if (reader.prevTag1("VB") && reader.word === "reset") return "VB";
		if (reader.prevWord1("helped") && reader.nextWord1("the")) return "VB";
		if (reader.prevWord1("Never")) return "VB";
		if (reader.prevTag1("RB") && reader.word === "support") return "VB";
		if (reader.prevTag1("CC") && reader.word === "force") return "VB";
		if (reader.suffixL4("tier")) return "JJR";
		if (reader.word === "funding" && reader.nextTag1("DT")) return "VBG";
		if (reader.prevTag1("VBD") && reader.word === "advertising") return "VBG";
		if (reader.prevWord1(",") && reader.word === "ruling") return "VBG";
		if (reader.prevTag1("VB") && reader.word === "planning") return "VBG";
		if (reader.word === "ruling" && reader.nextWord1("party")) return "VBG";
		if (reader.word === "consulting" && reader.nextWord1("firm") && reader.nextWord2(",")) return "VBG";
		if (reader.word === "spending" && reader.nextTag1("CD") && reader.nextTag2("NNS")) return "VBG";
		if (reader.prevWord2("of") && reader.prevWord1("the") && reader.word === "manufacturing") return "VBG";
		if (reader.word === "filing" && reader.nextTag1("DT")) return "VBG";
		if (reader.prevTag1("NNS") && reader.word === "trading" && reader.nextTag1("IN")) {
			if (reader.prevTag2(",") && reader.prevTag1("NNS")) return "NN";
			return "VBG";
		}
		if (reader.nextWord1("profit") && reader.nextWord2("rose")) return "VBG";
		if (reader.prevTag1("RB") && reader.word === "trading" && reader.nextTag1("IN")) return "VBG";
		if (reader.prevTag1("VB") && reader.word === "hearing") return "VBG";
		if (reader.prevWord1("and") && reader.word === "consulting") return "VBG";
		if (reader.prevTag1("NN") && reader.word === "bearing") return "VBG";
		if (reader.prevTag1("IN") && reader.word === "understanding" && reader.nextTag1("NNS")) return "VBG";
		if (reader.prevTag2("NN") && reader.prevTag1("VBZ") && reader.word === "spending") return "VBG";
		if (reader.prevTag1("RB") && reader.word === "building") return "VBG";
		if (reader.word === "financing" && reader.nextWord2(".")) return "VBG";
		if (reader.prevTag1("IN") && reader.word === "meeting" && reader.nextTag1("NN")) return "VBG";
		if (reader.prevTag1("IN") && reader.word === "refinancing") return "VBG";
		if (reader.prevTag1(",") && reader.word === "spending") return "VBG";
		if (reader.prevWord1("trouble")) return "VBG";
		if (reader.prevTag1("VBZ") && reader.nextTag1("PRP$")) return "VBG";
		if (reader.word === "refunding" && reader.nextTag1("NNS")) return "VBG";
		if (reader.prevWord2("have") && reader.prevWord1("been")) return "VBG";
		if (reader.prevTag1("IN") && reader.word === "meeting" && reader.nextTag1("DT")) return "VBG";
		if (reader.prevWord1("'re")) return "VBG";
		if (reader.prevWord2("Mr.")) {
			if (reader.nextTag2("NN")) return "VB";
			return "VBD";
		}
		if (reader.word === "spread" && reader.nextTag1("RP")) return "VBN";
		if (reader.prevTag1("VBD") && reader.word === "shot") return "VBN";
		if (reader.word === "split" && reader.nextTag1("IN")) {
			if (reader.prevTag2("DT") && reader.prevTag1("JJ")) return "NN";
			return "VBN";
		}
		if (reader.prevWord2("to") && reader.word === "broadcast") return "VBN";
		if (reader.prevTag1("NNS") && reader.nextTag1("JJR")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "move") {
			if (reader.prevTag2("NN") && reader.prevTag1("NNS")) return "VB";
			return "VBP";
		}
		if (reader.prevTag1("NNS") && reader.word === "claim") return "VBP";
		if (reader.prevWord1(",") && reader.word === "swing") return "VBP";
		if (reader.word === "estimate" && reader.nextWord1("that")) return "VBP";
		if (reader.prevTag1("NNS") && reader.nextTag1("JJ")) {
			if (reader.suffixL3("ing")) return "VBG";
			if (reader.suffixL4("owth")) return "NN";
			return "VBP";
		}
		if (reader.prevTag1("IN") && reader.word === "show") return "VBP";
		if (reader.prevTag1(",") && reader.nextTag1("DT")) {
			if (reader.suffixL3("ing")) return "VBG";
			if (reader.suffixL2("ay")) return "NN";
			return "VBP";
		}
		if (reader.prevWord1("Democrats")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "fall") return "VBP";
		if (reader.prevTag2("WP") && reader.prevTag1("RB")) return "VBP";
		if (reader.prevWord1("that") && reader.nextWord1("a")) return "VBP";
		if (reader.prevWord2("the") && reader.prevWord1("markets")) return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "fare") return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "place") return "VBP";
		if (reader.prevTag1("NNS") && reader.word === "approach") return "VBP";
		if (reader.suffixL4("sory")) return "JJ";
		if (reader.prevWord2("S&P") && reader.word === "stock-index") return "JJ";
		if (reader.prevWord1("was") && reader.word === "right") return "JJ";
		if (reader.prevTag1("IN") && reader.word === "gold" && reader.nextTag1("NNS")) return "JJ";
		if (reader.nextWord1("number") && reader.nextWord2("of")) return "JJ";
		if (reader.prevTag1("NN") && reader.word === "interest-rate") return "JJ";
		if (reader.suffixL4("gone")) return "JJ";
		if (reader.prevWord2("") && reader.prevWord1("The") && reader.word === "benchmark") return "JJ";
		if (reader.word === "representative" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevTag1("IN") && reader.word === "fossil" && reader.nextTag1("NNS")) return "JJ";
		if (reader.suffixL4("tish")) return "JJ";
		if (reader.word === "half-hour" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag1("CC") && reader.word === "foreign-exchange") return "JJ";
		if (reader.word === "one-third" && reader.nextTag1("IN") && reader.nextTag2("NNP")) return "JJ";
		if (reader.prevTag1(",") && reader.word === "deputy" && reader.nextTag1("JJ")) return "JJ";
		if (reader.word === "content" && reader.nextTag1("TO")) return "JJ";
		if (reader.prevTag2("VBZ") && reader.prevTag1("DT") && reader.word === "veteran") return "JJ";
		if (reader.word === "middle" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevTag1("IN") && reader.word === "plastic") return "JJ";
		if (reader.prevWord2("a") && reader.prevWord1("more")) return "JJ";
		if (reader.suffixL4("like")) {
			if (reader.word === "dislike" && reader.nextWord1("of")) return "NN";
			return "JJ";
		}
		if (reader.prevTag1("DT") && reader.word === "gold" && reader.nextTag1("JJ")) return "JJ";
		if (reader.prevTag1("VB") && reader.word === "right") return "JJ";
		if (reader.word === "health-care" && reader.nextTag1("NNS") && reader.nextTag2("IN")) return "JJ";
		if (reader.prevTag1("DT") && reader.word === "assistant" && reader.nextTag1("NN")) return "JJ";
		if (reader.suffixL3("ngy")) return "JJ";
		if (reader.nextWord1("economic")) return "JJ";
		if (reader.prevWord1("(") && reader.nextWord1(".")) return "JJ";
		if (reader.suffixL3("ten")) return "JJ";
		if (reader.suffixL4("tine")) return "JJ";
		if (reader.prevTag1("JJ") && reader.word === "reset" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevTag1("VB") && reader.word === "stock-index" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "mine" && reader.nextTag1("NN")) return "JJ";
		if (reader.suffixL3("ppy")) return "JJ";
		if (reader.suffixL3("mpy")) return "JJ";
		if (reader.prevTag2("NNS") && reader.prevTag1("IN") && reader.word === "half") return "DT";
		if (reader.word === "half" && reader.nextTag1("VBN")) return "RB";
		if (reader.word === "right" && reader.nextWord1("after")) return "RB";
		if (reader.word === "police" && reader.nextTag1("VBD")) return "NNS";
		if (reader.word === "police" && reader.nextTag1("VBP")) return "NNS";
		if (reader.prevWord2("'s") && reader.prevWord1("a") && reader.word === "Dollar") return "NNP";
		if (reader.prevTag1("NNP") && reader.word === "Company") return "NNP";
		if (reader.nextWord1("Trust")) return "NNP";
		if (reader.nextTag1("NNP") && reader.nextTag2("''")) {
			if (reader.prevWord1("``") && reader.nextWord1("Cleopatra")) return "NN";
			return "NNP";
		}
		if (reader.prevWord2("The") && reader.word === "Interest") return "NNP";
		if (reader.nextWord1("System")) return "NNP";
		if (reader.prevWord2("of") && reader.prevWord1("the") && reader.word === "Currency") return "NNP";
		if (reader.prevTag1("DT") && reader.word === "B-2") return "NNP";
		if (reader.nextWord1("&")) {
			if (reader.suffixL2("re")) return "NN";
			return "NNP";
		}
		if (reader.nextWord1("Channel")) return "NNP";
		if (reader.nextWord1("Industry")) return "NNP";
		if (reader.nextWord1("Report")) return "NNP";
		if (reader.prevTag1("CC") && reader.word === "move") return "VB";
		if (reader.prevWord2("will") && reader.prevWord1("likely")) return "VB";
		if (reader.prevTag2("MD") && reader.prevTag1("``")) return "VB";
		if (reader.prevWord1("always")) return "VB";
		if (reader.suffixL4("dier")) return "JJR";
		return "NN";
	}
	if (reader.tag === ")") return ")";
	if (reader.tag === "(") return "(";
	if (reader.tag === "FW") {
		if (reader.word === "pro" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag2("NNP")) {
			if (reader.prevTag1("NNP") && reader.word === "vs." && reader.nextTag1("NNP")) return "IN";
			if (reader.prevWord2("Banca") && reader.prevWord1("Nazionale")) return "FW";
			if (reader.prevWord1("'s")) return "NN";
			return "NNP";
		}
		if (reader.prevWord1("of") && reader.word === "glasnost" && reader.nextWord1(",")) return "NN";
		if (reader.prevTag1("NNS") && reader.word === "vs.") return "CC";
		return "FW";
	}
	if (reader.tag === ",") return ",";
	if (reader.tag === ".") return ".";
	if (reader.tag === "TO") return "TO";
	if (reader.tag === "PRP") return "PRP";
	if (reader.tag === "RB") {
		if (reader.prevTag1("DT") && reader.nextTag1("NN")) {
			if (reader.suffixL4("nger")) {
				if (reader.prevTag2("IN") && reader.prevTag1("DT") && reader.word === "longer") return "JJR";
				if (reader.word === "longer" && reader.nextWord2(",")) return "RBR";
				return "RB";
			}
			if (reader.suffixL3("lly")) return "RB";
			if (reader.suffixL3("gly")) return "RB";
			if (reader.prevWord2("") && reader.word === "even") return "RB";
			return "JJ";
		}
		if (reader.prevTag1("VB") && reader.word === "down") {
			if (reader.prevWord2("will") && reader.prevWord1("be")) return "RB";
			if (reader.word === "down" && reader.nextWord1("and") && reader.nextWord2("talk")) return "RB";
			if (reader.prevWord1("shut") && reader.nextWord1(".")) return "RB";
			if (reader.nextTag1("IN") && reader.nextTag2("PRP")) return "RB";
			if (reader.prevWord2("n't") && reader.prevWord1("look")) return "RB";
			return "RP";
		}
		if (reader.word === "so" && reader.nextTag1("PRP")) return "IN";
		if (reader.word === "enough" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "down" && reader.nextTag1("DT")) {
			if (reader.nextWord2("road")) return "IN";
			if (reader.prevTag1("VBZ")) return "RB";
			if (reader.word === "down" && reader.nextWord1("the") && reader.nextWord2("street")) return "IN";
			if (reader.prevTag2("JJ")) return "IN";
			return "RP";
		}
		if (reader.prevTag1("TO") && reader.word === "back") return "VB";
		if (reader.prevTag1("DT") && reader.word === "only") {
			if (reader.prevWord2("to") && reader.prevWord1("the") && reader.word === "only") return "RB";
			return "JJ";
		}
		if (reader.word === "so" && reader.nextTag1("DT")) return "IN";
		if (reader.word === "enough" && reader.nextTag1("NNS")) return "JJ";
		if (reader.prevWord1("the") && reader.word === "back") return "NN";
		if (reader.word === "so" && reader.nextWord1("that")) {
			if (reader.prevTag2("IN")) return "RB";
			return "IN";
		}
		if (reader.prevTag1("NN") && reader.word === "down") {
			if (reader.prevWord1("way")) return "IN";
			if (reader.word === "down" && reader.nextTag1("CD")) return "RB";
			if (reader.prevWord1("right") && reader.word === "down") return "IN";
			return "RP";
		}
		if (reader.prevTag1("IN") && reader.word === "back") return "JJ";
		if (reader.word === "once" && reader.nextTag1("PRP")) return "IN";
		if (reader.prevTag1("PRP") && reader.word === "down") return "RP";
		if (reader.prevTag1("VBN") && reader.word === "down") {
			if (reader.prevTag2("PRP") && reader.prevTag1("VBN") && reader.word === "down") return "RB";
			if (reader.nextTag1("RB")) return "RB";
			if (reader.nextTag2("NN")) return "RB";
			return "RP";
		}
		if (reader.prevTag1("VBG") && reader.word === "down") {
			if (reader.nextTag1("JJ")) return "RB";
			if (reader.prevWord2("are") && reader.prevWord1("going")) return "RB";
			if (reader.nextWord2("neck")) return "IN";
			if (reader.prevWord1("coming")) return "IN";
			return "RP";
		}
		if (reader.word === "So" && reader.nextTag1("DT")) return "IN";
		if (reader.word === "longer" && reader.nextTag1("IN")) return "RBR";
		if (reader.prevTag1(",") && reader.word === "so" && reader.nextTag1("NNS")) return "IN";
		if (reader.word === "back" && reader.nextTag1("DT")) {
			if (reader.word === "back" && reader.nextWord2("confidence")) return "RB";
			return "RP";
		}
		if (reader.prevWord1("give")) return "RP";
		if (reader.prevWord1("the") && reader.nextWord1(",")) return "NN";
		if (reader.prevTag1("PRP$") && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag1("JJ") && reader.word === "down") return "RP";
		if (reader.prevTag1("VBG") && reader.nextTag1("PRP$")) return "RP";
		if (reader.word === "only" && reader.nextTag1("NN") && reader.nextTag2("NN")) {
			if (reader.word === "only" && reader.nextWord1("half")) return "RB";
			return "JJ";
		}
		if (reader.word === "upward" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag1("IN") && reader.word === "prior") return "JJ";
		if (reader.word === "only" && reader.nextTag1("JJ") && reader.nextTag2("NN")) {
			if (reader.word === "only" && reader.nextWord1("limited")) return "RB";
			return "JJ";
		}
		if (reader.word === "down" && reader.nextTag1("IN") && reader.nextTag2("IN")) return "IN";
		if (reader.prevTag1("MD") && reader.word === "back") return "VB";
		if (reader.prevWord1("scaled")) return "RP";
		if (reader.prevWord1("the") && reader.nextWord1(".")) return "NN";
		if (reader.word === "longer" && reader.nextTag1("NNS")) return "JJR";
		if (reader.prevWord2("30") && reader.prevWord1("years")) return "IN";
		if (reader.prevTag2("IN") && reader.prevTag1("NNS") && reader.word === "ago") return "IN";
		if (reader.word === "ago" && reader.nextTag1(",") && reader.nextTag2("NN")) return "IN";
		if (reader.word === "Right" && reader.nextWord1("to") && reader.nextWord2("Life")) return "NNP";
		if (reader.word === "back" && reader.nextTag1("NNS")) {
			if (reader.word === "back" && reader.nextTag1("NNS") && reader.nextTag2("IN")) return "JJ";
			return "RP";
		}
		if (reader.nextWord1("roughly")) return "RP";
		if (reader.prevWord1("bounced")) return "RP";
		if (reader.word === "down" && reader.nextTag1("PRP$") && reader.nextTag2("NN")) return "RP";
		if (reader.word === "back" && reader.nextWord1("from") && reader.nextWord2("program")) return "RP";
		if (reader.prevTag1("NNS") && reader.word === "down" && reader.nextTag1("IN")) return "RP";
		if (reader.prevWord1("back") && reader.word === "down") return "RP";
		if (reader.prevTag1("VBD") && reader.word === "down" && reader.nextTag1("NNS")) return "RP";
		if (reader.prevTag2("VBP") && reader.prevTag1("VBN") && reader.word === "away") return "RP";
		if (reader.prevWord1("the") && reader.nextWord1("of")) return "NN";
		if (reader.prevTag1("") && reader.word === "Yet" && reader.nextTag1("PRP")) return "CC";
		if (reader.word === "Yet" && reader.nextWord1("some")) return "CC";
		if (reader.prevWord1(",") && reader.word === "well" && reader.nextWord1(",")) return "UH";
		if (reader.prevTag1("VBZ") && reader.word === "enough") return "JJ";
		if (reader.prevTag2("IN") && reader.prevTag1("VBG") && reader.word === "only") return "JJ";
		if (reader.prevTag1("IN") && reader.word === "enough") return "JJ";
		if (reader.prevTag1("IN") && reader.word === "upward" && reader.nextTag1("NNS")) return "JJ";
		if (reader.word === "later" && reader.nextWord1("years")) return "JJ";
		if (reader.prevTag1("DT") && reader.word === "very" && reader.nextTag1("NNS")) return "JJ";
		if (reader.word === "south" && reader.nextTag1("NNP")) return "JJ";
		if (reader.word === "only" && reader.nextTag1("NNS")) {
			if (reader.word === "only" && reader.nextWord1("hours")) return "RB";
			return "JJ";
		}
		if (reader.prevTag1("NNS") && reader.word === "so" && reader.nextTag1("NNS")) return "IN";
		if (reader.prevTag1("NNS") && reader.word === "once" && reader.nextTag1("DT")) return "IN";
		if (reader.word === "So" && reader.nextWord1("we")) return "IN";
		if (reader.word === "Currently" && reader.nextTag1(",") && reader.nextTag2("NNP")) return "NNP";
		if (reader.prevTag1("DT") && reader.word === "Well") return "NNP";
		return "RB";
	}
	if (reader.tag === ":") return ":";
	if (reader.tag === "NNS") {
		if (reader.prevTag1("PRP")) {
			if (reader.prevTag2("VB")) return "NNS";
			if (reader.prevWord1("them")) return "NNS";
			if (reader.prevWord1("we")) return "NNS";
			if (reader.suffixL3("ple")) return "NNS";
			if (reader.prevTag2("VBG") && reader.prevTag1("PRP")) return "NNS";
			return "VBZ";
		}
		if (reader.suffixL2("us")) {
			if (reader.suffixL3("nus")) return "NN";
			if (reader.prevTag1("DT") && reader.nextTag1(".")) return "NN";
			if (reader.prevWord2("in") && reader.prevWord1("the")) return "NN";
			if (reader.suffixL3("cus")) return "NN";
			if (reader.suffixL3("eus")) return "NN";
			if (reader.word === "gurus" && reader.nextTag1("NNP")) return "NNS";
			return "JJ";
		}
		if (reader.prevWord2(",") && reader.prevWord1("which")) {
			if (reader.suffixL3("ers")) return "NNS";
			return "VBZ";
		}
		if (reader.prevWord2("Mr.")) return "VBZ";
		if (reader.suffixL2("ss")) {
			if (reader.word === "fiberglass") return "NNS";
			if (reader.nextTag1("PRP")) return "VB";
			if (reader.nextWord2("for")) return "VB";
			if (reader.prevWord1("'s")) return "NN";
			if (reader.nextTag1("CC") && reader.nextTag2("VBZ")) return "NN";
			return "JJ";
		}
		if (reader.prevWord1("who")) return "VBZ";
		if (reader.prevTag1("NNP") && reader.word === "plans") return "VBZ";
		if (reader.prevTag2("NN") && reader.prevTag1("RB")) {
			if (reader.nextTag2("JJR")) return "NNS";
			return "VBZ";
		}
		if (reader.prevTag2("PRP") && reader.prevTag1("RB")) return "VBZ";
		if (reader.nextTag1("PRP$")) {
			if (reader.prevTag2("IN")) return "NNS";
			if (reader.nextWord1("my")) return "NNS";
			if (reader.suffixL2("rs")) return "NNS";
			return "VBZ";
		}
		if (reader.word === "Investors" && reader.nextTag1("NNP")) {
			if (reader.prevTag2("NNP") && reader.prevTag1("NNP")) return "NNP";
			if (reader.word === "Investors" && reader.nextWord1("Service") && reader.nextWord2("said")) return "NNP";
			return "NNPS";
		}
		if (reader.prevTag2("NNP") && reader.prevTag1("RB")) return "VBZ";
		if (reader.prevTag1("DT") && reader.word === "yen") return "NN";
		if (reader.prevTag1(",") && reader.nextTag1("DT")) return "VBZ";
		if (reader.word === "estimates" && reader.nextWord1("that")) return "VBZ";
		if (reader.prevTag1("NNP") && reader.nextTag1("DT")) {
			if (reader.suffixL2("rs")) return "NNS";
			if (reader.nextWord2("month")) return "NNS";
			if (reader.prevWord1("American")) return "NNS";
			if (reader.nextWord1("this") && reader.nextWord2("year")) return "NNS";
			return "VBZ";
		}
		if (reader.prevTag2(",") && reader.prevTag1("''")) {
			if (reader.suffixL2("rs")) return "NNS";
			return "VBZ";
		}
		if (reader.prevTag1("NN") && reader.word === "plans" && reader.nextTag1("TO")) return "VBZ";
		if (reader.prevTag1("RB") && reader.nextTag1("DT")) return "VBZ";
		if (reader.prevWord1("that") && reader.nextWord1("the")) return "VBZ";
		if (reader.prevTag1(",") && reader.word === "plans") return "VBZ";
		if (reader.word === "accounts" && reader.nextWord1("for")) return "VBZ";
		if (reader.prevWord1("zero-coupon") && reader.word === "CDs") return "NNPS";
		if (reader.prevTag1("CC") && reader.nextTag1("DT")) {
			if (reader.suffixL3("ers")) return "NNS";
			return "VBZ";
		}
		if (reader.suffixL3("sis")) return "NN";
		if (reader.word === "amounts" && reader.nextTag1("TO")) {
			if (reader.prevTag2("POS") && reader.prevTag1("NN")) return "NNS";
			return "VBZ";
		}
		if (reader.word === "costs" && reader.nextWord1("about")) return "VBZ";
		if (reader.word === "increases" && reader.nextTag1("NN")) return "VBZ";
		if (reader.nextWord1("Inc.")) {
			if (reader.suffixL2("ns")) return "NNPS";
			return "NNP";
		}
		if (reader.nextTag1("PRP") && reader.nextTag2("IN")) return "VBZ";
		if (reader.prevTag1("NNP") && reader.word === "Investors") return "NNPS";
		if (reader.prevWord1("million") && reader.word === "yen") return "NN";
		if (reader.prevTag2("DT") && reader.prevTag1("JJ") && reader.word === "data") return "NN";
		if (reader.word === "declines" && reader.nextWord1("to")) return "VBZ";
		if (reader.word === "values" && reader.nextTag1("NNP")) return "VBZ";
		if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "sets") return "VBZ";
		if (reader.word === "claims" && reader.nextWord1("that")) {
			if (reader.prevTag1("IN") && reader.word === "claims") return "NNS";
			return "VBZ";
		}
		if (reader.prevWord1("Congress")) return "VBZ";
		if (reader.nextTag1("NNP") && reader.nextTag2("POS")) return "VBZ";
		if (reader.prevWord1("now")) {
			if (reader.nextTag2("VBG")) return "NNS";
			return "VBZ";
		}
		if (reader.word === "increases" && reader.nextWord1("the")) return "VBZ";
		if (reader.prevWord2("of") && reader.prevWord1("Securities")) return "NNPS";
		if (reader.prevTag1("NNP") && reader.word === "Banks") {
			if (reader.word === "Banks" && reader.nextTag1("IN") && reader.nextTag2("NNP")) return "NNP";
			return "NNPS";
		}
		if (reader.prevTag2("NNP") && reader.prevTag1("NNP") && reader.word === "Dealers") return "NNPS";
		if (reader.prevTag2("DT") && reader.prevTag1("JJ") && reader.word === "electronics") return "NN";
		if (reader.prevWord1("141.45") && reader.word === "yen") return "NN";
		if (reader.prevWord1("141.90") && reader.word === "yen" && reader.nextWord1(",")) return "NN";
		if (reader.prevWord1("one") && reader.word === "yen") return "NN";
		if (reader.word === "centers" && reader.nextWord1("on")) return "VBZ";
		if (reader.prevWord2("the") && reader.prevWord1("government")) return "VBZ";
		if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "trades") return "VBZ";
		if (reader.word === "marks" && reader.nextWord1("the")) return "VBZ";
		if (reader.prevWord1("This")) return "VBZ";
		if (reader.word === "features" && reader.nextTag1("DT")) return "VBZ";
		if (reader.word === "claims" && reader.nextWord1("he")) return "VBZ";
		if (reader.prevTag1(",") && reader.nextTag1("NNP")) {
			if (reader.suffixL4("ists")) return "NNS";
			return "VBZ";
		}
		if (reader.prevWord2("the") && reader.prevWord1("company")) return "VBZ";
		if (reader.prevTag1("CC") && reader.word === "plans" && reader.nextTag1("TO")) return "VBZ";
		if (reader.word === "notes" && reader.nextWord1("that")) return "VBZ";
		if (reader.prevTag1("NNP") && reader.word === "Companies") return "NNPS";
		if (reader.nextWord1("Commission")) return "NNPS";
		if (reader.word === "Sandinistas" && reader.nextTag1("VBD")) return "NNPS";
		if (reader.nextWord1("base")) return "NN";
		if (reader.prevWord1("141.70")) return "NN";
		if (reader.prevWord1("other") && reader.word === "telecommunications") return "NN";
		if (reader.word === "yen" && reader.nextWord1("late") && reader.nextWord2("Friday")) return "NN";
		if (reader.word === "mid-1970s" && reader.nextWord1(",")) return "CD";
		if (reader.prevWord2("the") && reader.prevWord1("early") && reader.word === "1970s") return "CD";
		if (reader.nextWord1("taxes") && reader.nextWord2(".")) return "JJ";
		if (reader.prevWord2("") && reader.prevWord1("That")) return "VBZ";
		if (reader.prevWord1("suit")) return "VBZ";
		if (reader.nextWord1("new")) return "VBZ";
		if (reader.prevTag1("NN") && reader.word === "places" && reader.nextTag1("DT")) return "VBZ";
		if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "moves") return "VBZ";
		if (reader.word === "designs" && reader.nextTag1("NN")) return "VBZ";
		if (reader.word === "figures" && reader.nextTag1("PRP")) return "VBZ";
		if (reader.word === "cuts" && reader.nextTag1("NN")) return "VBZ";
		if (reader.prevTag1("NNP") && reader.word === "controls") return "VBZ";
		if (reader.nextTag1("PRP") && reader.nextTag2("TO")) return "VBZ";
		if (reader.prevTag2("WDT") && reader.prevTag1("RB")) return "VBZ";
		if (reader.word === "matters" && reader.nextTag1("VBZ")) return "VBZ";
		if (reader.prevTag1("NNP") && reader.word === "moves" && reader.nextTag1("IN")) return "VBZ";
		if (reader.prevTag1("NNP") && reader.word === "votes") return "VBZ";
		if (reader.prevTag1("NN") && reader.word === "flows" && reader.nextTag1("IN")) return "VBZ";
		if (reader.word === "worries" && reader.nextWord1("that") && reader.nextWord2("the")) return "VBZ";
		if (reader.prevWord1("group") && reader.word === "controls") return "VBZ";
		if (reader.prevWord1("proposal") && reader.nextWord1("the")) return "VBZ";
		if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "rises") return "VBZ";
		if (reader.suffixL4("fies")) {
			if (reader.word === "satisfies" && reader.nextTag1("DT")) return "NNS";
			return "VBZ";
		}
		if (reader.word === "sets" && reader.nextTag1("RP")) return "VBZ";
		if (reader.prevWord2("the") && reader.prevWord1("bill")) return "VBZ";
		if (reader.prevTag1("NN") && reader.word === "attempts" && reader.nextTag1("TO")) return "VBZ";
		if (reader.nextWord1("Association") && reader.nextWord2(",")) return "NNP";
		if (reader.word === "Rates" && reader.nextWord1("for")) return "NNP";
		if (reader.prevTag1("NNP") && reader.word === "Institutions") return "NNP";
		return "NNS";
	}
	if (reader.tag === "NNP") {
		if (reader.word === "American" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "American" && reader.nextTag1("NNS")) return "JJ";
		if (reader.nextWord1("German")) {
			if (reader.nextWord1("German") && reader.nextWord2("distributor")) return "NNP";
			return "JJ";
		}
		if (reader.suffixL3("sed")) return "JJ";
		if (reader.prevTag1("") && reader.nextTag1("NNS")) {
			if (reader.prevWord1("") && reader.nextWord1("shares")) return "NNP";
			if (reader.word === "U.S.") return "NNP";
			if (reader.prevWord2("") && reader.word === "FEDERAL") return "JJ";
			if (reader.suffixL3("ial")) return "JJ";
			if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "Tokyo") return "NNP";
			if (reader.suffixL2("gn")) return "JJ";
			if (reader.prevWord1("") && reader.word === "New") return "JJ";
			if (reader.suffixL2("ed")) return "JJ";
			if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "Treasury") return "NNP";
			if (reader.nextTag2("NNP")) return "NNP";
			if (reader.nextWord1("plans") && reader.nextWord2("to")) return "NNP";
			if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "Big") return "JJ";
			if (reader.suffixL3("ual")) return "JJ";
			if (reader.suffixL3("ord")) return "NNP";
			if (reader.word === "Independent") return "JJ";
			if (reader.suffixL3("ral")) return "JJ";
			if (reader.prevWord1("") && reader.word === "California") return "NNP";
			if (reader.suffixL3("ber")) return "NNP";
			if (reader.prevTag1("") && reader.word === "Medical" && reader.nextTag1("NNS")) return "JJ";
			if (reader.suffixL3("nal")) return "JJ";
			if (reader.word === "Environmental" && reader.nextTag1("NNS")) return "JJ";
			if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "Jaguar") return "NNP";
			if (reader.suffixL2("ue")) return "JJ";
			if (reader.suffixL3("and")) return "NNP";
			if (reader.suffixL3("lly")) return "NNP";
			if (reader.prevWord1("") && reader.nextWord1("years")) return "CD";
			if (reader.suffixL2("en")) return "CD";
			if (reader.prevTag1("") && reader.word === "White" && reader.nextTag1("NNS")) return "JJ";
			if (reader.prevWord1("") && reader.word === "Direct") return "JJ";
			if (reader.prevTag1("") && reader.word === "Legal" && reader.nextTag1("NNS")) return "JJ";
			if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "Western") return "JJ";
			if (reader.suffixL4("NESE")) return "JJ";
			if (reader.suffixL2("ar")) {
				if (reader.prevWord1("") && reader.word === "Jaguar") return "NNP";
				return "JJ";
			}
			if (reader.word === "GM") return "NNP";
			if (reader.prevWord2("") && reader.word === "Paribas") return "NNP";
			if (reader.prevTag1("") && reader.word === "CBS") return "NNP";
			if (reader.prevWord2("") && reader.word === "Kidder") return "NNP";
			if (reader.word === "Fed" && reader.nextTag1("NNS")) return "NNP";
			if (reader.suffixL3("ica")) return "NNP";
			if (reader.prevWord1("") && reader.word === "Columbia" && reader.nextWord1("officials")) return "NNP";
			if (reader.prevWord2("") && reader.word === "Warner") return "NNP";
			if (reader.nextWord1("rules")) return "NNP";
			if (reader.prevWord2("") && reader.word === "Frankfurt") return "NNP";
			if (reader.nextWord1("officials") && reader.nextWord2("did")) return "NNP";
			if (reader.prevTag1("") && reader.word === "Health" && reader.nextTag1("NNS")) return "NNP";
			if (reader.word === "Mobil" && reader.nextTag1("NNS")) return "NNP";
			if (reader.word === "Frank" && reader.nextTag1("NNS") && reader.nextTag2("DT")) return "NNP";
			if (reader.word === "Beijing") return "NNP";
			if (reader.word === "Exxon" && reader.nextTag1("NNS")) return "NNP";
			if (reader.nextWord1("executives") && reader.nextWord2("were")) return "NNP";
			if (reader.nextWord1("controls")) return "NNP";
			if (reader.suffixL4("nate")) return "NNP";
			if (reader.suffixL2("ER")) return "NNP";
			return "NN";
		}
		if (reader.word === "Western" && reader.nextTag1("NNS")) return "JJ";
		if (reader.word === "Western" && reader.nextTag1("NN")) {
			if (reader.prevWord2("&")) return "NNP";
			return "JJ";
		}
		if (reader.prevWord2("") && reader.word === "Average") return "JJ";
		if (reader.word === "South" && reader.nextTag1("JJ")) {
			if (reader.nextTag1("JJ") && reader.nextTag2("NNP")) return "NNP";
			return "JJ";
		}
		if (reader.prevTag1("") && reader.nextTag1("VBP")) return "NNS";
		if (reader.word === "American" && reader.nextTag1("JJ")) return "JJ";
		if (reader.suffixL4("ians")) return "NNPS";
		if (reader.word === "North" && reader.nextWord1("American")) {
			if (reader.word === "North" && reader.nextTag1("NNP") && reader.nextTag2("NNPS")) return "NNP";
			return "JJ";
		}
		if (reader.prevTag1("") && reader.word === "Business") return "NN";
		if (reader.prevTag1("") && reader.nextTag1("DT")) return "VBG";
		if (reader.prevWord1("") && reader.word === "First" && reader.nextWord1(",")) return "RB";
		if (reader.word === "Costa" && reader.nextTag1("JJ")) return "JJ";
		if (reader.word === "Communist" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevWord1("") && reader.word === "Sterling" && reader.nextWord1("was")) return "NN";
		if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "Personal") return "JJ";
		if (reader.nextWord1("European")) return "JJ";
		if (reader.nextWord1("Asian")) return "JJ";
		if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "Third") return "JJ";
		if (reader.prevTag1("") && reader.word === "Federal" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "Latin" && reader.nextWord1("American")) return "JJ";
		if (reader.suffixL3("led")) {
			if (reader.prevWord1("")) return "VBN";
			return "JJ";
		}
		if (reader.prevTag1("") && reader.word === "State" && reader.nextTag1("NN")) return "NN";
		if (reader.word === "Series" && reader.nextWord1("1989")) return "NN";
		if (reader.prevWord2("") && reader.word === "Index") return "NN";
		if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "Manufacturers") return "NNS";
		if (reader.word === "de" && reader.nextTag1("NN")) return "FW";
		if (reader.suffixL4("wned")) return "JJ";
		if (reader.word === "North" && reader.nextTag1("JJ")) return "JJ";
		if (reader.suffixL4("like")) return "JJ";
		if (reader.word === "Big" && reader.nextTag1("NN")) return "JJ";
		if (reader.suffixL4("tyle")) return "JJ";
		if (reader.prevWord2("Bill") && reader.word === "Rights") return "NNPS";
		if (reader.word === "de" && reader.nextTag1("NNP") && reader.nextTag2("CC")) return "FW";
		if (reader.word === "de" && reader.nextWord1("Rothschild") && reader.nextWord2(",")) return "FW";
		if (reader.suffixL4("area")) return "JJ";
		if (reader.prevTag1("") && reader.word === "New" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevTag1("IN") && reader.word === "Northern" && reader.nextTag1("NNP")) return "JJ";
		if (reader.word === "Saudi" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "English" && reader.nextTag1("NNS")) return "JJ";
		if (reader.nextWord2("nations")) return "JJ";
		if (reader.prevWord1("") && reader.nextWord1("production")) return "NN";
		if (reader.prevTag1("") && reader.word === "Credit" && reader.nextTag1("NN")) return "NN";
		if (reader.word === "Capital" && reader.nextTag1("NN")) return "NN";
		if (reader.word === "Class" && reader.nextWord2("common")) return "NN";
		if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "Money") {
			if (reader.word === "Money" && reader.nextWord1("Market")) return "NNP";
			return "NN";
		}
		if (reader.word === "CD" && reader.nextWord1("yields")) return "NN";
		if (reader.suffixL3("ets")) return "NNPS";
		if (reader.prevTag1("") && reader.nextTag1("RP")) return "VBG";
		if (reader.suffixL3("hed")) return "VBN";
		if (reader.word === "High" && reader.nextTag1("NN") && reader.nextTag2("NNS")) return "JJ";
		if (reader.word === "General" && reader.nextWord1("unsecured")) return "JJ";
		if (reader.prevWord1("") && reader.nextWord1("trading")) return "JJ";
		if (reader.word === "American" && reader.nextTag1("CC")) return "JJ";
		if (reader.prevWord2("") && reader.word === "Commercial") return "JJ";
		if (reader.prevTag1(":") && reader.word === "Average") return "JJ";
		if (reader.word === "Foreign" && reader.nextTag1("NN")) return "JJ";
		if (reader.prevWord1("``") && reader.word === "First") return "JJ";
		if (reader.suffixL3("ype")) return "JJ";
		if (reader.suffixL4("nted")) return "JJ";
		if (reader.suffixL4("made")) return "JJ";
		if (reader.word === "Scottish" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "Little" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "Western" && reader.nextTag1("JJ") && reader.nextTag2("NNS")) return "JJ";
		if (reader.prevTag1("DT") && reader.word === "Arab" && reader.nextTag1("NN")) return "JJ";
		if (reader.suffixL3("ked")) {
			if (reader.word === "Asset-Backed" && reader.nextTag1("NNPS")) return "NNP";
			return "JJ";
		}
		if (reader.word === "Communist" && reader.nextTag1("NNS")) return "JJ";
		if (reader.word === "English" && reader.nextTag1("NN")) return "JJ";
		if (reader.suffixL4("ered")) {
			if (reader.prevTag2("")) return "VBN";
			return "JJ";
		}
		if (reader.prevTag1("") && reader.word === "Big" && reader.nextTag1("JJ")) return "JJ";
		if (reader.prevTag1("JJ") && reader.word === "CD" && reader.nextTag1("VBD")) return "NN";
		if (reader.prevWord2("Friday") && reader.word === "Market") return "NN";
		if (reader.prevWord1("a") && reader.word === "Series") return "NN";
		if (reader.word === "Litigation" && reader.nextWord1("consulting")) return "NN";
		if (reader.prevWord1("") && reader.word === "Investment") return "NN";
		if (reader.prevWord2("") && reader.word === "Football") return "NN";
		if (reader.word === "Test" && reader.nextWord1("of") && reader.nextWord2("Basic")) return "NN";
		if (reader.prevWord2("") && reader.word === "Law") return "NN";
		if (reader.prevTag2("") && reader.prevTag1("``") && reader.word === "Insurance") return "NN";
		if (reader.prevTag1("") && reader.word === "Market" && reader.nextTag1("NN")) return "NN";
		if (reader.nextWord1("shall") && reader.nextWord2("be")) return "NN";
		if (reader.prevTag1("") && reader.word === "Home" && reader.nextTag1("NN")) return "NN";
		if (reader.prevWord2("") && reader.word === "Management") {
			if (reader.prevTag1("") && reader.word === "Management" && reader.nextTag1("NNP")) return "NNP";
			return "NN";
		}
		if (reader.prevWord1("") && reader.nextWord1("to")) return "NN";
		if (reader.word === "Labor" && reader.nextTag1("VBZ")) return "NN";
		if (reader.nextWord2("In")) return "NN";
		if (reader.word === "East" && reader.nextTag1("NNPS") && reader.nextTag2(",")) return "NNS";
		if (reader.prevWord1("of") && reader.word === "CFCs") return "NNS";
		if (reader.prevWord1("") && reader.nextWord1("it")) return "VB";
		if (reader.prevWord2("the") && reader.word === "de") return "IN";
		if (reader.prevTag2("NNP") && reader.prevTag1("NNP") && reader.word === "de") return "IN";
		if (reader.prevWord1("IMA") && reader.word === "Holdings") return "NNPS";
		if (reader.prevWord2("Reliance") && reader.prevWord1("Group")) return "NNPS";
		if (reader.prevTag1("NNP") && reader.word === "Foods" && reader.nextTag1("NN")) return "NNPS";
		if (reader.prevTag2("IN") && reader.prevTag1("NNP") && reader.word === "Utilities") return "NNPS";
		return "NNP";
	}
	if (reader.tag === "VB") {
		if (reader.prevTag1("NNS")) {
			if (reader.prevWord2("") && reader.word === "close") return "RB";
			if (reader.word === "cut") {
				if (reader.prevTag2("DT")) return "NN";
				if (reader.word === "cut" && reader.nextWord1("into")) return "VBD";
				return "VBN";
			}
			if (reader.prevWord2("help")) return "VB";
			if (reader.prevTag2("DT") && reader.prevTag1("NNS") && reader.word === "be") return "VB";
			if (reader.prevTag2("NN") && reader.prevTag1("NNS") && reader.word === "be") return "VB";
			if (reader.prevWord2("make")) return "VB";
			if (reader.prevTag2("TO") && reader.prevTag1("NNS") && reader.word === "close") return "RB";
			if (reader.prevWord2("that") && reader.word === "buy") return "VB";
			if (reader.nextWord1("on") && reader.nextWord2("time")) return "VB";
			if (reader.prevWord1("orders")) return "VB";
			if (reader.prevTag2("IN") && reader.prevTag1("NNS") && reader.word === "be") return "VB";
			if (reader.prevWord2("let")) return "VB";
			if (reader.prevWord2("new") && reader.prevWord1("crises")) return "VB";
			if (reader.prevTag1("NNS") && reader.word === "go" && reader.nextTag1(",")) return "VB";
			if (reader.prevTag2("NNP") && reader.prevTag1("NNS") && reader.word === "play") return "VB";
			if (reader.suffixL4("tify")) return "VB";
			if (reader.prevTag2("PRP$") && reader.prevTag1("NNS") && reader.word === "look") return "VB";
			if (reader.prevWord2("helping")) return "VB";
			if (reader.prevTag2("JJ") && reader.prevTag1("NNS") && reader.word === "be") return "VB";
			if (reader.nextTag1("JJ") && reader.nextTag2("``")) return "VB";
			if (reader.prevWord2("stock") && reader.prevWord1("prices")) return "VB";
			if (reader.word === "put" && reader.nextTag1("DT") && reader.nextTag2("NN")) return "VBD";
			if (reader.prevWord1("people") && reader.word === "close" && reader.nextWord1("to")) return "JJ";
			return "VBP";
		}
		if (reader.prevTag1("PRP")) {
			if (reader.prevWord1("it")) {
				if (reader.prevWord2("said") && reader.prevWord1("it") && reader.word === "cut") return "VBD";
				return "VB";
			}
			if (reader.prevWord2("let")) return "VB";
			if (reader.prevWord2("help")) return "VB";
			if (reader.prevWord1("he")) {
				if (reader.word === "cut") return "VBD";
				return "VB";
			}
			if (reader.prevWord2("can")) return "VB";
			if (reader.prevWord1("him")) return "VB";
			if (reader.prevWord2("n't")) return "VB";
			if (reader.prevWord1("He")) return "VBD";
			if (reader.prevWord2("will")) return "VB";
			if (reader.prevTag2("VBP") && reader.prevTag1("PRP") && reader.word === "make") return "VB";
			if (reader.prevWord2("would")) return "VB";
			if (reader.nextWord1("it") && reader.nextWord2("?")) return "VB";
			if (reader.prevWord2("should") && reader.prevWord1("I")) return "VB";
			if (reader.prevWord2("Let")) return "VB";
			if (reader.prevTag1("PRP") && reader.word === "put" && reader.nextTag1("IN")) return "VBD";
			if (reader.prevWord1("she") && reader.word === "put") return "VBD";
			return "VBP";
		}
		if (reader.prevTag1("DT")) {
			if (reader.word === "elaborate" && reader.nextTag1("NN")) return "JJ";
			if (reader.suffixL3("ect")) return "JJ";
			if (reader.prevWord2("") && reader.prevWord1("Some")) return "VBP";
			if (reader.prevTag1("DT") && reader.word === "close" && reader.nextTag1("VB")) return "JJ";
			if (reader.suffixL3("ome")) {
				if (reader.suffixL4("come")) return "JJ";
				return "VB";
			}
			if (reader.prevWord1("both")) {
				if (reader.prevWord2("to") && reader.prevWord1("both")) return "VB";
				return "VBP";
			}
			if (reader.nextTag1("JJ")) return "JJ";
			if (reader.word === "live") return "JJ";
			if (reader.prevTag2("MD")) return "VB";
			if (reader.prevWord2("") && reader.word === "put") return "VBD";
			if (reader.suffixL2("in")) return "VBP";
			if (reader.nextTag1("CD") && reader.nextTag2("NN")) return "VBP";
			if (reader.prevWord2("we") && reader.prevWord1("all")) return "VBP";
			if (reader.suffixL2("ce")) return "VBP";
			if (reader.prevWord2("") && reader.prevWord1("These")) return "VBP";
			if (reader.word === "lead" && reader.nextWord1("sponsor")) return "JJ";
			if (reader.prevWord1("a") && reader.nextWord1("inspection")) return "JJ";
			if (reader.nextWord2("on")) return "JJ";
			return "NN";
		}
		if (reader.prevTag1("JJ")) {
			if (reader.prevTag2("MD")) return "VB";
			if (reader.nextWord1("the")) return "VB";
			if (reader.prevTag2("TO")) return "VB";
			if (reader.suffixL2("ow")) return "VBP";
			if (reader.word === "be") return "VB";
			if (reader.prevWord1("giant")) return "VB";
			if (reader.word === "close" && reader.nextWord1("to")) return "RB";
			if (reader.nextTag1("PRP$")) {
				if (reader.prevWord1("further")) return "VB";
				return "VBD";
			}
			if (reader.nextTag1("JJ")) {
				if (reader.prevTag2("MD") && reader.prevTag1("JJ")) return "VB";
				return "VBP";
			}
			if (reader.prevTag1("JJ") && reader.word === "carry") return "VBP";
			if (reader.suffixL4("main")) return "VBP";
			if (reader.prevWord1("many")) return "VBP";
			if (reader.nextTag1("RB") && reader.nextTag2("JJR")) return "VBP";
			if (reader.prevWord1("such") && reader.word === "close") return "JJ";
			return "NN";
		}
		if (reader.prevTag1("IN")) {
			if (reader.nextTag1("DT")) {
				if (reader.prevWord1("than")) return "VB";
				return "VBP";
			}
			if (reader.prevWord1("that") && reader.nextWord1("to")) return "VBP";
			if (reader.nextTag1("JJ") && reader.nextTag2("NNS")) return "VBP";
			if (reader.word === "live") return "JJ";
			if (reader.prevWord1("that") && reader.word === "make") return "VBP";
			if (reader.prevTag1("IN") && reader.nextTag1("PRP")) return "VBP";
			if (reader.prevWord1("that") && reader.nextWord1("in")) return "VBP";
			if (reader.prevWord1("that") && reader.nextWord1("on")) return "VBP";
			if (reader.nextTag1("PRP$")) {
				if (reader.prevTag2("RB") && reader.prevTag1("IN")) return "VB";
				return "VBP";
			}
			if (reader.prevTag1("IN") && reader.word === "go") return "VBP";
			if (reader.suffixL4("llow")) return "VBP";
			if (reader.prevWord1("that") && reader.word === "sell") return "VBP";
			if (reader.nextTag1("JJ") && reader.nextTag2("JJ")) {
				if (reader.prevWord1("that")) return "VBP";
				return "VB";
			}
			if (reader.word === "break") return "VB";
			if (reader.word === "be") return "VB";
			if (reader.word === "cut") return "VBD";
			if (reader.prevWord1("that") && reader.word === "cause") return "VBP";
			if (reader.word === "spend" && reader.nextWord1("between")) return "VBP";
			if (reader.suffixL2("in")) return "VBP";
			if (reader.prevWord2("shares")) return "VBP";
			if (reader.prevWord1("that") && reader.nextWord1("or")) return "VBP";
			if (reader.suffixL3("lve")) return "VBP";
			if (reader.prevTag1("IN") && reader.word === "look") return "VBP";
			if (reader.prevWord1("that") && reader.nextWord1("through")) return "VBP";
			if (reader.prevTag1("IN") && reader.word === "close" && reader.nextTag1("NNS")) return "JJ";
			return "NN";
		}
		if (reader.prevTag1("WP")) return "VBP";
		if (reader.prevTag1("NN")) {
			if (reader.prevTag1("NN") && reader.word === "be") return "VB";
			if (reader.word === "put") return "VBD";
			if (reader.nextWord1("the")) {
				if (reader.word === "put" && reader.nextWord1("the")) return "VBD";
				return "VBP";
			}
			if (reader.nextWord1("a")) {
				if (reader.word === "put" && reader.nextWord1("a")) return "VBD";
				if (reader.prevTag2("IN") && reader.prevTag1("NN")) return "VBP";
				return "VB";
			}
			if (reader.suffixL3("ome")) {
				if (reader.prevWord2("and") && reader.word === "come") return "VBP";
				return "VBN";
			}
			if (reader.prevTag1("NN") && reader.word === "make") return "VBP";
			if (reader.suffixL4("inue")) {
				if (reader.nextWord1("to")) return "VBP";
				return "VB";
			}
			if (reader.prevWord1("today")) return "VBP";
			if (reader.nextWord1("its")) return "VB";
			if (reader.prevWord1("person") && reader.nextWord1("to")) return "RB";
			if (reader.prevTag1("NN") && reader.word === "give") return "VBP";
			if (reader.nextWord1("us")) return "VBP";
			if (reader.prevTag1("NN") && reader.word === "appear") return "VBP";
			if (reader.prevWord2("some")) return "VB";
			if (reader.suffixL3("ick")) return "VB";
			if (reader.prevTag2("JJ") && reader.prevTag1("NN") && reader.word === "take") return "VB";
			if (reader.nextWord2("?")) return "VB";
			if (reader.prevTag1("NN") && reader.nextTag1("NNP")) return "VB";
			if (reader.prevWord2("that")) return "VB";
			if (reader.suffixL2("en")) return "VB";
			if (reader.prevWord2("American")) return "VB";
			if (reader.nextTag1("DT") && reader.nextTag2("IN")) return "VB";
			if (reader.suffixL2("nd")) {
				if (reader.nextTag2("DT")) return "VBP";
				return "VB";
			}
			if (reader.prevWord1("source") && reader.word === "close" && reader.nextWord1("to")) return "RB";
			if (reader.word === "beat" && reader.nextTag1("RB")) return "VBD";
			if (reader.word === "cut" && reader.nextWord1("into")) return "VBD";
			if (reader.nextWord2("for")) {
				if (reader.prevTag2("DT") && reader.prevTag1("NN")) return "VB";
				return "VBD";
			}
			if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "read") return "VBN";
			if (reader.prevWord2("a") && reader.word === "run") return "VBN";
			if (reader.prevTag1("NN") && reader.word === "turn") {
				if (reader.nextTag2("NN")) return "VB";
				return "VBP";
			}
			if (reader.suffixL2("de")) return "VBP";
			if (reader.prevTag1("NN") && reader.word === "go") return "VBP";
			if (reader.suffixL3("ain")) return "VBP";
			if (reader.nextTag1("PRP") && reader.nextTag2("IN")) {
				if (reader.prevTag1("NN") && reader.word === "put" && reader.nextTag1("PRP")) return "VBD";
				return "VBP";
			}
			if (reader.prevWord1("yesterday")) return "VBP";
			if (reader.nextTag1("JJ") && reader.nextTag2("NNS")) return "VBP";
			if (reader.nextTag1("NNS") && reader.nextTag2(".")) return "JJ";
			return "NN";
		}
		if (reader.prevWord1("has")) return "VBN";
		if (reader.prevTag2("NNS") && reader.prevTag1("RB")) {
			if (reader.suffixL4("lose")) return "RB";
			return "VBP";
		}
		if (reader.prevWord1("'s")) {
			if (reader.prevTag2("VB") && reader.prevTag1("POS")) return "VB";
			if (reader.prevTag2("PRP") && reader.prevTag1("POS")) return "VBN";
			return "NN";
		}
		if (reader.prevWord1("have")) return "VBN";
		if (reader.prevWord1("which")) return "VBP";
		if (reader.prevTag2("PRP") && reader.prevTag1("RB")) {
			if (reader.nextTag1("VBN")) return "VB";
			if (reader.prevTag2("PRP") && reader.prevTag1("RB") && reader.word === "cut") return "VBD";
			if (reader.nextWord2("as")) return "VB";
			if (reader.nextTag1("DT") && reader.nextTag2("NNS")) return "VB";
			return "VBP";
		}
		if (reader.prevTag1("PRP$")) {
			if (reader.prevTag1("PRP$") && reader.word === "buy") return "JJ";
			if (reader.word === "put") return "JJ";
			if (reader.nextWord2("with")) return "JJ";
			return "NN";
		}
		if (reader.prevWord1("be")) return "VBN";
		if (reader.prevTag1("NNPS")) return "VBP";
		if (reader.word === "close" && reader.nextWord1("to")) {
			if (reader.prevTag2("NNP") && reader.prevTag1("VBZ") && reader.word === "close") return "JJ";
			if (reader.nextWord1("to") && reader.nextWord2("being")) return "JJ";
			return "RB";
		}
		if (reader.prevWord2("a")) return "NN";
		if (reader.prevWord1("had")) return "VBN";
		if (reader.prevTag1("VBN")) {
			if (reader.word === "put") return "VBN";
			if (reader.word === "cut") return "VBN";
			return "NN";
		}
		if (reader.prevTag1("VBG")) {
			if (reader.prevWord1("helping")) return "VB";
			if (reader.prevWord1("having")) return "VBN";
			if (reader.prevWord1("being")) return "VBN";
			if (reader.word === "rid" && reader.nextTag1("IN")) return "JJ";
			if (reader.suffixL4("lose")) return "JJ";
			return "NN";
		}
		if (reader.prevTag1("CD")) {
			if (reader.prevTag1("CD") && reader.nextTag1("DT")) return "VBP";
			return "NN";
		}
		if (reader.prevTag2("POS") && reader.prevTag1("NNP")) return "NN";
		if (reader.prevTag1("NNP") && reader.word === "cut") return "VBD";
		if (reader.prevTag2("CC") && reader.prevTag1("NNP")) {
			if (reader.prevWord2("&") && reader.word === "put") return "VBD";
			return "VBP";
		}
		if (reader.prevTag2("WP") && reader.prevTag1("RB")) return "VBP";
		if (reader.prevWord1("declined") && reader.word === "comment") return "NN";
		if (reader.prevTag1("NNP") && reader.word === "put") return "VBD";
		if (reader.prevTag2("NNP") && reader.prevTag1("RB")) {
			if (reader.suffixL3("")) return "VBD";
			return "VBP";
		}
		if (reader.prevWord2("the") && reader.word === "yield") return "NN";
		if (reader.word === "talk" && reader.nextWord1("of")) return "NN";
		if (reader.prevWord1("more")) return "NN";
		if (reader.prevWord1("are")) {
			if (reader.nextWord1(".") && reader.nextWord2("")) return "JJ";
			return "VBN";
		}
		if (reader.prevTag1("VBD") && reader.word === "put") return "VBN";
		if (reader.prevWord1("back") && reader.word === "pay") return "NN";
		if (reader.prevWord1("pay")) return "NN";
		if (reader.prevWord1("'ve")) return "VBN";
		if (reader.word === "run" && reader.nextWord1("by")) return "VBN";
		if (reader.prevTag2("VBP") && reader.prevTag1(",")) return "VBP";
		if (reader.prevTag1(",") && reader.nextTag1("IN")) {
			if (reader.nextWord1("for")) return "VB";
			return "VBP";
		}
		if (reader.prevTag1("NNP") && reader.nextTag1(".")) return "NN";
		if (reader.prevWord1("is") && reader.word === "put") return "VBN";
		if (reader.prevTag2("VBZ") && reader.prevTag1("RB") && reader.word === "come") return "VBN";
		if (reader.prevWord1("usually")) return "VBP";
		if (reader.prevTag2("WDT") && reader.prevTag1("RB")) return "VBP";
		if (reader.prevTag1("NNP") && reader.nextTag1("NNS")) return "VBP";
		if (reader.prevTag1("NNP") && reader.nextTag1("JJ")) return "VBP";
		if (reader.prevTag1("NNP") && reader.nextTag1(",")) return "NNP";
		if (reader.word === "counter" && reader.nextWord1("to")) return "RB";
		if (reader.prevTag1("NNP") && reader.nextTag1("CC")) {
			if (reader.prevWord2("via") && reader.prevWord1("Dillon")) return "NNP";
			return "NN";
		}
		if (reader.prevWord1("to") && reader.word === "restructure" && reader.nextWord1("the")) return "NN";
		if (reader.prevTag1("'")) return "NN";
		if (reader.word === "sell" && reader.nextWord1("programs")) return "NN";
		if (reader.prevTag1("") && reader.nextTag1("NNS")) return "NN";
		if (reader.prevTag1("CC") && reader.word === "put") {
			if (reader.prevTag1("CC") && reader.word === "put" && reader.nextTag1("PRP$")) return "VB";
			return "VBD";
		}
		if (reader.prevTag1("RB") && reader.word === "put" && reader.nextTag1("IN")) return "VBD";
		if (reader.prevWord2("have") && reader.word === "become") return "VBN";
		if (reader.prevTag1("VBD") && reader.word === "cut") return "VBN";
		if (reader.prevTag2("") && reader.prevTag1("JJS")) return "VBP";
		if (reader.prevTag1(")") && reader.nextTag1("PRP")) return "VBP";
		if (reader.prevTag2("IN") && reader.prevTag1("RB")) return "VBP";
		if (reader.prevWord1("typically")) return "VBP";
		if (reader.prevTag2("VB") && reader.prevTag1("CC") && reader.word === "call") return "JJ";
		if (reader.word === "correct" && reader.nextWord1(",")) return "JJ";
		if (reader.prevWord1("were")) return "JJ";
		return "VB";
	}
	if (reader.tag === "WRB") return "WRB";
	if (reader.tag === "CC") {
		if (reader.word === "either" && reader.nextTag1("NN")) return "DT";
		if (reader.nextTag1(".")) {
			if (reader.prevTag1("DT") && reader.nextTag1(".")) return "NN";
			return "RB";
		}
		if (reader.word === "either" && reader.nextTag1(",")) return "RB";
		if (reader.prevTag1("MD") && reader.word === "either") return "RB";
		if (reader.prevWord2("that") && reader.word === "either") return "DT";
		if (reader.prevTag1("VBZ") && reader.word === "either") return "RB";
		if (reader.prevTag1("VBP") && reader.nextTag1("VBN")) return "RB";
		if (reader.prevTag1("IN") && reader.word === "either" && reader.nextTag1("IN")) return "DT";
		return "CC";
	}
	if (reader.tag === "LS") return "LS";
	if (reader.tag === "PDT") return "PDT";
	if (reader.tag === "RBS") {
		if (reader.prevTag1("DT") && reader.word === "hardest") return "JJS";
		return "RBS";
	}
	if (reader.tag === "RBR") {
		if (reader.prevTag1("DT")) return "JJR";
		if (reader.nextTag1("NNS")) return "JJR";
		if (reader.nextTag1("NN")) return "JJR";
		if (reader.word === "earlier" && reader.nextWord1(",") && reader.nextWord2("according")) return "RB";
		if (reader.prevWord1("year") && reader.word === "earlier" && reader.nextWord1("to")) return "JJR";
		if (reader.nextTag1("VBD") && reader.nextTag2("DT")) return "RB";
		if (reader.prevWord2("the") && reader.prevWord1("year")) return "RB";
		return "RBR";
	}
	if (reader.tag === "CD") {
		if (reader.prevWord1("no") && reader.word === "one") return "NN";
		if (reader.prevWord1("No")) return "NN";
		if (reader.suffixL3("ned")) return "JJ";
		if (reader.suffixL2("th")) return "JJ";
		if (reader.prevTag1("") && reader.nextTag1(".")) return "LS";
		if (reader.word === "one" && reader.nextWord1("'s")) {
			if (reader.prevTag2("IN") && reader.prevTag1("VBG")) return "PRP";
			return "NN";
		}
		if (reader.word === "one" && reader.nextTag1("MD")) return "PRP";
		if (reader.prevWord1("") && reader.nextWord1(")")) return "LS";
		if (reader.prevTag1(":") && reader.nextTag1(")")) return "LS";
		if (reader.prevWord1("Game")) return "NNP";
		if (reader.prevWord1("the") && reader.word === "one" && reader.nextWord1("that")) return "NN";
		if (reader.suffixL3("ury")) return "JJ";
		if (reader.prevTag1("JJ") && reader.word === "1990s") return "NNS";
		if (reader.suffixL4("S\/2")) return "NNP";
		return "CD";
	}
	if (reader.tag === "EX") {
		if (reader.nextTag1(".")) return "RB";
		if (reader.nextTag1(",")) {
			if (reader.prevWord1("lived") && reader.word === "there") return "EX";
			return "RB";
		}
		if (reader.nextTag1("IN")) return "RB";
		if (reader.word === "there" && reader.nextTag1("CC")) return "RB";
		if (reader.prevTag1("NNS")) {
			if (reader.nextWord1("were")) return "EX";
			return "RB";
		}
		if (reader.word === "there" && reader.nextTag1("TO")) return "RB";
		if (reader.prevTag1("RP")) {
			if (reader.prevTag2("NNS")) return "EX";
			return "RB";
		}
		return "EX";
	}
	if (reader.tag === "IN") {
		if (reader.word === "as" && reader.nextWord2("as")) return "RB";
		if (reader.word === "that" && reader.nextTag1("VBZ")) {
			if (reader.prevTag1("CC") && reader.word === "that") return "DT";
			if (reader.word === "that" && reader.nextWord1("is") && reader.nextWord2(",")) return "DT";
			if (reader.prevWord2("")) return "DT";
			if (reader.prevWord2("``")) return "DT";
			if (reader.prevWord1("all") && reader.word === "that") return "DT";
			if (reader.prevWord1("if")) return "DT";
			if (reader.prevWord1("though")) return "DT";
			if (reader.prevWord2("be") && reader.word === "that") return "DT";
			if (reader.prevTag2("PRP")) return "DT";
			if (reader.prevWord1("said")) return "DT";
			return "WDT";
		}
		if (reader.word === "that" && reader.nextTag1("MD")) {
			if (reader.prevTag2(",") && reader.prevTag1("CC")) return "DT";
			if (reader.prevWord1("said")) return "DT";
			if (reader.prevWord2("") && reader.prevWord1("But")) return "DT";
			if (reader.prevTag2("") && reader.prevTag1("IN")) return "DT";
			if (reader.prevWord1("because") && reader.word === "that" && reader.nextWord1("would")) return "DT";
			if (reader.prevWord2("of") && reader.prevWord1("restructuring") && reader.word === "that") return "DT";
			return "WDT";
		}
		if (reader.prevTag1("IN") && reader.word === "that") {
			if (reader.prevTag1("IN") && reader.nextTag1("PRP")) return "IN";
			if (reader.nextWord1("the")) return "IN";
			if (reader.nextTag1("IN") && reader.nextTag2("NNS")) return "IN";
			return "DT";
		}
		if (reader.word === "that" && reader.nextTag1("VBD")) {
			if (reader.prevWord1("but")) return "DT";
			if (reader.nextWord1("was") && reader.nextWord2("n't")) return "DT";
			if (reader.prevTag1("VBP") && reader.word === "that") return "DT";
			if (reader.prevWord1("But") && reader.nextWord1("was")) return "DT";
			if (reader.nextWord1("was") && reader.nextWord2("the")) return "DT";
			if (reader.prevTag1("RB") && reader.word === "that" && reader.nextTag1("VBD")) return "DT";
			return "WDT";
		}
		if (reader.word === "that" && reader.nextTag1("VBP")) return "WDT";
		if (reader.word === "that" && reader.nextTag1("VB")) {
			if (reader.prevTag1("VB") && reader.word === "that" && reader.nextTag1("VB")) return "DT";
			return "WDT";
		}
		if (reader.word === "that" && reader.nextTag1("VBN")) {
			if (reader.prevTag1("VBD") && reader.word === "that") return "IN";
			if (reader.nextWord2("by")) return "DT";
			if (reader.prevTag2("TO") && reader.prevTag1("VB")) return "IN";
			if (reader.prevWord1("market") && reader.word === "that") return "IN";
			if (reader.prevWord2(",")) return "IN";
			if (reader.prevWord1("issues") && reader.nextWord1("changed")) return "IN";
			return "WDT";
		}
		if (reader.word === "that" && reader.nextTag1("NN")) {
			if (reader.word === "that" && reader.nextWord2("rates")) return "IN";
			if (reader.nextWord2("prices")) return "IN";
			if (reader.word === "that" && reader.nextWord1("use")) return "WDT";
			if (reader.prevTag2("VBG") && reader.prevTag1("NNS")) return "WDT";
			if (reader.nextTag1("NN") && reader.nextTag2("PRP")) return "WDT";
			if (reader.word === "that" && reader.nextWord1("anyone")) return "IN";
			if (reader.word === "that" && reader.nextWord2("companies")) return "IN";
			if (reader.word === "that" && reader.nextWord1("everyone")) return "IN";
			if (reader.prevWord2("he")) return "IN";
			if (reader.prevWord1("notes") && reader.word === "that") return "IN";
			if (reader.prevWord1("adds") && reader.word === "that") return "IN";
			if (reader.word === "that" && reader.nextWord1("investor")) return "IN";
			if (reader.nextWord1("state")) return "IN";
			if (reader.nextWord1("someone")) return "IN";
			if (reader.prevWord1("found")) return "IN";
			if (reader.nextWord1("nobody")) return "IN";
			if (reader.prevWord1("programs")) return "WDT";
			if (reader.prevTag2("NNS") && reader.prevTag1("NNS") && reader.word === "that") return "WDT";
			if (reader.nextWord1("work")) return "WDT";
			if (reader.word === "that" && reader.nextWord2("a")) return "WDT";
			if (reader.word === "that" && reader.nextWord2("from")) return "IN";
			if (reader.word === "that" && reader.nextWord2("costs")) return "IN";
			if (reader.prevWord1("claimed") && reader.word === "that") return "IN";
			if (reader.nextWord1("trading")) return "IN";
			if (reader.prevTag2("VBD") && reader.prevTag1("NNS") && reader.word === "that") return "IN";
			if (reader.word === "that" && reader.nextWord1("trade")) return "WDT";
			if (reader.prevTag2(",") && reader.prevTag1("NNS")) return "WDT";
			if (reader.prevTag2("IN") && reader.prevTag1("NNP")) return "WDT";
			if (reader.prevWord2("all") && reader.word === "that") return "WDT";
			if (reader.prevWord1("those")) return "WDT";
			if (reader.word === "that" && reader.nextTag1("NN") && reader.nextTag2("JJR")) return "WDT";
			if (reader.word === "that" && reader.nextWord1("none")) return "IN";
			if (reader.word === "that" && reader.nextWord2("bonds")) return "IN";
			if (reader.word === "that" && reader.nextWord1("everybody")) return "IN";
			if (reader.prevWord2("'")) return "IN";
			if (reader.word === "that" && reader.nextWord1("nothing")) return "IN";
			if (reader.prevWord1("indicated")) return "IN";
			if (reader.nextWord1("emergency")) return "IN";
			if (reader.prevWord1("signs")) return "IN";
			if (reader.prevWord1("argued")) return "IN";
			if (reader.nextWord1("consumer") && reader.nextWord2("spending")) return "IN";
			if (reader.prevWord1("shows")) return "IN";
			if (reader.prevWord1("him") && reader.word === "that") return "IN";
			if (reader.nextWord1("mankind")) return "IN";
			if (reader.nextWord2("holders")) return "IN";
			if (reader.nextWord1("monitoring")) return "IN";
			if (reader.nextWord2("owners")) return "IN";
			if (reader.nextWord1("stock")) return "IN";
			if (reader.prevWord2(",") && reader.prevWord1("noting") && reader.word === "that") return "IN";
			if (reader.word === "that" && reader.nextWord1("something")) return "IN";
			if (reader.prevWord1("so") && reader.word === "that") return "IN";
			if (reader.nextWord2("members")) return "IN";
			return "DT";
		}
		if (reader.nextWord1("'s")) {
			if (reader.prevTag2("DT") && reader.prevTag1("NN") && reader.word === "that") return "WDT";
			if (reader.prevTag2("IN") && reader.prevTag1("NN")) return "WDT";
			if (reader.prevTag2("JJ") && reader.prevTag1("NN")) return "WDT";
			return "DT";
		}
		if (reader.word === "like" && reader.nextTag1("TO")) {
			if (reader.prevTag2("PRP") && reader.prevTag1("POS") && reader.word === "like") return "JJ";
			if (reader.prevWord1("We") && reader.word === "like") return "VBP";
			if (reader.prevTag1("NNS") && reader.word === "like" && reader.nextTag1("TO")) return "VBP";
			return "VB";
		}
		if (reader.prevTag1(",") && reader.word === "though" && reader.nextTag1(",")) return "RB";
		if (reader.prevWord1("the")) {
			if (reader.prevTag1("DT") && reader.nextTag1("IN")) return "NN";
			if (reader.prevWord1("the") && reader.nextWord1(",")) return "NN";
			return "JJ";
		}
		if (reader.nextWord1("well") && reader.nextWord2(".")) return "RB";
		if (reader.prevWord1("a")) {
			if (reader.suffixL2("ar")) return "JJ";
			return "NN";
		}
		if (reader.prevTag1("NNS") && reader.word === "that" && reader.nextTag1("RB")) {
			if (reader.word === "that" && reader.nextWord1("nearly")) return "IN";
			if (reader.nextTag2("IN")) return "IN";
			return "WDT";
		}
		if (reader.word === "that" && reader.nextWord1(".")) return "DT";
		if (reader.prevWord1("take") && reader.word === "over") return "RP";
		if (reader.word === "that" && reader.nextTag1("RB") && reader.nextTag2("VBZ")) return "WDT";
		if (reader.word === "As" && reader.nextWord2("as")) return "RB";
		if (reader.word === "outside" && reader.nextTag1("NN")) return "JJ";
		if (reader.word === "outside" && reader.nextTag1("NNS")) return "JJ";
		if (reader.word === "in" && reader.nextWord1("on")) return "RP";
		if (reader.word === "before" && reader.nextWord1(".")) return "RB";
		if (reader.word === "as" && reader.nextTag1("JJ") && reader.nextTag2("DT")) return "RB";
		if (reader.prevWord1("took")) return "RP";
		if (reader.prevTag1("VBN") && reader.word === "over" && reader.nextTag1("IN")) {
			if (reader.word === "over" && reader.nextWord1("whether")) return "IN";
			return "RP";
		}
		if (reader.word === "over" && reader.nextTag1("TO")) return "RP";
		if (reader.prevWord2("will") && reader.word === "about") return "RB";
		if (reader.word === "before" && reader.nextWord1(",")) return "RB";
		if (reader.word === "as" && reader.nextTag1("JJ") && reader.nextTag2("TO")) return "RB";
		if (reader.word === "that" && reader.nextTag1("NNS") && reader.nextTag2("DT")) return "WDT";
		if (reader.prevTag1("TO") && reader.word === "that") return "DT";
		if (reader.prevWord1("taking")) {
			if (reader.word === "in") return "IN";
			return "RP";
		}
		if (reader.prevTag1(",") && reader.nextTag1(".")) return "RB";
		if (reader.prevTag2("NNP") && reader.prevTag1("IN") && reader.word === "about") return "RB";
		if (reader.prevWord1("do") && reader.word === "that") return "DT";
		if (reader.prevTag1("MD") && reader.word === "like") return "VB";
		if (reader.word === "on" && reader.nextTag1("TO")) {
			if (reader.nextTag1("TO") && reader.nextTag2("NN")) return "IN";
			return "RP";
		}
		if (reader.prevWord1("take") && reader.word === "on") return "RP";
		if (reader.word === "in" && reader.nextWord1("to")) return "RP";
		if (reader.prevWord1("lock") && reader.word === "in") return "RP";
		if (reader.word === "that" && reader.nextTag1(":")) return "DT";
		if (reader.prevWord1("called") && reader.word === "in") return "RP";
		if (reader.prevWord1("turned") && reader.word === "in") return "RP";
		if (reader.prevTag1("VB") && reader.word === "along") {
			if (reader.word === "along" && reader.nextTag1("DT")) return "IN";
			return "RP";
		}
		if (reader.prevTag1("VBG") && reader.word === "around" && reader.nextTag1("IN")) {
			if (reader.nextWord2("the")) return "RP";
			return "RB";
		}
		if (reader.nextWord1("again")) return "RB";
		if (reader.word === "about" && reader.nextWord1("15") && reader.nextWord2("%")) return "RB";
		if (reader.word === "over" && reader.nextWord1(",")) return "RB";
		if (reader.word === "as" && reader.nextTag1("RB") && reader.nextTag2("IN")) return "RB";
		if (reader.prevWord2("sales") && reader.word === "about") return "RB";
		if (reader.prevTag1("DT") && reader.word === "that") return "DT";
		if (reader.prevWord1("turn") && reader.word === "over") return "RP";
		if (reader.prevWord1("rein")) return "RP";
		if (reader.prevWord1("bring")) {
			if (reader.prevWord2("could") && reader.word === "in") return "IN";
			return "RP";
		}
		if (reader.prevWord1("turning")) return "RP";
		if (reader.prevTag1("IN") && reader.word === "as" && reader.nextTag1("JJ")) {
			if (reader.prevWord1("that")) return "IN";
			return "RB";
		}
		if (reader.word === "about" && reader.nextWord1("200")) return "RB";
		if (reader.prevWord2("to") && reader.prevWord1("yield") && reader.word === "about") return "RB";
		if (reader.prevTag1("RB") && reader.word === "about" && reader.nextTag1("$")) return "RB";
		if (reader.prevTag1("VBN") && reader.word === "because" && reader.nextTag1("IN")) return "RB";
		if (reader.word === "over" && reader.nextWord1(".") && reader.nextWord2("")) {
			if (reader.prevTag2("VB")) return "RP";
			return "RB";
		}
		if (reader.word === "as" && reader.nextTag1("RB") && reader.nextTag2("VBN")) {
			if (reader.prevTag2("IN")) return "IN";
			return "RB";
		}
		if (reader.prevWord2("do") && reader.prevWord1("n't")) return "VB";
		if (reader.word === "across" && reader.nextTag1("IN")) return "RP";
		if (reader.word === "on" && reader.nextTag1("IN") && reader.nextTag2("NNS")) return "RP";
		if (reader.prevWord1("putting")) return "RP";
		if (reader.prevTag1("VBN") && reader.word === "on" && reader.nextTag1("IN")) return "RP";
		if (reader.word === "in" && reader.nextTag1(",") && reader.nextTag2("CC")) return "RP";
		if (reader.word === "as" && reader.nextTag1("RB") && reader.nextTag2("JJ")) {
			if (reader.prevTag1("VBD")) return "IN";
			return "RB";
		}
		if (reader.nextWord1("are") && reader.nextWord2("a")) return "RB";
		if (reader.prevWord1("n't") && reader.word === "as") return "RB";
		if (reader.prevWord2("account") && reader.prevWord1("for") && reader.word === "about") return "RB";
		if (reader.word === "as" && reader.nextTag1("RB") && reader.nextTag2("TO")) return "RB";
		if (reader.word === "that" && reader.nextTag1("JJ") && reader.nextTag2(".")) return "RB";
		if (reader.prevWord1("be") && reader.word === "as") return "RB";
		if (reader.word === "over" && reader.nextWord1("and")) return "RB";
		if (reader.word === "around" && reader.nextWord1("to")) {
			if (reader.nextTag2("VB")) return "RP";
			return "RB";
		}
		if (reader.prevTag1("CC") && reader.word === "about" && reader.nextTag1("$")) return "RB";
		if (reader.prevWord1("have") && reader.word === "as") return "RB";
		if (reader.word === "behind" && reader.nextTag1("IN")) {
			if (reader.prevTag1("VBN") && reader.word === "behind" && reader.nextTag1("IN")) return "RP";
			return "RB";
		}
		if (reader.prevWord1("with") && reader.word === "about") {
			if (reader.prevTag2("NNS") && reader.prevTag1("IN") && reader.word === "about") return "IN";
			return "RB";
		}
		if (reader.prevTag1("RP") && reader.word === "as" && reader.nextTag1("JJ")) return "RB";
		if (reader.word === "that" && reader.nextTag1("RB") && reader.nextTag2("VBN")) return "WDT";
		if (reader.word === "that" && reader.nextTag1("NNS") && reader.nextTag2("PRP$")) return "WDT";
		if (reader.word === "that" && reader.nextTag1("NNS") && reader.nextTag2("JJ")) return "WDT";
		if (reader.prevWord1("reported") && reader.word === "that" && reader.nextWord1("net")) return "DT";
		if (reader.prevWord1("turned") && reader.word === "around") return "RP";
		if (reader.prevWord1("taken") && reader.word === "over" && reader.nextWord1("the")) return "RP";
		if (reader.prevWord2("n't") && reader.word === "around") return "RP";
		if (reader.word === "around" && reader.nextWord1(",") && reader.nextWord2("''")) return "RP";
		if (reader.prevWord1("throw")) return "RP";
		if (reader.prevWord1("brought") && reader.word === "in") return "RP";
		if (reader.prevTag1("NN") && reader.word === "around" && reader.nextTag1(".")) return "RP";
		if (reader.word === "on" && reader.nextWord1("in")) return "RP";
		if (reader.prevWord1("brought") && reader.word === "about") return "RP";
		if (reader.word === "through" && reader.nextTag1("IN") && reader.nextTag2("DT")) return "RP";
		if (reader.prevWord2("is") && reader.prevWord1("just") && reader.word === "about") return "RB";
		if (reader.word === "about" && reader.nextWord1("a") && reader.nextWord2("quarter")) return "RB";
		if (reader.word === "about" && reader.nextWord1("15,000")) return "RB";
		if (reader.prevWord1("has") && reader.word === "about") return "RB";
		if (reader.prevWord1("bought") && reader.word === "about") return "RB";
		if (reader.word === "that" && reader.nextTag1("RB") && reader.nextTag2(".")) return "RB";
		if (reader.prevWord2("yield") && reader.prevWord1("of") && reader.word === "about") return "RB";
		if (reader.prevTag1("VBG") && reader.word === "along") return "RB";
		if (reader.word === "about" && reader.nextWord1("4") && reader.nextWord2("%")) return "RB";
		if (reader.prevTag1("RB") && reader.nextTag1(".")) return "RB";
		if (reader.prevWord2("is") && reader.prevWord1("just") && reader.word === "as") return "RB";
		if (reader.prevWord1("is") && reader.word === "as") return "RB";
		if (reader.word === "about" && reader.nextWord1("a") && reader.nextWord2("week")) return "RB";
		if (reader.prevTag1("VBZ") && reader.word === "about" && reader.nextTag1("RB")) return "RB";
		if (reader.word === "about" && reader.nextWord2("20")) return "RB";
		if (reader.prevTag2("NN") && reader.prevTag1("VBD") && reader.word === "through") return "RB";
		if (reader.prevTag1("JJ") && reader.word === "about" && reader.nextTag1("CD")) return "RB";
		if (reader.word === "about" && reader.nextTag1("CD") && reader.nextTag2("NNP")) return "RB";
		if (reader.prevTag2("NNS") && reader.prevTag1("VBD") && reader.word === "because") return "RB";
		if (reader.word === "about" && reader.nextWord1("0.5")) return "RB";
		if (reader.prevTag1("NNP") && reader.word === "per") return "FW";
		if (reader.prevWord1("I") && reader.word === "like") return "VBP";
		if (reader.word === "that" && reader.nextTag1("NNS") && reader.nextTag2("RP")) return "WDT";
		if (reader.word === "that" && reader.nextWord2("''")) return "DT";
		if (reader.word === "that" && reader.nextTag1(",") && reader.nextTag2("NNP")) return "DT";
		if (reader.prevTag1("") && reader.word === "Though" && reader.nextTag1("NNP")) return "NNP";
		return "IN";
	}
	if (reader.tag === "WP$") return "WP$";
	if (reader.tag === "MD") {
		if (reader.prevWord1("good") && reader.word === "will") return "NN";
		if (reader.prevWord1("the") && reader.word === "will") return "NN";
		if (reader.prevWord1("maitre") && reader.word === "'d") return "NNP";
		if (reader.prevTag1("PRP$") && reader.word === "will") return "NN";
		return "MD";
	}
	if (reader.tag === "NNPS") {
		if (reader.prevTag2("") && reader.prevTag1("")) {
			if (reader.nextTag1("NNP")) return "NNPS";
			if (reader.prevTag1("") && reader.word === "Democrats") return "NNPS";
			if (reader.word === "Dataproducts") return "NNPS";
			if (reader.prevWord1("") && reader.word === "Americans" && reader.nextWord1("are")) return "NNPS";
			if (reader.word === "Americans" && reader.nextTag1("MD")) return "NNPS";
			if (reader.word === "Republicans" && reader.nextTag1("VBD")) return "NNPS";
			if (reader.word === "Americans" && reader.nextTag1("VBD")) return "NNPS";
			if (reader.word === "Republicans" && reader.nextWord1("have")) return "NNPS";
			return "NNS";
		}
		if (reader.prevWord2("") && reader.prevWord1("``")) return "NNS";
		if (reader.prevWord1("Salomon") && reader.word === "Brothers" && reader.nextWord1("Inc.")) {
			if (reader.nextTag2("CC")) return "NNPS";
			return "NNP";
		}
		if (reader.prevTag2("") && reader.prevTag1("NNP") && reader.word === "Communications") return "NNP";
		if (reader.word === "Securities" && reader.nextWord1("Corp.")) return "NNP";
		if (reader.prevTag1("JJ") && reader.nextTag1("")) return "NNS";
		if (reader.prevTag1(":")) return "NNS";
		if (reader.prevWord1("Rock")) return "NNP";
		if (reader.nextWord1("added")) return "NNP";
		if (reader.prevWord1("Information")) return "NNP";
		if (reader.prevTag2("IN") && reader.prevTag1("NNP") && reader.word === "Industries") {
			if (reader.word === "Industries" && reader.nextWord1("Inc") && reader.nextWord2(".")) return "NNPS";
			return "NNP";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevWord1("Star") && reader.word === "Technologies") return "NNP";
		if (reader.word === "Services" && reader.nextWord2(",")) return "NNP";
		if (reader.prevWord1("Integrated") && reader.word === "Resources") return "NNP";
		if (reader.word === "Bankers" && reader.nextTag1("NNP") && reader.nextTag2("VBD")) return "NNP";
		if (reader.prevWord1("East") && reader.nextWord1(",")) return "NNS";
		if (reader.word === "Democrats" && reader.nextWord2("a")) return "NNS";
		if (reader.word === "Americans" && reader.nextTag1("VBG")) return "NNS";
		if (reader.word === "Americans" && reader.nextWord1("are")) return "NNS";
		if (reader.prevWord2("Senate") && reader.prevWord1("Foreign") && reader.word === "Relations") return "NNP";
		if (reader.word === "Securities" && reader.nextWord1("Co.") && reader.nextWord2("Ltd.")) return "NNP";
		if (reader.prevWord2("New") && reader.prevWord1("England") && reader.word === "Telecommunications") return "NNP";
		if (reader.prevWord1("&") && reader.word === "Associates") {
			if (reader.prevWord2("Weil") && reader.word === "Associates") return "NNPS";
			return "NNP";
		}
		if (reader.nextTag1("NNPS") && reader.nextTag2("NNP")) return "NNP";
		if (reader.prevWord1("Management")) return "NNP";
		if (reader.prevTag1("JJ") && reader.word === "Airlines") {
			if (reader.nextTag2("NNP")) return "NNPS";
			return "NNP";
		}
		if (reader.prevWord1("Profit") && reader.word === "Systems") return "NNP";
		if (reader.prevTag2("IN") && reader.prevTag1("NNPS") && reader.word === "Futures") return "NNP";
		if (reader.word === "Dynamics" && reader.nextTag1("NNP")) return "NNP";
		if (reader.prevWord1("Imo") && reader.word === "Industries") return "NNP";
		if (reader.prevWord1("Capital") && reader.word === "Markets" && reader.nextWord1("Inc.")) return "NNP";
		if (reader.prevWord1("Data") && reader.word === "Resources") return "NNP";
		if (reader.prevWord2("at") && reader.word === "Brothers") return "NNP";
		if (reader.prevWord1("Acadia") && reader.word === "Partners") return "NNP";
		if (reader.prevWord2("that") && reader.prevWord1("British") && reader.word === "Airways") return "NNP";
		if (reader.nextWord1("Group") && reader.nextWord2(".")) return "NNP";
		if (reader.prevTag2("IN") && reader.prevTag1("NNP") && reader.word === "Enterprises") return "NNP";
		if (reader.word === "Industries" && reader.nextWord1("PLC")) return "NNP";
		return "NNPS";
	}
	if (reader.tag === "'") return "'";
	if (reader.tag === "JJS") {
		if (reader.word === "most" && reader.nextTag1("JJ")) {
			if (reader.word === "most" && reader.nextWord1("major")) return "JJS";
			if (reader.prevWord1("for")) return "JJS";
			if (reader.prevTag2("VBD") && reader.prevTag1("IN") && reader.word === "most") return "JJS";
			if (reader.prevWord2("suspension")) return "JJS";
			if (reader.prevWord1("'s") && reader.word === "most" && reader.nextWord1("prestigious")) return "JJS";
			if (reader.prevWord1("in") && reader.word === "most") return "JJS";
			if (reader.nextWord1("basic")) return "JJS";
			return "RBS";
		}
		if (reader.word === "most" && reader.nextTag1("RB")) return "RBS";
		if (reader.word === "most" && reader.nextTag1("VBN")) return "RBS";
		if (reader.word === "Most" && reader.nextWord2(",")) return "RBS";
		if (reader.prevTag2("NN") && reader.prevTag1("POS") && reader.word === "most") return "RBS";
		if (reader.prevTag1("VBD") && reader.word === "best") return "RBS";
		if (reader.word === "best" && reader.nextTag1("VBN") && reader.nextTag2("TO")) return "RB";
		return "JJS";
	}
	if (reader.tag === "JJR") {
		if (reader.word === "more" && reader.nextTag1("JJ")) {
			if (reader.prevTag1("CD") && reader.word === "more" && reader.nextTag1("JJ")) return "JJR";
			if (reader.prevTag2("CD") && reader.prevTag1("CC") && reader.word === "more") return "JJR";
			if (reader.prevWord1("that") && reader.word === "more") return "JJR";
			if (reader.word === "more" && reader.nextWord1("straight")) return "JJR";
			return "RBR";
		}
		if (reader.nextTag1("RB")) {
			if (reader.suffixL4("nger")) return "JJR";
			if (reader.prevWord2("will") && reader.prevWord1("be")) return "JJR";
			return "RBR";
		}
		if (reader.word === "less" && reader.nextTag1("JJ")) {
			if (reader.prevWord1("annually") && reader.nextWord1("full")) return "CC";
			if (reader.prevWord2("7\/8") && reader.prevWord1("%")) return "CC";
			if (reader.prevTag2("NN") && reader.prevTag1("IN") && reader.word === "less") return "JJR";
			return "RBR";
		}
		if (reader.nextTag1("VBN")) {
			if (reader.word === "higher" && reader.nextTag1("VBN")) return "JJR";
			if (reader.word === "better" && reader.nextWord2("to")) return "RB";
			return "RBR";
		}
		if (reader.prevTag1("TO") && reader.word === "lower") {
			if (reader.prevTag2("NN") && reader.prevTag1("TO")) return "JJR";
			return "VB";
		}
		if (reader.word === "more" && reader.nextWord1("than") && reader.nextWord2("doubled")) {
			if (reader.prevTag1("NNS")) return "JJR";
			return "RBR";
		}
		if (reader.word === "more" && reader.nextTag1("IN") && reader.nextTag2("VBN")) return "RBR";
		if (reader.prevTag1("") && reader.word === "More" && reader.nextTag1("JJ")) return "RBR";
		if (reader.prevTag1("MD") && reader.word === "lower") return "VB";
		if (reader.nextWord2("ever")) return "RBR";
		if (reader.word === "less" && reader.nextTag1("NNS")) return "CC";
		if (reader.word === "more" && reader.nextWord1("than") && reader.nextWord2("double")) return "RBR";
		if (reader.prevTag1("NN") && reader.word === "better") {
			if (reader.nextTag2("''")) return "RB";
			return "RBR";
		}
		if (reader.prevTag1("VBD") && reader.word === "better") return "RBR";
		if (reader.word === "harder" && reader.nextTag1("IN")) return "RBR";
		if (reader.nextWord1("on") && reader.nextWord2("the")) return "RBR";
		if (reader.word === "more" && reader.nextTag1("VBG")) {
			if (reader.prevWord1("the") && reader.word === "more") return "JJR";
			return "RBR";
		}
		if (reader.word === "more" && reader.nextWord1("like") && reader.nextWord2("a")) return "RBR";
		if (reader.prevWord1("care")) return "RBR";
		if (reader.prevTag1("NN") && reader.word === "lower" && reader.nextTag1(".")) return "RBR";
		if (reader.prevTag2("NN") && reader.prevTag1("RB")) {
			if (reader.prevTag1("RB") && reader.nextTag1("NN")) return "JJR";
			if (reader.prevWord2("level")) return "JJR";
			return "RBR";
		}
		if (reader.prevTag1("NNS") && reader.nextTag1(".")) return "RBR";
		if (reader.word === "better" && reader.nextTag1("VB")) return "RB";
		if (reader.word === "better" && reader.nextTag1("IN") && reader.nextTag2("PRP")) return "RB";
		if (reader.word === "more" && reader.nextTag1("IN") && reader.nextTag2("VBG")) return "RBR";
		if (reader.word === "lower" && reader.nextTag1("IN") && reader.nextTag2("RB")) return "RBR";
		if (reader.prevTag2("VBN") && reader.prevTag1("RP")) return "RBR";
		if (reader.prevTag2("VBD") && reader.prevTag1("VBN") && reader.word === "more") return "RBR";
		if (reader.nextTag1(",") && reader.nextTag2("VBN")) return "RBR";
		if (reader.prevWord1("matters")) return "RBR";
		if (reader.word === "more" && reader.nextWord1("than") && reader.nextWord2("five")) return "RBR";
		if (reader.prevWord1("any") && reader.word === "better") return "RBR";
		if (reader.prevWord1("moved")) return "RBR";
		if (reader.prevWord1("moderately") && reader.word === "lower") return "RBR";
		if (reader.prevWord1("go")) return "RBR";
		if (reader.prevTag2("NNP") && reader.prevTag1("VBZ") && reader.word === "better") return "RBR";
		if (reader.word === "Lower" && reader.nextTag1("NNP")) return "NNP";
		return "JJR";
	}
	if (reader.tag === "SYM") return "SYM";
	if (reader.tag === "UH") return "UH";
	return "NN";
};