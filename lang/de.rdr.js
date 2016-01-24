/**
 * File Generated From data/pos/german.rdr at Sun Jan 24 2016 12:56:12 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(r) {
	if (r.t=="ADV") {
		if (r.w=="aber" && r.n(-1,0,",")) return "KON";
		if (r.w=="mehr" && r.n(1,1,"NN")) {
			if (r.w=="mehr" && r.n(-1,1,"PTKNEG")) return "ADV";
			return "PIAT";
		}
		if (r.w=="mehr" && r.n(1,0,"als")) {
			if (r.n(1,1,"APPR") && r.n(2,1,"NN")) return "ADV";
			if (r.n(1,1,"APPR") && r.n(2,1,"VVPP")) return "ADV";
			if (r.n(1,1,"APPR") && r.n(2,1,"ADJD")) return "PIS";
			if (r.w=="mehr" && r.n(-2,0,"ein")) return "PIS";
			if (r.w=="mehr" && r.n(2,0,"vor")) return "PIS";
			if (r.w=="mehr" && r.n(-2,0,"Millionen")) return "PIS";
			if (r.n(-2,1,"VVFIN") && r.n(-1,1,"PPER")) return "PIS";
			if (r.n(-2,1,"VVPP")) return "PIS";
			if (r.w=="mehr" && r.n(2,0,"zuvor")) return "PIS";
			if (r.n(-2,1,"") && r.n(-1,1,"KON")) return "PIS";
			if (r.w=="mehr" && r.n(2,0,"zum")) return "PIS";
			if (r.n(-2,1,"ADV") && r.n(-1,1,"CARD")) return "PIS";
			if (r.w=="mehr" && r.n(-1,0,"war")) return "PIS";
			if (r.w=="mehr" && r.n(1,0,"als") && r.n(2,0,"der")) return "PIS";
			if (r.n(-2,0,"den")) return "PIS";
			if (r.n(-2,0,"ist")) return "PIS";
			return "PIAT";
		}
		if (r.w=="doch" && r.n(-1,1,"$,")) {
			if (r.w=="doch" && r.n(1,1,"VAFIN") && r.n(2,1,"NN")) return "ADV";
			return "KON";
		}
		if (r.w=="da" && r.n(-1,1,"$,")) {
			if (r.w=="da" && r.n(-1,1,"$,") && r.n(1,1,"VVFIN")) return "ADV";
			if (r.w=="da" && r.n(-1,1,"$,") && r.n(1,1,"VAFIN")) return "ADV";
			if (r.n(1,1,"VMFIN")) return "ADV";
			return "KOUS";
		}
		if (r.w=="viel" && r.n(1,1,"NN")) return "PIAT";
		if (r.w=="lange" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="zusammen" && r.n(1,1,"$.")) return "PTKVZ";
		if (r.n(-2,0,"weder")) return "KON";
		if (r.w=="Da" && r.n(-1,1,"") && r.n(1,1,"ART")) return "KOUS";
		if (r.w=="aber" && r.n(-1,1,"$(")) {
			if (r.w=="aber" && r.n(2,0,"sicher")) return "ADV";
			if (r.w=="aber" && r.n(-1,0,")")) return "ADV";
			return "KON";
		}
		if (r.w=="je" && r.n(1,1,"NN")) return "APPR";
		if (r.w=="zusammen" && r.n(1,1,"$,")) return "PTKVZ";
		if (r.w=="genug" && r.n(-1,1,"NN")) return "PIAT";
		if (r.w=="mehr" && r.n(1,1,"ADJA") && r.n(2,1,"NN")) {
			if (r.n(-1,1,"PTKNEG") && r.n(1,1,"ADJA")) return "ADV";
			return "PIAT";
		}
		if (r.w=="Da" && r.n(-1,1,"") && r.n(1,1,"PPER")) return "KOUS";
		if (r.w=="viel" && r.n(1,1,"APPR")) return "PIS";
		if (r.w=="recht" && r.n(-1,0,"so")) return "ADJD";
		if (r.w=="mehr" && r.n(-1,1,"ADJD")) return "PIS";
		if (r.w=="Da" && r.n(-1,1,"") && r.n(1,1,"ADV")) return "KOUS";
		if (r.w=="minus" && r.n(-1,1,"$(")) return "APPR";
		if (r.w=="recht" && r.n(1,1,"$.")) return "NN";
		if (r.w=="aber" && r.n(-1,0,"")) return "KON";
		if (r.w=="Viel" && r.n(1,1,"NN")) return "PIAT";
		if (r.w=="ganz" && r.n(-1,1,"APPR") && r.n(1,1,"NE")) return "ADJD";
		if (r.w=="mehr" && r.n(-1,0,"Prozent")) return "PIS";
		if (r.w=="viel" && r.n(1,1,"VVPP")) return "PIS";
		if (r.w=="aber" && r.n(-1,1,"$.")) return "KON";
		if (r.w=="einfach" && r.n(2,0,"")) return "ADJD";
		if (r.w=="her" && r.n(1,1,"$.") && r.n(2,1,"")) return "PTKVZ";
		if (r.w=="viel" && r.n(-1,0,"so")) {
			if (r.n(1,1,"ADJA") && r.n(2,1,"NN")) return "PIAT";
			return "PIS";
		}
		if (r.w=="her" && r.n(-1,1,"NN")) {
			if (r.n(1,0,",")) return "PTKVZ";
			if (r.n(-1,0,"Sache")) return "ADV";
			return "APZR";
		}
		if (r.w=="je" && r.n(-2,1,"CARD") && r.n(-1,1,"NN")) return "APPR";
		if (r.w=="vorbei" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "PTKVZ";
		if (r.w=="zusammen" && r.n(-1,1,"NN") && r.n(1,1,"$(")) return "PTKVZ";
		if (r.w=="weg" && r.n(2,0,"")) return "PTKVZ";
		if (r.n(-1,0,"") && r.n(1,0,"sich")) return "KOUS";
		if (r.w=="Da" && r.n(-1,1,"") && r.n(1,1,"APPR")) return "KOUS";
		if (r.w=="doch" && r.n(-2,1,"") && r.n(-1,1,"")) return "KON";
		if (r.w=="mal" && r.n(-1,1,"CARD") && r.n(1,1,"CARD")) return "KON";
		if (r.w=="quer" && r.n(1,1,"APPR") && r.n(2,1,"ART")) return "ADJD";
		if (r.w=="einfach" && r.n(1,1,"$,")) return "ADJD";
		if (r.w=="knapp" && r.n(1,1,"VVPP")) return "ADJD";
		if (r.w=="weiter" && r.n(-1,0,"geht")) return "PTKVZ";
		if (r.w=="weiter" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "PTKVZ";
		if (r.w=="weg" && r.n(1,0,",")) return "PTKVZ";
		if (r.w=="mehr" && r.n(-1,0,"etwas")) return "PIS";
		if (r.w=="viel" && r.n(1,1,"VVINF")) return "PIS";
		if (r.w=="Da" && r.n(1,1,"PIAT")) return "KOUS";
		if (r.w=="da" && r.n(1,1,"PPER")) return "KOUS";
		if (r.w=="noch" && r.n(-2,0,"Weder")) return "KON";
		if (r.w=="noch" && r.n(-2,1,"PTKZU") && r.n(-1,1,"VVINF")) return "KON";
		if (r.w=="lange" && r.n(-2,1,"CARD") && r.n(-1,1,"NN")) return "ADJA";
		if (r.w=="recht" && r.n(1,1,"VAFIN")) return "NN";
		if (r.w=="Gestern" && r.n(-1,1,"ART")) return "NN";
		if (r.w=="recht" && r.n(1,0,",")) {
			if (r.n(-1,1,"PTKNEG") && r.n(1,1,"$,")) return "ADJD";
			return "NN";
		}
		if (r.w=="Wohl" && r.n(-1,1,"ART")) return "NN";
		if (r.w=="recht" && r.n(1,1,"VVINF")) return "NN";
		if (r.w=="genug" && r.n(1,0,"Geld")) return "PIAT";
		if (r.w=="einfach" && r.n(-1,1,"ADV") && r.n(1,1,"VAFIN")) return "ADJD";
		if (r.w=="knapp" && r.n(2,0,"")) return "ADJD";
		if (r.w=="einfach" && r.n(1,0,"und")) return "ADJD";
		if (r.w=="wieder" && r.n(-1,0,"kommen")) return "PTKVZ";
		if (r.w=="weiter" && r.n(-2,0,"geht")) return "PTKVZ";
		if (r.w=="mehr" && r.n(2,0,"als")) {
			if (r.w=="mehr" && r.n(-1,1,"NN") && r.n(1,1,"VVFIN")) return "ADV";
			return "PIS";
		}
		if (r.w=="mehr" && r.n(1,1,"PTKNEG")) return "PIS";
		if (r.w=="viel" && r.n(1,1,"PTKZU") && r.n(2,1,"VVINF")) return "PIS";
		if (r.w=="viel" && r.n(-2,1,"ADV") && r.n(-1,1,"PTKNEG")) return "PIS";
		if (r.w=="Da" && r.n(-1,1,"") && r.n(1,1,"PDAT")) return "KOUS";
		if (r.w=="soweit" && r.n(-1,0,",")) return "KOUS";
		if (r.w=="Da" && r.n(1,1,"NN")) return "KOUS";
		if (r.w=="ja" && r.n(-1,1,"NN") && r.n(1,1,"$,")) return "PTKANT";
		return "ADV";
	}
	if (r.t=="KON") {
		if (r.w=="denn" && r.n(1,1,"ADV")) {
			if (r.w=="denn" && r.n(-1,1,"$,")) return "KON";
			if (r.n(-1,0,"mehr")) return "KOKOM";
			if (r.w=="denn" && r.n(-2,1,"") && r.n(-1,1,"")) return "KON";
			return "ADV";
		}
		if (r.w=="denn" && r.n(-1,1,"PPER")) return "ADV";
		if (r.w=="denn" && r.n(-1,1,"VAFIN")) return "ADV";
		if (r.w=="denn" && r.n(-2,0,",")) {
			if (r.w=="denn" && r.n(-2,1,"$,") && r.n(-1,1,"$(")) return "KON";
			return "ADV";
		}
		if (r.w=="Oder" && r.n(-1,1,"ART")) return "NE";
		if (r.w=="Oder" && r.n(-1,1,"$(")) return "NE";
		if (r.w=="Oder" && r.n(-1,1,"KON")) return "NE";
		if (r.w=="+" && r.n(-1,0,"B")) return "XY";
		return "KON";
	}
	if (r.t=="PWAT") {
		if (r.n(1,1,"ART")) {
			if (r.s(-2,"le")) return "PWS";
			return "PRELS";
		}
		if (r.n(-1,1,"$,") && r.n(1,1,"APPR")) return "PRELS";
		return "PWAT";
	}
	if (r.t=="PWAV") {
		if (r.n(1,0,"bei")) return "KOKOM";
		return "PWAV";
	}
	if (r.t=="NE") {
		if (r.w=="Bayern" && r.n(-1,1,"ART")) return "NN";
		if (r.n(-1,1,"FM") && r.n(1,1,"FM")) return "FM";
		if (r.w=="Hessen" && r.n(-1,1,"ART")) return "NN";
		if (r.n(-2,1,"APPR") && r.n(-1,1,"ADJA")) {
			if (r.n(-1,1,"ADJA") && r.n(1,1,"$,")) return "NE";
			if (r.n(-2,0,"in")) return "NE";
			if (r.n(-1,1,"ADJA") && r.n(1,1,"VVFIN")) return "NE";
			return "NN";
		}
		if (r.n(-1,0,"ein")) {
			if (r.s(-2,"es")) return "ADJA";
			if (r.n(1,1,"APPR") && r.n(2,1,"NN")) return "NE";
			return "NN";
		}
		if (r.n(-1,0,"einer")) {
			if (r.s(-3,"")) return "NE";
			return "NN";
		}
		if (r.w=="West" && r.n(-1,0,"und")) return "NN";
		if (r.w=="Polen" && r.n(-1,1,"ART")) return "NN";
		if (r.w=="II." && r.n(-1,0,"Alexij")) return "ADJA";
		if (r.n(-1,1,"PIAT")) {
			if (r.n(-1,0,"keine")) return "NE";
			if (r.n(-1,0,"beide") && r.n(1,0,")")) return "NE";
			return "NN";
		}
		if (r.w=="Niedersachsen" && r.n(-1,1,"ART")) return "NN";
		if (r.w=="Halle" && r.n(-1,1,"ADJA")) return "NN";
		if (r.w=="Herzog" && r.n(1,1,"APPR") && r.n(2,1,"NE")) return "NN";
		if (r.n(-2,1,"APPR") && r.n(-1,1,"PPOSAT")) return "NN";
		if (r.n(-1,0,"einem")) {
			if (r.n(-2,0,"in")) return "NE";
			return "NN";
		}
		if (r.w=="Lange" && r.n(1,1,"NN")) return "ADJA";
		if (r.n(-2,0,"Tschechen")) return "NN";
		if (r.w=="Graf" && r.n(1,1,"NE")) return "NN";
		if (r.n(-2,1,"VAFIN") && r.n(-1,1,"ADJA")) return "NN";
		if (r.n(-1,0,"eine")) {
			if (r.s(-3,"")) return "NE";
			if (r.n(2,1,"NN")) return "NE";
			return "NN";
		}
		if (r.n(-1,0,"sein")) return "NN";
		if (r.w=="Schweden" && r.n(-1,1,"ART")) return "NN";
		if (r.w=="Weltbank" && r.n(1,1,"KON")) return "NN";
		if (r.w=="Essen" && r.n(-1,1,"APPRART")) return "NN";
		if (r.w=="of" && r.n(-2,0,"''")) return "FM";
		if (r.n(-1,1,"$(") && r.n(1,1,"FM")) {
			if (r.n(-2,0,"dem")) return "NE";
			return "FM";
		}
		if (r.w=="British" && r.n(2,0,"(")) return "FM";
		if (r.w=="Road" && r.n(1,0,"Movie")) return "TRUNC";
		if (r.n(-1,0,"") && r.n(1,0,"Bericht")) return "ADJA";
		if (r.w=="Quelle" && r.n(-1,1,"APPR")) return "NN";
		if (r.n(-1,0,"dieses")) return "NN";
		if (r.w=="Welthandelsorganisation" && r.n(1,0,"WTO")) return "NN";
		if (r.w=="D." && r.n(-1,0,"a.")) return "NN";
		if (r.w=="Rück" && r.n(-1,0,"Schweizer")) return "NN";
		if (r.w=="Fischer" && r.n(-1,1,"ART")) return "NN";
		if (r.n(-1,0,"einen")) return "NN";
		if (r.w=="Center" && r.n(-1,1,"NN")) return "NN";
		if (r.w=="Los" && r.n(-1,0,"das")) return "NN";
		if (r.w=="Teufel" && r.n(2,0,",")) return "NN";
		if (r.w=="Vogel" && r.n(-1,1,"ART")) return "NN";
		if (r.n(-1,0,"der") && r.n(1,0,"des")) return "NN";
		if (r.w=="Ernst" && r.n(1,1,"ART")) return "NN";
		if (r.n(-2,1,"") && r.n(-1,1,"PPOSAT")) return "NN";
		if (r.w=="Sachsen" && r.n(-1,1,"ART")) return "NN";
		if (r.w=="Times" && r.n(1,1,"ADJD")) return "FM";
		if (r.n(1,0,"facto")) return "FM";
		if (r.n(-1,0,"Il")) return "FM";
		if (r.n(-1,1,"ADJA") && r.n(1,1,"FM")) return "FM";
		if (r.n(1,1,"FM") && r.n(2,1,"VVFIN")) return "FM";
		if (r.n(1,0,"Suisse")) return "FM";
		if (r.w=="Big" && r.n(1,1,"NE") && r.n(2,1,"$(")) return "FM";
		if (r.n(-2,1,"") && r.n(-1,1,"PPER")) return "VVFIN";
		if (r.n(-2,1,"$.") && r.n(-1,1,"CARD")) return "XY";
		return "NE";
	}
	if (r.t=="VMFIN") {
		if (r.n(-1,0,"zu")) return "VMINF";
		if (r.w=="müssen" && r.n(-1,1,"VVINF")) {
			if (r.w=="müssen" && r.n(-1,0,"zahlen")) return "VMFIN";
			if (r.w=="müssen" && r.n(1,1,"$,") && r.n(2,1,"VAFIN")) return "VMFIN";
			if (r.w=="müssen" && r.n(-2,1,"NE") && r.n(-1,1,"VVINF")) return "VMFIN";
			if (r.n(-2,1,"PPER") && r.n(-1,1,"VVINF")) return "VMFIN";
			if (r.w=="müssen" && r.n(2,0,"ihre")) return "VMFIN";
			if (r.w=="müssen" && r.n(-1,0,"rechnen")) return "VMFIN";
			return "VMINF";
		}
		if (r.n(-2,1,"VAFIN") && r.n(-1,1,"VVINF")) return "VMINF";
		if (r.w=="können" && r.n(-2,1,"PTKNEG") && r.n(-1,1,"VVINF")) return "VMINF";
		if (r.w=="können" && r.n(1,1,"$,") && r.n(2,1,"KOUS")) return "VMINF";
		if (r.w=="dürfen" && r.n(2,0,"")) {
			if (r.n(-1,0,"erhalten")) return "VMFIN";
			if (r.n(-1,1,"VAINF")) return "VMFIN";
			if (r.w=="dürfen" && r.n(-2,1,"ADJA") && r.n(-1,1,"VVINF")) return "VMFIN";
			return "VMINF";
		}
		if (r.w=="können" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "VMINF";
		if (r.w=="müssen" && r.n(-1,1,"NN") && r.n(1,1,"$,")) return "VMINF";
		if (r.n(-2,0,"hätte")) return "VMINF";
		if (r.w=="können" && r.n(-1,1,"VVFIN") && r.n(1,1,"$.")) return "VMINF";
		return "VMFIN";
	}
	if (r.t=="ADJA") {
		if (r.n(1,1,"APPR")) {
			if (r.n(1,0,"bis")) return "ADJA";
			if (r.w=="andere" && r.n(1,1,"APPR")) return "PIS";
			if (r.s(-2,"em")) return "ADJA";
			if (r.s(-4,"eren")) {
				if (r.n(-2,1,"NE")) return "ADJA";
				return "PIS";
			}
			if (r.n(-1,1,"PPER")) return "VVFIN";
			if (r.n(-2,1,"ART") && r.n(-1,1,"NN")) {
				if (r.s(-2,"er")) {
					if (r.n(2,1,"ADJA")) return "ADJA";
					return "ADJD";
				}
				return "VVFIN";
			}
			if (r.n(-2,1,"ART") && r.n(-1,1,"ADV")) return "ADJA";
			if (r.s(-3,"")) {
				if (r.n(1,0,"bis")) return "ADJA";
				if (r.n(-2,1,"NN")) return "ADJA";
				return "ADV";
			}
			if (r.w=="ersten") return "ADJA";
			if (r.w=="zweiten" && r.n(1,1,"APPR")) return "ADJA";
			if (r.n(-2,1,"ART") && r.n(-1,1,"NE")) return "VVFIN";
			if (r.n(-2,1,"ADJA") && r.n(-1,1,"KON")) return "ADJA";
			if (r.s(-4,"hste")) return "ADJA";
			if (r.s(-4,"tere")) return "ADJA";
			if (r.w=="besten" && r.n(-1,1,"APPRART") && r.n(1,1,"APPR")) return "ADJD";
			if (r.n(-1,0,"immer")) return "ADJD";
			if (r.n(-2,1,"NN") && r.n(-1,1,"NE")) return "NE";
			if (r.n(-1,0,"im") && r.n(1,0,"durch")) return "ADJA";
			if (r.w=="erste") return "ADJA";
			if (r.s(-4,"erer")) return "ADJA";
			if (r.n(1,0,"Wegen")) return "ADJA";
			if (r.n(-2,0,"eines")) return "ADJA";
			if (r.n(-1,0,"viel") && r.n(1,0,"als")) return "ADJD";
			if (r.n(-2,1,"ADJD") && r.n(-1,1,"KON")) return "ADJD";
			if (r.n(-2,1,"") && r.n(-1,1,"NN")) return "VVFIN";
			if (r.w=="folgenden" && r.n(-1,1,"APPRART")) return "ADJA";
			if (r.n(-2,1,"PRF") && r.n(-1,1,"APPRART")) return "ADJA";
			if (r.w=="einzige") return "ADJA";
			if (r.w=="vierte") return "ADJA";
			if (r.n(-2,1,"VVPP")) return "ADJA";
			if (r.n(-2,1,"KON") && r.n(-1,1,"APPRART")) return "ADJA";
			if (r.w=="weiteres" && r.n(-1,1,"APPR") && r.n(1,1,"APPR")) return "PIS";
			if (r.s(-4,"nter")) return "ADJD";
			if (r.n(-1,0,"wesentlich")) return "ADJD";
			if (r.n(-2,0,"sie")) return "ADJD";
			if (r.n(-2,1,"$,") && r.n(-1,1,"VAFIN")) return "ADJD";
			if (r.n(-2,1,"") && r.n(-1,1,"ADV")) return "ADJD";
			if (r.n(2,0,"in")) return "ADJD";
			if (r.n(-2,1,"KON") && r.n(-1,1,"ADV")) return "ADJD";
			if (r.n(-2,1,"KON") && r.n(-1,1,"NN")) return "VVFIN";
			if (r.n(-2,1,"") && r.n(-1,1,"NE")) return "VVFIN";
			if (r.n(-2,0,"Die")) return "VVFIN";
			if (r.n(-2,1,"APPRART") && r.n(-1,1,"NN")) return "VVFIN";
			if (r.n(-2,1,"VAFIN") && r.n(-1,1,"$,")) return "VVFIN";
			return "NN";
		}
		if (r.n(1,1,"ART")) {
			if (r.s(-2,"er")) {
				if (r.w=="einziger" && r.n(1,1,"ART")) return "ADJA";
				if (r.w=="erster" && r.n(-1,1,"APPR") && r.n(1,1,"ART")) return "PIS";
				if (r.s(-3,"rer")) return "PIS";
				if (r.n(-2,1,"KON") && r.n(-1,1,"ADV")) return "ADJD";
				return "NN";
			}
			if (r.n(1,0,"Die")) return "ADV";
			if (r.n(-1,1,"ADJA") && r.n(1,1,"ART")) return "NN";
			if (r.n(-1,0,"den")) {
				if (r.n(2,0,"Welt")) return "ADJA";
				return "NN";
			}
			if (r.n(-1,0,"die")) {
				if (r.n(1,1,"ART") && r.n(2,1,"ADV")) return "ADJA";
				return "NN";
			}
			if (r.n(-1,1,"APPR")) {
				if (r.s(-2,"em")) return "ADJA";
				if (r.s(-3,"ren")) return "PIS";
				if (r.w=="erster" && r.n(-1,1,"APPR") && r.n(1,1,"ART")) return "PIS";
				return "NN";
			}
			if (r.n(-1,1,"APPRART") && r.n(1,1,"ART")) {
				if (r.w=="besten" && r.n(-1,1,"APPRART") && r.n(1,1,"ART")) return "ADJD";
				return "ADJA";
			}
			if (r.n(-1,0,"der")) {
				if (r.s(-2,"te")) return "ADJA";
				if (r.s(-4,"sten")) return "ADJA";
				return "NN";
			}
			if (r.n(-1,0,"das")) return "NN";
			if (r.w=="2.") return "ADV";
			if (r.n(-1,1,"CARD") && r.n(1,1,"ART")) return "NN";
			if (r.n(-1,0,"") && r.n(1,0,"Das")) return "ADV";
			if (r.n(-1,0,"dem")) {
				if (r.s(-3,"ren")) return "PIS";
				return "NN";
			}
			if (r.w=="1." && r.n(1,1,"ART")) return "ADV";
			if (r.n(-1,1,"PIAT")) {
				if (r.n(-1,0,"jede")) return "ADJA";
				return "NN";
			}
			if (r.n(-1,0,"des")) return "NN";
			if (r.n(1,0,"Der")) return "ADV";
			if (r.s(-2,"de")) return "NN";
			if (r.n(-1,1,"PPOSAT") && r.n(1,1,"ART")) return "NN";
			if (r.n(-1,0,"Das")) return "NN";
			if (r.n(-1,0,"ein")) return "NN";
			return "VVFIN";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"$.")) {
			if (r.s(-2,"er")) return "ADJD";
			if (r.s(-3,"gen")) return "VVIZU";
			if (r.w=="lauten" && r.n(-2,0,"die")) return "VVINF";
			if (r.n(-2,1,"$,")) return "NN";
			return "VVFIN";
		}
		if (r.n(1,1,"PRF")) {
			if (r.n(-1,1,"ART") && r.n(1,1,"PRF")) return "PIS";
			return "VVFIN";
		}
		if (r.n(1,0,".")) {
			if (r.n(-1,1,"NE") && r.n(1,1,"$.")) return "VVFIN";
			if (r.w=="anderen" && r.n(1,1,"$.")) return "PIS";
			if (r.n(-1,0,"immer")) return "ADJD";
			if (r.n(-1,1,"$(")) return "VVFIN";
			if (r.s(-3,"ere")) return "PIS";
			if (r.w=="wahren") return "VVINF";
			if (r.n(-2,0,"als")) return "ADJA";
			if (r.n(-1,0,"am") && r.n(1,0,".")) return "ADJD";
			if (r.n(-2,1,"ADJA") && r.n(-1,1,"KON")) return "ADJA";
			if (r.n(-2,1,"ADV") && r.n(-1,1,"ADV")) return "ADJD";
			if (r.w=="k" && r.n(1,0,".")) return "ADJA";
			if (r.w=="neue" && r.n(2,0,"")) return "ADJA";
			if (r.n(-2,1,"ADJD")) return "ADJA";
			if (r.n(-1,0,"keine")) return "ADJA";
			if (r.s(-3,"ige")) return "ADJA";
			if (r.w=="anderer") return "PIS";
			if (r.n(-1,1,"VAFIN") && r.n(1,1,"$.")) return "ADJD";
			if (r.n(-1,1,"PROAV")) return "ADJD";
			if (r.n(-1,1,"PRF")) return "VVFIN";
			if (r.w=="verletzte" && r.n(-1,1,"ADJD") && r.n(1,1,"$.")) return "VVFIN";
			if (r.s(-4,"tete")) return "VVFIN";
			if (r.n(-1,1,"PTKNEG") && r.n(1,1,"$.")) return "VVFIN";
			if (r.s(-4,"hten")) return "VVFIN";
			if (r.n(-1,0,"selbst")) return "VVFIN";
			if (r.s(-4,"kten")) return "VVFIN";
			if (r.s(-4,"igte")) return "VVFIN";
			return "NN";
		}
		if (r.n(1,1,"VAFIN")) {
			if (r.s(-4,"eren")) return "PIS";
			if (r.s(-3,"ere")) return "PIS";
			if (r.n(-2,1,"") && r.n(-1,1,"APPRART")) {
				if (r.n(-1,0,"Am")) return "ADJD";
				if (r.w=="anderen" && r.n(-2,1,"") && r.n(-1,1,"APPRART")) return "PIS";
				return "ADJA";
			}
			if (r.n(2,0,"als")) return "ADJD";
			if (r.n(-1,1,"NE") && r.n(1,1,"VAFIN")) return "NE";
			if (r.s(-4,"eite")) return "ADJA";
			if (r.n(-2,1,"") && r.n(-1,1,"ADV")) return "ADJD";
			if (r.w=="kurzem") return "ADJA";
			if (r.n(-1,0,"ein")) return "ADJA";
			if (r.n(-2,0,"um")) return "ADJD";
			if (r.n(-1,0,"desto")) return "ADJD";
			if (r.n(-1,0,"am")) return "ADJD";
			return "NN";
		}
		if (r.n(1,1,"PPER")) {
			if (r.n(-1,0,"")) return "ADV";
			if (r.n(-1,1,"ART")) {
				if (r.n(-1,0,"der")) return "NN";
				return "ADJA";
			}
			return "VVFIN";
		}
		if (r.n(1,1,"VVFIN")) {
			if (r.s(-4,"eren")) return "PIS";
			if (r.s(-4,"dere")) return "PIS";
			if (r.w=="übrigen" && r.n(-1,1,"APPRART") && r.n(1,1,"VVFIN")) return "ADJA";
			if (r.n(-2,1,"NN") && r.n(-1,1,"NE")) return "NE";
			if (r.w=="gleiche") return "ADJA";
			if (r.w=="kurzem") return "ADJA";
			if (r.s(-4,"tere")) return "ADJA";
			if (r.w=="anderer") return "PIS";
			if (r.s(-3,"gem")) return "ADJA";
			if (r.n(-1,0,"Zum")) {
				if (r.n(1,1,"VVFIN") && r.n(2,1,"PPER")) return "PIS";
				return "ADJA";
			}
			if (r.n(2,0,"im")) return "ADJA";
			if (r.w=="besten" && r.n(1,1,"VVFIN")) return "ADJD";
			if (r.s(-4,"inen")) return "ADJA";
			if (r.s(-4,"eite")) return "ADJA";
			if (r.n(-1,1,"$(") && r.n(1,1,"VVFIN")) return "ADJA";
			if (r.w=="ganze" && r.n(-1,1,"ART") && r.n(1,1,"VVFIN")) return "ADJA";
			if (r.w=="dritten" && r.n(-1,1,"ART")) return "ADJA";
			if (r.n(2,0,"ein")) return "ADJA";
			if (r.n(-2,0,"die")) return "ADJA";
			if (r.w=="alte" && r.n(1,1,"VVFIN")) return "ADJA";
			if (r.n(-1,0,"eine")) return "ADJA";
			if (r.n(2,0,"von")) return "ADJA";
			if (r.n(1,0,"erscheint")) return "ADJD";
			return "NN";
		}
		if (r.n(1,1,"VVPP")) {
			if (r.s(-2,"re")) {
				if (r.w=="weitere") return "ADJA";
				return "PIS";
			}
			if (r.w=="anderen") return "PIS";
			if (r.s(-2,"em")) return "ADJA";
			if (r.n(1,1,"VVPP") && r.n(2,1,"NE")) return "ADJA";
			if (r.s(-4,"inen")) return "ADJA";
			if (r.n(-2,1,"ADV") && r.n(-1,1,"ART")) return "ADJA";
			if (r.n(-1,0,"in")) return "ADJA";
			if (r.w=="erster" && r.n(1,1,"VVPP")) return "PIS";
			if (r.n(-1,0,"am")) return "ADJD";
			return "NN";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"$,")) {
			if (r.s(-2,"er")) {
				if (r.n(2,1,"ART")) return "NN";
				return "ADJA";
			}
			if (r.s(-2,"de")) return "ADJA";
			if (r.s(-3,"gen")) return "VVINF";
			if (r.n(2,1,"APPRART")) return "ADJA";
			if (r.s(-2,"es")) return "ADJA";
			if (r.s(-3,"den")) return "ADJA";
			if (r.s(-2,"ne")) return "ADJA";
			if (r.n(2,1,"NN")) return "ADJA";
			return "VVFIN";
		}
		if (r.n(1,1,"APPRART")) {
			if (r.n(-1,1,"NE") && r.n(1,1,"APPRART")) return "NE";
			if (r.n(-2,1,"ADJA")) return "VVFIN";
			if (r.n(-2,0,"Die")) return "VVFIN";
			if (r.w=="anderen" && r.n(1,1,"APPRART") && r.n(2,1,"NN")) return "ADJA";
			if (r.n(-2,0,"von")) return "ADJA";
			if (r.n(-1,1,"APPRART") && r.n(1,1,"APPRART")) return "ADJD";
			if (r.n(-2,1,"PPOSAT") && r.n(-1,1,"NN")) return "VVFIN";
			return "NN";
		}
		if (r.n(1,1,"") && r.n(2,1,"")) {
			if (r.n(-2,1,"APPR")) {
				if (r.n(-2,0,"Von")) return "NE";
				return "NN";
			}
			if (r.n(-1,1,"APPR")) return "NN";
			if (r.w=="11." && r.n(1,1,"") && r.n(2,1,"")) return "ADJA";
			if (r.s(-2,"er")) {
				if (r.n(-2,0,"Von")) return "NE";
				return "NN";
			}
			return "XY";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"ADV")) return "VVFIN";
		if (r.n(1,0,"zu")) {
			if (r.s(-3,"ren")) return "ADJA";
			if (r.n(-1,1,"NN") && r.n(1,1,"PTKZU")) return "PIS";
			if (r.n(-1,0,"als")) return "PIS";
			return "NN";
		}
		if (r.n(1,1,"KON") && r.n(2,1,"NN")) {
			if (r.w=="spielende" && r.n(1,1,"KON") && r.n(2,1,"NN")) return "ADJA";
			if (r.s(-4,"erer")) return "ADJA";
			if (r.n(-2,0,"und")) return "ADJA";
			if (r.n(-1,1,"PTKZU")) return "VVINF";
			return "NN";
		}
		if (r.n(1,1,"VMFIN")) {
			if (r.n(1,1,"VMFIN") && r.n(2,1,"$.")) return "VVINF";
			if (r.w=="anderen") return "PIS";
			if (r.s(-4,"dere")) return "PIS";
			if (r.s(-3,"den")) return "ADJA";
			if (r.s(-3,"gen")) {
				if (r.n(-1,1,"NN")) return "VVINF";
				return "ADJA";
			}
			return "NN";
		}
		if (r.n(-1,1,"ART") && r.n(1,1,"ADV")) {
			if (r.s(-4,"")) return "ADJA";
			if (r.n(-2,0,",")) return "ADJA";
			if (r.s(-4,"eren")) return "ADJA";
			if (r.n(1,0,"Wohl")) return "ADJA";
			if (r.s(-2,"re")) return "PIS";
			return "NN";
		}
		if (r.w=="besten" && r.n(-1,1,"APPRART")) return "ADJD";
		if (r.n(1,1,"VVINF") && r.n(2,1,"VMFIN")) {
			if (r.s(-2,"er")) return "ADJD";
			return "NN";
		}
		if (r.n(-1,1,"") && r.n(1,1,"VVINF")) {
			if (r.s(-2,"re")) return "PIS";
			return "NN";
		}
		if (r.n(-1,1,"NE") && r.n(1,1,"$,")) {
			if (r.s(-2,"er")) return "NE";
			if (r.s(-2,"es")) return "NE";
			if (r.n(2,0,"in")) return "ADJA";
			return "VVFIN";
		}
		if (r.n(1,1,"VAINF")) {
			if (r.s(-2,"en")) {
				if (r.n(2,1,"$.")) return "VVPP";
				if (r.n(-1,1,"NN")) return "VVPP";
				return "NN";
			}
			if (r.n(-1,1,"ART") && r.n(1,1,"VAINF")) return "ADJA";
			if (r.s(-3,"rte")) return "VVFIN";
			return "ADJD";
		}
		if (r.n(1,1,"PPOSAT")) {
			if (r.n(-1,1,"ART") && r.n(1,1,"PPOSAT")) return "NN";
			if (r.s(-2,"he")) return "NN";
			return "VVFIN";
		}
		if (r.n(1,0,"geworden")) return "ADJD";
		if (r.n(1,1,"$,") && r.n(2,1,"ART")) {
			if (r.s(-3,"ren")) {
				if (r.w=="anderen" && r.n(-2,1,"APPR") && r.n(-1,1,"ART")) return "ADJA";
				return "PIS";
			}
			if (r.s(-4,"zige")) return "ADJA";
			if (r.s(-2,"re")) return "PIS";
			if (r.s(-4,"")) return "ADJA";
			if (r.w=="erste" && r.n(1,1,"$,")) return "ADJA";
			if (r.n(-2,0,"-")) return "ADJA";
			if (r.s(-4,"sten")) {
				if (r.w=="ersten" && r.n(-1,1,"ART")) return "PIS";
				return "ADJA";
			}
			if (r.n(-2,0,"er")) return "ADJA";
			if (r.n(-1,1,"PROAV") && r.n(1,1,"$,")) return "VVFIN";
			return "NN";
		}
		if (r.n(-1,1,"ADJA") && r.n(1,1,"ADV")) return "NN";
		if (r.n(1,1,"$(") && r.n(2,1,"ART")) return "NN";
		if (r.w=="andere" && r.n(1,1,"VVINF")) return "PIS";
		if (r.n(1,1,"KON") && r.n(2,1,"NE")) return "NE";
		if (r.n(1,1,"$,") && r.n(2,1,"NE")) {
			if (r.n(-2,1,"NE") && r.n(-1,1,"$,")) return "NE";
			return "NN";
		}
		if (r.n(1,1,"$(") && r.n(2,1,"VVFIN")) return "NN";
		if (r.n(1,1,"VVIZU")) return "NN";
		if (r.n(1,1,"$(") && r.n(2,1,"APPR")) {
			if (r.s(-2,"re")) return "ADJA";
			if (r.n(2,0,"ohne")) return "ADJA";
			if (r.n(2,0,"als")) return "ADJA";
			if (r.n(2,0,"von")) return "ADJA";
			if (r.n(-2,1,"NE")) return "NE";
			return "NN";
		}
		if (r.n(-1,1,"ADV") && r.n(1,1,"VVINF")) {
			if (r.n(-2,1,"ART")) return "NN";
			return "ADJD";
		}
		if (r.n(1,0,"werdenden")) return "ADJD";
		if (r.n(1,1,"$,") && r.n(2,1,"VVPP")) return "NN";
		if (r.n(-1,1,"ART") && r.n(1,1,"PTKNEG")) {
			if (r.s(-3,"ren")) return "PIS";
			return "NN";
		}
		if (r.w=="Frankfurter" && r.n(-1,1,"ART") && r.n(1,1,"VVINF")) return "NN";
		if (r.n(-1,1,"FM")) return "FM";
		if (r.w=="andere" && r.n(1,1,"ADV")) return "PIS";
		if (r.n(-2,1,"") && r.n(-1,1,"PPER")) return "VVFIN";
		if (r.n(-1,0,"") && r.n(1,0,"Wie")) return "ADV";
		if (r.n(-1,0,"dpa")) return "XY";
		if (r.n(1,1,"$(") && r.n(2,1,"VVPP")) return "NN";
		if (r.n(-1,1,"KON") && r.n(1,1,"ADJD")) return "NN";
		if (r.n(-1,1,"PIAT") && r.n(1,1,"ADV")) return "NN";
		if (r.n(1,0,"Klaus")) return "NN";
		if (r.n(1,1,"PTKVZ") && r.n(2,1,"$.")) return "NN";
		if (r.w=="Deutsche" && r.n(-1,1,"APPR")) return "NN";
		if (r.n(1,1,"$(") && r.n(2,1,"$(")) {
			if (r.n(-2,0,"die")) return "ADJA";
			return "NN";
		}
		if (r.n(-1,1,"ADJA") && r.n(1,1,"ADJD")) return "NN";
		if (r.n(1,0,"damals")) return "VVFIN";
		if (r.n(1,0,"diese")) return "VVFIN";
		if (r.n(1,1,"$,") && r.n(2,1,"VAFIN")) {
			if (r.n(-1,1,"ART") && r.n(1,1,"$,")) return "NN";
			return "VVFIN";
		}
		if (r.n(-1,1,"$,") && r.n(1,1,"ADV")) return "VVFIN";
		if (r.n(1,1,"PIS")) return "VVFIN";
		if (r.w=="3." && r.n(-2,0,"") && r.n(-1,0,"")) return "ADV";
		if (r.w=="4." && r.n(-1,0,"")) return "ADV";
		if (r.n(-1,0,"/") && r.n(1,0,")")) return "XY";
		if (r.w=="Bremer" && r.n(-1,0,"Hans-Hagen")) return "NE";
		if (r.n(-1,0,"viel") && r.n(1,0,",")) return "ADJD";
		if (r.w=="wahren" && r.n(1,1,"$,")) return "VVINF";
		if (r.n(-1,1,"PTKZU") && r.n(1,1,"$.")) return "VVINF";
		if (r.n(1,1,"$,") && r.n(2,1,"PWS")) {
			if (r.n(-2,1,"VAFIN")) return "ADJA";
			return "NN";
		}
		if (r.n(1,1,"KOKOM") && r.n(2,1,"NN")) return "NN";
		if (r.w=="Großen" && r.n(1,0,"''")) return "NN";
		if (r.n(-1,1,"ADJA") && r.n(1,1,"$.")) return "NN";
		if (r.n(1,1,"KON") && r.n(2,1,"VVINF")) return "NN";
		if (r.n(-1,0,"ins") && r.n(1,0,",")) return "NN";
		if (r.n(-1,1,"KOKOM") && r.n(1,1,"$,")) return "NN";
		if (r.n(1,0,"weniger")) return "NN";
		if (r.n(1,1,"ADJD") && r.n(2,1,"$(")) return "NN";
		if (r.n(-1,1,"ART") && r.n(1,1,"PROAV")) return "NN";
		if (r.n(-1,1,"APPR") && r.n(1,1,"$.")) {
			if (r.n(-2,1,"") && r.n(-1,1,"APPR")) return "ADV";
			return "NN";
		}
		if (r.w=="Deutschen" && r.n(-1,0,"die")) return "NN";
		if (r.n(-1,1,"ADJD") && r.n(1,1,"VVINF")) {
			if (r.s(-2,"er")) return "ADJD";
			return "NN";
		}
		if (r.n(1,1,"ADJD") && r.n(2,1,"PIAT")) return "NN";
		if (r.n(1,0,"halten")) return "NN";
		if (r.n(-2,1,"FM") && r.n(-1,1,"$(")) return "FM";
		if (r.w=="anderen" && r.n(1,1,"$,") && r.n(2,1,"ADV")) return "PIS";
		if (r.n(1,1,"ADV") && r.n(2,1,"PIAT")) return "VVFIN";
		if (r.n(1,0,"ob")) return "ADV";
		if (r.n(-1,0,"(") && r.n(1,0,"/")) return "XY";
		return "ADJA";
	}
	if (r.t=="ITJ") return "ITJ";
	if (r.t=="PTKNEG") return "PTKNEG";
	if (r.t=="VAPP") return "VAPP";
	if (r.t=="APPO") return "APPO";
	if (r.t=="PRF") return "PRF";
	if (r.t=="VVIZU") return "VVIZU";
	if (r.t=="NN") {
		if (r.n(-2,1,"NN") && r.n(-1,1,"NE")) {
			if (r.n(-2,0,"Firma")) return "NN";
			if (r.n(-1,1,"NE") && r.n(1,1,"FM")) return "FM";
			if (r.s(-3,"ung")) return "NN";
			if (r.n(1,0,"sich")) return "VVFIN";
			if (r.n(2,0,"einem")) return "NN";
			if (r.s(-4,"ffen")) return "NN";
			if (r.w=="Industrie" && r.n(-1,1,"NE")) return "NN";
			if (r.s(-4,"erde")) return "NN";
			if (r.n(1,0,"Dezember")) return "NN";
			if (r.s(-2,"ub")) return "NN";
			if (r.w=="GmbH" && r.n(-2,1,"NN") && r.n(-1,1,"NE")) return "NN";
			if (r.w=="Reisebüro" && r.n(-2,1,"NN") && r.n(-1,1,"NE")) return "NN";
			if (r.w=="AG" && r.n(-2,1,"NN") && r.n(-1,1,"NE")) return "NN";
			if (r.n(-2,0,"Stadt")) return "NN";
			if (r.n(-1,0,"Europas")) return "NN";
			if (r.n(-2,0,"Unternehmen")) return "NN";
			if (r.s(-3,"tik")) return "NN";
			if (r.s(-2,"ft")) return "NN";
			return "NE";
		}
		if (r.n(-1,1,"NE") && r.n(1,1,"$,")) {
			if (r.s(-2,"de")) return "NN";
			if (r.n(2,1,"KOUS")) return "NN";
			if (r.s(-2,"ie")) return "NN";
			if (r.s(-2,"on")) return "NN";
			if (r.n(-2,1,"KOUS")) return "NN";
			if (r.w=="Tod") return "NN";
			if (r.s(-3,"tik")) return "NN";
			if (r.s(-2,"ag")) return "NN";
			if (r.n(-2,0,"nach")) return "VVINF";
			if (r.s(-2,"rn")) return "NN";
			if (r.w=="Generäle" && r.n(1,0,",")) return "NN";
			if (r.n(2,0,"mit")) return "NN";
			if (r.s(-2,"um")) return "NN";
			if (r.s(-3,"ung")) return "NN";
			if (r.n(2,0,"in")) return "NN";
			if (r.s(-4,"ngen")) return "NN";
			if (r.n(2,0,"nach")) return "NN";
			if (r.s(-3,"sse")) return "NN";
			if (r.n(-1,0,"Walesas") && r.n(1,0,",")) return "NN";
			if (r.n(-1,0,"Kohls")) return "NN";
			return "NE";
		}
		if (r.n(1,1,"VMFIN") && r.n(2,1,"$.")) {
			if (r.n(-1,1,"ART")) return "NN";
			if (r.s(-2,"ng")) return "NN";
			return "VVINF";
		}
		if (r.n(-1,1,"NE") && r.n(1,1,"$(")) {
			if (r.w=="AG") return "NN";
			if (r.n(2,1,"")) return "NN";
			if (r.n(-1,0,"of") && r.n(1,0,"''")) return "FM";
			if (r.n(-1,0,"Deutschlands") && r.n(1,0,"''")) return "NN";
			if (r.s(-3,"gen")) return "NN";
			if (r.s(-3,"per")) return "NN";
			if (r.w=="Verlag") return "NN";
			if (r.n(2,0,"oder")) return "NN";
			return "NE";
		}
		if (r.n(-1,1,"FM")) {
			if (r.n(-1,1,"FM") && r.n(1,1,"APPR")) {
				if (r.n(2,1,"NE")) return "NE";
				return "NN";
			}
			if (r.n(-2,0,"in")) return "NN";
			if (r.n(-1,1,"FM") && r.n(1,1,"APPRART")) return "NN";
			if (r.n(1,1,"NE") && r.n(2,1,"NE")) return "NE";
			if (r.n(-2,0,"P.")) return "NN";
			if (r.w=="Enforcement" && r.n(-1,0,"Peace")) return "NN";
			return "FM";
		}
		if (r.n(-2,1,"") && r.n(-1,1,"PPER")) return "VVFIN";
		if (r.n(-1,1,"NN") && r.n(1,1,"PRF")) return "VVFIN";
		if (r.n(1,1,"VMFIN") && r.n(2,1,"$,")) {
			if (r.n(-1,1,"ART")) return "NN";
			if (r.n(-1,1,"ADJA") && r.n(1,1,"VMFIN")) return "NN";
			if (r.n(-2,0,"")) return "NN";
			return "VVINF";
		}
		if (r.n(1,0,"of")) return "NE";
		if (r.w=="All" && r.n(-2,0,"")) return "PIAT";
		if (r.w=="Moderne" && r.n(1,1,"NN")) return "ADJA";
		if (r.n(-1,0,"") && r.n(1,0,"(")) {
			if (r.n(1,1,"$(") && r.n(2,1,"NN")) return "NN";
			return "NE";
		}
		if (r.n(1,0,"Sie")) return "VVFIN";
		if (r.n(-2,1,"$(") && r.n(-1,1,"PPER")) return "VVFIN";
		if (r.n(-1,1,"ADV") && r.n(1,1,"PPER")) return "VVFIN";
		if (r.w=="Würde" && r.n(-1,0,"")) return "VAFIN";
		if (r.n(1,0,"Richter")) {
			if (r.n(-2,1,"$,")) return "NN";
			return "ADJA";
		}
		if (r.n(-1,0,"Bundespräsident") && r.n(1,0,"Herzog")) return "NE";
		if (r.n(1,1,"PTKZU") && r.n(2,1,"VMFIN")) return "VVINF";
		if (r.n(-1,1,"NN") && r.n(1,1,"PPER")) return "VVFIN";
		if (r.n(-1,1,"ADJD") && r.n(1,1,"NN")) {
			if (r.n(-2,1,"NN") && r.n(-1,1,"ADJD")) return "NN";
			if (r.s(-3,"den")) return "NN";
			return "ADJA";
		}
		if (r.n(-1,0,"Martin")) return "NE";
		if (r.w=="Euro" && r.n(1,1,"NE")) return "NE";
		if (r.w=="Mark" && r.n(1,1,"NE")) {
			if (r.w=="Mark" && r.n(-2,1,"CARD") && r.n(-1,1,"NN")) return "NN";
			return "NE";
		}
		if (r.n(-1,1,"$(") && r.n(1,1,"FM")) return "FM";
		if (r.w=="Art" && r.n(1,1,"NE")) return "NE";
		if (r.w=="August" && r.n(1,1,"NE")) return "NE";
		if (r.n(-1,0,"Stadt")) return "NE";
		if (r.n(-1,0,",") && r.n(1,0,"sich")) return "VVFIN";
		if (r.w=="Mal" && r.n(-1,1,"")) return "ADV";
		if (r.w=="Grüne" && r.n(1,1,"NN")) return "ADJA";
		if (r.n(-1,0,"Michael")) return "NE";
		if (r.n(-1,0,"Peter")) return "NE";
		if (r.n(-1,0,"General")) return "NE";
		if (r.n(-1,0,"Außenminister")) return "NE";
		if (r.n(2,0,"7.")) return "NE";
		if (r.n(-1,1,"PTKNEG") && r.n(1,1,"$(")) return "VVINF";
		if (r.n(-1,1,"PTKNEG") && r.n(1,1,"$.")) return "VVINF";
		if (r.w=="Fest" && r.n(-1,0,"")) return "PTKVZ";
		if (r.n(-1,0,",") && r.n(1,0,"die")) return "VVFIN";
		if (r.w=="Neues" && r.n(1,1,"NN")) return "ADJA";
		if (r.n(1,0,"Zustand")) return "ADJA";
		if (r.n(1,0,"Tisch")) return "ADJA";
		if (r.n(-1,0,"Tageszeitung")) return "NE";
		if (r.s(-2,"oj")) return "NE";
		if (r.w=="Kleinen" && r.n(-1,1,"NE")) return "NE";
		if (r.n(-1,0,"Otto")) return "NE";
		if (r.w=="General" && r.n(1,0,"Motors")) {
			if (r.w=="General" && r.n(2,0,"(")) return "FM";
			return "NE";
		}
		if (r.w=="Fonds" && r.n(-1,1,"ART")) {
			if (r.n(2,0,"etwa")) return "NN";
			return "NE";
		}
		if (r.w=="Mann" && r.n(-1,1,"NE")) return "NE";
		if (r.n(-1,0,"Zeitung")) return "NE";
		if (r.w=="Allianz" && r.n(-1,0,"Die")) return "NE";
		if (r.w=="König" && r.n(1,1,"KON") && r.n(2,1,"NE")) return "NE";
		if (r.w=="A" && r.n(-1,0,"&")) return "NE";
		if (r.n(-2,1,"KOKOM") && r.n(-1,1,"NE")) return "NE";
		if (r.n(-1,0,"de")) return "NE";
		if (r.n(-1,0,"Robert")) return "NE";
		if (r.n(1,0,"for")) return "NE";
		if (r.n(-1,0,"Nachrichtenagentur")) return "NE";
		if (r.w=="Meister" && r.n(-1,1,"NE")) return "NE";
		if (r.n(-1,1,"ADV") && r.n(1,1,"PRF")) return "VVFIN";
		if (r.n(-1,1,"ADJD") && r.n(1,1,"PPER")) return "VVFIN";
		if (r.s(-2,"b-")) return "TRUNC";
		if (r.w=="anno" && r.n(1,1,"CARD")) return "APPR";
		if (r.w=="Ganze" && r.n(-1,1,"") && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="Schwere" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="Gute" && r.n(1,1,"NN")) return "ADJA";
		if (r.n(1,0,"Welt")) return "ADJA";
		if (r.n(-1,1,"PTKNEG") && r.n(1,1,"NN")) return "ADJA";
		if (r.n(-1,1,"KOKOM") && r.n(1,1,"NN")) return "ADJA";
		if (r.n(1,0,"Kirche")) return "ADJA";
		if (r.n(-1,0,"äußerst")) return "ADJD";
		if (r.n(-1,0,"Manfred")) return "NE";
		if (r.n(-1,0,"Gerd")) return "NE";
		if (r.w=="Roman" && r.n(-1,0,"Von") && r.n(1,0,"Arens")) return "NE";
		if (r.w=="Jahr" && r.n(-2,1,"NE") && r.n(-1,1,"KON")) return "NE";
		if (r.n(-1,0,"Gerhard")) return "NE";
		if (r.n(-1,0,"Maria")) return "NE";
		if (r.w=="B." && r.n(-1,1,"NE")) return "NE";
		if (r.n(-1,0,"sagte") && r.n(1,0,",")) return "NE";
		if (r.w=="August" && r.n(-1,1,"")) return "NE";
		if (r.w=="Allianz" && r.n(1,1,"NN")) return "NE";
		if (r.s(-2,"iu")) return "NE";
		if (r.w=="Währungsfonds" && r.n(1,1,"VVFIN")) return "NE";
		if (r.n(1,0,"Island")) return "NE";
		if (r.w=="Post" && r.n(-2,1,"ART") && r.n(-1,1,"NE")) return "NE";
		if (r.w=="Reich" && r.n(-2,0,"")) {
			if (r.n(1,1,"ART")) return "NN";
			return "NE";
		}
		if (r.w=="Route" && r.n(-1,1,"NE")) return "NE";
		if (r.w=="City" && r.n(1,1,"NE")) return "NE";
		if (r.n(-1,0,"Richard")) return "NE";
		if (r.n(-1,0,"Sunset")) return "NE";
		if (r.n(-1,0,"John")) return "NE";
		if (r.n(-1,1,"NE") && r.n(1,1,"FM")) return "NE";
		if (r.n(1,0,"Angaben")) return "NE";
		if (r.n(1,0,"Tilmann")) return "NE";
		if (r.s(-2,"CK")) return "NE";
		if (r.n(1,0,"Group")) return "NE";
		if (r.s(-2,"ji")) return "NE";
		if (r.n(-1,0,"König")) return "NE";
		if (r.n(-1,0,"Sender")) return "NE";
		if (r.n(-1,0,"Hauptstadt")) return "NE";
		if (r.n(-1,0,"Alexander")) return "NE";
		if (r.n(-1,1,"NN") && r.n(1,1,"FM")) return "FM";
		if (r.n(1,0,"and")) return "FM";
		if (r.n(-1,1,"APPR") && r.n(1,1,"FM")) return "FM";
		if (r.n(2,0,"the")) return "FM";
		if (r.w=="Reisen" && r.n(-2,0,"''")) return "VVINF";
		if (r.n(-2,1,"KON") && r.n(-1,1,"PPER")) return "VVFIN";
		if (r.n(-2,1,"$,") && r.n(-1,1,"PPER")) return "VVFIN";
		if (r.s(-3,"vte")) return "VVFIN";
		if (r.n(-1,0,"Dort")) return "VVFIN";
		if (r.n(-1,1,"$,") && r.n(1,1,"PPER")) return "VVFIN";
		if (r.n(-1,1,"") && r.n(1,1,"PPER")) {
			if (r.s(-3,"ren")) return "VAFIN";
			return "VVFIN";
		}
		if (r.w=="Rechts" && r.n(-2,0,"") && r.n(-1,0,"")) return "ADV";
		if (r.n(1,0,"worden")) return "VVPP";
		if (r.w=="E" && r.n(1,0,"+") && r.n(2,0,"1")) return "XY";
		if (r.w=="§" && r.n(1,1,"CARD") && r.n(2,1,"$.")) return "XY";
		return "NN";
	}
	if (r.t=="PDAT") {
		if (r.n(1,1,"VAFIN")) return "PDS";
		if (r.n(1,1,"VVFIN")) return "PDS";
		if (r.n(1,1,"VMFIN")) return "PDS";
		if (r.n(1,1,"ADV")) {
			if (r.n(1,1,"ADV") && r.n(2,1,"ADJA")) return "PDAT";
			if (r.w=="dieses") return "PDAT";
			return "PDS";
		}
		if (r.n(1,1,"ART")) return "PDS";
		if (r.n(1,1,"$,") && r.n(2,1,"ART")) return "PDS";
		if (r.n(1,1,"VVINF")) {
			if (r.n(-2,1,"") && r.n(-1,1,"APPR")) return "PDAT";
			return "PDS";
		}
		if (r.n(1,1,"APPR")) {
			if (r.n(2,1,"NE")) return "PDAT";
			if (r.w=="dieser" && r.n(-2,0,"")) return "PDAT";
			if (r.w=="Diese" && r.n(-1,1,"")) return "PDAT";
			if (r.w=="diesem" && r.n(-1,1,"APPR") && r.n(1,1,"APPR")) return "PDAT";
			if (r.w=="dieses" && r.n(-2,0,"")) return "PDAT";
			if (r.n(-1,1,"PTKZU") && r.n(1,1,"APPR")) return "PDAT";
			if (r.w=="dieser" && r.n(2,0,"dem")) return "PDAT";
			return "PDS";
		}
		if (r.n(1,1,"VVPP")) return "PDS";
		if (r.n(1,1,"$.")) return "PDS";
		if (r.n(1,1,"PTKZU")) return "PDS";
		if (r.n(1,1,"PTKNEG")) return "PDS";
		if (r.n(1,0,"sich")) return "PDS";
		if (r.w=="diese" && r.n(1,1,"ADJD")) return "PDS";
		if (r.n(1,1,"APPRART")) {
			if (r.n(1,0,"vom")) return "PDAT";
			return "PDS";
		}
		if (r.n(1,0,"werden")) return "PDS";
		return "PDAT";
	}
	if (r.t=="APPR") {
		if (r.n(1,1,"$.")) {
			if (r.n(-1,0,"") && r.n(1,0,":")) return "APPR";
			if (r.w=="in" && r.n(1,1,"$.")) return "APPR";
			if (r.w=="wegen" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "APPO";
			if (r.w=="Dank") return "NN";
			if (r.s(-4,"rotz")) return "NN";
			if (r.n(-1,0,"werden") && r.n(1,0,":")) return "APPR";
			if (r.w=="laut" && r.n(1,0,".")) return "ADJD";
			return "PTKVZ";
		}
		if (r.n(1,1,"$,")) {
			if (r.w=="laut") return "ADJD";
			if (r.w=="entlang" && r.n(-2,1,"ART") && r.n(-1,1,"NN")) return "APPO";
			if (r.w=="von") return "APPR";
			return "PTKVZ";
		}
		if (r.w=="um" && r.n(-1,0,",")) {
			if (r.w=="um" && r.n(1,1,"ART") && r.n(2,1,"PPER")) return "APPR";
			if (r.w=="um" && r.n(2,0,"Freilassung")) return "APPR";
			return "KOUI";
		}
		if (r.w=="als" && r.n(-1,0,"mehr")) return "KOKOM";
		if (r.w=="bis" && r.n(-1,1,"CARD") && r.n(1,1,"CARD")) {
			if (r.w=="bis" && r.n(-2,0,"von") && r.n(-1,0,"1985")) return "APPR";
			if (r.w=="bis" && r.n(-2,0,"von") && r.n(-1,0,"1988")) return "APPR";
			if (r.w=="bis" && r.n(1,0,"18") && r.n(2,0,"Uhr")) return "APPR";
			if (r.w=="bis" && r.n(1,0,"17") && r.n(2,0,"Uhr")) return "APPR";
			if (r.w=="bis" && r.n(-2,0,"von") && r.n(-1,0,"1910")) return "APPR";
			if (r.n(1,0,"1991")) return "APPR";
			return "KON";
		}
		if (r.w=="als" && r.n(-1,1,"$,")) {
			if (r.w=="als" && r.n(1,1,"KOUS")) return "KOKOM";
			if (r.n(-1,0,",") && r.n(1,0,"''")) return "APPR";
			if (r.w=="als" && r.n(2,0,"er")) return "KOKOM";
			if (r.n(2,1,"$,")) return "APPR";
			if (r.n(1,1,"VAFIN") && r.n(2,1,"PPER")) return "KOKOM";
			if (r.n(1,1,"PPER") && r.n(2,1,"PIAT")) return "KOKOM";
			if (r.w=="als" && r.n(-2,0,"anderes")) return "KOKOM";
			if (r.w=="als" && r.n(1,1,"VVFIN") && r.n(2,1,"PPER")) return "KOKOM";
			if (r.w=="als" && r.n(-2,0,"übrig")) return "KOKOM";
			if (r.w=="als" && r.n(1,1,"NN") && r.n(2,1,"VVPP")) return "APPR";
			if (r.w=="als" && r.n(1,0,"der") && r.n(2,0,"Präsident")) return "KOKOM";
			if (r.w=="als" && r.n(1,1,"APPR") && r.n(2,1,"PPOSAT")) return "KOKOM";
			if (r.w=="als" && r.n(2,0,"Astronomen")) return "KOKOM";
			if (r.w=="als" && r.n(-1,0,",") && r.n(1,0,"hätten")) return "KOKOM";
			if (r.n(1,1,"ADJD") && r.n(2,1,"VVPP")) return "KOKOM";
			if (r.n(-1,0,",") && r.n(1,0,"dies")) return "KOKOM";
			if (r.w=="als" && r.n(2,0,"ist")) return "KOKOM";
			if (r.n(-1,0,",") && r.n(1,0,"hätte")) return "KOKOM";
			if (r.n(-1,0,",") && r.n(1,0,"werde")) return "KOKOM";
			if (r.w=="als" && r.n(1,1,"NN") && r.n(2,1,"$.")) return "APPR";
			if (r.w=="als" && r.n(1,1,"ADJA") && r.n(2,1,"$(")) return "APPR";
			if (r.w=="als" && r.n(1,0,"Vertreter")) return "APPR";
			if (r.w=="als" && r.n(1,1,"NN") && r.n(2,1,"$(")) return "APPR";
			if (r.w=="als" && r.n(1,1,"NN") && r.n(2,1,"ADV")) return "APPR";
			if (r.n(1,1,"NN") && r.n(2,1,"KON")) return "APPR";
			return "KOUS";
		}
		if (r.n(1,1,"") && r.n(2,1,"")) return "PTKVZ";
		if (r.n(1,1,"PTKZU") && r.n(2,1,"CARD")) return "ADV";
		if (r.w=="als" && r.n(-1,1,"ADJD")) {
			if (r.n(1,1,"NN") && r.n(2,1,"APPR")) return "APPR";
			if (r.n(1,1,"$(") && r.n(2,1,"NN")) return "APPR";
			if (r.n(1,1,"NN") && r.n(2,1,"ART")) return "APPR";
			if (r.w=="als" && r.n(-1,0,"erneut")) return "APPR";
			if (r.n(1,1,"NN") && r.n(2,1,"VVINF")) return "APPR";
			if (r.n(1,1,"ADJD") && r.n(2,1,"VVINF")) return "APPR";
			if (r.w=="als" && r.n(1,1,"NN") && r.n(2,1,"VVFIN")) return "APPR";
			if (r.w=="als" && r.n(-2,0,"Jahre") && r.n(-1,0,"lang")) return "APPR";
			if (r.n(-2,1,"PWS")) return "APPR";
			if (r.n(1,1,"$(") && r.n(2,1,"NE")) return "APPR";
			if (r.w=="als" && r.n(1,1,"$(") && r.n(2,1,"ADJA")) return "APPR";
			if (r.n(-1,0,"erfolgreich")) return "APPR";
			if (r.n(2,1,"VVIZU")) return "APPR";
			if (r.w=="als" && r.n(-1,0,"eindeutig")) return "APPR";
			if (r.w=="als" && r.n(-2,0,"sowohl")) return "KON";
			return "KOKOM";
		}
		if (r.w=="als" && r.n(-1,1,"PIAT")) {
			if (r.w=="als" && r.n(-2,0,"von") && r.n(-1,0,"vielen")) return "APPR";
			return "KOKOM";
		}
		if (r.w=="während" && r.n(-1,0,",")) {
			if (r.w=="während" && r.n(-1,0,",") && r.n(1,0,"des")) return "APPR";
			return "KOUS";
		}
		if (r.w=="über" && r.n(1,1,"CARD")) {
			if (r.w=="über" && r.n(1,1,"CARD") && r.n(2,1,"APZR")) return "APPR";
			if (r.n(-2,1,"PIAT")) return "APPR";
			if (r.w=="über" && r.n(-2,1,"ADV") && r.n(-1,1,"ADV")) return "APPR";
			if (r.w=="über" && r.n(-2,1,"NN") && r.n(-1,1,"PTKNEG")) return "APPR";
			if (r.n(-1,0,"sie")) return "APPR";
			if (r.w=="über" && r.n(-2,0,"einer")) return "APPR";
			if (r.w=="über" && r.n(-2,0,"ein")) return "APPR";
			return "ADV";
		}
		if (r.w=="als" && r.n(1,0,"auch")) return "KON";
		if (r.n(1,1,"KOKOM") && r.n(2,1,"APPR")) return "ADV";
		if (r.w=="als" && r.n(1,1,"APPR")) return "KOKOM";
		if (r.w=="vor" && r.n(-2,1,"APPR") && r.n(-1,1,"KOKOM")) return "ADV";
		if (r.n(1,0,"und")) {
			if (r.n(2,1,"APPR")) {
				if (r.s(-2,"ch")) return "ADV";
				return "APPR";
			}
			if (r.w=="von" && r.n(1,0,"und")) return "APPR";
			return "PTKVZ";
		}
		if (r.w=="als" && r.n(1,0,"die")) {
			if (r.w=="als" && r.n(1,1,"ART") && r.n(2,1,"ADJD")) return "APPR";
			if (r.w=="als" && r.n(1,0,"die") && r.n(2,0,"treibende")) return "APPR";
			return "KOKOM";
		}
		if (r.w=="als" && r.n(-1,0,"anders")) return "KOKOM";
		if (r.w=="als" && r.n(-2,0,"mehr")) return "KOKOM";
		if (r.w=="bis" && r.n(1,1,"ART")) {
			if (r.n(-2,1,"ART")) return "KON";
			return "KOUS";
		}
		if (r.w=="an" && r.n(-2,0,"von")) {
			if (r.n(2,1,"VVFIN")) return "APPR";
			if (r.n(1,0,"der")) return "APPR";
			if (r.w=="an" && r.n(-1,1,"NE")) return "APPR";
			if (r.w=="an" && r.n(-1,1,"NN") && r.n(1,1,"NE")) return "APPR";
			return "APZR";
		}
		if (r.n(1,0,"-")) {
			if (r.w=="von" && r.n(1,1,"$(")) return "APPR";
			return "PTKVZ";
		}
		if (r.w=="Zu" && r.n(-1,1,"") && r.n(1,1,"VVINF")) return "PTKZU";
		if (r.n(1,1,"$(") && r.n(2,1,"")) return "PTKVZ";
		if (r.w=="Als" && r.n(1,1,"PPER")) return "KOUS";
		if (r.w=="als" && r.n(-1,1,"VVPP")) {
			if (r.n(1,1,"NN") && r.n(2,1,"APPR")) return "APPR";
			return "KOKOM";
		}
		if (r.n(1,1,"$(") && r.n(2,1,"$,")) return "PTKVZ";
		if (r.w=="als" && r.n(1,1,"APPRART")) return "KOKOM";
		if (r.w=="Als" && r.n(-1,0,"") && r.n(1,0,"die")) return "KOUS";
		if (r.w=="bis" && r.n(-1,1,"$,") && r.n(1,1,"PPER")) return "KOUS";
		if (r.w=="an" && r.n(-2,0,"Von")) return "APZR";
		if (r.w=="aus" && r.n(1,1,"APPR")) {
			if (r.w=="aus" && r.n(-2,0,"von")) return "APZR";
			return "PTKVZ";
		}
		if (r.w=="bis" && r.n(-1,1,"TRUNC")) return "KON";
		if (r.w=="als" && r.n(1,1,"ADV") && r.n(2,1,"$.")) return "KOKOM";
		if (r.w=="ohne" && r.n(-2,1,"VVINF") && r.n(-1,1,"$,")) {
			if (r.w=="ohne" && r.n(1,0,"daß")) return "APPR";
			return "KOUI";
		}
		if (r.w=="während" && r.n(-2,1,"") && r.n(-1,1,"KON")) return "KOUS";
		if (r.w=="als" && r.n(-2,1,"VVPP") && r.n(-1,1,"VAFIN")) return "KOKOM";
		if (r.w=="um" && r.n(1,0,"so")) return "KOUI";
		if (r.w=="an" && r.n(-2,0,"1.")) return "APZR";
		if (r.w=="unter" && r.n(-1,1,"APPR") && r.n(1,1,"CARD")) return "ADV";
		if (r.w=="nach" && r.n(-1,0,"Meinung")) return "APPO";
		if (r.n(1,0,"Pierer")) return "NE";
		if (r.w=="Als" && r.n(-1,0,"") && r.n(1,0,"der")) return "KOUS";
		if (r.w=="Als" && r.n(1,1,"NE")) return "KOUS";
		if (r.w=="als" && r.n(1,1,"PPER")) {
			if (r.n(-1,1,"KON") && r.n(1,1,"PPER")) return "KOUS";
			return "KOKOM";
		}
		if (r.w=="als" && r.n(-1,1,"ADJA")) {
			if (r.w=="als" && r.n(-2,1,"ART") && r.n(-1,1,"ADJA")) return "APPR";
			if (r.w=="als" && r.n(1,0,"''")) return "APPR";
			if (r.w=="als" && r.n(-2,0,"im")) return "APPR";
			return "KOKOM";
		}
		if (r.w=="voller" && r.n(-1,1,"APPR") && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="Zu" && r.n(1,1,"ADJD")) return "PTKA";
		if (r.w=="aus" && r.n(-2,1,"APPR") && r.n(-1,1,"NE")) {
			if (r.w=="aus" && r.n(1,0,"dem")) return "APPR";
			if (r.n(-1,1,"NE") && r.n(1,1,"NE")) return "APPR";
			if (r.w=="aus" && r.n(-1,1,"NE") && r.n(1,1,"PPOSAT")) return "APPR";
			return "APZR";
		}
		if (r.w=="als" && r.n(-1,0,"Anders")) return "KOKOM";
		if (r.w=="als" && r.n(-2,0,"nichts")) return "KOKOM";
		if (r.w=="um" && r.n(-2,1,"$,") && r.n(-1,1,"$(")) return "KOUI";
		if (r.w=="ohne" && r.n(-2,1,"VAFIN") && r.n(-1,1,"$,")) return "KOUI";
		if (r.n(1,0,"wie")) {
			if (r.n(2,1,"ADV")) return "KOUI";
			return "PTKVZ";
		}
		if (r.w=="bis" && r.n(-1,0,"ein")) return "KON";
		if (r.w=="als" && r.n(1,1,"CARD")) return "KOKOM";
		if (r.w=="als" && r.n(1,0,"der")) {
			if (r.n(-2,1,"")) return "KOUS";
			if (r.n(-2,0,",")) return "KOUS";
			return "KOKOM";
		}
		if (r.n(1,1,"$(") && r.n(2,1,"$.")) return "PTKVZ";
		if (r.w=="aus" && r.n(-2,0,"vom")) return "APZR";
		if (r.w=="nach" && r.n(-2,1,"APPR") && r.n(-1,1,"KON")) return "ADV";
		if (r.w=="von" && r.n(-2,1,"") && r.n(-1,1,"NE")) return "NE";
		if (r.w=="bis" && r.n(1,1,"PRF")) return "KOUS";
		if (r.w=="als" && r.n(-2,1,"ADJD") && r.n(-1,1,"VAFIN")) return "KOKOM";
		if (r.w=="nach" && r.n(-1,0,"Vernehmen")) return "APPO";
		if (r.w=="nach" && r.n(-1,0,"Ansicht")) return "APPO";
		if (r.n(-1,0,"zum")) return "NN";
		if (r.w=="Bis" && r.n(-1,1,"") && r.n(1,1,"PPER")) return "KOUS";
		if (r.w=="seit" && r.n(1,0,"die")) return "KOUS";
		if (r.w=="Seit" && r.n(1,0,"die")) return "KOUS";
		if (r.w=="ohne" && r.n(1,1,"PROAV")) return "KOUI";
		if (r.w=="ohne" && r.n(-1,1,"$,") && r.n(1,1,"ADV")) return "KOUI";
		if (r.w=="statt" && r.n(2,0,"zu")) return "KOUI";
		if (r.w=="ohne" && r.n(1,1,"APPR")) return "KOUI";
		if (r.n(-1,0,"Made")) return "FM";
		if (r.w=="an" && r.n(-2,0,"kommenden")) return "APZR";
		if (r.n(1,1,"VMFIN")) {
			if (r.n(-1,1,"PPOSAT")) return "NN";
			return "APZR";
		}
		if (r.w=="aus" && r.n(-2,0,"von") && r.n(-1,0,"sich")) return "APZR";
		if (r.w=="über" && r.n(1,0,"einem")) return "ADV";
		if (r.n(1,0,"Paczensky")) return "NE";
		if (r.w=="Als" && r.n(1,1,"APPRART")) return "KOUS";
		if (r.w=="Als" && r.n(2,0,"die")) return "KOUS";
		if (r.w=="bis" && r.n(-1,1,"$,") && r.n(1,1,"NE")) return "KOUS";
		if (r.w=="Als" && r.n(1,1,"APPR")) return "KOUS";
		if (r.n(1,0,"vielmehr")) return "KON";
		if (r.w=="als" && r.n(1,1,"ADV") && r.n(2,1,"VVPP")) return "KOKOM";
		if (r.w=="laut" && r.n(1,1,"APPR")) return "ADJD";
		if (r.w=="statt" && r.n(-1,0,",") && r.n(1,0,"sich")) return "KOUI";
		if (r.w=="ohne" && r.n(1,1,"PRF")) return "KOUI";
		if (r.w=="ohne" && r.n(1,1,"PTKZU")) return "KOUI";
		if (r.w=="an" && r.n(-2,0,"Januar")) return "APZR";
		if (r.w=="zwischen" && r.n(1,1,"CARD") && r.n(2,1,"CARD")) return "ADV";
		if (r.n(1,1,"PTKZU") && r.n(2,1,"ADV")) return "ADV";
		if (r.w=="durch" && r.n(-2,0,"durch")) return "ADV";
		if (r.n(-2,1,"PTKVZ") && r.n(-1,1,"KON")) return "ADV";
		if (r.w=="plus" && r.n(-1,1,"APPR") && r.n(1,1,"CARD")) return "ADV";
		if (r.w=="mit" && r.n(1,1,"PROAV")) return "ADV";
		if (r.w=="nach" && r.n(-2,0,"aller")) return "APPO";
		if (r.w=="von" && r.n(-1,0,"Herbert")) return "NE";
		if (r.n(1,0,"Hindenburg")) return "NE";
		if (r.w=="von" && r.n(-1,0,"Detlev")) return "NE";
		if (r.w=="von" && r.n(-1,0,"Joachim")) return "NE";
		if (r.w=="Seit" && r.n(-1,1,"") && r.n(1,1,"NE")) return "KOUS";
		if (r.w=="während" && r.n(-1,0,"-")) return "KOUS";
		if (r.w=="seit" && r.n(-1,1,"$,") && r.n(1,1,"ADJA")) return "KOUS";
		if (r.w=="seit" && r.n(1,1,"PPER")) return "KOUS";
		if (r.n(1,0,"freitags")) return "KON";
		if (r.w=="plus" && r.n(-1,0,"Prozent")) return "KON";
		if (r.n(1,1,"VAFIN")) {
			if (r.n(-1,1,"NN") && r.n(1,1,"VAFIN")) return "APZR";
			return "KOKOM";
		}
		if (r.n(-1,0,"") && r.n(1,0,"ob")) return "KOKOM";
		if (r.w=="als" && r.n(-2,1,"ADJA") && r.n(-1,1,"VAFIN")) return "KOKOM";
		if (r.w=="als" && r.n(-1,0,"nichts")) return "KOKOM";
		if (r.w=="als" && r.n(-2,1,"ADJD") && r.n(-1,1,"VVFIN")) return "KOKOM";
		if (r.n(1,1,"VVFIN") && r.n(2,1,"PPER")) {
			if (r.n(-2,1,"ART")) return "APPO";
			return "KOKOM";
		}
		if (r.w=="als" && r.n(-1,1,"VVINF") && r.n(1,1,"ART")) return "KOKOM";
		if (r.w=="als" && r.n(-2,1,"VVINF") && r.n(-1,1,"VMFIN")) return "KOKOM";
		if (r.w=="laut" && r.n(1,1,"ADJD")) return "ADJD";
		if (r.w=="um" && r.n(-2,0,",") && r.n(-1,0,"auch")) return "KOUI";
		if (r.w=="um" && r.n(1,1,"VVIZU") && r.n(2,1,"$,")) return "KOUI";
		if (r.w=="Statt" && r.n(-1,0,"") && r.n(1,0,"die")) return "KOUI";
		if (r.w=="ohne" && r.n(-1,1,"$,") && r.n(1,1,"PPER")) return "KOUI";
		if (r.w=="statt" && r.n(-2,1,"ART") && r.n(-1,1,"$,")) return "KOUI";
		if (r.n(1,0,"bei")) return "PTKVZ";
		if (r.w=="auf" && r.n(1,0,"mit")) return "PTKVZ";
		if (r.w=="mit" && r.n(1,0,"auf")) return "PTKVZ";
		if (r.w=="aus" && r.n(-1,0,"wo")) return "APZR";
		return "APPR";
	}
	if (r.t=="PIAT") {
		if (r.n(1,1,"VVFIN")) return "PIS";
		if (r.n(1,1,"APPR")) {
			if (r.w=="Mehr" && r.n(1,0,"als") && r.n(2,0,"ein")) return "PIAT";
			if (r.w=="genügend") return "ADJD";
			if (r.w=="weniger" && r.n(1,0,"an")) return "ADV";
			if (r.w=="aller") return "PIAT";
			if (r.w=="Mehr" && r.n(2,0,"100")) return "PIAT";
			if (r.n(2,0,"zwei")) return "PIAT";
			if (r.w=="weniger" && r.n(-1,0,"es")) return "ADV";
			if (r.w=="weniger" && r.n(-1,1,"$(")) return "ADV";
			if (r.w=="weniger" && r.n(-2,0,",")) return "ADV";
			if (r.n(-1,0,"ein")) return "NN";
			if (r.w=="Mehr" && r.n(1,0,"als") && r.n(2,0,"80")) return "PIAT";
			if (r.w=="Mehr" && r.n(2,0,"300")) return "PIAT";
			if (r.w=="Mehr" && r.n(1,0,"als") && r.n(2,0,"500")) return "PIAT";
			if (r.n(1,1,"APPR") && r.n(2,1,"PDAT")) return "PIAT";
			if (r.n(2,0,"12")) return "PIAT";
			if (r.n(2,0,"fünf")) return "PIAT";
			if (r.n(2,0,"90")) return "PIAT";
			if (r.n(-1,1,"NE")) return "PIAT";
			return "PIS";
		}
		if (r.n(1,1,"VAFIN")) return "PIS";
		if (r.n(1,0,"der")) {
			if (r.w=="all" && r.n(-1,1,"APPR") && r.n(1,1,"ART")) return "PIAT";
			return "PIS";
		}
		if (r.n(1,0,",")) {
			if (r.w=="einigen" && r.n(1,1,"$,")) return "VVINF";
			if (r.n(-1,0,"in") && r.n(1,0,",")) return "PIAT";
			return "PIS";
		}
		if (r.n(1,1,"VVINF")) return "PIS";
		if (r.w=="weniger" && r.n(1,1,"ADJD")) return "ADV";
		if (r.n(1,1,"VMFIN")) {
			if (r.w=="einigen" && r.n(1,1,"VMFIN")) return "VVINF";
			return "PIS";
		}
		if (r.n(1,1,"VVPP")) {
			if (r.w=="weniger" && r.n(2,0,"und")) return "ADV";
			if (r.w=="weniger" && r.n(2,0,".")) return "ADV";
			if (r.w=="weniger" && r.n(-2,1,"NN") && r.n(-1,1,"ADV")) return "ADV";
			if (r.w=="genügend" && r.n(1,1,"VVPP")) return "ADJD";
			return "PIS";
		}
		if (r.n(1,1,"ADV")) {
			if (r.n(2,1,"ADJA")) return "PIAT";
			if (r.n(2,0,"so")) return "PIAT";
			if (r.n(2,1,"VVFIN")) return "ADV";
			if (r.w=="Mehr" && r.n(1,0,"noch") && r.n(2,0,"als")) return "ADV";
			if (r.s(-4,"elen")) return "PIAT";
			if (r.n(1,0,"lange")) return "PIAT";
			return "PIS";
		}
		if (r.w=="alle" && r.n(1,1,"ADJD")) return "PIS";
		if (r.n(1,1,"$.")) {
			if (r.w=="weniger" && r.n(1,1,"$.")) return "ADV";
			if (r.s(-3,"gen")) return "VVINF";
			if (r.w=="keine" && r.n(-2,1,"PPER") && r.n(-1,1,"ADV")) return "PIAT";
			return "PIS";
		}
		if (r.n(1,0,"seiner")) return "PIS";
		if (r.w=="weniger" && r.n(1,1,"ART")) return "ADV";
		if (r.n(1,1,"VAINF")) return "PIS";
		if (r.n(1,0,"dieser")) return "PIS";
		if (r.w=="meisten" && r.n(-1,1,"APPRART")) return "PIS";
		if (r.w=="alle" && r.n(1,1,"ART")) return "PIS";
		if (r.n(1,0,"ihrer")) return "PIS";
		if (r.n(1,0,"zu")) return "PIS";
		if (r.n(1,1,"APPRART")) {
			if (r.w=="weniger" && r.n(1,1,"APPRART") && r.n(2,1,"NN")) return "ADV";
			if (r.n(1,0,"zur")) return "PIAT";
			return "PIS";
		}
		if (r.n(1,0,"-")) return "PIS";
		if (r.n(1,0,"voran")) return "PIS";
		if (r.w=="jeder" && r.n(1,1,"ART")) return "PIS";
		if (r.n(1,0,"nicht")) return "PIS";
		if (r.n(1,1,"ADJD") && r.n(2,1,"$.")) return "PIS";
		if (r.n(-2,1,"$,") && r.n(-1,1,"PWS")) return "PIS";
		if (r.w=="jeder" && r.n(-2,1,"VAFIN") && r.n(-1,1,"ADV")) return "PIS";
		if (r.w=="alle" && r.n(-1,0,"für") && r.n(1,0,"''")) return "PIS";
		if (r.n(1,0,"davon")) return "PIS";
		return "PIAT";
	}
	if (r.t=="ADJD") {
		if (r.w=="gut" && r.n(1,1,"CARD")) return "ADV";
		if (r.w=="gut" && r.n(1,1,"ART")) return "ADV";
		if (r.w=="international" && r.n(-1,1,"NE")) return "NE";
		if (r.n(-1,1,"APPR") && r.n(1,1,"NN")) {
			if (r.s(-2,"ch")) return "ADJD";
			if (r.s(-2,"ig")) return "ADJD";
			return "ADJA";
		}
		if (r.w=="genau" && r.n(1,1,"CARD")) return "ADV";
		if (r.w=="wichtiger" && r.n(1,1,"NN")) return "ADJA";
		if (r.n(-2,0,"Von")) {
			if (r.n(2,1,"NN")) return "ADJD";
			return "NE";
		}
		if (r.w=="verstärkt" && r.n(1,0,".")) return "VVPP";
		if (r.n(1,0,"worden")) return "VVPP";
		if (r.w=="bekannt" && r.n(-1,1,"NE") && r.n(1,1,"$.")) return "PTKVZ";
		if (r.w=="frei" && r.n(2,0,"")) return "PTKVZ";
		if (r.w=="entsprechend" && r.n(1,1,"ART")) return "APPR";
		if (r.w=="genau" && r.n(1,1,"ART") && r.n(2,1,"NN")) return "ADV";
		if (r.w=="sicher" && r.n(1,1,"ADV")) return "ADV";
		if (r.w=="weit" && r.n(1,0,"mehr")) return "ADV";
		if (r.w=="voll" && r.n(1,1,"NN")) return "APPR";
		if (r.w=="verstärkt" && r.n(1,0,",")) return "VVPP";
		if (r.w=="still" && r.n(1,0,".")) return "PTKVZ";
		if (r.w=="bekannt" && r.n(-1,0,"gab") && r.n(1,0,",")) return "PTKVZ";
		if (r.w=="niedriger" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="wichtiger" && r.n(1,1,"ADJA")) return "ADJA";
		if (r.w=="schlechter" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="sicher" && r.n(-2,0,"Das")) return "ADV";
		if (r.w=="rein" && r.n(1,1,"ADJD")) return "ADV";
		if (r.w=="Gut" && r.n(-2,1,"ART") && r.n(-1,1,"ADJA")) return "NN";
		if (r.n(-2,1,"ADJD") && r.n(-1,1,"ADJA")) return "NN";
		if (r.s(-3,"ear")) return "NE";
		if (r.n(-1,1,"APPR") && r.n(1,1,"NE")) return "NE";
		if (r.w=="offen" && r.n(-1,1,"NE")) return "PTKVZ";
		if (r.w=="fern" && r.n(-1,1,"NN")) return "PTKVZ";
		if (r.w=="frei" && r.n(-1,1,"NN") && r.n(1,1,"$,")) return "PTKVZ";
		if (r.w=="offen" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "PTKVZ";
		if (r.w=="tiefer" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="deutlicher" && r.n(-1,1,"ART") && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="stärksten" && r.n(-1,1,"ART")) return "ADJA";
		if (r.w=="schwieriger" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="einfacher" && r.n(-1,1,"NN")) return "ADJA";
		if (r.w=="geringer" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="interessiert" && r.n(1,1,"PRF")) return "VVFIN";
		return "ADJD";
	}
	if (r.t=="VVINF") {
		if (r.n(2,1,"NN")) {
			if (r.n(1,0,"von")) return "NN";
			if (r.n(-1,1,"PTKZU") && r.n(1,1,"KON")) return "VVINF";
			if (r.n(-1,0,"zu") && r.n(1,0,",")) return "VVINF";
			if (r.n(-1,1,"APPRART")) return "NN";
			if (r.n(-2,1,"APPR") && r.n(-1,1,"ART")) return "NN";
			if (r.n(-1,1,"PROAV") && r.n(1,1,"$,")) return "VVINF";
			if (r.n(-2,1,"NN") && r.n(-1,1,"APPR")) {
				if (r.s(-3,"gen")) return "NE";
				return "NN";
			}
			if (r.n(1,0,"des")) return "NN";
			if (r.n(-2,1,"NN") && r.n(-1,1,"ADJA")) return "NN";
			if (r.n(-2,1,"APPR") && r.n(-1,1,"PPOSAT")) return "NN";
			if (r.n(-2,1,"$,") && r.n(-1,1,"NN")) return "VVINF";
			if (r.n(-1,1,"ADJD") && r.n(1,1,"KON")) return "VVINF";
			if (r.n(-1,1,"PTKZU") && r.n(1,1,"$.")) return "VVINF";
			if (r.n(-2,0,"zum")) return "VVINF";
			if (r.w=="bleiben" && r.n(1,0,",")) return "VVINF";
			if (r.n(-1,1,"NE") && r.n(1,1,"KON")) return "VVINF";
			if (r.n(-1,0,"durch")) return "NN";
			if (r.n(-1,1,"ADJA") && r.n(1,1,"$,")) return "NN";
			if (r.n(-2,1,"TRUNC")) return "NN";
			if (r.n(-1,0,",") && r.n(1,0,"und")) return "NN";
			if (r.n(-1,0,"das") && r.n(1,0,"der")) return "NN";
			if (r.n(-1,0,",") && r.n(1,0,",")) return "NN";
			if (r.n(2,0,"Tel.")) return "NE";
			if (r.w=="abschotten" && r.n(-1,1,"NN")) return "VVINF";
			if (r.n(-2,1,"ADJD") && r.n(-1,1,"NN")) return "VVINF";
			if (r.n(2,0,"Vertrauen")) return "VVINF";
			if (r.w=="geben" && r.n(1,1,"$,") && r.n(2,1,"NN")) return "VVINF";
			if (r.w=="aufstellen" && r.n(1,1,"KON") && r.n(2,1,"NN")) return "VVINF";
			if (r.w=="befassen") return "VVINF";
			if (r.n(2,0,"Begriffe")) return "VVINF";
			if (r.n(-1,0,"''") && r.n(1,0,",")) return "VVINF";
			if (r.n(-2,0,"auch")) return "VVINF";
			return "VVFIN";
		}
		if (r.n(-2,0,"")) {
			if (r.n(1,1,"VAFIN")) return "VVINF";
			if (r.n(1,1,"VMFIN")) return "VVINF";
			if (r.n(1,1,"$.") && r.n(2,1,"")) return "VVINF";
			if (r.n(1,1,"VVFIN")) return "VVINF";
			if (r.n(-1,0,"Zu")) return "VVINF";
			if (r.n(-2,1,"") && r.n(-1,1,"APPR")) {
				if (r.n(-1,0,"Zu")) return "VVINF";
				return "NN";
			}
			if (r.w=="sehen" && r.n(1,0,",")) return "VVINF";
			if (r.w=="beachten" && r.n(1,1,"")) return "VVINF";
			if (r.n(-1,0,"''") && r.n(1,0,"''")) return "VVINF";
			if (r.n(-1,1,"ADJD") && r.n(1,1,"")) return "VVINF";
			if (r.n(1,0,"des")) return "NN";
			return "VVFIN";
		}
		if (r.n(1,1,"PPER")) return "VVFIN";
		if (r.n(1,1,"ADV")) {
			if (r.n(-1,1,"PTKZU") && r.n(1,1,"ADV")) return "VVINF";
			if (r.n(-1,0,"weder")) return "VVINF";
			if (r.n(-2,1,"NN") && r.n(-1,1,"APPR")) return "NN";
			if (r.n(-2,1,"CARD") && r.n(-1,1,"ADJA")) return "NN";
			return "VVFIN";
		}
		if (r.n(1,1,"PRF")) return "VVFIN";
		if (r.n(1,1,"ART")) {
			if (r.n(-1,1,"ART")) return "NN";
			if (r.n(-1,1,"APPRART") && r.n(1,1,"ART")) return "NN";
			return "VVFIN";
		}
		if (r.n(1,1,"NN")) {
			if (r.n(-1,1,"ART") && r.n(1,1,"NN")) return "ADJA";
			if (r.n(-2,1,"ART") && r.n(-1,1,"$(")) return "ADJA";
			if (r.s(-4,"euen")) return "ADJA";
			return "VVFIN";
		}
		if (r.n(1,1,"APPR")) {
			if (r.n(-1,1,"PTKZU")) return "VVINF";
			if (r.n(-2,1,"VMFIN")) return "VVINF";
			if (r.n(-1,1,"ADJD") && r.n(1,1,"APPR")) return "VVINF";
			if (r.n(-1,1,"APPR") && r.n(1,1,"APPR")) return "NN";
			if (r.n(-1,0,"mehr")) return "VVINF";
			if (r.w=="geben" && r.n(1,1,"APPR") && r.n(2,1,"ART")) return "VVINF";
			if (r.n(-2,0,"sich")) return "VVINF";
			if (r.n(-1,0,"nicht")) return "VVINF";
			if (r.n(2,0,"ohne")) return "VVINF";
			if (r.s(-4,"esen")) return "VVINF";
			if (r.n(2,0,"zuvor")) return "VVINF";
			if (r.n(-1,0,"dem")) return "NN";
			return "VVFIN";
		}
		if (r.n(1,1,"PROAV")) return "VVFIN";
		if (r.n(1,1,"ADJD")) {
			if (r.n(1,1,"ADJD") && r.n(2,1,"VAFIN")) return "VVINF";
			return "VVFIN";
		}
		if (r.n(-2,0,"Die")) return "VVFIN";
		if (r.n(-1,1,"APPRART")) return "NN";
		if (r.n(1,1,"NE")) return "VVFIN";
		if (r.n(1,0,"nicht")) return "VVFIN";
		if (r.n(-2,1,"APPR") && r.n(-1,1,"ART")) {
			if (r.n(2,0,"was")) return "VVFIN";
			return "NN";
		}
		if (r.n(-2,1,"NN") && r.n(-1,1,"APPR")) {
			if (r.s(-3,"hen")) return "VVINF";
			return "NN";
		}
		if (r.w=="erhalten" && r.n(-1,1,"NN")) {
			if (r.n(-1,1,"NN") && r.n(1,1,"VMFIN")) return "VVINF";
			if (r.w=="erhalten" && r.n(-2,1,"KON") && r.n(-1,1,"NN")) return "VVINF";
			if (r.w=="erhalten" && r.n(-1,1,"NN") && r.n(1,1,"VVFIN")) return "VVINF";
			return "VVPP";
		}
		if (r.n(2,0,"sind")) {
			if (r.n(-1,0,"zu") && r.n(1,0,",")) return "VVINF";
			return "VVFIN";
		}
		if (r.w=="wissen" && r.n(2,0,"daß")) return "VVFIN";
		if (r.w=="verlassen" && r.n(1,1,"VAFIN")) return "VVPP";
		if (r.n(1,1,"PIS")) return "VVFIN";
		if (r.n(1,1,"PIAT")) return "VVFIN";
		if (r.n(1,1,"ADJA")) return "VVFIN";
		if (r.w=="beraten" && r.n(1,1,"VAINF")) return "VVPP";
		if (r.n(-2,1,"NN") && r.n(-1,1,"KON")) {
			if (r.n(1,0,",")) return "VVFIN";
			return "NN";
		}
		if (r.n(-1,0,"heute")) return "VVFIN";
		if (r.n(1,1,"CARD")) return "VVFIN";
		if (r.w=="erhalten" && r.n(1,0,"werden")) return "VVPP";
		if (r.w=="verhalten" && r.n(1,1,"VAFIN")) return "VVPP";
		if (r.n(-1,0,"ein")) return "NN";
		if (r.n(1,1,"$,") && r.n(2,1,"VAINF")) {
			if (r.n(-2,1,"NN")) return "VVINF";
			return "VVFIN";
		}
		if (r.n(2,0,"seien")) return "VVFIN";
		if (r.n(1,1,"PDS")) return "VVFIN";
		if (r.w=="kämpfen" && r.n(-1,1,"NN") && r.n(1,1,"$,")) return "VVFIN";
		if (r.n(1,1,"PDAT")) return "VVFIN";
		if (r.w=="empfangen" && r.n(1,0,"worden") && r.n(2,0,".")) return "VVPP";
		if (r.w=="erhalten" && r.n(-1,1,"CARD") && r.n(1,1,"$.")) return "VVPP";
		if (r.w=="erhalten" && r.n(1,1,"VAFIN") && r.n(2,1,"$,")) return "VVPP";
		if (r.w=="beraten" && r.n(-1,1,"ADJD")) return "VVPP";
		if (r.w=="betragen" && r.n(1,0,"hatte")) return "VVPP";
		if (r.w=="erhalten" && r.n(-1,1,"NE")) return "VVPP";
		if (r.w=="überlassen" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "VVPP";
		if (r.n(-1,1,"APPR") && r.n(1,1,"VVPP")) return "NN";
		if (r.n(-1,0,"in")) return "NE";
		if (r.w=="verhalten" && r.n(-1,1,"ADV")) return "ADJD";
		if (r.w=="zurückgehen" && r.n(1,0,".") && r.n(2,0,"")) return "VVFIN";
		if (r.w=="teilnehmen" && r.n(1,1,"$,") && r.n(2,1,"VVFIN")) return "VVFIN";
		if (r.w=="stellen" && r.n(2,0,"und")) return "VVFIN";
		if (r.n(-2,0,"gleichen")) return "VVFIN";
		if (r.w=="verbergen" && r.n(-1,1,"NN")) return "VVFIN";
		if (r.n(1,1,"APPRART")) return "VVFIN";
		if (r.w=="denken" && r.n(-1,1,"NN")) return "VVFIN";
		if (r.w=="auftreten" && r.n(1,0,".") && r.n(2,0,"")) return "VVFIN";
		if (r.w=="hinweisen" && r.n(1,1,"$.")) return "VVFIN";
		if (r.w=="angehören" && r.n(1,1,"$,")) return "VVFIN";
		if (r.n(-1,0,"die") && r.n(1,0,",")) return "VVFIN";
		if (r.w=="ausgehen" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "VVFIN";
		if (r.w=="konzentrieren" && r.n(-1,1,"NN") && r.n(1,1,"$,")) return "VVFIN";
		if (r.n(-2,1,"PTKZU") && r.n(-1,1,"VVFIN")) return "VVFIN";
		if (r.w=="halten" && r.n(-1,1,"NN") && r.n(1,1,"$,")) {
			if (r.n(2,1,"KON")) return "VVINF";
			if (r.n(2,0,"sonst")) return "VVINF";
			return "VVFIN";
		}
		if (r.n(1,1,"PTKVZ")) return "VVFIN";
		if (r.w=="verstehen" && r.n(-1,1,"$(")) return "VVFIN";
		return "VVINF";
	}
	if (r.t=="FM") {
		if (r.n(-2,1,"NE") && r.n(-1,1,"NE")) {
			if (r.w=="And" && r.n(2,0,"Road")) return "FM";
			if (r.n(2,0,"''")) return "FM";
			return "NE";
		}
		if (r.n(-1,1,"NE") && r.n(1,1,"NE")) {
			if (r.s(-2,"se")) return "FM";
			if (r.n(2,1,"FM")) return "FM";
			return "NE";
		}
		return "FM";
	}
	if (r.t=="PTKVZ") {
		if (r.w=="ab" && r.n(1,1,"CARD")) {
			if (r.n(2,0,"SFr")) return "ADV";
			return "APPR";
		}
		if (r.n(-1,1,"APPR")) {
			if (r.s(-2,"st")) return "ADJD";
			return "ADV";
		}
		if (r.n(1,1,"ART")) {
			if (r.w=="voran") return "ADV";
			return "APPR";
		}
		if (r.n(1,1,"NN")) return "APPR";
		if (r.n(1,1,"ADJA") && r.n(2,1,"NN")) {
			if (r.s(-3,"nde")) return "PTKVZ";
			return "APPR";
		}
		if (r.n(1,1,"PTKZU")) return "ADV";
		if (r.w=="hin" && r.n(1,1,"KON") && r.n(2,1,"ADV")) return "ADV";
		if (r.w=="fest" && r.n(2,0,",")) return "ADJD";
		if (r.w=="hin" && r.n(-2,0,"vor")) return "ADV";
		if (r.n(1,1,"APPRART") && r.n(2,1,"NN")) {
			if (r.w=="fest" && r.n(1,1,"APPRART") && r.n(2,1,"NN")) return "ADJD";
			return "ADV";
		}
		if (r.n(1,1,"NE")) return "APPR";
		if (r.w=="fest" && r.n(1,0,"in")) return "ADJD";
		if (r.w=="fest" && r.n(1,1,"VVPP")) return "ADJD";
		if (r.w=="voraus" && r.n(-1,0,"im")) return "ADV";
		if (r.w=="zurück" && r.n(1,0,"in")) return "ADV";
		if (r.n(1,1,"ADV")) return "APPR";
		if (r.n(-2,0,"um")) return "APZR";
		if (r.w=="heraus" && r.n(1,1,"VVPP")) return "APZR";
		return "PTKVZ";
	}
	if (r.t=="PRELS") {
		if (r.n(1,0,",")) return "PDS";
		if (r.w=="welches" && r.n(1,1,"NN")) return "PWAT";
		if (r.n(-2,1,"NN") && r.n(-1,1,"APPR")) return "PDS";
		if (r.w=="denen" && r.n(-2,0,"Vergleich")) return "PDS";
		if (r.n(-2,1,"ADV")) return "PDS";
		return "PRELS";
	}
	if (r.t=="PIS") {
		if (r.w=="wenig" && r.n(1,1,"NN")) return "PIAT";
		if (r.w=="etwas" && r.n(1,1,"ADJD")) {
			if (r.n(1,0,"falsch")) return "PIS";
			return "ADV";
		}
		if (r.w=="anderes" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="etwas" && r.n(1,1,"ADJA")) {
			if (r.w=="etwas" && r.n(1,1,"ADJA") && r.n(2,1,"VVPP")) return "PIAT";
			if (r.n(-2,1,"NN")) return "PIAT";
			if (r.n(-2,1,"PPER")) return "PIAT";
			return "ADV";
		}
		if (r.w=="etwas" && r.n(1,1,"NN")) {
			if (r.w=="etwas" && r.n(-1,1,"ART") && r.n(1,1,"NN")) return "ADV";
			if (r.n(-2,1,"$,") && r.n(-1,1,"ADV")) return "ADV";
			return "PIAT";
		}
		if (r.w=="etwas" && r.n(1,1,"ADV")) {
			if (r.n(1,0,"ganz")) return "PIAT";
			return "ADV";
		}
		if (r.w=="keiner" && r.n(1,1,"NN")) return "PIAT";
		if (r.w=="wenig" && r.n(1,1,"ADJA")) return "ADV";
		if (r.w=="bißchen" && r.n(1,1,"NN")) return "PIAT";
		if (r.w=="alles" && r.n(1,1,"ADJA")) return "PIAT";
		if (r.w=="Einer" && r.n(1,1,"NN")) return "ART";
		if (r.w=="etwas" && r.n(1,1,"VVPP")) {
			if (r.w=="etwas" && r.n(1,1,"VVPP") && r.n(2,1,"VAFIN")) return "PIS";
			return "ADV";
		}
		if (r.w=="wenig" && r.n(-1,0,"so")) return "ADV";
		if (r.w=="soviel" && r.n(1,1,"NN")) return "PIAT";
		if (r.w=="etwas" && r.n(1,1,"PIAT")) return "ADV";
		if (r.w=="wenig" && r.n(1,1,"ADJD")) {
			if (r.n(-1,0,"ein")) return "PIS";
			return "ADV";
		}
		if (r.w=="keiner" && r.n(1,1,"ADJA")) return "PIAT";
		if (r.w=="alles" && r.n(-1,1,"$,") && r.n(1,1,"NN")) return "PIAT";
		if (r.w=="etwas" && r.n(1,0,"an")) return "ADV";
		if (r.w=="Eines" && r.n(-1,1,"$(") && r.n(1,1,"NN")) return "ART";
		if (r.n(-1,0,"des")) return "NN";
		if (r.n(-1,1,"APPR") && r.n(1,1,"PIS")) return "PIAT";
		if (r.w=="wenigsten" && r.n(1,1,"NN")) return "PIAT";
		if (r.n(-1,1,"ART") && r.n(1,1,"NE")) return "PIAT";
		if (r.n(-1,1,"ADV") && r.n(1,1,"NN")) return "PIAT";
		if (r.n(-1,0,"am")) return "ADJD";
		return "PIS";
	}
	if (r.t=="VMPP") return "VMPP";
	if (r.t=="PROAV") {
		if (r.w=="damit" && r.n(-1,1,"$,")) {
			if (r.n(-1,1,"$,") && r.n(1,1,"VAFIN")) return "PROAV";
			if (r.n(2,0,",")) return "PROAV";
			return "KOUS";
		}
		if (r.w=="Damit" && r.n(-1,1,"") && r.n(1,1,"ART")) return "KOUS";
		if (r.w=="dabei" && r.n(1,1,"$.")) return "PTKVZ";
		if (r.w=="daher" && r.n(-2,1,"APPR") && r.n(-1,1,"NN")) return "PTKVZ";
		if (r.w=="davon" && r.n(1,1,"$.")) return "PTKVZ";
		return "PROAV";
	}
	if (r.t=="VVFIN") {
		if (r.n(-1,0,"zu")) return "VVINF";
		if (r.n(1,1,"VMFIN")) {
			if (r.n(2,1,"ADV")) return "NN";
			return "VVINF";
		}
		if (r.n(1,1,"VAFIN")) {
			if (r.s(-2,"en")) return "VVINF";
			if (r.w=="bemüht" && r.n(1,0,"ist") && r.n(2,0,",")) return "ADJD";
			return "VVPP";
		}
		if (r.n(-1,1,"ART") && r.n(1,1,"NN")) {
			if (r.s(-2,"bt")) return "VVFIN";
			return "ADJA";
		}
		if (r.n(1,0,"werden")) {
			if (r.s(-2,"en")) return "VVINF";
			return "VVPP";
		}
		if (r.n(-1,1,"VAFIN")) {
			if (r.s(-2,"en")) return "VVINF";
			return "VVPP";
		}
		if (r.w=="erwartet" && r.n(2,0,"")) return "VVPP";
		if (r.w=="erklärt" && r.n(1,1,"$,")) return "VVPP";
		if (r.w=="kommen" && r.n(2,0,"")) return "VVINF";
		if (r.n(-1,1,"ADJD") && r.n(1,1,"NN")) {
			if (r.n(1,1,"NN") && r.n(2,1,"NE")) return "VVFIN";
			if (r.s(-3,"gen")) return "VVFIN";
			if (r.w=="reagierten" && r.n(-1,1,"ADJD") && r.n(1,1,"NN")) return "VVFIN";
			return "ADJA";
		}
		if (r.w=="erklärt" && r.n(2,0,"")) return "VVPP";
		if (r.n(1,0,"lassen")) return "VVINF";
		if (r.n(1,1,"NN") && r.n(2,1,"VVFIN")) return "ADJA";
		if (r.n(1,1,"PTKZU") && r.n(2,1,"VMFIN")) return "VVINF";
		if (r.n(1,1,"VAPP")) return "VVPP";
		if (r.n(1,1,"VVFIN")) {
			if (r.n(-1,1,"APPRART") && r.n(1,1,"VVFIN")) return "NN";
			if (r.s(-4,"")) return "VVFIN";
			if (r.s(-2,"et")) return "VVPP";
			if (r.s(-2,"te")) return "NN";
			return "VVINF";
		}
		if (r.w=="meinen" && r.n(1,1,"NN")) return "PPOSAT";
		if (r.w=="verlangt" && r.n(2,0,"")) return "VVPP";
		if (r.n(1,1,"NN") && r.n(2,1,"VAFIN")) return "ADJA";
		if (r.w=="beschäftigt" && r.n(1,1,"$.") && r.n(2,1,"")) return "VVPP";
		if (r.w=="verlangt" && r.n(1,0,",")) {
			if (r.n(-2,1,"ADJA")) return "VVFIN";
			return "VVPP";
		}
		if (r.w=="berichtet" && r.n(1,1,"$,")) {
			if (r.w=="berichtet" && r.n(1,1,"$,") && r.n(2,1,"VAFIN")) return "VVFIN";
			return "VVPP";
		}
		if (r.w=="arbeiten" && r.n(1,1,"$.")) {
			if (r.n(-1,0,"Männer") && r.n(1,0,".")) return "VVFIN";
			return "VVINF";
		}
		if (r.w=="legen" && r.n(1,0,".")) return "VVINF";
		if (r.w=="treten" && r.n(1,0,".") && r.n(2,0,"")) return "VVINF";
		if (r.n(-1,1,"APPR") && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="beziffert" && r.n(1,0,".") && r.n(2,0,"")) return "VVPP";
		if (r.n(-2,1,"VAFIN") && r.n(-1,1,"NE")) return "VVPP";
		if (r.n(-2,1,"VVFIN") && r.n(-1,1,"ART")) return "NN";
		if (r.n(-1,1,"APPRART")) {
			if (r.n(1,1,"NN")) return "ADJA";
			return "NN";
		}
		if (r.w=="richten" && r.n(1,0,".") && r.n(2,0,"")) return "VVINF";
		if (r.n(-2,1,"VMFIN") && r.n(-1,1,"PTKNEG")) return "VVINF";
		if (r.w=="stehen" && r.n(1,0,".") && r.n(2,0,"")) {
			if (r.n(-2,1,"ADJA") && r.n(-1,1,"NN")) return "VVFIN";
			if (r.n(-2,0,"in")) return "VVFIN";
			if (r.n(-1,0,"Kurs") && r.n(1,0,".")) return "VVFIN";
			return "VVINF";
		}
		if (r.n(-1,1,"VMFIN")) {
			if (r.n(-2,0,"zu")) return "VVFIN";
			return "VVINF";
		}
		if (r.n(-2,1,"NE") && r.n(-1,1,"PTKNEG")) return "VVINF";
		if (r.n(1,1,"NN") && r.n(2,1,"VMFIN")) return "ADJA";
		if (r.n(-1,1,"PPOSAT") && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="verlangte" && r.n(1,1,"NN")) return "ADJA";
		if (r.n(1,1,"NN") && r.n(2,1,"VVPP")) return "ADJA";
		if (r.w=="verdient" && r.n(1,0,".")) return "VVPP";
		if (r.n(-2,1,"VAFIN") && r.n(-1,1,"PPER")) {
			if (r.s(-2,"en")) return "VVINF";
			return "VVPP";
		}
		if (r.w=="befürchtet" && r.n(2,0,"")) return "VVPP";
		if (r.w=="erwartet" && r.n(-1,0,"wie")) return "VVPP";
		if (r.w=="erlaubt" && r.n(1,1,"$,")) return "VVPP";
		if (r.n(-2,1,"NN") && r.n(-1,1,"ART")) {
			if (r.n(-1,0,"das")) return "VVFIN";
			return "NN";
		}
		if (r.w=="streiten" && r.n(1,1,"$.")) return "VVINF";
		if (r.w=="fühlen" && r.n(1,1,"$.")) return "VVINF";
		if (r.w=="beschäftigen" && r.n(1,0,".")) return "VVINF";
		if (r.w=="zählen" && r.n(1,0,".")) return "VVINF";
		if (r.w=="laufen" && r.n(1,1,"$,")) return "VVINF";
		if (r.w=="berichtet" && r.n(1,0,".")) return "VVPP";
		if (r.w=="beklagt" && r.n(1,0,".")) return "VVPP";
		if (r.w=="bereitet" && r.n(1,1,"$.")) return "VVPP";
		if (r.n(-1,0,"Restaurants")) return "VVPP";
		if (r.w=="erwartet" && r.n(1,0,"-")) return "VVPP";
		if (r.w=="erwartet" && r.n(-1,0,"als")) return "VVPP";
		if (r.n(1,1,"PTKZU") && r.n(2,1,"VAFIN")) return "VVPP";
		if (r.w=="formuliert" && r.n(1,1,"$(")) return "VVPP";
		if (r.w=="schreibe" && r.n(-1,0,"und")) return "VVIMP";
		if (r.w=="sage" && r.n(1,1,"KON")) return "VVIMP";
		if (r.n(-1,0,"für")) return "NN";
		if (r.w=="stammen" && r.n(1,1,"$.")) return "VVINF";
		if (r.w=="hoffen" && r.n(1,1,"$.")) return "VVINF";
		if (r.w=="belaufen" && r.n(-1,0,"Mark") && r.n(1,0,".")) return "VVINF";
		if (r.w=="reichen" && r.n(1,1,"$.") && r.n(2,1,"")) return "VVINF";
		if (r.w=="kommen" && r.n(1,0,",")) {
			if (r.n(-1,0,"Deutschland") && r.n(1,0,",")) return "VVFIN";
			if (r.n(-2,1,"APPRART") && r.n(-1,1,"NN")) return "VVFIN";
			return "VVINF";
		}
		if (r.w=="bergen" && r.n(1,0,".") && r.n(2,0,"")) return "VVINF";
		if (r.w=="wünschen" && r.n(1,1,"$.")) return "VVINF";
		if (r.n(-1,0,"auch") && r.n(1,0,",")) return "VVINF";
		if (r.w=="behaupten" && r.n(2,0,"")) return "VVINF";
		if (r.w=="spielen" && r.n(1,1,"$.") && r.n(2,1,"")) return "VVINF";
		if (r.w=="fühlen" && r.n(-1,1,"NN") && r.n(1,1,"$,")) return "VVINF";
		if (r.n(2,0,"lassen")) return "VVINF";
		if (r.w=="fließen" && r.n(-2,0,"die")) return "VVINF";
		if (r.n(-2,1,"VMFIN") && r.n(-1,1,"PIS")) return "VVINF";
		if (r.w=="klagen" && r.n(-1,1,"NN") && r.n(1,1,"$.")) return "VVINF";
		if (r.w=="ziehen" && r.n(1,0,",")) return "VVINF";
		if (r.w=="hängen" && r.n(-2,1,"ART") && r.n(-1,1,"NN")) return "VVINF";
		if (r.w=="verurteilte" && r.n(1,1,"NN")) return "ADJA";
		if (r.w=="beendete" && r.n(-1,1,"NN") && r.n(1,1,"NN")) return "ADJA";
		if (r.n(-2,1,"VAFIN") && r.n(-1,1,"ADV")) return "ADJD";
		return "VVFIN";
	}
	if (r.t=="TRUNC") return "TRUNC";
	if (r.t=="$.") {
		if (r.w==":" && r.n(-2,0,"(") && r.n(-1,0,"Bild")) return "$(";
		return "$.";
	}
	if (r.t=="$,") return "$,";
	if (r.t=="PPOSAT") {
		if (r.w=="ihr" && r.n(1,1,"ART")) return "PPER";
		if (r.w=="ihr" && r.n(-1,0,"von")) return "PPER";
		if (r.w=="ihr" && r.n(1,1,"VVFIN")) return "PPER";
		if (r.w=="ihr" && r.n(1,1,"ADV")) return "PPER";
		if (r.n(1,1,"VAFIN")) return "PPER";
		if (r.w=="ihr" && r.n(1,1,"APPR")) return "PPER";
		if (r.w=="Ihr" && r.n(-2,0,",")) return "PPER";
		if (r.w=="Ihr" && r.n(1,1,"VVFIN")) return "PPER";
		if (r.w=="Seine" && r.n(-2,1,"APPR") && r.n(-1,1,"ART")) return "NE";
		if (r.w=="ihr" && r.n(1,0,",")) return "PPER";
		if (r.n(1,1,"PTKZU")) return "PPER";
		if (r.w=="ihr" && r.n(1,1,"ADJD")) {
			if (r.w=="ihr" && r.n(1,1,"ADJD") && r.n(2,1,"$.")) return "PPOSAT";
			return "PPER";
		}
		if (r.w=="ihr" && r.n(1,1,"VVPP")) return "PPER";
		if (r.w=="ihr" && r.n(-2,1,"") && r.n(-1,1,"APPR")) return "PPER";
		if (r.w=="Sein" && r.n(-1,1,"KON")) return "NN";
		if (r.w=="Sein" && r.n(1,1,"KON") && r.n(2,1,"NN")) return "NN";
		if (r.w=="ihr" && r.n(-1,0,"mit")) return "PPER";
		if (r.w=="ihr" && r.n(-1,0,"bei")) return "PPER";
		if (r.w=="Ihr" && r.n(-1,1,"VVFIN")) return "PPER";
		if (r.n(-1,0,",") && r.n(1,0,"Jünglinge")) return "PPER";
		return "PPOSAT";
	}
	if (r.t=="$(") return "$(";
	if (r.t=="KOUS") {
		if (r.w=="bevor" && r.n(2,0,"")) return "PTKVZ";
		if (r.n(1,0,"des")) return "APPR";
		if (r.n(-1,0,"") && r.n(1,0,"")) return "XY";
		if (r.n(-1,0,"je")) return "PROAV";
		if (r.n(1,0,"seiner")) return "APPR";
		return "KOUS";
	}
	if (r.t=="PDS") {
		if (r.w=="dessen" && r.n(-1,1,"$,")) return "PRELAT";
		if (r.w=="dessen" && r.n(-2,1,"$,") && r.n(-1,1,"APPR")) {
			if (r.w=="dessen" && r.n(-2,0,",") && r.n(-1,0,"statt")) return "PDS";
			return "PRELAT";
		}
		if (r.w=="dessen" && r.n(-2,1,"$,") && r.n(-1,1,"PTKZU")) return "PRELAT";
		return "PDS";
	}
	if (r.t=="VVPP") {
		if (r.n(1,1,"ART")) {
			if (r.s(-4,"sagt")) return "VVPP";
			if (r.w=="vergessen" && r.n(-1,1,"PTKZU") && r.n(1,1,"ART")) return "VVINF";
			if (r.n(-1,1,"VAFIN")) return "VVPP";
			if (r.n(1,0,"des")) return "NN";
			if (r.n(-1,0,"das") && r.n(1,0,"der")) return "NN";
			return "VVFIN";
		}
		if (r.n(1,1,"PRF")) return "VVFIN";
		if (r.n(1,1,"NN")) {
			if (r.n(-1,1,"ART") && r.n(1,1,"NN")) return "ADJA";
			if (r.s(-4,"chen")) return "ADJD";
			if (r.n(-1,1,"ADJD") && r.n(1,1,"NN")) return "VVPP";
			if (r.n(-2,0,"die")) return "ADJD";
			if (r.s(-4,"eden")) return "ADJD";
			if (r.n(1,0,"Jahre")) return "CARD";
			return "VVFIN";
		}
		if (r.n(1,1,"PPER")) return "VVFIN";
		if (r.n(1,1,"NE")) {
			if (r.n(-1,1,"ADJA") && r.n(1,1,"NE")) return "NN";
			if (r.w=="genannt" && r.n(1,1,"NE")) return "VVPP";
			if (r.n(-1,0,"Polizeichef")) return "NE";
			return "VVFIN";
		}
		if (r.n(1,1,"ADV")) {
			if (r.n(-1,0,"weder")) return "VVPP";
			if (r.n(-2,0,"-")) return "VVPP";
			if (r.w=="gefördert" && r.n(-1,1,"ADJD")) return "VVPP";
			if (r.n(1,0,"erst")) return "VVPP";
			if (r.n(2,1,"VAFIN")) return "ADJD";
			if (r.n(-1,1,"PPOSAT")) return "NN";
			return "VVFIN";
		}
		if (r.n(-1,0,"zu")) return "VVINF";
		if (r.n(-2,1,"") && r.n(-1,1,"NE")) {
			if (r.n(1,1,"") && r.n(2,1,"")) return "VVPP";
			if (r.n(-1,0,"Stark")) return "VVPP";
			return "VVFIN";
		}
		if (r.n(1,1,"ADJD")) {
			if (r.n(-2,1,"CARD")) return "VVPP";
			if (r.n(-2,0,"in")) return "NN";
			if (r.n(2,1,"$.")) return "ADJD";
			return "VVFIN";
		}
		if (r.n(-2,1,"APPR") && r.n(-1,1,"ART")) return "NN";
		if (r.n(1,0,"man")) return "VVFIN";
		if (r.n(1,1,"PPOSAT")) return "VVFIN";
		if (r.n(1,1,"VMFIN")) {
			if (r.s(-2,"lt")) return "VVPP";
			return "VVINF";
		}
		if (r.n(1,1,"ADJA")) {
			if (r.n(-1,1,"ART")) return "ADJD";
			if (r.s(-2,"nt")) {
				if (r.w=="getrennt" && r.n(1,1,"ADJA")) return "ADJD";
				return "VVPP";
			}
			if (r.n(-2,1,"APPR") && r.n(-1,1,"ADV")) return "ADJD";
			return "VVFIN";
		}
		if (r.n(-1,0,"für")) return "ADJD";
		if (r.n(-2,1,"") && r.n(-1,1,"PPER")) return "VVFIN";
		if (r.n(-2,0,"Der")) return "VVFIN";
		if (r.n(-2,1,"ADJD") && r.n(-1,1,"KON")) {
			if (r.n(2,0,"den")) return "VVPP";
			return "ADJD";
		}
		if (r.n(-2,0,"Die")) return "VVFIN";
		if (r.n(-1,1,"NE") && r.n(1,1,"APPR")) return "VVFIN";
		if (r.n(1,0,"dies")) return "VVFIN";
		if (r.w=="gefallen" && r.n(1,0,"lassen")) return "VVINF";
		if (r.n(-1,1,"") && r.n(1,1,"VVFIN")) return "ADJD";
		if (r.n(-1,1,"NN") && r.n(1,1,"APPRART")) return "VVFIN";
		if (r.n(-2,1,"NN") && r.n(-1,1,"ART")) return "NN";
		if (r.w=="geschickt" && r.n(-1,1,"ADV")) return "ADJD";
		if (r.n(-1,0,"als") && r.n(1,0,"an")) return "ADJD";
		if (r.n(-2,0,"Wer")) return "VVFIN";
		if (r.s(-4,"")) return "VVFIN";
		if (r.n(1,1,"VVPP")) {
			if (r.s(-4,"htet")) return "VVPP";
			if (r.s(-4,"tert")) return "VVPP";
			if (r.w=="geplant" && r.n(2,0,"worden")) return "VVPP";
			if (r.s(-4,"hont")) return "VVPP";
			if (r.s(-4,"iert")) return "VVPP";
			if (r.n(-2,1,"$(")) return "VVPP";
			return "ADJD";
		}
		if (r.w=="betreut" && r.n(1,1,"$,")) return "VVFIN";
		if (r.n(1,1,"CARD") && r.n(2,1,"NN")) return "VVFIN";
		if (r.n(1,1,"PDAT") && r.n(2,1,"NN")) return "VVFIN";
		if (r.w=="übertragen" && r.n(1,0,".")) return "VVINF";
		if (r.n(-1,1,"APPRART")) return "NN";
		if (r.n(-1,0,"in")) {
			if (r.s(-3,"ben")) return "NN";
			return "NE";
		}
		if (r.w=="gewachsen" && r.n(-1,0,"nicht")) return "ADJD";
		if (r.w=="bedacht" && r.n(-1,1,"PROAV")) return "ADJD";
		if (r.n(-1,0,"militärisch")) return "ADJD";
		if (r.n(-1,0,"zutiefst")) return "ADJD";
		if (r.w=="geschickt" && r.n(1,0,"in")) return "ADJD";
		if (r.n(-2,1,"APPR") && r.n(-1,1,"$(")) return "ADJD";
		if (r.n(1,1,"PTKVZ")) return "ADJD";
		if (r.w=="entlastet" && r.n(-2,1,"ART") && r.n(-1,1,"NN")) return "VVFIN";
		if (r.w=="diskutiert" && r.n(1,0,"über")) return "VVFIN";
		if (r.w=="entstanden" && r.n(1,1,"APPR")) return "VVFIN";
		if (r.w=="vermittelt" && r.n(1,1,"$.")) return "VVFIN";
		if (r.n(1,1,"PIAT")) return "VVFIN";
		if (r.n(1,1,"VAINF") && r.n(2,1,"NN")) {
			if (r.n(1,0,"werden")) return "VVPP";
			return "VVFIN";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"PTKNEG")) return "VVFIN";
		if (r.n(-2,1,"") && r.n(-1,1,"PDAT")) return "VVFIN";
		if (r.n(-1,0,"selbst") && r.n(1,0,",")) return "VVFIN";
		return "VVPP";
	}
	if (r.t=="XY") {
		if (r.w=="S" && r.n(-2,1,"NE") && r.n(-1,1,"KON")) return "NE";
		if (r.n(1,1,"FM")) return "FM";
		return "XY";
	}
	if (r.t=="PRELAT") {
		if (r.n(-1,1,"APPR")) {
			if (r.w=="deren" && r.n(2,0,"die")) return "PRELAT";
			if (r.n(1,1,"NN") && r.n(2,1,"PRF")) return "PRELAT";
			if (r.w=="deren" && r.n(-2,0,",") && r.n(-1,0,"an")) return "PRELAT";
			if (r.w=="deren" && r.n(-2,0,",") && r.n(-1,0,"mit")) return "PRELAT";
			if (r.w=="deren" && r.n(-2,0,",") && r.n(-1,0,"aus")) return "PRELAT";
			if (r.w=="deren" && r.n(-2,0,",") && r.n(-1,0,"über")) return "PRELAT";
			if (r.w=="deren" && r.n(-2,0,",") && r.n(-1,0,"durch")) return "PRELAT";
			return "PDS";
		}
		if (r.w=="deren" && r.n(-1,1,"KON")) {
			if (r.n(-2,1,"VVPP")) return "PRELAT";
			if (r.w=="deren" && r.n(1,1,"NN") && r.n(2,1,"ADJD")) return "PRELAT";
			return "PDS";
		}
		if (r.n(-1,1,"ADV")) return "PDS";
		if (r.n(-2,0,",")) {
			if (r.n(2,1,"ADJA")) return "PRELAT";
			return "PDS";
		}
		if (r.n(-1,1,"NN")) return "PDS";
		if (r.w=="deren" && r.n(-1,1,"ADJD")) return "PDS";
		if (r.w=="deren" && r.n(-1,1,"VVFIN")) return "PDS";
		return "PRELAT";
	}
	if (r.t=="PTKANT") {
		if (r.n(-1,1,"ART")) return "NN";
		if (r.n(-2,1,"ART")) return "NN";
		if (r.n(-1,1,"APPR") && r.n(1,1,"$.")) return "NN";
		if (r.n(1,1,"APPRART")) return "NN";
		return "PTKANT";
	}
	if (r.t=="PTKZU") {
		if (r.n(1,1,"ART")) return "APPR";
		if (r.n(1,1,"NN")) {
			if (r.n(-2,1,"KON") && r.n(-1,1,"ADJD")) return "PTKZU";
			if (r.w=="zu" && r.n(-2,1,"PDAT") && r.n(-1,1,"NN")) return "PTKZU";
			return "APPR";
		}
		if (r.n(2,1,"NN")) {
			if (r.w=="zu" && r.n(-2,1,"APPR") && r.n(-1,1,"APPR")) return "ADV";
			if (r.w=="zu" && r.n(1,0,"viele")) return "PTKA";
			if (r.n(1,0,"wenig")) return "PTKA";
			if (r.n(1,0,"hohe")) return "PTKA";
			if (r.n(1,0,"20")) return "ADV";
			if (r.n(-2,1,"NE") && r.n(-1,1,"APPR")) return "ADV";
			if (r.w=="zu" && r.n(-1,0,"bis") && r.n(1,0,"zwei")) return "ADV";
			if (r.n(-2,1,"NN") && r.n(-1,1,"ART")) {
				if (r.w=="zu" && r.n(1,0,"hohen")) return "PTKA";
				return "PTKZU";
			}
			if (r.w=="zu" && r.n(1,0,"hohen") && r.n(2,0,"Defiziten")) return "PTKA";
			if (r.w=="zu" && r.n(-1,0,"viel")) return "PTKA";
			if (r.n(-2,1,"ADJD") && r.n(-1,1,"APPR")) return "ADV";
			if (r.n(2,0,"Meter")) return "ADV";
			if (r.w=="zu" && r.n(2,0,"Milliarden")) return "ADV";
			if (r.w=="zu" && r.n(-1,0,"schwer")) return "PTKZU";
			if (r.w=="zu" && r.n(1,0,"viel")) return "PTKA";
			if (r.w=="zu" && r.n(1,0,"niedrigen")) return "PTKA";
			if (r.w=="zu" && r.n(1,0,"geringe")) return "PTKA";
			if (r.n(-1,0,"einer") && r.n(1,0,"hohen")) return "PTKA";
			if (r.w=="zu" && r.n(-1,0,"mit")) return "PTKA";
			if (r.n(-2,1,"ART") && r.n(-1,1,"$(")) return "PTKA";
			if (r.n(1,0,"starke")) return "PTKA";
			if (r.w=="zu" && r.n(-1,0,"bis") && r.n(1,0,"vier")) return "ADV";
			if (r.n(2,0,"Jahre")) return "ADV";
			if (r.w=="zu" && r.n(1,0,"6000") && r.n(2,0,"Menschen")) return "ADV";
			if (r.w=="zu" && r.n(-2,0,"''") && r.n(-1,0,"bis")) return "ADV";
			if (r.w=="zu" && r.n(-1,0,"bis") && r.n(1,0,"80")) return "ADV";
			if (r.w=="zu" && r.n(-2,0,"Betriebszugehörigkeit")) return "ADV";
			if (r.n(-1,0,"bis") && r.n(1,0,"90")) return "ADV";
			if (r.n(2,0,"Probleme")) return "PTKZU";
			if (r.w=="zu" && r.n(-2,1,"ART") && r.n(-1,1,"PTKNEG")) return "PTKZU";
			if (r.w=="zu" && r.n(-1,1,"CARD") && r.n(1,1,"ADJA")) return "PTKZU";
			if (r.w=="zu" && r.n(-2,0,"''") && r.n(-1,0,"noch")) return "PTKZU";
			if (r.n(-2,1,"ADJD")) {
				if (r.n(1,1,"CARD")) return "ADV";
				return "PTKZU";
			}
			if (r.w=="zu" && r.n(-2,1,"ART") && r.n(-1,1,"ADJD")) return "PTKZU";
			if (r.n(1,0,"verantwortende")) return "PTKZU";
			if (r.w=="zu" && r.n(1,0,"erwartenden")) return "PTKZU";
			return "APPR";
		}
		if (r.w=="zu" && r.n(1,1,"ADJD")) {
			if (r.n(1,0,"eigen")) return "APPR";
			if (r.n(1,0,"deutsch")) return "APPR";
			if (r.w=="zu" && r.n(1,0,"enthalten")) return "PTKZU";
			if (r.w=="zu" && r.n(1,0,"viert")) return "APPR";
			return "PTKA";
		}
		if (r.n(2,0,"")) {
			if (r.n(1,1,"NE") && r.n(2,1,"")) return "APPR";
			if (r.n(1,1,"VVINF")) return "PTKZU";
			if (r.n(1,1,"VVFIN") && r.n(2,1,"")) return "PTKZU";
			if (r.n(1,1,"VAFIN") && r.n(2,1,"")) return "PTKZU";
			return "PTKVZ";
		}
		if (r.w=="zu" && r.n(1,1,"NE")) return "APPR";
		if (r.n(1,0,",")) return "PTKVZ";
		if (r.n(2,1,"ADJA")) {
			if (r.n(-1,1,"APPR") && r.n(1,1,"CARD")) return "ADV";
			if (r.n(-1,1,"ADJD") && r.n(1,1,"ADJA")) return "PTKZU";
			return "APPR";
		}
		if (r.w=="zu" && r.n(1,1,"CARD")) {
			if (r.w=="zu" && r.n(-1,1,"APPR") && r.n(1,1,"CARD")) return "ADV";
			return "APPR";
		}
		if (r.n(1,1,"ADV")) {
			if (r.w=="zu" && r.n(1,0,"sehr")) return "PTKA";
			if (r.w=="zu" && r.n(1,0,"viel")) return "PTKA";
			if (r.w=="zu" && r.n(1,0,"lange")) return "PTKA";
			if (r.w=="zu" && r.n(-2,1,"ADV") && r.n(-1,1,"APPR")) return "ADV";
			if (r.n(-2,1,"")) return "PTKA";
			return "APPR";
		}
		if (r.n(1,1,"PIS")) {
			if (r.w=="zu" && r.n(1,0,"allem")) return "APPR";
			return "PTKA";
		}
		if (r.n(1,1,"PPER")) return "APPR";
		if (r.w=="zu" && r.n(1,0,"denen")) return "APPR";
		if (r.n(1,1,"PPOSAT")) return "APPR";
		if (r.n(1,1,"$.")) return "PTKVZ";
		if (r.w=="zu" && r.n(1,1,"TRUNC")) return "APPR";
		if (r.n(1,0,"sich")) return "APPR";
		if (r.w=="zu" && r.n(1,0,"und")) return "PTKVZ";
		if (r.w=="zu" && r.n(1,1,"APPR")) return "PTKVZ";
		if (r.w=="zu" && r.n(1,1,"PDAT")) return "APPR";
		if (r.n(1,1,"KOKOM")) return "PTKVZ";
		if (r.n(2,1,"TRUNC")) return "APPR";
		return "PTKZU";
	}
	if (r.t=="CARD") {
		if (r.s(-3,"gen")) {
			if (r.n(1,1,"APPR")) return "NN";
			if (r.n(1,1,"ART") && r.n(2,1,"NN")) return "NN";
			if (r.n(1,1,"APPRART")) return "NN";
			return "ADJA";
		}
		if (r.s(-3,"ige")) {
			if (r.n(1,1,"VAFIN")) return "NN";
			return "ADJA";
		}
		if (r.s(-3,"ger")) {
			if (r.n(-2,1,"VVFIN") && r.n(-1,1,"ART")) return "NN";
			return "ADJA";
		}
		if (r.s(-3,"mal")) return "ADV";
		if (r.s(-3,"ten")) return "NN";
		if (r.s(-3,"ung")) return "NN";
		if (r.s(-2,"ke")) return "NN";
		if (r.s(-3,"nen")) return "NN";
		if (r.s(-4,"iges")) return "ADJA";
		if (r.s(-2,"ge")) return "NN";
		if (r.s(-3,"ern")) return "NN";
		if (r.s(-2,"te")) return "NN";
		if (r.s(-2,"de")) return "NN";
		if (r.n(-1,0,"außer")) return "NN";
		if (r.s(-3,"der")) return "NN";
		if (r.s(-2,"ik")) return "NN";
		if (r.s(-2,"ie")) return "NN";
		if (r.n(-1,1,"PPOSAT") && r.n(1,1,"APPRART")) return "NN";
		if (r.s(-3,"elb")) return "ADJD";
		if (r.s(-4,"hrig")) return "ADJD";
		return "CARD";
	}
	if (r.t=="KOUI") {
		if (r.n(1,1,"CARD")) return "APPR";
		if (r.n(2,1,"CARD")) return "APPR";
		return "KOUI";
	}
	if (r.t=="VVIMP") {
		if (r.n(1,1,"PIS")) return "VVFIN";
		return "VVIMP";
	}
	if (r.t=="ART") {
		if (r.w=="die" && r.n(-1,0,",")) {
			if (r.n(-2,1,"PROAV") && r.n(-1,1,"$,")) return "ART";
			if (r.w=="die" && r.n(1,1,"NN") && r.n(2,1,"ADJD")) return "ART";
			if (r.n(2,0,"sei")) return "ART";
			if (r.w=="die" && r.n(-2,0,"sagte") && r.n(-1,0,",")) return "ART";
			if (r.w=="die" && r.n(1,1,"NN") && r.n(2,1,"VVIZU")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"SPD")) return "ART";
			if (r.w=="die" && r.n(2,0,"werde")) return "ART";
			if (r.n(1,1,"NN") && r.n(2,1,"$.")) return "ART";
			if (r.n(1,1,"NN") && r.n(2,1,"$(")) return "ART";
			if (r.n(2,0,"hätten")) return "ART";
			if (r.w=="die" && r.n(2,0,"eines")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"beiden")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"meisten")) return "ART";
			if (r.w=="die" && r.n(-2,0,"sei")) return "ART";
			if (r.w=="die" && r.n(1,0,"geplante")) return "ART";
			if (r.w=="die" && r.n(-2,0,"versucht") && r.n(-1,0,",")) return "ART";
			if (r.w=="die" && r.n(1,1,"$(") && r.n(2,1,"NE")) return "ART";
			if (r.n(1,0,"USA")) return "ART";
			if (r.w=="die" && r.n(1,0,"Zahl")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"IG")) return "ART";
			if (r.n(1,1,"ADJA") && r.n(2,1,"APPR")) return "ART";
			if (r.w=="die" && r.n(2,0,"müßten")) return "ART";
			if (r.n(1,0,"PDS")) return "ART";
			if (r.w=="die" && r.n(2,0,"habe")) return "ART";
			if (r.w=="die" && r.n(1,1,"NN") && r.n(2,1,"VAINF")) return "ART";
			if (r.w=="die" && r.n(1,0,"Rückkehr")) return "ART";
			if (r.w=="die" && r.n(1,0,"deutsche")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Mittel")) return "ART";
			if (r.n(-2,0,"gelungen")) return "ART";
			if (r.w=="die" && r.n(-2,0,"erklärt") && r.n(-1,0,",")) return "ART";
			if (r.n(1,0,"Tiere")) return "ART";
			if (r.n(1,1,"NN") && r.n(2,1,"PTKNEG")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Geschichte")) return "ART";
			if (r.n(-2,0,"betonte")) return "ART";
			if (r.w=="die" && r.n(-2,0,"forderte") && r.n(-1,0,",")) return "ART";
			if (r.w=="die" && r.n(-2,0,"erklärte")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Bundesregierung")) return "ART";
			if (r.w=="die" && r.n(1,0,"eigene")) return "ART";
			if (r.n(2,0,"müssen")) return "ART";
			if (r.n(-2,0,"Versuch")) return "ART";
			if (r.n(-2,1,"PTKANT") && r.n(-1,1,"$,")) return "ART";
			if (r.n(-1,1,"$,") && r.n(1,1,"VAFIN")) return "PDS";
			if (r.w=="die" && r.n(1,0,"Gewalt")) return "ART";
			if (r.n(1,0,"Tochter")) return "ART";
			if (r.w=="die" && r.n(-2,0,"Anlaß")) return "ART";
			if (r.n(1,0,"Niederlande")) return "ART";
			if (r.w=="die" && r.n(1,1,"ADJA") && r.n(2,1,"TRUNC")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Arbeitslosigkeit")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"wirtschaftliche")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"politische")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Deutsche")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Tür")) return "ART";
			if (r.w=="die" && r.n(-2,0,"berichtet")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Rechte")) return "ART";
			if (r.n(-2,0,"gefordert")) return "ART";
			if (r.n(-2,0,"Pläne")) return "ART";
			if (r.n(-2,0,"würden")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"kleinen")) return "ART";
			if (r.n(1,0,"alten")) return "ART";
			if (r.n(1,0,"Anlage")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"neuen")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Hälfte")) return "ART";
			if (r.n(1,1,"ADJA") && r.n(2,1,"VMFIN")) return "ART";
			if (r.n(-2,0,"hören")) return "ART";
			if (r.n(2,0,"Seite")) return "ART";
			if (r.w=="die" && r.n(1,1,"ADJA") && r.n(2,1,"$(")) return "ART";
			if (r.n(1,0,"DB")) return "ART";
			if (r.n(-2,0,"Parlament")) return "ART";
			if (r.n(-2,0,"Ziel")) return "ART";
			if (r.w=="die" && r.n(-2,0,"beitragen")) return "ART";
			if (r.w=="die" && r.n(-2,0,"gedroht") && r.n(-1,0,",")) return "ART";
			if (r.n(2,0,"könnten")) return "ART";
			if (r.n(-2,0,"aufgefordert")) return "ART";
			if (r.n(2,0,"solle")) return "ART";
			if (r.n(1,0,"Gruppe")) return "ART";
			if (r.w=="die" && r.n(1,1,"ADJA") && r.n(2,1,"CARD")) return "ART";
			if (r.w=="die" && r.n(-2,0,"geeinigt") && r.n(-1,0,",")) return "ART";
			if (r.n(2,0,"würden")) return "ART";
			if (r.w=="die" && r.n(1,0,"von") && r.n(2,0,"ihm")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Haltung")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Abgeordneten")) return "ART";
			if (r.w=="die" && r.n(1,0,"Bedeutung")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Beteiligung")) return "ART";
			if (r.n(1,0,"Banque")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"künftige")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"ökologischen")) return "ART";
			if (r.n(1,0,"Kinder")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Ausgaben")) return "ART";
			if (r.w=="die" && r.n(-2,0,"Gegenteil")) return "ART";
			if (r.w=="die" && r.n(1,0,"Berliner") && r.n(2,0,"Senatorin")) return "ART";
			if (r.n(-2,0,"Leben")) return "ART";
			if (r.w=="die" && r.n(1,0,"''") && r.n(2,0,"Büchse")) return "ART";
			if (r.w=="die" && r.n(1,0,"Marktkräfte")) return "ART";
			if (r.w=="die" && r.n(-2,0,"Teil")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Streitigkeiten")) return "ART";
			if (r.w=="die" && r.n(1,0,"Entwicklung")) return "ART";
			if (r.w=="die" && r.n(1,0,"Menschen")) return "ART";
			if (r.n(1,0,"Grünen")) return "ART";
			if (r.n(1,0,"großen")) return "ART";
			if (r.n(2,0,"Versorgung")) return "ART";
			if (r.n(2,0,"seines")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Parteiarbeit")) return "ART";
			if (r.w=="die" && r.n(1,0,"Allianz")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"zweite")) return "ART";
			if (r.w=="die" && r.n(2,0,"kurdische")) return "ART";
			if (r.w=="die" && r.n(-2,0,"wir") && r.n(-1,0,",")) return "ART";
			if (r.w=="die" && r.n(1,0,"Vision") && r.n(2,0,"des")) return "ART";
			if (r.n(2,0,"Opposition")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Telekommunikation")) return "ART";
			if (r.w=="die" && r.n(1,0,"Steuer-") && r.n(2,0,"und")) return "ART";
			if (r.n(1,0,"Tat")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Verantwortung")) return "ART";
			if (r.w=="die" && r.n(-2,0,"außerstande")) return "ART";
			if (r.n(-2,0,"weigerte")) return "ART";
			if (r.w=="die" && r.n(2,0,"Kontrolle")) return "ART";
			if (r.n(2,0,"Kräfte")) return "ART";
			if (r.w=="die" && r.n(1,0,"radikale")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"übrigen")) return "ART";
			if (r.w=="die" && r.n(1,0,"männlichen")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"soziale")) return "ART";
			if (r.w=="die" && r.n(-2,0,"verpflichtet") && r.n(-1,0,",")) return "ART";
			if (r.n(1,0,"nächste")) return "ART";
			if (r.w=="die" && r.n(1,0,"Kuratoren")) return "ART";
			if (r.n(1,0,"Mehrheit")) return "ART";
			if (r.w=="die" && r.n(-2,0,"das")) return "ART";
			if (r.w=="die" && r.n(-2,0,"Guattari") && r.n(-1,0,",")) return "ART";
			if (r.n(1,0,"Schmerzen")) return "ART";
			if (r.w=="die" && r.n(1,0,"deutschen")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Bundesrepublik")) return "ART";
			if (r.n(-2,0,"Nun")) return "ART";
			if (r.w=="die" && r.n(2,0,"unserer")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"sechs")) return "ART";
			if (r.w=="die" && r.n(-2,0,"Bestreben")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"eingeleiteten")) return "ART";
			if (r.n(1,0,"Feuerwehr")) return "ART";
			if (r.w=="die" && r.n(2,0,"sowie")) return "ART";
			if (r.w=="die" && r.n(-2,0,"schwer")) return "ART";
			if (r.w=="die" && r.n(1,0,"Diskussion")) return "ART";
			if (r.w=="die" && r.n(-2,0,"auch") && r.n(-1,0,",")) return "ART";
			if (r.w=="die" && r.n(-2,0,"verstanden")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Prüfung")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Welt")) return "ART";
			if (r.n(-2,0,"gelingt")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"EU")) return "ART";
			if (r.n(1,0,"Zulassung")) return "ART";
			if (r.w=="die" && r.n(1,0,"Verwendung")) return "ART";
			if (r.n(-2,0,"bekräftigte")) return "ART";
			if (r.w=="die" && r.n(-2,0,"verschoben")) return "ART";
			if (r.w=="die" && r.n(-2,0,"Demokratie") && r.n(-1,0,",")) return "ART";
			if (r.n(2,0,"wird")) return "ART";
			if (r.w=="die" && r.n(1,1,"ADJA") && r.n(2,1,"NE")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Krise")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Harmonie")) return "ART";
			if (r.n(1,0,"Vorwürfe")) return "ART";
			if (r.w=="die" && r.n(1,0,"alte")) return "ART";
			if (r.n(1,0,"langen")) return "ART";
			if (r.w=="die" && r.n(1,0,"sanitären") && r.n(2,0,"Verhältnisse")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"zunehmende")) return "ART";
			if (r.n(1,0,"Verbindung")) return "ART";
			if (r.w=="die" && r.n(-2,0,"appelliert")) return "ART";
			if (r.n(1,0,"richtige")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"chinesische")) return "ART";
			if (r.n(-2,0,"feiert")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"israelischen")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Wahlbeteiligung")) return "ART";
			if (r.n(1,0,"erste")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Solidarität")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"Urteile")) return "ART";
			if (r.w=="die" && r.n(-2,0,"planen")) return "ART";
			if (r.n(1,0,"Einheit")) return "ART";
			if (r.n(2,0,"sollten")) return "ART";
			if (r.n(2,0,"wolle")) return "ART";
			if (r.w=="die" && r.n(1,0,"Haare")) return "ART";
			if (r.n(1,0,"Ergebnisse")) return "ART";
			if (r.n(1,0,"notwendige")) return "ART";
			if (r.w=="die" && r.n(1,0,"Aufmerksamkeit")) return "ART";
			if (r.n(-2,0,"angekündigt")) return "ART";
			if (r.w=="die" && r.n(-1,0,",") && r.n(1,0,"Stadt")) return "ART";
			if (r.w=="die" && r.n(-2,0,"sieht")) return "ART";
			if (r.w=="die" && r.n(1,0,"Frage") && r.n(2,0,"nach")) return "ART";
			if (r.n(2,0,"trage")) return "ART";
			if (r.n(1,0,"letzte")) return "ART";
			if (r.n(2,0,"wurde")) return "ART";
			return "PRELS";
		}
		if (r.n(1,1,"ART")) {
			if (r.s(-3,"ner")) return "PIS";
			if (r.s(-3,"ine")) {
				if (r.w=="eine" && r.n(1,0,"die") && r.n(2,0,"Öffentlichkeit")) return "ART";
				if (r.n(1,0,"dem")) return "ART";
				return "PIS";
			}
			if (r.s(-3,"nes")) return "PIS";
			if (r.s(-4,"inem")) return "PIS";
			if (r.n(1,1,"ART") && r.n(2,1,"KON")) return "ART";
			if (r.n(1,0,"des")) {
				if (r.s(-4,"inem")) return "PIS";
				return "PDS";
			}
			if (r.s(-3,"nen")) return "PIS";
			if (r.n(-2,1,"NN") && r.n(-1,1,"APPR")) {
				if (r.s(-4,"inem")) return "PIS";
				if (r.s(-4,"inen")) return "PIS";
				if (r.w=="einer" && r.n(-1,1,"APPR") && r.n(1,1,"ART")) return "PIS";
				if (r.w=="eine") return "PIS";
				if (r.n(-1,0,"mit")) return "PDS";
				return "ART";
			}
			if (r.w=="Die" && r.n(-2,0,"")) return "ART";
			if (r.n(-1,1,"VAFIN")) {
				if (r.n(1,0,"der")) return "PIS";
				if (r.n(-1,0,"ist") && r.n(1,0,"eine")) return "ART";
				return "PDS";
			}
			if (r.n(-1,1,"NN") && r.n(1,1,"ART")) {
				if (r.n(1,1,"ART") && r.n(2,1,"ADJA")) return "PIS";
				if (r.n(2,1,"CARD")) return "PIS";
				return "ART";
			}
			if (r.n(-1,1,"ADV") && r.n(1,1,"ART")) {
				if (r.w=="einer" && r.n(1,1,"ART")) return "PIS";
				if (r.w=="eine") return "PIS";
				if (r.w=="eines" && r.n(1,1,"ART")) return "PIS";
				if (r.s(-3,"nem")) return "PIS";
				if (r.n(1,0,"eine")) return "ART";
				return "PDS";
			}
			if (r.n(-2,1,"") && r.n(-1,1,"APPR")) {
				if (r.n(1,0,"der")) return "PIS";
				return "ART";
			}
			if (r.n(-1,0,"wie")) return "PDS";
			if (r.w=="Der" && r.n(1,0,"eine")) return "ART";
			if (r.n(-1,1,"VVFIN") && r.n(1,1,"ART")) {
				if (r.n(1,0,"der")) return "PIS";
				return "PDS";
			}
			if (r.n(-1,1,"VMFIN") && r.n(1,1,"ART")) {
				if (r.s(-3,"ner")) return "PIS";
				return "PDS";
			}
			if (r.w=="ein") return "ART";
			if (r.n(-1,1,"KOUS") && r.n(1,1,"ART")) {
				if (r.n(1,0,"der")) return "PIS";
				return "PDS";
			}
			if (r.n(1,0,"eines")) return "PDS";
			if (r.n(1,0,"Den")) return "ART";
			if (r.n(-2,1,"NN") && r.n(-1,1,"KON")) {
				if (r.n(-1,0,"und") && r.n(1,0,"der")) return "PIS";
				if (r.w=="die" && r.n(-1,1,"KON") && r.n(1,1,"ART")) return "PDS";
				return "ART";
			}
			if (r.w=="den" && r.n(-2,1,"ADV") && r.n(-1,1,"APPR")) return "ART";
			if (r.n(-1,1,"ADJD") && r.n(1,1,"ART")) return "ART";
			if (r.n(-2,1,"ADJD") && r.n(-1,1,"APPR")) return "PDS";
			return "PRELS";
		}
		if (r.n(1,1,"VAFIN")) {
			if (r.s(-4,"inen")) return "PIS";
			if (r.w=="einer") return "PIS";
			if (r.w=="eine") return "PIS";
			return "PDS";
		}
		if (r.n(-1,1,"$,") && r.n(1,1,"APPR")) {
			if (r.w=="ein" && r.n(-1,1,"$,") && r.n(1,1,"APPR")) return "ART";
			if (r.w=="eine") return "ART";
			if (r.n(-2,1,"PROAV")) return "ART";
			if (r.s(-4,"inem")) return "ART";
			if (r.w=="den" && r.n(1,0,"nach")) return "ART";
			if (r.w=="den" && r.n(1,1,"APPR") && r.n(2,1,"ART")) return "ART";
			if (r.w=="den" && r.n(-2,1,"NE") && r.n(-1,1,"$,")) return "ART";
			return "PRELS";
		}
		if (r.n(1,1,"VVFIN")) {
			if (r.w=="die" && r.n(1,1,"VVFIN") && r.n(2,1,"NN")) return "ART";
			if (r.s(-3,"ine")) {
				if (r.n(-2,1,"") && r.n(-1,1,"ART")) return "PIS";
				return "ART";
			}
			if (r.n(-1,1,"VVFIN") && r.n(1,1,"VVFIN")) return "ART";
			if (r.s(-4,"inen")) return "PIS";
			if (r.w=="der" && r.n(-1,1,"APPR")) return "ART";
			if (r.w=="Die" && r.n(1,1,"VVFIN") && r.n(2,1,"NN")) return "ART";
			if (r.w=="der" && r.n(1,1,"VVFIN") && r.n(2,1,"$,")) return "PRELS";
			if (r.w=="der" && r.n(-1,1,"NN")) return "ART";
			if (r.w=="einer") {
				if (r.n(1,1,"VVFIN") && r.n(2,1,"APPR")) return "ART";
				return "PIS";
			}
			if (r.w=="den" && r.n(1,1,"VVFIN") && r.n(2,1,"NN")) return "ART";
			if (r.n(-2,1,"$,") && r.n(-1,1,"APPR")) return "ART";
			if (r.n(-2,1,"VVFIN") && r.n(-1,1,"ADV")) return "ART";
			if (r.w=="eines") return "PIS";
			if (r.n(-1,1,"NE")) return "ART";
			if (r.n(1,0,"reiche")) return "ART";
			if (r.n(-1,0,",") && r.n(1,0,"wächst")) return "PRELS";
			if (r.w=="einem" && r.n(1,1,"VVFIN") && r.n(2,1,"NN")) return "ART";
			if (r.w=="des" && r.n(1,1,"VVFIN")) return "ART";
			if (r.w=="ein" && r.n(1,1,"VVFIN")) return "ART";
			if (r.n(-1,1,"VMFIN")) return "ART";
			if (r.w=="die" && r.n(-1,1,"NN") && r.n(1,1,"VVFIN")) return "ART";
			if (r.n(-1,1,"VAFIN") && r.n(1,1,"VVFIN")) return "ART";
			if (r.w=="den" && r.n(-2,1,"NN") && r.n(-1,1,"APPR")) return "ART";
			if (r.n(1,0,"erreichte")) return "ART";
			return "PDS";
		}
		if (r.n(1,1,"PPER")) {
			if (r.n(-1,1,"ADV")) return "ART";
			if (r.n(-1,1,"NN") && r.n(1,1,"PPER")) return "ART";
			if (r.w=="eine") return "ART";
			if (r.n(-2,1,"NN") && r.n(-1,1,"APPR")) return "ART";
			if (r.w=="das" && r.n(1,1,"PPER") && r.n(2,1,"ADJA")) return "ART";
			if (r.w=="dem" && r.n(-1,0,"aus") && r.n(1,0,"ihm")) return "ART";
			if (r.n(-1,1,"KOUS") && r.n(1,1,"PPER")) return "PDS";
			return "PRELS";
		}
		if (r.w=="ein" && r.n(2,0,"")) {
			if (r.w=="ein" && r.n(1,1,"NN")) return "ART";
			return "PTKVZ";
		}
		if (r.n(-1,1,"$,") && r.n(1,1,"ADV")) {
			if (r.w=="eine") return "ART";
			if (r.w=="ein") return "ART";
			if (r.w=="den" && r.n(1,1,"ADV") && r.n(2,1,"ADJA")) return "ART";
			if (r.s(-3,"nen")) return "ART";
			if (r.n(-2,0,"es")) return "ART";
			if (r.w=="dem" && r.n(-2,1,"NE") && r.n(-1,1,"$,")) return "ART";
			return "PRELS";
		}
		if (r.n(1,0,"sich")) {
			if (r.n(-2,1,"NN") && r.n(-1,1,"APPR")) return "ART";
			if (r.n(-1,1,"NN")) return "ART";
			if (r.w=="die" && r.n(1,1,"PRF") && r.n(2,1,"ADJA")) return "ART";
			if (r.n(-2,1,"ADJD") && r.n(-1,1,"APPR")) return "ART";
			if (r.n(-2,0,"")) return "ART";
			if (r.n(2,0,"Äußernde")) return "ART";
			if (r.w=="der" && r.n(2,0,"abzeichnenden")) return "ART";
			if (r.n(-2,1,"NN") && r.n(-1,1,"KON")) return "ART";
			if (r.n(-2,1,"ADV") && r.n(-1,1,"APPR")) return "ART";
			return "PRELS";
		}
		if (r.w=="ein" && r.n(1,0,",")) return "PTKVZ";
		if (r.n(1,1,"VMFIN")) {
			if (r.w=="einen") return "PIS";
			return "PDS";
		}
		if (r.n(-1,1,"$,") && r.n(1,1,"APPRART")) return "PRELS";
		if (r.n(1,1,"$,")) {
			if (r.w=="einer") return "PIS";
			if (r.w=="der" && r.n(-1,0,",")) return "PRELS";
			if (r.w=="eine" && r.n(1,1,"$,")) {
				if (r.n(-2,1,"NN")) return "ART";
				return "PIS";
			}
			if (r.n(1,1,"$,") && r.n(2,1,"ADJA")) return "ART";
			if (r.w=="einen" && r.n(1,0,",")) return "PIS";
			if (r.n(1,1,"$,") && r.n(2,1,"NN")) return "ART";
			if (r.w=="einem" && r.n(1,1,"$,")) return "PIS";
			return "PDS";
		}
		if (r.w=="das" && r.n(1,1,"ADV")) {
			if (r.n(-1,0,"für")) return "ART";
			if (r.w=="das" && r.n(-1,0,"auf")) return "ART";
			if (r.w=="das" && r.n(1,0,"immer")) return "ART";
			if (r.w=="das" && r.n(1,0,"Wohl")) return "ART";
			if (r.w=="das" && r.n(1,0,"mittlerweile")) return "ART";
			if (r.w=="das" && r.n(2,0,"geltende")) return "ART";
			return "PDS";
		}
		if (r.w=="dem" && r.n(-2,0,",") && r.n(-1,0,"in")) return "PRELS";
		if (r.w=="der" && r.n(-1,1,"$,") && r.n(1,1,"ADJD")) {
			if (r.n(2,1,"ADJA")) return "ART";
			if (r.w=="der" && r.n(1,1,"ADJD") && r.n(2,1,"VVFIN")) return "ART";
			return "PRELS";
		}
		if (r.n(1,0,"Haag")) return "NE";
		if (r.w=="das" && r.n(1,0,"nicht")) {
			if (r.w=="das" && r.n(-1,0,",") && r.n(1,0,"nicht")) return "PRELS";
			if (r.n(-1,1,"$(") && r.n(1,1,"PTKNEG")) return "PRELS";
			if (r.w=="das" && r.n(-1,0,"über")) return "PRELS";
			return "PDS";
		}
		if (r.n(1,0,"man")) return "PRELS";
		if (r.n(-1,1,"$,") && r.n(1,1,"PPOSAT")) return "PRELS";
		if (r.n(1,1,"$.")) {
			if (r.w=="ein" && r.n(1,1,"$.")) return "PTKVZ";
			if (r.n(-2,1,"VVFIN") && r.n(-1,1,"ADV")) return "PIS";
			if (r.w=="eine") return "PIS";
			return "PDS";
		}
		if (r.w=="der" && r.n(-1,1,"$,") && r.n(1,1,"CARD")) return "PRELS";
		if (r.n(-1,1,"$,") && r.n(1,1,"PIAT")) {
			if (r.w=="ein" && r.n(1,1,"PIAT") && r.n(2,1,"NN")) return "ART";
			if (r.s(-4,"inen")) return "ART";
			return "PRELS";
		}
		if (r.n(1,0,"aber")) return "PDS";
		if (r.w=="dem" && r.n(-2,0,",") && r.n(-1,0,"bei")) return "PRELS";
		if (r.n(-1,1,"$,") && r.n(1,1,"PTKZU")) return "PRELS";
		if (r.w=="ein" && r.n(1,1,"KON")) return "PTKVZ";
		if (r.w=="Das" && r.n(1,1,"VVINF")) {
			if (r.n(2,0,"des")) return "ART";
			return "PDS";
		}
		if (r.n(1,0,"seiner")) {
			if (r.s(-3,"")) return "PDS";
			return "PIS";
		}
		if (r.n(1,1,"PTKZU") && r.n(2,1,"VVINF")) {
			if (r.w=="eines" && r.n(1,1,"PTKZU")) return "PIS";
			return "PDS";
		}
		if (r.n(-1,1,"$,") && r.n(1,1,"VVPP")) return "PRELS";
		if (r.w=="das" && r.n(-1,1,"$,") && r.n(1,1,"NE")) return "PRELS";
		if (r.w=="das" && r.n(-1,1,"PPER") && r.n(1,1,"APPR")) return "PDS";
		if (r.w=="Das" && r.n(1,1,"VVPP")) return "PDS";
		if (r.n(-1,0,",") && r.n(1,0,"nicht")) return "PRELS";
		if (r.n(1,1,"PDAT")) {
			if (r.s(-3,"ine")) return "PIS";
			if (r.s(-3,"nes")) return "PIS";
			return "PRELS";
		}
		if (r.n(1,1,"ADV") && r.n(2,1,"ART")) {
			if (r.n(-1,1,"NN") && r.n(1,1,"ADV")) return "ART";
			if (r.s(-2,"em")) return "PIS";
			return "PRELS";
		}
		if (r.w=="dem" && r.n(-2,0,",") && r.n(-1,0,"an")) return "PRELS";
		if (r.w=="das" && r.n(-1,1,"VMFIN") && r.n(1,1,"VVINF")) return "PDS";
		if (r.w=="einen" && r.n(-2,1,"APPR") && r.n(-1,1,"ART")) return "ADJA";
		if (r.w=="den" && r.n(-1,1,"$,") && r.n(1,1,"NE")) {
			if (r.n(-2,1,"VVPP")) return "ART";
			if (r.n(2,0,",")) return "ART";
			if (r.w=="den" && r.n(2,0,"und")) return "ART";
			return "PRELS";
		}
		if (r.w=="das" && r.n(-1,1,"$,") && r.n(1,1,"ADJD")) {
			if (r.n(2,1,"ADJA")) return "ART";
			return "PRELS";
		}
		if (r.n(-1,1,"$,") && r.n(1,1,"PROAV")) return "PRELS";
		if (r.w=="einen" && r.n(-1,1,"APPRART")) return "PIS";
		if (r.w=="das" && r.n(1,1,"PIS")) return "PDS";
		if (r.w=="einer" && r.n(-1,1,"KOUS")) return "PIS";
		if (r.w=="das" && r.n(1,0,"für")) {
			if (r.w=="das" && r.n(-1,0,"und")) return "PRELS";
			return "PDS";
		}
		if (r.w=="das" && r.n(1,1,"PIAT")) return "PDS";
		if (r.n(1,1,"VAINF") && r.n(2,1,"NN")) return "PRELS";
		if (r.n(-1,0,",") && r.n(1,0,"-")) return "PRELS";
		if (r.w=="der" && r.n(-2,0,",") && r.n(-1,0,"zu")) return "PRELS";
		if (r.w=="dem" && r.n(-2,0,",") && r.n(-1,0,"von")) return "PRELS";
		if (r.n(-1,0,"wie") && r.n(1,0,"über")) return "PDS";
		if (r.n(1,1,"VVINF") && r.n(2,1,"VMFIN")) {
			if (r.w=="der" && r.n(1,1,"VVINF")) return "PRELS";
			return "PDS";
		}
		if (r.w=="ein" && r.n(1,0,"-")) return "PTKVZ";
		if (r.w=="das" && r.n(-1,1,"$,") && r.n(1,1,"CARD")) return "PRELS";
		if (r.w=="der" && r.n(-1,1,"$,") && r.n(1,1,"PIS")) return "PRELS";
		if (r.w=="ein" && r.n(1,0,"bis")) return "CARD";
		if (r.w=="das" && r.n(1,1,"VVPP")) {
			if (r.w=="das" && r.n(2,0,"der")) return "ART";
			return "PDS";
		}
		if (r.n(1,1,"ADV") && r.n(2,1,"VAFIN")) return "PDS";
		if (r.w=="das" && r.n(-1,1,"VVFIN") && r.n(1,1,"APPR")) return "PDS";
		if (r.w=="das" && r.n(1,1,"ADJD") && r.n(2,1,"KON")) return "PDS";
		if (r.w=="das" && r.n(1,1,"VVINF") && r.n(2,1,"$.")) return "PDS";
		if (r.n(-1,0,"van") && r.n(1,0,"Broek")) return "NE";
		if (r.w=="der" && r.n(-1,0,",") && r.n(1,0,"wie")) return "PRELS";
		if (r.w=="die" && r.n(-1,1,"$(") && r.n(1,1,"ADV")) {
			if (r.n(1,1,"ADV") && r.n(2,1,"ADJA")) return "ART";
			return "PRELS";
		}
		if (r.n(-1,0,",") && r.n(1,0,"Anfang")) return "PRELS";
		if (r.n(1,0,"ihrer")) {
			if (r.s(-3,"")) return "PDS";
			return "PIS";
		}
		if (r.w=="die" && r.n(1,1,"PPOSAT") && r.n(2,1,"NN")) return "PRELS";
		if (r.n(1,0,"davon")) return "PIS";
		if (r.w=="einer" && r.n(-1,1,"VVFIN") && r.n(1,1,"APPR")) return "PIS";
		if (r.w=="Das" && r.n(1,0,"alles")) return "PDS";
		if (r.w=="das" && r.n(1,1,"KON")) return "PDS";
		if (r.n(1,1,"ADJD") && r.n(2,1,"VAFIN")) return "PDS";
		if (r.n(1,1,"VAINF")) return "PDS";
		if (r.n(1,0,"da")) return "PDS";
		if (r.w=="das" && r.n(1,0,"auf")) return "PDS";
		if (r.n(1,1,"PTKVZ")) return "PDS";
		if (r.n(-1,0,"") && r.n(1,0,"wiederum")) return "PDS";
		if (r.n(-1,1,"$(") && r.n(1,1,"VVINF")) return "PDS";
		if (r.n(-1,1,"KOKOM") && r.n(1,1,"APPRART")) return "PDS";
		if (r.w=="das" && r.n(1,1,"ADJD") && r.n(2,1,"$.")) return "PDS";
		if (r.n(1,1,"$(") && r.n(2,1,"$,")) {
			if (r.w=="ein" && r.n(1,0,"''") && r.n(2,0,",")) return "PTKVZ";
			return "PDS";
		}
		if (r.w=="Den" && r.n(1,0,"Haager")) return "NE";
		if (r.w=="die" && r.n(-1,0,"und") && r.n(1,0,"mit")) return "PRELS";
		if (r.n(1,0,"Rabin")) return "PRELS";
		if (r.w=="der" && r.n(-2,0,"Präsidenten") && r.n(-1,0,",")) return "PRELS";
		if (r.w=="der" && r.n(-1,1,"APPR") && r.n(1,1,"PIAT")) {
			if (r.n(-2,1,"") && r.n(-1,1,"APPR")) return "ART";
			return "PRELS";
		}
		if (r.n(2,0,"anderem")) return "PRELS";
		if (r.w=="das" && r.n(1,0,"(")) return "PRELS";
		if (r.w=="der" && r.n(-1,1,"$(") && r.n(1,1,"ADV")) return "PRELS";
		if (r.w=="ein" && r.n(2,0,"allemal")) return "PIS";
		if (r.n(1,0,"und")) return "PIS";
		if (r.w=="einer" && r.n(-1,1,"ADV") && r.n(1,1,"APPR")) return "PIS";
		return "ART";
	}
	if (r.t=="PWS") {
		if (r.n(-2,1,"ART") && r.n(-1,1,"$,")) return "PRELS";
		if (r.n(-2,1,"PIS") && r.n(-1,1,"$,")) return "PRELS";
		if (r.w=="was" && r.n(-2,1,"NN") && r.n(-1,1,"$,")) {
			if (r.w=="was" && r.n(-2,0,"Frage") && r.n(-1,0,",")) return "PWS";
			if (r.n(1,1,"PPER") && r.n(2,1,"VVFIN")) return "PWS";
			if (r.n(2,1,"VVINF")) return "PWS";
			return "PRELS";
		}
		if (r.w=="was" && r.n(1,1,"NE")) return "PRELS";
		if (r.w=="was" && r.n(-1,1,"ADV")) {
			if (r.n(2,1,"ADJA")) return "PWS";
			return "PIS";
		}
		if (r.w=="was" && r.n(1,1,"APPRART") && r.n(2,1,"NN")) return "PRELS";
		if (r.w=="was" && r.n(-2,1,"ADJA") && r.n(-1,1,"$,")) {
			if (r.n(-1,0,",") && r.n(1,0,"das")) return "PWS";
			return "PRELS";
		}
		if (r.w=="was" && r.n(1,0,"auch")) return "PRELS";
		if (r.w=="was" && r.n(1,0,"zu")) return "PRELS";
		return "PWS";
	}
	if (r.t=="VAFIN") {
		if (r.n(-1,0,"zu")) return "VAINF";
		if (r.w=="haben" && r.n(1,1,"VMFIN")) return "VAINF";
		if (r.w=="haben" && r.n(1,1,"$,") && r.n(2,1,"KOUS")) return "VAINF";
		if (r.w=="haben" && r.n(1,0,".") && r.n(2,0,"")) {
			if (r.w=="haben" && r.n(-2,1,"PTKNEG") && r.n(-1,1,"VVPP")) return "VAFIN";
			if (r.w=="haben" && r.n(-1,0,"gefunden")) return "VAFIN";
			if (r.n(-1,0,"gegeben") && r.n(1,0,".")) return "VAFIN";
			if (r.n(-1,0,"eingezahlt")) return "VAFIN";
			if (r.n(-2,0,"öffentlich")) return "VAFIN";
			if (r.n(-1,0,"beteiligt") && r.n(1,0,".")) return "VAFIN";
			if (r.n(-1,0,"erlebt") && r.n(1,0,".")) return "VAFIN";
			if (r.w=="haben" && r.n(-1,0,"erwarten")) return "VAFIN";
			if (r.n(-1,0,"geführt")) return "VAFIN";
			if (r.w=="haben" && r.n(-2,1,"APPRART") && r.n(-1,1,"NN")) return "VAFIN";
			if (r.n(-1,0,"geliebt") && r.n(1,0,".")) return "VAFIN";
			if (r.w=="haben" && r.n(-1,0,"Überlebenschancen")) return "VAFIN";
			return "VAINF";
		}
		if (r.n(1,1,"VAFIN")) return "VAINF";
		if (r.w=="haben" && r.n(-2,1,"NN") && r.n(-1,1,"VVFIN")) return "VAINF";
		if (r.w=="haben" && r.n(1,0,",") && r.n(2,0,"wie")) return "VAINF";
		return "VAFIN";
	}
	if (r.t=="VAINF") {
		if (r.n(1,1,"NN")) {
			if (r.s(-2,"en")) return "VAFIN";
			return "PPOSAT";
		}
		if (r.w=="werden" && r.n(-1,1,"NN")) {
			if (r.w=="werden" && r.n(-1,1,"NN") && r.n(1,1,"VMFIN")) return "VAINF";
			if (r.w=="werden" && r.n(-2,0,"einem")) return "VAINF";
			if (r.w=="werden" && r.n(1,0,"''") && r.n(2,0,",")) return "VAINF";
			if (r.n(1,1,"") && r.n(2,1,"")) return "VAINF";
			if (r.w=="werden" && r.n(1,0,"würde")) return "VAINF";
			if (r.n(1,1,"$,") && r.n(2,1,"ART")) return "VAINF";
			if (r.n(-2,0,"ein")) return "VAINF";
			if (r.n(-1,0,"Problem")) return "VAINF";
			if (r.w=="werden" && r.n(-2,0,"nicht")) return "VAINF";
			if (r.w=="werden" && r.n(1,0,",") && r.n(2,0,"in")) return "VAINF";
			return "VAFIN";
		}
		if (r.w=="werden" && r.n(-2,0,"")) {
			if (r.n(1,1,"VMFIN")) return "VAINF";
			return "VAFIN";
		}
		if (r.w=="werden" && r.n(-1,1,"$,")) return "VAFIN";
		if (r.w=="sein" && r.n(1,1,"ADJA")) return "PPOSAT";
		if (r.w=="werden" && r.n(-1,1,"NE")) {
			if (r.w=="werden" && r.n(1,1,"$.")) return "VAINF";
			if (r.w=="werden" && r.n(-1,1,"NE") && r.n(1,1,"$,")) return "VAINF";
			if (r.n(2,0,",")) return "VAINF";
			return "VAFIN";
		}
		if (r.n(1,1,"ADV")) {
			if (r.s(-3,"ein")) return "PPOSAT";
			return "VAFIN";
		}
		if (r.w=="werden" && r.n(-1,1,"VVINF")) {
			if (r.w=="werden" && r.n(-1,0,"erhalten")) return "VAINF";
			if (r.n(-1,0,"beraten")) return "VAINF";
			if (r.n(-1,0,"empfangen")) return "VAINF";
			return "VAFIN";
		}
		if (r.w=="werden" && r.n(1,1,"PPER")) return "VAFIN";
		if (r.w=="werden" && r.n(1,1,"ART")) return "VAFIN";
		if (r.w=="werden" && r.n(-1,1,"VAINF")) return "VAFIN";
		if (r.w=="werden" && r.n(-1,1,"PPER")) {
			if (r.w=="werden" && r.n(1,1,"$,")) return "VAINF";
			return "VAFIN";
		}
		if (r.w=="werden" && r.n(1,1,"$,") && r.n(2,1,"VAFIN")) {
			if (r.w=="werden" && r.n(-1,0,"zu")) return "VAINF";
			if (r.n(-2,1,"VMFIN")) return "VAINF";
			return "VAFIN";
		}
		if (r.w=="werden" && r.n(1,1,"$,") && r.n(2,1,"VMFIN")) return "VAFIN";
		if (r.w=="werden" && r.n(1,1,"$,") && r.n(2,1,"VVINF")) return "VAFIN";
		if (r.w=="sein" && r.n(1,1,"NE")) return "PPOSAT";
		if (r.w=="werden" && r.n(1,1,"ADJA")) return "VAFIN";
		if (r.w=="werden" && r.n(1,1,"PIAT")) return "VAFIN";
		if (r.n(2,0,"Jahre")) return "PPOSAT";
		if (r.n(-1,0,"für")) return "PPOSAT";
		if (r.n(1,0,"von")) return "VAFIN";
		if (r.n(1,0,"sich")) return "VAFIN";
		if (r.w=="werden" && r.n(1,1,"VVPP")) return "VAFIN";
		if (r.w=="werden" && r.n(-1,0,"genannt")) return "VAFIN";
		if (r.w=="werden" && r.n(-1,0,"gesehen")) return "VAFIN";
		if (r.w=="werden" && r.n(1,1,"ADJD")) return "VAFIN";
		if (r.w=="werden" && r.n(1,1,"PPOSAT")) return "VAFIN";
		return "VAINF";
	}
	if (r.t=="APPRART") {
		if (r.n(1,0,"besten")) return "PTKA";
		if (r.w=="am" && r.n(1,1,"ADJD")) return "PTKA";
		if (r.n(1,0,"meisten")) return "PTKA";
		if (r.w=="a." && r.n(-1,0,"u.")) return "PIS";
		if (r.w=="Am" && r.n(1,1,"ADJD")) return "PTKA";
		if (r.w=="A." && r.n(-1,0,"L.")) return "NE";
		if (r.w=="am" && r.n(1,1,"PIS")) return "PTKA";
		if (r.w=="A." && r.n(-1,1,"NN")) return "NE";
		if (r.w=="am" && r.n(1,1,"ADJA") && r.n(2,1,"$.")) return "PTKA";
		if (r.n(1,0,"D.")) return "APPR";
		if (r.w=="Am" && r.n(1,1,"ADJA") && r.n(2,1,"VAFIN")) return "PTKA";
		if (r.n(1,0,"schwersten")) return "PTKA";
		return "APPRART";
	}
	if (r.t=="KOKOM") {
		if (r.w=="wie" && r.n(-1,1,"$,")) {
			if (r.n(1,1,"NE") && r.n(2,1,"KON")) return "KOKOM";
			if (r.n(-2,0,"die")) return "KOKOM";
			if (r.w=="wie" && r.n(2,0,".")) return "KOKOM";
			if (r.n(1,1,"ADV") && r.n(2,1,"APPRART")) return "KOKOM";
			if (r.n(1,1,"ART") && r.n(2,1,"ART")) return "KOKOM";
			if (r.n(-2,1,"PIAT")) return "KOKOM";
			if (r.w=="wie" && r.n(-1,0,",") && r.n(1,0,"den")) return "KOKOM";
			if (r.n(2,0,"Die")) return "KOKOM";
			if (r.n(1,0,"weitere")) return "KOKOM";
			if (r.n(2,0,"meisten")) return "KOKOM";
			if (r.w=="wie" && r.n(1,0,"bei") && r.n(2,0,"der")) return "KOKOM";
			return "PWAV";
		}
		if (r.n(-1,1,"APPR") && r.n(1,1,"APPR")) return "KON";
		if (r.n(-1,1,"KON")) {
			if (r.w=="wie" && r.n(1,1,"APPR")) return "KOKOM";
			if (r.w=="wie" && r.n(1,0,"einst")) return "KOKOM";
			return "PWAV";
		}
		if (r.w=="wie" && r.n(1,0,"auch")) return "KON";
		if (r.w=="wie" && r.n(-2,0,",") && r.n(-1,0,"''")) return "PWAV";
		if (r.n(-1,1,"$(") && r.n(1,1,"PPER")) return "PWAV";
		if (r.n(-1,1,"ADJA") && r.n(1,1,"ADJA")) {
			if (r.w=="wie" && r.n(-2,1,"ADV") && r.n(-1,1,"ADJA")) return "KOKOM";
			return "KON";
		}
		if (r.n(-2,0,"des")) return "KON";
		if (r.n(1,1,"VVPP")) {
			if (r.n(2,1,"$.")) return "KOKOM";
			return "PWAV";
		}
		if (r.n(-1,1,"$(") && r.n(1,1,"VVFIN")) return "PWAV";
		if (r.w=="wie" && r.n(-2,1,"") && r.n(-1,1,"")) return "PWAV";
		if (r.w=="wie" && r.n(-1,1,"ADJA") && r.n(1,1,"APPR")) return "KON";
		return "KOKOM";
	}
	if (r.t=="PTKA") return "PTKA";
	if (r.t=="PPER") {
		if (r.w=="uns" && r.n(-1,0,"wir")) {
			if (r.n(-2,1,"KOKOM") && r.n(-1,1,"PPER")) return "PPER";
			if (r.w=="uns" && r.n(-2,0,"ob") && r.n(-1,0,"wir")) return "PPER";
			return "PRF";
		}
		if (r.w=="mich" && r.n(-1,0,"ich")) return "PRF";
		if (r.w=="uns" && r.n(-2,0,"Wir")) return "PRF";
		if (r.w=="mich" && r.n(-2,0,"Ich")) return "PRF";
		if (r.w=="du" && r.n(1,1,"NE")) return "NE";
		if (r.n(1,1,"") && r.n(2,1,"")) return "XY";
		if (r.w=="mir" && r.n(-2,0,"Ich")) return "PRF";
		return "PPER";
	}
	if (r.t=="APZR") {
		if (r.w=="hinaus" && r.n(1,1,"$.")) {
			if (r.n(-2,1,"ART")) return "APZR";
			return "PTKVZ";
		}
		return "APZR";
	}
	return false;
};