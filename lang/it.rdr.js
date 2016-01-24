/**
 * File Generated From data/pos/italian.rdr at Sun Jan 24 2016 12:56:12 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(r) {
	if (r.t=="FS") {
		if (r.w=="." && r.n(-1,1,"N") && r.n(1,1,"S")) return "FF";
		return "FS";
	}
	if (r.t=="DI") {
		if (r.n(1,1,"EA")) return "PI";
		if (r.w=="diversi" && r.n(-1,1,"S")) return "A";
		if (r.n(-1,1,"RD")) return "A";
		if (r.n(1,1,"E")) {
			if (r.w=="diversi" && r.n(1,1,"E")) return "A";
			if (r.w=="qualche") return "DI";
			if (r.w=="determinate" && r.n(-1,1,"V")) return "V";
			return "PI";
		}
		if (r.n(2,1,"")) {
			if (r.n(-1,1,"S")) return "A";
			return "PI";
		}
		if (r.w=="molti" && r.n(1,0,",")) return "PI";
		if (r.n(1,1,"V") && r.n(2,1,"PR")) return "PI";
		if (r.n(1,1,"CC")) return "PI";
		return "DI";
	}
	if (r.t=="BN") {
		if (r.w=="nemmeno" && r.n(-1,1,"CC")) return "B";
		return "BN";
	}
	if (r.t=="Sms") return "Sms";
	if (r.t=="DD") {
		if (r.n(1,1,"V")) {
			if (r.s(-4,"")) return "DD";
			return "PD";
		}
		if (r.n(1,1,"RD")) return "PD";
		if (r.n(1,0,",")) return "PD";
		if (r.n(1,1,"PC")) return "PD";
		if (r.n(1,0,"non")) return "PD";
		if (r.n(1,1,"VA")) return "PD";
		if (r.n(1,1,"VM")) return "PD";
		if (r.n(1,1,"PR")) return "PD";
		if (r.n(1,1,"RI")) return "PD";
		if (r.w=="questo" && r.n(1,1,"CC")) return "PD";
		if (r.w=="questo" && r.n(1,1,"E")) {
			if (r.w=="questo" && r.n(1,1,"E") && r.n(2,1,"S")) return "DD";
			return "PD";
		}
		return "DD";
	}
	if (r.t=="FB") {
		if (r.w==")" && r.n(-2,0,"")) {
			if (r.w==")" && r.n(1,0,"che")) return "FB";
			if (r.w==")" && r.n(1,1,"S") && r.n(2,1,"EA")) return "FB";
			if (r.w==")" && r.n(1,0,"Per")) return "FB";
			return "FF";
		}
		return "FB";
	}
	if (r.t=="FC") return "FC";
	if (r.t=="FF") {
		if (r.w=="-" && r.n(1,1,"V")) {
			if (r.n(-2,1,"") && r.n(-1,1,"SP")) return "FF";
			if (r.n(-2,1,"V") && r.n(-1,1,"A")) return "FF";
			if (r.w=="-" && r.n(-2,1,"SP") && r.n(-1,1,"FB")) return "FF";
			if (r.w=="-" && r.n(1,0,"fornire")) return "FF";
			return "FB";
		}
		if (r.w=="-" && r.n(-1,1,"V")) {
			if (r.n(1,0,"se")) return "FF";
			return "FB";
		}
		if (r.w=="-" && r.n(1,1,"FS") && r.n(2,1,"")) return "FB";
		if (r.w=="-" && r.n(1,0,"che")) return "FB";
		if (r.w=="-" && r.n(-2,1,"E") && r.n(-1,1,"SP")) return "FB";
		if (r.w=="-" && r.n(-1,1,"S") && r.n(1,1,"E")) return "FB";
		if (r.n(1,0,",")) return "FB";
		if (r.w=="-" && r.n(1,1,"VA")) {
			if (r.n(2,0,"dichiarato")) return "FF";
			return "FB";
		}
		if (r.w=="-" && r.n(1,0,"e")) return "FB";
		if (r.w=="-" && r.n(1,0,"si")) return "FB";
		if (r.w=="-" && r.n(1,1,"EA") && r.n(2,1,"S")) return "FB";
		if (r.w=="-" && r.n(1,1,"B")) {
			if (r.n(-2,1,"")) return "FF";
			return "FB";
		}
		if (r.w=="-" && r.n(-1,1,"B")) return "FB";
		if (r.w=="-" && r.n(-1,0,"che")) return "FB";
		if (r.w=="-" && r.n(-1,0,"Ante")) return "FB";
		return "FF";
	}
	if (r.t=="Vis3s") return "Vis3s";
	if (r.t=="DT") return "DT";
	if (r.t=="DQ") {
		if (r.n(-1,1,"EA")) return "PR";
		if (r.n(-1,1,"") && r.n(1,1,"V")) {
			if (r.w=="Quanti" && r.n(-1,0,"") && r.n(1,0,"posti")) return "DQ";
			return "PQ";
		}
		if (r.w=="quale" && r.n(-1,1,"RD")) return "PR";
		if (r.w=="Che" && r.n(-1,1,"") && r.n(1,1,"VA")) return "PQ";
		return "DQ";
	}
	if (r.t=="PR") {
		if (r.w=="che" && r.n(-1,1,"V")) {
			if (r.w=="che" && r.n(2,0,"da")) return "PR";
			return "CS";
		}
		if (r.w=="che" && r.n(-1,1,"E")) {
			if (r.n(-1,1,"E") && r.n(1,1,"V")) return "CS";
			if (r.n(-1,0,"senza")) return "CS";
			if (r.n(-1,0,"dopo")) return "CS";
			return "DQ";
		}
		if (r.w=="che" && r.n(-1,1,"B")) {
			if (r.w=="che" && r.n(-1,0,"piuttosto")) return "E";
			return "CS";
		}
		if (r.w=="che" && r.n(-2,1,"V") && r.n(-1,1,"A")) return "CS";
		if (r.w=="cui" && r.n(1,1,"S")) {
			if (r.n(-1,1,"E") && r.n(1,1,"S")) return "PR";
			return "DR";
		}
		if (r.n(-2,1,"") && r.n(-1,1,"E")) {
			if (r.w=="quanto" && r.n(1,0,"tempo")) return "DQ";
			if (r.n(1,1,"V") && r.n(2,1,"E")) return "PR";
			return "PQ";
		}
		if (r.w=="quanto" && r.n(-1,0,"in")) return "B";
		if (r.w=="che" && r.n(1,1,"RD") && r.n(2,1,"S")) {
			if (r.n(-1,1,"PD") && r.n(1,1,"RD")) return "PR";
			if (r.n(-2,0,"di")) return "PR";
			if (r.n(-2,0,"Il")) return "PR";
			if (r.w=="che" && r.n(-2,1,"S") && r.n(-1,1,"FB")) return "PR";
			return "CS";
		}
		if (r.w=="che" && r.n(-1,0,"prima")) return "CS";
		if (r.w=="che" && r.n(1,1,"RD") && r.n(2,1,"AP")) return "CS";
		if (r.w=="che" && r.n(-1,1,"VM")) return "CS";
		if (r.w=="che" && r.n(-1,0,"volta")) return "CS";
		if (r.n(-1,1,"BN")) return "CS";
		if (r.w=="che" && r.n(-1,0,"caso")) return "CS";
		if (r.w=="quali" && r.n(1,1,"S")) {
			if (r.w=="quali" && r.n(-1,1,"FF")) return "DQ";
			return "DT";
		}
		if (r.w=="che" && r.n(-1,0,",") && r.n(1,0,"cosa")) return "DQ";
		if (r.w=="quanto" && r.n(-1,0,",")) return "B";
		if (r.w=="quanto" && r.n(-1,1,"A")) return "B";
		if (r.w=="quali" && r.n(-1,1,"S") && r.n(1,1,"RD")) return "E";
		if (r.w=="che" && r.n(-1,0,"Altro")) return "E";
		if (r.n(-1,0,"momento")) return "CS";
		if (r.w=="che" && r.n(-1,0,"conto")) return "CS";
		return "PR";
	}
	if (r.t=="PQ") {
		if (r.w=="Quanto" && r.n(1,0,"dista")) return "B";
		if (r.w=="Chi" && r.n(-1,1,"") && r.n(1,1,"VM")) return "PR";
		if (r.n(-1,1,"") && r.n(1,1,"EA")) return "B";
		return "PQ";
	}
	if (r.t=="NO") {
		if (r.w=="prima" && r.n(1,1,"E")) {
			if (r.n(-1,1,"RD") && r.n(1,1,"E")) return "NO";
			return "B";
		}
		if (r.w=="prima" && r.n(1,1,"EA")) return "B";
		if (r.w=="prima" && r.n(-1,1,"S")) return "B";
		if (r.w=="prima" && r.n(-1,1,"V")) return "B";
		if (r.w=="prima" && r.n(1,0,"ancora")) return "B";
		return "NO";
	}
	if (r.t=="RD") {
		if (r.n(1,1,"VA")) {
			if (r.n(-2,1,"DQ") && r.n(-1,1,"V")) return "RD";
			return "PC";
		}
		if (r.w=="gli" && r.n(1,1,"V")) {
			if (r.n(-2,1,"") && r.n(-1,1,"E")) return "RD";
			return "PC";
		}
		if (r.n(1,1,"V") && r.n(2,1,"B")) {
			if (r.n(-1,1,"E") && r.n(1,1,"V")) return "RD";
			return "PC";
		}
		if (r.n(-1,1,"V") && r.n(1,1,"E")) {
			if (r.w=="il") return "RD";
			return "PC";
		}
		if (r.n(1,1,"RD")) return "PC";
		if (r.n(1,1,"VM")) return "PC";
		if (r.n(1,1,"EA")) return "PC";
		if (r.n(1,1,"FS")) return "PC";
		if (r.n(-1,0,"far-")) return "PC";
		if (r.n(-1,1,"SP") && r.n(1,1,"SP")) {
			if (r.w=="il") return "RD";
			return "SP";
		}
		if (r.n(-1,1,"V") && r.n(1,1,"FF")) return "PC";
		if (r.n(1,1,"PC")) return "PC";
		if (r.n(-1,1,"CS") && r.n(1,1,"V")) return "PC";
		if (r.n(-1,1,"PE") && r.n(1,1,"V")) return "PC";
		if (r.w=="la" && r.n(-1,1,"FF") && r.n(1,1,"V")) return "PC";
		if (r.w=="le" && r.n(-1,1,"V") && r.n(1,1,"B")) return "PC";
		if (r.w=="la" && r.n(1,1,"V") && r.n(2,1,"E")) return "PC";
		if (r.w=="Lo" && r.n(1,1,"V")) return "PC";
		if (r.w=="I" && r.n(-1,1,"S")) return "NO";
		if (r.n(1,0,"vide")) return "PC";
		if (r.n(-1,1,"PR") && r.n(1,1,"V")) {
			if (r.n(-2,1,"E") && r.n(-1,1,"PR")) return "RD";
			return "PC";
		}
		if (r.w=="le" && r.n(1,1,"V") && r.n(2,1,"V")) return "PC";
		if (r.w=="la" && r.n(1,1,"B") && r.n(2,1,"FS")) return "PC";
		if (r.w=="le" && r.n(-1,0,"pour")) return "S";
		return "RD";
	}
	if (r.t=="PC") {
		if (r.w=="lo" && r.n(1,1,"S")) return "RD";
		if (r.w=="lo" && r.n(1,1,"A")) {
			if (r.w=="lo" && r.n(-1,0,"render-")) return "PC";
			return "RD";
		}
		if (r.w=="lo" && r.n(1,1,"SP")) return "RD";
		if (r.w=="lo" && r.n(-1,1,"E")) return "RD";
		if (r.w=="lo" && r.n(1,0,"stato")) return "RD";
		return "PC";
	}
	if (r.t=="Vm2s") return "Vm2s";
	if (r.t=="PE") return "PE";
	if (r.t=="PI") {
		if (r.n(1,1,"S")) {
			if (r.s(-3,"tri")) return "A";
			if (r.s(-4,"utto")) return "DI";
			if (r.w=="Altro" && r.n(-2,1,"") && r.n(-1,1,"")) return "DI";
			if (r.s(-2,"te")) return "DI";
			return "RI";
		}
		if (r.n(1,0,"il")) return "T";
		if (r.n(1,1,"PD")) {
			if (r.n(-1,0,"con")) return "T";
			return "A";
		}
		if (r.n(1,0,"stato")) return "RI";
		if (r.w=="Tutti" && r.n(1,1,"RD")) return "T";
		if (r.w=="uno" && r.n(1,1,"A")) return "RI";
		if (r.w=="uno" && r.n(1,1,"SP")) return "RI";
		return "PI";
	}
	if (r.t=="RI") {
		if (r.n(1,1,"EA")) return "PI";
		if (r.w=="una" && r.n(1,1,"E")) return "PI";
		if (r.n(1,1,"FF")) return "PI";
		return "RI";
	}
	if (r.t=="A") {
		if (r.n(-1,1,"RD") && r.n(1,1,"E")) {
			if (r.w=="altro" && r.n(-1,1,"RD") && r.n(1,1,"E")) return "PI";
			return "S";
		}
		if (r.n(-1,1,"EA") && r.n(1,1,"FF")) {
			if (r.s(-3,"tri")) return "PI";
			if (r.w=="altra" && r.n(-1,1,"EA") && r.n(1,1,"FF")) return "PI";
			if (r.n(-2,0,"rispetto")) return "A";
			if (r.w=="altro" && r.n(-1,0,"all'")) return "PI";
			if (r.n(-2,1,"SP")) return "SP";
			return "S";
		}
		if (r.n(-1,1,"EA") && r.n(1,1,"FS")) {
			if (r.w=="altro" && r.n(-1,1,"EA") && r.n(1,1,"FS")) return "PI";
			if (r.n(-1,0,"del") && r.n(1,0,"?")) return "SP";
			if (r.s(-3,"ali")) return "A";
			if (r.s(-2,"sa")) return "SP";
			return "S";
		}
		if (r.n(-1,1,"EA") && r.n(1,1,"E")) {
			if (r.s(-2,"na")) return "A";
			return "S";
		}
		if (r.n(-1,1,"EA") && r.n(1,1,"EA")) {
			if (r.s(-2,"ri")) return "A";
			return "S";
		}
		if (r.n(-1,1,"RD") && r.n(1,1,"EA")) {
			if (r.s(-3,"oli")) return "A";
			return "S";
		}
		if (r.n(-1,1,"RD") && r.n(1,1,"FS")) return "S";
		if (r.n(-1,1,"E") && r.n(1,1,"FF")) {
			if (r.s(-3,"tri")) return "PI";
			if (r.w=="nuovo" && r.n(-1,1,"E")) return "A";
			if (r.s(-3,"iva")) return "SP";
			return "S";
		}
		if (r.n(-1,1,"RI") && r.n(1,1,"E")) return "S";
		if (r.w=="lungo" && r.n(1,1,"RD")) {
			if (r.w=="lungo" && r.n(-2,1,"PQ") && r.n(-1,1,"V")) return "A";
			if (r.n(-1,1,"E") && r.n(1,1,"RD")) return "A";
			return "E";
		}
		if (r.n(-1,1,"RD") && r.n(1,1,"FF")) {
			if (r.n(-1,0,"le")) return "A";
			if (r.s(-2,"la")) return "A";
			if (r.n(-2,0,"e")) return "PI";
			if (r.w=="altro") return "PI";
			return "S";
		}
		if (r.n(-1,1,"RI") && r.n(1,1,"FS")) {
			if (r.s(-4,"ltra")) return "PI";
			return "S";
		}
		if (r.n(-1,1,"E") && r.n(1,1,"FS")) {
			if (r.w=="spagnolo" && r.n(-1,0,"in")) return "A";
			if (r.w=="sola" && r.n(-1,0,"da") && r.n(1,0,"?")) return "A";
			if (r.n(-1,0,"di") && r.n(1,0,"?")) return "SP";
			return "S";
		}
		if (r.n(-1,1,"RD") && r.n(1,1,"B")) {
			if (r.n(1,0,"anche")) return "PI";
			if (r.w=="altro" && r.n(1,1,"B")) return "DI";
			return "S";
		}
		if (r.n(-1,1,"RD") && r.n(1,1,"VA")) return "S";
		if (r.n(-1,1,"E") && r.n(1,1,"CC")) {
			if (r.s(-2,"le")) return "A";
			if (r.w=="vera") return "A";
			if (r.n(1,1,"CC") && r.n(2,1,"V")) return "SP";
			return "S";
		}
		if (r.n(-1,1,"RD") && r.n(1,1,"A")) {
			if (r.n(-2,1,"FF") && r.n(-1,1,"RD")) return "A";
			if (r.n(2,1,"S")) return "A";
			if (r.n(2,0,".")) return "A";
			if (r.n(-2,0,"e")) return "PI";
			return "S";
		}
		if (r.w=="inglese" && r.n(-1,0,"in")) return "S";
		if (r.n(-1,1,"EA") && r.n(1,1,"CC")) {
			if (r.s(-4,"cole")) return "A";
			if (r.w=="interessati" && r.n(-1,0,"degli")) return "A";
			return "S";
		}
		if (r.n(-1,1,"EA") && r.n(1,1,"A")) {
			if (r.w=="serbo" && r.n(-1,1,"EA")) return "A";
			if (r.s(-4,"uovo")) return "A";
			if (r.s(-4,"uovi")) return "A";
			if (r.s(-2,"na")) return "A";
			if (r.n(-1,0,"degli")) return "A";
			if (r.s(-2,"ro")) return "A";
			return "S";
		}
		if (r.n(-1,0,"Unione")) return "SP";
		if (r.n(-1,1,"E") && r.n(1,1,"E")) {
			if (r.n(1,0,"a")) return "A";
			if (r.s(-3,"tri")) return "PI";
			return "S";
		}
		if (r.n(-1,1,"N") && r.n(1,1,"FF")) return "S";
		if (r.n(-2,1,"RI") && r.n(-1,1,"A")) {
			if (r.n(-1,1,"A") && r.n(1,1,"S")) return "A";
			if (r.s(-3,"nta")) return "A";
			return "S";
		}
		if (r.n(-1,1,"RD") && r.n(1,1,"PC")) return "S";
		if (r.n(-1,0,"si")) {
			if (r.n(-2,1,"V") && r.n(-1,1,"PC")) return "A";
			return "V";
		}
		if (r.w=="altri" && r.n(1,1,"N")) return "DI";
		if (r.w=="italiani" && r.n(-1,1,"EA")) return "S";
		if (r.n(-1,1,"RD") && r.n(1,1,"PR")) {
			if (r.s(-2,"sa")) return "PD";
			return "S";
		}
		if (r.n(-1,1,"EA") && r.n(1,1,"FC")) return "S";
		if (r.n(-1,1,"RD") && r.n(1,1,"FC")) return "S";
		if (r.n(-1,1,"PR") && r.n(1,1,"RD")) return "V";
		if (r.n(-1,0,"i") && r.n(1,0,"e")) return "S";
		if (r.w=="tecnica" && r.n(-1,1,"DD")) return "S";
		if (r.n(-1,1,"RD") && r.n(1,1,"V")) {
			if (r.n(-1,0,"la")) return "A";
			if (r.w=="altri" && r.n(-1,1,"RD") && r.n(1,1,"V")) return "PI";
			if (r.w=="altro" && r.n(-2,1,"E") && r.n(-1,1,"RD")) return "PI";
			return "S";
		}
		if (r.w=="tecnica" && r.n(-1,1,"RI")) return "S";
		if (r.n(-1,1,"RD") && r.n(1,1,"BN")) {
			if (r.w=="altri" && r.n(1,0,"non") && r.n(2,0,"dispongono")) return "PI";
			return "S";
		}
		if (r.w=="regolare" && r.n(1,1,"RD")) return "V";
		if (r.n(-2,1,"V") && r.n(-1,1,"SP")) return "SP";
		if (r.w=="altre" && r.n(-1,0,"in")) return "DI";
		if (r.w=="altre" && r.n(-1,1,"B")) return "DI";
		if (r.n(-1,0,"D'")) return "DI";
		if (r.w=="ultimi" && r.n(-2,0,"di") && r.n(-1,0,"questi")) return "NO";
		if (r.w=="altri" && r.n(1,1,"FB")) return "PI";
		if (r.w=="altra" && r.n(-2,1,"CC") && r.n(-1,1,"RI")) return "PI";
		if (r.w=="altri" && r.n(1,0,"che")) return "PI";
		if (r.w=="anti" && r.n(-1,1,"S") && r.n(1,1,"FF")) {
			if (r.n(1,1,"FF") && r.n(2,1,"Sms")) return "Ann";
			return "E";
		}
		if (r.n(-1,1,"EA") && r.n(1,1,"BN")) return "S";
		if (r.n(-1,1,"EA") && r.n(1,1,"VM")) return "S";
		if (r.w=="caro" && r.n(1,0,"università")) return "S";
		if (r.n(-1,1,"EA") && r.n(1,1,"V")) {
			if (r.s(-2,"re")) return "A";
			if (r.s(-4,"")) return "A";
			if (r.n(2,1,"SP")) return "A";
			return "S";
		}
		if (r.n(-1,1,"DI") && r.n(1,1,"FF")) return "S";
		if (r.n(-1,1,"E") && r.n(1,1,"PR")) return "S";
		if (r.n(-1,1,"RI") && r.n(1,1,"PR")) return "S";
		if (r.n(-1,0,"nuovi")) return "S";
		if (r.n(-1,1,"DQ") && r.n(1,1,"V")) return "S";
		if (r.n(-2,1,"") && r.n(-1,1,"N")) return "S";
		if (r.n(-1,1,"EA") && r.n(1,1,"RD")) return "S";
		if (r.n(-1,1,"EA") && r.n(1,1,"PR")) return "S";
		if (r.n(-1,1,"EA") && r.n(1,1,"VA")) return "S";
		if (r.n(-1,1,"E") && r.n(1,1,"V")) {
			if (r.n(-1,0,"in")) return "A";
			return "S";
		}
		if (r.n(-1,1,"CS") && r.n(1,1,"EA")) return "V";
		if (r.n(-1,0,"hanno")) return "V";
		if (r.n(-1,0,"viene")) return "V";
		if (r.n(-2,1,"FF") && r.n(-1,1,"SP")) return "SP";
		if (r.n(-1,0,";")) return "SP";
		if (r.n(-1,0,"Rivoluzione")) return "SP";
		if (r.w=="San" && r.n(2,0,"?")) return "SP";
		return "A";
	}
	if (r.t=="VA") {
		if (r.n(2,1,"S")) {
			if (r.w=="ha" && r.n(1,1,"V") && r.n(2,1,"S")) return "VA";
			if (r.w=="hanno" && r.n(1,1,"V")) return "VA";
			if (r.w=="stato" && r.n(1,0,"di")) return "S";
			if (r.w=="stati" && r.n(1,1,"V") && r.n(2,1,"S")) return "VA";
			if (r.n(-1,1,"EA")) return "S";
			if (r.w=="viene" && r.n(1,1,"V")) return "VA";
			if (r.n(-1,1,"PR") && r.n(1,1,"V")) return "VA";
			if (r.w=="sia" && r.n(1,1,"EA") && r.n(2,1,"S")) return "CC";
			if (r.n(1,0,"più")) return "VA";
			if (r.n(-1,1,"PC") && r.n(1,1,"V")) return "VA";
			if (r.w=="sia" && r.n(1,0,"i")) return "CC";
			if (r.n(-1,1,"FB") && r.n(1,1,"V")) return "VA";
			if (r.s(-3,"nne")) return "VA";
			if (r.n(-1,1,"PC") && r.n(1,1,"VA")) return "VA";
			if (r.n(-2,0,"Io")) return "VA";
			if (r.w=="essere" && r.n(1,1,"V")) return "VA";
			if (r.w=="sia" && r.n(-1,0,",") && r.n(1,0,"per")) return "CC";
			if (r.w=="sia" && r.n(-1,1,"V") && r.n(1,1,"E")) return "CC";
			if (r.w=="aver") return "VA";
			if (r.n(-2,1,"PQ")) return "VA";
			if (r.n(-1,1,"S") && r.n(1,1,"V")) return "VA";
			if (r.n(-1,0,"gli")) return "VA";
			if (r.n(1,0,"da")) return "VA";
			if (r.w=="stato" && r.n(1,0,"dei")) return "S";
			return "V";
		}
		if (r.n(1,1,"RD")) return "V";
		if (r.n(1,1,"A")) {
			if (r.w=="stato" && r.n(-1,1,"DQ") && r.n(1,1,"A")) return "S";
			if (r.w=="viene") return "VA";
			if (r.n(-1,1,"RD")) return "VA";
			if (r.w=="ha" && r.n(-1,1,"FF")) return "VA";
			if (r.n(-1,1,"PC")) return "VA";
			if (r.n(-1,1,"SP")) return "VA";
			if (r.w=="state" && r.n(-1,1,"V") && r.n(1,1,"A")) return "VA";
			if (r.n(2,0,"la")) return "VA";
			if (r.n(1,0,"maggiore")) return "S";
			if (r.w=="stati" && r.n(1,0,"americani")) return "S";
			return "V";
		}
		if (r.n(1,1,"E")) {
			if (r.w=="sia" && r.n(1,0,"per")) return "CC";
			if (r.n(1,1,"E") && r.n(2,1,"PD")) return "CC";
			if (r.w=="sia" && r.n(1,1,"E") && r.n(2,1,"SP")) return "CC";
			if (r.w=="avevano" && r.n(-1,1,"N")) return "VA";
			if (r.n(-2,1,"S") && r.n(-1,1,"SP")) return "VA";
			if (r.w=="stato" && r.n(-1,1,"EA") && r.n(1,1,"E")) return "S";
			return "V";
		}
		if (r.n(1,1,"S")) {
			if (r.n(-1,1,"RD") && r.n(1,1,"S")) {
				if (r.w=="stati" && r.n(1,1,"S")) return "S";
				return "VA";
			}
			if (r.w=="stata" && r.n(1,1,"S") && r.n(2,1,"E")) return "VA";
			if (r.s(-2,"ne")) return "VA";
			if (r.s(-3,"ono")) return "VA";
			if (r.n(2,0,"la")) return "VA";
			if (r.n(2,0,"come")) return "VA";
			if (r.n(1,0,"corso")) return "VA";
			if (r.n(1,0,"mandato")) return "VA";
			if (r.n(1,0,"messe")) return "VA";
			if (r.w=="aver" && r.n(-1,1,"E") && r.n(1,1,"S")) return "VA";
			if (r.n(1,0,"percorso")) return "VA";
			if (r.n(2,0,"con")) return "VA";
			if (r.w=="stati" && r.n(2,0,"da")) return "VA";
			if (r.w=="essere" && r.n(2,0,"in")) return "VA";
			if (r.w=="ha" && r.n(1,0,"prodotto")) return "VA";
			if (r.n(-1,0,"si")) return "VA";
			if (r.w=="essere" && r.n(1,1,"S") && r.n(2,1,"EA")) return "VA";
			if (r.n(-1,0,"cosa")) return "VA";
			if (r.n(1,0,"tratto")) return "VA";
			if (r.n(1,0,"resa")) return "VA";
			if (r.n(-1,1,"DQ") && r.n(1,1,"S")) return "S";
			return "V";
		}
		if (r.n(1,1,"SP")) return "V";
		if (r.n(1,1,"RI")) return "V";
		if (r.n(1,1,"B") && r.n(2,1,"A")) return "V";
		if (r.n(1,1,"B") && r.n(2,1,"RI")) return "V";
		if (r.n(1,1,"B") && r.n(2,1,"E")) return "V";
		if (r.n(1,1,"PI")) return "V";
		if (r.n(2,0,"")) {
			if (r.n(-1,0,"uno") && r.n(1,0,"?")) return "S";
			return "V";
		}
		if (r.n(1,1,"FF")) return "V";
		if (r.w=="stato" && r.n(-1,1,"DQ")) return "S";
		if (r.n(1,1,"PD")) return "V";
		if (r.n(1,1,"EA")) {
			if (r.w=="sia" && r.n(1,1,"EA")) return "CC";
			return "V";
		}
		if (r.n(1,1,"B") && r.n(2,1,"RD")) {
			if (r.n(1,0,"subito")) return "VA";
			return "V";
		}
		if (r.n(1,1,"DI")) return "V";
		if (r.n(1,1,"B") && r.n(2,1,"B")) return "V";
		if (r.n(1,1,"T") && r.n(2,1,"RD")) return "V";
		if (r.n(-1,1,"VM") && r.n(1,1,"PC")) return "V";
		if (r.n(1,1,"N")) return "V";
		if (r.n(-2,1,"PC") && r.n(-1,1,"V")) return "V";
		if (r.n(1,0,"meglio")) return "V";
		if (r.n(1,1,"PE")) return "V";
		if (r.n(1,1,"B") && r.n(2,1,"FF")) return "V";
		if (r.n(1,1,"DD")) return "V";
		if (r.w=="essere" && r.n(1,0,"''")) return "V";
		if (r.n(1,1,"B") && r.n(2,1,"FB")) return "V";
		return "VA";
	}
	if (r.t=="B") {
		if (r.w=="proprio" && r.n(1,1,"S")) {
			if (r.n(-2,0,"vero")) return "A";
			return "AP";
		}
		if (r.w=="oltre" && r.n(1,1,"RD")) return "E";
		if (r.n(-1,1,"RI") && r.n(1,1,"S")) {
			if (r.w=="po'") return "B";
			if (r.w=="certo" && r.n(-2,0,"per")) return "DI";
			return "A";
		}
		if (r.n(-1,0,"un") && r.n(1,0,"di")) return "S";
		if (r.w=="poco" && r.n(1,1,"S")) return "DI";
		if (r.w=="ora" && r.n(-1,1,"RD")) return "S";
		if (r.w=="bene" && r.n(1,1,"A")) return "S";
		if (r.n(-1,1,"DI")) return "S";
		if (r.w=="solo" && r.n(-1,1,"RD")) return "A";
		if (r.w=="più" && r.n(-1,1,"E") && r.n(1,1,"S")) return "DI";
		if (r.w=="oggi" && r.n(-2,1,"S") && r.n(-1,1,"E")) {
			if (r.n(2,1,"S")) return "B";
			return "S";
		}
		if (r.w=="salvo" && r.n(1,1,"RD") && r.n(2,1,"S")) return "A";
		if (r.w=="salvo" && r.n(1,1,"PR") && r.n(2,1,"V")) return "E";
		if (r.w=="ora" && r.n(-1,1,"RI")) return "S";
		if (r.w=="ora" && r.n(-1,1,"EA")) return "S";
		if (r.n(-2,1,"E") && r.n(-1,1,"PC")) return "S";
		if (r.w=="rispetto" && r.n(1,0,"dei")) return "S";
		if (r.w=="bene" && r.n(-1,1,"EA")) return "S";
		if (r.w=="Quando" && r.n(1,1,"RD") && r.n(2,1,"S")) {
			if (r.n(-1,0,"") && r.n(1,0,"i")) return "B";
			return "CS";
		}
		if (r.w=="più" && r.n(-2,0,"uno") && r.n(-1,0,"o")) return "PI";
		if (r.w=="solo" && r.n(-1,1,"E")) return "A";
		if (r.w=="lontano" && r.n(-1,0,"è")) return "A";
		if (r.w=="fuori" && r.n(2,0,",")) return "E";
		if (r.w=="più" && r.n(-1,1,"CC") && r.n(1,1,"S")) return "DI";
		if (r.w=="ora" && r.n(-2,0,"quarto") && r.n(-1,0,"d'")) return "S";
		if (r.w=="insieme" && r.n(-1,1,"RD")) return "S";
		if (r.w=="po'" && r.n(1,0,"più")) return "S";
		if (r.w=="salvo" && r.n(-1,0,"in")) return "S";
		if (r.w=="insieme" && r.n(-1,1,"EA")) return "S";
		if (r.w=="ora" && r.n(-1,1,"A")) return "S";
		if (r.w=="avanti" && r.n(-1,0,"in")) return "S";
		if (r.w=="oggi" && r.n(-1,1,"A")) return "S";
		if (r.w=="rispetto" && r.n(-1,1,"EA")) return "S";
		if (r.w=="subito" && r.n(-1,1,"VA") && r.n(1,1,"RD")) return "V";
		if (r.w=="Quando" && r.n(-1,1,"") && r.n(1,1,"B")) return "CS";
		if (r.w=="Quando" && r.n(1,0,"una")) return "CS";
		if (r.w=="meno" && r.n(1,1,"E") && r.n(2,1,"N")) return "PI";
		return "B";
	}
	if (r.t=="E") {
		if (r.w=="come" && r.n(1,1,"V")) {
			if (r.w=="come" && r.n(1,0,"dire")) return "B";
			if (r.n(-1,1,"SP")) return "B";
			return "CS";
		}
		if (r.w=="secondo" && r.n(1,1,"S")) return "NO";
		if (r.w=="dopo" && r.n(1,1,"VA")) return "CS";
		if (r.n(1,0,",")) {
			if (r.w=="come" && r.n(2,0,"ad")) return "E";
			if (r.w=="secondo") return "NO";
			return "B";
		}
		if (r.w=="come" && r.n(1,1,"CS")) return "B";
		if (r.w=="come" && r.n(1,1,"VA")) return "CS";
		if (r.n(1,1,"EA")) {
			if (r.w=="verso" && r.n(1,1,"EA") && r.n(2,1,"S")) return "S";
			if (r.w=="di") return "E";
			if (r.w=="con" && r.n(1,1,"EA") && r.n(2,1,"S")) return "E";
			return "B";
		}
		if (r.n(1,1,"FS")) {
			if (r.w=="A" && r.n(1,1,"FS") && r.n(2,1,"")) return "SP";
			return "B";
		}
		if (r.w=="A" && r.n(2,0,"?")) return "SP";
		if (r.w=="come" && r.n(1,1,"PC")) {
			if (r.w=="come" && r.n(-1,1,"CC") && r.n(1,1,"PC")) return "B";
			return "CS";
		}
		if (r.w=="come" && r.n(1,1,"VM")) return "B";
		if (r.n(-1,0,"di")) return "B";
		if (r.n(1,0,")")) {
			if (r.n(-1,0,"") && r.n(1,0,")")) return "X";
			return "B";
		}
		if (r.w=="come" && r.n(1,1,"E")) return "B";
		if (r.w=="secondo" && r.n(-1,1,"RD")) return "NO";
		if (r.n(1,0,"Lascia")) return "SP";
		if (r.w=="A" && r.n(-2,1,"E") && r.n(-1,1,"S")) return "SP";
		if (r.w=="D'" && r.n(1,1,"SP")) return "SP";
		if (r.w=="A" && r.n(1,1,"X")) return "SP";
		if (r.w=="come" && r.n(1,0,"non")) return "CS";
		if (r.n(-1,1,"") && r.n(1,1,"VA")) return "CS";
		if (r.w=="dietro" && r.n(1,0,"una")) return "B";
		if (r.w=="contro" && r.n(1,0,"di")) return "B";
		if (r.w=="come" && r.n(2,0,"era")) return "CS";
		return "E";
	}
	if (r.t=="PD") {
		if (r.n(1,1,"S")) {
			if (r.s(-2,"li")) return "PD";
			return "DD";
		}
		if (r.n(1,1,"A") && r.n(2,1,"S")) return "DD";
		return "PD";
	}
	if (r.t=="CC") {
		if (r.w=="cioè" && r.n(-2,1,"SP") && r.n(-1,1,"FF")) return "B";
		return "CC";
	}
	if (r.t=="EA") {
		if (r.n(-2,1,"") && r.n(-1,1,"Vm2s")) return "RI";
		if (r.w=="della" && r.n(1,0,"Francesca")) return "SP";
		if (r.w=="Al" && r.n(2,0,"?")) return "SP";
		return "EA";
	}
	if (r.t=="VM") {
		if (r.n(1,1,"PR")) return "V";
		if (r.n(2,1,"")) return "V";
		if (r.n(1,1,"EA")) return "V";
		if (r.w=="vuole" && r.n(1,1,"B")) return "V";
		if (r.n(1,1,"S")) return "V";
		if (r.n(1,1,"RD")) return "V";
		if (r.n(1,1,"RI")) return "V";
		return "VM";
	}
	if (r.t=="N") {
		if (r.s(-2,"''")) return "X";
		if (r.w=="sei" && r.n(1,1,"V") && r.n(2,1,"E")) return "VA";
		if (r.w=="venti" && r.n(-1,0,"dei")) return "S";
		return "N";
	}
	if (r.t=="AP") {
		if (r.w=="loro" && r.n(-1,1,"E")) {
			if (r.n(-1,0,"a") && r.n(1,0,"volta")) return "AP";
			return "PE";
		}
		if (r.w=="loro" && r.n(-1,1,"V")) return "PE";
		if (r.w=="propria" && r.n(-2,1,"A") && r.n(-1,1,"CC")) return "A";
		if (r.n(1,0,"è")) return "PP";
		if (r.n(-1,1,"RD") && r.n(1,1,"FF")) return "PP";
		return "AP";
	}
	if (r.t=="S") {
		if (r.n(-1,0,"si")) {
			if (r.w=="luogo" && r.n(-1,1,"PC")) return "S";
			if (r.s(-3,"oni")) return "S";
			return "V";
		}
		if (r.w=="cosa" && r.n(-2,0,"")) {
			if (r.n(1,1,"V") && r.n(2,1,"A")) return "S";
			if (r.w=="cosa" && r.n(-1,0,"Che") && r.n(1,0,"inventò")) return "S";
			return "PQ";
		}
		if (r.n(-1,1,"SP") && r.n(1,1,"FF")) {
			if (r.w=="membri") return "S";
			if (r.s(-2,"re")) return "S";
			return "SP";
		}
		if (r.n(-1,1,"SP") && r.n(1,1,"FS")) {
			if (r.w=="membri" && r.n(-1,1,"SP")) return "S";
			if (r.s(-3,"olo")) return "S";
			if (r.n(-2,0,"")) return "S";
			return "SP";
		}
		if (r.w=="cosa" && r.n(-2,1,"E") && r.n(-1,1,"PR")) {
			if (r.w=="cosa" && r.n(1,0,"si")) return "S";
			return "PQ";
		}
		if (r.w=="generale" && r.n(-1,1,"S")) return "A";
		if (r.w=="finanziarie" && r.n(-1,1,"S")) return "A";
		if (r.n(-2,1,"S") && r.n(-1,1,"PR")) return "V";
		if (r.n(-1,1,"S") && r.n(1,1,"RD")) {
			if (r.s(-3,"tte")) return "S";
			if (r.n(2,1,"SP")) return "S";
			return "V";
		}
		if (r.w=="vicino" && r.n(1,1,"EA") && r.n(2,1,"S")) return "B";
		if (r.n(-2,1,"") && r.n(-1,1,"FB")) {
			if (r.n(-1,0,"(")) return "S";
			return "SP";
		}
		if (r.w=="via" && r.n(-1,1,"V")) return "B";
		if (r.w=="successo" && r.n(-1,1,"V")) return "V";
		if (r.w=="personale" && r.n(-1,1,"S")) return "A";
		if (r.w=="morti" && r.n(-1,0,"sono")) return "V";
		if (r.n(-1,1,"VA") && r.n(1,1,"RD")) {
			if (r.w=="sede" && r.n(1,1,"RD")) return "S";
			return "V";
		}
		if (r.n(-1,1,"SP") && r.n(1,1,"FB")) {
			if (r.s(-2,"em")) return "S";
			if (r.n(1,1,"FB") && r.n(2,1,"FB")) return "S";
			return "SP";
		}
		if (r.w=="generali" && r.n(-1,1,"S")) return "A";
		if (r.w=="quotidiano" && r.n(-1,0,"")) return "A";
		if (r.w=="finale" && r.n(-1,1,"S")) return "A";
		if (r.w=="interno" && r.n(-1,1,"S")) return "A";
		if (r.w=="particolare" && r.n(1,1,"S")) return "A";
		if (r.n(-1,1,"BN")) {
			if (r.w=="uso" && r.n(-1,1,"BN")) return "S";
			if (r.w=="cinema" && r.n(1,1,"FB") && r.n(2,1,"FS")) return "S";
			return "V";
		}
		if (r.w=="partito" && r.n(-1,1,"V")) return "V";
		if (r.n(-1,1,"CS")) {
			if (r.n(-1,1,"CS") && r.n(1,1,"V")) return "SP";
			return "V";
		}
		if (r.n(-1,0,"stata")) return "V";
		if (r.n(-1,1,"") && r.n(1,1,"RD")) return "V";
		if (r.n(-1,0,"Si")) return "V";
		if (r.n(-2,1,"PQ") && r.n(-1,1,"V")) return "SP";
		if (r.w=="particolare" && r.n(-1,1,"S")) return "A";
		if (r.n(-1,1,"FF") && r.n(1,1,"RD")) return "V";
		if (r.w=="passato" && r.n(-1,1,"V")) return "V";
		if (r.w=="giunta" && r.n(-1,1,"V")) return "V";
		if (r.n(-2,1,"CS") && r.n(-1,1,"PC")) return "V";
		if (r.n(-1,1,"SP") && r.n(1,1,"RD")) {
			if (r.s(-2,"'s")) return "S";
			if (r.w=="pour" && r.n(-1,1,"SP")) return "S";
			return "V";
		}
		if (r.n(-2,1,"RD") && r.n(-1,1,"VA")) {
			if (r.w=="membri" && r.n(-2,0,"gli")) return "S";
			return "V";
		}
		if (r.n(-2,0,"venduto")) return "SP";
		if (r.w=="animale" && r.n(-2,0,"") && r.n(-1,0,"Quale")) return "A";
		if (r.w=="mezzo" && r.n(1,1,"S")) return "A";
		if (r.n(-1,0,"più") && r.n(1,0,",")) return "A";
		if (r.n(-1,1,"S") && r.n(1,1,"VA")) {
			if (r.n(1,1,"VA") && r.n(2,1,"B")) return "S";
			if (r.s(-2,"te")) return "V";
			return "A";
		}
		if (r.w=="specie" && r.n(-1,1,"FF")) return "B";
		if (r.w=="vista" && r.n(-1,1,"V")) return "V";
		if (r.w=="prodotto" && r.n(1,1,"EA")) return "V";
		if (r.w=="resa" && r.n(1,1,"A")) return "V";
		if (r.n(-1,1,"SP") && r.n(1,1,"SP")) return "SP";
		if (r.w=="cosa" && r.n(-1,1,"B")) return "PQ";
		if (r.w=="tecnici" && r.n(-1,1,"S")) return "A";
		if (r.w=="destra" && r.n(-1,1,"S")) return "A";
		if (r.w=="tecniche" && r.n(-1,1,"S")) return "A";
		if (r.w=="mobili" && r.n(-1,1,"S")) return "A";
		if (r.w=="ufficiali" && r.n(-1,1,"S")) return "A";
		if (r.w=="volontari" && r.n(-1,1,"S")) return "A";
		if (r.w=="vicino" && r.n(1,0,"a")) return "B";
		if (r.n(-1,0,",") && r.n(1,0,"da")) return "V";
		if (r.w=="morti" && r.n(-1,1,"S")) return "V";
		if (r.n(-1,1,"S") && r.n(1,1,"RI")) return "V";
		if (r.w=="uscita" && r.n(-1,0,"è")) return "V";
		if (r.n(-1,1,"S") && r.n(1,1,"B")) {
			if (r.s(-2,"ro")) return "S";
			return "V";
		}
		if (r.n(-1,0,"mi")) return "V";
		if (r.n(-1,0,"chi")) return "V";
		if (r.w=="Parlamento" && r.n(2,0,"?")) return "SP";
		if (r.n(-2,1,"V") && r.n(-1,1,"SP")) return "SP";
		if (r.n(-1,0,";")) {
			if (r.n(-1,1,"FC") && r.n(1,1,"N")) return "S";
			return "SP";
		}
		if (r.w=="leader" && r.n(-1,1,"SW")) return "SW";
		if (r.w=="cosa" && r.n(-1,1,"V")) return "PQ";
		if (r.w=="ebrei" && r.n(-1,1,"S")) return "A";
		if (r.w=="vicino" && r.n(-1,1,"S")) return "A";
		if (r.w=="personale" && r.n(-1,1,"A")) return "A";
		if (r.w=="finanziarie" && r.n(-2,1,"S") && r.n(-1,1,"FB")) return "A";
		if (r.w=="vicino" && r.n(1,1,"S")) return "A";
		if (r.w=="giovani" && r.n(1,1,"S")) return "A";
		if (r.w=="politici" && r.n(-1,1,"S")) return "A";
		if (r.w=="croati" && r.n(-1,1,"S")) return "A";
		if (r.w=="piano" && r.n(-2,1,"V") && r.n(-1,1,"S")) return "B";
		if (r.w=="messe" && r.n(-1,1,"VA") && r.n(1,1,"E")) return "V";
		if (r.n(-1,0,"li")) return "V";
		if (r.w=="permesso" && r.n(-1,1,"VA")) return "V";
		if (r.n(-2,1,"VM") && r.n(-1,1,"VA")) return "V";
		if (r.w=="mandato" && r.n(-1,1,"VA")) return "V";
		if (r.n(-1,1,"CC") && r.n(1,1,"RI")) return "V";
		if (r.n(-1,0,"e") && r.n(1,0,"gli")) return "V";
		if (r.w=="trattato" && r.n(1,1,"E")) return "V";
		if (r.n(-1,0,"che") && r.n(1,0,"al")) return "V";
		if (r.n(-1,1,"FF") && r.n(1,1,"RI")) return "V";
		if (r.w=="corso" && r.n(-1,0,"ha")) return "V";
		if (r.w=="messa" && r.n(-1,1,"V")) return "V";
		if (r.w=="entrata" && r.n(-1,1,"V")) return "V";
		if (r.w=="posto" && r.n(-1,0,",")) return "V";
		if (r.w=="auto" && r.n(1,1,"FF") && r.n(2,1,"S")) return "Ann";
		if (r.n(-1,0,"trova")) return "SP";
		if (r.w=="Parlamento" && r.n(1,1,"A") && r.n(2,1,"FS")) return "SP";
		if (r.w=="Corte" && r.n(-1,0,"la")) return "SP";
		if (r.n(2,0,"Internazionale")) return "SP";
		if (r.s(-3,"RIO")) return "SP";
		if (r.n(-1,0,"morì")) return "SP";
		if (r.n(-1,1,"S") && r.n(1,1,"")) return "SP";
		if (r.w=="Repubblica" && r.n(1,1,"SP")) return "SP";
		if (r.w=="Centro" && r.n(1,1,"E") && r.n(2,1,"RD")) return "SP";
		if (r.w=="Comitato" && r.n(2,0,"della")) return "SP";
		if (r.w=="Governo" && r.n(1,0,"della") && r.n(2,0,"Regione")) return "SP";
		if (r.n(-1,1,"SP") && r.n(1,1,"FC")) return "SP";
		if (r.w=="Capo" && r.n(1,1,"SP")) return "SP";
		if (r.w=="Commissione" && r.n(1,1,"SP")) return "SP";
		if (r.w=="Regione" && r.n(-2,0,"Governo") && r.n(-1,0,"della")) return "SP";
		if (r.w=="Piazza" && r.n(1,1,"SP")) return "SP";
		if (r.w=="computer" && r.n(-1,0,"personal")) return "SW";
		return "S";
	}
	if (r.t=="T") {
		if (r.n(1,1,"S")) {
			if (r.n(-1,1,"E") && r.n(1,1,"S")) return "DI";
			return "PI";
		}
		if (r.n(2,1,"V")) return "PI";
		if (r.n(1,1,"V")) return "PI";
		if (r.w=="tutti" && r.n(1,1,"A")) return "PI";
		if (r.n(2,1,"")) return "PI";
		if (r.n(1,1,"A")) return "A";
		if (r.n(1,0,",")) return "PI";
		if (r.n(1,1,"E")) return "PI";
		if (r.n(1,1,"B")) return "PI";
		if (r.w=="tutti" && r.n(1,0,"e")) return "PI";
		return "T";
	}
	if (r.t=="V") {
		if (r.w=="è" && r.n(1,1,"V")) {
			if (r.w=="è" && r.n(1,0,"sepolto")) return "V";
			return "VA";
		}
		if (r.n(1,1,"VA")) {
			if (r.n(1,0,"sia")) return "V";
			if (r.s(-3,"bra")) return "V";
			if (r.w=="fa" && r.n(-1,1,"S") && r.n(1,1,"VA")) return "B";
			if (r.n(1,0,"essere")) return "V";
			if (r.n(1,0,"ha")) {
				if (r.w=="fa" && r.n(-1,1,"S") && r.n(1,1,"VA")) return "B";
				return "A";
			}
			if (r.n(1,0,"viene")) return "V";
			if (r.s(-2,"ti")) {
				if (r.n(-2,1,"S")) return "V";
				return "S";
			}
			if (r.s(-2,"re")) return "V";
			return "VA";
		}
		if (r.w=="sono" && r.n(1,1,"V")) {
			if (r.w=="sono" && r.n(2,0,"che")) return "V";
			return "VA";
		}
		if (r.w=="era" && r.n(1,1,"V")) return "VA";
		if (r.n(-1,1,"RI")) return "S";
		if (r.w=="fu" && r.n(1,1,"V")) return "VA";
		if (r.w=="fa" && r.n(-1,1,"S")) {
			if (r.w=="fa" && r.n(1,1,"S")) return "V";
			if (r.w=="fa" && r.n(-2,0,"di") && r.n(-1,0,"mesi")) return "A";
			if (r.w=="fa" && r.n(1,0,"con")) return "A";
			if (r.w=="fa" && r.n(-2,1,"RD") && r.n(-1,1,"S")) return "V";
			if (r.w=="fa" && r.n(-2,0,"Che")) return "V";
			return "B";
		}
		if (r.w=="è" && r.n(1,1,"B") && r.n(2,1,"V")) return "VA";
		if (r.n(-1,1,"EA")) {
			if (r.n(-1,1,"EA") && r.n(1,1,"S")) {
				if (r.n(-2,1,"B")) return "A";
				if (r.n(1,0,"profilo")) return "A";
				return "V";
			}
			if (r.n(1,1,"RD") && r.n(2,1,"S")) return "V";
			if (r.s(-4,"ente")) return "V";
			if (r.w=="indiziato") return "V";
			if (r.n(-1,1,"EA") && r.n(1,1,"PC")) return "V";
			if (r.n(1,1,"SP") && r.n(2,1,"SP")) return "A";
			if (r.s(-4,"nero")) return "SP";
			if (r.s(-3,"ire")) return "V";
			if (r.n(1,0,"del")) return "V";
			return "S";
		}
		if (r.w=="sarà" && r.n(1,1,"V")) return "VA";
		if (r.w=="è" && r.n(-1,0,"si")) return "VA";
		if (r.n(-1,0,"i")) return "S";
		if (r.w=="Sono" && r.n(1,1,"V")) return "VA";
		if (r.n(-1,0,"il")) {
			if (r.s(-2,"re")) return "V";
			if (r.w=="concedente" && r.n(-1,0,"il")) return "V";
			if (r.n(-1,1,"RD") && r.n(1,1,"PC")) return "V";
			return "S";
		}
		if (r.n(1,0,"successo")) return "VA";
		if (r.w=="sono" && r.n(1,1,"B") && r.n(2,1,"V")) return "VA";
		if (r.n(-1,0,"in")) {
			if (r.n(-1,1,"E") && r.n(1,1,"S")) return "A";
			return "S";
		}
		if (r.w=="avere" && r.n(1,1,"V")) return "VA";
		if (r.w=="È" && r.n(1,1,"V")) return "VA";
		if (r.w=="va" && r.n(1,1,"V")) {
			if (r.n(-2,1,"S")) return "VA";
			return "VM";
		}
		if (r.n(-2,1,"E") && r.n(-1,1,"RD")) {
			if (r.n(-1,1,"RD") && r.n(1,1,"S")) return "A";
			if (r.n(-2,0,"tra")) return "V";
			return "S";
		}
		if (r.w=="sono" && r.n(1,0,"morti")) return "VA";
		if (r.n(1,0,"partito")) return "VA";
		if (r.w=="saranno" && r.n(1,1,"V")) return "VA";
		if (r.n(-1,1,"SP") && r.n(1,1,"FS")) {
			if (r.n(-2,1,"E") && r.n(-1,1,"SP")) return "A";
			return "SP";
		}
		if (r.w=="fosse" && r.n(1,1,"V")) return "VA";
		if (r.n(1,1,"CC") && r.n(2,1,"A")) return "A";
		if (r.w=="è" && r.n(1,0,"giunta")) return "VA";
		if (r.n(1,0,"passato")) return "VA";
		if (r.w=="posti" && r.n(1,0,"di")) return "S";
		if (r.n(-1,1,"RD") && r.n(1,1,"S")) {
			if (r.s(-3,"")) return "V";
			if (r.s(-3,"nte")) return "V";
			return "A";
		}
		if (r.n(-1,0,"più") && r.n(1,0,",")) {
			if (r.n(2,0,"più")) return "V";
			return "A";
		}
		if (r.n(1,0,"uscita")) return "VA";
		if (r.w=="è" && r.n(1,1,"B") && r.n(2,1,"VA")) return "VA";
		if (r.w=="sono" && r.n(-1,0,"si")) return "VA";
		if (r.w=="vogliono" && r.n(1,1,"V")) return "VM";
		if (r.n(-1,0,"Il")) {
			if (r.s(-2,"te")) return "V";
			return "S";
		}
		if (r.w=="organizzata" && r.n(2,0,"")) return "A";
		if (r.n(-1,0,"più") && r.n(1,0,"e")) return "A";
		if (r.w=="venire" && r.n(1,1,"V")) return "VA";
		if (r.w=="fu" && r.n(-1,1,"FF") && r.n(1,1,"B")) return "VA";
		if (r.n(1,0,"entrata")) return "VA";
		if (r.w=="era" && r.n(-1,0,"si")) return "VA";
		if (r.w=="sarebbero" && r.n(1,1,"V")) return "VA";
		if (r.w=="veniva" && r.n(1,1,"V")) return "VA";
		if (r.n(1,0,"messa")) return "VA";
		if (r.n(-1,0,"L'")) return "S";
		if (r.w=="fatti" && r.n(1,1,"A")) return "S";
		if (r.w=="fatto" && r.n(-1,1,"E")) return "S";
		if (r.n(-1,0,"trova")) return "SP";
		if (r.n(-2,1,"V") && r.n(-1,1,"SP")) return "SP";
		return "V";
	}
	if (r.t=="CS") {
		if (r.n(1,0,"ne")) return "PC";
		if (r.n(1,0,"stesso")) return "PC";
		if (r.n(1,0,"n'")) return "PC";
		return "CS";
	}
	if (r.t=="X") return "X";
	if (r.t=="Vc") return "Vc";
	if (r.t=="I") {
		if (r.n(1,1,"E")) return "S";
		return "I";
	}
	if (r.t=="Ann") return "Ann";
	if (r.t=="SP") {
		if (r.w=="Stati" && r.n(1,1,"S")) return "S";
		if (r.n(-1,0,"") && r.n(1,0,"")) return "NO";
		if (r.w=="Linea" && r.n(1,0,"Keihin") && r.n(2,0,"-")) return "S";
		if (r.n(-2,1,"RI") && r.n(-1,1,"A")) return "S";
		if (r.w=="de" && r.n(2,0,"?")) return "S";
		if (r.n(-1,0,"PIÙ")) return "A";
		if (r.w=="Linea" && r.n(1,1,"SP") && r.n(2,1,"FS")) return "S";
		if (r.w=="Mare" && r.n(-2,0,"") && r.n(-1,0,"")) return "S";
		if (r.n(-2,1,"S") && r.n(-1,1,"RI")) return "S";
		if (r.w=="Paesi" && r.n(1,1,"S")) return "S";
		if (r.n(-1,1,"DI")) {
			if (r.n(-1,1,"DI") && r.n(1,1,"S")) return "A";
			return "S";
		}
		if (r.n(-2,1,"E") && r.n(-1,1,"RI")) {
			if (r.n(-1,1,"RI") && r.n(1,1,"SP")) return "SP";
			return "S";
		}
		if (r.n(-1,0,"uno")) return "S";
		if (r.n(-1,1,"PR") && r.n(1,1,"E")) return "V";
		if (r.n(-1,1,"PR") && r.n(1,1,"RD")) return "V";
		if (r.n(-1,0,"si")) return "V";
		return "SP";
	}
	if (r.t=="SW") {
		if (r.n(-1,1,"S") && r.n(1,1,"S")) return "E";
		return "SW";
	}
	if (r.t=="Vd2s") return "Vd2s";
	if (r.t=="DTfs") return "DTfs";
	return false;
};