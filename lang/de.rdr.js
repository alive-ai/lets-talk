/**
 * File Generated From data/pos/german.rdr at Sat Jan 23 2016 18:02:20 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(reader) {
	if (reader.tag === "ADV") {
		if (reader.prevWord1(",") && reader.word === "aber") return "KON";
		if (reader.word === "mehr" && reader.nextTag1("NN")) {
			if (reader.prevTag1("PTKNEG") && reader.word === "mehr") return "ADV";
			return "PIAT";
		}
		if (reader.word === "mehr" && reader.nextWord1("als")) {
			if (reader.nextTag1("APPR") && reader.nextTag2("NN")) return "ADV";
			if (reader.nextTag1("APPR") && reader.nextTag2("VVPP")) return "ADV";
			if (reader.nextTag1("APPR") && reader.nextTag2("ADJD")) return "PIS";
			if (reader.prevWord2("ein") && reader.word === "mehr") return "PIS";
			if (reader.word === "mehr" && reader.nextWord2("vor")) return "PIS";
			if (reader.prevWord2("Millionen") && reader.word === "mehr") return "PIS";
			if (reader.prevTag2("VVFIN") && reader.prevTag1("PPER")) return "PIS";
			if (reader.prevTag2("VVPP")) return "PIS";
			if (reader.word === "mehr" && reader.nextWord2("zuvor")) return "PIS";
			if (reader.prevTag2("") && reader.prevTag1("KON")) return "PIS";
			if (reader.word === "mehr" && reader.nextWord2("zum")) return "PIS";
			if (reader.prevTag2("ADV") && reader.prevTag1("CARD")) return "PIS";
			if (reader.prevWord1("war") && reader.word === "mehr") return "PIS";
			if (reader.word === "mehr" && reader.nextWord1("als") && reader.nextWord2("der")) return "PIS";
			if (reader.prevWord2("den")) return "PIS";
			if (reader.prevWord2("ist")) return "PIS";
			return "PIAT";
		}
		if (reader.prevTag1("$,") && reader.word === "doch") {
			if (reader.word === "doch" && reader.nextTag1("VAFIN") && reader.nextTag2("NN")) return "ADV";
			return "KON";
		}
		if (reader.prevTag1("$,") && reader.word === "da") {
			if (reader.prevTag1("$,") && reader.word === "da" && reader.nextTag1("VVFIN")) return "ADV";
			if (reader.prevTag1("$,") && reader.word === "da" && reader.nextTag1("VAFIN")) return "ADV";
			if (reader.nextTag1("VMFIN")) return "ADV";
			return "KOUS";
		}
		if (reader.word === "viel" && reader.nextTag1("NN")) return "PIAT";
		if (reader.word === "lange" && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "zusammen" && reader.nextTag1("$.")) return "PTKVZ";
		if (reader.prevWord2("weder")) return "KON";
		if (reader.prevTag1("") && reader.word === "Da" && reader.nextTag1("ART")) return "KOUS";
		if (reader.prevTag1("$(") && reader.word === "aber") {
			if (reader.word === "aber" && reader.nextWord2("sicher")) return "ADV";
			if (reader.prevWord1(")") && reader.word === "aber") return "ADV";
			return "KON";
		}
		if (reader.word === "je" && reader.nextTag1("NN")) return "APPR";
		if (reader.word === "zusammen" && reader.nextTag1("$,")) return "PTKVZ";
		if (reader.prevTag1("NN") && reader.word === "genug") return "PIAT";
		if (reader.word === "mehr" && reader.nextTag1("ADJA") && reader.nextTag2("NN")) {
			if (reader.prevTag1("PTKNEG") && reader.nextTag1("ADJA")) return "ADV";
			return "PIAT";
		}
		if (reader.prevTag1("") && reader.word === "Da" && reader.nextTag1("PPER")) return "KOUS";
		if (reader.word === "viel" && reader.nextTag1("APPR")) return "PIS";
		if (reader.prevWord1("so") && reader.word === "recht") return "ADJD";
		if (reader.prevTag1("ADJD") && reader.word === "mehr") return "PIS";
		if (reader.prevTag1("") && reader.word === "Da" && reader.nextTag1("ADV")) return "KOUS";
		if (reader.prevTag1("$(") && reader.word === "minus") return "APPR";
		if (reader.word === "recht" && reader.nextTag1("$.")) return "NN";
		if (reader.prevWord1("") && reader.word === "aber") return "KON";
		if (reader.word === "Viel" && reader.nextTag1("NN")) return "PIAT";
		if (reader.prevTag1("APPR") && reader.word === "ganz" && reader.nextTag1("NE")) return "ADJD";
		if (reader.prevWord1("Prozent") && reader.word === "mehr") return "PIS";
		if (reader.word === "viel" && reader.nextTag1("VVPP")) return "PIS";
		if (reader.prevTag1("$.") && reader.word === "aber") return "KON";
		if (reader.word === "einfach" && reader.nextWord2("")) return "ADJD";
		if (reader.word === "her" && reader.nextTag1("$.") && reader.nextTag2("")) return "PTKVZ";
		if (reader.prevWord1("so") && reader.word === "viel") {
			if (reader.nextTag1("ADJA") && reader.nextTag2("NN")) return "PIAT";
			return "PIS";
		}
		if (reader.prevTag1("NN") && reader.word === "her") {
			if (reader.nextWord1(",")) return "PTKVZ";
			if (reader.prevWord1("Sache")) return "ADV";
			return "APZR";
		}
		if (reader.prevTag2("CARD") && reader.prevTag1("NN") && reader.word === "je") return "APPR";
		if (reader.prevTag1("NN") && reader.word === "vorbei" && reader.nextTag1("$.")) return "PTKVZ";
		if (reader.prevTag1("NN") && reader.word === "zusammen" && reader.nextTag1("$(")) return "PTKVZ";
		if (reader.word === "weg" && reader.nextWord2("")) return "PTKVZ";
		if (reader.prevWord1("") && reader.nextWord1("sich")) return "KOUS";
		if (reader.prevTag1("") && reader.word === "Da" && reader.nextTag1("APPR")) return "KOUS";
		if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "doch") return "KON";
		if (reader.prevTag1("CARD") && reader.word === "mal" && reader.nextTag1("CARD")) return "KON";
		if (reader.word === "quer" && reader.nextTag1("APPR") && reader.nextTag2("ART")) return "ADJD";
		if (reader.word === "einfach" && reader.nextTag1("$,")) return "ADJD";
		if (reader.word === "knapp" && reader.nextTag1("VVPP")) return "ADJD";
		if (reader.prevWord1("geht") && reader.word === "weiter") return "PTKVZ";
		if (reader.prevTag1("NN") && reader.word === "weiter" && reader.nextTag1("$.")) return "PTKVZ";
		if (reader.word === "weg" && reader.nextWord1(",")) return "PTKVZ";
		if (reader.prevWord1("etwas") && reader.word === "mehr") return "PIS";
		if (reader.word === "viel" && reader.nextTag1("VVINF")) return "PIS";
		if (reader.word === "Da" && reader.nextTag1("PIAT")) return "KOUS";
		if (reader.word === "da" && reader.nextTag1("PPER")) return "KOUS";
		if (reader.prevWord2("Weder") && reader.word === "noch") return "KON";
		if (reader.prevTag2("PTKZU") && reader.prevTag1("VVINF") && reader.word === "noch") return "KON";
		if (reader.prevTag2("CARD") && reader.prevTag1("NN") && reader.word === "lange") return "ADJA";
		if (reader.word === "recht" && reader.nextTag1("VAFIN")) return "NN";
		if (reader.prevTag1("ART") && reader.word === "Gestern") return "NN";
		if (reader.word === "recht" && reader.nextWord1(",")) {
			if (reader.prevTag1("PTKNEG") && reader.nextTag1("$,")) return "ADJD";
			return "NN";
		}
		if (reader.prevTag1("ART") && reader.word === "Wohl") return "NN";
		if (reader.word === "recht" && reader.nextTag1("VVINF")) return "NN";
		if (reader.word === "genug" && reader.nextWord1("Geld")) return "PIAT";
		if (reader.prevTag1("ADV") && reader.word === "einfach" && reader.nextTag1("VAFIN")) return "ADJD";
		if (reader.word === "knapp" && reader.nextWord2("")) return "ADJD";
		if (reader.word === "einfach" && reader.nextWord1("und")) return "ADJD";
		if (reader.prevWord1("kommen") && reader.word === "wieder") return "PTKVZ";
		if (reader.prevWord2("geht") && reader.word === "weiter") return "PTKVZ";
		if (reader.word === "mehr" && reader.nextWord2("als")) {
			if (reader.prevTag1("NN") && reader.word === "mehr" && reader.nextTag1("VVFIN")) return "ADV";
			return "PIS";
		}
		if (reader.word === "mehr" && reader.nextTag1("PTKNEG")) return "PIS";
		if (reader.word === "viel" && reader.nextTag1("PTKZU") && reader.nextTag2("VVINF")) return "PIS";
		if (reader.prevTag2("ADV") && reader.prevTag1("PTKNEG") && reader.word === "viel") return "PIS";
		if (reader.prevTag1("") && reader.word === "Da" && reader.nextTag1("PDAT")) return "KOUS";
		if (reader.prevWord1(",") && reader.word === "soweit") return "KOUS";
		if (reader.word === "Da" && reader.nextTag1("NN")) return "KOUS";
		if (reader.prevTag1("NN") && reader.word === "ja" && reader.nextTag1("$,")) return "PTKANT";
		return "ADV";
	}
	if (reader.tag === "KON") {
		if (reader.word === "denn" && reader.nextTag1("ADV")) {
			if (reader.prevTag1("$,") && reader.word === "denn") return "KON";
			if (reader.prevWord1("mehr")) return "KOKOM";
			if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "denn") return "KON";
			return "ADV";
		}
		if (reader.prevTag1("PPER") && reader.word === "denn") return "ADV";
		if (reader.prevTag1("VAFIN") && reader.word === "denn") return "ADV";
		if (reader.prevWord2(",") && reader.word === "denn") {
			if (reader.prevTag2("$,") && reader.prevTag1("$(") && reader.word === "denn") return "KON";
			return "ADV";
		}
		if (reader.prevTag1("ART") && reader.word === "Oder") return "NE";
		if (reader.prevTag1("$(") && reader.word === "Oder") return "NE";
		if (reader.prevTag1("KON") && reader.word === "Oder") return "NE";
		if (reader.prevWord1("B") && reader.word === "+") return "XY";
		return "KON";
	}
	if (reader.tag === "PWAT") {
		if (reader.nextTag1("ART")) {
			if (reader.suffixL2("le")) return "PWS";
			return "PRELS";
		}
		if (reader.prevTag1("$,") && reader.nextTag1("APPR")) return "PRELS";
		return "PWAT";
	}
	if (reader.tag === "PWAV") {
		if (reader.nextWord1("bei")) return "KOKOM";
		return "PWAV";
	}
	if (reader.tag === "NE") {
		if (reader.prevTag1("ART") && reader.word === "Bayern") return "NN";
		if (reader.prevTag1("FM") && reader.nextTag1("FM")) return "FM";
		if (reader.prevTag1("ART") && reader.word === "Hessen") return "NN";
		if (reader.prevTag2("APPR") && reader.prevTag1("ADJA")) {
			if (reader.prevTag1("ADJA") && reader.nextTag1("$,")) return "NE";
			if (reader.prevWord2("in")) return "NE";
			if (reader.prevTag1("ADJA") && reader.nextTag1("VVFIN")) return "NE";
			return "NN";
		}
		if (reader.prevWord1("ein")) {
			if (reader.suffixL2("es")) return "ADJA";
			if (reader.nextTag1("APPR") && reader.nextTag2("NN")) return "NE";
			return "NN";
		}
		if (reader.prevWord1("einer")) {
			if (reader.suffixL3("")) return "NE";
			return "NN";
		}
		if (reader.prevWord1("und") && reader.word === "West") return "NN";
		if (reader.prevTag1("ART") && reader.word === "Polen") return "NN";
		if (reader.prevWord1("Alexij") && reader.word === "II.") return "ADJA";
		if (reader.prevTag1("PIAT")) {
			if (reader.prevWord1("keine")) return "NE";
			if (reader.prevWord1("beide") && reader.nextWord1(")")) return "NE";
			return "NN";
		}
		if (reader.prevTag1("ART") && reader.word === "Niedersachsen") return "NN";
		if (reader.prevTag1("ADJA") && reader.word === "Halle") return "NN";
		if (reader.word === "Herzog" && reader.nextTag1("APPR") && reader.nextTag2("NE")) return "NN";
		if (reader.prevTag2("APPR") && reader.prevTag1("PPOSAT")) return "NN";
		if (reader.prevWord1("einem")) {
			if (reader.prevWord2("in")) return "NE";
			return "NN";
		}
		if (reader.word === "Lange" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevWord2("Tschechen")) return "NN";
		if (reader.word === "Graf" && reader.nextTag1("NE")) return "NN";
		if (reader.prevTag2("VAFIN") && reader.prevTag1("ADJA")) return "NN";
		if (reader.prevWord1("eine")) {
			if (reader.suffixL3("")) return "NE";
			if (reader.nextTag2("NN")) return "NE";
			return "NN";
		}
		if (reader.prevWord1("sein")) return "NN";
		if (reader.prevTag1("ART") && reader.word === "Schweden") return "NN";
		if (reader.word === "Weltbank" && reader.nextTag1("KON")) return "NN";
		if (reader.prevTag1("APPRART") && reader.word === "Essen") return "NN";
		if (reader.prevWord2("''") && reader.word === "of") return "FM";
		if (reader.prevTag1("$(") && reader.nextTag1("FM")) {
			if (reader.prevWord2("dem")) return "NE";
			return "FM";
		}
		if (reader.word === "British" && reader.nextWord2("(")) return "FM";
		if (reader.word === "Road" && reader.nextWord1("Movie")) return "TRUNC";
		if (reader.prevWord1("") && reader.nextWord1("Bericht")) return "ADJA";
		if (reader.prevTag1("APPR") && reader.word === "Quelle") return "NN";
		if (reader.prevWord1("dieses")) return "NN";
		if (reader.word === "Welthandelsorganisation" && reader.nextWord1("WTO")) return "NN";
		if (reader.prevWord1("a.") && reader.word === "D.") return "NN";
		if (reader.prevWord1("Schweizer") && reader.word === "Rück") return "NN";
		if (reader.prevTag1("ART") && reader.word === "Fischer") return "NN";
		if (reader.prevWord1("einen")) return "NN";
		if (reader.prevTag1("NN") && reader.word === "Center") return "NN";
		if (reader.prevWord1("das") && reader.word === "Los") return "NN";
		if (reader.word === "Teufel" && reader.nextWord2(",")) return "NN";
		if (reader.prevTag1("ART") && reader.word === "Vogel") return "NN";
		if (reader.prevWord1("der") && reader.nextWord1("des")) return "NN";
		if (reader.word === "Ernst" && reader.nextTag1("ART")) return "NN";
		if (reader.prevTag2("") && reader.prevTag1("PPOSAT")) return "NN";
		if (reader.prevTag1("ART") && reader.word === "Sachsen") return "NN";
		if (reader.word === "Times" && reader.nextTag1("ADJD")) return "FM";
		if (reader.nextWord1("facto")) return "FM";
		if (reader.prevWord1("Il")) return "FM";
		if (reader.prevTag1("ADJA") && reader.nextTag1("FM")) return "FM";
		if (reader.nextTag1("FM") && reader.nextTag2("VVFIN")) return "FM";
		if (reader.nextWord1("Suisse")) return "FM";
		if (reader.word === "Big" && reader.nextTag1("NE") && reader.nextTag2("$(")) return "FM";
		if (reader.prevTag2("") && reader.prevTag1("PPER")) return "VVFIN";
		if (reader.prevTag2("$.") && reader.prevTag1("CARD")) return "XY";
		return "NE";
	}
	if (reader.tag === "VMFIN") {
		if (reader.prevWord1("zu")) return "VMINF";
		if (reader.prevTag1("VVINF") && reader.word === "müssen") {
			if (reader.prevWord1("zahlen") && reader.word === "müssen") return "VMFIN";
			if (reader.word === "müssen" && reader.nextTag1("$,") && reader.nextTag2("VAFIN")) return "VMFIN";
			if (reader.prevTag2("NE") && reader.prevTag1("VVINF") && reader.word === "müssen") return "VMFIN";
			if (reader.prevTag2("PPER") && reader.prevTag1("VVINF")) return "VMFIN";
			if (reader.word === "müssen" && reader.nextWord2("ihre")) return "VMFIN";
			if (reader.prevWord1("rechnen") && reader.word === "müssen") return "VMFIN";
			return "VMINF";
		}
		if (reader.prevTag2("VAFIN") && reader.prevTag1("VVINF")) return "VMINF";
		if (reader.prevTag2("PTKNEG") && reader.prevTag1("VVINF") && reader.word === "können") return "VMINF";
		if (reader.word === "können" && reader.nextTag1("$,") && reader.nextTag2("KOUS")) return "VMINF";
		if (reader.word === "dürfen" && reader.nextWord2("")) {
			if (reader.prevWord1("erhalten")) return "VMFIN";
			if (reader.prevTag1("VAINF")) return "VMFIN";
			if (reader.prevTag2("ADJA") && reader.prevTag1("VVINF") && reader.word === "dürfen") return "VMFIN";
			return "VMINF";
		}
		if (reader.prevTag1("NN") && reader.word === "können" && reader.nextTag1("$.")) return "VMINF";
		if (reader.prevTag1("NN") && reader.word === "müssen" && reader.nextTag1("$,")) return "VMINF";
		if (reader.prevWord2("hätte")) return "VMINF";
		if (reader.prevTag1("VVFIN") && reader.word === "können" && reader.nextTag1("$.")) return "VMINF";
		return "VMFIN";
	}
	if (reader.tag === "ADJA") {
		if (reader.nextTag1("APPR")) {
			if (reader.nextWord1("bis")) return "ADJA";
			if (reader.word === "andere" && reader.nextTag1("APPR")) return "PIS";
			if (reader.suffixL2("em")) return "ADJA";
			if (reader.suffixL4("eren")) {
				if (reader.prevTag2("NE")) return "ADJA";
				return "PIS";
			}
			if (reader.prevTag1("PPER")) return "VVFIN";
			if (reader.prevTag2("ART") && reader.prevTag1("NN")) {
				if (reader.suffixL2("er")) {
					if (reader.nextTag2("ADJA")) return "ADJA";
					return "ADJD";
				}
				return "VVFIN";
			}
			if (reader.prevTag2("ART") && reader.prevTag1("ADV")) return "ADJA";
			if (reader.suffixL3("")) {
				if (reader.nextWord1("bis")) return "ADJA";
				if (reader.prevTag2("NN")) return "ADJA";
				return "ADV";
			}
			if (reader.word === "ersten") return "ADJA";
			if (reader.word === "zweiten" && reader.nextTag1("APPR")) return "ADJA";
			if (reader.prevTag2("ART") && reader.prevTag1("NE")) return "VVFIN";
			if (reader.prevTag2("ADJA") && reader.prevTag1("KON")) return "ADJA";
			if (reader.suffixL4("hste")) return "ADJA";
			if (reader.suffixL4("tere")) return "ADJA";
			if (reader.prevTag1("APPRART") && reader.word === "besten" && reader.nextTag1("APPR")) return "ADJD";
			if (reader.prevWord1("immer")) return "ADJD";
			if (reader.prevTag2("NN") && reader.prevTag1("NE")) return "NE";
			if (reader.prevWord1("im") && reader.nextWord1("durch")) return "ADJA";
			if (reader.word === "erste") return "ADJA";
			if (reader.suffixL4("erer")) return "ADJA";
			if (reader.nextWord1("Wegen")) return "ADJA";
			if (reader.prevWord2("eines")) return "ADJA";
			if (reader.prevWord1("viel") && reader.nextWord1("als")) return "ADJD";
			if (reader.prevTag2("ADJD") && reader.prevTag1("KON")) return "ADJD";
			if (reader.prevTag2("") && reader.prevTag1("NN")) return "VVFIN";
			if (reader.prevTag1("APPRART") && reader.word === "folgenden") return "ADJA";
			if (reader.prevTag2("PRF") && reader.prevTag1("APPRART")) return "ADJA";
			if (reader.word === "einzige") return "ADJA";
			if (reader.word === "vierte") return "ADJA";
			if (reader.prevTag2("VVPP")) return "ADJA";
			if (reader.prevTag2("KON") && reader.prevTag1("APPRART")) return "ADJA";
			if (reader.prevTag1("APPR") && reader.word === "weiteres" && reader.nextTag1("APPR")) return "PIS";
			if (reader.suffixL4("nter")) return "ADJD";
			if (reader.prevWord1("wesentlich")) return "ADJD";
			if (reader.prevWord2("sie")) return "ADJD";
			if (reader.prevTag2("$,") && reader.prevTag1("VAFIN")) return "ADJD";
			if (reader.prevTag2("") && reader.prevTag1("ADV")) return "ADJD";
			if (reader.nextWord2("in")) return "ADJD";
			if (reader.prevTag2("KON") && reader.prevTag1("ADV")) return "ADJD";
			if (reader.prevTag2("KON") && reader.prevTag1("NN")) return "VVFIN";
			if (reader.prevTag2("") && reader.prevTag1("NE")) return "VVFIN";
			if (reader.prevWord2("Die")) return "VVFIN";
			if (reader.prevTag2("APPRART") && reader.prevTag1("NN")) return "VVFIN";
			if (reader.prevTag2("VAFIN") && reader.prevTag1("$,")) return "VVFIN";
			return "NN";
		}
		if (reader.nextTag1("ART")) {
			if (reader.suffixL2("er")) {
				if (reader.word === "einziger" && reader.nextTag1("ART")) return "ADJA";
				if (reader.prevTag1("APPR") && reader.word === "erster" && reader.nextTag1("ART")) return "PIS";
				if (reader.suffixL3("rer")) return "PIS";
				if (reader.prevTag2("KON") && reader.prevTag1("ADV")) return "ADJD";
				return "NN";
			}
			if (reader.nextWord1("Die")) return "ADV";
			if (reader.prevTag1("ADJA") && reader.nextTag1("ART")) return "NN";
			if (reader.prevWord1("den")) {
				if (reader.nextWord2("Welt")) return "ADJA";
				return "NN";
			}
			if (reader.prevWord1("die")) {
				if (reader.nextTag1("ART") && reader.nextTag2("ADV")) return "ADJA";
				return "NN";
			}
			if (reader.prevTag1("APPR")) {
				if (reader.suffixL2("em")) return "ADJA";
				if (reader.suffixL3("ren")) return "PIS";
				if (reader.prevTag1("APPR") && reader.word === "erster" && reader.nextTag1("ART")) return "PIS";
				return "NN";
			}
			if (reader.prevTag1("APPRART") && reader.nextTag1("ART")) {
				if (reader.prevTag1("APPRART") && reader.word === "besten" && reader.nextTag1("ART")) return "ADJD";
				return "ADJA";
			}
			if (reader.prevWord1("der")) {
				if (reader.suffixL2("te")) return "ADJA";
				if (reader.suffixL4("sten")) return "ADJA";
				return "NN";
			}
			if (reader.prevWord1("das")) return "NN";
			if (reader.word === "2.") return "ADV";
			if (reader.prevTag1("CARD") && reader.nextTag1("ART")) return "NN";
			if (reader.prevWord1("") && reader.nextWord1("Das")) return "ADV";
			if (reader.prevWord1("dem")) {
				if (reader.suffixL3("ren")) return "PIS";
				return "NN";
			}
			if (reader.word === "1." && reader.nextTag1("ART")) return "ADV";
			if (reader.prevTag1("PIAT")) {
				if (reader.prevWord1("jede")) return "ADJA";
				return "NN";
			}
			if (reader.prevWord1("des")) return "NN";
			if (reader.nextWord1("Der")) return "ADV";
			if (reader.suffixL2("de")) return "NN";
			if (reader.prevTag1("PPOSAT") && reader.nextTag1("ART")) return "NN";
			if (reader.prevWord1("Das")) return "NN";
			if (reader.prevWord1("ein")) return "NN";
			return "VVFIN";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("$.")) {
			if (reader.suffixL2("er")) return "ADJD";
			if (reader.suffixL3("gen")) return "VVIZU";
			if (reader.prevWord2("die") && reader.word === "lauten") return "VVINF";
			if (reader.prevTag2("$,")) return "NN";
			return "VVFIN";
		}
		if (reader.nextTag1("PRF")) {
			if (reader.prevTag1("ART") && reader.nextTag1("PRF")) return "PIS";
			return "VVFIN";
		}
		if (reader.nextWord1(".")) {
			if (reader.prevTag1("NE") && reader.nextTag1("$.")) return "VVFIN";
			if (reader.word === "anderen" && reader.nextTag1("$.")) return "PIS";
			if (reader.prevWord1("immer")) return "ADJD";
			if (reader.prevTag1("$(")) return "VVFIN";
			if (reader.suffixL3("ere")) return "PIS";
			if (reader.word === "wahren") return "VVINF";
			if (reader.prevWord2("als")) return "ADJA";
			if (reader.prevWord1("am") && reader.nextWord1(".")) return "ADJD";
			if (reader.prevTag2("ADJA") && reader.prevTag1("KON")) return "ADJA";
			if (reader.prevTag2("ADV") && reader.prevTag1("ADV")) return "ADJD";
			if (reader.word === "k" && reader.nextWord1(".")) return "ADJA";
			if (reader.word === "neue" && reader.nextWord2("")) return "ADJA";
			if (reader.prevTag2("ADJD")) return "ADJA";
			if (reader.prevWord1("keine")) return "ADJA";
			if (reader.suffixL3("ige")) return "ADJA";
			if (reader.word === "anderer") return "PIS";
			if (reader.prevTag1("VAFIN") && reader.nextTag1("$.")) return "ADJD";
			if (reader.prevTag1("PROAV")) return "ADJD";
			if (reader.prevTag1("PRF")) return "VVFIN";
			if (reader.prevTag1("ADJD") && reader.word === "verletzte" && reader.nextTag1("$.")) return "VVFIN";
			if (reader.suffixL4("tete")) return "VVFIN";
			if (reader.prevTag1("PTKNEG") && reader.nextTag1("$.")) return "VVFIN";
			if (reader.suffixL4("hten")) return "VVFIN";
			if (reader.prevWord1("selbst")) return "VVFIN";
			if (reader.suffixL4("kten")) return "VVFIN";
			if (reader.suffixL4("igte")) return "VVFIN";
			return "NN";
		}
		if (reader.nextTag1("VAFIN")) {
			if (reader.suffixL4("eren")) return "PIS";
			if (reader.suffixL3("ere")) return "PIS";
			if (reader.prevTag2("") && reader.prevTag1("APPRART")) {
				if (reader.prevWord1("Am")) return "ADJD";
				if (reader.prevTag2("") && reader.prevTag1("APPRART") && reader.word === "anderen") return "PIS";
				return "ADJA";
			}
			if (reader.nextWord2("als")) return "ADJD";
			if (reader.prevTag1("NE") && reader.nextTag1("VAFIN")) return "NE";
			if (reader.suffixL4("eite")) return "ADJA";
			if (reader.prevTag2("") && reader.prevTag1("ADV")) return "ADJD";
			if (reader.word === "kurzem") return "ADJA";
			if (reader.prevWord1("ein")) return "ADJA";
			if (reader.prevWord2("um")) return "ADJD";
			if (reader.prevWord1("desto")) return "ADJD";
			if (reader.prevWord1("am")) return "ADJD";
			return "NN";
		}
		if (reader.nextTag1("PPER")) {
			if (reader.prevWord1("")) return "ADV";
			if (reader.prevTag1("ART")) {
				if (reader.prevWord1("der")) return "NN";
				return "ADJA";
			}
			return "VVFIN";
		}
		if (reader.nextTag1("VVFIN")) {
			if (reader.suffixL4("eren")) return "PIS";
			if (reader.suffixL4("dere")) return "PIS";
			if (reader.prevTag1("APPRART") && reader.word === "übrigen" && reader.nextTag1("VVFIN")) return "ADJA";
			if (reader.prevTag2("NN") && reader.prevTag1("NE")) return "NE";
			if (reader.word === "gleiche") return "ADJA";
			if (reader.word === "kurzem") return "ADJA";
			if (reader.suffixL4("tere")) return "ADJA";
			if (reader.word === "anderer") return "PIS";
			if (reader.suffixL3("gem")) return "ADJA";
			if (reader.prevWord1("Zum")) {
				if (reader.nextTag1("VVFIN") && reader.nextTag2("PPER")) return "PIS";
				return "ADJA";
			}
			if (reader.nextWord2("im")) return "ADJA";
			if (reader.word === "besten" && reader.nextTag1("VVFIN")) return "ADJD";
			if (reader.suffixL4("inen")) return "ADJA";
			if (reader.suffixL4("eite")) return "ADJA";
			if (reader.prevTag1("$(") && reader.nextTag1("VVFIN")) return "ADJA";
			if (reader.prevTag1("ART") && reader.word === "ganze" && reader.nextTag1("VVFIN")) return "ADJA";
			if (reader.prevTag1("ART") && reader.word === "dritten") return "ADJA";
			if (reader.nextWord2("ein")) return "ADJA";
			if (reader.prevWord2("die")) return "ADJA";
			if (reader.word === "alte" && reader.nextTag1("VVFIN")) return "ADJA";
			if (reader.prevWord1("eine")) return "ADJA";
			if (reader.nextWord2("von")) return "ADJA";
			if (reader.nextWord1("erscheint")) return "ADJD";
			return "NN";
		}
		if (reader.nextTag1("VVPP")) {
			if (reader.suffixL2("re")) {
				if (reader.word === "weitere") return "ADJA";
				return "PIS";
			}
			if (reader.word === "anderen") return "PIS";
			if (reader.suffixL2("em")) return "ADJA";
			if (reader.nextTag1("VVPP") && reader.nextTag2("NE")) return "ADJA";
			if (reader.suffixL4("inen")) return "ADJA";
			if (reader.prevTag2("ADV") && reader.prevTag1("ART")) return "ADJA";
			if (reader.prevWord1("in")) return "ADJA";
			if (reader.word === "erster" && reader.nextTag1("VVPP")) return "PIS";
			if (reader.prevWord1("am")) return "ADJD";
			return "NN";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("$,")) {
			if (reader.suffixL2("er")) {
				if (reader.nextTag2("ART")) return "NN";
				return "ADJA";
			}
			if (reader.suffixL2("de")) return "ADJA";
			if (reader.suffixL3("gen")) return "VVINF";
			if (reader.nextTag2("APPRART")) return "ADJA";
			if (reader.suffixL2("es")) return "ADJA";
			if (reader.suffixL3("den")) return "ADJA";
			if (reader.suffixL2("ne")) return "ADJA";
			if (reader.nextTag2("NN")) return "ADJA";
			return "VVFIN";
		}
		if (reader.nextTag1("APPRART")) {
			if (reader.prevTag1("NE") && reader.nextTag1("APPRART")) return "NE";
			if (reader.prevTag2("ADJA")) return "VVFIN";
			if (reader.prevWord2("Die")) return "VVFIN";
			if (reader.word === "anderen" && reader.nextTag1("APPRART") && reader.nextTag2("NN")) return "ADJA";
			if (reader.prevWord2("von")) return "ADJA";
			if (reader.prevTag1("APPRART") && reader.nextTag1("APPRART")) return "ADJD";
			if (reader.prevTag2("PPOSAT") && reader.prevTag1("NN")) return "VVFIN";
			return "NN";
		}
		if (reader.nextTag1("") && reader.nextTag2("")) {
			if (reader.prevTag2("APPR")) {
				if (reader.prevWord2("Von")) return "NE";
				return "NN";
			}
			if (reader.prevTag1("APPR")) return "NN";
			if (reader.word === "11." && reader.nextTag1("") && reader.nextTag2("")) return "ADJA";
			if (reader.suffixL2("er")) {
				if (reader.prevWord2("Von")) return "NE";
				return "NN";
			}
			return "XY";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("ADV")) return "VVFIN";
		if (reader.nextWord1("zu")) {
			if (reader.suffixL3("ren")) return "ADJA";
			if (reader.prevTag1("NN") && reader.nextTag1("PTKZU")) return "PIS";
			if (reader.prevWord1("als")) return "PIS";
			return "NN";
		}
		if (reader.nextTag1("KON") && reader.nextTag2("NN")) {
			if (reader.word === "spielende" && reader.nextTag1("KON") && reader.nextTag2("NN")) return "ADJA";
			if (reader.suffixL4("erer")) return "ADJA";
			if (reader.prevWord2("und")) return "ADJA";
			if (reader.prevTag1("PTKZU")) return "VVINF";
			return "NN";
		}
		if (reader.nextTag1("VMFIN")) {
			if (reader.nextTag1("VMFIN") && reader.nextTag2("$.")) return "VVINF";
			if (reader.word === "anderen") return "PIS";
			if (reader.suffixL4("dere")) return "PIS";
			if (reader.suffixL3("den")) return "ADJA";
			if (reader.suffixL3("gen")) {
				if (reader.prevTag1("NN")) return "VVINF";
				return "ADJA";
			}
			return "NN";
		}
		if (reader.prevTag1("ART") && reader.nextTag1("ADV")) {
			if (reader.suffixL4("")) return "ADJA";
			if (reader.prevWord2(",")) return "ADJA";
			if (reader.suffixL4("eren")) return "ADJA";
			if (reader.nextWord1("Wohl")) return "ADJA";
			if (reader.suffixL2("re")) return "PIS";
			return "NN";
		}
		if (reader.prevTag1("APPRART") && reader.word === "besten") return "ADJD";
		if (reader.nextTag1("VVINF") && reader.nextTag2("VMFIN")) {
			if (reader.suffixL2("er")) return "ADJD";
			return "NN";
		}
		if (reader.prevTag1("") && reader.nextTag1("VVINF")) {
			if (reader.suffixL2("re")) return "PIS";
			return "NN";
		}
		if (reader.prevTag1("NE") && reader.nextTag1("$,")) {
			if (reader.suffixL2("er")) return "NE";
			if (reader.suffixL2("es")) return "NE";
			if (reader.nextWord2("in")) return "ADJA";
			return "VVFIN";
		}
		if (reader.nextTag1("VAINF")) {
			if (reader.suffixL2("en")) {
				if (reader.nextTag2("$.")) return "VVPP";
				if (reader.prevTag1("NN")) return "VVPP";
				return "NN";
			}
			if (reader.prevTag1("ART") && reader.nextTag1("VAINF")) return "ADJA";
			if (reader.suffixL3("rte")) return "VVFIN";
			return "ADJD";
		}
		if (reader.nextTag1("PPOSAT")) {
			if (reader.prevTag1("ART") && reader.nextTag1("PPOSAT")) return "NN";
			if (reader.suffixL2("he")) return "NN";
			return "VVFIN";
		}
		if (reader.nextWord1("geworden")) return "ADJD";
		if (reader.nextTag1("$,") && reader.nextTag2("ART")) {
			if (reader.suffixL3("ren")) {
				if (reader.prevTag2("APPR") && reader.prevTag1("ART") && reader.word === "anderen") return "ADJA";
				return "PIS";
			}
			if (reader.suffixL4("zige")) return "ADJA";
			if (reader.suffixL2("re")) return "PIS";
			if (reader.suffixL4("")) return "ADJA";
			if (reader.word === "erste" && reader.nextTag1("$,")) return "ADJA";
			if (reader.prevWord2("-")) return "ADJA";
			if (reader.suffixL4("sten")) {
				if (reader.prevTag1("ART") && reader.word === "ersten") return "PIS";
				return "ADJA";
			}
			if (reader.prevWord2("er")) return "ADJA";
			if (reader.prevTag1("PROAV") && reader.nextTag1("$,")) return "VVFIN";
			return "NN";
		}
		if (reader.prevTag1("ADJA") && reader.nextTag1("ADV")) return "NN";
		if (reader.nextTag1("$(") && reader.nextTag2("ART")) return "NN";
		if (reader.word === "andere" && reader.nextTag1("VVINF")) return "PIS";
		if (reader.nextTag1("KON") && reader.nextTag2("NE")) return "NE";
		if (reader.nextTag1("$,") && reader.nextTag2("NE")) {
			if (reader.prevTag2("NE") && reader.prevTag1("$,")) return "NE";
			return "NN";
		}
		if (reader.nextTag1("$(") && reader.nextTag2("VVFIN")) return "NN";
		if (reader.nextTag1("VVIZU")) return "NN";
		if (reader.nextTag1("$(") && reader.nextTag2("APPR")) {
			if (reader.suffixL2("re")) return "ADJA";
			if (reader.nextWord2("ohne")) return "ADJA";
			if (reader.nextWord2("als")) return "ADJA";
			if (reader.nextWord2("von")) return "ADJA";
			if (reader.prevTag2("NE")) return "NE";
			return "NN";
		}
		if (reader.prevTag1("ADV") && reader.nextTag1("VVINF")) {
			if (reader.prevTag2("ART")) return "NN";
			return "ADJD";
		}
		if (reader.nextWord1("werdenden")) return "ADJD";
		if (reader.nextTag1("$,") && reader.nextTag2("VVPP")) return "NN";
		if (reader.prevTag1("ART") && reader.nextTag1("PTKNEG")) {
			if (reader.suffixL3("ren")) return "PIS";
			return "NN";
		}
		if (reader.prevTag1("ART") && reader.word === "Frankfurter" && reader.nextTag1("VVINF")) return "NN";
		if (reader.prevTag1("FM")) return "FM";
		if (reader.word === "andere" && reader.nextTag1("ADV")) return "PIS";
		if (reader.prevTag2("") && reader.prevTag1("PPER")) return "VVFIN";
		if (reader.prevWord1("") && reader.nextWord1("Wie")) return "ADV";
		if (reader.prevWord1("dpa")) return "XY";
		if (reader.nextTag1("$(") && reader.nextTag2("VVPP")) return "NN";
		if (reader.prevTag1("KON") && reader.nextTag1("ADJD")) return "NN";
		if (reader.prevTag1("PIAT") && reader.nextTag1("ADV")) return "NN";
		if (reader.nextWord1("Klaus")) return "NN";
		if (reader.nextTag1("PTKVZ") && reader.nextTag2("$.")) return "NN";
		if (reader.prevTag1("APPR") && reader.word === "Deutsche") return "NN";
		if (reader.nextTag1("$(") && reader.nextTag2("$(")) {
			if (reader.prevWord2("die")) return "ADJA";
			return "NN";
		}
		if (reader.prevTag1("ADJA") && reader.nextTag1("ADJD")) return "NN";
		if (reader.nextWord1("damals")) return "VVFIN";
		if (reader.nextWord1("diese")) return "VVFIN";
		if (reader.nextTag1("$,") && reader.nextTag2("VAFIN")) {
			if (reader.prevTag1("ART") && reader.nextTag1("$,")) return "NN";
			return "VVFIN";
		}
		if (reader.prevTag1("$,") && reader.nextTag1("ADV")) return "VVFIN";
		if (reader.nextTag1("PIS")) return "VVFIN";
		if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "3.") return "ADV";
		if (reader.prevWord1("") && reader.word === "4.") return "ADV";
		if (reader.prevWord1("/") && reader.nextWord1(")")) return "XY";
		if (reader.prevWord1("Hans-Hagen") && reader.word === "Bremer") return "NE";
		if (reader.prevWord1("viel") && reader.nextWord1(",")) return "ADJD";
		if (reader.word === "wahren" && reader.nextTag1("$,")) return "VVINF";
		if (reader.prevTag1("PTKZU") && reader.nextTag1("$.")) return "VVINF";
		if (reader.nextTag1("$,") && reader.nextTag2("PWS")) {
			if (reader.prevTag2("VAFIN")) return "ADJA";
			return "NN";
		}
		if (reader.nextTag1("KOKOM") && reader.nextTag2("NN")) return "NN";
		if (reader.word === "Großen" && reader.nextWord1("''")) return "NN";
		if (reader.prevTag1("ADJA") && reader.nextTag1("$.")) return "NN";
		if (reader.nextTag1("KON") && reader.nextTag2("VVINF")) return "NN";
		if (reader.prevWord1("ins") && reader.nextWord1(",")) return "NN";
		if (reader.prevTag1("KOKOM") && reader.nextTag1("$,")) return "NN";
		if (reader.nextWord1("weniger")) return "NN";
		if (reader.nextTag1("ADJD") && reader.nextTag2("$(")) return "NN";
		if (reader.prevTag1("ART") && reader.nextTag1("PROAV")) return "NN";
		if (reader.prevTag1("APPR") && reader.nextTag1("$.")) {
			if (reader.prevTag2("") && reader.prevTag1("APPR")) return "ADV";
			return "NN";
		}
		if (reader.prevWord1("die") && reader.word === "Deutschen") return "NN";
		if (reader.prevTag1("ADJD") && reader.nextTag1("VVINF")) {
			if (reader.suffixL2("er")) return "ADJD";
			return "NN";
		}
		if (reader.nextTag1("ADJD") && reader.nextTag2("PIAT")) return "NN";
		if (reader.nextWord1("halten")) return "NN";
		if (reader.prevTag2("FM") && reader.prevTag1("$(")) return "FM";
		if (reader.word === "anderen" && reader.nextTag1("$,") && reader.nextTag2("ADV")) return "PIS";
		if (reader.nextTag1("ADV") && reader.nextTag2("PIAT")) return "VVFIN";
		if (reader.nextWord1("ob")) return "ADV";
		if (reader.prevWord1("(") && reader.nextWord1("/")) return "XY";
		return "ADJA";
	}
	if (reader.tag === "ITJ") return "ITJ";
	if (reader.tag === "PTKNEG") return "PTKNEG";
	if (reader.tag === "VAPP") return "VAPP";
	if (reader.tag === "APPO") return "APPO";
	if (reader.tag === "PRF") return "PRF";
	if (reader.tag === "VVIZU") return "VVIZU";
	if (reader.tag === "NN") {
		if (reader.prevTag2("NN") && reader.prevTag1("NE")) {
			if (reader.prevWord2("Firma")) return "NN";
			if (reader.prevTag1("NE") && reader.nextTag1("FM")) return "FM";
			if (reader.suffixL3("ung")) return "NN";
			if (reader.nextWord1("sich")) return "VVFIN";
			if (reader.nextWord2("einem")) return "NN";
			if (reader.suffixL4("ffen")) return "NN";
			if (reader.prevTag1("NE") && reader.word === "Industrie") return "NN";
			if (reader.suffixL4("erde")) return "NN";
			if (reader.nextWord1("Dezember")) return "NN";
			if (reader.suffixL2("ub")) return "NN";
			if (reader.prevTag2("NN") && reader.prevTag1("NE") && reader.word === "GmbH") return "NN";
			if (reader.prevTag2("NN") && reader.prevTag1("NE") && reader.word === "Reisebüro") return "NN";
			if (reader.prevTag2("NN") && reader.prevTag1("NE") && reader.word === "AG") return "NN";
			if (reader.prevWord2("Stadt")) return "NN";
			if (reader.prevWord1("Europas")) return "NN";
			if (reader.prevWord2("Unternehmen")) return "NN";
			if (reader.suffixL3("tik")) return "NN";
			if (reader.suffixL2("ft")) return "NN";
			return "NE";
		}
		if (reader.prevTag1("NE") && reader.nextTag1("$,")) {
			if (reader.suffixL2("de")) return "NN";
			if (reader.nextTag2("KOUS")) return "NN";
			if (reader.suffixL2("ie")) return "NN";
			if (reader.suffixL2("on")) return "NN";
			if (reader.prevTag2("KOUS")) return "NN";
			if (reader.word === "Tod") return "NN";
			if (reader.suffixL3("tik")) return "NN";
			if (reader.suffixL2("ag")) return "NN";
			if (reader.prevWord2("nach")) return "VVINF";
			if (reader.suffixL2("rn")) return "NN";
			if (reader.word === "Generäle" && reader.nextWord1(",")) return "NN";
			if (reader.nextWord2("mit")) return "NN";
			if (reader.suffixL2("um")) return "NN";
			if (reader.suffixL3("ung")) return "NN";
			if (reader.nextWord2("in")) return "NN";
			if (reader.suffixL4("ngen")) return "NN";
			if (reader.nextWord2("nach")) return "NN";
			if (reader.suffixL3("sse")) return "NN";
			if (reader.prevWord1("Walesas") && reader.nextWord1(",")) return "NN";
			if (reader.prevWord1("Kohls")) return "NN";
			return "NE";
		}
		if (reader.nextTag1("VMFIN") && reader.nextTag2("$.")) {
			if (reader.prevTag1("ART")) return "NN";
			if (reader.suffixL2("ng")) return "NN";
			return "VVINF";
		}
		if (reader.prevTag1("NE") && reader.nextTag1("$(")) {
			if (reader.word === "AG") return "NN";
			if (reader.nextTag2("")) return "NN";
			if (reader.prevWord1("of") && reader.nextWord1("''")) return "FM";
			if (reader.prevWord1("Deutschlands") && reader.nextWord1("''")) return "NN";
			if (reader.suffixL3("gen")) return "NN";
			if (reader.suffixL3("per")) return "NN";
			if (reader.word === "Verlag") return "NN";
			if (reader.nextWord2("oder")) return "NN";
			return "NE";
		}
		if (reader.prevTag1("FM")) {
			if (reader.prevTag1("FM") && reader.nextTag1("APPR")) {
				if (reader.nextTag2("NE")) return "NE";
				return "NN";
			}
			if (reader.prevWord2("in")) return "NN";
			if (reader.prevTag1("FM") && reader.nextTag1("APPRART")) return "NN";
			if (reader.nextTag1("NE") && reader.nextTag2("NE")) return "NE";
			if (reader.prevWord2("P.")) return "NN";
			if (reader.prevWord1("Peace") && reader.word === "Enforcement") return "NN";
			return "FM";
		}
		if (reader.prevTag2("") && reader.prevTag1("PPER")) return "VVFIN";
		if (reader.prevTag1("NN") && reader.nextTag1("PRF")) return "VVFIN";
		if (reader.nextTag1("VMFIN") && reader.nextTag2("$,")) {
			if (reader.prevTag1("ART")) return "NN";
			if (reader.prevTag1("ADJA") && reader.nextTag1("VMFIN")) return "NN";
			if (reader.prevWord2("")) return "NN";
			return "VVINF";
		}
		if (reader.nextWord1("of")) return "NE";
		if (reader.prevWord2("") && reader.word === "All") return "PIAT";
		if (reader.word === "Moderne" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevWord1("") && reader.nextWord1("(")) {
			if (reader.nextTag1("$(") && reader.nextTag2("NN")) return "NN";
			return "NE";
		}
		if (reader.nextWord1("Sie")) return "VVFIN";
		if (reader.prevTag2("$(") && reader.prevTag1("PPER")) return "VVFIN";
		if (reader.prevTag1("ADV") && reader.nextTag1("PPER")) return "VVFIN";
		if (reader.prevWord1("") && reader.word === "Würde") return "VAFIN";
		if (reader.nextWord1("Richter")) {
			if (reader.prevTag2("$,")) return "NN";
			return "ADJA";
		}
		if (reader.prevWord1("Bundespräsident") && reader.nextWord1("Herzog")) return "NE";
		if (reader.nextTag1("PTKZU") && reader.nextTag2("VMFIN")) return "VVINF";
		if (reader.prevTag1("NN") && reader.nextTag1("PPER")) return "VVFIN";
		if (reader.prevTag1("ADJD") && reader.nextTag1("NN")) {
			if (reader.prevTag2("NN") && reader.prevTag1("ADJD")) return "NN";
			if (reader.suffixL3("den")) return "NN";
			return "ADJA";
		}
		if (reader.prevWord1("Martin")) return "NE";
		if (reader.word === "Euro" && reader.nextTag1("NE")) return "NE";
		if (reader.word === "Mark" && reader.nextTag1("NE")) {
			if (reader.prevTag2("CARD") && reader.prevTag1("NN") && reader.word === "Mark") return "NN";
			return "NE";
		}
		if (reader.prevTag1("$(") && reader.nextTag1("FM")) return "FM";
		if (reader.word === "Art" && reader.nextTag1("NE")) return "NE";
		if (reader.word === "August" && reader.nextTag1("NE")) return "NE";
		if (reader.prevWord1("Stadt")) return "NE";
		if (reader.prevWord1(",") && reader.nextWord1("sich")) return "VVFIN";
		if (reader.prevTag1("") && reader.word === "Mal") return "ADV";
		if (reader.word === "Grüne" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevWord1("Michael")) return "NE";
		if (reader.prevWord1("Peter")) return "NE";
		if (reader.prevWord1("General")) return "NE";
		if (reader.prevWord1("Außenminister")) return "NE";
		if (reader.nextWord2("7.")) return "NE";
		if (reader.prevTag1("PTKNEG") && reader.nextTag1("$(")) return "VVINF";
		if (reader.prevTag1("PTKNEG") && reader.nextTag1("$.")) return "VVINF";
		if (reader.prevWord1("") && reader.word === "Fest") return "PTKVZ";
		if (reader.prevWord1(",") && reader.nextWord1("die")) return "VVFIN";
		if (reader.word === "Neues" && reader.nextTag1("NN")) return "ADJA";
		if (reader.nextWord1("Zustand")) return "ADJA";
		if (reader.nextWord1("Tisch")) return "ADJA";
		if (reader.prevWord1("Tageszeitung")) return "NE";
		if (reader.suffixL2("oj")) return "NE";
		if (reader.prevTag1("NE") && reader.word === "Kleinen") return "NE";
		if (reader.prevWord1("Otto")) return "NE";
		if (reader.word === "General" && reader.nextWord1("Motors")) {
			if (reader.word === "General" && reader.nextWord2("(")) return "FM";
			return "NE";
		}
		if (reader.prevTag1("ART") && reader.word === "Fonds") {
			if (reader.nextWord2("etwa")) return "NN";
			return "NE";
		}
		if (reader.prevTag1("NE") && reader.word === "Mann") return "NE";
		if (reader.prevWord1("Zeitung")) return "NE";
		if (reader.prevWord1("Die") && reader.word === "Allianz") return "NE";
		if (reader.word === "König" && reader.nextTag1("KON") && reader.nextTag2("NE")) return "NE";
		if (reader.prevWord1("&") && reader.word === "A") return "NE";
		if (reader.prevTag2("KOKOM") && reader.prevTag1("NE")) return "NE";
		if (reader.prevWord1("de")) return "NE";
		if (reader.prevWord1("Robert")) return "NE";
		if (reader.nextWord1("for")) return "NE";
		if (reader.prevWord1("Nachrichtenagentur")) return "NE";
		if (reader.prevTag1("NE") && reader.word === "Meister") return "NE";
		if (reader.prevTag1("ADV") && reader.nextTag1("PRF")) return "VVFIN";
		if (reader.prevTag1("ADJD") && reader.nextTag1("PPER")) return "VVFIN";
		if (reader.suffixL2("b-")) return "TRUNC";
		if (reader.word === "anno" && reader.nextTag1("CARD")) return "APPR";
		if (reader.prevTag1("") && reader.word === "Ganze" && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "Schwere" && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "Gute" && reader.nextTag1("NN")) return "ADJA";
		if (reader.nextWord1("Welt")) return "ADJA";
		if (reader.prevTag1("PTKNEG") && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevTag1("KOKOM") && reader.nextTag1("NN")) return "ADJA";
		if (reader.nextWord1("Kirche")) return "ADJA";
		if (reader.prevWord1("äußerst")) return "ADJD";
		if (reader.prevWord1("Manfred")) return "NE";
		if (reader.prevWord1("Gerd")) return "NE";
		if (reader.prevWord1("Von") && reader.word === "Roman" && reader.nextWord1("Arens")) return "NE";
		if (reader.prevTag2("NE") && reader.prevTag1("KON") && reader.word === "Jahr") return "NE";
		if (reader.prevWord1("Gerhard")) return "NE";
		if (reader.prevWord1("Maria")) return "NE";
		if (reader.prevTag1("NE") && reader.word === "B.") return "NE";
		if (reader.prevWord1("sagte") && reader.nextWord1(",")) return "NE";
		if (reader.prevTag1("") && reader.word === "August") return "NE";
		if (reader.word === "Allianz" && reader.nextTag1("NN")) return "NE";
		if (reader.suffixL2("iu")) return "NE";
		if (reader.word === "Währungsfonds" && reader.nextTag1("VVFIN")) return "NE";
		if (reader.nextWord1("Island")) return "NE";
		if (reader.prevTag2("ART") && reader.prevTag1("NE") && reader.word === "Post") return "NE";
		if (reader.prevWord2("") && reader.word === "Reich") {
			if (reader.nextTag1("ART")) return "NN";
			return "NE";
		}
		if (reader.prevTag1("NE") && reader.word === "Route") return "NE";
		if (reader.word === "City" && reader.nextTag1("NE")) return "NE";
		if (reader.prevWord1("Richard")) return "NE";
		if (reader.prevWord1("Sunset")) return "NE";
		if (reader.prevWord1("John")) return "NE";
		if (reader.prevTag1("NE") && reader.nextTag1("FM")) return "NE";
		if (reader.nextWord1("Angaben")) return "NE";
		if (reader.nextWord1("Tilmann")) return "NE";
		if (reader.suffixL2("CK")) return "NE";
		if (reader.nextWord1("Group")) return "NE";
		if (reader.suffixL2("ji")) return "NE";
		if (reader.prevWord1("König")) return "NE";
		if (reader.prevWord1("Sender")) return "NE";
		if (reader.prevWord1("Hauptstadt")) return "NE";
		if (reader.prevWord1("Alexander")) return "NE";
		if (reader.prevTag1("NN") && reader.nextTag1("FM")) return "FM";
		if (reader.nextWord1("and")) return "FM";
		if (reader.prevTag1("APPR") && reader.nextTag1("FM")) return "FM";
		if (reader.nextWord2("the")) return "FM";
		if (reader.prevWord2("''") && reader.word === "Reisen") return "VVINF";
		if (reader.prevTag2("KON") && reader.prevTag1("PPER")) return "VVFIN";
		if (reader.prevTag2("$,") && reader.prevTag1("PPER")) return "VVFIN";
		if (reader.suffixL3("vte")) return "VVFIN";
		if (reader.prevWord1("Dort")) return "VVFIN";
		if (reader.prevTag1("$,") && reader.nextTag1("PPER")) return "VVFIN";
		if (reader.prevTag1("") && reader.nextTag1("PPER")) {
			if (reader.suffixL3("ren")) return "VAFIN";
			return "VVFIN";
		}
		if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "Rechts") return "ADV";
		if (reader.nextWord1("worden")) return "VVPP";
		if (reader.word === "E" && reader.nextWord1("+") && reader.nextWord2("1")) return "XY";
		if (reader.word === "§" && reader.nextTag1("CARD") && reader.nextTag2("$.")) return "XY";
		return "NN";
	}
	if (reader.tag === "PDAT") {
		if (reader.nextTag1("VAFIN")) return "PDS";
		if (reader.nextTag1("VVFIN")) return "PDS";
		if (reader.nextTag1("VMFIN")) return "PDS";
		if (reader.nextTag1("ADV")) {
			if (reader.nextTag1("ADV") && reader.nextTag2("ADJA")) return "PDAT";
			if (reader.word === "dieses") return "PDAT";
			return "PDS";
		}
		if (reader.nextTag1("ART")) return "PDS";
		if (reader.nextTag1("$,") && reader.nextTag2("ART")) return "PDS";
		if (reader.nextTag1("VVINF")) {
			if (reader.prevTag2("") && reader.prevTag1("APPR")) return "PDAT";
			return "PDS";
		}
		if (reader.nextTag1("APPR")) {
			if (reader.nextTag2("NE")) return "PDAT";
			if (reader.prevWord2("") && reader.word === "dieser") return "PDAT";
			if (reader.prevTag1("") && reader.word === "Diese") return "PDAT";
			if (reader.prevTag1("APPR") && reader.word === "diesem" && reader.nextTag1("APPR")) return "PDAT";
			if (reader.prevWord2("") && reader.word === "dieses") return "PDAT";
			if (reader.prevTag1("PTKZU") && reader.nextTag1("APPR")) return "PDAT";
			if (reader.word === "dieser" && reader.nextWord2("dem")) return "PDAT";
			return "PDS";
		}
		if (reader.nextTag1("VVPP")) return "PDS";
		if (reader.nextTag1("$.")) return "PDS";
		if (reader.nextTag1("PTKZU")) return "PDS";
		if (reader.nextTag1("PTKNEG")) return "PDS";
		if (reader.nextWord1("sich")) return "PDS";
		if (reader.word === "diese" && reader.nextTag1("ADJD")) return "PDS";
		if (reader.nextTag1("APPRART")) {
			if (reader.nextWord1("vom")) return "PDAT";
			return "PDS";
		}
		if (reader.nextWord1("werden")) return "PDS";
		return "PDAT";
	}
	if (reader.tag === "APPR") {
		if (reader.nextTag1("$.")) {
			if (reader.prevWord1("") && reader.nextWord1(":")) return "APPR";
			if (reader.word === "in" && reader.nextTag1("$.")) return "APPR";
			if (reader.prevTag1("NN") && reader.word === "wegen" && reader.nextTag1("$.")) return "APPO";
			if (reader.word === "Dank") return "NN";
			if (reader.suffixL4("rotz")) return "NN";
			if (reader.prevWord1("werden") && reader.nextWord1(":")) return "APPR";
			if (reader.word === "laut" && reader.nextWord1(".")) return "ADJD";
			return "PTKVZ";
		}
		if (reader.nextTag1("$,")) {
			if (reader.word === "laut") return "ADJD";
			if (reader.prevTag2("ART") && reader.prevTag1("NN") && reader.word === "entlang") return "APPO";
			if (reader.word === "von") return "APPR";
			return "PTKVZ";
		}
		if (reader.prevWord1(",") && reader.word === "um") {
			if (reader.word === "um" && reader.nextTag1("ART") && reader.nextTag2("PPER")) return "APPR";
			if (reader.word === "um" && reader.nextWord2("Freilassung")) return "APPR";
			return "KOUI";
		}
		if (reader.prevWord1("mehr") && reader.word === "als") return "KOKOM";
		if (reader.prevTag1("CARD") && reader.word === "bis" && reader.nextTag1("CARD")) {
			if (reader.prevWord2("von") && reader.prevWord1("1985") && reader.word === "bis") return "APPR";
			if (reader.prevWord2("von") && reader.prevWord1("1988") && reader.word === "bis") return "APPR";
			if (reader.word === "bis" && reader.nextWord1("18") && reader.nextWord2("Uhr")) return "APPR";
			if (reader.word === "bis" && reader.nextWord1("17") && reader.nextWord2("Uhr")) return "APPR";
			if (reader.prevWord2("von") && reader.prevWord1("1910") && reader.word === "bis") return "APPR";
			if (reader.nextWord1("1991")) return "APPR";
			return "KON";
		}
		if (reader.prevTag1("$,") && reader.word === "als") {
			if (reader.word === "als" && reader.nextTag1("KOUS")) return "KOKOM";
			if (reader.prevWord1(",") && reader.nextWord1("''")) return "APPR";
			if (reader.word === "als" && reader.nextWord2("er")) return "KOKOM";
			if (reader.nextTag2("$,")) return "APPR";
			if (reader.nextTag1("VAFIN") && reader.nextTag2("PPER")) return "KOKOM";
			if (reader.nextTag1("PPER") && reader.nextTag2("PIAT")) return "KOKOM";
			if (reader.prevWord2("anderes") && reader.word === "als") return "KOKOM";
			if (reader.word === "als" && reader.nextTag1("VVFIN") && reader.nextTag2("PPER")) return "KOKOM";
			if (reader.prevWord2("übrig") && reader.word === "als") return "KOKOM";
			if (reader.word === "als" && reader.nextTag1("NN") && reader.nextTag2("VVPP")) return "APPR";
			if (reader.word === "als" && reader.nextWord1("der") && reader.nextWord2("Präsident")) return "KOKOM";
			if (reader.word === "als" && reader.nextTag1("APPR") && reader.nextTag2("PPOSAT")) return "KOKOM";
			if (reader.word === "als" && reader.nextWord2("Astronomen")) return "KOKOM";
			if (reader.prevWord1(",") && reader.word === "als" && reader.nextWord1("hätten")) return "KOKOM";
			if (reader.nextTag1("ADJD") && reader.nextTag2("VVPP")) return "KOKOM";
			if (reader.prevWord1(",") && reader.nextWord1("dies")) return "KOKOM";
			if (reader.word === "als" && reader.nextWord2("ist")) return "KOKOM";
			if (reader.prevWord1(",") && reader.nextWord1("hätte")) return "KOKOM";
			if (reader.prevWord1(",") && reader.nextWord1("werde")) return "KOKOM";
			if (reader.word === "als" && reader.nextTag1("NN") && reader.nextTag2("$.")) return "APPR";
			if (reader.word === "als" && reader.nextTag1("ADJA") && reader.nextTag2("$(")) return "APPR";
			if (reader.word === "als" && reader.nextWord1("Vertreter")) return "APPR";
			if (reader.word === "als" && reader.nextTag1("NN") && reader.nextTag2("$(")) return "APPR";
			if (reader.word === "als" && reader.nextTag1("NN") && reader.nextTag2("ADV")) return "APPR";
			if (reader.nextTag1("NN") && reader.nextTag2("KON")) return "APPR";
			return "KOUS";
		}
		if (reader.nextTag1("") && reader.nextTag2("")) return "PTKVZ";
		if (reader.nextTag1("PTKZU") && reader.nextTag2("CARD")) return "ADV";
		if (reader.prevTag1("ADJD") && reader.word === "als") {
			if (reader.nextTag1("NN") && reader.nextTag2("APPR")) return "APPR";
			if (reader.nextTag1("$(") && reader.nextTag2("NN")) return "APPR";
			if (reader.nextTag1("NN") && reader.nextTag2("ART")) return "APPR";
			if (reader.prevWord1("erneut") && reader.word === "als") return "APPR";
			if (reader.nextTag1("NN") && reader.nextTag2("VVINF")) return "APPR";
			if (reader.nextTag1("ADJD") && reader.nextTag2("VVINF")) return "APPR";
			if (reader.word === "als" && reader.nextTag1("NN") && reader.nextTag2("VVFIN")) return "APPR";
			if (reader.prevWord2("Jahre") && reader.prevWord1("lang") && reader.word === "als") return "APPR";
			if (reader.prevTag2("PWS")) return "APPR";
			if (reader.nextTag1("$(") && reader.nextTag2("NE")) return "APPR";
			if (reader.word === "als" && reader.nextTag1("$(") && reader.nextTag2("ADJA")) return "APPR";
			if (reader.prevWord1("erfolgreich")) return "APPR";
			if (reader.nextTag2("VVIZU")) return "APPR";
			if (reader.prevWord1("eindeutig") && reader.word === "als") return "APPR";
			if (reader.prevWord2("sowohl") && reader.word === "als") return "KON";
			return "KOKOM";
		}
		if (reader.prevTag1("PIAT") && reader.word === "als") {
			if (reader.prevWord2("von") && reader.prevWord1("vielen") && reader.word === "als") return "APPR";
			return "KOKOM";
		}
		if (reader.prevWord1(",") && reader.word === "während") {
			if (reader.prevWord1(",") && reader.word === "während" && reader.nextWord1("des")) return "APPR";
			return "KOUS";
		}
		if (reader.word === "über" && reader.nextTag1("CARD")) {
			if (reader.word === "über" && reader.nextTag1("CARD") && reader.nextTag2("APZR")) return "APPR";
			if (reader.prevTag2("PIAT")) return "APPR";
			if (reader.prevTag2("ADV") && reader.prevTag1("ADV") && reader.word === "über") return "APPR";
			if (reader.prevTag2("NN") && reader.prevTag1("PTKNEG") && reader.word === "über") return "APPR";
			if (reader.prevWord1("sie")) return "APPR";
			if (reader.prevWord2("einer") && reader.word === "über") return "APPR";
			if (reader.prevWord2("ein") && reader.word === "über") return "APPR";
			return "ADV";
		}
		if (reader.word === "als" && reader.nextWord1("auch")) return "KON";
		if (reader.nextTag1("KOKOM") && reader.nextTag2("APPR")) return "ADV";
		if (reader.word === "als" && reader.nextTag1("APPR")) return "KOKOM";
		if (reader.prevTag2("APPR") && reader.prevTag1("KOKOM") && reader.word === "vor") return "ADV";
		if (reader.nextWord1("und")) {
			if (reader.nextTag2("APPR")) {
				if (reader.suffixL2("ch")) return "ADV";
				return "APPR";
			}
			if (reader.word === "von" && reader.nextWord1("und")) return "APPR";
			return "PTKVZ";
		}
		if (reader.word === "als" && reader.nextWord1("die")) {
			if (reader.word === "als" && reader.nextTag1("ART") && reader.nextTag2("ADJD")) return "APPR";
			if (reader.word === "als" && reader.nextWord1("die") && reader.nextWord2("treibende")) return "APPR";
			return "KOKOM";
		}
		if (reader.prevWord1("anders") && reader.word === "als") return "KOKOM";
		if (reader.prevWord2("mehr") && reader.word === "als") return "KOKOM";
		if (reader.word === "bis" && reader.nextTag1("ART")) {
			if (reader.prevTag2("ART")) return "KON";
			return "KOUS";
		}
		if (reader.prevWord2("von") && reader.word === "an") {
			if (reader.nextTag2("VVFIN")) return "APPR";
			if (reader.nextWord1("der")) return "APPR";
			if (reader.prevTag1("NE") && reader.word === "an") return "APPR";
			if (reader.prevTag1("NN") && reader.word === "an" && reader.nextTag1("NE")) return "APPR";
			return "APZR";
		}
		if (reader.nextWord1("-")) {
			if (reader.word === "von" && reader.nextTag1("$(")) return "APPR";
			return "PTKVZ";
		}
		if (reader.prevTag1("") && reader.word === "Zu" && reader.nextTag1("VVINF")) return "PTKZU";
		if (reader.nextTag1("$(") && reader.nextTag2("")) return "PTKVZ";
		if (reader.word === "Als" && reader.nextTag1("PPER")) return "KOUS";
		if (reader.prevTag1("VVPP") && reader.word === "als") {
			if (reader.nextTag1("NN") && reader.nextTag2("APPR")) return "APPR";
			return "KOKOM";
		}
		if (reader.nextTag1("$(") && reader.nextTag2("$,")) return "PTKVZ";
		if (reader.word === "als" && reader.nextTag1("APPRART")) return "KOKOM";
		if (reader.prevWord1("") && reader.word === "Als" && reader.nextWord1("die")) return "KOUS";
		if (reader.prevTag1("$,") && reader.word === "bis" && reader.nextTag1("PPER")) return "KOUS";
		if (reader.prevWord2("Von") && reader.word === "an") return "APZR";
		if (reader.word === "aus" && reader.nextTag1("APPR")) {
			if (reader.prevWord2("von") && reader.word === "aus") return "APZR";
			return "PTKVZ";
		}
		if (reader.prevTag1("TRUNC") && reader.word === "bis") return "KON";
		if (reader.word === "als" && reader.nextTag1("ADV") && reader.nextTag2("$.")) return "KOKOM";
		if (reader.prevTag2("VVINF") && reader.prevTag1("$,") && reader.word === "ohne") {
			if (reader.word === "ohne" && reader.nextWord1("daß")) return "APPR";
			return "KOUI";
		}
		if (reader.prevTag2("") && reader.prevTag1("KON") && reader.word === "während") return "KOUS";
		if (reader.prevTag2("VVPP") && reader.prevTag1("VAFIN") && reader.word === "als") return "KOKOM";
		if (reader.word === "um" && reader.nextWord1("so")) return "KOUI";
		if (reader.prevWord2("1.") && reader.word === "an") return "APZR";
		if (reader.prevTag1("APPR") && reader.word === "unter" && reader.nextTag1("CARD")) return "ADV";
		if (reader.prevWord1("Meinung") && reader.word === "nach") return "APPO";
		if (reader.nextWord1("Pierer")) return "NE";
		if (reader.prevWord1("") && reader.word === "Als" && reader.nextWord1("der")) return "KOUS";
		if (reader.word === "Als" && reader.nextTag1("NE")) return "KOUS";
		if (reader.word === "als" && reader.nextTag1("PPER")) {
			if (reader.prevTag1("KON") && reader.nextTag1("PPER")) return "KOUS";
			return "KOKOM";
		}
		if (reader.prevTag1("ADJA") && reader.word === "als") {
			if (reader.prevTag2("ART") && reader.prevTag1("ADJA") && reader.word === "als") return "APPR";
			if (reader.word === "als" && reader.nextWord1("''")) return "APPR";
			if (reader.prevWord2("im") && reader.word === "als") return "APPR";
			return "KOKOM";
		}
		if (reader.prevTag1("APPR") && reader.word === "voller" && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "Zu" && reader.nextTag1("ADJD")) return "PTKA";
		if (reader.prevTag2("APPR") && reader.prevTag1("NE") && reader.word === "aus") {
			if (reader.word === "aus" && reader.nextWord1("dem")) return "APPR";
			if (reader.prevTag1("NE") && reader.nextTag1("NE")) return "APPR";
			if (reader.prevTag1("NE") && reader.word === "aus" && reader.nextTag1("PPOSAT")) return "APPR";
			return "APZR";
		}
		if (reader.prevWord1("Anders") && reader.word === "als") return "KOKOM";
		if (reader.prevWord2("nichts") && reader.word === "als") return "KOKOM";
		if (reader.prevTag2("$,") && reader.prevTag1("$(") && reader.word === "um") return "KOUI";
		if (reader.prevTag2("VAFIN") && reader.prevTag1("$,") && reader.word === "ohne") return "KOUI";
		if (reader.nextWord1("wie")) {
			if (reader.nextTag2("ADV")) return "KOUI";
			return "PTKVZ";
		}
		if (reader.prevWord1("ein") && reader.word === "bis") return "KON";
		if (reader.word === "als" && reader.nextTag1("CARD")) return "KOKOM";
		if (reader.word === "als" && reader.nextWord1("der")) {
			if (reader.prevTag2("")) return "KOUS";
			if (reader.prevWord2(",")) return "KOUS";
			return "KOKOM";
		}
		if (reader.nextTag1("$(") && reader.nextTag2("$.")) return "PTKVZ";
		if (reader.prevWord2("vom") && reader.word === "aus") return "APZR";
		if (reader.prevTag2("APPR") && reader.prevTag1("KON") && reader.word === "nach") return "ADV";
		if (reader.prevTag2("") && reader.prevTag1("NE") && reader.word === "von") return "NE";
		if (reader.word === "bis" && reader.nextTag1("PRF")) return "KOUS";
		if (reader.prevTag2("ADJD") && reader.prevTag1("VAFIN") && reader.word === "als") return "KOKOM";
		if (reader.prevWord1("Vernehmen") && reader.word === "nach") return "APPO";
		if (reader.prevWord1("Ansicht") && reader.word === "nach") return "APPO";
		if (reader.prevWord1("zum")) return "NN";
		if (reader.prevTag1("") && reader.word === "Bis" && reader.nextTag1("PPER")) return "KOUS";
		if (reader.word === "seit" && reader.nextWord1("die")) return "KOUS";
		if (reader.word === "Seit" && reader.nextWord1("die")) return "KOUS";
		if (reader.word === "ohne" && reader.nextTag1("PROAV")) return "KOUI";
		if (reader.prevTag1("$,") && reader.word === "ohne" && reader.nextTag1("ADV")) return "KOUI";
		if (reader.word === "statt" && reader.nextWord2("zu")) return "KOUI";
		if (reader.word === "ohne" && reader.nextTag1("APPR")) return "KOUI";
		if (reader.prevWord1("Made")) return "FM";
		if (reader.prevWord2("kommenden") && reader.word === "an") return "APZR";
		if (reader.nextTag1("VMFIN")) {
			if (reader.prevTag1("PPOSAT")) return "NN";
			return "APZR";
		}
		if (reader.prevWord2("von") && reader.prevWord1("sich") && reader.word === "aus") return "APZR";
		if (reader.word === "über" && reader.nextWord1("einem")) return "ADV";
		if (reader.nextWord1("Paczensky")) return "NE";
		if (reader.word === "Als" && reader.nextTag1("APPRART")) return "KOUS";
		if (reader.word === "Als" && reader.nextWord2("die")) return "KOUS";
		if (reader.prevTag1("$,") && reader.word === "bis" && reader.nextTag1("NE")) return "KOUS";
		if (reader.word === "Als" && reader.nextTag1("APPR")) return "KOUS";
		if (reader.nextWord1("vielmehr")) return "KON";
		if (reader.word === "als" && reader.nextTag1("ADV") && reader.nextTag2("VVPP")) return "KOKOM";
		if (reader.word === "laut" && reader.nextTag1("APPR")) return "ADJD";
		if (reader.prevWord1(",") && reader.word === "statt" && reader.nextWord1("sich")) return "KOUI";
		if (reader.word === "ohne" && reader.nextTag1("PRF")) return "KOUI";
		if (reader.word === "ohne" && reader.nextTag1("PTKZU")) return "KOUI";
		if (reader.prevWord2("Januar") && reader.word === "an") return "APZR";
		if (reader.word === "zwischen" && reader.nextTag1("CARD") && reader.nextTag2("CARD")) return "ADV";
		if (reader.nextTag1("PTKZU") && reader.nextTag2("ADV")) return "ADV";
		if (reader.prevWord2("durch") && reader.word === "durch") return "ADV";
		if (reader.prevTag2("PTKVZ") && reader.prevTag1("KON")) return "ADV";
		if (reader.prevTag1("APPR") && reader.word === "plus" && reader.nextTag1("CARD")) return "ADV";
		if (reader.word === "mit" && reader.nextTag1("PROAV")) return "ADV";
		if (reader.prevWord2("aller") && reader.word === "nach") return "APPO";
		if (reader.prevWord1("Herbert") && reader.word === "von") return "NE";
		if (reader.nextWord1("Hindenburg")) return "NE";
		if (reader.prevWord1("Detlev") && reader.word === "von") return "NE";
		if (reader.prevWord1("Joachim") && reader.word === "von") return "NE";
		if (reader.prevTag1("") && reader.word === "Seit" && reader.nextTag1("NE")) return "KOUS";
		if (reader.prevWord1("-") && reader.word === "während") return "KOUS";
		if (reader.prevTag1("$,") && reader.word === "seit" && reader.nextTag1("ADJA")) return "KOUS";
		if (reader.word === "seit" && reader.nextTag1("PPER")) return "KOUS";
		if (reader.nextWord1("freitags")) return "KON";
		if (reader.prevWord1("Prozent") && reader.word === "plus") return "KON";
		if (reader.nextTag1("VAFIN")) {
			if (reader.prevTag1("NN") && reader.nextTag1("VAFIN")) return "APZR";
			return "KOKOM";
		}
		if (reader.prevWord1("") && reader.nextWord1("ob")) return "KOKOM";
		if (reader.prevTag2("ADJA") && reader.prevTag1("VAFIN") && reader.word === "als") return "KOKOM";
		if (reader.prevWord1("nichts") && reader.word === "als") return "KOKOM";
		if (reader.prevTag2("ADJD") && reader.prevTag1("VVFIN") && reader.word === "als") return "KOKOM";
		if (reader.nextTag1("VVFIN") && reader.nextTag2("PPER")) {
			if (reader.prevTag2("ART")) return "APPO";
			return "KOKOM";
		}
		if (reader.prevTag1("VVINF") && reader.word === "als" && reader.nextTag1("ART")) return "KOKOM";
		if (reader.prevTag2("VVINF") && reader.prevTag1("VMFIN") && reader.word === "als") return "KOKOM";
		if (reader.word === "laut" && reader.nextTag1("ADJD")) return "ADJD";
		if (reader.prevWord2(",") && reader.prevWord1("auch") && reader.word === "um") return "KOUI";
		if (reader.word === "um" && reader.nextTag1("VVIZU") && reader.nextTag2("$,")) return "KOUI";
		if (reader.prevWord1("") && reader.word === "Statt" && reader.nextWord1("die")) return "KOUI";
		if (reader.prevTag1("$,") && reader.word === "ohne" && reader.nextTag1("PPER")) return "KOUI";
		if (reader.prevTag2("ART") && reader.prevTag1("$,") && reader.word === "statt") return "KOUI";
		if (reader.nextWord1("bei")) return "PTKVZ";
		if (reader.word === "auf" && reader.nextWord1("mit")) return "PTKVZ";
		if (reader.word === "mit" && reader.nextWord1("auf")) return "PTKVZ";
		if (reader.prevWord1("wo") && reader.word === "aus") return "APZR";
		return "APPR";
	}
	if (reader.tag === "PIAT") {
		if (reader.nextTag1("VVFIN")) return "PIS";
		if (reader.nextTag1("APPR")) {
			if (reader.word === "Mehr" && reader.nextWord1("als") && reader.nextWord2("ein")) return "PIAT";
			if (reader.word === "genügend") return "ADJD";
			if (reader.word === "weniger" && reader.nextWord1("an")) return "ADV";
			if (reader.word === "aller") return "PIAT";
			if (reader.word === "Mehr" && reader.nextWord2("100")) return "PIAT";
			if (reader.nextWord2("zwei")) return "PIAT";
			if (reader.prevWord1("es") && reader.word === "weniger") return "ADV";
			if (reader.prevTag1("$(") && reader.word === "weniger") return "ADV";
			if (reader.prevWord2(",") && reader.word === "weniger") return "ADV";
			if (reader.prevWord1("ein")) return "NN";
			if (reader.word === "Mehr" && reader.nextWord1("als") && reader.nextWord2("80")) return "PIAT";
			if (reader.word === "Mehr" && reader.nextWord2("300")) return "PIAT";
			if (reader.word === "Mehr" && reader.nextWord1("als") && reader.nextWord2("500")) return "PIAT";
			if (reader.nextTag1("APPR") && reader.nextTag2("PDAT")) return "PIAT";
			if (reader.nextWord2("12")) return "PIAT";
			if (reader.nextWord2("fünf")) return "PIAT";
			if (reader.nextWord2("90")) return "PIAT";
			if (reader.prevTag1("NE")) return "PIAT";
			return "PIS";
		}
		if (reader.nextTag1("VAFIN")) return "PIS";
		if (reader.nextWord1("der")) {
			if (reader.prevTag1("APPR") && reader.word === "all" && reader.nextTag1("ART")) return "PIAT";
			return "PIS";
		}
		if (reader.nextWord1(",")) {
			if (reader.word === "einigen" && reader.nextTag1("$,")) return "VVINF";
			if (reader.prevWord1("in") && reader.nextWord1(",")) return "PIAT";
			return "PIS";
		}
		if (reader.nextTag1("VVINF")) return "PIS";
		if (reader.word === "weniger" && reader.nextTag1("ADJD")) return "ADV";
		if (reader.nextTag1("VMFIN")) {
			if (reader.word === "einigen" && reader.nextTag1("VMFIN")) return "VVINF";
			return "PIS";
		}
		if (reader.nextTag1("VVPP")) {
			if (reader.word === "weniger" && reader.nextWord2("und")) return "ADV";
			if (reader.word === "weniger" && reader.nextWord2(".")) return "ADV";
			if (reader.prevTag2("NN") && reader.prevTag1("ADV") && reader.word === "weniger") return "ADV";
			if (reader.word === "genügend" && reader.nextTag1("VVPP")) return "ADJD";
			return "PIS";
		}
		if (reader.nextTag1("ADV")) {
			if (reader.nextTag2("ADJA")) return "PIAT";
			if (reader.nextWord2("so")) return "PIAT";
			if (reader.nextTag2("VVFIN")) return "ADV";
			if (reader.word === "Mehr" && reader.nextWord1("noch") && reader.nextWord2("als")) return "ADV";
			if (reader.suffixL4("elen")) return "PIAT";
			if (reader.nextWord1("lange")) return "PIAT";
			return "PIS";
		}
		if (reader.word === "alle" && reader.nextTag1("ADJD")) return "PIS";
		if (reader.nextTag1("$.")) {
			if (reader.word === "weniger" && reader.nextTag1("$.")) return "ADV";
			if (reader.suffixL3("gen")) return "VVINF";
			if (reader.prevTag2("PPER") && reader.prevTag1("ADV") && reader.word === "keine") return "PIAT";
			return "PIS";
		}
		if (reader.nextWord1("seiner")) return "PIS";
		if (reader.word === "weniger" && reader.nextTag1("ART")) return "ADV";
		if (reader.nextTag1("VAINF")) return "PIS";
		if (reader.nextWord1("dieser")) return "PIS";
		if (reader.prevTag1("APPRART") && reader.word === "meisten") return "PIS";
		if (reader.word === "alle" && reader.nextTag1("ART")) return "PIS";
		if (reader.nextWord1("ihrer")) return "PIS";
		if (reader.nextWord1("zu")) return "PIS";
		if (reader.nextTag1("APPRART")) {
			if (reader.word === "weniger" && reader.nextTag1("APPRART") && reader.nextTag2("NN")) return "ADV";
			if (reader.nextWord1("zur")) return "PIAT";
			return "PIS";
		}
		if (reader.nextWord1("-")) return "PIS";
		if (reader.nextWord1("voran")) return "PIS";
		if (reader.word === "jeder" && reader.nextTag1("ART")) return "PIS";
		if (reader.nextWord1("nicht")) return "PIS";
		if (reader.nextTag1("ADJD") && reader.nextTag2("$.")) return "PIS";
		if (reader.prevTag2("$,") && reader.prevTag1("PWS")) return "PIS";
		if (reader.prevTag2("VAFIN") && reader.prevTag1("ADV") && reader.word === "jeder") return "PIS";
		if (reader.prevWord1("für") && reader.word === "alle" && reader.nextWord1("''")) return "PIS";
		if (reader.nextWord1("davon")) return "PIS";
		return "PIAT";
	}
	if (reader.tag === "ADJD") {
		if (reader.word === "gut" && reader.nextTag1("CARD")) return "ADV";
		if (reader.word === "gut" && reader.nextTag1("ART")) return "ADV";
		if (reader.prevTag1("NE") && reader.word === "international") return "NE";
		if (reader.prevTag1("APPR") && reader.nextTag1("NN")) {
			if (reader.suffixL2("ch")) return "ADJD";
			if (reader.suffixL2("ig")) return "ADJD";
			return "ADJA";
		}
		if (reader.word === "genau" && reader.nextTag1("CARD")) return "ADV";
		if (reader.word === "wichtiger" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevWord2("Von")) {
			if (reader.nextTag2("NN")) return "ADJD";
			return "NE";
		}
		if (reader.word === "verstärkt" && reader.nextWord1(".")) return "VVPP";
		if (reader.nextWord1("worden")) return "VVPP";
		if (reader.prevTag1("NE") && reader.word === "bekannt" && reader.nextTag1("$.")) return "PTKVZ";
		if (reader.word === "frei" && reader.nextWord2("")) return "PTKVZ";
		if (reader.word === "entsprechend" && reader.nextTag1("ART")) return "APPR";
		if (reader.word === "genau" && reader.nextTag1("ART") && reader.nextTag2("NN")) return "ADV";
		if (reader.word === "sicher" && reader.nextTag1("ADV")) return "ADV";
		if (reader.word === "weit" && reader.nextWord1("mehr")) return "ADV";
		if (reader.word === "voll" && reader.nextTag1("NN")) return "APPR";
		if (reader.word === "verstärkt" && reader.nextWord1(",")) return "VVPP";
		if (reader.word === "still" && reader.nextWord1(".")) return "PTKVZ";
		if (reader.prevWord1("gab") && reader.word === "bekannt" && reader.nextWord1(",")) return "PTKVZ";
		if (reader.word === "niedriger" && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "wichtiger" && reader.nextTag1("ADJA")) return "ADJA";
		if (reader.word === "schlechter" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevWord2("Das") && reader.word === "sicher") return "ADV";
		if (reader.word === "rein" && reader.nextTag1("ADJD")) return "ADV";
		if (reader.prevTag2("ART") && reader.prevTag1("ADJA") && reader.word === "Gut") return "NN";
		if (reader.prevTag2("ADJD") && reader.prevTag1("ADJA")) return "NN";
		if (reader.suffixL3("ear")) return "NE";
		if (reader.prevTag1("APPR") && reader.nextTag1("NE")) return "NE";
		if (reader.prevTag1("NE") && reader.word === "offen") return "PTKVZ";
		if (reader.prevTag1("NN") && reader.word === "fern") return "PTKVZ";
		if (reader.prevTag1("NN") && reader.word === "frei" && reader.nextTag1("$,")) return "PTKVZ";
		if (reader.prevTag1("NN") && reader.word === "offen" && reader.nextTag1("$.")) return "PTKVZ";
		if (reader.word === "tiefer" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevTag1("ART") && reader.word === "deutlicher" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevTag1("ART") && reader.word === "stärksten") return "ADJA";
		if (reader.word === "schwieriger" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevTag1("NN") && reader.word === "einfacher") return "ADJA";
		if (reader.word === "geringer" && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "interessiert" && reader.nextTag1("PRF")) return "VVFIN";
		return "ADJD";
	}
	if (reader.tag === "VVINF") {
		if (reader.nextTag2("NN")) {
			if (reader.nextWord1("von")) return "NN";
			if (reader.prevTag1("PTKZU") && reader.nextTag1("KON")) return "VVINF";
			if (reader.prevWord1("zu") && reader.nextWord1(",")) return "VVINF";
			if (reader.prevTag1("APPRART")) return "NN";
			if (reader.prevTag2("APPR") && reader.prevTag1("ART")) return "NN";
			if (reader.prevTag1("PROAV") && reader.nextTag1("$,")) return "VVINF";
			if (reader.prevTag2("NN") && reader.prevTag1("APPR")) {
				if (reader.suffixL3("gen")) return "NE";
				return "NN";
			}
			if (reader.nextWord1("des")) return "NN";
			if (reader.prevTag2("NN") && reader.prevTag1("ADJA")) return "NN";
			if (reader.prevTag2("APPR") && reader.prevTag1("PPOSAT")) return "NN";
			if (reader.prevTag2("$,") && reader.prevTag1("NN")) return "VVINF";
			if (reader.prevTag1("ADJD") && reader.nextTag1("KON")) return "VVINF";
			if (reader.prevTag1("PTKZU") && reader.nextTag1("$.")) return "VVINF";
			if (reader.prevWord2("zum")) return "VVINF";
			if (reader.word === "bleiben" && reader.nextWord1(",")) return "VVINF";
			if (reader.prevTag1("NE") && reader.nextTag1("KON")) return "VVINF";
			if (reader.prevWord1("durch")) return "NN";
			if (reader.prevTag1("ADJA") && reader.nextTag1("$,")) return "NN";
			if (reader.prevTag2("TRUNC")) return "NN";
			if (reader.prevWord1(",") && reader.nextWord1("und")) return "NN";
			if (reader.prevWord1("das") && reader.nextWord1("der")) return "NN";
			if (reader.prevWord1(",") && reader.nextWord1(",")) return "NN";
			if (reader.nextWord2("Tel.")) return "NE";
			if (reader.prevTag1("NN") && reader.word === "abschotten") return "VVINF";
			if (reader.prevTag2("ADJD") && reader.prevTag1("NN")) return "VVINF";
			if (reader.nextWord2("Vertrauen")) return "VVINF";
			if (reader.word === "geben" && reader.nextTag1("$,") && reader.nextTag2("NN")) return "VVINF";
			if (reader.word === "aufstellen" && reader.nextTag1("KON") && reader.nextTag2("NN")) return "VVINF";
			if (reader.word === "befassen") return "VVINF";
			if (reader.nextWord2("Begriffe")) return "VVINF";
			if (reader.prevWord1("''") && reader.nextWord1(",")) return "VVINF";
			if (reader.prevWord2("auch")) return "VVINF";
			return "VVFIN";
		}
		if (reader.prevWord2("")) {
			if (reader.nextTag1("VAFIN")) return "VVINF";
			if (reader.nextTag1("VMFIN")) return "VVINF";
			if (reader.nextTag1("$.") && reader.nextTag2("")) return "VVINF";
			if (reader.nextTag1("VVFIN")) return "VVINF";
			if (reader.prevWord1("Zu")) return "VVINF";
			if (reader.prevTag2("") && reader.prevTag1("APPR")) {
				if (reader.prevWord1("Zu")) return "VVINF";
				return "NN";
			}
			if (reader.word === "sehen" && reader.nextWord1(",")) return "VVINF";
			if (reader.word === "beachten" && reader.nextTag1("")) return "VVINF";
			if (reader.prevWord1("''") && reader.nextWord1("''")) return "VVINF";
			if (reader.prevTag1("ADJD") && reader.nextTag1("")) return "VVINF";
			if (reader.nextWord1("des")) return "NN";
			return "VVFIN";
		}
		if (reader.nextTag1("PPER")) return "VVFIN";
		if (reader.nextTag1("ADV")) {
			if (reader.prevTag1("PTKZU") && reader.nextTag1("ADV")) return "VVINF";
			if (reader.prevWord1("weder")) return "VVINF";
			if (reader.prevTag2("NN") && reader.prevTag1("APPR")) return "NN";
			if (reader.prevTag2("CARD") && reader.prevTag1("ADJA")) return "NN";
			return "VVFIN";
		}
		if (reader.nextTag1("PRF")) return "VVFIN";
		if (reader.nextTag1("ART")) {
			if (reader.prevTag1("ART")) return "NN";
			if (reader.prevTag1("APPRART") && reader.nextTag1("ART")) return "NN";
			return "VVFIN";
		}
		if (reader.nextTag1("NN")) {
			if (reader.prevTag1("ART") && reader.nextTag1("NN")) return "ADJA";
			if (reader.prevTag2("ART") && reader.prevTag1("$(")) return "ADJA";
			if (reader.suffixL4("euen")) return "ADJA";
			return "VVFIN";
		}
		if (reader.nextTag1("APPR")) {
			if (reader.prevTag1("PTKZU")) return "VVINF";
			if (reader.prevTag2("VMFIN")) return "VVINF";
			if (reader.prevTag1("ADJD") && reader.nextTag1("APPR")) return "VVINF";
			if (reader.prevTag1("APPR") && reader.nextTag1("APPR")) return "NN";
			if (reader.prevWord1("mehr")) return "VVINF";
			if (reader.word === "geben" && reader.nextTag1("APPR") && reader.nextTag2("ART")) return "VVINF";
			if (reader.prevWord2("sich")) return "VVINF";
			if (reader.prevWord1("nicht")) return "VVINF";
			if (reader.nextWord2("ohne")) return "VVINF";
			if (reader.suffixL4("esen")) return "VVINF";
			if (reader.nextWord2("zuvor")) return "VVINF";
			if (reader.prevWord1("dem")) return "NN";
			return "VVFIN";
		}
		if (reader.nextTag1("PROAV")) return "VVFIN";
		if (reader.nextTag1("ADJD")) {
			if (reader.nextTag1("ADJD") && reader.nextTag2("VAFIN")) return "VVINF";
			return "VVFIN";
		}
		if (reader.prevWord2("Die")) return "VVFIN";
		if (reader.prevTag1("APPRART")) return "NN";
		if (reader.nextTag1("NE")) return "VVFIN";
		if (reader.nextWord1("nicht")) return "VVFIN";
		if (reader.prevTag2("APPR") && reader.prevTag1("ART")) {
			if (reader.nextWord2("was")) return "VVFIN";
			return "NN";
		}
		if (reader.prevTag2("NN") && reader.prevTag1("APPR")) {
			if (reader.suffixL3("hen")) return "VVINF";
			return "NN";
		}
		if (reader.prevTag1("NN") && reader.word === "erhalten") {
			if (reader.prevTag1("NN") && reader.nextTag1("VMFIN")) return "VVINF";
			if (reader.prevTag2("KON") && reader.prevTag1("NN") && reader.word === "erhalten") return "VVINF";
			if (reader.prevTag1("NN") && reader.word === "erhalten" && reader.nextTag1("VVFIN")) return "VVINF";
			return "VVPP";
		}
		if (reader.nextWord2("sind")) {
			if (reader.prevWord1("zu") && reader.nextWord1(",")) return "VVINF";
			return "VVFIN";
		}
		if (reader.word === "wissen" && reader.nextWord2("daß")) return "VVFIN";
		if (reader.word === "verlassen" && reader.nextTag1("VAFIN")) return "VVPP";
		if (reader.nextTag1("PIS")) return "VVFIN";
		if (reader.nextTag1("PIAT")) return "VVFIN";
		if (reader.nextTag1("ADJA")) return "VVFIN";
		if (reader.word === "beraten" && reader.nextTag1("VAINF")) return "VVPP";
		if (reader.prevTag2("NN") && reader.prevTag1("KON")) {
			if (reader.nextWord1(",")) return "VVFIN";
			return "NN";
		}
		if (reader.prevWord1("heute")) return "VVFIN";
		if (reader.nextTag1("CARD")) return "VVFIN";
		if (reader.word === "erhalten" && reader.nextWord1("werden")) return "VVPP";
		if (reader.word === "verhalten" && reader.nextTag1("VAFIN")) return "VVPP";
		if (reader.prevWord1("ein")) return "NN";
		if (reader.nextTag1("$,") && reader.nextTag2("VAINF")) {
			if (reader.prevTag2("NN")) return "VVINF";
			return "VVFIN";
		}
		if (reader.nextWord2("seien")) return "VVFIN";
		if (reader.nextTag1("PDS")) return "VVFIN";
		if (reader.prevTag1("NN") && reader.word === "kämpfen" && reader.nextTag1("$,")) return "VVFIN";
		if (reader.nextTag1("PDAT")) return "VVFIN";
		if (reader.word === "empfangen" && reader.nextWord1("worden") && reader.nextWord2(".")) return "VVPP";
		if (reader.prevTag1("CARD") && reader.word === "erhalten" && reader.nextTag1("$.")) return "VVPP";
		if (reader.word === "erhalten" && reader.nextTag1("VAFIN") && reader.nextTag2("$,")) return "VVPP";
		if (reader.prevTag1("ADJD") && reader.word === "beraten") return "VVPP";
		if (reader.word === "betragen" && reader.nextWord1("hatte")) return "VVPP";
		if (reader.prevTag1("NE") && reader.word === "erhalten") return "VVPP";
		if (reader.prevTag1("NN") && reader.word === "überlassen" && reader.nextTag1("$.")) return "VVPP";
		if (reader.prevTag1("APPR") && reader.nextTag1("VVPP")) return "NN";
		if (reader.prevWord1("in")) return "NE";
		if (reader.prevTag1("ADV") && reader.word === "verhalten") return "ADJD";
		if (reader.word === "zurückgehen" && reader.nextWord1(".") && reader.nextWord2("")) return "VVFIN";
		if (reader.word === "teilnehmen" && reader.nextTag1("$,") && reader.nextTag2("VVFIN")) return "VVFIN";
		if (reader.word === "stellen" && reader.nextWord2("und")) return "VVFIN";
		if (reader.prevWord2("gleichen")) return "VVFIN";
		if (reader.prevTag1("NN") && reader.word === "verbergen") return "VVFIN";
		if (reader.nextTag1("APPRART")) return "VVFIN";
		if (reader.prevTag1("NN") && reader.word === "denken") return "VVFIN";
		if (reader.word === "auftreten" && reader.nextWord1(".") && reader.nextWord2("")) return "VVFIN";
		if (reader.word === "hinweisen" && reader.nextTag1("$.")) return "VVFIN";
		if (reader.word === "angehören" && reader.nextTag1("$,")) return "VVFIN";
		if (reader.prevWord1("die") && reader.nextWord1(",")) return "VVFIN";
		if (reader.prevTag1("NN") && reader.word === "ausgehen" && reader.nextTag1("$.")) return "VVFIN";
		if (reader.prevTag1("NN") && reader.word === "konzentrieren" && reader.nextTag1("$,")) return "VVFIN";
		if (reader.prevTag2("PTKZU") && reader.prevTag1("VVFIN")) return "VVFIN";
		if (reader.prevTag1("NN") && reader.word === "halten" && reader.nextTag1("$,")) {
			if (reader.nextTag2("KON")) return "VVINF";
			if (reader.nextWord2("sonst")) return "VVINF";
			return "VVFIN";
		}
		if (reader.nextTag1("PTKVZ")) return "VVFIN";
		if (reader.prevTag1("$(") && reader.word === "verstehen") return "VVFIN";
		return "VVINF";
	}
	if (reader.tag === "FM") {
		if (reader.prevTag2("NE") && reader.prevTag1("NE")) {
			if (reader.word === "And" && reader.nextWord2("Road")) return "FM";
			if (reader.nextWord2("''")) return "FM";
			return "NE";
		}
		if (reader.prevTag1("NE") && reader.nextTag1("NE")) {
			if (reader.suffixL2("se")) return "FM";
			if (reader.nextTag2("FM")) return "FM";
			return "NE";
		}
		return "FM";
	}
	if (reader.tag === "PTKVZ") {
		if (reader.word === "ab" && reader.nextTag1("CARD")) {
			if (reader.nextWord2("SFr")) return "ADV";
			return "APPR";
		}
		if (reader.prevTag1("APPR")) {
			if (reader.suffixL2("st")) return "ADJD";
			return "ADV";
		}
		if (reader.nextTag1("ART")) {
			if (reader.word === "voran") return "ADV";
			return "APPR";
		}
		if (reader.nextTag1("NN")) return "APPR";
		if (reader.nextTag1("ADJA") && reader.nextTag2("NN")) {
			if (reader.suffixL3("nde")) return "PTKVZ";
			return "APPR";
		}
		if (reader.nextTag1("PTKZU")) return "ADV";
		if (reader.word === "hin" && reader.nextTag1("KON") && reader.nextTag2("ADV")) return "ADV";
		if (reader.word === "fest" && reader.nextWord2(",")) return "ADJD";
		if (reader.prevWord2("vor") && reader.word === "hin") return "ADV";
		if (reader.nextTag1("APPRART") && reader.nextTag2("NN")) {
			if (reader.word === "fest" && reader.nextTag1("APPRART") && reader.nextTag2("NN")) return "ADJD";
			return "ADV";
		}
		if (reader.nextTag1("NE")) return "APPR";
		if (reader.word === "fest" && reader.nextWord1("in")) return "ADJD";
		if (reader.word === "fest" && reader.nextTag1("VVPP")) return "ADJD";
		if (reader.prevWord1("im") && reader.word === "voraus") return "ADV";
		if (reader.word === "zurück" && reader.nextWord1("in")) return "ADV";
		if (reader.nextTag1("ADV")) return "APPR";
		if (reader.prevWord2("um")) return "APZR";
		if (reader.word === "heraus" && reader.nextTag1("VVPP")) return "APZR";
		return "PTKVZ";
	}
	if (reader.tag === "PRELS") {
		if (reader.nextWord1(",")) return "PDS";
		if (reader.word === "welches" && reader.nextTag1("NN")) return "PWAT";
		if (reader.prevTag2("NN") && reader.prevTag1("APPR")) return "PDS";
		if (reader.prevWord2("Vergleich") && reader.word === "denen") return "PDS";
		if (reader.prevTag2("ADV")) return "PDS";
		return "PRELS";
	}
	if (reader.tag === "PIS") {
		if (reader.word === "wenig" && reader.nextTag1("NN")) return "PIAT";
		if (reader.word === "etwas" && reader.nextTag1("ADJD")) {
			if (reader.nextWord1("falsch")) return "PIS";
			return "ADV";
		}
		if (reader.word === "anderes" && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "etwas" && reader.nextTag1("ADJA")) {
			if (reader.word === "etwas" && reader.nextTag1("ADJA") && reader.nextTag2("VVPP")) return "PIAT";
			if (reader.prevTag2("NN")) return "PIAT";
			if (reader.prevTag2("PPER")) return "PIAT";
			return "ADV";
		}
		if (reader.word === "etwas" && reader.nextTag1("NN")) {
			if (reader.prevTag1("ART") && reader.word === "etwas" && reader.nextTag1("NN")) return "ADV";
			if (reader.prevTag2("$,") && reader.prevTag1("ADV")) return "ADV";
			return "PIAT";
		}
		if (reader.word === "etwas" && reader.nextTag1("ADV")) {
			if (reader.nextWord1("ganz")) return "PIAT";
			return "ADV";
		}
		if (reader.word === "keiner" && reader.nextTag1("NN")) return "PIAT";
		if (reader.word === "wenig" && reader.nextTag1("ADJA")) return "ADV";
		if (reader.word === "bißchen" && reader.nextTag1("NN")) return "PIAT";
		if (reader.word === "alles" && reader.nextTag1("ADJA")) return "PIAT";
		if (reader.word === "Einer" && reader.nextTag1("NN")) return "ART";
		if (reader.word === "etwas" && reader.nextTag1("VVPP")) {
			if (reader.word === "etwas" && reader.nextTag1("VVPP") && reader.nextTag2("VAFIN")) return "PIS";
			return "ADV";
		}
		if (reader.prevWord1("so") && reader.word === "wenig") return "ADV";
		if (reader.word === "soviel" && reader.nextTag1("NN")) return "PIAT";
		if (reader.word === "etwas" && reader.nextTag1("PIAT")) return "ADV";
		if (reader.word === "wenig" && reader.nextTag1("ADJD")) {
			if (reader.prevWord1("ein")) return "PIS";
			return "ADV";
		}
		if (reader.word === "keiner" && reader.nextTag1("ADJA")) return "PIAT";
		if (reader.prevTag1("$,") && reader.word === "alles" && reader.nextTag1("NN")) return "PIAT";
		if (reader.word === "etwas" && reader.nextWord1("an")) return "ADV";
		if (reader.prevTag1("$(") && reader.word === "Eines" && reader.nextTag1("NN")) return "ART";
		if (reader.prevWord1("des")) return "NN";
		if (reader.prevTag1("APPR") && reader.nextTag1("PIS")) return "PIAT";
		if (reader.word === "wenigsten" && reader.nextTag1("NN")) return "PIAT";
		if (reader.prevTag1("ART") && reader.nextTag1("NE")) return "PIAT";
		if (reader.prevTag1("ADV") && reader.nextTag1("NN")) return "PIAT";
		if (reader.prevWord1("am")) return "ADJD";
		return "PIS";
	}
	if (reader.tag === "VMPP") return "VMPP";
	if (reader.tag === "PROAV") {
		if (reader.prevTag1("$,") && reader.word === "damit") {
			if (reader.prevTag1("$,") && reader.nextTag1("VAFIN")) return "PROAV";
			if (reader.nextWord2(",")) return "PROAV";
			return "KOUS";
		}
		if (reader.prevTag1("") && reader.word === "Damit" && reader.nextTag1("ART")) return "KOUS";
		if (reader.word === "dabei" && reader.nextTag1("$.")) return "PTKVZ";
		if (reader.prevTag2("APPR") && reader.prevTag1("NN") && reader.word === "daher") return "PTKVZ";
		if (reader.word === "davon" && reader.nextTag1("$.")) return "PTKVZ";
		return "PROAV";
	}
	if (reader.tag === "VVFIN") {
		if (reader.prevWord1("zu")) return "VVINF";
		if (reader.nextTag1("VMFIN")) {
			if (reader.nextTag2("ADV")) return "NN";
			return "VVINF";
		}
		if (reader.nextTag1("VAFIN")) {
			if (reader.suffixL2("en")) return "VVINF";
			if (reader.word === "bemüht" && reader.nextWord1("ist") && reader.nextWord2(",")) return "ADJD";
			return "VVPP";
		}
		if (reader.prevTag1("ART") && reader.nextTag1("NN")) {
			if (reader.suffixL2("bt")) return "VVFIN";
			return "ADJA";
		}
		if (reader.nextWord1("werden")) {
			if (reader.suffixL2("en")) return "VVINF";
			return "VVPP";
		}
		if (reader.prevTag1("VAFIN")) {
			if (reader.suffixL2("en")) return "VVINF";
			return "VVPP";
		}
		if (reader.word === "erwartet" && reader.nextWord2("")) return "VVPP";
		if (reader.word === "erklärt" && reader.nextTag1("$,")) return "VVPP";
		if (reader.word === "kommen" && reader.nextWord2("")) return "VVINF";
		if (reader.prevTag1("ADJD") && reader.nextTag1("NN")) {
			if (reader.nextTag1("NN") && reader.nextTag2("NE")) return "VVFIN";
			if (reader.suffixL3("gen")) return "VVFIN";
			if (reader.prevTag1("ADJD") && reader.word === "reagierten" && reader.nextTag1("NN")) return "VVFIN";
			return "ADJA";
		}
		if (reader.word === "erklärt" && reader.nextWord2("")) return "VVPP";
		if (reader.nextWord1("lassen")) return "VVINF";
		if (reader.nextTag1("NN") && reader.nextTag2("VVFIN")) return "ADJA";
		if (reader.nextTag1("PTKZU") && reader.nextTag2("VMFIN")) return "VVINF";
		if (reader.nextTag1("VAPP")) return "VVPP";
		if (reader.nextTag1("VVFIN")) {
			if (reader.prevTag1("APPRART") && reader.nextTag1("VVFIN")) return "NN";
			if (reader.suffixL4("")) return "VVFIN";
			if (reader.suffixL2("et")) return "VVPP";
			if (reader.suffixL2("te")) return "NN";
			return "VVINF";
		}
		if (reader.word === "meinen" && reader.nextTag1("NN")) return "PPOSAT";
		if (reader.word === "verlangt" && reader.nextWord2("")) return "VVPP";
		if (reader.nextTag1("NN") && reader.nextTag2("VAFIN")) return "ADJA";
		if (reader.word === "beschäftigt" && reader.nextTag1("$.") && reader.nextTag2("")) return "VVPP";
		if (reader.word === "verlangt" && reader.nextWord1(",")) {
			if (reader.prevTag2("ADJA")) return "VVFIN";
			return "VVPP";
		}
		if (reader.word === "berichtet" && reader.nextTag1("$,")) {
			if (reader.word === "berichtet" && reader.nextTag1("$,") && reader.nextTag2("VAFIN")) return "VVFIN";
			return "VVPP";
		}
		if (reader.word === "arbeiten" && reader.nextTag1("$.")) {
			if (reader.prevWord1("Männer") && reader.nextWord1(".")) return "VVFIN";
			return "VVINF";
		}
		if (reader.word === "legen" && reader.nextWord1(".")) return "VVINF";
		if (reader.word === "treten" && reader.nextWord1(".") && reader.nextWord2("")) return "VVINF";
		if (reader.prevTag1("APPR") && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "beziffert" && reader.nextWord1(".") && reader.nextWord2("")) return "VVPP";
		if (reader.prevTag2("VAFIN") && reader.prevTag1("NE")) return "VVPP";
		if (reader.prevTag2("VVFIN") && reader.prevTag1("ART")) return "NN";
		if (reader.prevTag1("APPRART")) {
			if (reader.nextTag1("NN")) return "ADJA";
			return "NN";
		}
		if (reader.word === "richten" && reader.nextWord1(".") && reader.nextWord2("")) return "VVINF";
		if (reader.prevTag2("VMFIN") && reader.prevTag1("PTKNEG")) return "VVINF";
		if (reader.word === "stehen" && reader.nextWord1(".") && reader.nextWord2("")) {
			if (reader.prevTag2("ADJA") && reader.prevTag1("NN")) return "VVFIN";
			if (reader.prevWord2("in")) return "VVFIN";
			if (reader.prevWord1("Kurs") && reader.nextWord1(".")) return "VVFIN";
			return "VVINF";
		}
		if (reader.prevTag1("VMFIN")) {
			if (reader.prevWord2("zu")) return "VVFIN";
			return "VVINF";
		}
		if (reader.prevTag2("NE") && reader.prevTag1("PTKNEG")) return "VVINF";
		if (reader.nextTag1("NN") && reader.nextTag2("VMFIN")) return "ADJA";
		if (reader.prevTag1("PPOSAT") && reader.nextTag1("NN")) return "ADJA";
		if (reader.word === "verlangte" && reader.nextTag1("NN")) return "ADJA";
		if (reader.nextTag1("NN") && reader.nextTag2("VVPP")) return "ADJA";
		if (reader.word === "verdient" && reader.nextWord1(".")) return "VVPP";
		if (reader.prevTag2("VAFIN") && reader.prevTag1("PPER")) {
			if (reader.suffixL2("en")) return "VVINF";
			return "VVPP";
		}
		if (reader.word === "befürchtet" && reader.nextWord2("")) return "VVPP";
		if (reader.prevWord1("wie") && reader.word === "erwartet") return "VVPP";
		if (reader.word === "erlaubt" && reader.nextTag1("$,")) return "VVPP";
		if (reader.prevTag2("NN") && reader.prevTag1("ART")) {
			if (reader.prevWord1("das")) return "VVFIN";
			return "NN";
		}
		if (reader.word === "streiten" && reader.nextTag1("$.")) return "VVINF";
		if (reader.word === "fühlen" && reader.nextTag1("$.")) return "VVINF";
		if (reader.word === "beschäftigen" && reader.nextWord1(".")) return "VVINF";
		if (reader.word === "zählen" && reader.nextWord1(".")) return "VVINF";
		if (reader.word === "laufen" && reader.nextTag1("$,")) return "VVINF";
		if (reader.word === "berichtet" && reader.nextWord1(".")) return "VVPP";
		if (reader.word === "beklagt" && reader.nextWord1(".")) return "VVPP";
		if (reader.word === "bereitet" && reader.nextTag1("$.")) return "VVPP";
		if (reader.prevWord1("Restaurants")) return "VVPP";
		if (reader.word === "erwartet" && reader.nextWord1("-")) return "VVPP";
		if (reader.prevWord1("als") && reader.word === "erwartet") return "VVPP";
		if (reader.nextTag1("PTKZU") && reader.nextTag2("VAFIN")) return "VVPP";
		if (reader.word === "formuliert" && reader.nextTag1("$(")) return "VVPP";
		if (reader.prevWord1("und") && reader.word === "schreibe") return "VVIMP";
		if (reader.word === "sage" && reader.nextTag1("KON")) return "VVIMP";
		if (reader.prevWord1("für")) return "NN";
		if (reader.word === "stammen" && reader.nextTag1("$.")) return "VVINF";
		if (reader.word === "hoffen" && reader.nextTag1("$.")) return "VVINF";
		if (reader.prevWord1("Mark") && reader.word === "belaufen" && reader.nextWord1(".")) return "VVINF";
		if (reader.word === "reichen" && reader.nextTag1("$.") && reader.nextTag2("")) return "VVINF";
		if (reader.word === "kommen" && reader.nextWord1(",")) {
			if (reader.prevWord1("Deutschland") && reader.nextWord1(",")) return "VVFIN";
			if (reader.prevTag2("APPRART") && reader.prevTag1("NN")) return "VVFIN";
			return "VVINF";
		}
		if (reader.word === "bergen" && reader.nextWord1(".") && reader.nextWord2("")) return "VVINF";
		if (reader.word === "wünschen" && reader.nextTag1("$.")) return "VVINF";
		if (reader.prevWord1("auch") && reader.nextWord1(",")) return "VVINF";
		if (reader.word === "behaupten" && reader.nextWord2("")) return "VVINF";
		if (reader.word === "spielen" && reader.nextTag1("$.") && reader.nextTag2("")) return "VVINF";
		if (reader.prevTag1("NN") && reader.word === "fühlen" && reader.nextTag1("$,")) return "VVINF";
		if (reader.nextWord2("lassen")) return "VVINF";
		if (reader.prevWord2("die") && reader.word === "fließen") return "VVINF";
		if (reader.prevTag2("VMFIN") && reader.prevTag1("PIS")) return "VVINF";
		if (reader.prevTag1("NN") && reader.word === "klagen" && reader.nextTag1("$.")) return "VVINF";
		if (reader.word === "ziehen" && reader.nextWord1(",")) return "VVINF";
		if (reader.prevTag2("ART") && reader.prevTag1("NN") && reader.word === "hängen") return "VVINF";
		if (reader.word === "verurteilte" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevTag1("NN") && reader.word === "beendete" && reader.nextTag1("NN")) return "ADJA";
		if (reader.prevTag2("VAFIN") && reader.prevTag1("ADV")) return "ADJD";
		return "VVFIN";
	}
	if (reader.tag === "TRUNC") return "TRUNC";
	if (reader.tag === "$.") {
		if (reader.prevWord2("(") && reader.prevWord1("Bild") && reader.word === ":") return "$(";
		return "$.";
	}
	if (reader.tag === "$,") return "$,";
	if (reader.tag === "PPOSAT") {
		if (reader.word === "ihr" && reader.nextTag1("ART")) return "PPER";
		if (reader.prevWord1("von") && reader.word === "ihr") return "PPER";
		if (reader.word === "ihr" && reader.nextTag1("VVFIN")) return "PPER";
		if (reader.word === "ihr" && reader.nextTag1("ADV")) return "PPER";
		if (reader.nextTag1("VAFIN")) return "PPER";
		if (reader.word === "ihr" && reader.nextTag1("APPR")) return "PPER";
		if (reader.prevWord2(",") && reader.word === "Ihr") return "PPER";
		if (reader.word === "Ihr" && reader.nextTag1("VVFIN")) return "PPER";
		if (reader.prevTag2("APPR") && reader.prevTag1("ART") && reader.word === "Seine") return "NE";
		if (reader.word === "ihr" && reader.nextWord1(",")) return "PPER";
		if (reader.nextTag1("PTKZU")) return "PPER";
		if (reader.word === "ihr" && reader.nextTag1("ADJD")) {
			if (reader.word === "ihr" && reader.nextTag1("ADJD") && reader.nextTag2("$.")) return "PPOSAT";
			return "PPER";
		}
		if (reader.word === "ihr" && reader.nextTag1("VVPP")) return "PPER";
		if (reader.prevTag2("") && reader.prevTag1("APPR") && reader.word === "ihr") return "PPER";
		if (reader.prevTag1("KON") && reader.word === "Sein") return "NN";
		if (reader.word === "Sein" && reader.nextTag1("KON") && reader.nextTag2("NN")) return "NN";
		if (reader.prevWord1("mit") && reader.word === "ihr") return "PPER";
		if (reader.prevWord1("bei") && reader.word === "ihr") return "PPER";
		if (reader.prevTag1("VVFIN") && reader.word === "Ihr") return "PPER";
		if (reader.prevWord1(",") && reader.nextWord1("Jünglinge")) return "PPER";
		return "PPOSAT";
	}
	if (reader.tag === "$(") return "$(";
	if (reader.tag === "KOUS") {
		if (reader.word === "bevor" && reader.nextWord2("")) return "PTKVZ";
		if (reader.nextWord1("des")) return "APPR";
		if (reader.prevWord1("") && reader.nextWord1("")) return "XY";
		if (reader.prevWord1("je")) return "PROAV";
		if (reader.nextWord1("seiner")) return "APPR";
		return "KOUS";
	}
	if (reader.tag === "PDS") {
		if (reader.prevTag1("$,") && reader.word === "dessen") return "PRELAT";
		if (reader.prevTag2("$,") && reader.prevTag1("APPR") && reader.word === "dessen") {
			if (reader.prevWord2(",") && reader.prevWord1("statt") && reader.word === "dessen") return "PDS";
			return "PRELAT";
		}
		if (reader.prevTag2("$,") && reader.prevTag1("PTKZU") && reader.word === "dessen") return "PRELAT";
		return "PDS";
	}
	if (reader.tag === "VVPP") {
		if (reader.nextTag1("ART")) {
			if (reader.suffixL4("sagt")) return "VVPP";
			if (reader.prevTag1("PTKZU") && reader.word === "vergessen" && reader.nextTag1("ART")) return "VVINF";
			if (reader.prevTag1("VAFIN")) return "VVPP";
			if (reader.nextWord1("des")) return "NN";
			if (reader.prevWord1("das") && reader.nextWord1("der")) return "NN";
			return "VVFIN";
		}
		if (reader.nextTag1("PRF")) return "VVFIN";
		if (reader.nextTag1("NN")) {
			if (reader.prevTag1("ART") && reader.nextTag1("NN")) return "ADJA";
			if (reader.suffixL4("chen")) return "ADJD";
			if (reader.prevTag1("ADJD") && reader.nextTag1("NN")) return "VVPP";
			if (reader.prevWord2("die")) return "ADJD";
			if (reader.suffixL4("eden")) return "ADJD";
			if (reader.nextWord1("Jahre")) return "CARD";
			return "VVFIN";
		}
		if (reader.nextTag1("PPER")) return "VVFIN";
		if (reader.nextTag1("NE")) {
			if (reader.prevTag1("ADJA") && reader.nextTag1("NE")) return "NN";
			if (reader.word === "genannt" && reader.nextTag1("NE")) return "VVPP";
			if (reader.prevWord1("Polizeichef")) return "NE";
			return "VVFIN";
		}
		if (reader.nextTag1("ADV")) {
			if (reader.prevWord1("weder")) return "VVPP";
			if (reader.prevWord2("-")) return "VVPP";
			if (reader.prevTag1("ADJD") && reader.word === "gefördert") return "VVPP";
			if (reader.nextWord1("erst")) return "VVPP";
			if (reader.nextTag2("VAFIN")) return "ADJD";
			if (reader.prevTag1("PPOSAT")) return "NN";
			return "VVFIN";
		}
		if (reader.prevWord1("zu")) return "VVINF";
		if (reader.prevTag2("") && reader.prevTag1("NE")) {
			if (reader.nextTag1("") && reader.nextTag2("")) return "VVPP";
			if (reader.prevWord1("Stark")) return "VVPP";
			return "VVFIN";
		}
		if (reader.nextTag1("ADJD")) {
			if (reader.prevTag2("CARD")) return "VVPP";
			if (reader.prevWord2("in")) return "NN";
			if (reader.nextTag2("$.")) return "ADJD";
			return "VVFIN";
		}
		if (reader.prevTag2("APPR") && reader.prevTag1("ART")) return "NN";
		if (reader.nextWord1("man")) return "VVFIN";
		if (reader.nextTag1("PPOSAT")) return "VVFIN";
		if (reader.nextTag1("VMFIN")) {
			if (reader.suffixL2("lt")) return "VVPP";
			return "VVINF";
		}
		if (reader.nextTag1("ADJA")) {
			if (reader.prevTag1("ART")) return "ADJD";
			if (reader.suffixL2("nt")) {
				if (reader.word === "getrennt" && reader.nextTag1("ADJA")) return "ADJD";
				return "VVPP";
			}
			if (reader.prevTag2("APPR") && reader.prevTag1("ADV")) return "ADJD";
			return "VVFIN";
		}
		if (reader.prevWord1("für")) return "ADJD";
		if (reader.prevTag2("") && reader.prevTag1("PPER")) return "VVFIN";
		if (reader.prevWord2("Der")) return "VVFIN";
		if (reader.prevTag2("ADJD") && reader.prevTag1("KON")) {
			if (reader.nextWord2("den")) return "VVPP";
			return "ADJD";
		}
		if (reader.prevWord2("Die")) return "VVFIN";
		if (reader.prevTag1("NE") && reader.nextTag1("APPR")) return "VVFIN";
		if (reader.nextWord1("dies")) return "VVFIN";
		if (reader.word === "gefallen" && reader.nextWord1("lassen")) return "VVINF";
		if (reader.prevTag1("") && reader.nextTag1("VVFIN")) return "ADJD";
		if (reader.prevTag1("NN") && reader.nextTag1("APPRART")) return "VVFIN";
		if (reader.prevTag2("NN") && reader.prevTag1("ART")) return "NN";
		if (reader.prevTag1("ADV") && reader.word === "geschickt") return "ADJD";
		if (reader.prevWord1("als") && reader.nextWord1("an")) return "ADJD";
		if (reader.prevWord2("Wer")) return "VVFIN";
		if (reader.suffixL4("")) return "VVFIN";
		if (reader.nextTag1("VVPP")) {
			if (reader.suffixL4("htet")) return "VVPP";
			if (reader.suffixL4("tert")) return "VVPP";
			if (reader.word === "geplant" && reader.nextWord2("worden")) return "VVPP";
			if (reader.suffixL4("hont")) return "VVPP";
			if (reader.suffixL4("iert")) return "VVPP";
			if (reader.prevTag2("$(")) return "VVPP";
			return "ADJD";
		}
		if (reader.word === "betreut" && reader.nextTag1("$,")) return "VVFIN";
		if (reader.nextTag1("CARD") && reader.nextTag2("NN")) return "VVFIN";
		if (reader.nextTag1("PDAT") && reader.nextTag2("NN")) return "VVFIN";
		if (reader.word === "übertragen" && reader.nextWord1(".")) return "VVINF";
		if (reader.prevTag1("APPRART")) return "NN";
		if (reader.prevWord1("in")) {
			if (reader.suffixL3("ben")) return "NN";
			return "NE";
		}
		if (reader.prevWord1("nicht") && reader.word === "gewachsen") return "ADJD";
		if (reader.prevTag1("PROAV") && reader.word === "bedacht") return "ADJD";
		if (reader.prevWord1("militärisch")) return "ADJD";
		if (reader.prevWord1("zutiefst")) return "ADJD";
		if (reader.word === "geschickt" && reader.nextWord1("in")) return "ADJD";
		if (reader.prevTag2("APPR") && reader.prevTag1("$(")) return "ADJD";
		if (reader.nextTag1("PTKVZ")) return "ADJD";
		if (reader.prevTag2("ART") && reader.prevTag1("NN") && reader.word === "entlastet") return "VVFIN";
		if (reader.word === "diskutiert" && reader.nextWord1("über")) return "VVFIN";
		if (reader.word === "entstanden" && reader.nextTag1("APPR")) return "VVFIN";
		if (reader.word === "vermittelt" && reader.nextTag1("$.")) return "VVFIN";
		if (reader.nextTag1("PIAT")) return "VVFIN";
		if (reader.nextTag1("VAINF") && reader.nextTag2("NN")) {
			if (reader.nextWord1("werden")) return "VVPP";
			return "VVFIN";
		}
		if (reader.prevTag1("NN") && reader.nextTag1("PTKNEG")) return "VVFIN";
		if (reader.prevTag2("") && reader.prevTag1("PDAT")) return "VVFIN";
		if (reader.prevWord1("selbst") && reader.nextWord1(",")) return "VVFIN";
		return "VVPP";
	}
	if (reader.tag === "XY") {
		if (reader.prevTag2("NE") && reader.prevTag1("KON") && reader.word === "S") return "NE";
		if (reader.nextTag1("FM")) return "FM";
		return "XY";
	}
	if (reader.tag === "PRELAT") {
		if (reader.prevTag1("APPR")) {
			if (reader.word === "deren" && reader.nextWord2("die")) return "PRELAT";
			if (reader.nextTag1("NN") && reader.nextTag2("PRF")) return "PRELAT";
			if (reader.prevWord2(",") && reader.prevWord1("an") && reader.word === "deren") return "PRELAT";
			if (reader.prevWord2(",") && reader.prevWord1("mit") && reader.word === "deren") return "PRELAT";
			if (reader.prevWord2(",") && reader.prevWord1("aus") && reader.word === "deren") return "PRELAT";
			if (reader.prevWord2(",") && reader.prevWord1("über") && reader.word === "deren") return "PRELAT";
			if (reader.prevWord2(",") && reader.prevWord1("durch") && reader.word === "deren") return "PRELAT";
			return "PDS";
		}
		if (reader.prevTag1("KON") && reader.word === "deren") {
			if (reader.prevTag2("VVPP")) return "PRELAT";
			if (reader.word === "deren" && reader.nextTag1("NN") && reader.nextTag2("ADJD")) return "PRELAT";
			return "PDS";
		}
		if (reader.prevTag1("ADV")) return "PDS";
		if (reader.prevWord2(",")) {
			if (reader.nextTag2("ADJA")) return "PRELAT";
			return "PDS";
		}
		if (reader.prevTag1("NN")) return "PDS";
		if (reader.prevTag1("ADJD") && reader.word === "deren") return "PDS";
		if (reader.prevTag1("VVFIN") && reader.word === "deren") return "PDS";
		return "PRELAT";
	}
	if (reader.tag === "PTKANT") {
		if (reader.prevTag1("ART")) return "NN";
		if (reader.prevTag2("ART")) return "NN";
		if (reader.prevTag1("APPR") && reader.nextTag1("$.")) return "NN";
		if (reader.nextTag1("APPRART")) return "NN";
		return "PTKANT";
	}
	if (reader.tag === "PTKZU") {
		if (reader.nextTag1("ART")) return "APPR";
		if (reader.nextTag1("NN")) {
			if (reader.prevTag2("KON") && reader.prevTag1("ADJD")) return "PTKZU";
			if (reader.prevTag2("PDAT") && reader.prevTag1("NN") && reader.word === "zu") return "PTKZU";
			return "APPR";
		}
		if (reader.nextTag2("NN")) {
			if (reader.prevTag2("APPR") && reader.prevTag1("APPR") && reader.word === "zu") return "ADV";
			if (reader.word === "zu" && reader.nextWord1("viele")) return "PTKA";
			if (reader.nextWord1("wenig")) return "PTKA";
			if (reader.nextWord1("hohe")) return "PTKA";
			if (reader.nextWord1("20")) return "ADV";
			if (reader.prevTag2("NE") && reader.prevTag1("APPR")) return "ADV";
			if (reader.prevWord1("bis") && reader.word === "zu" && reader.nextWord1("zwei")) return "ADV";
			if (reader.prevTag2("NN") && reader.prevTag1("ART")) {
				if (reader.word === "zu" && reader.nextWord1("hohen")) return "PTKA";
				return "PTKZU";
			}
			if (reader.word === "zu" && reader.nextWord1("hohen") && reader.nextWord2("Defiziten")) return "PTKA";
			if (reader.prevWord1("viel") && reader.word === "zu") return "PTKA";
			if (reader.prevTag2("ADJD") && reader.prevTag1("APPR")) return "ADV";
			if (reader.nextWord2("Meter")) return "ADV";
			if (reader.word === "zu" && reader.nextWord2("Milliarden")) return "ADV";
			if (reader.prevWord1("schwer") && reader.word === "zu") return "PTKZU";
			if (reader.word === "zu" && reader.nextWord1("viel")) return "PTKA";
			if (reader.word === "zu" && reader.nextWord1("niedrigen")) return "PTKA";
			if (reader.word === "zu" && reader.nextWord1("geringe")) return "PTKA";
			if (reader.prevWord1("einer") && reader.nextWord1("hohen")) return "PTKA";
			if (reader.prevWord1("mit") && reader.word === "zu") return "PTKA";
			if (reader.prevTag2("ART") && reader.prevTag1("$(")) return "PTKA";
			if (reader.nextWord1("starke")) return "PTKA";
			if (reader.prevWord1("bis") && reader.word === "zu" && reader.nextWord1("vier")) return "ADV";
			if (reader.nextWord2("Jahre")) return "ADV";
			if (reader.word === "zu" && reader.nextWord1("6000") && reader.nextWord2("Menschen")) return "ADV";
			if (reader.prevWord2("''") && reader.prevWord1("bis") && reader.word === "zu") return "ADV";
			if (reader.prevWord1("bis") && reader.word === "zu" && reader.nextWord1("80")) return "ADV";
			if (reader.prevWord2("Betriebszugehörigkeit") && reader.word === "zu") return "ADV";
			if (reader.prevWord1("bis") && reader.nextWord1("90")) return "ADV";
			if (reader.nextWord2("Probleme")) return "PTKZU";
			if (reader.prevTag2("ART") && reader.prevTag1("PTKNEG") && reader.word === "zu") return "PTKZU";
			if (reader.prevTag1("CARD") && reader.word === "zu" && reader.nextTag1("ADJA")) return "PTKZU";
			if (reader.prevWord2("''") && reader.prevWord1("noch") && reader.word === "zu") return "PTKZU";
			if (reader.prevTag2("ADJD")) {
				if (reader.nextTag1("CARD")) return "ADV";
				return "PTKZU";
			}
			if (reader.prevTag2("ART") && reader.prevTag1("ADJD") && reader.word === "zu") return "PTKZU";
			if (reader.nextWord1("verantwortende")) return "PTKZU";
			if (reader.word === "zu" && reader.nextWord1("erwartenden")) return "PTKZU";
			return "APPR";
		}
		if (reader.word === "zu" && reader.nextTag1("ADJD")) {
			if (reader.nextWord1("eigen")) return "APPR";
			if (reader.nextWord1("deutsch")) return "APPR";
			if (reader.word === "zu" && reader.nextWord1("enthalten")) return "PTKZU";
			if (reader.word === "zu" && reader.nextWord1("viert")) return "APPR";
			return "PTKA";
		}
		if (reader.nextWord2("")) {
			if (reader.nextTag1("NE") && reader.nextTag2("")) return "APPR";
			if (reader.nextTag1("VVINF")) return "PTKZU";
			if (reader.nextTag1("VVFIN") && reader.nextTag2("")) return "PTKZU";
			if (reader.nextTag1("VAFIN") && reader.nextTag2("")) return "PTKZU";
			return "PTKVZ";
		}
		if (reader.word === "zu" && reader.nextTag1("NE")) return "APPR";
		if (reader.nextWord1(",")) return "PTKVZ";
		if (reader.nextTag2("ADJA")) {
			if (reader.prevTag1("APPR") && reader.nextTag1("CARD")) return "ADV";
			if (reader.prevTag1("ADJD") && reader.nextTag1("ADJA")) return "PTKZU";
			return "APPR";
		}
		if (reader.word === "zu" && reader.nextTag1("CARD")) {
			if (reader.prevTag1("APPR") && reader.word === "zu" && reader.nextTag1("CARD")) return "ADV";
			return "APPR";
		}
		if (reader.nextTag1("ADV")) {
			if (reader.word === "zu" && reader.nextWord1("sehr")) return "PTKA";
			if (reader.word === "zu" && reader.nextWord1("viel")) return "PTKA";
			if (reader.word === "zu" && reader.nextWord1("lange")) return "PTKA";
			if (reader.prevTag2("ADV") && reader.prevTag1("APPR") && reader.word === "zu") return "ADV";
			if (reader.prevTag2("")) return "PTKA";
			return "APPR";
		}
		if (reader.nextTag1("PIS")) {
			if (reader.word === "zu" && reader.nextWord1("allem")) return "APPR";
			return "PTKA";
		}
		if (reader.nextTag1("PPER")) return "APPR";
		if (reader.word === "zu" && reader.nextWord1("denen")) return "APPR";
		if (reader.nextTag1("PPOSAT")) return "APPR";
		if (reader.nextTag1("$.")) return "PTKVZ";
		if (reader.word === "zu" && reader.nextTag1("TRUNC")) return "APPR";
		if (reader.nextWord1("sich")) return "APPR";
		if (reader.word === "zu" && reader.nextWord1("und")) return "PTKVZ";
		if (reader.word === "zu" && reader.nextTag1("APPR")) return "PTKVZ";
		if (reader.word === "zu" && reader.nextTag1("PDAT")) return "APPR";
		if (reader.nextTag1("KOKOM")) return "PTKVZ";
		if (reader.nextTag2("TRUNC")) return "APPR";
		return "PTKZU";
	}
	if (reader.tag === "CARD") {
		if (reader.suffixL3("gen")) {
			if (reader.nextTag1("APPR")) return "NN";
			if (reader.nextTag1("ART") && reader.nextTag2("NN")) return "NN";
			if (reader.nextTag1("APPRART")) return "NN";
			return "ADJA";
		}
		if (reader.suffixL3("ige")) {
			if (reader.nextTag1("VAFIN")) return "NN";
			return "ADJA";
		}
		if (reader.suffixL3("ger")) {
			if (reader.prevTag2("VVFIN") && reader.prevTag1("ART")) return "NN";
			return "ADJA";
		}
		if (reader.suffixL3("mal")) return "ADV";
		if (reader.suffixL3("ten")) return "NN";
		if (reader.suffixL3("ung")) return "NN";
		if (reader.suffixL2("ke")) return "NN";
		if (reader.suffixL3("nen")) return "NN";
		if (reader.suffixL4("iges")) return "ADJA";
		if (reader.suffixL2("ge")) return "NN";
		if (reader.suffixL3("ern")) return "NN";
		if (reader.suffixL2("te")) return "NN";
		if (reader.suffixL2("de")) return "NN";
		if (reader.prevWord1("außer")) return "NN";
		if (reader.suffixL3("der")) return "NN";
		if (reader.suffixL2("ik")) return "NN";
		if (reader.suffixL2("ie")) return "NN";
		if (reader.prevTag1("PPOSAT") && reader.nextTag1("APPRART")) return "NN";
		if (reader.suffixL3("elb")) return "ADJD";
		if (reader.suffixL4("hrig")) return "ADJD";
		return "CARD";
	}
	if (reader.tag === "KOUI") {
		if (reader.nextTag1("CARD")) return "APPR";
		if (reader.nextTag2("CARD")) return "APPR";
		return "KOUI";
	}
	if (reader.tag === "VVIMP") {
		if (reader.nextTag1("PIS")) return "VVFIN";
		return "VVIMP";
	}
	if (reader.tag === "ART") {
		if (reader.prevWord1(",") && reader.word === "die") {
			if (reader.prevTag2("PROAV") && reader.prevTag1("$,")) return "ART";
			if (reader.word === "die" && reader.nextTag1("NN") && reader.nextTag2("ADJD")) return "ART";
			if (reader.nextWord2("sei")) return "ART";
			if (reader.prevWord2("sagte") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.word === "die" && reader.nextTag1("NN") && reader.nextTag2("VVIZU")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("SPD")) return "ART";
			if (reader.word === "die" && reader.nextWord2("werde")) return "ART";
			if (reader.nextTag1("NN") && reader.nextTag2("$.")) return "ART";
			if (reader.nextTag1("NN") && reader.nextTag2("$(")) return "ART";
			if (reader.nextWord2("hätten")) return "ART";
			if (reader.word === "die" && reader.nextWord2("eines")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("beiden")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("meisten")) return "ART";
			if (reader.prevWord2("sei") && reader.word === "die") return "ART";
			if (reader.word === "die" && reader.nextWord1("geplante")) return "ART";
			if (reader.prevWord2("versucht") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.word === "die" && reader.nextTag1("$(") && reader.nextTag2("NE")) return "ART";
			if (reader.nextWord1("USA")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Zahl")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("IG")) return "ART";
			if (reader.nextTag1("ADJA") && reader.nextTag2("APPR")) return "ART";
			if (reader.word === "die" && reader.nextWord2("müßten")) return "ART";
			if (reader.nextWord1("PDS")) return "ART";
			if (reader.word === "die" && reader.nextWord2("habe")) return "ART";
			if (reader.word === "die" && reader.nextTag1("NN") && reader.nextTag2("VAINF")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Rückkehr")) return "ART";
			if (reader.word === "die" && reader.nextWord1("deutsche")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Mittel")) return "ART";
			if (reader.prevWord2("gelungen")) return "ART";
			if (reader.prevWord2("erklärt") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.nextWord1("Tiere")) return "ART";
			if (reader.nextTag1("NN") && reader.nextTag2("PTKNEG")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Geschichte")) return "ART";
			if (reader.prevWord2("betonte")) return "ART";
			if (reader.prevWord2("forderte") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.prevWord2("erklärte") && reader.word === "die") return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Bundesregierung")) return "ART";
			if (reader.word === "die" && reader.nextWord1("eigene")) return "ART";
			if (reader.nextWord2("müssen")) return "ART";
			if (reader.prevWord2("Versuch")) return "ART";
			if (reader.prevTag2("PTKANT") && reader.prevTag1("$,")) return "ART";
			if (reader.prevTag1("$,") && reader.nextTag1("VAFIN")) return "PDS";
			if (reader.word === "die" && reader.nextWord1("Gewalt")) return "ART";
			if (reader.nextWord1("Tochter")) return "ART";
			if (reader.prevWord2("Anlaß") && reader.word === "die") return "ART";
			if (reader.nextWord1("Niederlande")) return "ART";
			if (reader.word === "die" && reader.nextTag1("ADJA") && reader.nextTag2("TRUNC")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Arbeitslosigkeit")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("wirtschaftliche")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("politische")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Deutsche")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Tür")) return "ART";
			if (reader.prevWord2("berichtet") && reader.word === "die") return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Rechte")) return "ART";
			if (reader.prevWord2("gefordert")) return "ART";
			if (reader.prevWord2("Pläne")) return "ART";
			if (reader.prevWord2("würden")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("kleinen")) return "ART";
			if (reader.nextWord1("alten")) return "ART";
			if (reader.nextWord1("Anlage")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("neuen")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Hälfte")) return "ART";
			if (reader.nextTag1("ADJA") && reader.nextTag2("VMFIN")) return "ART";
			if (reader.prevWord2("hören")) return "ART";
			if (reader.nextWord2("Seite")) return "ART";
			if (reader.word === "die" && reader.nextTag1("ADJA") && reader.nextTag2("$(")) return "ART";
			if (reader.nextWord1("DB")) return "ART";
			if (reader.prevWord2("Parlament")) return "ART";
			if (reader.prevWord2("Ziel")) return "ART";
			if (reader.prevWord2("beitragen") && reader.word === "die") return "ART";
			if (reader.prevWord2("gedroht") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.nextWord2("könnten")) return "ART";
			if (reader.prevWord2("aufgefordert")) return "ART";
			if (reader.nextWord2("solle")) return "ART";
			if (reader.nextWord1("Gruppe")) return "ART";
			if (reader.word === "die" && reader.nextTag1("ADJA") && reader.nextTag2("CARD")) return "ART";
			if (reader.prevWord2("geeinigt") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.nextWord2("würden")) return "ART";
			if (reader.word === "die" && reader.nextWord1("von") && reader.nextWord2("ihm")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Haltung")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Abgeordneten")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Bedeutung")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Beteiligung")) return "ART";
			if (reader.nextWord1("Banque")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("künftige")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("ökologischen")) return "ART";
			if (reader.nextWord1("Kinder")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Ausgaben")) return "ART";
			if (reader.prevWord2("Gegenteil") && reader.word === "die") return "ART";
			if (reader.word === "die" && reader.nextWord1("Berliner") && reader.nextWord2("Senatorin")) return "ART";
			if (reader.prevWord2("Leben")) return "ART";
			if (reader.word === "die" && reader.nextWord1("''") && reader.nextWord2("Büchse")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Marktkräfte")) return "ART";
			if (reader.prevWord2("Teil") && reader.word === "die") return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Streitigkeiten")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Entwicklung")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Menschen")) return "ART";
			if (reader.nextWord1("Grünen")) return "ART";
			if (reader.nextWord1("großen")) return "ART";
			if (reader.nextWord2("Versorgung")) return "ART";
			if (reader.nextWord2("seines")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Parteiarbeit")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Allianz")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("zweite")) return "ART";
			if (reader.word === "die" && reader.nextWord2("kurdische")) return "ART";
			if (reader.prevWord2("wir") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.word === "die" && reader.nextWord1("Vision") && reader.nextWord2("des")) return "ART";
			if (reader.nextWord2("Opposition")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Telekommunikation")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Steuer-") && reader.nextWord2("und")) return "ART";
			if (reader.nextWord1("Tat")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Verantwortung")) return "ART";
			if (reader.prevWord2("außerstande") && reader.word === "die") return "ART";
			if (reader.prevWord2("weigerte")) return "ART";
			if (reader.word === "die" && reader.nextWord2("Kontrolle")) return "ART";
			if (reader.nextWord2("Kräfte")) return "ART";
			if (reader.word === "die" && reader.nextWord1("radikale")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("übrigen")) return "ART";
			if (reader.word === "die" && reader.nextWord1("männlichen")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("soziale")) return "ART";
			if (reader.prevWord2("verpflichtet") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.nextWord1("nächste")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Kuratoren")) return "ART";
			if (reader.nextWord1("Mehrheit")) return "ART";
			if (reader.prevWord2("das") && reader.word === "die") return "ART";
			if (reader.prevWord2("Guattari") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.nextWord1("Schmerzen")) return "ART";
			if (reader.word === "die" && reader.nextWord1("deutschen")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Bundesrepublik")) return "ART";
			if (reader.prevWord2("Nun")) return "ART";
			if (reader.word === "die" && reader.nextWord2("unserer")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("sechs")) return "ART";
			if (reader.prevWord2("Bestreben") && reader.word === "die") return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("eingeleiteten")) return "ART";
			if (reader.nextWord1("Feuerwehr")) return "ART";
			if (reader.word === "die" && reader.nextWord2("sowie")) return "ART";
			if (reader.prevWord2("schwer") && reader.word === "die") return "ART";
			if (reader.word === "die" && reader.nextWord1("Diskussion")) return "ART";
			if (reader.prevWord2("auch") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.prevWord2("verstanden") && reader.word === "die") return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Prüfung")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Welt")) return "ART";
			if (reader.prevWord2("gelingt")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("EU")) return "ART";
			if (reader.nextWord1("Zulassung")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Verwendung")) return "ART";
			if (reader.prevWord2("bekräftigte")) return "ART";
			if (reader.prevWord2("verschoben") && reader.word === "die") return "ART";
			if (reader.prevWord2("Demokratie") && reader.prevWord1(",") && reader.word === "die") return "ART";
			if (reader.nextWord2("wird")) return "ART";
			if (reader.word === "die" && reader.nextTag1("ADJA") && reader.nextTag2("NE")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Krise")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Harmonie")) return "ART";
			if (reader.nextWord1("Vorwürfe")) return "ART";
			if (reader.word === "die" && reader.nextWord1("alte")) return "ART";
			if (reader.nextWord1("langen")) return "ART";
			if (reader.word === "die" && reader.nextWord1("sanitären") && reader.nextWord2("Verhältnisse")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("zunehmende")) return "ART";
			if (reader.nextWord1("Verbindung")) return "ART";
			if (reader.prevWord2("appelliert") && reader.word === "die") return "ART";
			if (reader.nextWord1("richtige")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("chinesische")) return "ART";
			if (reader.prevWord2("feiert")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("israelischen")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Wahlbeteiligung")) return "ART";
			if (reader.nextWord1("erste")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Solidarität")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("Urteile")) return "ART";
			if (reader.prevWord2("planen") && reader.word === "die") return "ART";
			if (reader.nextWord1("Einheit")) return "ART";
			if (reader.nextWord2("sollten")) return "ART";
			if (reader.nextWord2("wolle")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Haare")) return "ART";
			if (reader.nextWord1("Ergebnisse")) return "ART";
			if (reader.nextWord1("notwendige")) return "ART";
			if (reader.word === "die" && reader.nextWord1("Aufmerksamkeit")) return "ART";
			if (reader.prevWord2("angekündigt")) return "ART";
			if (reader.prevWord1(",") && reader.word === "die" && reader.nextWord1("Stadt")) return "ART";
			if (reader.prevWord2("sieht") && reader.word === "die") return "ART";
			if (reader.word === "die" && reader.nextWord1("Frage") && reader.nextWord2("nach")) return "ART";
			if (reader.nextWord2("trage")) return "ART";
			if (reader.nextWord1("letzte")) return "ART";
			if (reader.nextWord2("wurde")) return "ART";
			return "PRELS";
		}
		if (reader.nextTag1("ART")) {
			if (reader.suffixL3("ner")) return "PIS";
			if (reader.suffixL3("ine")) {
				if (reader.word === "eine" && reader.nextWord1("die") && reader.nextWord2("Öffentlichkeit")) return "ART";
				if (reader.nextWord1("dem")) return "ART";
				return "PIS";
			}
			if (reader.suffixL3("nes")) return "PIS";
			if (reader.suffixL4("inem")) return "PIS";
			if (reader.nextTag1("ART") && reader.nextTag2("KON")) return "ART";
			if (reader.nextWord1("des")) {
				if (reader.suffixL4("inem")) return "PIS";
				return "PDS";
			}
			if (reader.suffixL3("nen")) return "PIS";
			if (reader.prevTag2("NN") && reader.prevTag1("APPR")) {
				if (reader.suffixL4("inem")) return "PIS";
				if (reader.suffixL4("inen")) return "PIS";
				if (reader.prevTag1("APPR") && reader.word === "einer" && reader.nextTag1("ART")) return "PIS";
				if (reader.word === "eine") return "PIS";
				if (reader.prevWord1("mit")) return "PDS";
				return "ART";
			}
			if (reader.prevWord2("") && reader.word === "Die") return "ART";
			if (reader.prevTag1("VAFIN")) {
				if (reader.nextWord1("der")) return "PIS";
				if (reader.prevWord1("ist") && reader.nextWord1("eine")) return "ART";
				return "PDS";
			}
			if (reader.prevTag1("NN") && reader.nextTag1("ART")) {
				if (reader.nextTag1("ART") && reader.nextTag2("ADJA")) return "PIS";
				if (reader.nextTag2("CARD")) return "PIS";
				return "ART";
			}
			if (reader.prevTag1("ADV") && reader.nextTag1("ART")) {
				if (reader.word === "einer" && reader.nextTag1("ART")) return "PIS";
				if (reader.word === "eine") return "PIS";
				if (reader.word === "eines" && reader.nextTag1("ART")) return "PIS";
				if (reader.suffixL3("nem")) return "PIS";
				if (reader.nextWord1("eine")) return "ART";
				return "PDS";
			}
			if (reader.prevTag2("") && reader.prevTag1("APPR")) {
				if (reader.nextWord1("der")) return "PIS";
				return "ART";
			}
			if (reader.prevWord1("wie")) return "PDS";
			if (reader.word === "Der" && reader.nextWord1("eine")) return "ART";
			if (reader.prevTag1("VVFIN") && reader.nextTag1("ART")) {
				if (reader.nextWord1("der")) return "PIS";
				return "PDS";
			}
			if (reader.prevTag1("VMFIN") && reader.nextTag1("ART")) {
				if (reader.suffixL3("ner")) return "PIS";
				return "PDS";
			}
			if (reader.word === "ein") return "ART";
			if (reader.prevTag1("KOUS") && reader.nextTag1("ART")) {
				if (reader.nextWord1("der")) return "PIS";
				return "PDS";
			}
			if (reader.nextWord1("eines")) return "PDS";
			if (reader.nextWord1("Den")) return "ART";
			if (reader.prevTag2("NN") && reader.prevTag1("KON")) {
				if (reader.prevWord1("und") && reader.nextWord1("der")) return "PIS";
				if (reader.prevTag1("KON") && reader.word === "die" && reader.nextTag1("ART")) return "PDS";
				return "ART";
			}
			if (reader.prevTag2("ADV") && reader.prevTag1("APPR") && reader.word === "den") return "ART";
			if (reader.prevTag1("ADJD") && reader.nextTag1("ART")) return "ART";
			if (reader.prevTag2("ADJD") && reader.prevTag1("APPR")) return "PDS";
			return "PRELS";
		}
		if (reader.nextTag1("VAFIN")) {
			if (reader.suffixL4("inen")) return "PIS";
			if (reader.word === "einer") return "PIS";
			if (reader.word === "eine") return "PIS";
			return "PDS";
		}
		if (reader.prevTag1("$,") && reader.nextTag1("APPR")) {
			if (reader.prevTag1("$,") && reader.word === "ein" && reader.nextTag1("APPR")) return "ART";
			if (reader.word === "eine") return "ART";
			if (reader.prevTag2("PROAV")) return "ART";
			if (reader.suffixL4("inem")) return "ART";
			if (reader.word === "den" && reader.nextWord1("nach")) return "ART";
			if (reader.word === "den" && reader.nextTag1("APPR") && reader.nextTag2("ART")) return "ART";
			if (reader.prevTag2("NE") && reader.prevTag1("$,") && reader.word === "den") return "ART";
			return "PRELS";
		}
		if (reader.nextTag1("VVFIN")) {
			if (reader.word === "die" && reader.nextTag1("VVFIN") && reader.nextTag2("NN")) return "ART";
			if (reader.suffixL3("ine")) {
				if (reader.prevTag2("") && reader.prevTag1("ART")) return "PIS";
				return "ART";
			}
			if (reader.prevTag1("VVFIN") && reader.nextTag1("VVFIN")) return "ART";
			if (reader.suffixL4("inen")) return "PIS";
			if (reader.prevTag1("APPR") && reader.word === "der") return "ART";
			if (reader.word === "Die" && reader.nextTag1("VVFIN") && reader.nextTag2("NN")) return "ART";
			if (reader.word === "der" && reader.nextTag1("VVFIN") && reader.nextTag2("$,")) return "PRELS";
			if (reader.prevTag1("NN") && reader.word === "der") return "ART";
			if (reader.word === "einer") {
				if (reader.nextTag1("VVFIN") && reader.nextTag2("APPR")) return "ART";
				return "PIS";
			}
			if (reader.word === "den" && reader.nextTag1("VVFIN") && reader.nextTag2("NN")) return "ART";
			if (reader.prevTag2("$,") && reader.prevTag1("APPR")) return "ART";
			if (reader.prevTag2("VVFIN") && reader.prevTag1("ADV")) return "ART";
			if (reader.word === "eines") return "PIS";
			if (reader.prevTag1("NE")) return "ART";
			if (reader.nextWord1("reiche")) return "ART";
			if (reader.prevWord1(",") && reader.nextWord1("wächst")) return "PRELS";
			if (reader.word === "einem" && reader.nextTag1("VVFIN") && reader.nextTag2("NN")) return "ART";
			if (reader.word === "des" && reader.nextTag1("VVFIN")) return "ART";
			if (reader.word === "ein" && reader.nextTag1("VVFIN")) return "ART";
			if (reader.prevTag1("VMFIN")) return "ART";
			if (reader.prevTag1("NN") && reader.word === "die" && reader.nextTag1("VVFIN")) return "ART";
			if (reader.prevTag1("VAFIN") && reader.nextTag1("VVFIN")) return "ART";
			if (reader.prevTag2("NN") && reader.prevTag1("APPR") && reader.word === "den") return "ART";
			if (reader.nextWord1("erreichte")) return "ART";
			return "PDS";
		}
		if (reader.nextTag1("PPER")) {
			if (reader.prevTag1("ADV")) return "ART";
			if (reader.prevTag1("NN") && reader.nextTag1("PPER")) return "ART";
			if (reader.word === "eine") return "ART";
			if (reader.prevTag2("NN") && reader.prevTag1("APPR")) return "ART";
			if (reader.word === "das" && reader.nextTag1("PPER") && reader.nextTag2("ADJA")) return "ART";
			if (reader.prevWord1("aus") && reader.word === "dem" && reader.nextWord1("ihm")) return "ART";
			if (reader.prevTag1("KOUS") && reader.nextTag1("PPER")) return "PDS";
			return "PRELS";
		}
		if (reader.word === "ein" && reader.nextWord2("")) {
			if (reader.word === "ein" && reader.nextTag1("NN")) return "ART";
			return "PTKVZ";
		}
		if (reader.prevTag1("$,") && reader.nextTag1("ADV")) {
			if (reader.word === "eine") return "ART";
			if (reader.word === "ein") return "ART";
			if (reader.word === "den" && reader.nextTag1("ADV") && reader.nextTag2("ADJA")) return "ART";
			if (reader.suffixL3("nen")) return "ART";
			if (reader.prevWord2("es")) return "ART";
			if (reader.prevTag2("NE") && reader.prevTag1("$,") && reader.word === "dem") return "ART";
			return "PRELS";
		}
		if (reader.nextWord1("sich")) {
			if (reader.prevTag2("NN") && reader.prevTag1("APPR")) return "ART";
			if (reader.prevTag1("NN")) return "ART";
			if (reader.word === "die" && reader.nextTag1("PRF") && reader.nextTag2("ADJA")) return "ART";
			if (reader.prevTag2("ADJD") && reader.prevTag1("APPR")) return "ART";
			if (reader.prevWord2("")) return "ART";
			if (reader.nextWord2("Äußernde")) return "ART";
			if (reader.word === "der" && reader.nextWord2("abzeichnenden")) return "ART";
			if (reader.prevTag2("NN") && reader.prevTag1("KON")) return "ART";
			if (reader.prevTag2("ADV") && reader.prevTag1("APPR")) return "ART";
			return "PRELS";
		}
		if (reader.word === "ein" && reader.nextWord1(",")) return "PTKVZ";
		if (reader.nextTag1("VMFIN")) {
			if (reader.word === "einen") return "PIS";
			return "PDS";
		}
		if (reader.prevTag1("$,") && reader.nextTag1("APPRART")) return "PRELS";
		if (reader.nextTag1("$,")) {
			if (reader.word === "einer") return "PIS";
			if (reader.prevWord1(",") && reader.word === "der") return "PRELS";
			if (reader.word === "eine" && reader.nextTag1("$,")) {
				if (reader.prevTag2("NN")) return "ART";
				return "PIS";
			}
			if (reader.nextTag1("$,") && reader.nextTag2("ADJA")) return "ART";
			if (reader.word === "einen" && reader.nextWord1(",")) return "PIS";
			if (reader.nextTag1("$,") && reader.nextTag2("NN")) return "ART";
			if (reader.word === "einem" && reader.nextTag1("$,")) return "PIS";
			return "PDS";
		}
		if (reader.word === "das" && reader.nextTag1("ADV")) {
			if (reader.prevWord1("für")) return "ART";
			if (reader.prevWord1("auf") && reader.word === "das") return "ART";
			if (reader.word === "das" && reader.nextWord1("immer")) return "ART";
			if (reader.word === "das" && reader.nextWord1("Wohl")) return "ART";
			if (reader.word === "das" && reader.nextWord1("mittlerweile")) return "ART";
			if (reader.word === "das" && reader.nextWord2("geltende")) return "ART";
			return "PDS";
		}
		if (reader.prevWord2(",") && reader.prevWord1("in") && reader.word === "dem") return "PRELS";
		if (reader.prevTag1("$,") && reader.word === "der" && reader.nextTag1("ADJD")) {
			if (reader.nextTag2("ADJA")) return "ART";
			if (reader.word === "der" && reader.nextTag1("ADJD") && reader.nextTag2("VVFIN")) return "ART";
			return "PRELS";
		}
		if (reader.nextWord1("Haag")) return "NE";
		if (reader.word === "das" && reader.nextWord1("nicht")) {
			if (reader.prevWord1(",") && reader.word === "das" && reader.nextWord1("nicht")) return "PRELS";
			if (reader.prevTag1("$(") && reader.nextTag1("PTKNEG")) return "PRELS";
			if (reader.prevWord1("über") && reader.word === "das") return "PRELS";
			return "PDS";
		}
		if (reader.nextWord1("man")) return "PRELS";
		if (reader.prevTag1("$,") && reader.nextTag1("PPOSAT")) return "PRELS";
		if (reader.nextTag1("$.")) {
			if (reader.word === "ein" && reader.nextTag1("$.")) return "PTKVZ";
			if (reader.prevTag2("VVFIN") && reader.prevTag1("ADV")) return "PIS";
			if (reader.word === "eine") return "PIS";
			return "PDS";
		}
		if (reader.prevTag1("$,") && reader.word === "der" && reader.nextTag1("CARD")) return "PRELS";
		if (reader.prevTag1("$,") && reader.nextTag1("PIAT")) {
			if (reader.word === "ein" && reader.nextTag1("PIAT") && reader.nextTag2("NN")) return "ART";
			if (reader.suffixL4("inen")) return "ART";
			return "PRELS";
		}
		if (reader.nextWord1("aber")) return "PDS";
		if (reader.prevWord2(",") && reader.prevWord1("bei") && reader.word === "dem") return "PRELS";
		if (reader.prevTag1("$,") && reader.nextTag1("PTKZU")) return "PRELS";
		if (reader.word === "ein" && reader.nextTag1("KON")) return "PTKVZ";
		if (reader.word === "Das" && reader.nextTag1("VVINF")) {
			if (reader.nextWord2("des")) return "ART";
			return "PDS";
		}
		if (reader.nextWord1("seiner")) {
			if (reader.suffixL3("")) return "PDS";
			return "PIS";
		}
		if (reader.nextTag1("PTKZU") && reader.nextTag2("VVINF")) {
			if (reader.word === "eines" && reader.nextTag1("PTKZU")) return "PIS";
			return "PDS";
		}
		if (reader.prevTag1("$,") && reader.nextTag1("VVPP")) return "PRELS";
		if (reader.prevTag1("$,") && reader.word === "das" && reader.nextTag1("NE")) return "PRELS";
		if (reader.prevTag1("PPER") && reader.word === "das" && reader.nextTag1("APPR")) return "PDS";
		if (reader.word === "Das" && reader.nextTag1("VVPP")) return "PDS";
		if (reader.prevWord1(",") && reader.nextWord1("nicht")) return "PRELS";
		if (reader.nextTag1("PDAT")) {
			if (reader.suffixL3("ine")) return "PIS";
			if (reader.suffixL3("nes")) return "PIS";
			return "PRELS";
		}
		if (reader.nextTag1("ADV") && reader.nextTag2("ART")) {
			if (reader.prevTag1("NN") && reader.nextTag1("ADV")) return "ART";
			if (reader.suffixL2("em")) return "PIS";
			return "PRELS";
		}
		if (reader.prevWord2(",") && reader.prevWord1("an") && reader.word === "dem") return "PRELS";
		if (reader.prevTag1("VMFIN") && reader.word === "das" && reader.nextTag1("VVINF")) return "PDS";
		if (reader.prevTag2("APPR") && reader.prevTag1("ART") && reader.word === "einen") return "ADJA";
		if (reader.prevTag1("$,") && reader.word === "den" && reader.nextTag1("NE")) {
			if (reader.prevTag2("VVPP")) return "ART";
			if (reader.nextWord2(",")) return "ART";
			if (reader.word === "den" && reader.nextWord2("und")) return "ART";
			return "PRELS";
		}
		if (reader.prevTag1("$,") && reader.word === "das" && reader.nextTag1("ADJD")) {
			if (reader.nextTag2("ADJA")) return "ART";
			return "PRELS";
		}
		if (reader.prevTag1("$,") && reader.nextTag1("PROAV")) return "PRELS";
		if (reader.prevTag1("APPRART") && reader.word === "einen") return "PIS";
		if (reader.word === "das" && reader.nextTag1("PIS")) return "PDS";
		if (reader.prevTag1("KOUS") && reader.word === "einer") return "PIS";
		if (reader.word === "das" && reader.nextWord1("für")) {
			if (reader.prevWord1("und") && reader.word === "das") return "PRELS";
			return "PDS";
		}
		if (reader.word === "das" && reader.nextTag1("PIAT")) return "PDS";
		if (reader.nextTag1("VAINF") && reader.nextTag2("NN")) return "PRELS";
		if (reader.prevWord1(",") && reader.nextWord1("-")) return "PRELS";
		if (reader.prevWord2(",") && reader.prevWord1("zu") && reader.word === "der") return "PRELS";
		if (reader.prevWord2(",") && reader.prevWord1("von") && reader.word === "dem") return "PRELS";
		if (reader.prevWord1("wie") && reader.nextWord1("über")) return "PDS";
		if (reader.nextTag1("VVINF") && reader.nextTag2("VMFIN")) {
			if (reader.word === "der" && reader.nextTag1("VVINF")) return "PRELS";
			return "PDS";
		}
		if (reader.word === "ein" && reader.nextWord1("-")) return "PTKVZ";
		if (reader.prevTag1("$,") && reader.word === "das" && reader.nextTag1("CARD")) return "PRELS";
		if (reader.prevTag1("$,") && reader.word === "der" && reader.nextTag1("PIS")) return "PRELS";
		if (reader.word === "ein" && reader.nextWord1("bis")) return "CARD";
		if (reader.word === "das" && reader.nextTag1("VVPP")) {
			if (reader.word === "das" && reader.nextWord2("der")) return "ART";
			return "PDS";
		}
		if (reader.nextTag1("ADV") && reader.nextTag2("VAFIN")) return "PDS";
		if (reader.prevTag1("VVFIN") && reader.word === "das" && reader.nextTag1("APPR")) return "PDS";
		if (reader.word === "das" && reader.nextTag1("ADJD") && reader.nextTag2("KON")) return "PDS";
		if (reader.word === "das" && reader.nextTag1("VVINF") && reader.nextTag2("$.")) return "PDS";
		if (reader.prevWord1("van") && reader.nextWord1("Broek")) return "NE";
		if (reader.prevWord1(",") && reader.word === "der" && reader.nextWord1("wie")) return "PRELS";
		if (reader.prevTag1("$(") && reader.word === "die" && reader.nextTag1("ADV")) {
			if (reader.nextTag1("ADV") && reader.nextTag2("ADJA")) return "ART";
			return "PRELS";
		}
		if (reader.prevWord1(",") && reader.nextWord1("Anfang")) return "PRELS";
		if (reader.nextWord1("ihrer")) {
			if (reader.suffixL3("")) return "PDS";
			return "PIS";
		}
		if (reader.word === "die" && reader.nextTag1("PPOSAT") && reader.nextTag2("NN")) return "PRELS";
		if (reader.nextWord1("davon")) return "PIS";
		if (reader.prevTag1("VVFIN") && reader.word === "einer" && reader.nextTag1("APPR")) return "PIS";
		if (reader.word === "Das" && reader.nextWord1("alles")) return "PDS";
		if (reader.word === "das" && reader.nextTag1("KON")) return "PDS";
		if (reader.nextTag1("ADJD") && reader.nextTag2("VAFIN")) return "PDS";
		if (reader.nextTag1("VAINF")) return "PDS";
		if (reader.nextWord1("da")) return "PDS";
		if (reader.word === "das" && reader.nextWord1("auf")) return "PDS";
		if (reader.nextTag1("PTKVZ")) return "PDS";
		if (reader.prevWord1("") && reader.nextWord1("wiederum")) return "PDS";
		if (reader.prevTag1("$(") && reader.nextTag1("VVINF")) return "PDS";
		if (reader.prevTag1("KOKOM") && reader.nextTag1("APPRART")) return "PDS";
		if (reader.word === "das" && reader.nextTag1("ADJD") && reader.nextTag2("$.")) return "PDS";
		if (reader.nextTag1("$(") && reader.nextTag2("$,")) {
			if (reader.word === "ein" && reader.nextWord1("''") && reader.nextWord2(",")) return "PTKVZ";
			return "PDS";
		}
		if (reader.word === "Den" && reader.nextWord1("Haager")) return "NE";
		if (reader.prevWord1("und") && reader.word === "die" && reader.nextWord1("mit")) return "PRELS";
		if (reader.nextWord1("Rabin")) return "PRELS";
		if (reader.prevWord2("Präsidenten") && reader.prevWord1(",") && reader.word === "der") return "PRELS";
		if (reader.prevTag1("APPR") && reader.word === "der" && reader.nextTag1("PIAT")) {
			if (reader.prevTag2("") && reader.prevTag1("APPR")) return "ART";
			return "PRELS";
		}
		if (reader.nextWord2("anderem")) return "PRELS";
		if (reader.word === "das" && reader.nextWord1("(")) return "PRELS";
		if (reader.prevTag1("$(") && reader.word === "der" && reader.nextTag1("ADV")) return "PRELS";
		if (reader.word === "ein" && reader.nextWord2("allemal")) return "PIS";
		if (reader.nextWord1("und")) return "PIS";
		if (reader.prevTag1("ADV") && reader.word === "einer" && reader.nextTag1("APPR")) return "PIS";
		return "ART";
	}
	if (reader.tag === "PWS") {
		if (reader.prevTag2("ART") && reader.prevTag1("$,")) return "PRELS";
		if (reader.prevTag2("PIS") && reader.prevTag1("$,")) return "PRELS";
		if (reader.prevTag2("NN") && reader.prevTag1("$,") && reader.word === "was") {
			if (reader.prevWord2("Frage") && reader.prevWord1(",") && reader.word === "was") return "PWS";
			if (reader.nextTag1("PPER") && reader.nextTag2("VVFIN")) return "PWS";
			if (reader.nextTag2("VVINF")) return "PWS";
			return "PRELS";
		}
		if (reader.word === "was" && reader.nextTag1("NE")) return "PRELS";
		if (reader.prevTag1("ADV") && reader.word === "was") {
			if (reader.nextTag2("ADJA")) return "PWS";
			return "PIS";
		}
		if (reader.word === "was" && reader.nextTag1("APPRART") && reader.nextTag2("NN")) return "PRELS";
		if (reader.prevTag2("ADJA") && reader.prevTag1("$,") && reader.word === "was") {
			if (reader.prevWord1(",") && reader.nextWord1("das")) return "PWS";
			return "PRELS";
		}
		if (reader.word === "was" && reader.nextWord1("auch")) return "PRELS";
		if (reader.word === "was" && reader.nextWord1("zu")) return "PRELS";
		return "PWS";
	}
	if (reader.tag === "VAFIN") {
		if (reader.prevWord1("zu")) return "VAINF";
		if (reader.word === "haben" && reader.nextTag1("VMFIN")) return "VAINF";
		if (reader.word === "haben" && reader.nextTag1("$,") && reader.nextTag2("KOUS")) return "VAINF";
		if (reader.word === "haben" && reader.nextWord1(".") && reader.nextWord2("")) {
			if (reader.prevTag2("PTKNEG") && reader.prevTag1("VVPP") && reader.word === "haben") return "VAFIN";
			if (reader.prevWord1("gefunden") && reader.word === "haben") return "VAFIN";
			if (reader.prevWord1("gegeben") && reader.nextWord1(".")) return "VAFIN";
			if (reader.prevWord1("eingezahlt")) return "VAFIN";
			if (reader.prevWord2("öffentlich")) return "VAFIN";
			if (reader.prevWord1("beteiligt") && reader.nextWord1(".")) return "VAFIN";
			if (reader.prevWord1("erlebt") && reader.nextWord1(".")) return "VAFIN";
			if (reader.prevWord1("erwarten") && reader.word === "haben") return "VAFIN";
			if (reader.prevWord1("geführt")) return "VAFIN";
			if (reader.prevTag2("APPRART") && reader.prevTag1("NN") && reader.word === "haben") return "VAFIN";
			if (reader.prevWord1("geliebt") && reader.nextWord1(".")) return "VAFIN";
			if (reader.prevWord1("Überlebenschancen") && reader.word === "haben") return "VAFIN";
			return "VAINF";
		}
		if (reader.nextTag1("VAFIN")) return "VAINF";
		if (reader.prevTag2("NN") && reader.prevTag1("VVFIN") && reader.word === "haben") return "VAINF";
		if (reader.word === "haben" && reader.nextWord1(",") && reader.nextWord2("wie")) return "VAINF";
		return "VAFIN";
	}
	if (reader.tag === "VAINF") {
		if (reader.nextTag1("NN")) {
			if (reader.suffixL2("en")) return "VAFIN";
			return "PPOSAT";
		}
		if (reader.prevTag1("NN") && reader.word === "werden") {
			if (reader.prevTag1("NN") && reader.word === "werden" && reader.nextTag1("VMFIN")) return "VAINF";
			if (reader.prevWord2("einem") && reader.word === "werden") return "VAINF";
			if (reader.word === "werden" && reader.nextWord1("''") && reader.nextWord2(",")) return "VAINF";
			if (reader.nextTag1("") && reader.nextTag2("")) return "VAINF";
			if (reader.word === "werden" && reader.nextWord1("würde")) return "VAINF";
			if (reader.nextTag1("$,") && reader.nextTag2("ART")) return "VAINF";
			if (reader.prevWord2("ein")) return "VAINF";
			if (reader.prevWord1("Problem")) return "VAINF";
			if (reader.prevWord2("nicht") && reader.word === "werden") return "VAINF";
			if (reader.word === "werden" && reader.nextWord1(",") && reader.nextWord2("in")) return "VAINF";
			return "VAFIN";
		}
		if (reader.prevWord2("") && reader.word === "werden") {
			if (reader.nextTag1("VMFIN")) return "VAINF";
			return "VAFIN";
		}
		if (reader.prevTag1("$,") && reader.word === "werden") return "VAFIN";
		if (reader.word === "sein" && reader.nextTag1("ADJA")) return "PPOSAT";
		if (reader.prevTag1("NE") && reader.word === "werden") {
			if (reader.word === "werden" && reader.nextTag1("$.")) return "VAINF";
			if (reader.prevTag1("NE") && reader.word === "werden" && reader.nextTag1("$,")) return "VAINF";
			if (reader.nextWord2(",")) return "VAINF";
			return "VAFIN";
		}
		if (reader.nextTag1("ADV")) {
			if (reader.suffixL3("ein")) return "PPOSAT";
			return "VAFIN";
		}
		if (reader.prevTag1("VVINF") && reader.word === "werden") {
			if (reader.prevWord1("erhalten") && reader.word === "werden") return "VAINF";
			if (reader.prevWord1("beraten")) return "VAINF";
			if (reader.prevWord1("empfangen")) return "VAINF";
			return "VAFIN";
		}
		if (reader.word === "werden" && reader.nextTag1("PPER")) return "VAFIN";
		if (reader.word === "werden" && reader.nextTag1("ART")) return "VAFIN";
		if (reader.prevTag1("VAINF") && reader.word === "werden") return "VAFIN";
		if (reader.prevTag1("PPER") && reader.word === "werden") {
			if (reader.word === "werden" && reader.nextTag1("$,")) return "VAINF";
			return "VAFIN";
		}
		if (reader.word === "werden" && reader.nextTag1("$,") && reader.nextTag2("VAFIN")) {
			if (reader.prevWord1("zu") && reader.word === "werden") return "VAINF";
			if (reader.prevTag2("VMFIN")) return "VAINF";
			return "VAFIN";
		}
		if (reader.word === "werden" && reader.nextTag1("$,") && reader.nextTag2("VMFIN")) return "VAFIN";
		if (reader.word === "werden" && reader.nextTag1("$,") && reader.nextTag2("VVINF")) return "VAFIN";
		if (reader.word === "sein" && reader.nextTag1("NE")) return "PPOSAT";
		if (reader.word === "werden" && reader.nextTag1("ADJA")) return "VAFIN";
		if (reader.word === "werden" && reader.nextTag1("PIAT")) return "VAFIN";
		if (reader.nextWord2("Jahre")) return "PPOSAT";
		if (reader.prevWord1("für")) return "PPOSAT";
		if (reader.nextWord1("von")) return "VAFIN";
		if (reader.nextWord1("sich")) return "VAFIN";
		if (reader.word === "werden" && reader.nextTag1("VVPP")) return "VAFIN";
		if (reader.prevWord1("genannt") && reader.word === "werden") return "VAFIN";
		if (reader.prevWord1("gesehen") && reader.word === "werden") return "VAFIN";
		if (reader.word === "werden" && reader.nextTag1("ADJD")) return "VAFIN";
		if (reader.word === "werden" && reader.nextTag1("PPOSAT")) return "VAFIN";
		return "VAINF";
	}
	if (reader.tag === "APPRART") {
		if (reader.nextWord1("besten")) return "PTKA";
		if (reader.word === "am" && reader.nextTag1("ADJD")) return "PTKA";
		if (reader.nextWord1("meisten")) return "PTKA";
		if (reader.prevWord1("u.") && reader.word === "a.") return "PIS";
		if (reader.word === "Am" && reader.nextTag1("ADJD")) return "PTKA";
		if (reader.prevWord1("L.") && reader.word === "A.") return "NE";
		if (reader.word === "am" && reader.nextTag1("PIS")) return "PTKA";
		if (reader.prevTag1("NN") && reader.word === "A.") return "NE";
		if (reader.word === "am" && reader.nextTag1("ADJA") && reader.nextTag2("$.")) return "PTKA";
		if (reader.nextWord1("D.")) return "APPR";
		if (reader.word === "Am" && reader.nextTag1("ADJA") && reader.nextTag2("VAFIN")) return "PTKA";
		if (reader.nextWord1("schwersten")) return "PTKA";
		return "APPRART";
	}
	if (reader.tag === "KOKOM") {
		if (reader.prevTag1("$,") && reader.word === "wie") {
			if (reader.nextTag1("NE") && reader.nextTag2("KON")) return "KOKOM";
			if (reader.prevWord2("die")) return "KOKOM";
			if (reader.word === "wie" && reader.nextWord2(".")) return "KOKOM";
			if (reader.nextTag1("ADV") && reader.nextTag2("APPRART")) return "KOKOM";
			if (reader.nextTag1("ART") && reader.nextTag2("ART")) return "KOKOM";
			if (reader.prevTag2("PIAT")) return "KOKOM";
			if (reader.prevWord1(",") && reader.word === "wie" && reader.nextWord1("den")) return "KOKOM";
			if (reader.nextWord2("Die")) return "KOKOM";
			if (reader.nextWord1("weitere")) return "KOKOM";
			if (reader.nextWord2("meisten")) return "KOKOM";
			if (reader.word === "wie" && reader.nextWord1("bei") && reader.nextWord2("der")) return "KOKOM";
			return "PWAV";
		}
		if (reader.prevTag1("APPR") && reader.nextTag1("APPR")) return "KON";
		if (reader.prevTag1("KON")) {
			if (reader.word === "wie" && reader.nextTag1("APPR")) return "KOKOM";
			if (reader.word === "wie" && reader.nextWord1("einst")) return "KOKOM";
			return "PWAV";
		}
		if (reader.word === "wie" && reader.nextWord1("auch")) return "KON";
		if (reader.prevWord2(",") && reader.prevWord1("''") && reader.word === "wie") return "PWAV";
		if (reader.prevTag1("$(") && reader.nextTag1("PPER")) return "PWAV";
		if (reader.prevTag1("ADJA") && reader.nextTag1("ADJA")) {
			if (reader.prevTag2("ADV") && reader.prevTag1("ADJA") && reader.word === "wie") return "KOKOM";
			return "KON";
		}
		if (reader.prevWord2("des")) return "KON";
		if (reader.nextTag1("VVPP")) {
			if (reader.nextTag2("$.")) return "KOKOM";
			return "PWAV";
		}
		if (reader.prevTag1("$(") && reader.nextTag1("VVFIN")) return "PWAV";
		if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "wie") return "PWAV";
		if (reader.prevTag1("ADJA") && reader.word === "wie" && reader.nextTag1("APPR")) return "KON";
		return "KOKOM";
	}
	if (reader.tag === "PTKA") return "PTKA";
	if (reader.tag === "PPER") {
		if (reader.prevWord1("wir") && reader.word === "uns") {
			if (reader.prevTag2("KOKOM") && reader.prevTag1("PPER")) return "PPER";
			if (reader.prevWord2("ob") && reader.prevWord1("wir") && reader.word === "uns") return "PPER";
			return "PRF";
		}
		if (reader.prevWord1("ich") && reader.word === "mich") return "PRF";
		if (reader.prevWord2("Wir") && reader.word === "uns") return "PRF";
		if (reader.prevWord2("Ich") && reader.word === "mich") return "PRF";
		if (reader.word === "du" && reader.nextTag1("NE")) return "NE";
		if (reader.nextTag1("") && reader.nextTag2("")) return "XY";
		if (reader.prevWord2("Ich") && reader.word === "mir") return "PRF";
		return "PPER";
	}
	if (reader.tag === "APZR") {
		if (reader.word === "hinaus" && reader.nextTag1("$.")) {
			if (reader.prevTag2("ART")) return "APZR";
			return "PTKVZ";
		}
		return "APZR";
	}
	return "NN";
};