/**
 * File Generated From data/pos/french.rdr at Sun Jan 24 2016 12:56:12 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(r) {
	if (r.t=="A") {
		if (r.n(1,0,"%")) return "D";
		if (r.n(-1,1,"D") && r.n(1,1,"P")) {
			if (r.w=="autre") {
				if (r.n(-2,0,"d'")) return "A";
				return "PRO";
			}
			if (r.w=="première" && r.n(-1,0,"la")) return "A";
			if (r.w=="dernier" && r.n(1,1,"P")) return "A";
			if (r.w=="seul" && r.n(-1,1,"D")) return "A";
			if (r.w=="premiers" && r.n(-1,1,"D") && r.n(1,1,"P")) return "A";
			if (r.w=="meilleur" && r.n(1,1,"P") && r.n(2,1,"N")) return "A";
			if (r.s(-3,"ule")) return "A";
			if (r.s(-4,"ères")) return "A";
			if (r.n(-1,0,"Le") && r.n(1,0,"à")) return "A";
			if (r.w=="deuxième" && r.n(-1,1,"D") && r.n(1,1,"P")) return "A";
			if (r.w=="moindre" && r.n(1,1,"P")) return "A";
			if (r.w=="centrale" && r.n(1,0,"de") && r.n(2,0,"Mme")) return "A";
			if (r.w=="seuls" && r.n(1,0,"à")) return "A";
			if (r.n(-2,0,"numéro")) return "A";
			if (r.w=="dernière" && r.n(1,0,"en")) return "A";
			if (r.n(-2,0,"été")) return "A";
			if (r.w=="premier" && r.n(1,0,"de") && r.n(2,0,"ces")) return "A";
			if (r.w=="premier" && r.n(1,0,"d'")) return "A";
			if (r.w=="second" && r.n(1,0,"à")) return "A";
			return "N";
		}
		if (r.n(-1,1,"P") && r.n(1,1,"PONCT")) {
			if (r.w=="autres" && r.n(-1,1,"P")) {
				if (r.w=="autres" && r.n(1,0,"''")) return "A";
				if (r.n(-2,0,"que")) return "A";
				return "PRO";
			}
			if (r.w=="tous" && r.n(1,1,"PONCT")) return "PRO";
			if (r.n(-1,0,"y-compris")) return "A";
			if (r.n(-1,0,"comme") && r.n(1,0,",")) return "A";
			if (r.n(-2,0,";")) return "A";
			if (r.n(-1,0,"du") && r.n(1,0,"-")) return "A";
			if (r.s(-3,"ant")) return "A";
			if (r.w=="second" && r.n(1,0,",")) return "A";
			if (r.w=="neuf" && r.n(-1,0,"du")) return "A";
			if (r.n(-1,0,"de-type")) return "A";
			if (r.n(-1,0,"De")) {
				if (r.w=="même" && r.n(1,0,",")) return "ADV";
				return "A";
			}
			if (r.n(-1,0,"des") && r.n(1,0,"-")) return "A";
			if (r.w=="fameux" && r.n(1,0,"''")) return "A";
			if (r.w=="premier" && r.n(-1,1,"P") && r.n(1,1,"PONCT")) return "A";
			if (r.w=="autre" && r.n(-1,1,"P") && r.n(1,1,"PONCT")) return "A";
			if (r.n(1,0,"!")) return "A";
			if (r.s(-3,"ste")) return "A";
			if (r.s(-2,"me")) {
				if (r.w=="même" && r.n(-2,0,"") && r.n(-1,0,"De")) return "ADV";
				return "A";
			}
			if (r.n(-1,0,"à") && r.n(1,0,".")) return "PRO";
			return "N";
		}
		if (r.n(-1,1,"P") && r.n(1,1,"P")) {
			if (r.n(-1,0,"du") && r.n(1,0,"au")) return "A";
			if (r.n(-2,0,"rien")) return "A";
			if (r.w=="autres" && r.n(-1,1,"P")) {
				if (r.w=="autres" && r.n(2,0,"lesquels")) return "A";
				if (r.w=="autres" && r.n(-2,1,"P") && r.n(-1,1,"P")) return "A";
				return "PRO";
			}
			if (r.w=="même" && r.n(1,1,"P")) return "ADV";
			if (r.n(-2,0,"")) return "A";
			if (r.s(-2,"un")) return "A";
			if (r.w=="rares" && r.n(-1,1,"P") && r.n(1,1,"P")) return "A";
			if (r.s(-3,"ant")) return "A";
			if (r.w=="7") return "D";
			if (r.w=="14" && r.n(-1,0,"de")) return "D";
			return "N";
		}
		if (r.w=="même" && r.n(-1,1,"V")) return "ADV";
		if (r.n(1,0,"milliards")) {
			if (r.n(-1,0,"des") && r.n(1,0,"milliards")) return "A";
			if (r.n(-1,1,"D") && r.n(1,1,"N")) return "A";
			return "D";
		}
		if (r.w=="même" && r.n(-1,1,"PONCT")) return "ADV";
		if (r.n(1,0,"millions")) return "D";
		if (r.n(-1,0,"(") && r.n(1,0,")")) {
			if (r.n(2,0,"de")) return "A";
			if (r.w=="1" && r.n(2,0,"ont")) return "A";
			if (r.n(2,0,"du")) return "A";
			return "N";
		}
		if (r.w=="1" && r.n(2,0,"de")) return "D";
		if (r.w=="même" && r.n(-1,1,"C")) return "ADV";
		if (r.w=="général" && r.n(-1,1,"D")) return "N";
		if (r.w=="autres" && r.n(1,1,"V")) return "PRO";
		if (r.w=="autre" && r.n(-1,0,"l'")) {
			if (r.n(1,1,"N") && r.n(2,1,"P")) return "A";
			if (r.n(1,1,"N") && r.n(2,1,"PONCT")) return "A";
			return "PRO";
		}
		if (r.n(-1,1,"D") && r.n(1,1,"PONCT")) {
			if (r.w=="autres" && r.n(-2,1,"P") && r.n(-1,1,"D")) {
				if (r.w=="autres" && r.n(-2,0,"pour")) return "A";
				return "PRO";
			}
			if (r.n(-1,0,"une") && r.n(1,0,"''")) return "A";
			if (r.n(-1,0,"Le") && r.n(1,0,",")) return "A";
			if (r.w=="dernier" && r.n(1,0,",")) return "A";
			if (r.s(-4,"utre")) {
				if (r.w=="autre" && r.n(-1,0,"un") && r.n(1,0,".")) return "PRO";
				return "A";
			}
			if (r.w=="même" && r.n(-1,1,"D")) return "A";
			if (r.w=="autres" && r.n(1,1,"PONCT") && r.n(2,1,"")) {
				if (r.w=="autres" && r.n(-2,0,"pour")) return "A";
				return "PRO";
			}
			if (r.w=="seul" && r.n(-1,1,"D") && r.n(1,1,"PONCT")) return "A";
			if (r.w=="seconde" && r.n(-1,0,"la")) return "A";
			if (r.s(-3,"ème")) return "A";
			if (r.w=="première" && r.n(-1,0,"la")) return "A";
			if (r.w=="dernière") return "A";
			if (r.s(-3,"its")) return "A";
			if (r.w=="ancien" && r.n(-1,1,"D") && r.n(1,1,"PONCT")) return "A";
			if (r.w=="française" && r.n(-1,0,"la")) return "A";
			if (r.w=="meilleures" && r.n(-1,1,"D") && r.n(1,1,"PONCT")) return "A";
			if (r.s(-4,"mier")) return "A";
			if (r.w=="nouveau" && r.n(1,1,"PONCT")) return "A";
			if (r.w=="fameux" && r.n(1,1,"PONCT")) return "A";
			if (r.s(-4,"ntes")) return "A";
			if (r.w=="dernières" && r.n(-1,1,"D")) return "A";
			if (r.n(-2,0,"des")) return "A";
			if (r.w=="autres" && r.n(1,1,"PONCT") && r.n(2,1,"C")) return "PRO";
			if (r.w=="véritable" && r.n(-1,1,"D")) return "A";
			if (r.w=="14" && r.n(1,1,"PONCT")) return "A";
			if (r.w=="militaire" && r.n(-2,0,"pour")) return "A";
			if (r.w=="première" && r.n(-2,1,"") && r.n(-1,1,"D")) return "A";
			if (r.w=="neuf" && r.n(-2,0,"dans") && r.n(-1,0,"le")) return "A";
			if (r.w=="22" && r.n(1,0,",")) return "A";
			if (r.n(-2,1,"PRO")) return "A";
			if (r.w=="américaine") return "A";
			if (r.n(-1,0,"une") && r.n(1,0,"-")) return "A";
			if (r.w=="dernier" && r.n(1,0,".")) return "A";
			if (r.w=="notionnel" && r.n(-1,0,"le")) return "A";
			if (r.w=="grand" && r.n(-1,1,"D") && r.n(1,1,"PONCT")) return "A";
			if (r.w=="premiers" && r.n(1,0,",")) return "A";
			if (r.n(-1,0,"son") && r.n(1,0,"''")) return "A";
			if (r.s(-4,"dial")) return "A";
			if (r.n(-1,0,"le") && r.n(1,0,"-")) return "A";
			if (r.w=="derniers" && r.n(-2,0,",")) return "A";
			if (r.w=="précédent" && r.n(-2,1,"P") && r.n(-1,1,"D")) return "A";
			if (r.n(-1,0,"ces") && r.n(1,0,"''")) return "A";
			if (r.w=="inverse" && r.n(-2,0,"A") && r.n(-1,0,"l'")) return "A";
			return "N";
		}
		if (r.n(1,0,"heures")) return "D";
		if (r.w=="toutes" && r.n(1,1,"N")) return "D";
		if (r.n(-1,1,"P") && r.n(1,1,"C")) {
			if (r.w=="moyen" && r.n(1,1,"C")) return "A";
			if (r.n(-2,1,"ADV") && r.n(-1,1,"P")) return "A";
			if (r.n(1,0,"que")) return "A";
			if (r.w=="autres" && r.n(-1,1,"P")) return "PRO";
			if (r.w=="telle" && r.n(-1,1,"P")) return "D";
			if (r.s(-2,"me")) return "A";
			if (r.w=="bons" && r.n(-1,0,"de")) return "A";
			if (r.n(2,0,"tel")) return "A";
			if (r.w=="petites" && r.n(1,0,"et")) return "A";
			return "N";
		}
		if (r.w=="public" && r.n(-1,1,"D")) return "N";
		if (r.w=="politiques" && r.n(-1,1,"P")) return "N";
		if (r.n(-1,0,"") && r.n(1,0,".")) return "N";
		if (r.n(-1,1,"P") && r.n(1,1,"ADV")) {
			if (r.s(-4,"tits")) return "A";
			if (r.w=="autres" && r.n(-1,1,"P")) return "PRO";
			return "N";
		}
		if (r.n(-1,1,"P") && r.n(1,1,"V")) {
			if (r.n(-2,1,"A")) return "A";
			if (r.n(2,0,",")) return "A";
			if (r.n(-2,1,"ADV")) return "A";
			return "N";
		}
		if (r.w=="technique" && r.n(-1,1,"D")) return "N";
		if (r.w=="fort" && r.n(-1,1,"V")) {
			if (r.n(-2,0,"se")) return "A";
			if (r.n(-1,1,"V") && r.n(1,1,"PONCT")) return "A";
			return "ADV";
		}
		if (r.n(-1,0,"s'")) return "V";
		if (r.w=="tous" && r.n(1,1,"N")) {
			if (r.n(1,0,"ordres")) return "A";
			return "D";
		}
		if (r.w=="commune" && r.n(-1,1,"D")) return "N";
		if (r.w=="neuf" && r.n(1,1,"N")) return "D";
		if (r.w=="tous" && r.n(1,1,"V")) return "PRO";
		if (r.w=="hebdomadaire" && r.n(-1,0,"l'")) return "N";
		if (r.w=="français" && r.n(-1,1,"D")) return "N";
		if (r.w=="américain" && r.n(-1,1,"D") && r.n(1,1,"N")) return "N";
		if (r.w=="même" && r.n(-1,1,"ADV")) {
			if (r.n(-2,1,"V") && r.n(-1,1,"ADV")) return "A";
			return "ADV";
		}
		if (r.n(-1,0,"l'") && r.n(1,0,"et")) {
			if (r.s(-2,"le")) return "A";
			return "N";
		}
		if (r.w=="allemand" && r.n(-1,1,"D") && r.n(1,1,"N")) {
			if (r.n(-2,1,"V") && r.n(-1,1,"D")) return "A";
			return "N";
		}
		if (r.w=="militaires" && r.n(-1,1,"D")) return "N";
		if (r.w=="fort" && r.n(1,1,"A")) return "ADV";
		if (r.w=="centrale" && r.n(-1,1,"D")) return "N";
		if (r.w=="aéronautique" && r.n(-1,1,"D")) return "N";
		if (r.w=="moyen" && r.n(-2,1,"D") && r.n(-1,1,"A")) return "N";
		if (r.w=="japonais" && r.n(-1,1,"D")) return "N";
		if (r.w=="élevé" && r.n(-2,0,"s'") && r.n(-1,0,"est")) return "V";
		if (r.w=="1" && r.n(1,0,"milliard")) return "D";
		if (r.w=="1" && r.n(1,0,"dollar")) return "D";
		if (r.w=="quels" && r.n(1,1,"N")) return "D";
		if (r.w=="2" && r.n(1,0,"points")) return "D";
		if (r.w=="tous" && r.n(1,1,"P")) return "PRO";
		if (r.n(-1,0,"des") && r.n(1,0,"qui")) return "N";
		if (r.n(-1,0,"les") && r.n(1,0,"ne")) return "N";
		if (r.w=="industriel" && r.n(-1,1,"D")) return "N";
		if (r.w=="mensuel" && r.n(-1,1,"D")) return "N";
		if (r.w=="moyen" && r.n(-1,1,"D")) return "N";
		if (r.w=="financier" && r.n(-1,1,"D")) return "N";
		if (r.w=="techniques" && r.n(-1,1,"D")) return "N";
		if (r.w=="général" && r.n(-2,1,"N") && r.n(-1,1,"P")) return "N";
		if (r.w=="canadien" && r.n(-1,1,"D")) return "N";
		if (r.w=="public" && r.n(-1,1,"P")) return "N";
		if (r.w=="qualifiée" && r.n(1,1,"P")) return "V";
		if (r.n(-2,1,"C") && r.n(-1,1,"CL")) return "V";
		if (r.n(-1,0,"qui")) {
			if (r.w=="seuls" && r.n(-1,1,"PRO") && r.n(1,1,"V")) return "A";
			return "V";
		}
		if (r.n(-1,0,"ne")) return "V";
		if (r.n(1,0,"dollars")) return "D";
		if (r.n(1,0,"francs")) {
			if (r.n(1,1,"N") && r.n(2,1,"C")) return "A";
			return "D";
		}
		if (r.n(-1,0,"ont")) {
			if (r.n(1,0,"deux")) return "A";
			return "PRO";
		}
		if (r.w=="Tous" && r.n(1,1,"V")) return "PRO";
		if (r.w=="autres" && r.n(1,1,"CL") && r.n(2,1,"V")) return "PRO";
		if (r.w=="nucléaire" && r.n(-1,1,"D")) return "N";
		if (r.w=="britannique" && r.n(-1,1,"D")) return "N";
		if (r.w=="prêt" && r.n(-1,1,"D")) return "N";
		if (r.w=="routiers" && r.n(-1,1,"D")) return "N";
		if (r.n(-1,1,"D") && r.n(1,1,"CL")) {
			if (r.w=="dernière" && r.n(-1,0,"Cette")) return "A";
			if (r.s(-4,"iers")) return "A";
			return "N";
		}
		if (r.n(-1,0,"ancien")) return "N";
		if (r.w=="anglais" && r.n(-1,0,"l'")) return "N";
		if (r.n(-1,0,"les") && r.n(1,0,"que")) return "N";
		if (r.w=="étrangers" && r.n(-1,1,"D")) return "N";
		if (r.w=="ouverte" && r.n(1,1,"P")) {
			if (r.w=="ouverte" && r.n(-2,1,"A") && r.n(-1,1,"N")) return "A";
			return "V";
		}
		if (r.w=="élevée" && r.n(-1,0,"est")) return "V";
		if (r.w=="court" && r.n(-1,1,"CL")) return "V";
		if (r.w=="ouverts" && r.n(-1,1,"V")) return "V";
		if (r.w=="toutes" && r.n(1,1,"A")) return "ADV";
		if (r.w=="même" && r.n(1,1,"D") && r.n(2,1,"N")) return "ADV";
		if (r.w=="29" && r.n(-1,1,"PONCT")) return "D";
		if (r.n(-1,0,",") && r.n(1,0,")")) return "D";
		if (r.n(1,0,"ans")) {
			if (r.n(2,1,"P")) return "A";
			return "D";
		}
		if (r.w=="23" && r.n(-1,1,"PONCT")) return "D";
		if (r.w=="1" && r.n(-1,0,"de")) return "D";
		if (r.w=="tels" && r.n(-2,1,"N") && r.n(-1,1,"P")) return "D";
		if (r.w=="quel" && r.n(1,1,"N") && r.n(2,1,"P")) return "D";
		if (r.n(-1,0,"à") && r.n(1,0,"mois")) return "D";
		if (r.w=="autres" && r.n(1,1,"ADV")) return "PRO";
		if (r.w=="tous" && r.n(1,1,"PONCT")) return "PRO";
		if (r.w=="locaux" && r.n(-1,1,"D")) return "N";
		if (r.n(-1,0,"mauvaises")) return "N";
		if (r.w=="japonais" && r.n(-1,1,"P") && r.n(1,1,"N")) return "N";
		if (r.w=="communistes" && r.n(-1,1,"P") && r.n(1,1,"A")) return "N";
		if (r.w=="politiques" && r.n(-1,1,"D")) return "N";
		if (r.w=="américains" && r.n(-1,0,"les")) return "N";
		if (r.n(-1,0,"les") && r.n(1,0,"ont")) return "N";
		if (r.n(-1,0,"Michel")) return "N";
		if (r.w=="espagnol" && r.n(-1,1,"D") && r.n(1,1,"N")) return "N";
		if (r.n(-1,0,"grand")) return "N";
		if (r.w=="courants" && r.n(-1,1,"A")) return "N";
		if (r.n(-1,0,"grande")) return "N";
		if (r.w=="anciens" && r.n(1,0,"dirigeants") && r.n(2,0,"de")) return "N";
		if (r.n(-1,0,"non-")) return "N";
		if (r.n(-1,0,"la") && r.n(1,0,"ne")) return "N";
		if (r.n(-1,0,"M.")) return "N";
		if (r.w=="allemand" && r.n(-2,1,"A") && r.n(-1,1,"PONCT")) return "N";
		if (r.n(-1,1,"P") && r.n(1,1,"CL")) return "N";
		if (r.n(-2,1,"PRO") && r.n(-1,1,"CL")) return "V";
		if (r.w=="spécialisés" && r.n(1,1,"P")) return "V";
		if (r.w=="privée" && r.n(1,1,"P") && r.n(2,1,"D")) return "V";
		if (r.w=="élevés" && r.n(-2,0,"se")) return "V";
		if (r.w=="élevés" && r.n(-1,1,"ADV") && r.n(1,1,"C")) return "V";
		if (r.w=="court" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "V";
		if (r.n(-1,0,"davantage")) return "V";
		if (r.w=="soutenue" && r.n(1,0,"par")) return "V";
		if (r.w=="forcée" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "V";
		return "A";
	}
	if (r.t=="ADV") {
		if (r.w=="tout" && r.n(1,1,"D")) {
			if (r.n(2,0,"que")) return "PRO";
			if (r.w=="tout" && r.n(-1,0,"de") && r.n(1,0,"ce")) return "PRO";
			if (r.n(-1,0,"et") && r.n(1,0,"ce")) return "PRO";
			return "A";
		}
		if (r.n(-1,1,"D") && r.n(1,1,"P")) {
			if (r.w=="plus") return "ADV";
			if (r.w=="peu" && r.n(-1,0,"un")) return "ADV";
			if (r.w=="doublement" && r.n(1,1,"P") && r.n(2,1,"D")) return "ADV";
			return "N";
		}
		if (r.w=="tout" && r.n(1,1,"V")) {
			if (r.n(-1,0,"a")) return "ADV";
			if (r.n(1,0,"risque")) return "D";
			if (r.w=="tout" && r.n(-2,1,"") && r.n(-1,1,"D")) return "N";
			return "PRO";
		}
		if (r.w=="tout" && r.n(1,1,"N")) {
			if (r.w=="tout" && r.n(-2,0,"le")) return "ADV";
			if (r.w=="tout" && r.n(1,0,"intérêt")) return "ADV";
			if (r.w=="tout" && r.n(-2,1,"V") && r.n(-1,1,"ADV")) return "ADV";
			if (r.n(-1,1,"N")) return "ADV";
			if (r.n(-2,0,"1990")) return "PRO";
			return "D";
		}
		if (r.w=="quelque" && r.n(1,1,"N")) return "D";
		if (r.n(-1,0,"du")) {
			if (r.w=="plus") return "ADV";
			return "N";
		}
		if (r.n(-1,1,"D") && r.n(1,1,"PONCT")) {
			if (r.s(-3,"ins")) return "ADV";
			if (r.w=="actuellement" && r.n(-1,1,"D")) return "ADV";
			if (r.w=="plus") return "ADV";
			if (r.s(-3,"hui")) return "ADV";
			if (r.n(2,0,"''")) return "A";
			return "N";
		}
		if (r.w=="tout" && r.n(1,1,"PONCT")) return "PRO";
		if (r.w=="tout" && r.n(1,1,"CL") && r.n(2,1,"V")) return "PRO";
		if (r.w=="tout" && r.n(1,1,"PRO")) return "A";
		if (r.w=="juste" && r.n(1,1,"N")) return "A";
		if (r.w=="oui" && r.n(-1,0,"''")) {
			if (r.n(1,1,"PONCT") && r.n(2,1,"V")) return "I";
			return "N";
		}
		if (r.w=="non" && r.n(-1,0,"''") && r.n(1,0,"''")) return "N";
		if (r.n(-1,1,"D") && r.n(1,1,"C")) {
			if (r.n(2,0,"en")) return "ADV";
			return "N";
		}
		if (r.w=="mal" && r.n(-1,1,"P")) return "N";
		if (r.w=="mal" && r.n(-1,1,"D")) return "N";
		if (r.w=="Même" && r.n(1,1,"N") && r.n(2,1,"P")) return "A";
		if (r.w=="à-court-terme" && r.n(-1,0,"taux")) return "A";
		if (r.w=="beaucoup" && r.n(-1,1,"C") && r.n(1,1,"V")) return "PRO";
		if (r.w=="pas" && r.n(-2,1,"D") && r.n(-1,1,"A")) return "N";
		if (r.w=="maintenant" && r.n(-1,0,"en")) return "V";
		if (r.n(-1,0,"se")) return "V";
		if (r.w=="donc" && r.n(-1,0,",") && r.n(1,0,"de")) return "C";
		if (r.w=="Non" && r.n(1,0,".")) return "I";
		if (r.w=="beaucoup" && r.n(-1,1,"PRO") && r.n(1,1,"V")) return "PRO";
		if (r.n(-1,0,"petits")) return "N";
		if (r.n(-1,0,"de") && r.n(1,0,"et")) return "N";
		if (r.n(1,0,"desquelles")) return "P";
		if (r.n(-1,0,"n'")) return "V";
		return "ADV";
	}
	if (r.t=="C") {
		if (r.n(-1,0,"ce")) {
			if (r.w=="soit" && r.n(-1,1,"D")) return "V";
			if (r.n(-1,0,"ce") && r.n(1,0,"''")) return "C";
			if (r.w=="que" && r.n(1,0,"ce")) return "C";
			return "PRO";
		}
		if (r.w=="qu'" && r.n(-1,1,"N") && r.n(1,1,"CL")) {
			if (r.w=="qu'" && r.n(1,0,"il") && r.n(2,0,"ne")) return "C";
			if (r.n(-2,0,"ce")) return "C";
			if (r.n(-1,0,"janvier")) return "C";
			if (r.n(-2,1,"ADV")) return "C";
			if (r.n(1,1,"CL") && r.n(2,1,"PONCT")) return "C";
			if (r.w=="qu'" && r.n(-1,0,"juin")) return "C";
			if (r.n(-1,0,"audience")) return "C";
			if (r.w=="qu'" && r.n(-1,0,"questions")) return "C";
			if (r.w=="qu'" && r.n(2,0,"allait")) return "C";
			if (r.w=="qu'" && r.n(-2,0,"son")) return "C";
			if (r.n(-1,0,"demande")) return "C";
			return "PRO";
		}
		if (r.n(-2,0,"ne")) {
			if (r.w=="ni" && r.n(-2,0,"ne")) return "C";
			return "ADV";
		}
		if (r.w=="que" && r.n(1,1,"V")) {
			if (r.n(1,0,"prévu")) return "C";
			if (r.n(-2,1,"V") && r.n(-1,1,"V")) return "ADV";
			if (r.n(-2,1,"V") && r.n(-1,1,"ADV")) return "C";
			if (r.w=="que" && r.n(-2,1,"CL") && r.n(-1,1,"V")) return "C";
			if (r.w=="que" && r.n(-2,1,"PONCT") && r.n(-1,1,"ADV")) return "C";
			return "PRO";
		}
		if (r.w=="soit" && r.n(1,1,"V")) return "V";
		if (r.w=="que" && r.n(-1,1,"N") && r.n(1,1,"CL")) {
			if (r.w=="que" && r.n(1,0,"c'") && r.n(2,0,"est")) return "C";
			if (r.n(-2,0,"cette")) return "C";
			return "PRO";
		}
		if (r.w=="qu'" && r.n(1,1,"V")) {
			if (r.w=="qu'" && r.n(-1,1,"V")) {
				if (r.w=="qu'" && r.n(-2,1,"A") && r.n(-1,1,"V")) return "C";
				return "ADV";
			}
			if (r.w=="qu'" && r.n(2,0,".")) return "C";
			return "PRO";
		}
		if (r.n(-2,0,"n'")) {
			if (r.w=="ni" && r.n(-1,1,"V") && r.n(1,1,"N")) return "C";
			if (r.w=="ni" && r.n(1,0,"les")) return "C";
			if (r.w=="ni" && r.n(1,1,"P")) return "C";
			if (r.w=="que" && r.n(-1,0,"empêche")) return "C";
			return "ADV";
		}
		if (r.n(-1,1,"PRO") && r.n(1,1,"CL")) {
			if (r.n(1,1,"CL") && r.n(2,1,"ADV")) return "C";
			return "PRO";
		}
		if (r.n(-1,0,"ne")) return "V";
		if (r.w=="soit" && r.n(-1,1,"N")) return "V";
		if (r.w=="si" && r.n(1,1,"A")) {
			if (r.w=="si" && r.n(1,0,"tous")) return "C";
			if (r.w=="si" && r.n(1,0,"possible")) return "C";
			return "ADV";
		}
		if (r.w=="soit" && r.n(-1,0,"que")) return "V";
		if (r.w=="que" && r.n(-1,1,"PONCT") && r.n(1,1,"CL")) {
			if (r.n(-2,1,"V") && r.n(-1,1,"PONCT")) return "C";
			return "PRO";
		}
		if (r.n(-1,0,"a")) return "ADV";
		if (r.n(-1,1,"D") && r.n(1,1,"CL")) return "PRO";
		if (r.w=="soit" && r.n(-1,1,"A")) return "V";
		if (r.w=="soit" && r.n(-1,1,"CL")) return "V";
		if (r.w=="que" && r.n(-2,0,"Une")) return "PRO";
		if (r.w=="sinon" && r.n(1,0,",")) return "ADV";
		if (r.n(-1,0,"pas") && r.n(1,0,"des")) return "ADV";
		if (r.w=="quand" && r.n(-1,1,"P")) return "ADV";
		if (r.n(-1,0,"être")) return "ADV";
		if (r.n(-1,0,"plus") && r.n(1,0,"une")) return "ADV";
		if (r.w=="que" && r.n(1,0,"par")) {
			if (r.n(-1,1,"ADV")) return "C";
			if (r.n(-2,1,"N")) return "C";
			return "ADV";
		}
		if (r.w=="que" && r.n(2,0,"%")) {
			if (r.w=="que" && r.n(1,0,"80")) return "C";
			if (r.w=="que" && r.n(1,0,"70") && r.n(2,0,"%")) return "C";
			return "ADV";
		}
		if (r.w=="S'" && r.n(-1,1,"") && r.n(1,1,"V")) return "CL";
		if (r.w=="que" && r.n(-2,0,"une")) return "PRO";
		if (r.w=="Qu'" && r.n(1,1,"V")) return "PRO";
		if (r.w=="que" && r.n(1,0,"quelques")) return "ADV";
		if (r.w=="qu'" && r.n(1,0,"à") && r.n(2,0,"la")) return "ADV";
		if (r.w=="que" && r.n(-1,1,"N") && r.n(1,1,"C")) return "ADV";
		if (r.w=="que" && r.n(-1,0,"plus") && r.n(1,0,"de")) return "ADV";
		if (r.n(-1,0,"eu")) return "ADV";
		if (r.w=="que" && r.n(-1,0,"été")) return "ADV";
		if (r.n(-1,0,"") && r.n(1,0,"y")) return "CL";
		if (r.n(-1,1,"D") && r.n(1,1,"C")) return "PRO";
		if (r.w=="que" && r.n(-2,0,"un")) {
			if (r.n(-1,1,"N") && r.n(1,1,"P")) return "C";
			return "PRO";
		}
		if (r.w=="que" && r.n(-2,0,"La")) return "PRO";
		if (r.w=="que" && r.n(-2,0,"des")) {
			if (r.w=="que" && r.n(1,0,"de")) return "C";
			return "PRO";
		}
		if (r.w=="soit" && r.n(-1,1,"P")) return "V";
		if (r.w=="si" && r.n(-1,1,"ADV") && r.n(1,1,"ADV")) return "ADV";
		if (r.w=="que" && r.n(2,0,"mois")) return "ADV";
		if (r.w=="voire" && r.n(1,1,"P") && r.n(2,1,"V")) return "ADV";
		if (r.w=="qu'" && r.n(-2,0,"être")) return "ADV";
		if (r.w=="ni" && r.n(1,0,"même")) return "ADV";
		if (r.w=="qu'" && r.n(-2,0,"été")) return "ADV";
		if (r.w=="que" && r.n(-2,0,"Un")) return "PRO";
		if (r.w=="que" && r.n(1,1,"N") && r.n(2,1,"D")) return "PRO";
		if (r.w=="qu'" && r.n(-2,0,"les")) return "PRO";
		if (r.w=="qu'" && r.n(-2,1,"N") && r.n(-1,1,"A")) {
			if (r.w=="qu'" && r.n(-1,0,"telle")) return "C";
			if (r.n(2,0,"ne")) return "C";
			return "PRO";
		}
		if (r.n(-1,0,"qui")) return "V";
		return "C";
	}
	if (r.t=="D") {
		if (r.n(-1,1,"D")) {
			if (r.n(-1,0,"toute")) return "D";
			if (r.n(-1,0,"L'")) return "PRO";
			if (r.w=="une" && r.n(1,1,"P") && r.n(2,1,"D")) return "PRO";
			if (r.w=="l'" && r.n(-1,1,"D")) return "D";
			if (r.n(1,1,"P") && r.n(2,1,"ADV")) return "PRO";
			if (r.w=="une" && r.n(1,1,"P") && r.n(2,1,"N")) return "PRO";
			if (r.w=="un" && r.n(2,0,"l'")) return "PRO";
			if (r.w=="le" && r.n(-1,1,"D")) {
				if (r.n(-1,1,"D") && r.n(1,1,"V")) return "CL";
				return "D";
			}
			if (r.w=="la" && r.n(1,1,"N")) return "D";
			if (r.n(-1,0,"la") && r.n(1,0,",")) return "N";
			if (r.w=="un" && r.n(-2,1,"ADV") && r.n(-1,1,"D")) return "PRO";
			if (r.w=="une" && r.n(-2,1,"V") && r.n(-1,1,"D")) {
				if (r.n(-1,0,"toute")) return "D";
				return "PRO";
			}
			if (r.w=="un" && r.n(-2,0,"comme")) return "PRO";
			if (r.w=="une" && r.n(-2,1,"P") && r.n(-1,1,"D")) {
				if (r.n(-1,0,"toute")) return "D";
				return "PRO";
			}
			if (r.w=="les" && r.n(-1,1,"D")) return "D";
			if (r.w=="un" && r.n(1,1,"V")) return "PRO";
			if (r.n(2,0,"meilleurs")) return "PRO";
			if (r.w=="un" && r.n(2,0,"premiers")) return "PRO";
			if (r.n(-2,0,"été")) return "PRO";
			if (r.s(-2,"rs")) return "PRO";
			if (r.s(-2,"ur")) {
				if (r.n(-1,1,"D") && r.n(1,1,"N")) return "D";
				return "CL";
			}
			if (r.w=="une" && r.n(-2,0,"-")) {
				if (r.w=="une" && r.n(1,0,"des")) return "PRO";
				return "D";
			}
			if (r.w=="30" && r.n(1,0,"%")) return "D";
			if (r.w=="cinq" && r.n(1,1,"N") && r.n(2,1,"A")) return "D";
			if (r.w=="un" && r.n(-1,1,"D") && r.n(1,1,"N")) {
				if (r.n(-1,0,"l'")) return "PRO";
				return "D";
			}
			if (r.n(-1,0,"la") && r.n(1,0,".")) return "N";
			if (r.n(-1,0,"un")) return "N";
			if (r.n(2,0,"leurs")) return "PRO";
			if (r.n(-1,0,"l'") && r.n(1,0,",")) return "PRO";
			if (r.n(-1,1,"D") && r.n(1,1,"PRO")) return "PRO";
			if (r.w=="une" && r.n(-2,1,"ADV") && r.n(-1,1,"D")) {
				if (r.n(-1,0,"toute")) return "D";
				return "PRO";
			}
			if (r.w=="un" && r.n(-2,0,"sera") && r.n(-1,0,"l'")) return "PRO";
			if (r.w=="un" && r.n(2,0,"trois")) return "PRO";
			if (r.w=="un" && r.n(1,0,"des") && r.n(2,0,"participants")) return "PRO";
			if (r.w=="100" && r.n(1,0,"millions")) return "D";
			if (r.w=="35" && r.n(-1,0,"les")) return "D";
			if (r.w=="5" && r.n(-1,0,"les") && r.n(1,0,"%")) return "D";
			if (r.w=="mille" && r.n(1,1,"N")) return "D";
			if (r.w=="20" && r.n(-1,0,"les") && r.n(1,0,"%")) return "D";
			if (r.w=="trois" && r.n(1,0,"mois")) return "D";
			if (r.w=="deux" && r.n(-2,0,"(") && r.n(-1,0,"les")) return "D";
			if (r.n(1,1,"PONCT") && r.n(2,1,"PONCT")) return "N";
			if (r.n(1,1,"PONCT") && r.n(2,1,"C")) return "N";
			if (r.n(-1,0,"la") && r.n(1,0,"et")) return "N";
			if (r.n(1,1,"PONCT") && r.n(2,1,"PRO")) return "N";
			return "A";
		}
		if (r.n(1,1,"V")) {
			if (r.w=="un" && r.n(1,1,"V")) return "D";
			if (r.n(1,0,"été")) return "D";
			if (r.w=="une") return "D";
			if (r.n(1,0,"reste")) return "D";
			if (r.n(1,0,"risque")) return "D";
			if (r.n(-1,0,"de") && r.n(1,0,"est")) return "D";
			if (r.s(-3,"ins")) return "PRO";
			if (r.n(-1,0,"sur")) {
				if (r.s(-3,"inq")) return "PRO";
				if (r.n(1,1,"V") && r.n(2,1,"D")) return "PRO";
				return "D";
			}
			if (r.n(-1,0,"dans")) return "D";
			if (r.n(-1,0,"à") && r.n(1,0,"est")) return "D";
			if (r.w=="le" && r.n(1,0,"fait") && r.n(2,0,"que")) return "D";
			if (r.w=="son" && r.n(1,1,"V")) return "D";
			if (r.w=="les" && r.n(1,0,"sommes")) return "D";
			if (r.n(1,0,"prise")) return "D";
			if (r.w=="Le" && r.n(1,0,"fait")) return "D";
			if (r.w=="les" && r.n(-2,1,"P") && r.n(-1,1,"V")) return "D";
			if (r.s(-3,"urs")) return "D";
			if (r.s(-2,"00")) return "PRO";
			if (r.n(-1,0,"est")) return "D";
			if (r.w=="ses" && r.n(1,1,"V")) return "D";
			if (r.w=="la" && r.n(1,0,"porte")) return "D";
			if (r.s(-2,"es")) {
				if (r.s(-3,"ues")) return "D";
				return "PRO";
			}
			if (r.w=="le" && r.n(-1,0,"que")) return "D";
			if (r.w=="la" && r.n(2,0,"des")) return "D";
			if (r.w=="ces") return "D";
			if (r.w=="la" && r.n(1,1,"V") && r.n(2,1,"N")) return "D";
			if (r.n(-1,0,"vers")) return "D";
			if (r.n(1,0,"passé")) return "D";
			if (r.s(-2,"te")) return "D";
			if (r.s(-2,"le")) return "A";
			if (r.n(1,0,"représentant")) return "D";
			if (r.w=="Une" && r.n(-1,1,"") && r.n(1,1,"V")) return "D";
			if (r.n(1,0,"permis")) return "D";
			if (r.w=="les" && r.n(1,0,"intéressés")) return "D";
			if (r.w=="le" && r.n(-2,1,"P") && r.n(-1,1,"V")) return "D";
			if (r.n(1,0,"venue")) return "D";
			if (r.w=="le" && r.n(1,0,"fait") && r.n(2,0,"qu'")) return "D";
			if (r.w=="90" && r.n(-1,0,"années")) return "A";
			if (r.n(-1,0,"des")) return "A";
			if (r.s(-3,"eux")) return "PRO";
			if (r.n(-1,0,"entre")) return "D";
			if (r.n(1,0,"devoir")) return "D";
			if (r.w=="la" && r.n(1,0,"limite")) return "D";
			if (r.w=="la" && r.n(2,0,"qu'")) return "D";
			if (r.w=="l'" && r.n(2,0,"des")) return "D";
			if (r.n(1,0,"relève")) return "D";
			if (r.w=="le" && r.n(1,0,"fait") && r.n(2,0,"de")) return "D";
			if (r.w=="sa" && r.n(1,1,"V")) return "D";
			if (r.w=="Un" && r.n(1,1,"V")) return "D";
			if (r.n(1,0,"retenue")) return "D";
			if (r.w=="l'" && r.n(1,0,"est") && r.n(2,0,",")) return "D";
			if (r.w=="la" && r.n(2,0,"(")) return "D";
			if (r.w=="Le" && r.n(1,1,"V") && r.n(2,1,"P")) return "D";
			if (r.n(1,0,"arrêté")) return "D";
			if (r.w=="80" && r.n(-1,1,"N")) return "N";
			if (r.w=="60") return "A";
			if (r.s(-4,"rois")) return "PRO";
			if (r.s(-3,"inq")) return "PRO";
			if (r.n(-1,0,"selon")) return "D";
			if (r.w=="Les" && r.n(1,1,"V") && r.n(2,1,"ADV")) return "D";
			if (r.n(1,0,"blessés")) return "D";
			if (r.w=="cet" && r.n(1,1,"V")) return "D";
			if (r.n(1,0,"adresse")) return "D";
			if (r.n(1,0,"tués")) return "D";
			if (r.n(1,0,"intéressé")) return "D";
			if (r.n(-2,1,"C") && r.n(-1,1,"PONCT")) return "D";
			if (r.n(1,0,"saisie")) return "D";
			if (r.n(1,0,"prises")) return "D";
			if (r.n(1,0,"ira")) return "D";
			if (r.w=="les" && r.n(-1,0,"que")) return "D";
			if (r.w=="leur" && r.n(1,0,"découvert")) return "D";
			if (r.w=="la" && r.n(-2,0,"est")) return "D";
			if (r.n(-1,0,"parmi")) return "D";
			if (r.w=="La" && r.n(1,1,"V") && r.n(2,1,"P")) return "D";
			if (r.w=="mon") return "D";
			if (r.w=="le" && r.n(-1,0,"par")) return "D";
			if (r.w=="le" && r.n(1,0,"devenir") && r.n(2,0,"de")) return "D";
			if (r.n(-1,0,"chez")) return "D";
			if (r.n(-1,0,"à") && r.n(1,0,"porte")) return "D";
			if (r.w=="le" && r.n(-2,0,"avait")) return "D";
			if (r.w=="le" && r.n(1,0,"fait") && r.n(2,0,"des")) return "D";
			if (r.n(-1,0,"contre")) return "D";
			if (r.n(-2,0,"janvier")) return "D";
			if (r.w=="la" && r.n(-1,0,"par")) return "D";
			if (r.w=="L'" && r.n(1,1,"V") && r.n(2,1,"P")) return "D";
			if (r.w=="50" && r.n(-1,0,"années")) return "N";
			if (r.n(-1,0,"autoroute")) return "N";
			return "CL";
		}
		if (r.n(1,0,"qui")) return "PRO";
		if (r.w=="ce" && r.n(1,1,"C")) {
			if (r.n(1,0,"soit")) return "CL";
			return "PRO";
		}
		if (r.n(-1,0,"des")) {
			if (r.n(1,0,"agents")) return "D";
			if (r.n(1,1,"PONCT") && r.n(2,1,"D")) return "D";
			if (r.n(-2,0,"patrons")) return "D";
			return "A";
		}
		if (r.n(-1,0,"du")) {
			if (r.w=="nombre-de" && r.n(-2,1,"N") && r.n(-1,1,"P")) return "D";
			return "A";
		}
		if (r.n(1,0,"janvier")) return "A";
		if (r.n(1,0,",")) {
			if (r.s(-3,"ins")) return "PRO";
			if (r.s(-4,"-000")) {
				if (r.n(2,1,"D")) return "PRO";
				return "D";
			}
			if (r.n(-1,0,"sur")) return "PRO";
			if (r.w=="un") {
				if (r.w=="un" && r.n(-1,1,"N") && r.n(1,1,"PONCT")) return "A";
				return "PRO";
			}
			if (r.w=="une") return "PRO";
			if (r.w=="ce" && r.n(-1,1,"C")) return "PRO";
			if (r.n(-1,0,"n°") && r.n(1,0,",")) return "A";
			if (r.w=="60" && r.n(1,1,"PONCT") && r.n(2,1,"P")) return "A";
			if (r.w=="six" && r.n(-1,1,"C")) return "PRO";
			if (r.s(-2,"es")) return "PRO";
			if (r.n(2,0,"soit")) return "D";
			if (r.w=="14-,-15" && r.n(1,1,"PONCT") && r.n(2,1,"A")) return "D";
			if (r.w=="16.17") return "D";
			if (r.s(-2,"20")) return "D";
			if (r.n(-2,0,"''")) return "D";
			return "N";
		}
		if (r.w=="toute" && r.n(1,1,"D")) return "A";
		if (r.n(1,0,"juin")) return "A";
		if (r.n(1,0,"n'")) {
			if (r.s(-2,"ne")) return "PRO";
			return "CL";
		}
		if (r.n(1,0,"juillet")) return "A";
		if (r.n(1,1,"PONCT") && r.n(2,1,"")) {
			if (r.s(-2,"00")) return "PRO";
			if (r.n(-2,1,"PONCT") && r.n(-1,1,"N")) return "A";
			if (r.n(-1,0,"sur")) return "PRO";
			if (r.n(-2,1,"D") && r.n(-1,1,"P")) {
				if (r.s(-3,"000")) return "PRO";
				if (r.s(-4,"")) return "PRO";
				return "A";
			}
			if (r.n(-1,1,"V") && r.n(1,1,"PONCT")) return "PRO";
			if (r.n(-2,1,"ADV")) return "PRO";
			if (r.w=="trois" && r.n(-1,0,"à")) return "PRO";
			if (r.n(-1,0,"annÃ©es")) return "A";
			if (r.n(-2,1,"V") && r.n(-1,1,"ADV")) return "PRO";
			if (r.n(-1,0,"que") && r.n(1,0,".")) return "PRO";
			if (r.n(-2,0,"deux")) return "D";
			return "N";
		}
		if (r.n(1,1,"P") && r.n(2,1,"N")) {
			if (r.n(-1,1,"N") && r.n(1,1,"P")) {
				if (r.n(-2,0,"des")) return "N";
				return "A";
			}
			if (r.w=="le" && r.n(1,1,"P")) return "D";
			if (r.w=="une" && r.n(-1,0,"est")) return "D";
			if (r.n(1,0,"sur")) return "N";
			if (r.w=="ce" && r.n(-2,0,"fût")) return "CL";
			if (r.n(2,0,"responsables")) return "D";
			if (r.n(-2,0,"réduction")) return "D";
			if (r.w=="Une") return "D";
			if (r.n(2,0,"1994")) return "D";
			if (r.n(-2,1,"D") && r.n(-1,1,"C")) return "D";
			if (r.s(-2,"20")) return "D";
			if (r.n(-2,0,"total")) return "D";
			if (r.s(-2,"67")) return "N";
			if (r.n(-1,0,"par")) return "N";
			return "PRO";
		}
		if (r.n(1,0,"de")) {
			if (r.n(2,0,"la")) return "A";
			if (r.n(-2,1,"D") && r.n(-1,1,"N")) return "A";
			if (r.w=="certaines" && r.n(1,0,"de") && r.n(2,0,"nos")) return "A";
			return "PRO";
		}
		if (r.n(1,0,"décembre")) return "A";
		if (r.n(-1,0,"au--cours-des")) return "A";
		if (r.n(1,0,"des")) {
			if (r.n(2,0,"leurs")) return "D";
			if (r.n(-2,1,"CL")) return "D";
			return "PRO";
		}
		if (r.n(-1,0,"aux")) return "A";
		if (r.n(1,1,"P") && r.n(2,1,"P")) {
			if (r.w=="le") return "D";
			return "PRO";
		}
		if (r.w=="ce" && r.n(-1,0,"-")) {
			if (r.w=="ce" && r.n(1,1,"N") && r.n(2,1,"V")) return "D";
			return "CL";
		}
		if (r.n(1,0,"ne")) {
			if (r.w=="certains") return "PRO";
			if (r.n(-2,0,"des")) return "N";
			return "CL";
		}
		if (r.n(-1,0,"au")) return "A";
		if (r.n(1,1,"CL") && r.n(2,1,"V")) {
			if (r.n(1,0,"se")) return "PRO";
			if (r.s(-3,"ins")) return "PRO";
			return "CL";
		}
		if (r.n(1,0,":")) {
			if (r.n(-1,1,"P")) return "PRO";
			if (r.n(-2,0,"en")) return "PRO";
			return "A";
		}
		if (r.w=="Ce" && r.n(1,1,"C")) return "PRO";
		if (r.n(-1,1,"N") && r.n(1,1,"P")) {
			if (r.n(-2,1,"N") && r.n(-1,1,"N")) return "A";
			if (r.n(-2,0,",")) return "A";
			return "N";
		}
		if (r.n(-1,0,";") && r.n(1,0,"Mr")) return "N";
		if (r.n(-1,0,"daté") && r.n(1,0,"-")) return "A";
		if (r.n(1,0,"d'-entre")) return "PRO";
		if (r.n(1,0,"pour")) {
			if (r.n(-1,0,"à") && r.n(1,0,"pour")) return "N";
			return "PRO";
		}
		if (r.n(1,1,"PONCT") && r.n(2,1,"PONCT")) {
			if (r.n(-1,0,"art.") && r.n(1,0,")")) return "A";
			if (r.w=="50" && r.n(-1,0,"années")) return "A";
			if (r.n(-1,0,"page")) return "A";
			if (r.s(-4,"-,-3")) return "PRO";
			if (r.n(-2,0,"deux")) return "PRO";
			if (r.s(-3,"-29")) return "D";
			if (r.n(-2,1,"A") && r.n(-1,1,"PONCT")) return "D";
			if (r.n(-1,0,",") && r.n(1,0,")")) return "D";
			if (r.n(-2,0,")")) return "D";
			return "N";
		}
		if (r.n(-1,1,"N") && r.n(1,1,"C")) {
			if (r.w=="50" && r.n(-1,1,"N") && r.n(1,1,"C")) return "N";
			return "A";
		}
		if (r.n(1,0,"que")) return "A";
		if (r.n(-2,1,"C") && r.n(-1,1,"CL")) return "CL";
		if (r.n(1,0,"JANVIER")) return "A";
		if (r.w=="ce" && r.n(1,1,"P")) return "PRO";
		if (r.n(1,0,"l'")) {
			if (r.n(2,0,"une")) return "A";
			if (r.n(2,1,"V")) return "PRO";
			return "N";
		}
		if (r.w=="Des" && r.n(-1,1,"") && r.n(1,1,"D")) return "P";
		if (r.n(-1,0,"numéro")) return "A";
		if (r.n(-1,0,"au----dessus-des")) return "A";
		if (r.n(1,0,"septembre")) return "A";
		if (r.n(1,1,"P") && r.n(2,1,"V")) {
			if (r.n(-1,1,"V") && r.n(1,1,"P")) return "PRO";
			return "CL";
		}
		if (r.w=="deux" && r.n(-1,1,"A")) return "PRO";
		if (r.n(1,0,"le")) {
			if (r.n(-1,0,"à")) return "N";
			return "PRO";
		}
		if (r.n(2,0,"Il")) return "N";
		if (r.n(1,0,"Paris")) return "N";
		if (r.n(1,1,"PONCT") && r.n(2,1,"P")) {
			if (r.s(-2,"00")) return "D";
			return "N";
		}
		if (r.w=="Toute" && r.n(-1,1,"") && r.n(1,1,"D")) return "A";
		if (r.n(-1,0,"mardi") && r.n(1,0,"mai")) return "A";
		if (r.n(1,0,"JUILLET")) return "A";
		if (r.n(-1,0,"Au--cours-des")) return "A";
		if (r.n(-1,0,"(") && r.n(1,0,"exemplaires")) return "A";
		if (r.n(-2,1,"") && r.n(-1,1,"CL")) return "CL";
		if (r.w=="une" && r.n(1,1,"P") && r.n(2,1,"D")) return "PRO";
		if (r.n(1,0,"actuellement")) return "PRO";
		if (r.n(1,0,"les")) return "PRO";
		if (r.w=="80" && r.n(-1,0,"années")) return "N";
		return "D";
	}
	if (r.t=="CL") {
		if (r.n(-1,1,"P") && r.n(1,1,"PONCT")) return "PRO";
		if (r.w=="s'" && r.n(1,0,"il")) return "C";
		if (r.n(1,0,"aussi")) return "PRO";
		if (r.n(1,0,"ils")) return "C";
		if (r.w=="elles" && r.n(-1,1,"P")) {
			if (r.w=="elles" && r.n(-1,0,"comme")) return "CL";
			return "PRO";
		}
		if (r.n(-1,0,",") && r.n(1,0,",")) return "PRO";
		if (r.w=="lui" && r.n(-2,1,"V") && r.n(-1,1,"P")) {
			if (r.n(1,0,"trouver")) return "CL";
			return "PRO";
		}
		if (r.w=="elle" && r.n(-1,1,"P")) {
			if (r.w=="elle" && r.n(-1,0,"comme")) return "CL";
			return "PRO";
		}
		if (r.n(1,0,"qui")) return "PRO";
		if (r.w=="lui" && r.n(1,1,"ADV")) return "PRO";
		if (r.w=="nous" && r.n(1,0,",")) return "PRO";
		if (r.w=="nous" && r.n(1,0,"une")) return "PRO";
		if (r.w=="lui" && r.n(-1,1,"P") && r.n(1,1,"P")) return "PRO";
		if (r.w=="nous" && r.n(1,1,"A")) return "PRO";
		if (r.w=="nous" && r.n(-1,1,"P") && r.n(1,1,"P")) return "PRO";
		return "CL";
	}
	if (r.t=="I") return "I";
	if (r.t=="PRO") {
		if (r.w=="Que" && r.n(1,1,"D")) return "C";
		if (r.w=="Certains" && r.n(1,1,"N")) return "D";
		if (r.w=="personne" && r.n(-1,1,"D")) return "N";
		if (r.w=="Tout" && r.n(1,1,"P")) return "ADV";
		if (r.w=="Tout" && r.n(1,1,"D")) return "A";
		if (r.w=="personne" && r.n(-1,1,"A")) return "N";
		if (r.w=="Tout" && r.n(1,1,"PRO") && r.n(2,1,"V")) return "A";
		if (r.n(1,0,"francs")) return "D";
		if (r.w=="où" && r.n(1,0,"commence")) return "ADV";
		if (r.n(1,0,"milliards")) return "D";
		return "PRO";
	}
	if (r.t=="PREF") return "PREF";
	if (r.t=="N") {
		if (r.n(-1,1,"CL")) {
			if (r.w=="temps" && r.n(-2,1,"V") && r.n(-1,1,"CL")) return "N";
			return "V";
		}
		if (r.w=="politique" && r.n(-1,1,"N")) return "A";
		if (r.n(-1,0,"qui")) return "V";
		if (r.n(-1,0,"ne")) return "V";
		if (r.n(-2,1,"N") && r.n(-1,1,"ADV")) {
			if (r.s(-2,"ée")) return "V";
			if (r.w=="Euronews" && r.n(-2,1,"N") && r.n(-1,1,"ADV")) return "N";
			if (r.s(-2,"en")) return "N";
			if (r.n(1,0,"par")) return "V";
			if (r.n(1,1,"C") && r.n(2,1,"V")) return "V";
			if (r.n(-1,0,"n'")) return "V";
			return "A";
		}
		if (r.w=="total" && r.n(-1,1,"N")) return "A";
		if (r.w=="Est" && r.n(-2,0,"")) return "V";
		if (r.w=="industriels" && r.n(-1,1,"N")) return "A";
		if (r.w=="jeunes" && r.n(1,1,"N")) return "A";
		if (r.w=="ensemble" && r.n(-1,1,"V")) return "ADV";
		if (r.w=="compte" && r.n(-1,1,"N")) return "V";
		if (r.w=="moyenne" && r.n(-1,1,"N")) return "A";
		if (r.n(-1,0,"pays")) {
			if (r.w=="membres" && r.n(-1,1,"N")) return "N";
			return "A";
		}
		if (r.w=="annonce" && r.n(1,1,"D")) return "V";
		if (r.w=="pouvoir" && r.n(1,1,"V")) {
			if (r.n(-1,1,"D")) return "N";
			if (r.w=="pouvoir" && r.n(-1,0,"du")) return "N";
			return "V";
		}
		if (r.n(-1,0,"a")) {
			if (r.s(-4,"soin")) return "N";
			if (r.s(-3,"nce")) return "N";
			return "V";
		}
		if (r.w=="automobiles" && r.n(-1,1,"N")) return "A";
		if (r.n(-2,0,"s'")) {
			if (r.n(1,1,"N") && r.n(2,1,"N")) return "N";
			if (r.n(1,1,"N") && r.n(2,1,"PONCT")) return "N";
			if (r.n(-1,0,"exprimant")) return "N";
			return "V";
		}
		if (r.w=="automobile" && r.n(-1,1,"N")) return "A";
		if (r.w=="minimum" && r.n(-1,1,"N")) return "A";
		if (r.w=="immobilier" && r.n(-1,1,"N")) return "A";
		if (r.w=="prêts" && r.n(-1,1,"V")) return "A";
		if (r.w=="revenu" && r.n(-1,0,"est")) return "V";
		if (r.w=="professionnels" && r.n(-1,1,"N")) return "A";
		if (r.w=="demi" && r.n(-1,1,"D") && r.n(1,1,"PONCT")) return "A";
		if (r.w=="informatique" && r.n(-1,1,"N")) return "A";
		if (r.n(-2,1,"D") && r.n(-1,1,"ADV")) {
			if (r.s(-2,"té")) return "N";
			if (r.n(-1,0,"juste")) return "N";
			if (r.n(-2,0,"une")) return "N";
			return "A";
		}
		if (r.w=="Cinq" && r.n(-2,0,"")) return "D";
		if (r.w=="produit" && r.n(-1,1,"N")) return "V";
		if (r.w=="personnel" && r.n(-1,1,"N")) return "A";
		if (r.w=="électronique" && r.n(-1,1,"N")) return "A";
		if (r.w=="frais" && r.n(-1,1,"N")) return "A";
		if (r.w=="lire" && r.n(-1,1,"P")) return "V";
		if (r.n(-1,1,"ET")) {
			if (r.w=="Fed" && r.n(-1,0,"Home.")) return "N";
			if (r.w=="mafia" && r.n(-2,1,"PONCT") && r.n(-1,1,"ET")) return "N";
			return "ET";
		}
		if (r.w=="contraire" && r.n(-1,1,"N")) return "A";
		if (r.w=="communes" && r.n(-1,1,"N")) return "A";
		if (r.w=="pratiques" && r.n(-1,1,"N")) return "A";
		if (r.w=="reprise" && r.n(-1,1,"V") && r.n(1,1,"P")) return "V";
		if (r.w=="demande" && r.n(-1,1,"N")) return "V";
		if (r.w=="marque" && r.n(1,1,"D")) return "V";
		if (r.w=="responsable" && r.n(-1,1,"V")) return "A";
		if (r.w=="intérieur" && r.n(-1,1,"N")) return "A";
		if (r.w=="essentiel" && r.n(-1,1,"N")) return "A";
		if (r.w=="étranger" && r.n(-1,1,"N")) return "A";
		if (r.w=="produit" && r.n(-1,1,"V")) return "V";
		if (r.w=="entrée" && r.n(-1,1,"V")) return "V";
		if (r.n(-1,0,"n'")) return "V";
		if (r.w=="pouvoir" && r.n(-1,1,"V")) return "V";
		if (r.w=="mécanique" && r.n(-1,1,"N")) return "A";
		if (r.w=="directeur" && r.n(-1,0,"comité")) return "A";
		if (r.n(-1,0,"très")) {
			if (r.n(-2,1,"P") && r.n(-1,1,"ADV")) return "N";
			return "A";
		}
		if (r.w=="point" && r.n(-1,1,"V")) return "ADV";
		if (r.w=="Sept" && r.n(-1,1,"")) return "D";
		if (r.w=="lire" && r.n(-1,1,"V")) return "V";
		if (r.w=="table" && r.n(1,0,"sur")) return "V";
		if (r.w=="correspondant" && r.n(1,1,"P") && r.n(2,1,"D")) return "V";
		if (r.w=="lire" && r.n(-1,0,"(")) return "V";
		if (r.w=="offre" && r.n(1,1,"D")) return "V";
		if (r.w=="socialistes" && r.n(-1,1,"N")) return "A";
		if (r.w=="particuliers" && r.n(-1,1,"N")) return "A";
		if (r.w=="équivalent" && r.n(-1,1,"N")) return "A";
		if (r.w=="intermédiaires" && r.n(-1,1,"N")) return "A";
		if (r.w=="personnels" && r.n(-1,1,"N")) return "A";
		if (r.w=="maximum" && r.n(-1,1,"N") && r.n(1,1,"P")) return "A";
		if (r.n(-1,0,"peu")) return "A";
		if (r.n(-1,0,"caractère")) return "A";
		if (r.w=="92" && r.n(1,1,"N")) return "D";
		if (r.w=="signe" && r.n(-1,1,"N")) return "V";
		if (r.w=="analyse" && r.n(-1,1,"PONCT")) return "V";
		if (r.w=="intermédiaire" && r.n(-1,1,"N")) return "A";
		if (r.w=="essentiel" && r.n(-1,1,"V")) return "A";
		if (r.w=="effectif" && r.n(-1,1,"N")) return "A";
		if (r.w=="responsables" && r.n(-1,1,"N") && r.n(1,1,"P")) return "A";
		if (r.w=="quotidiens" && r.n(-1,1,"N")) return "A";
		if (r.w=="logique" && r.n(-1,1,"N")) return "A";
		if (r.w=="moyens" && r.n(-1,1,"N")) return "A";
		if (r.w=="sud" && r.n(1,1,"PONCT") && r.n(2,1,"A")) return "A";
		if (r.w=="court-terme" && r.n(-1,1,"N")) return "A";
		if (r.n(-1,0,"soient")) return "A";
		if (r.n(-1,0,"dirigeants")) return "A";
		if (r.w=="quotidien" && r.n(-1,1,"N")) return "A";
		if (r.w=="nationalistes" && r.n(-1,1,"N")) return "A";
		if (r.w=="pétroliers" && r.n(-1,1,"N")) return "A";
		if (r.w=="audiovisuel" && r.n(-1,1,"N")) return "A";
		if (r.w=="ouvrier" && r.n(-1,1,"N")) return "A";
		if (r.w=="procédé" && r.n(1,0,"à")) return "V";
		if (r.w=="presse" && r.n(-1,0,"temps")) return "V";
		if (r.w=="menace" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "V";
		if (r.n(-1,0,"être")) {
			if (r.n(1,1,"P") && r.n(2,1,"V")) return "N";
			if (r.s(-2,"re")) return "N";
			if (r.s(-2,"ur")) return "N";
			if (r.s(-3,"res")) return "N";
			if (r.n(2,0,"cette")) return "N";
			return "V";
		}
		if (r.w=="baisse" && r.n(-1,1,"N")) return "V";
		if (r.n(-1,0,"été")) {
			if (r.n(-2,1,"D") && r.n(-1,1,"V")) return "N";
			if (r.n(2,0,"la")) return "N";
			if (r.w=="bénéficiaires") return "A";
			if (r.n(-1,0,"été") && r.n(1,0,"en")) return "N";
			return "V";
		}
		if (r.w=="part" && r.n(-1,1,"N")) return "V";
		if (r.n(-1,0,",") && r.n(1,0,"les")) return "V";
		if (r.n(-1,0,"sont") && r.n(1,0,"dans")) return "V";
		if (r.w=="produits" && r.n(-1,1,"N")) return "V";
		if (r.w=="annonce" && r.n(1,1,"ADV")) return "V";
		if (r.w=="Plan" && r.n(-2,0,"le")) return "ET";
		if (r.n(-1,0,"revenu")) return "A";
		if (r.w=="miracle" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "A";
		if (r.w=="mort" && r.n(-1,1,"N")) return "A";
		if (r.w=="juifs" && r.n(-1,1,"N")) return "A";
		if (r.w=="centrales" && r.n(-1,1,"N")) return "A";
		if (r.n(-1,0,"marchés")) return "A";
		if (r.w=="boursiers" && r.n(-1,1,"N")) return "A";
		if (r.w=="directeurs" && r.n(1,1,"PONCT")) return "A";
		if (r.n(-1,0,"nécessairement")) return "A";
		if (r.w=="politique" && r.n(-1,1,"PONCT")) {
			if (r.n(-2,1,"D")) return "N";
			return "A";
		}
		if (r.w=="titulaires" && r.n(-1,1,"N") && r.n(1,1,"P")) return "A";
		if (r.w=="mandataires" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "A";
		if (r.w=="statistique" && r.n(-1,1,"N")) return "A";
		if (r.w=="voisins" && r.n(-1,1,"N")) return "A";
		if (r.w=="logique" && r.n(-1,1,"V")) return "A";
		if (r.w=="salarié" && r.n(-1,1,"N")) return "A";
		if (r.w=="moyen-terme" && r.n(-1,1,"N")) return "A";
		if (r.w=="jeunes" && r.n(1,1,"A")) return "A";
		if (r.n(-1,0,"Etats") && r.n(1,0,",")) return "A";
		if (r.w=="super" && r.n(1,0,"-")) return "A";
		if (r.n(-1,0,"éléments")) return "A";
		if (r.w=="outre---Atlantique" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "A";
		if (r.w=="politique" && r.n(-1,1,"C")) return "A";
		if (r.w=="salariés" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "A";
		if (r.n(-1,0,"autorités")) return "A";
		if (r.n(-1,0,"est") && r.n(1,0,".")) {
			if (r.s(-4,"")) return "V";
			return "A";
		}
		if (r.w=="fondateurs" && r.n(-1,1,"N")) return "A";
		if (r.w=="fin" && r.n(-1,0,"un")) return "A";
		if (r.w=="Douze" && r.n(-1,0,"les")) return "A";
		if (r.w=="moyenne" && r.n(-2,1,"N") && r.n(-1,1,"A")) return "A";
		if (r.w=="ensemble" && r.n(-2,1,"V") && r.n(-1,1,"A")) return "ADV";
		if (r.n(-1,0,"qu'") && r.n(1,0,".")) return "ADV";
		if (r.w=="point" && r.n(-1,1,"N")) return "ADV";
		if (r.w=="Douze" && r.n(-1,1,"") && r.n(1,1,"N")) return "D";
		if (r.w=="pratique" && r.n(-1,1,"N")) {
			if (r.n(-2,0,"l'")) return "A";
			return "V";
		}
		if (r.w=="demande" && r.n(1,1,"D")) return "V";
		if (r.w=="faits" && r.n(-1,1,"N")) return "V";
		if (r.w=="demande" && r.n(-1,1,"A")) return "V";
		if (r.w=="rencontre" && r.n(-1,1,"N")) return "V";
		if (r.w=="pouvoir" && r.n(-1,1,"P") && r.n(1,1,"CL")) return "V";
		if (r.w=="table" && r.n(1,1,"ADV")) return "V";
		if (r.w=="compte" && r.n(-1,1,"A") && r.n(1,1,"D")) return "V";
		if (r.w=="revenu" && r.n(-1,1,"PONCT") && r.n(1,1,"P")) return "V";
		if (r.w=="débouché" && r.n(1,1,"P") && r.n(2,1,"D")) return "V";
		if (r.n(-1,0,",") && r.n(1,0,"l'")) return "V";
		if (r.n(1,0,"-vous")) return "V";
		if (r.n(-1,0,"chacun")) return "V";
		if (r.w=="employés" && r.n(-1,1,"N")) return "V";
		if (r.w=="cité" && r.n(1,1,"P") && r.n(2,1,"D")) return "V";
		if (r.w=="portée" && r.n(-1,1,"V")) return "V";
		if (r.n(-1,0,"avait")) return "V";
		if (r.w=="contrôle" && r.n(-1,1,"N")) return "V";
		if (r.s(-4,"ctÃ©")) return "V";
		if (r.w=="conduite" && r.n(-1,1,"N")) return "V";
		if (r.n(1,0,"and")) return "ET";
		if (r.n(-2,0,"and")) return "ET";
		if (r.n(1,0,"Act")) return "ET";
		return "N";
	}
	if (r.t=="P") {
		if (r.w=="des" && r.n(-1,1,"P")) return "D";
		if (r.w=="des" && r.n(-1,1,"V")) {
			if (r.w=="des" && r.n(-2,0,"le")) return "P";
			if (r.w=="des" && r.n(1,1,"D") && r.n(2,1,"N")) return "P";
			if (r.w=="des" && r.n(-1,0,"chargé")) return "P";
			if (r.w=="des" && r.n(1,0,"Etats---Unis")) return "P";
			if (r.w=="des" && r.n(-1,0,"sortir")) return "P";
			if (r.n(-2,0,"Le")) return "P";
			if (r.w=="des" && r.n(-1,0,"tenir-compte")) return "P";
			if (r.w=="des" && r.n(-2,0,"bien")) return "P";
			if (r.n(-2,0,"la")) return "P";
			if (r.n(-1,0,"tenu")) return "P";
			if (r.w=="des" && r.n(-1,0,"tenant-compte")) return "P";
			if (r.w=="des" && r.n(-1,0,"parler")) return "P";
			if (r.w=="des" && r.n(-1,0,"agissant")) return "P";
			if (r.w=="des" && r.n(-1,0,"sorti")) return "P";
			if (r.n(-2,0,"l'")) return "P";
			if (r.w=="des" && r.n(-1,0,"profiter")) return "P";
			if (r.n(-2,0,"du")) return "P";
			if (r.w=="des" && r.n(2,0,"saisonnières")) return "P";
			if (r.w=="des" && r.n(-2,0,"seront")) return "P";
			if (r.w=="des" && r.n(-2,0,"s'") && r.n(-1,0,"agisse")) return "P";
			if (r.w=="des" && r.n(-1,0,"fait-partie")) return "P";
			if (r.w=="des" && r.n(1,0,"exportations")) return "P";
			if (r.w=="des" && r.n(-1,1,"V") && r.n(1,1,"PRO")) return "P";
			if (r.n(-2,0,"une")) return "P";
			if (r.w=="des" && r.n(1,0,"activités")) return "P";
			if (r.n(-1,0,"informé")) return "P";
			if (r.n(1,1,"ADV")) return "P";
			if (r.w=="des" && r.n(-1,0,"issu")) return "P";
			if (r.w=="des" && r.n(-1,0,"bénéficient")) return "P";
			if (r.w=="des" && r.n(-1,0,"exigent")) return "P";
			if (r.n(-1,0,"dépend")) return "P";
			if (r.n(1,0,"pays")) return "P";
			if (r.n(2,0,"les")) return "P";
			if (r.n(-2,0,"plus")) return "P";
			if (r.n(-1,0,"parlant")) return "P";
			if (r.n(-1,0,"relèvent")) return "P";
			if (r.n(-2,0,"emploi")) return "P";
			if (r.n(-1,0,"chargée")) return "P";
			if (r.n(-1,0,"parle")) return "P";
			if (r.n(-2,0,"de-plus-en-plus")) return "P";
			if (r.w=="des" && r.n(-2,0,"de") && r.n(-1,0,"bénéficier")) return "P";
			if (r.w=="des" && r.n(2,0,"nationales")) return "P";
			if (r.n(1,0,"pouvoirs-publics")) return "P";
			if (r.n(-1,0,"émanant")) return "P";
			if (r.w=="des" && r.n(-2,0,"que") && r.n(-1,0,"dire")) return "P";
			return "D";
		}
		if (r.w=="en" && r.n(-1,1,"CL")) {
			if (r.n(-1,0,"-on")) return "P";
			return "CL";
		}
		if (r.w=="des" && r.n(-1,1,"PONCT") && r.n(1,1,"N")) {
			if (r.n(2,0,"du")) return "P";
			if (r.w=="des" && r.n(-1,0,"''") && r.n(1,0,"années")) return "P";
			if (r.n(1,0,"fonctionnaires")) return "P";
			if (r.w=="des" && r.n(1,0,"suites")) return "P";
			if (r.w=="des" && r.n(1,0,"services-financiers") && r.n(2,0,"et")) return "P";
			if (r.w=="des" && r.n(-2,0,"prix")) return "P";
			if (r.n(1,0,"syndicats")) return "P";
			if (r.n(1,0,"pays")) return "P";
			if (r.w=="des" && r.n(-2,0,"pour-l'-essentiel") && r.n(-1,0,",")) return "P";
			if (r.w=="des" && r.n(2,0,"apportées")) return "P";
			if (r.w=="des" && r.n(-2,0,"%") && r.n(-1,0,")")) return "P";
			if (r.n(1,0,"sociétés")) return "P";
			if (r.n(-1,0,"''") && r.n(1,0,"taux")) return "P";
			if (r.w=="des" && r.n(1,0,"entreprises") && r.n(2,0,"et")) return "P";
			return "D";
		}
		if (r.n(-1,1,"P") && r.n(1,1,"A")) {
			if (r.s(-2,"de")) return "P";
			if (r.w=="au" && r.n(1,1,"A")) return "P";
			if (r.n(-1,0,"y-compris")) return "P";
			if (r.n(2,1,"D")) return "P";
			if (r.n(2,0,"%")) return "P";
			return "D";
		}
		if (r.w=="des" && r.n(-2,1,"V") && r.n(-1,1,"ADV")) {
			if (r.n(-2,0,"attend")) return "P";
			if (r.n(1,0,"deux")) return "P";
			if (r.n(-2,0,"bénéficient")) return "P";
			if (r.w=="des" && r.n(-2,0,"parle")) return "P";
			if (r.w=="des" && r.n(2,0,"des")) return "P";
			if (r.w=="des" && r.n(-2,0,"agit")) return "P";
			if (r.w=="des" && r.n(2,0,"et")) return "P";
			return "D";
		}
		if (r.w=="en" && r.n(-1,0,"n'")) return "CL";
		if (r.w=="en" && r.n(-1,1,"P") && r.n(1,1,"V")) {
			if (r.n(-1,0,"y-compris")) return "P";
			return "CL";
		}
		if (r.w=="des" && r.n(-1,0,"que")) return "D";
		if (r.w=="comme" && r.n(1,1,"D") && r.n(2,1,"V")) {
			if (r.w=="comme" && r.n(-2,0,"la")) return "P";
			return "C";
		}
		if (r.w=="comme" && r.n(1,1,"CL")) {
			if (r.n(-2,1,"P")) return "P";
			return "C";
		}
		if (r.w=="d'" && r.n(1,0,"autres")) {
			if (r.n(-2,0,"la")) return "P";
			if (r.n(2,0,"produits")) return "P";
			if (r.n(-1,0,"beaucoup")) return "P";
			if (r.n(-1,0,"ceux")) return "P";
			return "D";
		}
		if (r.w=="en" && r.n(-1,1,"PRO") && r.n(1,1,"V")) {
			if (r.w=="en" && r.n(-1,0,"Tout")) return "P";
			return "CL";
		}
		if (r.w=="D'" && r.n(1,1,"A")) return "D";
		if (r.w=="devant" && r.n(1,1,"V")) return "V";
		if (r.n(1,0,"a")) return "CL";
		if (r.w=="des" && r.n(-1,1,"")) return "D";
		if (r.w=="en" && r.n(1,0,"est")) return "CL";
		if (r.w=="De" && r.n(1,1,"A") && r.n(2,1,"N")) return "D";
		if (r.w=="des" && r.n(-1,0,"bien")) return "D";
		if (r.w=="de" && r.n(1,0,"nouvelles")) {
			if (r.w=="de" && r.n(-2,0,"en")) return "P";
			if (r.n(-2,0,"la")) return "P";
			if (r.n(-2,0,"l'")) return "P";
			if (r.n(2,0,"émissions")) return "P";
			return "D";
		}
		if (r.w=="en" && r.n(1,0,"sont")) return "CL";
		if (r.w=="comme" && r.n(-1,1,"PONCT") && r.n(1,1,"V")) {
			if (r.n(1,1,"V") && r.n(2,1,"PONCT")) return "P";
			return "C";
		}
		if (r.w=="de" && r.n(1,0,"nombreuses")) {
			if (r.w=="de" && r.n(-2,1,"D") && r.n(-1,1,"N")) return "P";
			return "D";
		}
		if (r.w=="depuis" && r.n(1,1,"PONCT")) return "ADV";
		if (r.w=="Comme" && r.n(1,1,"CL")) return "C";
		if (r.w=="Comme" && r.n(1,1,"D") && r.n(2,1,"V")) return "C";
		if (r.w=="des" && r.n(-1,1,"CL") && r.n(1,1,"N")) return "D";
		if (r.w=="du" && r.n(1,0,"mal") && r.n(2,0,"à")) return "D";
		if (r.w=="A" && r.n(2,0,"ANS")) return "V";
		if (r.w=="entre" && r.n(1,1,"P") && r.n(2,1,"D")) return "V";
		if (r.w=="des" && r.n(-2,1,"CL") && r.n(-1,1,"N")) return "D";
		if (r.w=="des" && r.n(-2,1,"ADV") && r.n(-1,1,"ADV")) {
			if (r.w=="des" && r.n(-1,0,"loin")) return "P";
			return "D";
		}
		if (r.w=="des" && r.n(-2,1,"") && r.n(-1,1,"C")) return "D";
		if (r.n(1,0,"témoignent")) return "CL";
		if (r.n(-1,0,"le")) {
			if (r.n(1,0,":")) return "A";
			return "N";
		}
		if (r.w=="Depuis" && r.n(-1,0,"") && r.n(1,0,",")) return "ADV";
		if (r.w=="comme" && r.n(1,0,"cela")) return "C";
		if (r.w=="d'" && r.n(-1,1,"ADV") && r.n(1,1,"A")) return "D";
		if (r.w=="des" && r.n(-1,0,"ainsi-que")) return "D";
		if (r.w=="de" && r.n(1,0,"sérieuses")) return "D";
		if (r.n(1,0,".")) {
			if (r.n(-2,1,"N")) return "N";
			return "ADV";
		}
		if (r.w=="depuis" && r.n(1,1,"V")) return "ADV";
		if (r.w=="comme" && r.n(-1,0,",") && r.n(1,0,"en")) {
			if (r.n(1,1,"P") && r.n(2,1,"N")) return "P";
			return "C";
		}
		if (r.n(1,0,"véritables")) return "D";
		if (r.w=="des" && r.n(-2,0,",") && r.n(-1,0,"et")) return "D";
		if (r.w=="des" && r.n(-2,1,"D") && r.n(-1,1,"C")) return "D";
		if (r.n(1,0,"nombreux")) {
			if (r.n(-2,1,"D") && r.n(-1,1,"N")) return "P";
			if (r.s(-2,"de")) return "P";
			return "D";
		}
		if (r.w=="des" && r.n(-1,0,",")) {
			if (r.n(-1,1,"PONCT") && r.n(1,1,"D")) return "P";
			if (r.w=="des" && r.n(-1,1,"PONCT") && r.n(1,1,"ADV")) return "P";
			if (r.w=="des" && r.n(2,0,".")) return "P";
			return "D";
		}
		if (r.w=="des" && r.n(-1,0,"si")) return "D";
		if (r.w=="de" && r.n(-2,0,"ont") && r.n(-1,0,"pas")) return "D";
		if (r.n(1,0,"sera")) return "CL";
		if (r.w=="en" && r.n(1,0,"ont")) return "CL";
		if (r.w=="devant" && r.n(1,1,"ADV")) return "V";
		if (r.w=="plus-d'" && r.n(-1,1,"V")) return "ADV";
		if (r.n(1,1,"C") && r.n(2,1,"CL")) {
			if (r.w=="pour" && r.n(1,0,"que")) return "P";
			return "ADV";
		}
		if (r.w=="comme" && r.n(1,0,"pour")) {
			if (r.n(-2,1,"P")) return "P";
			return "C";
		}
		if (r.w=="comme" && r.n(1,0,"d'")) return "C";
		if (r.w=="d'-où" && r.n(-2,1,"N") && r.n(-1,1,"PONCT")) return "C";
		if (r.w=="d'" && r.n(2,0,"investissements")) return "D";
		if (r.n(1,0,"longs")) return "D";
		if (r.w=="de" && r.n(-1,0,"connu")) return "D";
		if (r.n(-1,0,"lorsque")) return "D";
		if (r.n(-1,0,"subir")) return "D";
		if (r.w=="de" && r.n(-2,0,"voit")) return "D";
		if (r.w=="de" && r.n(-1,0,"et") && r.n(1,0,"nouveaux")) return "D";
		if (r.n(-1,0,"sur")) return "D";
		if (r.w=="des" && r.n(-1,0,"enfin")) return "D";
		if (r.w=="des" && r.n(-1,0,"alors-que")) return "D";
		if (r.w=="des" && r.n(-1,0,"bref")) return "D";
		if (r.w=="de" && r.n(-2,0,"a") && r.n(-1,0,"pas")) {
			if (r.n(-1,1,"ADV") && r.n(1,1,"PONCT")) return "P";
			return "D";
		}
		if (r.w=="du" && r.n(-1,0,"par")) return "D";
		if (r.w=="de" && r.n(-1,1,"P") && r.n(1,1,"ADV")) return "D";
		if (r.w=="en" && r.n(1,0,"viennent")) return "CL";
		if (r.w=="en" && r.n(1,0,"témoigne")) return "CL";
		if (r.w=="en" && r.n(1,0,"fut")) return "CL";
		if (r.n(-1,0,"peut")) {
			if (r.w=="en" && r.n(-2,0,"elle")) return "P";
			return "CL";
		}
		if (r.w=="en" && r.n(1,0,"seraient")) return "CL";
		if (r.w=="A" && r.n(1,1,"PONCT")) return "N";
		if (r.w=="concernant" && r.n(-1,0,"décisions")) return "V";
		return "P";
	}
	if (r.t=="V") {
		if (r.n(-1,0,"du")) return "N";
		if (r.n(-1,0,"un")) {
			if (r.n(-2,0,"l'")) return "V";
			if (r.n(-2,0,"L'")) return "V";
			return "N";
		}
		if (r.w=="est" && r.n(-2,1,"P") && r.n(-1,1,"D")) {
			if (r.w=="est" && r.n(-2,0,"comme") && r.n(-1,0,"l'")) return "V";
			return "N";
		}
		if (r.w=="été" && r.n(-1,1,"D")) return "N";
		if (r.n(-1,0,"des")) return "N";
		if (r.w=="fait" && r.n(-1,1,"D")) {
			if (r.n(-2,1,"CL") && r.n(-1,1,"D")) return "V";
			if (r.w=="fait" && r.n(-1,0,"le") && r.n(1,0,"remarquer")) return "V";
			if (r.n(-2,0,"ne")) return "V";
			return "N";
		}
		if (r.w=="reste" && r.n(-1,1,"D")) return "N";
		if (r.n(-1,0,"une")) {
			if (r.n(-2,0,"l'")) return "V";
			return "N";
		}
		if (r.w=="risque" && r.n(-1,1,"D")) return "N";
		if (r.w=="passé" && r.n(-1,0,"an")) return "A";
		if (r.w=="risque" && r.n(-1,1,"P")) return "N";
		if (r.w=="sommes" && r.n(-1,1,"D")) return "N";
		if (r.w=="prise" && r.n(-1,1,"D")) return "N";
		if (r.n(-1,0,"son")) return "N";
		if (r.n(-1,0,"au")) return "N";
		if (r.w=="précise" && r.n(-1,1,"N") && r.n(1,1,"P")) return "A";
		if (r.w=="porte" && r.n(-1,1,"D")) return "N";
		if (r.w=="passé" && r.n(-1,1,"D")) return "N";
		if (r.w=="permis" && r.n(-1,1,"D")) return "N";
		if (r.w=="limite" && r.n(-1,1,"D")) return "N";
		if (r.w=="devenir" && r.n(-1,0,"le")) return "N";
		if (r.w=="été" && r.n(-1,1,"P")) return "N";
		if (r.n(-1,0,"ses")) return "N";
		if (r.n(-1,0,"aux")) return "N";
		if (r.n(-1,0,"cette")) return "N";
		if (r.w=="acquis" && r.n(-1,1,"D")) return "N";
		if (r.w=="fixe" && r.n(-1,1,"N")) return "A";
		if (r.w=="spécialisée" && r.n(-1,0,"filiale")) return "A";
		if (r.w=="continue" && r.n(1,1,"P") && r.n(2,1,"N")) return "A";
		if (r.w=="représentant" && r.n(-1,1,"D")) return "N";
		if (r.w=="inscrits" && r.n(-2,1,"N") && r.n(-1,1,"P")) return "N";
		if (r.w=="devoir" && r.n(-1,1,"D")) return "N";
		if (r.n(-1,0,"la") && r.n(1,0,"des")) return "N";
		if (r.n(-1,0,"sa")) return "N";
		if (r.n(-1,0,"L'")) return "N";
		if (r.n(-1,0,"La")) return "N";
		if (r.w=="garde" && r.n(-1,1,"P")) return "N";
		if (r.w=="intéressés" && r.n(-1,1,"N")) return "A";
		if (r.w=="savoir" && r.n(-1,1,"D")) return "N";
		if (r.w=="intéressés" && r.n(-1,1,"D") && r.n(1,1,"PONCT")) return "N";
		if (r.w=="élève" && r.n(-1,1,"A")) return "N";
		if (r.w=="risque" && r.n(-2,1,"D") && r.n(-1,1,"A")) return "N";
		if (r.n(-1,0,"René")) return "N";
		if (r.w=="est" && r.n(-1,0,"d'")) return "N";
		if (r.n(-2,0,"explique")) return "N";
		if (r.n(-1,0,"le") && r.n(1,0,"des")) return "N";
		if (r.w=="venue" && r.n(-1,1,"D")) return "N";
		if (r.w=="reste" && r.n(-1,1,"P") && r.n(1,1,"PONCT")) return "N";
		if (r.w=="démunis" && r.n(-1,1,"ADV") && r.n(1,1,"C")) return "A";
		if (r.w=="présente" && r.n(-1,0,"la")) return "A";
		if (r.w=="connus" && r.n(-2,0,"les")) return "A";
		if (r.n(-1,0,"syndical")) return "A";
		if (r.w=="présente" && r.n(1,1,"PONCT") && r.n(2,1,"D")) return "A";
		if (r.w=="chargé" && r.n(1,0,"de") && r.n(2,0,"l'")) return "A";
		if (r.w=="défini" && r.n(1,1,"PONCT")) return "A";
		if (r.w=="précise" && r.n(-2,0,"une")) return "A";
		if (r.s(-4,"vÃ©e")) return "A";
		if (r.w=="satisfait" && r.n(1,1,"PONCT")) return "A";
		if (r.n(-1,0,"la") && r.n(1,0,"qu'")) return "N";
		if (r.w=="retenue" && r.n(-1,1,"D")) return "N";
		if (r.n(-1,0,"Michel")) return "N";
		if (r.w=="invité" && r.n(-1,1,"PONCT")) return "N";
		if (r.w=="blessés" && r.n(-1,1,"D") && r.n(1,1,"PONCT")) return "N";
		if (r.w=="prises" && r.n(-1,1,"D") && r.n(1,1,"P")) return "N";
		if (r.n(-1,0,"la") && r.n(1,0,"(")) return "N";
		if (r.n(-1,0,"Une")) return "N";
		if (r.n(-1,0,"Le")) return "N";
		if (r.n(-1,0,"le") && r.n(1,0,"du")) return "N";
		if (r.w=="conserve" && r.n(1,0,",")) return "N";
		if (r.n(-1,0,"l'") && r.n(1,0,"des")) return "N";
		if (r.n(-1,0,"M.")) return "N";
		if (r.n(-1,0,"quelques")) {
			if (r.s(-2,"us")) return "A";
			return "N";
		}
		if (r.w=="voici" && r.n(-1,1,"V")) return "P";
		return "V";
	}
	if (r.t=="ET") return "ET";
	if (r.t=="PONCT") {
		if (r.w=="-" && r.n(2,0,"%")) {
			if (r.w=="-" && r.n(-1,1,"N")) return "PONCT";
			if (r.w=="-" && r.n(-2,0,"lundi")) return "ADV";
			if (r.w=="-" && r.n(1,0,"0-,-4") && r.n(2,0,"%")) return "ADV";
			if (r.w=="-" && r.n(1,0,"9")) return "ADV";
			if (r.n(-2,0,"francs")) return "ADV";
			if (r.n(-1,1,"A")) return "PONCT";
			return "P";
		}
		if (r.w=="/" && r.n(-1,0,"km")) return "C";
		if (r.w=="/" && r.n(1,0,"jour")) return "P";
		if (r.n(-1,0,"bls")) return "P";
		return "PONCT";
	}
	return false;
};