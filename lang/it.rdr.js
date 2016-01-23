/**
 * File Generated From data/pos/italian.rdr at Sat Jan 23 2016 20:41:24 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(reader) {
	if (reader.tag === "FS") {
		if (reader.prevTag1("N") && reader.word === "." && reader.nextTag1("S")) return "FF";
		return "FS";
	}
	if (reader.tag === "DI") {
		if (reader.nextTag1("EA")) return "PI";
		if (reader.prevTag1("S") && reader.word === "diversi") return "A";
		if (reader.prevTag1("RD")) return "A";
		if (reader.nextTag1("E")) {
			if (reader.word === "diversi" && reader.nextTag1("E")) return "A";
			if (reader.word === "qualche") return "DI";
			if (reader.prevTag1("V") && reader.word === "determinate") return "V";
			return "PI";
		}
		if (reader.nextTag2("")) {
			if (reader.prevTag1("S")) return "A";
			return "PI";
		}
		if (reader.word === "molti" && reader.nextWord1(",")) return "PI";
		if (reader.nextTag1("V") && reader.nextTag2("PR")) return "PI";
		if (reader.nextTag1("CC")) return "PI";
		return "DI";
	}
	if (reader.tag === "BN") {
		if (reader.prevTag1("CC") && reader.word === "nemmeno") return "B";
		return "BN";
	}
	if (reader.tag === "Sms") return "Sms";
	if (reader.tag === "DD") {
		if (reader.nextTag1("V")) {
			if (reader.suffixL4("")) return "DD";
			return "PD";
		}
		if (reader.nextTag1("RD")) return "PD";
		if (reader.nextWord1(",")) return "PD";
		if (reader.nextTag1("PC")) return "PD";
		if (reader.nextWord1("non")) return "PD";
		if (reader.nextTag1("VA")) return "PD";
		if (reader.nextTag1("VM")) return "PD";
		if (reader.nextTag1("PR")) return "PD";
		if (reader.nextTag1("RI")) return "PD";
		if (reader.word === "questo" && reader.nextTag1("CC")) return "PD";
		if (reader.word === "questo" && reader.nextTag1("E")) {
			if (reader.word === "questo" && reader.nextTag1("E") && reader.nextTag2("S")) return "DD";
			return "PD";
		}
		return "DD";
	}
	if (reader.tag === "FB") {
		if (reader.prevWord2("") && reader.word === ")") {
			if (reader.word === ")" && reader.nextWord1("che")) return "FB";
			if (reader.word === ")" && reader.nextTag1("S") && reader.nextTag2("EA")) return "FB";
			if (reader.word === ")" && reader.nextWord1("Per")) return "FB";
			return "FF";
		}
		return "FB";
	}
	if (reader.tag === "FC") return "FC";
	if (reader.tag === "FF") {
		if (reader.word === "-" && reader.nextTag1("V")) {
			if (reader.prevTag2("") && reader.prevTag1("SP")) return "FF";
			if (reader.prevTag2("V") && reader.prevTag1("A")) return "FF";
			if (reader.prevTag2("SP") && reader.prevTag1("FB") && reader.word === "-") return "FF";
			if (reader.word === "-" && reader.nextWord1("fornire")) return "FF";
			return "FB";
		}
		if (reader.prevTag1("V") && reader.word === "-") {
			if (reader.nextWord1("se")) return "FF";
			return "FB";
		}
		if (reader.word === "-" && reader.nextTag1("FS") && reader.nextTag2("")) return "FB";
		if (reader.word === "-" && reader.nextWord1("che")) return "FB";
		if (reader.prevTag2("E") && reader.prevTag1("SP") && reader.word === "-") return "FB";
		if (reader.prevTag1("S") && reader.word === "-" && reader.nextTag1("E")) return "FB";
		if (reader.nextWord1(",")) return "FB";
		if (reader.word === "-" && reader.nextTag1("VA")) {
			if (reader.nextWord2("dichiarato")) return "FF";
			return "FB";
		}
		if (reader.word === "-" && reader.nextWord1("e")) return "FB";
		if (reader.word === "-" && reader.nextWord1("si")) return "FB";
		if (reader.word === "-" && reader.nextTag1("EA") && reader.nextTag2("S")) return "FB";
		if (reader.word === "-" && reader.nextTag1("B")) {
			if (reader.prevTag2("")) return "FF";
			return "FB";
		}
		if (reader.prevTag1("B") && reader.word === "-") return "FB";
		if (reader.prevWord1("che") && reader.word === "-") return "FB";
		if (reader.prevWord1("Ante") && reader.word === "-") return "FB";
		return "FF";
	}
	if (reader.tag === "Vis3s") return "Vis3s";
	if (reader.tag === "DT") return "DT";
	if (reader.tag === "DQ") {
		if (reader.prevTag1("EA")) return "PR";
		if (reader.prevTag1("") && reader.nextTag1("V")) {
			if (reader.prevWord1("") && reader.word === "Quanti" && reader.nextWord1("posti")) return "DQ";
			return "PQ";
		}
		if (reader.prevTag1("RD") && reader.word === "quale") return "PR";
		if (reader.prevTag1("") && reader.word === "Che" && reader.nextTag1("VA")) return "PQ";
		return "DQ";
	}
	if (reader.tag === "PR") {
		if (reader.prevTag1("V") && reader.word === "che") {
			if (reader.word === "che" && reader.nextWord2("da")) return "PR";
			return "CS";
		}
		if (reader.prevTag1("E") && reader.word === "che") {
			if (reader.prevTag1("E") && reader.nextTag1("V")) return "CS";
			if (reader.prevWord1("senza")) return "CS";
			if (reader.prevWord1("dopo")) return "CS";
			return "DQ";
		}
		if (reader.prevTag1("B") && reader.word === "che") {
			if (reader.prevWord1("piuttosto") && reader.word === "che") return "E";
			return "CS";
		}
		if (reader.prevTag2("V") && reader.prevTag1("A") && reader.word === "che") return "CS";
		if (reader.word === "cui" && reader.nextTag1("S")) {
			if (reader.prevTag1("E") && reader.nextTag1("S")) return "PR";
			return "DR";
		}
		if (reader.prevTag2("") && reader.prevTag1("E")) {
			if (reader.word === "quanto" && reader.nextWord1("tempo")) return "DQ";
			if (reader.nextTag1("V") && reader.nextTag2("E")) return "PR";
			return "PQ";
		}
		if (reader.prevWord1("in") && reader.word === "quanto") return "B";
		if (reader.word === "che" && reader.nextTag1("RD") && reader.nextTag2("S")) {
			if (reader.prevTag1("PD") && reader.nextTag1("RD")) return "PR";
			if (reader.prevWord2("di")) return "PR";
			if (reader.prevWord2("Il")) return "PR";
			if (reader.prevTag2("S") && reader.prevTag1("FB") && reader.word === "che") return "PR";
			return "CS";
		}
		if (reader.prevWord1("prima") && reader.word === "che") return "CS";
		if (reader.word === "che" && reader.nextTag1("RD") && reader.nextTag2("AP")) return "CS";
		if (reader.prevTag1("VM") && reader.word === "che") return "CS";
		if (reader.prevWord1("volta") && reader.word === "che") return "CS";
		if (reader.prevTag1("BN")) return "CS";
		if (reader.prevWord1("caso") && reader.word === "che") return "CS";
		if (reader.word === "quali" && reader.nextTag1("S")) {
			if (reader.prevTag1("FF") && reader.word === "quali") return "DQ";
			return "DT";
		}
		if (reader.prevWord1(",") && reader.word === "che" && reader.nextWord1("cosa")) return "DQ";
		if (reader.prevWord1(",") && reader.word === "quanto") return "B";
		if (reader.prevTag1("A") && reader.word === "quanto") return "B";
		if (reader.prevTag1("S") && reader.word === "quali" && reader.nextTag1("RD")) return "E";
		if (reader.prevWord1("Altro") && reader.word === "che") return "E";
		if (reader.prevWord1("momento")) return "CS";
		if (reader.prevWord1("conto") && reader.word === "che") return "CS";
		return "PR";
	}
	if (reader.tag === "PQ") {
		if (reader.word === "Quanto" && reader.nextWord1("dista")) return "B";
		if (reader.prevTag1("") && reader.word === "Chi" && reader.nextTag1("VM")) return "PR";
		if (reader.prevTag1("") && reader.nextTag1("EA")) return "B";
		return "PQ";
	}
	if (reader.tag === "NO") {
		if (reader.word === "prima" && reader.nextTag1("E")) {
			if (reader.prevTag1("RD") && reader.nextTag1("E")) return "NO";
			return "B";
		}
		if (reader.word === "prima" && reader.nextTag1("EA")) return "B";
		if (reader.prevTag1("S") && reader.word === "prima") return "B";
		if (reader.prevTag1("V") && reader.word === "prima") return "B";
		if (reader.word === "prima" && reader.nextWord1("ancora")) return "B";
		return "NO";
	}
	if (reader.tag === "RD") {
		if (reader.nextTag1("VA")) {
			if (reader.prevTag2("DQ") && reader.prevTag1("V")) return "RD";
			return "PC";
		}
		if (reader.word === "gli" && reader.nextTag1("V")) {
			if (reader.prevTag2("") && reader.prevTag1("E")) return "RD";
			return "PC";
		}
		if (reader.nextTag1("V") && reader.nextTag2("B")) {
			if (reader.prevTag1("E") && reader.nextTag1("V")) return "RD";
			return "PC";
		}
		if (reader.prevTag1("V") && reader.nextTag1("E")) {
			if (reader.word === "il") return "RD";
			return "PC";
		}
		if (reader.nextTag1("RD")) return "PC";
		if (reader.nextTag1("VM")) return "PC";
		if (reader.nextTag1("EA")) return "PC";
		if (reader.nextTag1("FS")) return "PC";
		if (reader.prevWord1("far-")) return "PC";
		if (reader.prevTag1("SP") && reader.nextTag1("SP")) {
			if (reader.word === "il") return "RD";
			return "SP";
		}
		if (reader.prevTag1("V") && reader.nextTag1("FF")) return "PC";
		if (reader.nextTag1("PC")) return "PC";
		if (reader.prevTag1("CS") && reader.nextTag1("V")) return "PC";
		if (reader.prevTag1("PE") && reader.nextTag1("V")) return "PC";
		if (reader.prevTag1("FF") && reader.word === "la" && reader.nextTag1("V")) return "PC";
		if (reader.prevTag1("V") && reader.word === "le" && reader.nextTag1("B")) return "PC";
		if (reader.word === "la" && reader.nextTag1("V") && reader.nextTag2("E")) return "PC";
		if (reader.word === "Lo" && reader.nextTag1("V")) return "PC";
		if (reader.prevTag1("S") && reader.word === "I") return "NO";
		if (reader.nextWord1("vide")) return "PC";
		if (reader.prevTag1("PR") && reader.nextTag1("V")) {
			if (reader.prevTag2("E") && reader.prevTag1("PR")) return "RD";
			return "PC";
		}
		if (reader.word === "le" && reader.nextTag1("V") && reader.nextTag2("V")) return "PC";
		if (reader.word === "la" && reader.nextTag1("B") && reader.nextTag2("FS")) return "PC";
		if (reader.prevWord1("pour") && reader.word === "le") return "S";
		return "RD";
	}
	if (reader.tag === "PC") {
		if (reader.word === "lo" && reader.nextTag1("S")) return "RD";
		if (reader.word === "lo" && reader.nextTag1("A")) {
			if (reader.prevWord1("render-") && reader.word === "lo") return "PC";
			return "RD";
		}
		if (reader.word === "lo" && reader.nextTag1("SP")) return "RD";
		if (reader.prevTag1("E") && reader.word === "lo") return "RD";
		if (reader.word === "lo" && reader.nextWord1("stato")) return "RD";
		return "PC";
	}
	if (reader.tag === "Vm2s") return "Vm2s";
	if (reader.tag === "PE") return "PE";
	if (reader.tag === "PI") {
		if (reader.nextTag1("S")) {
			if (reader.suffixL3("tri")) return "A";
			if (reader.suffixL4("utto")) return "DI";
			if (reader.prevTag2("") && reader.prevTag1("") && reader.word === "Altro") return "DI";
			if (reader.suffixL2("te")) return "DI";
			return "RI";
		}
		if (reader.nextWord1("il")) return "T";
		if (reader.nextTag1("PD")) {
			if (reader.prevWord1("con")) return "T";
			return "A";
		}
		if (reader.nextWord1("stato")) return "RI";
		if (reader.word === "Tutti" && reader.nextTag1("RD")) return "T";
		if (reader.word === "uno" && reader.nextTag1("A")) return "RI";
		if (reader.word === "uno" && reader.nextTag1("SP")) return "RI";
		return "PI";
	}
	if (reader.tag === "RI") {
		if (reader.nextTag1("EA")) return "PI";
		if (reader.word === "una" && reader.nextTag1("E")) return "PI";
		if (reader.nextTag1("FF")) return "PI";
		return "RI";
	}
	if (reader.tag === "A") {
		if (reader.prevTag1("RD") && reader.nextTag1("E")) {
			if (reader.prevTag1("RD") && reader.word === "altro" && reader.nextTag1("E")) return "PI";
			return "S";
		}
		if (reader.prevTag1("EA") && reader.nextTag1("FF")) {
			if (reader.suffixL3("tri")) return "PI";
			if (reader.prevTag1("EA") && reader.word === "altra" && reader.nextTag1("FF")) return "PI";
			if (reader.prevWord2("rispetto")) return "A";
			if (reader.prevWord1("all'") && reader.word === "altro") return "PI";
			if (reader.prevTag2("SP")) return "SP";
			return "S";
		}
		if (reader.prevTag1("EA") && reader.nextTag1("FS")) {
			if (reader.prevTag1("EA") && reader.word === "altro" && reader.nextTag1("FS")) return "PI";
			if (reader.prevWord1("del") && reader.nextWord1("?")) return "SP";
			if (reader.suffixL3("ali")) return "A";
			if (reader.suffixL2("sa")) return "SP";
			return "S";
		}
		if (reader.prevTag1("EA") && reader.nextTag1("E")) {
			if (reader.suffixL2("na")) return "A";
			return "S";
		}
		if (reader.prevTag1("EA") && reader.nextTag1("EA")) {
			if (reader.suffixL2("ri")) return "A";
			return "S";
		}
		if (reader.prevTag1("RD") && reader.nextTag1("EA")) {
			if (reader.suffixL3("oli")) return "A";
			return "S";
		}
		if (reader.prevTag1("RD") && reader.nextTag1("FS")) return "S";
		if (reader.prevTag1("E") && reader.nextTag1("FF")) {
			if (reader.suffixL3("tri")) return "PI";
			if (reader.prevTag1("E") && reader.word === "nuovo") return "A";
			if (reader.suffixL3("iva")) return "SP";
			return "S";
		}
		if (reader.prevTag1("RI") && reader.nextTag1("E")) return "S";
		if (reader.word === "lungo" && reader.nextTag1("RD")) {
			if (reader.prevTag2("PQ") && reader.prevTag1("V") && reader.word === "lungo") return "A";
			if (reader.prevTag1("E") && reader.nextTag1("RD")) return "A";
			return "E";
		}
		if (reader.prevTag1("RD") && reader.nextTag1("FF")) {
			if (reader.prevWord1("le")) return "A";
			if (reader.suffixL2("la")) return "A";
			if (reader.prevWord2("e")) return "PI";
			if (reader.word === "altro") return "PI";
			return "S";
		}
		if (reader.prevTag1("RI") && reader.nextTag1("FS")) {
			if (reader.suffixL4("ltra")) return "PI";
			return "S";
		}
		if (reader.prevTag1("E") && reader.nextTag1("FS")) {
			if (reader.prevWord1("in") && reader.word === "spagnolo") return "A";
			if (reader.prevWord1("da") && reader.word === "sola" && reader.nextWord1("?")) return "A";
			if (reader.prevWord1("di") && reader.nextWord1("?")) return "SP";
			return "S";
		}
		if (reader.prevTag1("RD") && reader.nextTag1("B")) {
			if (reader.nextWord1("anche")) return "PI";
			if (reader.word === "altro" && reader.nextTag1("B")) return "DI";
			return "S";
		}
		if (reader.prevTag1("RD") && reader.nextTag1("VA")) return "S";
		if (reader.prevTag1("E") && reader.nextTag1("CC")) {
			if (reader.suffixL2("le")) return "A";
			if (reader.word === "vera") return "A";
			if (reader.nextTag1("CC") && reader.nextTag2("V")) return "SP";
			return "S";
		}
		if (reader.prevTag1("RD") && reader.nextTag1("A")) {
			if (reader.prevTag2("FF") && reader.prevTag1("RD")) return "A";
			if (reader.nextTag2("S")) return "A";
			if (reader.nextWord2(".")) return "A";
			if (reader.prevWord2("e")) return "PI";
			return "S";
		}
		if (reader.prevWord1("in") && reader.word === "inglese") return "S";
		if (reader.prevTag1("EA") && reader.nextTag1("CC")) {
			if (reader.suffixL4("cole")) return "A";
			if (reader.prevWord1("degli") && reader.word === "interessati") return "A";
			return "S";
		}
		if (reader.prevTag1("EA") && reader.nextTag1("A")) {
			if (reader.prevTag1("EA") && reader.word === "serbo") return "A";
			if (reader.suffixL4("uovo")) return "A";
			if (reader.suffixL4("uovi")) return "A";
			if (reader.suffixL2("na")) return "A";
			if (reader.prevWord1("degli")) return "A";
			if (reader.suffixL2("ro")) return "A";
			return "S";
		}
		if (reader.prevWord1("Unione")) return "SP";
		if (reader.prevTag1("E") && reader.nextTag1("E")) {
			if (reader.nextWord1("a")) return "A";
			if (reader.suffixL3("tri")) return "PI";
			return "S";
		}
		if (reader.prevTag1("N") && reader.nextTag1("FF")) return "S";
		if (reader.prevTag2("RI") && reader.prevTag1("A")) {
			if (reader.prevTag1("A") && reader.nextTag1("S")) return "A";
			if (reader.suffixL3("nta")) return "A";
			return "S";
		}
		if (reader.prevTag1("RD") && reader.nextTag1("PC")) return "S";
		if (reader.prevWord1("si")) {
			if (reader.prevTag2("V") && reader.prevTag1("PC")) return "A";
			return "V";
		}
		if (reader.word === "altri" && reader.nextTag1("N")) return "DI";
		if (reader.prevTag1("EA") && reader.word === "italiani") return "S";
		if (reader.prevTag1("RD") && reader.nextTag1("PR")) {
			if (reader.suffixL2("sa")) return "PD";
			return "S";
		}
		if (reader.prevTag1("EA") && reader.nextTag1("FC")) return "S";
		if (reader.prevTag1("RD") && reader.nextTag1("FC")) return "S";
		if (reader.prevTag1("PR") && reader.nextTag1("RD")) return "V";
		if (reader.prevWord1("i") && reader.nextWord1("e")) return "S";
		if (reader.prevTag1("DD") && reader.word === "tecnica") return "S";
		if (reader.prevTag1("RD") && reader.nextTag1("V")) {
			if (reader.prevWord1("la")) return "A";
			if (reader.prevTag1("RD") && reader.word === "altri" && reader.nextTag1("V")) return "PI";
			if (reader.prevTag2("E") && reader.prevTag1("RD") && reader.word === "altro") return "PI";
			return "S";
		}
		if (reader.prevTag1("RI") && reader.word === "tecnica") return "S";
		if (reader.prevTag1("RD") && reader.nextTag1("BN")) {
			if (reader.word === "altri" && reader.nextWord1("non") && reader.nextWord2("dispongono")) return "PI";
			return "S";
		}
		if (reader.word === "regolare" && reader.nextTag1("RD")) return "V";
		if (reader.prevTag2("V") && reader.prevTag1("SP")) return "SP";
		if (reader.prevWord1("in") && reader.word === "altre") return "DI";
		if (reader.prevTag1("B") && reader.word === "altre") return "DI";
		if (reader.prevWord1("D'")) return "DI";
		if (reader.prevWord2("di") && reader.prevWord1("questi") && reader.word === "ultimi") return "NO";
		if (reader.word === "altri" && reader.nextTag1("FB")) return "PI";
		if (reader.prevTag2("CC") && reader.prevTag1("RI") && reader.word === "altra") return "PI";
		if (reader.word === "altri" && reader.nextWord1("che")) return "PI";
		if (reader.prevTag1("S") && reader.word === "anti" && reader.nextTag1("FF")) {
			if (reader.nextTag1("FF") && reader.nextTag2("Sms")) return "Ann";
			return "E";
		}
		if (reader.prevTag1("EA") && reader.nextTag1("BN")) return "S";
		if (reader.prevTag1("EA") && reader.nextTag1("VM")) return "S";
		if (reader.word === "caro" && reader.nextWord1("università")) return "S";
		if (reader.prevTag1("EA") && reader.nextTag1("V")) {
			if (reader.suffixL2("re")) return "A";
			if (reader.suffixL4("")) return "A";
			if (reader.nextTag2("SP")) return "A";
			return "S";
		}
		if (reader.prevTag1("DI") && reader.nextTag1("FF")) return "S";
		if (reader.prevTag1("E") && reader.nextTag1("PR")) return "S";
		if (reader.prevTag1("RI") && reader.nextTag1("PR")) return "S";
		if (reader.prevWord1("nuovi")) return "S";
		if (reader.prevTag1("DQ") && reader.nextTag1("V")) return "S";
		if (reader.prevTag2("") && reader.prevTag1("N")) return "S";
		if (reader.prevTag1("EA") && reader.nextTag1("RD")) return "S";
		if (reader.prevTag1("EA") && reader.nextTag1("PR")) return "S";
		if (reader.prevTag1("EA") && reader.nextTag1("VA")) return "S";
		if (reader.prevTag1("E") && reader.nextTag1("V")) {
			if (reader.prevWord1("in")) return "A";
			return "S";
		}
		if (reader.prevTag1("CS") && reader.nextTag1("EA")) return "V";
		if (reader.prevWord1("hanno")) return "V";
		if (reader.prevWord1("viene")) return "V";
		if (reader.prevTag2("FF") && reader.prevTag1("SP")) return "SP";
		if (reader.prevWord1(";")) return "SP";
		if (reader.prevWord1("Rivoluzione")) return "SP";
		if (reader.word === "San" && reader.nextWord2("?")) return "SP";
		return "A";
	}
	if (reader.tag === "VA") {
		if (reader.nextTag2("S")) {
			if (reader.word === "ha" && reader.nextTag1("V") && reader.nextTag2("S")) return "VA";
			if (reader.word === "hanno" && reader.nextTag1("V")) return "VA";
			if (reader.word === "stato" && reader.nextWord1("di")) return "S";
			if (reader.word === "stati" && reader.nextTag1("V") && reader.nextTag2("S")) return "VA";
			if (reader.prevTag1("EA")) return "S";
			if (reader.word === "viene" && reader.nextTag1("V")) return "VA";
			if (reader.prevTag1("PR") && reader.nextTag1("V")) return "VA";
			if (reader.word === "sia" && reader.nextTag1("EA") && reader.nextTag2("S")) return "CC";
			if (reader.nextWord1("più")) return "VA";
			if (reader.prevTag1("PC") && reader.nextTag1("V")) return "VA";
			if (reader.word === "sia" && reader.nextWord1("i")) return "CC";
			if (reader.prevTag1("FB") && reader.nextTag1("V")) return "VA";
			if (reader.suffixL3("nne")) return "VA";
			if (reader.prevTag1("PC") && reader.nextTag1("VA")) return "VA";
			if (reader.prevWord2("Io")) return "VA";
			if (reader.word === "essere" && reader.nextTag1("V")) return "VA";
			if (reader.prevWord1(",") && reader.word === "sia" && reader.nextWord1("per")) return "CC";
			if (reader.prevTag1("V") && reader.word === "sia" && reader.nextTag1("E")) return "CC";
			if (reader.word === "aver") return "VA";
			if (reader.prevTag2("PQ")) return "VA";
			if (reader.prevTag1("S") && reader.nextTag1("V")) return "VA";
			if (reader.prevWord1("gli")) return "VA";
			if (reader.nextWord1("da")) return "VA";
			if (reader.word === "stato" && reader.nextWord1("dei")) return "S";
			return "V";
		}
		if (reader.nextTag1("RD")) return "V";
		if (reader.nextTag1("A")) {
			if (reader.prevTag1("DQ") && reader.word === "stato" && reader.nextTag1("A")) return "S";
			if (reader.word === "viene") return "VA";
			if (reader.prevTag1("RD")) return "VA";
			if (reader.prevTag1("FF") && reader.word === "ha") return "VA";
			if (reader.prevTag1("PC")) return "VA";
			if (reader.prevTag1("SP")) return "VA";
			if (reader.prevTag1("V") && reader.word === "state" && reader.nextTag1("A")) return "VA";
			if (reader.nextWord2("la")) return "VA";
			if (reader.nextWord1("maggiore")) return "S";
			if (reader.word === "stati" && reader.nextWord1("americani")) return "S";
			return "V";
		}
		if (reader.nextTag1("E")) {
			if (reader.word === "sia" && reader.nextWord1("per")) return "CC";
			if (reader.nextTag1("E") && reader.nextTag2("PD")) return "CC";
			if (reader.word === "sia" && reader.nextTag1("E") && reader.nextTag2("SP")) return "CC";
			if (reader.prevTag1("N") && reader.word === "avevano") return "VA";
			if (reader.prevTag2("S") && reader.prevTag1("SP")) return "VA";
			if (reader.prevTag1("EA") && reader.word === "stato" && reader.nextTag1("E")) return "S";
			return "V";
		}
		if (reader.nextTag1("S")) {
			if (reader.prevTag1("RD") && reader.nextTag1("S")) {
				if (reader.word === "stati" && reader.nextTag1("S")) return "S";
				return "VA";
			}
			if (reader.word === "stata" && reader.nextTag1("S") && reader.nextTag2("E")) return "VA";
			if (reader.suffixL2("ne")) return "VA";
			if (reader.suffixL3("ono")) return "VA";
			if (reader.nextWord2("la")) return "VA";
			if (reader.nextWord2("come")) return "VA";
			if (reader.nextWord1("corso")) return "VA";
			if (reader.nextWord1("mandato")) return "VA";
			if (reader.nextWord1("messe")) return "VA";
			if (reader.prevTag1("E") && reader.word === "aver" && reader.nextTag1("S")) return "VA";
			if (reader.nextWord1("percorso")) return "VA";
			if (reader.nextWord2("con")) return "VA";
			if (reader.word === "stati" && reader.nextWord2("da")) return "VA";
			if (reader.word === "essere" && reader.nextWord2("in")) return "VA";
			if (reader.word === "ha" && reader.nextWord1("prodotto")) return "VA";
			if (reader.prevWord1("si")) return "VA";
			if (reader.word === "essere" && reader.nextTag1("S") && reader.nextTag2("EA")) return "VA";
			if (reader.prevWord1("cosa")) return "VA";
			if (reader.nextWord1("tratto")) return "VA";
			if (reader.nextWord1("resa")) return "VA";
			if (reader.prevTag1("DQ") && reader.nextTag1("S")) return "S";
			return "V";
		}
		if (reader.nextTag1("SP")) return "V";
		if (reader.nextTag1("RI")) return "V";
		if (reader.nextTag1("B") && reader.nextTag2("A")) return "V";
		if (reader.nextTag1("B") && reader.nextTag2("RI")) return "V";
		if (reader.nextTag1("B") && reader.nextTag2("E")) return "V";
		if (reader.nextTag1("PI")) return "V";
		if (reader.nextWord2("")) {
			if (reader.prevWord1("uno") && reader.nextWord1("?")) return "S";
			return "V";
		}
		if (reader.nextTag1("FF")) return "V";
		if (reader.prevTag1("DQ") && reader.word === "stato") return "S";
		if (reader.nextTag1("PD")) return "V";
		if (reader.nextTag1("EA")) {
			if (reader.word === "sia" && reader.nextTag1("EA")) return "CC";
			return "V";
		}
		if (reader.nextTag1("B") && reader.nextTag2("RD")) {
			if (reader.nextWord1("subito")) return "VA";
			return "V";
		}
		if (reader.nextTag1("DI")) return "V";
		if (reader.nextTag1("B") && reader.nextTag2("B")) return "V";
		if (reader.nextTag1("T") && reader.nextTag2("RD")) return "V";
		if (reader.prevTag1("VM") && reader.nextTag1("PC")) return "V";
		if (reader.nextTag1("N")) return "V";
		if (reader.prevTag2("PC") && reader.prevTag1("V")) return "V";
		if (reader.nextWord1("meglio")) return "V";
		if (reader.nextTag1("PE")) return "V";
		if (reader.nextTag1("B") && reader.nextTag2("FF")) return "V";
		if (reader.nextTag1("DD")) return "V";
		if (reader.word === "essere" && reader.nextWord1("''")) return "V";
		if (reader.nextTag1("B") && reader.nextTag2("FB")) return "V";
		return "VA";
	}
	if (reader.tag === "B") {
		if (reader.word === "proprio" && reader.nextTag1("S")) {
			if (reader.prevWord2("vero")) return "A";
			return "AP";
		}
		if (reader.word === "oltre" && reader.nextTag1("RD")) return "E";
		if (reader.prevTag1("RI") && reader.nextTag1("S")) {
			if (reader.word === "po'") return "B";
			if (reader.prevWord2("per") && reader.word === "certo") return "DI";
			return "A";
		}
		if (reader.prevWord1("un") && reader.nextWord1("di")) return "S";
		if (reader.word === "poco" && reader.nextTag1("S")) return "DI";
		if (reader.prevTag1("RD") && reader.word === "ora") return "S";
		if (reader.word === "bene" && reader.nextTag1("A")) return "S";
		if (reader.prevTag1("DI")) return "S";
		if (reader.prevTag1("RD") && reader.word === "solo") return "A";
		if (reader.prevTag1("E") && reader.word === "più" && reader.nextTag1("S")) return "DI";
		if (reader.prevTag2("S") && reader.prevTag1("E") && reader.word === "oggi") {
			if (reader.nextTag2("S")) return "B";
			return "S";
		}
		if (reader.word === "salvo" && reader.nextTag1("RD") && reader.nextTag2("S")) return "A";
		if (reader.word === "salvo" && reader.nextTag1("PR") && reader.nextTag2("V")) return "E";
		if (reader.prevTag1("RI") && reader.word === "ora") return "S";
		if (reader.prevTag1("EA") && reader.word === "ora") return "S";
		if (reader.prevTag2("E") && reader.prevTag1("PC")) return "S";
		if (reader.word === "rispetto" && reader.nextWord1("dei")) return "S";
		if (reader.prevTag1("EA") && reader.word === "bene") return "S";
		if (reader.word === "Quando" && reader.nextTag1("RD") && reader.nextTag2("S")) {
			if (reader.prevWord1("") && reader.nextWord1("i")) return "B";
			return "CS";
		}
		if (reader.prevWord2("uno") && reader.prevWord1("o") && reader.word === "più") return "PI";
		if (reader.prevTag1("E") && reader.word === "solo") return "A";
		if (reader.prevWord1("è") && reader.word === "lontano") return "A";
		if (reader.word === "fuori" && reader.nextWord2(",")) return "E";
		if (reader.prevTag1("CC") && reader.word === "più" && reader.nextTag1("S")) return "DI";
		if (reader.prevWord2("quarto") && reader.prevWord1("d'") && reader.word === "ora") return "S";
		if (reader.prevTag1("RD") && reader.word === "insieme") return "S";
		if (reader.word === "po'" && reader.nextWord1("più")) return "S";
		if (reader.prevWord1("in") && reader.word === "salvo") return "S";
		if (reader.prevTag1("EA") && reader.word === "insieme") return "S";
		if (reader.prevTag1("A") && reader.word === "ora") return "S";
		if (reader.prevWord1("in") && reader.word === "avanti") return "S";
		if (reader.prevTag1("A") && reader.word === "oggi") return "S";
		if (reader.prevTag1("EA") && reader.word === "rispetto") return "S";
		if (reader.prevTag1("VA") && reader.word === "subito" && reader.nextTag1("RD")) return "V";
		if (reader.prevTag1("") && reader.word === "Quando" && reader.nextTag1("B")) return "CS";
		if (reader.word === "Quando" && reader.nextWord1("una")) return "CS";
		if (reader.word === "meno" && reader.nextTag1("E") && reader.nextTag2("N")) return "PI";
		return "B";
	}
	if (reader.tag === "E") {
		if (reader.word === "come" && reader.nextTag1("V")) {
			if (reader.word === "come" && reader.nextWord1("dire")) return "B";
			if (reader.prevTag1("SP")) return "B";
			return "CS";
		}
		if (reader.word === "secondo" && reader.nextTag1("S")) return "NO";
		if (reader.word === "dopo" && reader.nextTag1("VA")) return "CS";
		if (reader.nextWord1(",")) {
			if (reader.word === "come" && reader.nextWord2("ad")) return "E";
			if (reader.word === "secondo") return "NO";
			return "B";
		}
		if (reader.word === "come" && reader.nextTag1("CS")) return "B";
		if (reader.word === "come" && reader.nextTag1("VA")) return "CS";
		if (reader.nextTag1("EA")) {
			if (reader.word === "verso" && reader.nextTag1("EA") && reader.nextTag2("S")) return "S";
			if (reader.word === "di") return "E";
			if (reader.word === "con" && reader.nextTag1("EA") && reader.nextTag2("S")) return "E";
			return "B";
		}
		if (reader.nextTag1("FS")) {
			if (reader.word === "A" && reader.nextTag1("FS") && reader.nextTag2("")) return "SP";
			return "B";
		}
		if (reader.word === "A" && reader.nextWord2("?")) return "SP";
		if (reader.word === "come" && reader.nextTag1("PC")) {
			if (reader.prevTag1("CC") && reader.word === "come" && reader.nextTag1("PC")) return "B";
			return "CS";
		}
		if (reader.word === "come" && reader.nextTag1("VM")) return "B";
		if (reader.prevWord1("di")) return "B";
		if (reader.nextWord1(")")) {
			if (reader.prevWord1("") && reader.nextWord1(")")) return "X";
			return "B";
		}
		if (reader.word === "come" && reader.nextTag1("E")) return "B";
		if (reader.prevTag1("RD") && reader.word === "secondo") return "NO";
		if (reader.nextWord1("Lascia")) return "SP";
		if (reader.prevTag2("E") && reader.prevTag1("S") && reader.word === "A") return "SP";
		if (reader.word === "D'" && reader.nextTag1("SP")) return "SP";
		if (reader.word === "A" && reader.nextTag1("X")) return "SP";
		if (reader.word === "come" && reader.nextWord1("non")) return "CS";
		if (reader.prevTag1("") && reader.nextTag1("VA")) return "CS";
		if (reader.word === "dietro" && reader.nextWord1("una")) return "B";
		if (reader.word === "contro" && reader.nextWord1("di")) return "B";
		if (reader.word === "come" && reader.nextWord2("era")) return "CS";
		return "E";
	}
	if (reader.tag === "PD") {
		if (reader.nextTag1("S")) {
			if (reader.suffixL2("li")) return "PD";
			return "DD";
		}
		if (reader.nextTag1("A") && reader.nextTag2("S")) return "DD";
		return "PD";
	}
	if (reader.tag === "CC") {
		if (reader.prevTag2("SP") && reader.prevTag1("FF") && reader.word === "cioè") return "B";
		return "CC";
	}
	if (reader.tag === "EA") {
		if (reader.prevTag2("") && reader.prevTag1("Vm2s")) return "RI";
		if (reader.word === "della" && reader.nextWord1("Francesca")) return "SP";
		if (reader.word === "Al" && reader.nextWord2("?")) return "SP";
		return "EA";
	}
	if (reader.tag === "VM") {
		if (reader.nextTag1("PR")) return "V";
		if (reader.nextTag2("")) return "V";
		if (reader.nextTag1("EA")) return "V";
		if (reader.word === "vuole" && reader.nextTag1("B")) return "V";
		if (reader.nextTag1("S")) return "V";
		if (reader.nextTag1("RD")) return "V";
		if (reader.nextTag1("RI")) return "V";
		return "VM";
	}
	if (reader.tag === "N") {
		if (reader.suffixL2("''")) return "X";
		if (reader.word === "sei" && reader.nextTag1("V") && reader.nextTag2("E")) return "VA";
		if (reader.prevWord1("dei") && reader.word === "venti") return "S";
		return "N";
	}
	if (reader.tag === "AP") {
		if (reader.prevTag1("E") && reader.word === "loro") {
			if (reader.prevWord1("a") && reader.nextWord1("volta")) return "AP";
			return "PE";
		}
		if (reader.prevTag1("V") && reader.word === "loro") return "PE";
		if (reader.prevTag2("A") && reader.prevTag1("CC") && reader.word === "propria") return "A";
		if (reader.nextWord1("è")) return "PP";
		if (reader.prevTag1("RD") && reader.nextTag1("FF")) return "PP";
		return "AP";
	}
	if (reader.tag === "S") {
		if (reader.prevWord1("si")) {
			if (reader.prevTag1("PC") && reader.word === "luogo") return "S";
			if (reader.suffixL3("oni")) return "S";
			return "V";
		}
		if (reader.prevWord2("") && reader.word === "cosa") {
			if (reader.nextTag1("V") && reader.nextTag2("A")) return "S";
			if (reader.prevWord1("Che") && reader.word === "cosa" && reader.nextWord1("inventò")) return "S";
			return "PQ";
		}
		if (reader.prevTag1("SP") && reader.nextTag1("FF")) {
			if (reader.word === "membri") return "S";
			if (reader.suffixL2("re")) return "S";
			return "SP";
		}
		if (reader.prevTag1("SP") && reader.nextTag1("FS")) {
			if (reader.prevTag1("SP") && reader.word === "membri") return "S";
			if (reader.suffixL3("olo")) return "S";
			if (reader.prevWord2("")) return "S";
			return "SP";
		}
		if (reader.prevTag2("E") && reader.prevTag1("PR") && reader.word === "cosa") {
			if (reader.word === "cosa" && reader.nextWord1("si")) return "S";
			return "PQ";
		}
		if (reader.prevTag1("S") && reader.word === "generale") return "A";
		if (reader.prevTag1("S") && reader.word === "finanziarie") return "A";
		if (reader.prevTag2("S") && reader.prevTag1("PR")) return "V";
		if (reader.prevTag1("S") && reader.nextTag1("RD")) {
			if (reader.suffixL3("tte")) return "S";
			if (reader.nextTag2("SP")) return "S";
			return "V";
		}
		if (reader.word === "vicino" && reader.nextTag1("EA") && reader.nextTag2("S")) return "B";
		if (reader.prevTag2("") && reader.prevTag1("FB")) {
			if (reader.prevWord1("(")) return "S";
			return "SP";
		}
		if (reader.prevTag1("V") && reader.word === "via") return "B";
		if (reader.prevTag1("V") && reader.word === "successo") return "V";
		if (reader.prevTag1("S") && reader.word === "personale") return "A";
		if (reader.prevWord1("sono") && reader.word === "morti") return "V";
		if (reader.prevTag1("VA") && reader.nextTag1("RD")) {
			if (reader.word === "sede" && reader.nextTag1("RD")) return "S";
			return "V";
		}
		if (reader.prevTag1("SP") && reader.nextTag1("FB")) {
			if (reader.suffixL2("em")) return "S";
			if (reader.nextTag1("FB") && reader.nextTag2("FB")) return "S";
			return "SP";
		}
		if (reader.prevTag1("S") && reader.word === "generali") return "A";
		if (reader.prevWord1("") && reader.word === "quotidiano") return "A";
		if (reader.prevTag1("S") && reader.word === "finale") return "A";
		if (reader.prevTag1("S") && reader.word === "interno") return "A";
		if (reader.word === "particolare" && reader.nextTag1("S")) return "A";
		if (reader.prevTag1("BN")) {
			if (reader.prevTag1("BN") && reader.word === "uso") return "S";
			if (reader.word === "cinema" && reader.nextTag1("FB") && reader.nextTag2("FS")) return "S";
			return "V";
		}
		if (reader.prevTag1("V") && reader.word === "partito") return "V";
		if (reader.prevTag1("CS")) {
			if (reader.prevTag1("CS") && reader.nextTag1("V")) return "SP";
			return "V";
		}
		if (reader.prevWord1("stata")) return "V";
		if (reader.prevTag1("") && reader.nextTag1("RD")) return "V";
		if (reader.prevWord1("Si")) return "V";
		if (reader.prevTag2("PQ") && reader.prevTag1("V")) return "SP";
		if (reader.prevTag1("S") && reader.word === "particolare") return "A";
		if (reader.prevTag1("FF") && reader.nextTag1("RD")) return "V";
		if (reader.prevTag1("V") && reader.word === "passato") return "V";
		if (reader.prevTag1("V") && reader.word === "giunta") return "V";
		if (reader.prevTag2("CS") && reader.prevTag1("PC")) return "V";
		if (reader.prevTag1("SP") && reader.nextTag1("RD")) {
			if (reader.suffixL2("'s")) return "S";
			if (reader.prevTag1("SP") && reader.word === "pour") return "S";
			return "V";
		}
		if (reader.prevTag2("RD") && reader.prevTag1("VA")) {
			if (reader.prevWord2("gli") && reader.word === "membri") return "S";
			return "V";
		}
		if (reader.prevWord2("venduto")) return "SP";
		if (reader.prevWord2("") && reader.prevWord1("Quale") && reader.word === "animale") return "A";
		if (reader.word === "mezzo" && reader.nextTag1("S")) return "A";
		if (reader.prevWord1("più") && reader.nextWord1(",")) return "A";
		if (reader.prevTag1("S") && reader.nextTag1("VA")) {
			if (reader.nextTag1("VA") && reader.nextTag2("B")) return "S";
			if (reader.suffixL2("te")) return "V";
			return "A";
		}
		if (reader.prevTag1("FF") && reader.word === "specie") return "B";
		if (reader.prevTag1("V") && reader.word === "vista") return "V";
		if (reader.word === "prodotto" && reader.nextTag1("EA")) return "V";
		if (reader.word === "resa" && reader.nextTag1("A")) return "V";
		if (reader.prevTag1("SP") && reader.nextTag1("SP")) return "SP";
		if (reader.prevTag1("B") && reader.word === "cosa") return "PQ";
		if (reader.prevTag1("S") && reader.word === "tecnici") return "A";
		if (reader.prevTag1("S") && reader.word === "destra") return "A";
		if (reader.prevTag1("S") && reader.word === "tecniche") return "A";
		if (reader.prevTag1("S") && reader.word === "mobili") return "A";
		if (reader.prevTag1("S") && reader.word === "ufficiali") return "A";
		if (reader.prevTag1("S") && reader.word === "volontari") return "A";
		if (reader.word === "vicino" && reader.nextWord1("a")) return "B";
		if (reader.prevWord1(",") && reader.nextWord1("da")) return "V";
		if (reader.prevTag1("S") && reader.word === "morti") return "V";
		if (reader.prevTag1("S") && reader.nextTag1("RI")) return "V";
		if (reader.prevWord1("è") && reader.word === "uscita") return "V";
		if (reader.prevTag1("S") && reader.nextTag1("B")) {
			if (reader.suffixL2("ro")) return "S";
			return "V";
		}
		if (reader.prevWord1("mi")) return "V";
		if (reader.prevWord1("chi")) return "V";
		if (reader.word === "Parlamento" && reader.nextWord2("?")) return "SP";
		if (reader.prevTag2("V") && reader.prevTag1("SP")) return "SP";
		if (reader.prevWord1(";")) {
			if (reader.prevTag1("FC") && reader.nextTag1("N")) return "S";
			return "SP";
		}
		if (reader.prevTag1("SW") && reader.word === "leader") return "SW";
		if (reader.prevTag1("V") && reader.word === "cosa") return "PQ";
		if (reader.prevTag1("S") && reader.word === "ebrei") return "A";
		if (reader.prevTag1("S") && reader.word === "vicino") return "A";
		if (reader.prevTag1("A") && reader.word === "personale") return "A";
		if (reader.prevTag2("S") && reader.prevTag1("FB") && reader.word === "finanziarie") return "A";
		if (reader.word === "vicino" && reader.nextTag1("S")) return "A";
		if (reader.word === "giovani" && reader.nextTag1("S")) return "A";
		if (reader.prevTag1("S") && reader.word === "politici") return "A";
		if (reader.prevTag1("S") && reader.word === "croati") return "A";
		if (reader.prevTag2("V") && reader.prevTag1("S") && reader.word === "piano") return "B";
		if (reader.prevTag1("VA") && reader.word === "messe" && reader.nextTag1("E")) return "V";
		if (reader.prevWord1("li")) return "V";
		if (reader.prevTag1("VA") && reader.word === "permesso") return "V";
		if (reader.prevTag2("VM") && reader.prevTag1("VA")) return "V";
		if (reader.prevTag1("VA") && reader.word === "mandato") return "V";
		if (reader.prevTag1("CC") && reader.nextTag1("RI")) return "V";
		if (reader.prevWord1("e") && reader.nextWord1("gli")) return "V";
		if (reader.word === "trattato" && reader.nextTag1("E")) return "V";
		if (reader.prevWord1("che") && reader.nextWord1("al")) return "V";
		if (reader.prevTag1("FF") && reader.nextTag1("RI")) return "V";
		if (reader.prevWord1("ha") && reader.word === "corso") return "V";
		if (reader.prevTag1("V") && reader.word === "messa") return "V";
		if (reader.prevTag1("V") && reader.word === "entrata") return "V";
		if (reader.prevWord1(",") && reader.word === "posto") return "V";
		if (reader.word === "auto" && reader.nextTag1("FF") && reader.nextTag2("S")) return "Ann";
		if (reader.prevWord1("trova")) return "SP";
		if (reader.word === "Parlamento" && reader.nextTag1("A") && reader.nextTag2("FS")) return "SP";
		if (reader.prevWord1("la") && reader.word === "Corte") return "SP";
		if (reader.nextWord2("Internazionale")) return "SP";
		if (reader.suffixL3("RIO")) return "SP";
		if (reader.prevWord1("morì")) return "SP";
		if (reader.prevTag1("S") && reader.nextTag1("")) return "SP";
		if (reader.word === "Repubblica" && reader.nextTag1("SP")) return "SP";
		if (reader.word === "Centro" && reader.nextTag1("E") && reader.nextTag2("RD")) return "SP";
		if (reader.word === "Comitato" && reader.nextWord2("della")) return "SP";
		if (reader.word === "Governo" && reader.nextWord1("della") && reader.nextWord2("Regione")) return "SP";
		if (reader.prevTag1("SP") && reader.nextTag1("FC")) return "SP";
		if (reader.word === "Capo" && reader.nextTag1("SP")) return "SP";
		if (reader.word === "Commissione" && reader.nextTag1("SP")) return "SP";
		if (reader.prevWord2("Governo") && reader.prevWord1("della") && reader.word === "Regione") return "SP";
		if (reader.word === "Piazza" && reader.nextTag1("SP")) return "SP";
		if (reader.prevWord1("personal") && reader.word === "computer") return "SW";
		return "S";
	}
	if (reader.tag === "T") {
		if (reader.nextTag1("S")) {
			if (reader.prevTag1("E") && reader.nextTag1("S")) return "DI";
			return "PI";
		}
		if (reader.nextTag2("V")) return "PI";
		if (reader.nextTag1("V")) return "PI";
		if (reader.word === "tutti" && reader.nextTag1("A")) return "PI";
		if (reader.nextTag2("")) return "PI";
		if (reader.nextTag1("A")) return "A";
		if (reader.nextWord1(",")) return "PI";
		if (reader.nextTag1("E")) return "PI";
		if (reader.nextTag1("B")) return "PI";
		if (reader.word === "tutti" && reader.nextWord1("e")) return "PI";
		return "T";
	}
	if (reader.tag === "V") {
		if (reader.word === "è" && reader.nextTag1("V")) {
			if (reader.word === "è" && reader.nextWord1("sepolto")) return "V";
			return "VA";
		}
		if (reader.nextTag1("VA")) {
			if (reader.nextWord1("sia")) return "V";
			if (reader.suffixL3("bra")) return "V";
			if (reader.prevTag1("S") && reader.word === "fa" && reader.nextTag1("VA")) return "B";
			if (reader.nextWord1("essere")) return "V";
			if (reader.nextWord1("ha")) {
				if (reader.prevTag1("S") && reader.word === "fa" && reader.nextTag1("VA")) return "B";
				return "A";
			}
			if (reader.nextWord1("viene")) return "V";
			if (reader.suffixL2("ti")) {
				if (reader.prevTag2("S")) return "V";
				return "S";
			}
			if (reader.suffixL2("re")) return "V";
			return "VA";
		}
		if (reader.word === "sono" && reader.nextTag1("V")) {
			if (reader.word === "sono" && reader.nextWord2("che")) return "V";
			return "VA";
		}
		if (reader.word === "era" && reader.nextTag1("V")) return "VA";
		if (reader.prevTag1("RI")) return "S";
		if (reader.word === "fu" && reader.nextTag1("V")) return "VA";
		if (reader.prevTag1("S") && reader.word === "fa") {
			if (reader.word === "fa" && reader.nextTag1("S")) return "V";
			if (reader.prevWord2("di") && reader.prevWord1("mesi") && reader.word === "fa") return "A";
			if (reader.word === "fa" && reader.nextWord1("con")) return "A";
			if (reader.prevTag2("RD") && reader.prevTag1("S") && reader.word === "fa") return "V";
			if (reader.prevWord2("Che") && reader.word === "fa") return "V";
			return "B";
		}
		if (reader.word === "è" && reader.nextTag1("B") && reader.nextTag2("V")) return "VA";
		if (reader.prevTag1("EA")) {
			if (reader.prevTag1("EA") && reader.nextTag1("S")) {
				if (reader.prevTag2("B")) return "A";
				if (reader.nextWord1("profilo")) return "A";
				return "V";
			}
			if (reader.nextTag1("RD") && reader.nextTag2("S")) return "V";
			if (reader.suffixL4("ente")) return "V";
			if (reader.word === "indiziato") return "V";
			if (reader.prevTag1("EA") && reader.nextTag1("PC")) return "V";
			if (reader.nextTag1("SP") && reader.nextTag2("SP")) return "A";
			if (reader.suffixL4("nero")) return "SP";
			if (reader.suffixL3("ire")) return "V";
			if (reader.nextWord1("del")) return "V";
			return "S";
		}
		if (reader.word === "sarà" && reader.nextTag1("V")) return "VA";
		if (reader.prevWord1("si") && reader.word === "è") return "VA";
		if (reader.prevWord1("i")) return "S";
		if (reader.word === "Sono" && reader.nextTag1("V")) return "VA";
		if (reader.prevWord1("il")) {
			if (reader.suffixL2("re")) return "V";
			if (reader.prevWord1("il") && reader.word === "concedente") return "V";
			if (reader.prevTag1("RD") && reader.nextTag1("PC")) return "V";
			return "S";
		}
		if (reader.nextWord1("successo")) return "VA";
		if (reader.word === "sono" && reader.nextTag1("B") && reader.nextTag2("V")) return "VA";
		if (reader.prevWord1("in")) {
			if (reader.prevTag1("E") && reader.nextTag1("S")) return "A";
			return "S";
		}
		if (reader.word === "avere" && reader.nextTag1("V")) return "VA";
		if (reader.word === "È" && reader.nextTag1("V")) return "VA";
		if (reader.word === "va" && reader.nextTag1("V")) {
			if (reader.prevTag2("S")) return "VA";
			return "VM";
		}
		if (reader.prevTag2("E") && reader.prevTag1("RD")) {
			if (reader.prevTag1("RD") && reader.nextTag1("S")) return "A";
			if (reader.prevWord2("tra")) return "V";
			return "S";
		}
		if (reader.word === "sono" && reader.nextWord1("morti")) return "VA";
		if (reader.nextWord1("partito")) return "VA";
		if (reader.word === "saranno" && reader.nextTag1("V")) return "VA";
		if (reader.prevTag1("SP") && reader.nextTag1("FS")) {
			if (reader.prevTag2("E") && reader.prevTag1("SP")) return "A";
			return "SP";
		}
		if (reader.word === "fosse" && reader.nextTag1("V")) return "VA";
		if (reader.nextTag1("CC") && reader.nextTag2("A")) return "A";
		if (reader.word === "è" && reader.nextWord1("giunta")) return "VA";
		if (reader.nextWord1("passato")) return "VA";
		if (reader.word === "posti" && reader.nextWord1("di")) return "S";
		if (reader.prevTag1("RD") && reader.nextTag1("S")) {
			if (reader.suffixL3("")) return "V";
			if (reader.suffixL3("nte")) return "V";
			return "A";
		}
		if (reader.prevWord1("più") && reader.nextWord1(",")) {
			if (reader.nextWord2("più")) return "V";
			return "A";
		}
		if (reader.nextWord1("uscita")) return "VA";
		if (reader.word === "è" && reader.nextTag1("B") && reader.nextTag2("VA")) return "VA";
		if (reader.prevWord1("si") && reader.word === "sono") return "VA";
		if (reader.word === "vogliono" && reader.nextTag1("V")) return "VM";
		if (reader.prevWord1("Il")) {
			if (reader.suffixL2("te")) return "V";
			return "S";
		}
		if (reader.word === "organizzata" && reader.nextWord2("")) return "A";
		if (reader.prevWord1("più") && reader.nextWord1("e")) return "A";
		if (reader.word === "venire" && reader.nextTag1("V")) return "VA";
		if (reader.prevTag1("FF") && reader.word === "fu" && reader.nextTag1("B")) return "VA";
		if (reader.nextWord1("entrata")) return "VA";
		if (reader.prevWord1("si") && reader.word === "era") return "VA";
		if (reader.word === "sarebbero" && reader.nextTag1("V")) return "VA";
		if (reader.word === "veniva" && reader.nextTag1("V")) return "VA";
		if (reader.nextWord1("messa")) return "VA";
		if (reader.prevWord1("L'")) return "S";
		if (reader.word === "fatti" && reader.nextTag1("A")) return "S";
		if (reader.prevTag1("E") && reader.word === "fatto") return "S";
		if (reader.prevWord1("trova")) return "SP";
		if (reader.prevTag2("V") && reader.prevTag1("SP")) return "SP";
		return "V";
	}
	if (reader.tag === "CS") {
		if (reader.nextWord1("ne")) return "PC";
		if (reader.nextWord1("stesso")) return "PC";
		if (reader.nextWord1("n'")) return "PC";
		return "CS";
	}
	if (reader.tag === "X") return "X";
	if (reader.tag === "Vc") return "Vc";
	if (reader.tag === "I") {
		if (reader.nextTag1("E")) return "S";
		return "I";
	}
	if (reader.tag === "Ann") return "Ann";
	if (reader.tag === "SP") {
		if (reader.word === "Stati" && reader.nextTag1("S")) return "S";
		if (reader.prevWord1("") && reader.nextWord1("")) return "NO";
		if (reader.word === "Linea" && reader.nextWord1("Keihin") && reader.nextWord2("-")) return "S";
		if (reader.prevTag2("RI") && reader.prevTag1("A")) return "S";
		if (reader.word === "de" && reader.nextWord2("?")) return "S";
		if (reader.prevWord1("PIÙ")) return "A";
		if (reader.word === "Linea" && reader.nextTag1("SP") && reader.nextTag2("FS")) return "S";
		if (reader.prevWord2("") && reader.prevWord1("") && reader.word === "Mare") return "S";
		if (reader.prevTag2("S") && reader.prevTag1("RI")) return "S";
		if (reader.word === "Paesi" && reader.nextTag1("S")) return "S";
		if (reader.prevTag1("DI")) {
			if (reader.prevTag1("DI") && reader.nextTag1("S")) return "A";
			return "S";
		}
		if (reader.prevTag2("E") && reader.prevTag1("RI")) {
			if (reader.prevTag1("RI") && reader.nextTag1("SP")) return "SP";
			return "S";
		}
		if (reader.prevWord1("uno")) return "S";
		if (reader.prevTag1("PR") && reader.nextTag1("E")) return "V";
		if (reader.prevTag1("PR") && reader.nextTag1("RD")) return "V";
		if (reader.prevWord1("si")) return "V";
		return "SP";
	}
	if (reader.tag === "SW") {
		if (reader.prevTag1("S") && reader.nextTag1("S")) return "E";
		return "SW";
	}
	if (reader.tag === "Vd2s") return "Vd2s";
	if (reader.tag === "DTfs") return "DTfs";
	return "NN";
};