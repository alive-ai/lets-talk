/**
 * File Generated From data/pos/french.rdr at Sat Jan 23 2016 18:02:20 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(reader) {
	if (reader.tag === "A") {
		if (reader.nextWord1("%")) return "D";
		if (reader.prevTag1("D") && reader.nextTag1("P")) {
			if (reader.word === "autre") {
				if (reader.prevWord2("d'")) return "A";
				return "PRO";
			}
			if (reader.prevWord1("la") && reader.word === "première") return "A";
			if (reader.word === "dernier" && reader.nextTag1("P")) return "A";
			if (reader.prevTag1("D") && reader.word === "seul") return "A";
			if (reader.prevTag1("D") && reader.word === "premiers" && reader.nextTag1("P")) return "A";
			if (reader.word === "meilleur" && reader.nextTag1("P") && reader.nextTag2("N")) return "A";
			if (reader.suffixL3("ule")) return "A";
			if (reader.suffixL4("ères")) return "A";
			if (reader.prevWord1("Le") && reader.nextWord1("à")) return "A";
			if (reader.prevTag1("D") && reader.word === "deuxième" && reader.nextTag1("P")) return "A";
			if (reader.word === "moindre" && reader.nextTag1("P")) return "A";
			if (reader.word === "centrale" && reader.nextWord1("de") && reader.nextWord2("Mme")) return "A";
			if (reader.word === "seuls" && reader.nextWord1("à")) return "A";
			if (reader.prevWord2("numéro")) return "A";
			if (reader.word === "dernière" && reader.nextWord1("en")) return "A";
			if (reader.prevWord2("été")) return "A";
			if (reader.word === "premier" && reader.nextWord1("de") && reader.nextWord2("ces")) return "A";
			if (reader.word === "premier" && reader.nextWord1("d'")) return "A";
			if (reader.word === "second" && reader.nextWord1("à")) return "A";
			return "N";
		}
		if (reader.prevTag1("P") && reader.nextTag1("PONCT")) {
			if (reader.prevTag1("P") && reader.word === "autres") {
				if (reader.word === "autres" && reader.nextWord1("''")) return "A";
				if (reader.prevWord2("que")) return "A";
				return "PRO";
			}
			if (reader.word === "tous" && reader.nextTag1("PONCT")) return "PRO";
			if (reader.prevWord1("y-compris")) return "A";
			if (reader.prevWord1("comme") && reader.nextWord1(",")) return "A";
			if (reader.prevWord2(";")) return "A";
			if (reader.prevWord1("du") && reader.nextWord1("-")) return "A";
			if (reader.suffixL3("ant")) return "A";
			if (reader.word === "second" && reader.nextWord1(",")) return "A";
			if (reader.prevWord1("du") && reader.word === "neuf") return "A";
			if (reader.prevWord1("de-type")) return "A";
			if (reader.prevWord1("De")) {
				if (reader.word === "même" && reader.nextWord1(",")) return "ADV";
				return "A";
			}
			if (reader.prevWord1("des") && reader.nextWord1("-")) return "A";
			if (reader.word === "fameux" && reader.nextWord1("''")) return "A";
			if (reader.prevTag1("P") && reader.word === "premier" && reader.nextTag1("PONCT")) return "A";
			if (reader.prevTag1("P") && reader.word === "autre" && reader.nextTag1("PONCT")) return "A";
			if (reader.nextWord1("!")) return "A";
			if (reader.suffixL3("ste")) return "A";
			if (reader.suffixL2("me")) {
				if (reader.prevWord2("") && reader.prevWord1("De") && reader.word === "même") return "ADV";
				return "A";
			}
			if (reader.prevWord1("à") && reader.nextWord1(".")) return "PRO";
			return "N";
		}
		if (reader.prevTag1("P") && reader.nextTag1("P")) {
			if (reader.prevWord1("du") && reader.nextWord1("au")) return "A";
			if (reader.prevWord2("rien")) return "A";
			if (reader.prevTag1("P") && reader.word === "autres") {
				if (reader.word === "autres" && reader.nextWord2("lesquels")) return "A";
				if (reader.prevTag2("P") && reader.prevTag1("P") && reader.word === "autres") return "A";
				return "PRO";
			}
			if (reader.word === "même" && reader.nextTag1("P")) return "ADV";
			if (reader.prevWord2("")) return "A";
			if (reader.suffixL2("un")) return "A";
			if (reader.prevTag1("P") && reader.word === "rares" && reader.nextTag1("P")) return "A";
			if (reader.suffixL3("ant")) return "A";
			if (reader.word === "7") return "D";
			if (reader.prevWord1("de") && reader.word === "14") return "D";
			return "N";
		}
		if (reader.prevTag1("V") && reader.word === "même") return "ADV";
		if (reader.nextWord1("milliards")) {
			if (reader.prevWord1("des") && reader.nextWord1("milliards")) return "A";
			if (reader.prevTag1("D") && reader.nextTag1("N")) return "A";
			return "D";
		}
		if (reader.prevTag1("PONCT") && reader.word === "même") return "ADV";
		if (reader.nextWord1("millions")) return "D";
		if (reader.prevWord1("(") && reader.nextWord1(")")) {
			if (reader.nextWord2("de")) return "A";
			if (reader.word === "1" && reader.nextWord2("ont")) return "A";
			if (reader.nextWord2("du")) return "A";
			return "N";
		}
		if (reader.word === "1" && reader.nextWord2("de")) return "D";
		if (reader.prevTag1("C") && reader.word === "même") return "ADV";
		if (reader.prevTag1("D") && reader.word === "général") return "N";
		if (reader.word === "autres" && reader.nextTag1("V")) return "PRO";
		if (reader.prevWord1("l'") && reader.word === "autre") {
			if (reader.nextTag1("N") && reader.nextTag2("P")) return "A";
			if (reader.nextTag1("N") && reader.nextTag2("PONCT")) return "A";
			return "PRO";
		}
		if (reader.prevTag1("D") && reader.nextTag1("PONCT")) {
			if (reader.prevTag2("P") && reader.prevTag1("D") && reader.word === "autres") {
				if (reader.prevWord2("pour") && reader.word === "autres") return "A";
				return "PRO";
			}
			if (reader.prevWord1("une") && reader.nextWord1("''")) return "A";
			if (reader.prevWord1("Le") && reader.nextWord1(",")) return "A";
			if (reader.word === "dernier" && reader.nextWord1(",")) return "A";
			if (reader.suffixL4("utre")) {
				if (reader.prevWord1("un") && reader.word === "autre" && reader.nextWord1(".")) return "PRO";
				return "A";
			}
			if (reader.prevTag1("D") && reader.word === "même") return "A";
			if (reader.word === "autres" && reader.nextTag1("PONCT") && reader.nextTag2("")) {
				if (reader.prevWord2("pour") && reader.word === "autres") return "A";
				return "PRO";
			}
			if (reader.prevTag1("D") && reader.word === "seul" && reader.nextTag1("PONCT")) return "A";
			if (reader.prevWord1("la") && reader.word === "seconde") return "A";
			if (reader.suffixL3("ème")) return "A";
			if (reader.prevWord1("la") && reader.word === "première") return "A";
			if (reader.word === "dernière") return "A";
			if (reader.suffixL3("its")) return "A";
			if (reader.prevTag1("D") && reader.word === "ancien" && reader.nextTag1("PONCT")) return "A";
			if (reader.prevWord1("la") && reader.word === "française") return "A";
			if (reader.prevTag1("D") && reader.word === "meilleures" && reader.nextTag1("PONCT")) return "A";
			if (reader.suffixL4("mier")) return "A";
			if (reader.word === "nouveau" && reader.nextTag1("PONCT")) return "A";
			if (reader.word === "fameux" && reader.nextTag1("PONCT")) return "A";
			if (reader.suffixL4("ntes")) return "A";
			if (reader.prevTag1("D") && reader.word === "dernières") return "A";
			if (reader.prevWord2("des")) return "A";
			if (reader.word === "autres" && reader.nextTag1("PONCT") && reader.nextTag2("C")) return "PRO";
			if (reader.prevTag1("D") && reader.word === "véritable") return "A";
			if (reader.word === "14" && reader.nextTag1("PONCT")) return "A";
			if (reader.prevWord2("pour") && reader.word === "militaire") return "A";
			if (reader.prevTag2("") && reader.prevTag1("D") && reader.word === "première") return "A";
			if (reader.prevWord2("dans") && reader.prevWord1("le") && reader.word === "neuf") return "A";
			if (reader.word === "22" && reader.nextWord1(",")) return "A";
			if (reader.prevTag2("PRO")) return "A";
			if (reader.word === "américaine") return "A";
			if (reader.prevWord1("une") && reader.nextWord1("-")) return "A";
			if (reader.word === "dernier" && reader.nextWord1(".")) return "A";
			if (reader.prevWord1("le") && reader.word === "notionnel") return "A";
			if (reader.prevTag1("D") && reader.word === "grand" && reader.nextTag1("PONCT")) return "A";
			if (reader.word === "premiers" && reader.nextWord1(",")) return "A";
			if (reader.prevWord1("son") && reader.nextWord1("''")) return "A";
			if (reader.suffixL4("dial")) return "A";
			if (reader.prevWord1("le") && reader.nextWord1("-")) return "A";
			if (reader.prevWord2(",") && reader.word === "derniers") return "A";
			if (reader.prevTag2("P") && reader.prevTag1("D") && reader.word === "précédent") return "A";
			if (reader.prevWord1("ces") && reader.nextWord1("''")) return "A";
			if (reader.prevWord2("A") && reader.prevWord1("l'") && reader.word === "inverse") return "A";
			return "N";
		}
		if (reader.nextWord1("heures")) return "D";
		if (reader.word === "toutes" && reader.nextTag1("N")) return "D";
		if (reader.prevTag1("P") && reader.nextTag1("C")) {
			if (reader.word === "moyen" && reader.nextTag1("C")) return "A";
			if (reader.prevTag2("ADV") && reader.prevTag1("P")) return "A";
			if (reader.nextWord1("que")) return "A";
			if (reader.prevTag1("P") && reader.word === "autres") return "PRO";
			if (reader.prevTag1("P") && reader.word === "telle") return "D";
			if (reader.suffixL2("me")) return "A";
			if (reader.prevWord1("de") && reader.word === "bons") return "A";
			if (reader.nextWord2("tel")) return "A";
			if (reader.word === "petites" && reader.nextWord1("et")) return "A";
			return "N";
		}
		if (reader.prevTag1("D") && reader.word === "public") return "N";
		if (reader.prevTag1("P") && reader.word === "politiques") return "N";
		if (reader.prevWord1("") && reader.nextWord1(".")) return "N";
		if (reader.prevTag1("P") && reader.nextTag1("ADV")) {
			if (reader.suffixL4("tits")) return "A";
			if (reader.prevTag1("P") && reader.word === "autres") return "PRO";
			return "N";
		}
		if (reader.prevTag1("P") && reader.nextTag1("V")) {
			if (reader.prevTag2("A")) return "A";
			if (reader.nextWord2(",")) return "A";
			if (reader.prevTag2("ADV")) return "A";
			return "N";
		}
		if (reader.prevTag1("D") && reader.word === "technique") return "N";
		if (reader.prevTag1("V") && reader.word === "fort") {
			if (reader.prevWord2("se")) return "A";
			if (reader.prevTag1("V") && reader.nextTag1("PONCT")) return "A";
			return "ADV";
		}
		if (reader.prevWord1("s'")) return "V";
		if (reader.word === "tous" && reader.nextTag1("N")) {
			if (reader.nextWord1("ordres")) return "A";
			return "D";
		}
		if (reader.prevTag1("D") && reader.word === "commune") return "N";
		if (reader.word === "neuf" && reader.nextTag1("N")) return "D";
		if (reader.word === "tous" && reader.nextTag1("V")) return "PRO";
		if (reader.prevWord1("l'") && reader.word === "hebdomadaire") return "N";
		if (reader.prevTag1("D") && reader.word === "français") return "N";
		if (reader.prevTag1("D") && reader.word === "américain" && reader.nextTag1("N")) return "N";
		if (reader.prevTag1("ADV") && reader.word === "même") {
			if (reader.prevTag2("V") && reader.prevTag1("ADV")) return "A";
			return "ADV";
		}
		if (reader.prevWord1("l'") && reader.nextWord1("et")) {
			if (reader.suffixL2("le")) return "A";
			return "N";
		}
		if (reader.prevTag1("D") && reader.word === "allemand" && reader.nextTag1("N")) {
			if (reader.prevTag2("V") && reader.prevTag1("D")) return "A";
			return "N";
		}
		if (reader.prevTag1("D") && reader.word === "militaires") return "N";
		if (reader.word === "fort" && reader.nextTag1("A")) return "ADV";
		if (reader.prevTag1("D") && reader.word === "centrale") return "N";
		if (reader.prevTag1("D") && reader.word === "aéronautique") return "N";
		if (reader.prevTag2("D") && reader.prevTag1("A") && reader.word === "moyen") return "N";
		if (reader.prevTag1("D") && reader.word === "japonais") return "N";
		if (reader.prevWord2("s'") && reader.prevWord1("est") && reader.word === "élevé") return "V";
		if (reader.word === "1" && reader.nextWord1("milliard")) return "D";
		if (reader.word === "1" && reader.nextWord1("dollar")) return "D";
		if (reader.word === "quels" && reader.nextTag1("N")) return "D";
		if (reader.word === "2" && reader.nextWord1("points")) return "D";
		if (reader.word === "tous" && reader.nextTag1("P")) return "PRO";
		if (reader.prevWord1("des") && reader.nextWord1("qui")) return "N";
		if (reader.prevWord1("les") && reader.nextWord1("ne")) return "N";
		if (reader.prevTag1("D") && reader.word === "industriel") return "N";
		if (reader.prevTag1("D") && reader.word === "mensuel") return "N";
		if (reader.prevTag1("D") && reader.word === "moyen") return "N";
		if (reader.prevTag1("D") && reader.word === "financier") return "N";
		if (reader.prevTag1("D") && reader.word === "techniques") return "N";
		if (reader.prevTag2("N") && reader.prevTag1("P") && reader.word === "général") return "N";
		if (reader.prevTag1("D") && reader.word === "canadien") return "N";
		if (reader.prevTag1("P") && reader.word === "public") return "N";
		if (reader.word === "qualifiée" && reader.nextTag1("P")) return "V";
		if (reader.prevTag2("C") && reader.prevTag1("CL")) return "V";
		if (reader.prevWord1("qui")) {
			if (reader.prevTag1("PRO") && reader.word === "seuls" && reader.nextTag1("V")) return "A";
			return "V";
		}
		if (reader.prevWord1("ne")) return "V";
		if (reader.nextWord1("dollars")) return "D";
		if (reader.nextWord1("francs")) {
			if (reader.nextTag1("N") && reader.nextTag2("C")) return "A";
			return "D";
		}
		if (reader.prevWord1("ont")) {
			if (reader.nextWord1("deux")) return "A";
			return "PRO";
		}
		if (reader.word === "Tous" && reader.nextTag1("V")) return "PRO";
		if (reader.word === "autres" && reader.nextTag1("CL") && reader.nextTag2("V")) return "PRO";
		if (reader.prevTag1("D") && reader.word === "nucléaire") return "N";
		if (reader.prevTag1("D") && reader.word === "britannique") return "N";
		if (reader.prevTag1("D") && reader.word === "prêt") return "N";
		if (reader.prevTag1("D") && reader.word === "routiers") return "N";
		if (reader.prevTag1("D") && reader.nextTag1("CL")) {
			if (reader.prevWord1("Cette") && reader.word === "dernière") return "A";
			if (reader.suffixL4("iers")) return "A";
			return "N";
		}
		if (reader.prevWord1("ancien")) return "N";
		if (reader.prevWord1("l'") && reader.word === "anglais") return "N";
		if (reader.prevWord1("les") && reader.nextWord1("que")) return "N";
		if (reader.prevTag1("D") && reader.word === "étrangers") return "N";
		if (reader.word === "ouverte" && reader.nextTag1("P")) {
			if (reader.prevTag2("A") && reader.prevTag1("N") && reader.word === "ouverte") return "A";
			return "V";
		}
		if (reader.prevWord1("est") && reader.word === "élevée") return "V";
		if (reader.prevTag1("CL") && reader.word === "court") return "V";
		if (reader.prevTag1("V") && reader.word === "ouverts") return "V";
		if (reader.word === "toutes" && reader.nextTag1("A")) return "ADV";
		if (reader.word === "même" && reader.nextTag1("D") && reader.nextTag2("N")) return "ADV";
		if (reader.prevTag1("PONCT") && reader.word === "29") return "D";
		if (reader.prevWord1(",") && reader.nextWord1(")")) return "D";
		if (reader.nextWord1("ans")) {
			if (reader.nextTag2("P")) return "A";
			return "D";
		}
		if (reader.prevTag1("PONCT") && reader.word === "23") return "D";
		if (reader.prevWord1("de") && reader.word === "1") return "D";
		if (reader.prevTag2("N") && reader.prevTag1("P") && reader.word === "tels") return "D";
		if (reader.word === "quel" && reader.nextTag1("N") && reader.nextTag2("P")) return "D";
		if (reader.prevWord1("à") && reader.nextWord1("mois")) return "D";
		if (reader.word === "autres" && reader.nextTag1("ADV")) return "PRO";
		if (reader.word === "tous" && reader.nextTag1("PONCT")) return "PRO";
		if (reader.prevTag1("D") && reader.word === "locaux") return "N";
		if (reader.prevWord1("mauvaises")) return "N";
		if (reader.prevTag1("P") && reader.word === "japonais" && reader.nextTag1("N")) return "N";
		if (reader.prevTag1("P") && reader.word === "communistes" && reader.nextTag1("A")) return "N";
		if (reader.prevTag1("D") && reader.word === "politiques") return "N";
		if (reader.prevWord1("les") && reader.word === "américains") return "N";
		if (reader.prevWord1("les") && reader.nextWord1("ont")) return "N";
		if (reader.prevWord1("Michel")) return "N";
		if (reader.prevTag1("D") && reader.word === "espagnol" && reader.nextTag1("N")) return "N";
		if (reader.prevWord1("grand")) return "N";
		if (reader.prevTag1("A") && reader.word === "courants") return "N";
		if (reader.prevWord1("grande")) return "N";
		if (reader.word === "anciens" && reader.nextWord1("dirigeants") && reader.nextWord2("de")) return "N";
		if (reader.prevWord1("non-")) return "N";
		if (reader.prevWord1("la") && reader.nextWord1("ne")) return "N";
		if (reader.prevWord1("M.")) return "N";
		if (reader.prevTag2("A") && reader.prevTag1("PONCT") && reader.word === "allemand") return "N";
		if (reader.prevTag1("P") && reader.nextTag1("CL")) return "N";
		if (reader.prevTag2("PRO") && reader.prevTag1("CL")) return "V";
		if (reader.word === "spécialisés" && reader.nextTag1("P")) return "V";
		if (reader.word === "privée" && reader.nextTag1("P") && reader.nextTag2("D")) return "V";
		if (reader.prevWord2("se") && reader.word === "élevés") return "V";
		if (reader.prevTag1("ADV") && reader.word === "élevés" && reader.nextTag1("C")) return "V";
		if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "court") return "V";
		if (reader.prevWord1("davantage")) return "V";
		if (reader.word === "soutenue" && reader.nextWord1("par")) return "V";
		if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "forcée") return "V";
		return "A";
	}
	if (reader.tag === "ADV") {
		if (reader.word === "tout" && reader.nextTag1("D")) {
			if (reader.nextWord2("que")) return "PRO";
			if (reader.prevWord1("de") && reader.word === "tout" && reader.nextWord1("ce")) return "PRO";
			if (reader.prevWord1("et") && reader.nextWord1("ce")) return "PRO";
			return "A";
		}
		if (reader.prevTag1("D") && reader.nextTag1("P")) {
			if (reader.word === "plus") return "ADV";
			if (reader.prevWord1("un") && reader.word === "peu") return "ADV";
			if (reader.word === "doublement" && reader.nextTag1("P") && reader.nextTag2("D")) return "ADV";
			return "N";
		}
		if (reader.word === "tout" && reader.nextTag1("V")) {
			if (reader.prevWord1("a")) return "ADV";
			if (reader.nextWord1("risque")) return "D";
			if (reader.prevTag2("") && reader.prevTag1("D") && reader.word === "tout") return "N";
			return "PRO";
		}
		if (reader.word === "tout" && reader.nextTag1("N")) {
			if (reader.prevWord2("le") && reader.word === "tout") return "ADV";
			if (reader.word === "tout" && reader.nextWord1("intérêt")) return "ADV";
			if (reader.prevTag2("V") && reader.prevTag1("ADV") && reader.word === "tout") return "ADV";
			if (reader.prevTag1("N")) return "ADV";
			if (reader.prevWord2("1990")) return "PRO";
			return "D";
		}
		if (reader.word === "quelque" && reader.nextTag1("N")) return "D";
		if (reader.prevWord1("du")) {
			if (reader.word === "plus") return "ADV";
			return "N";
		}
		if (reader.prevTag1("D") && reader.nextTag1("PONCT")) {
			if (reader.suffixL3("ins")) return "ADV";
			if (reader.prevTag1("D") && reader.word === "actuellement") return "ADV";
			if (reader.word === "plus") return "ADV";
			if (reader.suffixL3("hui")) return "ADV";
			if (reader.nextWord2("''")) return "A";
			return "N";
		}
		if (reader.word === "tout" && reader.nextTag1("PONCT")) return "PRO";
		if (reader.word === "tout" && reader.nextTag1("CL") && reader.nextTag2("V")) return "PRO";
		if (reader.word === "tout" && reader.nextTag1("PRO")) return "A";
		if (reader.word === "juste" && reader.nextTag1("N")) return "A";
		if (reader.prevWord1("''") && reader.word === "oui") {
			if (reader.nextTag1("PONCT") && reader.nextTag2("V")) return "I";
			return "N";
		}
		if (reader.prevWord1("''") && reader.word === "non" && reader.nextWord1("''")) return "N";
		if (reader.prevTag1("D") && reader.nextTag1("C")) {
			if (reader.nextWord2("en")) return "ADV";
			return "N";
		}
		if (reader.prevTag1("P") && reader.word === "mal") return "N";
		if (reader.prevTag1("D") && reader.word === "mal") return "N";
		if (reader.word === "Même" && reader.nextTag1("N") && reader.nextTag2("P")) return "A";
		if (reader.prevWord1("taux") && reader.word === "à-court-terme") return "A";
		if (reader.prevTag1("C") && reader.word === "beaucoup" && reader.nextTag1("V")) return "PRO";
		if (reader.prevTag2("D") && reader.prevTag1("A") && reader.word === "pas") return "N";
		if (reader.prevWord1("en") && reader.word === "maintenant") return "V";
		if (reader.prevWord1("se")) return "V";
		if (reader.prevWord1(",") && reader.word === "donc" && reader.nextWord1("de")) return "C";
		if (reader.word === "Non" && reader.nextWord1(".")) return "I";
		if (reader.prevTag1("PRO") && reader.word === "beaucoup" && reader.nextTag1("V")) return "PRO";
		if (reader.prevWord1("petits")) return "N";
		if (reader.prevWord1("de") && reader.nextWord1("et")) return "N";
		if (reader.nextWord1("desquelles")) return "P";
		if (reader.prevWord1("n'")) return "V";
		return "ADV";
	}
	if (reader.tag === "C") {
		if (reader.prevWord1("ce")) {
			if (reader.prevTag1("D") && reader.word === "soit") return "V";
			if (reader.prevWord1("ce") && reader.nextWord1("''")) return "C";
			if (reader.word === "que" && reader.nextWord1("ce")) return "C";
			return "PRO";
		}
		if (reader.prevTag1("N") && reader.word === "qu'" && reader.nextTag1("CL")) {
			if (reader.word === "qu'" && reader.nextWord1("il") && reader.nextWord2("ne")) return "C";
			if (reader.prevWord2("ce")) return "C";
			if (reader.prevWord1("janvier")) return "C";
			if (reader.prevTag2("ADV")) return "C";
			if (reader.nextTag1("CL") && reader.nextTag2("PONCT")) return "C";
			if (reader.prevWord1("juin") && reader.word === "qu'") return "C";
			if (reader.prevWord1("audience")) return "C";
			if (reader.prevWord1("questions") && reader.word === "qu'") return "C";
			if (reader.word === "qu'" && reader.nextWord2("allait")) return "C";
			if (reader.prevWord2("son") && reader.word === "qu'") return "C";
			if (reader.prevWord1("demande")) return "C";
			return "PRO";
		}
		if (reader.prevWord2("ne")) {
			if (reader.prevWord2("ne") && reader.word === "ni") return "C";
			return "ADV";
		}
		if (reader.word === "que" && reader.nextTag1("V")) {
			if (reader.nextWord1("prévu")) return "C";
			if (reader.prevTag2("V") && reader.prevTag1("V")) return "ADV";
			if (reader.prevTag2("V") && reader.prevTag1("ADV")) return "C";
			if (reader.prevTag2("CL") && reader.prevTag1("V") && reader.word === "que") return "C";
			if (reader.prevTag2("PONCT") && reader.prevTag1("ADV") && reader.word === "que") return "C";
			return "PRO";
		}
		if (reader.word === "soit" && reader.nextTag1("V")) return "V";
		if (reader.prevTag1("N") && reader.word === "que" && reader.nextTag1("CL")) {
			if (reader.word === "que" && reader.nextWord1("c'") && reader.nextWord2("est")) return "C";
			if (reader.prevWord2("cette")) return "C";
			return "PRO";
		}
		if (reader.word === "qu'" && reader.nextTag1("V")) {
			if (reader.prevTag1("V") && reader.word === "qu'") {
				if (reader.prevTag2("A") && reader.prevTag1("V") && reader.word === "qu'") return "C";
				return "ADV";
			}
			if (reader.word === "qu'" && reader.nextWord2(".")) return "C";
			return "PRO";
		}
		if (reader.prevWord2("n'")) {
			if (reader.prevTag1("V") && reader.word === "ni" && reader.nextTag1("N")) return "C";
			if (reader.word === "ni" && reader.nextWord1("les")) return "C";
			if (reader.word === "ni" && reader.nextTag1("P")) return "C";
			if (reader.prevWord1("empêche") && reader.word === "que") return "C";
			return "ADV";
		}
		if (reader.prevTag1("PRO") && reader.nextTag1("CL")) {
			if (reader.nextTag1("CL") && reader.nextTag2("ADV")) return "C";
			return "PRO";
		}
		if (reader.prevWord1("ne")) return "V";
		if (reader.prevTag1("N") && reader.word === "soit") return "V";
		if (reader.word === "si" && reader.nextTag1("A")) {
			if (reader.word === "si" && reader.nextWord1("tous")) return "C";
			if (reader.word === "si" && reader.nextWord1("possible")) return "C";
			return "ADV";
		}
		if (reader.prevWord1("que") && reader.word === "soit") return "V";
		if (reader.prevTag1("PONCT") && reader.word === "que" && reader.nextTag1("CL")) {
			if (reader.prevTag2("V") && reader.prevTag1("PONCT")) return "C";
			return "PRO";
		}
		if (reader.prevWord1("a")) return "ADV";
		if (reader.prevTag1("D") && reader.nextTag1("CL")) return "PRO";
		if (reader.prevTag1("A") && reader.word === "soit") return "V";
		if (reader.prevTag1("CL") && reader.word === "soit") return "V";
		if (reader.prevWord2("Une") && reader.word === "que") return "PRO";
		if (reader.word === "sinon" && reader.nextWord1(",")) return "ADV";
		if (reader.prevWord1("pas") && reader.nextWord1("des")) return "ADV";
		if (reader.prevTag1("P") && reader.word === "quand") return "ADV";
		if (reader.prevWord1("être")) return "ADV";
		if (reader.prevWord1("plus") && reader.nextWord1("une")) return "ADV";
		if (reader.word === "que" && reader.nextWord1("par")) {
			if (reader.prevTag1("ADV")) return "C";
			if (reader.prevTag2("N")) return "C";
			return "ADV";
		}
		if (reader.word === "que" && reader.nextWord2("%")) {
			if (reader.word === "que" && reader.nextWord1("80")) return "C";
			if (reader.word === "que" && reader.nextWord1("70") && reader.nextWord2("%")) return "C";
			return "ADV";
		}
		if (reader.prevTag1("") && reader.word === "S'" && reader.nextTag1("V")) return "CL";
		if (reader.prevWord2("une") && reader.word === "que") return "PRO";
		if (reader.word === "Qu'" && reader.nextTag1("V")) return "PRO";
		if (reader.word === "que" && reader.nextWord1("quelques")) return "ADV";
		if (reader.word === "qu'" && reader.nextWord1("à") && reader.nextWord2("la")) return "ADV";
		if (reader.prevTag1("N") && reader.word === "que" && reader.nextTag1("C")) return "ADV";
		if (reader.prevWord1("plus") && reader.word === "que" && reader.nextWord1("de")) return "ADV";
		if (reader.prevWord1("eu")) return "ADV";
		if (reader.prevWord1("été") && reader.word === "que") return "ADV";
		if (reader.prevWord1("") && reader.nextWord1("y")) return "CL";
		if (reader.prevTag1("D") && reader.nextTag1("C")) return "PRO";
		if (reader.prevWord2("un") && reader.word === "que") {
			if (reader.prevTag1("N") && reader.nextTag1("P")) return "C";
			return "PRO";
		}
		if (reader.prevWord2("La") && reader.word === "que") return "PRO";
		if (reader.prevWord2("des") && reader.word === "que") {
			if (reader.word === "que" && reader.nextWord1("de")) return "C";
			return "PRO";
		}
		if (reader.prevTag1("P") && reader.word === "soit") return "V";
		if (reader.prevTag1("ADV") && reader.word === "si" && reader.nextTag1("ADV")) return "ADV";
		if (reader.word === "que" && reader.nextWord2("mois")) return "ADV";
		if (reader.word === "voire" && reader.nextTag1("P") && reader.nextTag2("V")) return "ADV";
		if (reader.prevWord2("être") && reader.word === "qu'") return "ADV";
		if (reader.word === "ni" && reader.nextWord1("même")) return "ADV";
		if (reader.prevWord2("été") && reader.word === "qu'") return "ADV";
		if (reader.prevWord2("Un") && reader.word === "que") return "PRO";
		if (reader.word === "que" && reader.nextTag1("N") && reader.nextTag2("D")) return "PRO";
		if (reader.prevWord2("les") && reader.word === "qu'") return "PRO";
		if (reader.prevTag2("N") && reader.prevTag1("A") && reader.word === "qu'") {
			if (reader.prevWord1("telle") && reader.word === "qu'") return "C";
			if (reader.nextWord2("ne")) return "C";
			return "PRO";
		}
		if (reader.prevWord1("qui")) return "V";
		return "C";
	}
	if (reader.tag === "D") {
		if (reader.prevTag1("D")) {
			if (reader.prevWord1("toute")) return "D";
			if (reader.prevWord1("L'")) return "PRO";
			if (reader.word === "une" && reader.nextTag1("P") && reader.nextTag2("D")) return "PRO";
			if (reader.prevTag1("D") && reader.word === "l'") return "D";
			if (reader.nextTag1("P") && reader.nextTag2("ADV")) return "PRO";
			if (reader.word === "une" && reader.nextTag1("P") && reader.nextTag2("N")) return "PRO";
			if (reader.word === "un" && reader.nextWord2("l'")) return "PRO";
			if (reader.prevTag1("D") && reader.word === "le") {
				if (reader.prevTag1("D") && reader.nextTag1("V")) return "CL";
				return "D";
			}
			if (reader.word === "la" && reader.nextTag1("N")) return "D";
			if (reader.prevWord1("la") && reader.nextWord1(",")) return "N";
			if (reader.prevTag2("ADV") && reader.prevTag1("D") && reader.word === "un") return "PRO";
			if (reader.prevTag2("V") && reader.prevTag1("D") && reader.word === "une") {
				if (reader.prevWord1("toute")) return "D";
				return "PRO";
			}
			if (reader.prevWord2("comme") && reader.word === "un") return "PRO";
			if (reader.prevTag2("P") && reader.prevTag1("D") && reader.word === "une") {
				if (reader.prevWord1("toute")) return "D";
				return "PRO";
			}
			if (reader.prevTag1("D") && reader.word === "les") return "D";
			if (reader.word === "un" && reader.nextTag1("V")) return "PRO";
			if (reader.nextWord2("meilleurs")) return "PRO";
			if (reader.word === "un" && reader.nextWord2("premiers")) return "PRO";
			if (reader.prevWord2("été")) return "PRO";
			if (reader.suffixL2("rs")) return "PRO";
			if (reader.suffixL2("ur")) {
				if (reader.prevTag1("D") && reader.nextTag1("N")) return "D";
				return "CL";
			}
			if (reader.prevWord2("-") && reader.word === "une") {
				if (reader.word === "une" && reader.nextWord1("des")) return "PRO";
				return "D";
			}
			if (reader.word === "30" && reader.nextWord1("%")) return "D";
			if (reader.word === "cinq" && reader.nextTag1("N") && reader.nextTag2("A")) return "D";
			if (reader.prevTag1("D") && reader.word === "un" && reader.nextTag1("N")) {
				if (reader.prevWord1("l'")) return "PRO";
				return "D";
			}
			if (reader.prevWord1("la") && reader.nextWord1(".")) return "N";
			if (reader.prevWord1("un")) return "N";
			if (reader.nextWord2("leurs")) return "PRO";
			if (reader.prevWord1("l'") && reader.nextWord1(",")) return "PRO";
			if (reader.prevTag1("D") && reader.nextTag1("PRO")) return "PRO";
			if (reader.prevTag2("ADV") && reader.prevTag1("D") && reader.word === "une") {
				if (reader.prevWord1("toute")) return "D";
				return "PRO";
			}
			if (reader.prevWord2("sera") && reader.prevWord1("l'") && reader.word === "un") return "PRO";
			if (reader.word === "un" && reader.nextWord2("trois")) return "PRO";
			if (reader.word === "un" && reader.nextWord1("des") && reader.nextWord2("participants")) return "PRO";
			if (reader.word === "100" && reader.nextWord1("millions")) return "D";
			if (reader.prevWord1("les") && reader.word === "35") return "D";
			if (reader.prevWord1("les") && reader.word === "5" && reader.nextWord1("%")) return "D";
			if (reader.word === "mille" && reader.nextTag1("N")) return "D";
			if (reader.prevWord1("les") && reader.word === "20" && reader.nextWord1("%")) return "D";
			if (reader.word === "trois" && reader.nextWord1("mois")) return "D";
			if (reader.prevWord2("(") && reader.prevWord1("les") && reader.word === "deux") return "D";
			if (reader.nextTag1("PONCT") && reader.nextTag2("PONCT")) return "N";
			if (reader.nextTag1("PONCT") && reader.nextTag2("C")) return "N";
			if (reader.prevWord1("la") && reader.nextWord1("et")) return "N";
			if (reader.nextTag1("PONCT") && reader.nextTag2("PRO")) return "N";
			return "A";
		}
		if (reader.nextTag1("V")) {
			if (reader.word === "un" && reader.nextTag1("V")) return "D";
			if (reader.nextWord1("été")) return "D";
			if (reader.word === "une") return "D";
			if (reader.nextWord1("reste")) return "D";
			if (reader.nextWord1("risque")) return "D";
			if (reader.prevWord1("de") && reader.nextWord1("est")) return "D";
			if (reader.suffixL3("ins")) return "PRO";
			if (reader.prevWord1("sur")) {
				if (reader.suffixL3("inq")) return "PRO";
				if (reader.nextTag1("V") && reader.nextTag2("D")) return "PRO";
				return "D";
			}
			if (reader.prevWord1("dans")) return "D";
			if (reader.prevWord1("à") && reader.nextWord1("est")) return "D";
			if (reader.word === "le" && reader.nextWord1("fait") && reader.nextWord2("que")) return "D";
			if (reader.word === "son" && reader.nextTag1("V")) return "D";
			if (reader.word === "les" && reader.nextWord1("sommes")) return "D";
			if (reader.nextWord1("prise")) return "D";
			if (reader.word === "Le" && reader.nextWord1("fait")) return "D";
			if (reader.prevTag2("P") && reader.prevTag1("V") && reader.word === "les") return "D";
			if (reader.suffixL3("urs")) return "D";
			if (reader.suffixL2("00")) return "PRO";
			if (reader.prevWord1("est")) return "D";
			if (reader.word === "ses" && reader.nextTag1("V")) return "D";
			if (reader.word === "la" && reader.nextWord1("porte")) return "D";
			if (reader.suffixL2("es")) {
				if (reader.suffixL3("ues")) return "D";
				return "PRO";
			}
			if (reader.prevWord1("que") && reader.word === "le") return "D";
			if (reader.word === "la" && reader.nextWord2("des")) return "D";
			if (reader.word === "ces") return "D";
			if (reader.word === "la" && reader.nextTag1("V") && reader.nextTag2("N")) return "D";
			if (reader.prevWord1("vers")) return "D";
			if (reader.nextWord1("passé")) return "D";
			if (reader.suffixL2("te")) return "D";
			if (reader.suffixL2("le")) return "A";
			if (reader.nextWord1("représentant")) return "D";
			if (reader.prevTag1("") && reader.word === "Une" && reader.nextTag1("V")) return "D";
			if (reader.nextWord1("permis")) return "D";
			if (reader.word === "les" && reader.nextWord1("intéressés")) return "D";
			if (reader.prevTag2("P") && reader.prevTag1("V") && reader.word === "le") return "D";
			if (reader.nextWord1("venue")) return "D";
			if (reader.word === "le" && reader.nextWord1("fait") && reader.nextWord2("qu'")) return "D";
			if (reader.prevWord1("années") && reader.word === "90") return "A";
			if (reader.prevWord1("des")) return "A";
			if (reader.suffixL3("eux")) return "PRO";
			if (reader.prevWord1("entre")) return "D";
			if (reader.nextWord1("devoir")) return "D";
			if (reader.word === "la" && reader.nextWord1("limite")) return "D";
			if (reader.word === "la" && reader.nextWord2("qu'")) return "D";
			if (reader.word === "l'" && reader.nextWord2("des")) return "D";
			if (reader.nextWord1("relève")) return "D";
			if (reader.word === "le" && reader.nextWord1("fait") && reader.nextWord2("de")) return "D";
			if (reader.word === "sa" && reader.nextTag1("V")) return "D";
			if (reader.word === "Un" && reader.nextTag1("V")) return "D";
			if (reader.nextWord1("retenue")) return "D";
			if (reader.word === "l'" && reader.nextWord1("est") && reader.nextWord2(",")) return "D";
			if (reader.word === "la" && reader.nextWord2("(")) return "D";
			if (reader.word === "Le" && reader.nextTag1("V") && reader.nextTag2("P")) return "D";
			if (reader.nextWord1("arrêté")) return "D";
			if (reader.prevTag1("N") && reader.word === "80") return "N";
			if (reader.word === "60") return "A";
			if (reader.suffixL4("rois")) return "PRO";
			if (reader.suffixL3("inq")) return "PRO";
			if (reader.prevWord1("selon")) return "D";
			if (reader.word === "Les" && reader.nextTag1("V") && reader.nextTag2("ADV")) return "D";
			if (reader.nextWord1("blessés")) return "D";
			if (reader.word === "cet" && reader.nextTag1("V")) return "D";
			if (reader.nextWord1("adresse")) return "D";
			if (reader.nextWord1("tués")) return "D";
			if (reader.nextWord1("intéressé")) return "D";
			if (reader.prevTag2("C") && reader.prevTag1("PONCT")) return "D";
			if (reader.nextWord1("saisie")) return "D";
			if (reader.nextWord1("prises")) return "D";
			if (reader.nextWord1("ira")) return "D";
			if (reader.prevWord1("que") && reader.word === "les") return "D";
			if (reader.word === "leur" && reader.nextWord1("découvert")) return "D";
			if (reader.prevWord2("est") && reader.word === "la") return "D";
			if (reader.prevWord1("parmi")) return "D";
			if (reader.word === "La" && reader.nextTag1("V") && reader.nextTag2("P")) return "D";
			if (reader.word === "mon") return "D";
			if (reader.prevWord1("par") && reader.word === "le") return "D";
			if (reader.word === "le" && reader.nextWord1("devenir") && reader.nextWord2("de")) return "D";
			if (reader.prevWord1("chez")) return "D";
			if (reader.prevWord1("à") && reader.nextWord1("porte")) return "D";
			if (reader.prevWord2("avait") && reader.word === "le") return "D";
			if (reader.word === "le" && reader.nextWord1("fait") && reader.nextWord2("des")) return "D";
			if (reader.prevWord1("contre")) return "D";
			if (reader.prevWord2("janvier")) return "D";
			if (reader.prevWord1("par") && reader.word === "la") return "D";
			if (reader.word === "L'" && reader.nextTag1("V") && reader.nextTag2("P")) return "D";
			if (reader.prevWord1("années") && reader.word === "50") return "N";
			if (reader.prevWord1("autoroute")) return "N";
			return "CL";
		}
		if (reader.nextWord1("qui")) return "PRO";
		if (reader.word === "ce" && reader.nextTag1("C")) {
			if (reader.nextWord1("soit")) return "CL";
			return "PRO";
		}
		if (reader.prevWord1("des")) {
			if (reader.nextWord1("agents")) return "D";
			if (reader.nextTag1("PONCT") && reader.nextTag2("D")) return "D";
			if (reader.prevWord2("patrons")) return "D";
			return "A";
		}
		if (reader.prevWord1("du")) {
			if (reader.prevTag2("N") && reader.prevTag1("P") && reader.word === "nombre-de") return "D";
			return "A";
		}
		if (reader.nextWord1("janvier")) return "A";
		if (reader.nextWord1(",")) {
			if (reader.suffixL3("ins")) return "PRO";
			if (reader.suffixL4("-000")) {
				if (reader.nextTag2("D")) return "PRO";
				return "D";
			}
			if (reader.prevWord1("sur")) return "PRO";
			if (reader.word === "un") {
				if (reader.prevTag1("N") && reader.word === "un" && reader.nextTag1("PONCT")) return "A";
				return "PRO";
			}
			if (reader.word === "une") return "PRO";
			if (reader.prevTag1("C") && reader.word === "ce") return "PRO";
			if (reader.prevWord1("n°") && reader.nextWord1(",")) return "A";
			if (reader.word === "60" && reader.nextTag1("PONCT") && reader.nextTag2("P")) return "A";
			if (reader.prevTag1("C") && reader.word === "six") return "PRO";
			if (reader.suffixL2("es")) return "PRO";
			if (reader.nextWord2("soit")) return "D";
			if (reader.word === "14-,-15" && reader.nextTag1("PONCT") && reader.nextTag2("A")) return "D";
			if (reader.word === "16.17") return "D";
			if (reader.suffixL2("20")) return "D";
			if (reader.prevWord2("''")) return "D";
			return "N";
		}
		if (reader.word === "toute" && reader.nextTag1("D")) return "A";
		if (reader.nextWord1("juin")) return "A";
		if (reader.nextWord1("n'")) {
			if (reader.suffixL2("ne")) return "PRO";
			return "CL";
		}
		if (reader.nextWord1("juillet")) return "A";
		if (reader.nextTag1("PONCT") && reader.nextTag2("")) {
			if (reader.suffixL2("00")) return "PRO";
			if (reader.prevTag2("PONCT") && reader.prevTag1("N")) return "A";
			if (reader.prevWord1("sur")) return "PRO";
			if (reader.prevTag2("D") && reader.prevTag1("P")) {
				if (reader.suffixL3("000")) return "PRO";
				if (reader.suffixL4("")) return "PRO";
				return "A";
			}
			if (reader.prevTag1("V") && reader.nextTag1("PONCT")) return "PRO";
			if (reader.prevTag2("ADV")) return "PRO";
			if (reader.prevWord1("à") && reader.word === "trois") return "PRO";
			if (reader.prevWord1("annÃ©es")) return "A";
			if (reader.prevTag2("V") && reader.prevTag1("ADV")) return "PRO";
			if (reader.prevWord1("que") && reader.nextWord1(".")) return "PRO";
			if (reader.prevWord2("deux")) return "D";
			return "N";
		}
		if (reader.nextTag1("P") && reader.nextTag2("N")) {
			if (reader.prevTag1("N") && reader.nextTag1("P")) {
				if (reader.prevWord2("des")) return "N";
				return "A";
			}
			if (reader.word === "le" && reader.nextTag1("P")) return "D";
			if (reader.prevWord1("est") && reader.word === "une") return "D";
			if (reader.nextWord1("sur")) return "N";
			if (reader.prevWord2("fût") && reader.word === "ce") return "CL";
			if (reader.nextWord2("responsables")) return "D";
			if (reader.prevWord2("réduction")) return "D";
			if (reader.word === "Une") return "D";
			if (reader.nextWord2("1994")) return "D";
			if (reader.prevTag2("D") && reader.prevTag1("C")) return "D";
			if (reader.suffixL2("20")) return "D";
			if (reader.prevWord2("total")) return "D";
			if (reader.suffixL2("67")) return "N";
			if (reader.prevWord1("par")) return "N";
			return "PRO";
		}
		if (reader.nextWord1("de")) {
			if (reader.nextWord2("la")) return "A";
			if (reader.prevTag2("D") && reader.prevTag1("N")) return "A";
			if (reader.word === "certaines" && reader.nextWord1("de") && reader.nextWord2("nos")) return "A";
			return "PRO";
		}
		if (reader.nextWord1("décembre")) return "A";
		if (reader.prevWord1("au--cours-des")) return "A";
		if (reader.nextWord1("des")) {
			if (reader.nextWord2("leurs")) return "D";
			if (reader.prevTag2("CL")) return "D";
			return "PRO";
		}
		if (reader.prevWord1("aux")) return "A";
		if (reader.nextTag1("P") && reader.nextTag2("P")) {
			if (reader.word === "le") return "D";
			return "PRO";
		}
		if (reader.prevWord1("-") && reader.word === "ce") {
			if (reader.word === "ce" && reader.nextTag1("N") && reader.nextTag2("V")) return "D";
			return "CL";
		}
		if (reader.nextWord1("ne")) {
			if (reader.word === "certains") return "PRO";
			if (reader.prevWord2("des")) return "N";
			return "CL";
		}
		if (reader.prevWord1("au")) return "A";
		if (reader.nextTag1("CL") && reader.nextTag2("V")) {
			if (reader.nextWord1("se")) return "PRO";
			if (reader.suffixL3("ins")) return "PRO";
			return "CL";
		}
		if (reader.nextWord1(":")) {
			if (reader.prevTag1("P")) return "PRO";
			if (reader.prevWord2("en")) return "PRO";
			return "A";
		}
		if (reader.word === "Ce" && reader.nextTag1("C")) return "PRO";
		if (reader.prevTag1("N") && reader.nextTag1("P")) {
			if (reader.prevTag2("N") && reader.prevTag1("N")) return "A";
			if (reader.prevWord2(",")) return "A";
			return "N";
		}
		if (reader.prevWord1(";") && reader.nextWord1("Mr")) return "N";
		if (reader.prevWord1("daté") && reader.nextWord1("-")) return "A";
		if (reader.nextWord1("d'-entre")) return "PRO";
		if (reader.nextWord1("pour")) {
			if (reader.prevWord1("à") && reader.nextWord1("pour")) return "N";
			return "PRO";
		}
		if (reader.nextTag1("PONCT") && reader.nextTag2("PONCT")) {
			if (reader.prevWord1("art.") && reader.nextWord1(")")) return "A";
			if (reader.prevWord1("années") && reader.word === "50") return "A";
			if (reader.prevWord1("page")) return "A";
			if (reader.suffixL4("-,-3")) return "PRO";
			if (reader.prevWord2("deux")) return "PRO";
			if (reader.suffixL3("-29")) return "D";
			if (reader.prevTag2("A") && reader.prevTag1("PONCT")) return "D";
			if (reader.prevWord1(",") && reader.nextWord1(")")) return "D";
			if (reader.prevWord2(")")) return "D";
			return "N";
		}
		if (reader.prevTag1("N") && reader.nextTag1("C")) {
			if (reader.prevTag1("N") && reader.word === "50" && reader.nextTag1("C")) return "N";
			return "A";
		}
		if (reader.nextWord1("que")) return "A";
		if (reader.prevTag2("C") && reader.prevTag1("CL")) return "CL";
		if (reader.nextWord1("JANVIER")) return "A";
		if (reader.word === "ce" && reader.nextTag1("P")) return "PRO";
		if (reader.nextWord1("l'")) {
			if (reader.nextWord2("une")) return "A";
			if (reader.nextTag2("V")) return "PRO";
			return "N";
		}
		if (reader.prevTag1("") && reader.word === "Des" && reader.nextTag1("D")) return "P";
		if (reader.prevWord1("numéro")) return "A";
		if (reader.prevWord1("au----dessus-des")) return "A";
		if (reader.nextWord1("septembre")) return "A";
		if (reader.nextTag1("P") && reader.nextTag2("V")) {
			if (reader.prevTag1("V") && reader.nextTag1("P")) return "PRO";
			return "CL";
		}
		if (reader.prevTag1("A") && reader.word === "deux") return "PRO";
		if (reader.nextWord1("le")) {
			if (reader.prevWord1("à")) return "N";
			return "PRO";
		}
		if (reader.nextWord2("Il")) return "N";
		if (reader.nextWord1("Paris")) return "N";
		if (reader.nextTag1("PONCT") && reader.nextTag2("P")) {
			if (reader.suffixL2("00")) return "D";
			return "N";
		}
		if (reader.prevTag1("") && reader.word === "Toute" && reader.nextTag1("D")) return "A";
		if (reader.prevWord1("mardi") && reader.nextWord1("mai")) return "A";
		if (reader.nextWord1("JUILLET")) return "A";
		if (reader.prevWord1("Au--cours-des")) return "A";
		if (reader.prevWord1("(") && reader.nextWord1("exemplaires")) return "A";
		if (reader.prevTag2("") && reader.prevTag1("CL")) return "CL";
		if (reader.word === "une" && reader.nextTag1("P") && reader.nextTag2("D")) return "PRO";
		if (reader.nextWord1("actuellement")) return "PRO";
		if (reader.nextWord1("les")) return "PRO";
		if (reader.prevWord1("années") && reader.word === "80") return "N";
		return "D";
	}
	if (reader.tag === "CL") {
		if (reader.prevTag1("P") && reader.nextTag1("PONCT")) return "PRO";
		if (reader.word === "s'" && reader.nextWord1("il")) return "C";
		if (reader.nextWord1("aussi")) return "PRO";
		if (reader.nextWord1("ils")) return "C";
		if (reader.prevTag1("P") && reader.word === "elles") {
			if (reader.prevWord1("comme") && reader.word === "elles") return "CL";
			return "PRO";
		}
		if (reader.prevWord1(",") && reader.nextWord1(",")) return "PRO";
		if (reader.prevTag2("V") && reader.prevTag1("P") && reader.word === "lui") {
			if (reader.nextWord1("trouver")) return "CL";
			return "PRO";
		}
		if (reader.prevTag1("P") && reader.word === "elle") {
			if (reader.prevWord1("comme") && reader.word === "elle") return "CL";
			return "PRO";
		}
		if (reader.nextWord1("qui")) return "PRO";
		if (reader.word === "lui" && reader.nextTag1("ADV")) return "PRO";
		if (reader.word === "nous" && reader.nextWord1(",")) return "PRO";
		if (reader.word === "nous" && reader.nextWord1("une")) return "PRO";
		if (reader.prevTag1("P") && reader.word === "lui" && reader.nextTag1("P")) return "PRO";
		if (reader.word === "nous" && reader.nextTag1("A")) return "PRO";
		if (reader.prevTag1("P") && reader.word === "nous" && reader.nextTag1("P")) return "PRO";
		return "CL";
	}
	if (reader.tag === "I") return "I";
	if (reader.tag === "PRO") {
		if (reader.word === "Que" && reader.nextTag1("D")) return "C";
		if (reader.word === "Certains" && reader.nextTag1("N")) return "D";
		if (reader.prevTag1("D") && reader.word === "personne") return "N";
		if (reader.word === "Tout" && reader.nextTag1("P")) return "ADV";
		if (reader.word === "Tout" && reader.nextTag1("D")) return "A";
		if (reader.prevTag1("A") && reader.word === "personne") return "N";
		if (reader.word === "Tout" && reader.nextTag1("PRO") && reader.nextTag2("V")) return "A";
		if (reader.nextWord1("francs")) return "D";
		if (reader.word === "où" && reader.nextWord1("commence")) return "ADV";
		if (reader.nextWord1("milliards")) return "D";
		return "PRO";
	}
	if (reader.tag === "PREF") return "PREF";
	if (reader.tag === "N") {
		if (reader.prevTag1("CL")) {
			if (reader.prevTag2("V") && reader.prevTag1("CL") && reader.word === "temps") return "N";
			return "V";
		}
		if (reader.prevTag1("N") && reader.word === "politique") return "A";
		if (reader.prevWord1("qui")) return "V";
		if (reader.prevWord1("ne")) return "V";
		if (reader.prevTag2("N") && reader.prevTag1("ADV")) {
			if (reader.suffixL2("ée")) return "V";
			if (reader.prevTag2("N") && reader.prevTag1("ADV") && reader.word === "Euronews") return "N";
			if (reader.suffixL2("en")) return "N";
			if (reader.nextWord1("par")) return "V";
			if (reader.nextTag1("C") && reader.nextTag2("V")) return "V";
			if (reader.prevWord1("n'")) return "V";
			return "A";
		}
		if (reader.prevTag1("N") && reader.word === "total") return "A";
		if (reader.prevWord2("") && reader.word === "Est") return "V";
		if (reader.prevTag1("N") && reader.word === "industriels") return "A";
		if (reader.word === "jeunes" && reader.nextTag1("N")) return "A";
		if (reader.prevTag1("V") && reader.word === "ensemble") return "ADV";
		if (reader.prevTag1("N") && reader.word === "compte") return "V";
		if (reader.prevTag1("N") && reader.word === "moyenne") return "A";
		if (reader.prevWord1("pays")) {
			if (reader.prevTag1("N") && reader.word === "membres") return "N";
			return "A";
		}
		if (reader.word === "annonce" && reader.nextTag1("D")) return "V";
		if (reader.word === "pouvoir" && reader.nextTag1("V")) {
			if (reader.prevTag1("D")) return "N";
			if (reader.prevWord1("du") && reader.word === "pouvoir") return "N";
			return "V";
		}
		if (reader.prevWord1("a")) {
			if (reader.suffixL4("soin")) return "N";
			if (reader.suffixL3("nce")) return "N";
			return "V";
		}
		if (reader.prevTag1("N") && reader.word === "automobiles") return "A";
		if (reader.prevWord2("s'")) {
			if (reader.nextTag1("N") && reader.nextTag2("N")) return "N";
			if (reader.nextTag1("N") && reader.nextTag2("PONCT")) return "N";
			if (reader.prevWord1("exprimant")) return "N";
			return "V";
		}
		if (reader.prevTag1("N") && reader.word === "automobile") return "A";
		if (reader.prevTag1("N") && reader.word === "minimum") return "A";
		if (reader.prevTag1("N") && reader.word === "immobilier") return "A";
		if (reader.prevTag1("V") && reader.word === "prêts") return "A";
		if (reader.prevWord1("est") && reader.word === "revenu") return "V";
		if (reader.prevTag1("N") && reader.word === "professionnels") return "A";
		if (reader.prevTag1("D") && reader.word === "demi" && reader.nextTag1("PONCT")) return "A";
		if (reader.prevTag1("N") && reader.word === "informatique") return "A";
		if (reader.prevTag2("D") && reader.prevTag1("ADV")) {
			if (reader.suffixL2("té")) return "N";
			if (reader.prevWord1("juste")) return "N";
			if (reader.prevWord2("une")) return "N";
			return "A";
		}
		if (reader.prevWord2("") && reader.word === "Cinq") return "D";
		if (reader.prevTag1("N") && reader.word === "produit") return "V";
		if (reader.prevTag1("N") && reader.word === "personnel") return "A";
		if (reader.prevTag1("N") && reader.word === "électronique") return "A";
		if (reader.prevTag1("N") && reader.word === "frais") return "A";
		if (reader.prevTag1("P") && reader.word === "lire") return "V";
		if (reader.prevTag1("ET")) {
			if (reader.prevWord1("Home.") && reader.word === "Fed") return "N";
			if (reader.prevTag2("PONCT") && reader.prevTag1("ET") && reader.word === "mafia") return "N";
			return "ET";
		}
		if (reader.prevTag1("N") && reader.word === "contraire") return "A";
		if (reader.prevTag1("N") && reader.word === "communes") return "A";
		if (reader.prevTag1("N") && reader.word === "pratiques") return "A";
		if (reader.prevTag1("V") && reader.word === "reprise" && reader.nextTag1("P")) return "V";
		if (reader.prevTag1("N") && reader.word === "demande") return "V";
		if (reader.word === "marque" && reader.nextTag1("D")) return "V";
		if (reader.prevTag1("V") && reader.word === "responsable") return "A";
		if (reader.prevTag1("N") && reader.word === "intérieur") return "A";
		if (reader.prevTag1("N") && reader.word === "essentiel") return "A";
		if (reader.prevTag1("N") && reader.word === "étranger") return "A";
		if (reader.prevTag1("V") && reader.word === "produit") return "V";
		if (reader.prevTag1("V") && reader.word === "entrée") return "V";
		if (reader.prevWord1("n'")) return "V";
		if (reader.prevTag1("V") && reader.word === "pouvoir") return "V";
		if (reader.prevTag1("N") && reader.word === "mécanique") return "A";
		if (reader.prevWord1("comité") && reader.word === "directeur") return "A";
		if (reader.prevWord1("très")) {
			if (reader.prevTag2("P") && reader.prevTag1("ADV")) return "N";
			return "A";
		}
		if (reader.prevTag1("V") && reader.word === "point") return "ADV";
		if (reader.prevTag1("") && reader.word === "Sept") return "D";
		if (reader.prevTag1("V") && reader.word === "lire") return "V";
		if (reader.word === "table" && reader.nextWord1("sur")) return "V";
		if (reader.word === "correspondant" && reader.nextTag1("P") && reader.nextTag2("D")) return "V";
		if (reader.prevWord1("(") && reader.word === "lire") return "V";
		if (reader.word === "offre" && reader.nextTag1("D")) return "V";
		if (reader.prevTag1("N") && reader.word === "socialistes") return "A";
		if (reader.prevTag1("N") && reader.word === "particuliers") return "A";
		if (reader.prevTag1("N") && reader.word === "équivalent") return "A";
		if (reader.prevTag1("N") && reader.word === "intermédiaires") return "A";
		if (reader.prevTag1("N") && reader.word === "personnels") return "A";
		if (reader.prevTag1("N") && reader.word === "maximum" && reader.nextTag1("P")) return "A";
		if (reader.prevWord1("peu")) return "A";
		if (reader.prevWord1("caractère")) return "A";
		if (reader.word === "92" && reader.nextTag1("N")) return "D";
		if (reader.prevTag1("N") && reader.word === "signe") return "V";
		if (reader.prevTag1("PONCT") && reader.word === "analyse") return "V";
		if (reader.prevTag1("N") && reader.word === "intermédiaire") return "A";
		if (reader.prevTag1("V") && reader.word === "essentiel") return "A";
		if (reader.prevTag1("N") && reader.word === "effectif") return "A";
		if (reader.prevTag1("N") && reader.word === "responsables" && reader.nextTag1("P")) return "A";
		if (reader.prevTag1("N") && reader.word === "quotidiens") return "A";
		if (reader.prevTag1("N") && reader.word === "logique") return "A";
		if (reader.prevTag1("N") && reader.word === "moyens") return "A";
		if (reader.word === "sud" && reader.nextTag1("PONCT") && reader.nextTag2("A")) return "A";
		if (reader.prevTag1("N") && reader.word === "court-terme") return "A";
		if (reader.prevWord1("soient")) return "A";
		if (reader.prevWord1("dirigeants")) return "A";
		if (reader.prevTag1("N") && reader.word === "quotidien") return "A";
		if (reader.prevTag1("N") && reader.word === "nationalistes") return "A";
		if (reader.prevTag1("N") && reader.word === "pétroliers") return "A";
		if (reader.prevTag1("N") && reader.word === "audiovisuel") return "A";
		if (reader.prevTag1("N") && reader.word === "ouvrier") return "A";
		if (reader.word === "procédé" && reader.nextWord1("à")) return "V";
		if (reader.prevWord1("temps") && reader.word === "presse") return "V";
		if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "menace") return "V";
		if (reader.prevWord1("être")) {
			if (reader.nextTag1("P") && reader.nextTag2("V")) return "N";
			if (reader.suffixL2("re")) return "N";
			if (reader.suffixL2("ur")) return "N";
			if (reader.suffixL3("res")) return "N";
			if (reader.nextWord2("cette")) return "N";
			return "V";
		}
		if (reader.prevTag1("N") && reader.word === "baisse") return "V";
		if (reader.prevWord1("été")) {
			if (reader.prevTag2("D") && reader.prevTag1("V")) return "N";
			if (reader.nextWord2("la")) return "N";
			if (reader.word === "bénéficiaires") return "A";
			if (reader.prevWord1("été") && reader.nextWord1("en")) return "N";
			return "V";
		}
		if (reader.prevTag1("N") && reader.word === "part") return "V";
		if (reader.prevWord1(",") && reader.nextWord1("les")) return "V";
		if (reader.prevWord1("sont") && reader.nextWord1("dans")) return "V";
		if (reader.prevTag1("N") && reader.word === "produits") return "V";
		if (reader.word === "annonce" && reader.nextTag1("ADV")) return "V";
		if (reader.prevWord2("le") && reader.word === "Plan") return "ET";
		if (reader.prevWord1("revenu")) return "A";
		if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "miracle") return "A";
		if (reader.prevTag1("N") && reader.word === "mort") return "A";
		if (reader.prevTag1("N") && reader.word === "juifs") return "A";
		if (reader.prevTag1("N") && reader.word === "centrales") return "A";
		if (reader.prevWord1("marchés")) return "A";
		if (reader.prevTag1("N") && reader.word === "boursiers") return "A";
		if (reader.word === "directeurs" && reader.nextTag1("PONCT")) return "A";
		if (reader.prevWord1("nécessairement")) return "A";
		if (reader.prevTag1("PONCT") && reader.word === "politique") {
			if (reader.prevTag2("D")) return "N";
			return "A";
		}
		if (reader.prevTag1("N") && reader.word === "titulaires" && reader.nextTag1("P")) return "A";
		if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "mandataires") return "A";
		if (reader.prevTag1("N") && reader.word === "statistique") return "A";
		if (reader.prevTag1("N") && reader.word === "voisins") return "A";
		if (reader.prevTag1("V") && reader.word === "logique") return "A";
		if (reader.prevTag1("N") && reader.word === "salarié") return "A";
		if (reader.prevTag1("N") && reader.word === "moyen-terme") return "A";
		if (reader.word === "jeunes" && reader.nextTag1("A")) return "A";
		if (reader.prevWord1("Etats") && reader.nextWord1(",")) return "A";
		if (reader.word === "super" && reader.nextWord1("-")) return "A";
		if (reader.prevWord1("éléments")) return "A";
		if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "outre---Atlantique") return "A";
		if (reader.prevTag1("C") && reader.word === "politique") return "A";
		if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "salariés") return "A";
		if (reader.prevWord1("autorités")) return "A";
		if (reader.prevWord1("est") && reader.nextWord1(".")) {
			if (reader.suffixL4("")) return "V";
			return "A";
		}
		if (reader.prevTag1("N") && reader.word === "fondateurs") return "A";
		if (reader.prevWord1("un") && reader.word === "fin") return "A";
		if (reader.prevWord1("les") && reader.word === "Douze") return "A";
		if (reader.prevTag2("N") && reader.prevTag1("A") && reader.word === "moyenne") return "A";
		if (reader.prevTag2("V") && reader.prevTag1("A") && reader.word === "ensemble") return "ADV";
		if (reader.prevWord1("qu'") && reader.nextWord1(".")) return "ADV";
		if (reader.prevTag1("N") && reader.word === "point") return "ADV";
		if (reader.prevTag1("") && reader.word === "Douze" && reader.nextTag1("N")) return "D";
		if (reader.prevTag1("N") && reader.word === "pratique") {
			if (reader.prevWord2("l'")) return "A";
			return "V";
		}
		if (reader.word === "demande" && reader.nextTag1("D")) return "V";
		if (reader.prevTag1("N") && reader.word === "faits") return "V";
		if (reader.prevTag1("A") && reader.word === "demande") return "V";
		if (reader.prevTag1("N") && reader.word === "rencontre") return "V";
		if (reader.prevTag1("P") && reader.word === "pouvoir" && reader.nextTag1("CL")) return "V";
		if (reader.word === "table" && reader.nextTag1("ADV")) return "V";
		if (reader.prevTag1("A") && reader.word === "compte" && reader.nextTag1("D")) return "V";
		if (reader.prevTag1("PONCT") && reader.word === "revenu" && reader.nextTag1("P")) return "V";
		if (reader.word === "débouché" && reader.nextTag1("P") && reader.nextTag2("D")) return "V";
		if (reader.prevWord1(",") && reader.nextWord1("l'")) return "V";
		if (reader.nextWord1("-vous")) return "V";
		if (reader.prevWord1("chacun")) return "V";
		if (reader.prevTag1("N") && reader.word === "employés") return "V";
		if (reader.word === "cité" && reader.nextTag1("P") && reader.nextTag2("D")) return "V";
		if (reader.prevTag1("V") && reader.word === "portée") return "V";
		if (reader.prevWord1("avait")) return "V";
		if (reader.prevTag1("N") && reader.word === "contrôle") return "V";
		if (reader.suffixL4("ctÃ©")) return "V";
		if (reader.prevTag1("N") && reader.word === "conduite") return "V";
		if (reader.nextWord1("and")) return "ET";
		if (reader.prevWord2("and")) return "ET";
		if (reader.nextWord1("Act")) return "ET";
		return "N";
	}
	if (reader.tag === "P") {
		if (reader.prevTag1("P") && reader.word === "des") return "D";
		if (reader.prevTag1("V") && reader.word === "des") {
			if (reader.prevWord2("le") && reader.word === "des") return "P";
			if (reader.word === "des" && reader.nextTag1("D") && reader.nextTag2("N")) return "P";
			if (reader.prevWord1("chargé") && reader.word === "des") return "P";
			if (reader.word === "des" && reader.nextWord1("Etats---Unis")) return "P";
			if (reader.prevWord1("sortir") && reader.word === "des") return "P";
			if (reader.prevWord2("Le")) return "P";
			if (reader.prevWord1("tenir-compte") && reader.word === "des") return "P";
			if (reader.prevWord2("bien") && reader.word === "des") return "P";
			if (reader.prevWord2("la")) return "P";
			if (reader.prevWord1("tenu")) return "P";
			if (reader.prevWord1("tenant-compte") && reader.word === "des") return "P";
			if (reader.prevWord1("parler") && reader.word === "des") return "P";
			if (reader.prevWord1("agissant") && reader.word === "des") return "P";
			if (reader.prevWord1("sorti") && reader.word === "des") return "P";
			if (reader.prevWord2("l'")) return "P";
			if (reader.prevWord1("profiter") && reader.word === "des") return "P";
			if (reader.prevWord2("du")) return "P";
			if (reader.word === "des" && reader.nextWord2("saisonnières")) return "P";
			if (reader.prevWord2("seront") && reader.word === "des") return "P";
			if (reader.prevWord2("s'") && reader.prevWord1("agisse") && reader.word === "des") return "P";
			if (reader.prevWord1("fait-partie") && reader.word === "des") return "P";
			if (reader.word === "des" && reader.nextWord1("exportations")) return "P";
			if (reader.prevTag1("V") && reader.word === "des" && reader.nextTag1("PRO")) return "P";
			if (reader.prevWord2("une")) return "P";
			if (reader.word === "des" && reader.nextWord1("activités")) return "P";
			if (reader.prevWord1("informé")) return "P";
			if (reader.nextTag1("ADV")) return "P";
			if (reader.prevWord1("issu") && reader.word === "des") return "P";
			if (reader.prevWord1("bénéficient") && reader.word === "des") return "P";
			if (reader.prevWord1("exigent") && reader.word === "des") return "P";
			if (reader.prevWord1("dépend")) return "P";
			if (reader.nextWord1("pays")) return "P";
			if (reader.nextWord2("les")) return "P";
			if (reader.prevWord2("plus")) return "P";
			if (reader.prevWord1("parlant")) return "P";
			if (reader.prevWord1("relèvent")) return "P";
			if (reader.prevWord2("emploi")) return "P";
			if (reader.prevWord1("chargée")) return "P";
			if (reader.prevWord1("parle")) return "P";
			if (reader.prevWord2("de-plus-en-plus")) return "P";
			if (reader.prevWord2("de") && reader.prevWord1("bénéficier") && reader.word === "des") return "P";
			if (reader.word === "des" && reader.nextWord2("nationales")) return "P";
			if (reader.nextWord1("pouvoirs-publics")) return "P";
			if (reader.prevWord1("émanant")) return "P";
			if (reader.prevWord2("que") && reader.prevWord1("dire") && reader.word === "des") return "P";
			return "D";
		}
		if (reader.prevTag1("CL") && reader.word === "en") {
			if (reader.prevWord1("-on")) return "P";
			return "CL";
		}
		if (reader.prevTag1("PONCT") && reader.word === "des" && reader.nextTag1("N")) {
			if (reader.nextWord2("du")) return "P";
			if (reader.prevWord1("''") && reader.word === "des" && reader.nextWord1("années")) return "P";
			if (reader.nextWord1("fonctionnaires")) return "P";
			if (reader.word === "des" && reader.nextWord1("suites")) return "P";
			if (reader.word === "des" && reader.nextWord1("services-financiers") && reader.nextWord2("et")) return "P";
			if (reader.prevWord2("prix") && reader.word === "des") return "P";
			if (reader.nextWord1("syndicats")) return "P";
			if (reader.nextWord1("pays")) return "P";
			if (reader.prevWord2("pour-l'-essentiel") && reader.prevWord1(",") && reader.word === "des") return "P";
			if (reader.word === "des" && reader.nextWord2("apportées")) return "P";
			if (reader.prevWord2("%") && reader.prevWord1(")") && reader.word === "des") return "P";
			if (reader.nextWord1("sociétés")) return "P";
			if (reader.prevWord1("''") && reader.nextWord1("taux")) return "P";
			if (reader.word === "des" && reader.nextWord1("entreprises") && reader.nextWord2("et")) return "P";
			return "D";
		}
		if (reader.prevTag1("P") && reader.nextTag1("A")) {
			if (reader.suffixL2("de")) return "P";
			if (reader.word === "au" && reader.nextTag1("A")) return "P";
			if (reader.prevWord1("y-compris")) return "P";
			if (reader.nextTag2("D")) return "P";
			if (reader.nextWord2("%")) return "P";
			return "D";
		}
		if (reader.prevTag2("V") && reader.prevTag1("ADV") && reader.word === "des") {
			if (reader.prevWord2("attend")) return "P";
			if (reader.nextWord1("deux")) return "P";
			if (reader.prevWord2("bénéficient")) return "P";
			if (reader.prevWord2("parle") && reader.word === "des") return "P";
			if (reader.word === "des" && reader.nextWord2("des")) return "P";
			if (reader.prevWord2("agit") && reader.word === "des") return "P";
			if (reader.word === "des" && reader.nextWord2("et")) return "P";
			return "D";
		}
		if (reader.prevWord1("n'") && reader.word === "en") return "CL";
		if (reader.prevTag1("P") && reader.word === "en" && reader.nextTag1("V")) {
			if (reader.prevWord1("y-compris")) return "P";
			return "CL";
		}
		if (reader.prevWord1("que") && reader.word === "des") return "D";
		if (reader.word === "comme" && reader.nextTag1("D") && reader.nextTag2("V")) {
			if (reader.prevWord2("la") && reader.word === "comme") return "P";
			return "C";
		}
		if (reader.word === "comme" && reader.nextTag1("CL")) {
			if (reader.prevTag2("P")) return "P";
			return "C";
		}
		if (reader.word === "d'" && reader.nextWord1("autres")) {
			if (reader.prevWord2("la")) return "P";
			if (reader.nextWord2("produits")) return "P";
			if (reader.prevWord1("beaucoup")) return "P";
			if (reader.prevWord1("ceux")) return "P";
			return "D";
		}
		if (reader.prevTag1("PRO") && reader.word === "en" && reader.nextTag1("V")) {
			if (reader.prevWord1("Tout") && reader.word === "en") return "P";
			return "CL";
		}
		if (reader.word === "D'" && reader.nextTag1("A")) return "D";
		if (reader.word === "devant" && reader.nextTag1("V")) return "V";
		if (reader.nextWord1("a")) return "CL";
		if (reader.prevTag1("") && reader.word === "des") return "D";
		if (reader.word === "en" && reader.nextWord1("est")) return "CL";
		if (reader.word === "De" && reader.nextTag1("A") && reader.nextTag2("N")) return "D";
		if (reader.prevWord1("bien") && reader.word === "des") return "D";
		if (reader.word === "de" && reader.nextWord1("nouvelles")) {
			if (reader.prevWord2("en") && reader.word === "de") return "P";
			if (reader.prevWord2("la")) return "P";
			if (reader.prevWord2("l'")) return "P";
			if (reader.nextWord2("émissions")) return "P";
			return "D";
		}
		if (reader.word === "en" && reader.nextWord1("sont")) return "CL";
		if (reader.prevTag1("PONCT") && reader.word === "comme" && reader.nextTag1("V")) {
			if (reader.nextTag1("V") && reader.nextTag2("PONCT")) return "P";
			return "C";
		}
		if (reader.word === "de" && reader.nextWord1("nombreuses")) {
			if (reader.prevTag2("D") && reader.prevTag1("N") && reader.word === "de") return "P";
			return "D";
		}
		if (reader.word === "depuis" && reader.nextTag1("PONCT")) return "ADV";
		if (reader.word === "Comme" && reader.nextTag1("CL")) return "C";
		if (reader.word === "Comme" && reader.nextTag1("D") && reader.nextTag2("V")) return "C";
		if (reader.prevTag1("CL") && reader.word === "des" && reader.nextTag1("N")) return "D";
		if (reader.word === "du" && reader.nextWord1("mal") && reader.nextWord2("à")) return "D";
		if (reader.word === "A" && reader.nextWord2("ANS")) return "V";
		if (reader.word === "entre" && reader.nextTag1("P") && reader.nextTag2("D")) return "V";
		if (reader.prevTag2("CL") && reader.prevTag1("N") && reader.word === "des") return "D";
		if (reader.prevTag2("ADV") && reader.prevTag1("ADV") && reader.word === "des") {
			if (reader.prevWord1("loin") && reader.word === "des") return "P";
			return "D";
		}
		if (reader.prevTag2("") && reader.prevTag1("C") && reader.word === "des") return "D";
		if (reader.nextWord1("témoignent")) return "CL";
		if (reader.prevWord1("le")) {
			if (reader.nextWord1(":")) return "A";
			return "N";
		}
		if (reader.prevWord1("") && reader.word === "Depuis" && reader.nextWord1(",")) return "ADV";
		if (reader.word === "comme" && reader.nextWord1("cela")) return "C";
		if (reader.prevTag1("ADV") && reader.word === "d'" && reader.nextTag1("A")) return "D";
		if (reader.prevWord1("ainsi-que") && reader.word === "des") return "D";
		if (reader.word === "de" && reader.nextWord1("sérieuses")) return "D";
		if (reader.nextWord1(".")) {
			if (reader.prevTag2("N")) return "N";
			return "ADV";
		}
		if (reader.word === "depuis" && reader.nextTag1("V")) return "ADV";
		if (reader.prevWord1(",") && reader.word === "comme" && reader.nextWord1("en")) {
			if (reader.nextTag1("P") && reader.nextTag2("N")) return "P";
			return "C";
		}
		if (reader.nextWord1("véritables")) return "D";
		if (reader.prevWord2(",") && reader.prevWord1("et") && reader.word === "des") return "D";
		if (reader.prevTag2("D") && reader.prevTag1("C") && reader.word === "des") return "D";
		if (reader.nextWord1("nombreux")) {
			if (reader.prevTag2("D") && reader.prevTag1("N")) return "P";
			if (reader.suffixL2("de")) return "P";
			return "D";
		}
		if (reader.prevWord1(",") && reader.word === "des") {
			if (reader.prevTag1("PONCT") && reader.nextTag1("D")) return "P";
			if (reader.prevTag1("PONCT") && reader.word === "des" && reader.nextTag1("ADV")) return "P";
			if (reader.word === "des" && reader.nextWord2(".")) return "P";
			return "D";
		}
		if (reader.prevWord1("si") && reader.word === "des") return "D";
		if (reader.prevWord2("ont") && reader.prevWord1("pas") && reader.word === "de") return "D";
		if (reader.nextWord1("sera")) return "CL";
		if (reader.word === "en" && reader.nextWord1("ont")) return "CL";
		if (reader.word === "devant" && reader.nextTag1("ADV")) return "V";
		if (reader.prevTag1("V") && reader.word === "plus-d'") return "ADV";
		if (reader.nextTag1("C") && reader.nextTag2("CL")) {
			if (reader.word === "pour" && reader.nextWord1("que")) return "P";
			return "ADV";
		}
		if (reader.word === "comme" && reader.nextWord1("pour")) {
			if (reader.prevTag2("P")) return "P";
			return "C";
		}
		if (reader.word === "comme" && reader.nextWord1("d'")) return "C";
		if (reader.prevTag2("N") && reader.prevTag1("PONCT") && reader.word === "d'-où") return "C";
		if (reader.word === "d'" && reader.nextWord2("investissements")) return "D";
		if (reader.nextWord1("longs")) return "D";
		if (reader.prevWord1("connu") && reader.word === "de") return "D";
		if (reader.prevWord1("lorsque")) return "D";
		if (reader.prevWord1("subir")) return "D";
		if (reader.prevWord2("voit") && reader.word === "de") return "D";
		if (reader.prevWord1("et") && reader.word === "de" && reader.nextWord1("nouveaux")) return "D";
		if (reader.prevWord1("sur")) return "D";
		if (reader.prevWord1("enfin") && reader.word === "des") return "D";
		if (reader.prevWord1("alors-que") && reader.word === "des") return "D";
		if (reader.prevWord1("bref") && reader.word === "des") return "D";
		if (reader.prevWord2("a") && reader.prevWord1("pas") && reader.word === "de") {
			if (reader.prevTag1("ADV") && reader.nextTag1("PONCT")) return "P";
			return "D";
		}
		if (reader.prevWord1("par") && reader.word === "du") return "D";
		if (reader.prevTag1("P") && reader.word === "de" && reader.nextTag1("ADV")) return "D";
		if (reader.word === "en" && reader.nextWord1("viennent")) return "CL";
		if (reader.word === "en" && reader.nextWord1("témoigne")) return "CL";
		if (reader.word === "en" && reader.nextWord1("fut")) return "CL";
		if (reader.prevWord1("peut")) {
			if (reader.prevWord2("elle") && reader.word === "en") return "P";
			return "CL";
		}
		if (reader.word === "en" && reader.nextWord1("seraient")) return "CL";
		if (reader.word === "A" && reader.nextTag1("PONCT")) return "N";
		if (reader.prevWord1("décisions") && reader.word === "concernant") return "V";
		return "P";
	}
	if (reader.tag === "V") {
		if (reader.prevWord1("du")) return "N";
		if (reader.prevWord1("un")) {
			if (reader.prevWord2("l'")) return "V";
			if (reader.prevWord2("L'")) return "V";
			return "N";
		}
		if (reader.prevTag2("P") && reader.prevTag1("D") && reader.word === "est") {
			if (reader.prevWord2("comme") && reader.prevWord1("l'") && reader.word === "est") return "V";
			return "N";
		}
		if (reader.prevTag1("D") && reader.word === "été") return "N";
		if (reader.prevWord1("des")) return "N";
		if (reader.prevTag1("D") && reader.word === "fait") {
			if (reader.prevTag2("CL") && reader.prevTag1("D")) return "V";
			if (reader.prevWord1("le") && reader.word === "fait" && reader.nextWord1("remarquer")) return "V";
			if (reader.prevWord2("ne")) return "V";
			return "N";
		}
		if (reader.prevTag1("D") && reader.word === "reste") return "N";
		if (reader.prevWord1("une")) {
			if (reader.prevWord2("l'")) return "V";
			return "N";
		}
		if (reader.prevTag1("D") && reader.word === "risque") return "N";
		if (reader.prevWord1("an") && reader.word === "passé") return "A";
		if (reader.prevTag1("P") && reader.word === "risque") return "N";
		if (reader.prevTag1("D") && reader.word === "sommes") return "N";
		if (reader.prevTag1("D") && reader.word === "prise") return "N";
		if (reader.prevWord1("son")) return "N";
		if (reader.prevWord1("au")) return "N";
		if (reader.prevTag1("N") && reader.word === "précise" && reader.nextTag1("P")) return "A";
		if (reader.prevTag1("D") && reader.word === "porte") return "N";
		if (reader.prevTag1("D") && reader.word === "passé") return "N";
		if (reader.prevTag1("D") && reader.word === "permis") return "N";
		if (reader.prevTag1("D") && reader.word === "limite") return "N";
		if (reader.prevWord1("le") && reader.word === "devenir") return "N";
		if (reader.prevTag1("P") && reader.word === "été") return "N";
		if (reader.prevWord1("ses")) return "N";
		if (reader.prevWord1("aux")) return "N";
		if (reader.prevWord1("cette")) return "N";
		if (reader.prevTag1("D") && reader.word === "acquis") return "N";
		if (reader.prevTag1("N") && reader.word === "fixe") return "A";
		if (reader.prevWord1("filiale") && reader.word === "spécialisée") return "A";
		if (reader.word === "continue" && reader.nextTag1("P") && reader.nextTag2("N")) return "A";
		if (reader.prevTag1("D") && reader.word === "représentant") return "N";
		if (reader.prevTag2("N") && reader.prevTag1("P") && reader.word === "inscrits") return "N";
		if (reader.prevTag1("D") && reader.word === "devoir") return "N";
		if (reader.prevWord1("la") && reader.nextWord1("des")) return "N";
		if (reader.prevWord1("sa")) return "N";
		if (reader.prevWord1("L'")) return "N";
		if (reader.prevWord1("La")) return "N";
		if (reader.prevTag1("P") && reader.word === "garde") return "N";
		if (reader.prevTag1("N") && reader.word === "intéressés") return "A";
		if (reader.prevTag1("D") && reader.word === "savoir") return "N";
		if (reader.prevTag1("D") && reader.word === "intéressés" && reader.nextTag1("PONCT")) return "N";
		if (reader.prevTag1("A") && reader.word === "élève") return "N";
		if (reader.prevTag2("D") && reader.prevTag1("A") && reader.word === "risque") return "N";
		if (reader.prevWord1("René")) return "N";
		if (reader.prevWord1("d'") && reader.word === "est") return "N";
		if (reader.prevWord2("explique")) return "N";
		if (reader.prevWord1("le") && reader.nextWord1("des")) return "N";
		if (reader.prevTag1("D") && reader.word === "venue") return "N";
		if (reader.prevTag1("P") && reader.word === "reste" && reader.nextTag1("PONCT")) return "N";
		if (reader.prevTag1("ADV") && reader.word === "démunis" && reader.nextTag1("C")) return "A";
		if (reader.prevWord1("la") && reader.word === "présente") return "A";
		if (reader.prevWord2("les") && reader.word === "connus") return "A";
		if (reader.prevWord1("syndical")) return "A";
		if (reader.word === "présente" && reader.nextTag1("PONCT") && reader.nextTag2("D")) return "A";
		if (reader.word === "chargé" && reader.nextWord1("de") && reader.nextWord2("l'")) return "A";
		if (reader.word === "défini" && reader.nextTag1("PONCT")) return "A";
		if (reader.prevWord2("une") && reader.word === "précise") return "A";
		if (reader.suffixL4("vÃ©e")) return "A";
		if (reader.word === "satisfait" && reader.nextTag1("PONCT")) return "A";
		if (reader.prevWord1("la") && reader.nextWord1("qu'")) return "N";
		if (reader.prevTag1("D") && reader.word === "retenue") return "N";
		if (reader.prevWord1("Michel")) return "N";
		if (reader.prevTag1("PONCT") && reader.word === "invité") return "N";
		if (reader.prevTag1("D") && reader.word === "blessés" && reader.nextTag1("PONCT")) return "N";
		if (reader.prevTag1("D") && reader.word === "prises" && reader.nextTag1("P")) return "N";
		if (reader.prevWord1("la") && reader.nextWord1("(")) return "N";
		if (reader.prevWord1("Une")) return "N";
		if (reader.prevWord1("Le")) return "N";
		if (reader.prevWord1("le") && reader.nextWord1("du")) return "N";
		if (reader.word === "conserve" && reader.nextWord1(",")) return "N";
		if (reader.prevWord1("l'") && reader.nextWord1("des")) return "N";
		if (reader.prevWord1("M.")) return "N";
		if (reader.prevWord1("quelques")) {
			if (reader.suffixL2("us")) return "A";
			return "N";
		}
		if (reader.prevTag1("V") && reader.word === "voici") return "P";
		return "V";
	}
	if (reader.tag === "ET") return "ET";
	if (reader.tag === "PONCT") {
		if (reader.word === "-" && reader.nextWord2("%")) {
			if (reader.prevTag1("N") && reader.word === "-") return "PONCT";
			if (reader.prevWord2("lundi") && reader.word === "-") return "ADV";
			if (reader.word === "-" && reader.nextWord1("0-,-4") && reader.nextWord2("%")) return "ADV";
			if (reader.word === "-" && reader.nextWord1("9")) return "ADV";
			if (reader.prevWord2("francs")) return "ADV";
			if (reader.prevTag1("A")) return "PONCT";
			return "P";
		}
		if (reader.prevWord1("km") && reader.word === "/") return "C";
		if (reader.word === "/" && reader.nextWord1("jour")) return "P";
		if (reader.prevWord1("bls")) return "P";
		return "PONCT";
	}
	return "NN";
};