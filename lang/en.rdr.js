/**
 * File Generated From data/pos/english.rdr at Sun Jan 24 2016 12:56:12 GMT+0100 (Paris, Madrid)
 * by Lets-Talk engine : https://github.com/ichiriac/lets-talk
 * Licensed under MIT by Ioan CHIRIAC
 * Based on the great work of Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham
 */
module.exports = function(r) {
	if (r.t=="PRP$") {
		if (r.n(1,1,"IN")) return "PRP";
		if (r.w=="her" && r.n(1,1,",")) return "PRP";
		if (r.w=="her" && r.n(1,1,".")) return "PRP";
		if (r.w=="her" && r.n(1,0,"to")) return "PRP";
		if (r.w=="her" && r.n(1,1,"DT")) return "PRP";
		if (r.w=="her" && r.n(1,1,"RP")) return "PRP";
		if (r.n(1,0,"and")) return "PRP";
		return "PRP$";
	}
	if (r.t=="VBG") {
		if (r.n(1,0,"of")) {
			if (r.w=="consisting") return "VBG";
			if (r.w=="disposing" && r.n(1,1,"IN")) return "VBG";
			if (r.n(2,1,"VBG")) return "VBG";
			if (r.n(-2,1,"IN") && r.n(-1,1,"NN")) return "VBG";
			if (r.n(2,0,"its")) return "VBG";
			return "NN";
		}
		if (r.n(-1,1,"JJ")) {
			if (r.n(-1,0,"busy")) return "VBG";
			if (r.n(-2,0,"and") && r.n(-1,0,"other")) return "VBG";
			if (r.n(-1,0,"further") && r.n(1,0,"the")) return "VBG";
			if (r.n(-1,1,"JJ") && r.n(1,1,"PRP$")) return "VBG";
			if (r.n(-1,1,"JJ") && r.n(1,1,"JJ")) return "VBG";
			if (r.w=="managing" && r.n(-1,1,"JJ")) return "VBG";
			if (r.n(-1,0,"many")) return "VBG";
			if (r.n(-1,0,"several")) return "VBG";
			if (r.w=="operating" && r.n(1,0,"systems")) return "VBG";
			if (r.n(-2,0,"is")) return "VBG";
			if (r.w=="holding" && r.n(-2,0,"a")) return "VBG";
			if (r.w=="remaining") {
				if (r.w=="remaining" && r.n(-2,0,"the")) return "JJ";
				return "VBG";
			}
			if (r.w=="holding" && r.n(-2,1,"JJ") && r.n(-1,1,"JJ")) return "VBG";
			if (r.w=="working" && r.n(-1,1,"JJ") && r.n(1,1,"NN")) return "JJ";
			if (r.w=="trying" && r.n(1,1,"TO")) return "VBG";
			if (r.w=="operating" && r.n(1,0,"unit")) return "VBG";
			if (r.w=="being" && r.n(-1,1,"JJ")) return "VBG";
			if (r.w=="easing" && r.n(1,1,"IN") && r.n(2,1,"NNP")) return "VBG";
			if (r.w=="going" && r.n(-1,1,"JJ")) return "VBG";
			if (r.w=="operating" && r.n(1,1,"NN") && r.n(2,1,"MD")) return "VBG";
			if (r.w=="existing" && r.n(-1,1,"JJ") && r.n(1,1,"NNS")) return "VBG";
			if (r.n(1,1,"NN") && r.n(2,1,"NNS")) return "VBG";
			if (r.n(1,0,"up")) return "VBG";
			if (r.n(2,0,"from")) return "VBG";
			if (r.n(1,0,"group")) return "VBG";
			if (r.w=="generating" && r.n(-1,1,"JJ")) return "VBG";
			if (r.n(-1,0,"worth") && r.n(1,0,"for")) return "VBG";
			if (r.w=="rolling" && r.n(-1,1,"JJ")) return "VBG";
			if (r.n(-2,0,"n't")) return "VBG";
			if (r.w=="pending" && r.n(-1,1,"JJ")) return "VBG";
			if (r.n(2,0,"is")) return "JJ";
			return "NN";
		}
		if (r.w=="operating" && r.n(1,1,"NN")) {
			if (r.n(-1,0,"the")) return "VBG";
			if (r.w=="operating" && r.n(-1,0,"reported")) return "VBG";
			return "NN";
		}
		if (r.w=="selling" && r.n(-1,1,"DT")) return "NN";
		if (r.n(-1,1,"NN") && r.n(1,1,".")) {
			if (r.n(-1,0,"time") && r.n(1,0,".")) return "VBG";
			if (r.n(-2,1,"PRP$")) return "VBG";
			if (r.n(-2,0,"the")) return "VBG";
			return "NN";
		}
		if (r.w=="operating" && r.n(1,1,"NNS")) {
			if (r.n(2,1,"TO")) return "VBG";
			if (r.n(2,0,"of")) return "VBG";
			if (r.n(-2,1,"NN")) return "VBG";
			return "NN";
		}
		if (r.n(-1,1,"DT") && r.n(1,1,".")) return "NN";
		if (r.n(-1,1,"DT") && r.n(1,1,"IN")) {
			if (r.n(-1,0,"those")) return "VBG";
			return "NN";
		}
		if (r.n(1,1,",") && r.n(2,1,"NN")) return "NN";
		if (r.w=="selling" && r.n(2,0,"the")) return "NN";
		if (r.n(-1,1,"DT") && r.n(1,1,",")) {
			if (r.n(2,1,"JJ")) return "VBG";
			return "NN";
		}
		if (r.w=="following" && r.n(-1,1,"DT")) {
			if (r.n(-2,1,"CC")) return "VBG";
			if (r.w=="following" && r.n(2,0,",")) return "VBG";
			return "JJ";
		}
		if (r.w=="shipping" && r.n(1,1,"NNS")) return "NN";
		if (r.n(-1,1,"NN") && r.n(1,1,"VBZ")) return "NN";
		if (r.n(-1,1,"IN") && r.n(1,1,"VBZ")) return "NN";
		if (r.w=="buying" && r.n(1,1,"VBD")) return "NN";
		if (r.n(1,0,"managers") && r.n(2,0,"'")) return "NN";
		if (r.w=="playing" && r.n(1,0,"field")) return "NN";
		if (r.w=="buying" && r.n(1,1,"IN")) {
			if (r.n(-2,1,"VBN")) return "VBG";
			return "NN";
		}
		if (r.w=="coming" && r.n(1,1,"NNS") && r.n(2,1,",")) return "JJ";
		if (r.n(-2,1,"VBD") && r.n(-1,1,"PRP$")) return "NN";
		if (r.w=="recruiting" && r.n(-1,1,"DT")) return "NN";
		if (r.w=="living" && r.n(-1,1,"IN")) return "NN";
		if (r.w=="making" && r.n(-1,0,"policy")) return "NN";
		if (r.w=="raising" && r.n(-1,0,"fund")) return "NN";
		if (r.w=="holding" && r.n(-2,1,"CD") && r.n(-1,1,"NN")) return "NN";
		if (r.n(-2,0,"was") && r.n(-1,0,"a")) return "JJ";
		if (r.n(-1,0,"very")) return "JJ";
		if (r.w=="matching" && r.n(1,1,"NNS") && r.n(2,1,"IN")) return "JJ";
		if (r.n(-1,1,"PRP$") && r.n(1,1,"CC")) return "NN";
		if (r.w=="holding" && r.n(1,0,".") && r.n(2,0,"")) return "NN";
		if (r.n(1,1,"CC") && r.n(2,1,"JJ")) {
			if (r.n(-1,1,"VBZ")) return "VBG";
			if (r.n(-2,1,"JJ")) return "JJ";
			return "NN";
		}
		if (r.w=="gathering" && r.n(1,0,",")) return "NN";
		if (r.w=="shipping" && r.n(-1,0,",")) return "NN";
		if (r.n(1,0,"group")) return "NN";
		if (r.w=="Buying" && r.n(-1,1,"") && r.n(1,1,"NN")) return "NN";
		if (r.n(1,0,"point")) return "NN";
		if (r.w=="finding" && r.n(-1,1,"DT")) return "NN";
		if (r.w=="weakening" && r.n(-1,1,"DT") && r.n(1,1,"NN")) return "NN";
		if (r.n(-2,0,"if")) return "NN";
		if (r.w=="selling" && r.n(-1,1,"NN") && r.n(1,1,"IN")) return "NN";
		if (r.n(1,0,"at") && r.n(2,0,"its")) return "NN";
		if (r.w=="clearing" && r.n(1,1,"NNS")) return "NN";
		if (r.n(-2,0,"``") && r.n(-1,0,"The")) return "NN";
		if (r.w=="working" && r.n(-1,0,"a")) return "NN";
		if (r.n(-1,1,"JJR") && r.n(1,1,"NN")) return "NN";
		if (r.w=="buying" && r.n(-1,1,"NN") && r.n(1,1,",")) return "NN";
		if (r.n(-1,1,"NNP") && r.n(1,1,"VBZ")) return "NN";
		if (r.w=="acting" && r.n(1,1,"NN")) return "JJ";
		if (r.n(-1,0,"most")) {
			if (r.n(-2,1,"IN") && r.n(-1,1,"JJS")) return "VBG";
			return "JJ";
		}
		if (r.n(-1,0,"as") && r.n(1,0,"as")) return "JJ";
		if (r.w=="underlying" && r.n(-2,0,"of") && r.n(-1,0,"the")) return "JJ";
		if (r.w=="coming" && r.n(1,1,"NN") && r.n(2,1,"IN")) return "JJ";
		if (r.w=="underlying" && r.n(1,0,"bill")) return "JJ";
		if (r.n(-2,0,"as") && r.n(-1,0,"a")) {
			if (r.n(2,0,"of")) return "VBG";
			return "JJ";
		}
		if (r.w=="rolling" && r.n(1,0,"bearings")) return "JJ";
		return "VBG";
	}
	if (r.t=="VBD") {
		if (r.n(-1,1,"VBZ")) {
			if (r.w=="were" && r.n(-1,1,"VBZ")) return "VBD";
			if (r.w=="was" && r.n(-1,1,"VBZ")) return "VBD";
			if (r.w=="got") return "VBD";
			if (r.w=="said" && r.n(1,0,"the")) return "VBD";
			if (r.w=="added" && r.n(1,1,"NN") && r.n(2,1,"IN")) return "JJ";
			if (r.w=="had" && r.n(-1,0,"has") && r.n(1,0,"to")) return "VBD";
			if (r.w=="said" && r.n(1,1,"IN") && r.n(2,1,"PRP$")) return "VBD";
			if (r.w=="said" && r.n(2,0,"'s")) return "VBD";
			if (r.w=="had" && r.n(-1,0,"has") && r.n(1,0,"an")) return "VBD";
			if (r.n(-2,0,"Union")) return "VBD";
			if (r.w=="had" && r.n(-1,0,"has") && r.n(1,0,"its")) return "VBD";
			return "VBN";
		}
		if (r.n(-1,1,"VBP")) {
			if (r.w=="was") return "VBD";
			if (r.w=="had" && r.n(-2,0,"We")) return "VBD";
			if (r.w=="had" && r.n(-2,0,"I") && r.n(-1,0,"'ve")) return "VBD";
			if (r.w=="said" && r.n(-1,1,"VBP") && r.n(1,1,"NNP")) return "VBD";
			if (r.w=="said" && r.n(1,1,",") && r.n(2,1,"``")) return "VBD";
			if (r.s(-3,"ere")) return "VBD";
			if (r.w=="said" && r.n(1,1,"IN") && r.n(2,1,"NNS")) return "VBD";
			return "VBN";
		}
		if (r.n(-1,1,"VBD")) {
			if (r.w=="was" && r.n(-1,1,"VBD")) return "VBD";
			if (r.s(-3,"ere")) return "VBD";
			if (r.w=="had" && r.n(1,0,"been")) return "VBD";
			if (r.n(-2,0,"we")) return "VBD";
			if (r.n(-2,0,"he") && r.n(-1,0,"said")) return "VBD";
			return "VBN";
		}
		if (r.n(-1,0,"be")) return "VBN";
		if (r.n(-2,0,"has")) {
			if (r.w=="had" && r.n(1,0,"a")) return "VBD";
			if (r.n(-1,0,"n't") && r.n(1,0,"his")) return "VBD";
			return "VBN";
		}
		if (r.n(-2,0,"have")) {
			if (r.n(-1,0,"all") && r.n(1,0,"to")) return "VBD";
			if (r.w=="had" && r.n(-1,1,"VBN")) return "VBD";
			if (r.w=="had" && r.n(-2,0,"have") && r.n(-1,0,"n't")) return "VBD";
			return "VBN";
		}
		if (r.n(1,0,"by")) {
			if (r.s(-3,"ell")) return "VBD";
			if (r.n(2,1,"RB")) return "VBD";
			if (r.n(1,1,"IN") && r.n(2,1,"$")) return "VBD";
			if (r.w=="responded" && r.n(1,1,"IN")) return "VBD";
			if (r.w=="declined" && r.n(1,1,"IN") && r.n(2,1,"CD")) return "VBD";
			if (r.s(-3,"ose")) return "VBD";
			if (r.w=="declined" && r.n(-1,0,"earnings") && r.n(1,0,"by")) return "VBD";
			if (r.s(-3,"gan")) return "VBD";
			if (r.n(2,0,"5")) return "VBD";
			if (r.w=="stopped") return "VBD";
			if (r.n(-2,1,"IN") && r.n(-1,1,"VBG")) return "VBD";
			return "VBN";
		}
		if (r.n(-2,1,"VBD") && r.n(-1,1,"RB")) return "VBN";
		if (r.n(-1,0,"the")) {
			if (r.s(-4,"")) {
				if (r.s(-2,"st")) return "JJ";
				return "NN";
			}
			if (r.s(-3,"ced")) return "JJ";
			if (r.w=="wound" && r.n(-1,0,"the")) return "NN";
			if (r.n(-2,0,"with")) return "JJ";
			if (r.s(-3,"ned")) return "JJ";
			if (r.n(-2,0,"over") && r.n(-1,0,"the")) return "JJ";
			return "VBN";
		}
		if (r.w=="ended" && r.n(1,1,"NNP") && r.n(2,1,"CD")) {
			if (r.n(2,0,"13")) return "VBD";
			if (r.w=="ended" && r.n(-2,0,",")) return "VBD";
			if (r.n(-2,0,"third")) return "VBD";
			if (r.n(-2,0,"12")) return "VBD";
			return "VBN";
		}
		if (r.n(-1,0,"been")) return "VBN";
		if (r.n(-2,1,"VBP") && r.n(-1,1,"RB")) return "VBN";
		if (r.w=="announced" && r.n(-1,0,"previously")) return "VBN";
		if (r.n(-1,0,"a")) {
			if (r.s(-4,"")) return "NN";
			if (r.n(-2,1,"VBG") && r.n(-1,1,"DT")) return "JJ";
			return "VBN";
		}
		if (r.n(-2,0,"is")) {
			if (r.n(1,0,"n't")) return "VBD";
			return "VBN";
		}
		if (r.n(-1,0,"an")) {
			if (r.w=="added" && r.n(-2,1,"IN") && r.n(-1,1,"DT")) return "VBN";
			return "JJ";
		}
		if (r.n(-2,0,"n't")) {
			if (r.s(-4,"")) return "VBD";
			return "VBN";
		}
		if (r.w=="continued" && r.n(1,1,"NN")) {
			if (r.w=="continued" && r.n(-1,1,"``") && r.n(1,1,"NN")) return "VBN";
			if (r.n(1,0,"use")) return "VBN";
			if (r.w=="continued" && r.n(1,1,"NN") && r.n(2,1,"NN")) return "VBN";
			if (r.w=="continued" && r.n(1,0,"yesterday")) return "VBD";
			return "JJ";
		}
		if (r.w=="reported" && r.n(-1,0,"previously")) {
			if (r.n(-2,1,"NNP") && r.n(-1,1,"RB")) return "VBD";
			return "VBN";
		}
		if (r.n(-1,0,"to")) return "VB";
		if (r.n(-2,1,",") && r.n(-1,1,"VBG")) return "VBN";
		if (r.w=="ordered" && r.n(1,1,"TO")) return "VBN";
		if (r.w=="included" && r.n(1,0,"in")) return "VBN";
		if (r.n(-2,0,"12") && r.n(-1,0,"months")) return "VBN";
		if (r.w=="advanced" && r.n(1,1,"NN")) return "JJ";
		if (r.n(-1,1,"MD")) {
			if (r.n(-1,0,"'d")) return "VBN";
			if (r.n(1,0,"to") && r.n(2,0,"reduce")) return "VBD";
			return "VB";
		}
		if (r.w=="hit" && r.n(-1,1,"JJ")) return "NN";
		if (r.w=="contained" && r.n(1,1,"IN")) return "VBN";
		if (r.w=="lost" && r.n(1,1,"IN") && r.n(2,1,"DT")) {
			if (r.n(-1,1,"PRP") && r.n(1,1,"IN")) return "VBD";
			return "VBN";
		}
		if (r.w=="asked" && r.n(-1,1,"CD")) return "VBN";
		if (r.w=="advanced" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="thought" && r.n(-1,1,"JJ")) return "NN";
		if (r.n(-2,0,"be")) {
			if (r.n(2,1,"IN")) return "VBD";
			return "VBN";
		}
		if (r.w=="expressed" && r.n(1,1,"IN")) return "VBN";
		if (r.w=="signed" && r.n(1,1,"IN") && r.n(2,1,"DT")) return "VBN";
		if (r.w=="continued" && r.n(1,1,"NNS")) return "VBN";
		if (r.n(-1,1,"PRP$") && r.n(1,1,"NN")) {
			if (r.n(2,0,"is")) return "JJ";
			return "VBN";
		}
		if (r.w=="reported" && r.n(1,0,"for")) return "VBN";
		if (r.w=="thought" && r.n(1,1,"TO")) return "VBN";
		if (r.w=="earned" && r.n(1,1,"IN")) return "VBN";
		if (r.n(-2,1,"PRP") && r.n(-1,1,"POS")) return "VBN";
		if (r.n(-1,0,"for")) {
			if (r.n(-2,1,"NN")) return "JJ";
			return "VBN";
		}
		if (r.n(-2,1,"") && r.n(-1,1,"IN")) return "VBN";
		if (r.n(-2,0,"") && r.n(-1,0,"The")) return "VBN";
		if (r.n(-2,0,"had")) return "VBN";
		if (r.w=="reflected" && r.n(1,0,"in")) return "VBN";
		if (r.w=="spent" && r.n(1,0,"on")) return "VBN";
		if (r.n(-1,0,"of")) {
			if (r.n(-1,1,"IN") && r.n(1,1,"NN")) return "VBN";
			if (r.w=="thought" && r.n(-1,1,"IN") && r.n(1,1,"CC")) return "NN";
			return "JJ";
		}
		if (r.n(-2,1,"MD")) return "VB";
		if (r.w=="added" && r.n(1,1,"NN") && r.n(2,1,".")) return "VBN";
		if (r.w=="noted" && r.n(-1,1,"WRB") && r.n(1,1,",")) return "VBN";
		if (r.w=="continued" && r.n(-1,1,"NNS") && r.n(1,1,"IN")) return "VBN";
		if (r.w=="reported" && r.n(1,0,"in") && r.n(2,0,"the")) return "VBN";
		if (r.n(-1,0,"first") && r.n(1,0,"in")) return "VBN";
		if (r.w=="added" && r.n(-1,1,"NN") && r.n(1,1,"TO")) return "VBN";
		if (r.w=="sent" && r.n(-1,1,"NN") && r.n(1,1,"TO")) return "VBN";
		if (r.n(-2,1,"NN") && r.n(-1,1,"POS")) return "VBN";
		if (r.n(-2,0,"") && r.n(-1,0,"Having")) return "VBN";
		if (r.w=="bought" && r.n(-1,0,"shares")) return "VBN";
		if (r.w=="attributed" && r.n(1,0,"to")) return "VBN";
		if (r.w=="raised" && r.n(-1,0,"being")) return "VBN";
		if (r.w=="found" && r.n(1,0,"in")) return "VBN";
		if (r.n(-1,0,"from")) return "VBN";
		if (r.w=="raised" && r.n(1,0,"in")) return "VBN";
		return "VBD";
	}
	if (r.t=="``") return "``";
	if (r.t=="VBN") {
		if (r.n(-1,1,"NNP")) {
			if (r.w=="OFFERED" && r.n(-2,1,"NNP") && r.n(-1,1,"NNP")) return "VBN";
			if (r.s(-2,"en")) return "VBN";
			if (r.n(-2,1,"CD")) return "VBN";
			if (r.w=="made" && r.n(-1,1,"NNP") && r.n(1,1,"IN")) return "VBN";
			if (r.w=="set" && r.n(-2,0,"the")) return "NN";
			if (r.w=="based" && r.n(-1,1,"NNP") && r.n(1,1,"IN")) return "VBN";
			if (r.w=="owned" && r.n(1,0,"by")) return "VBN";
			if (r.n(1,0,"shortly")) return "VBN";
			if (r.w=="valued" && r.n(1,0,"at")) return "VBN";
			if (r.n(2,0,"last")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"PRP")) {
			if (r.w=="set" && r.n(-1,0,"they")) return "VBP";
			if (r.n(-1,0,"them")) return "VBN";
			if (r.s(-2,"en")) return "VBN";
			if (r.n(-2,0,"get") && r.n(-1,0,"it")) return "VBN";
			if (r.s(-4,"nown")) return "VBN";
			if (r.n(-2,0,"finds") && r.n(-1,0,"itself")) return "VBN";
			if (r.n(-1,0,"him")) return "VBN";
			if (r.n(-1,0,"himself")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"DT")) {
			if (r.w=="called" && r.n(-1,0,"something") && r.n(1,0,"the")) return "VBN";
			if (r.s(-2,"en")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"WP")) return "VBD";
		if (r.n(-1,1,"NNS") && r.n(1,1,"DT")) {
			if (r.n(1,0,"each") && r.n(2,0,"year")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,0,"that")) {
			if (r.n(-2,1,"VBD") && r.n(-1,1,"IN")) return "VBN";
			if (r.n(1,1,"IN") && r.n(2,1,"$")) return "VBN";
			if (r.n(-2,0,"and")) return "VBN";
			if (r.w=="changed" && r.n(1,1,"NNS") && r.n(2,1,",")) return "VBN";
			if (r.s(-2,"en")) return "VBN";
			if (r.s(-4,"ined")) return "VBN";
			if (r.w=="damaged") return "VBN";
			if (r.s(-4,"ched")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,",") && r.n(1,1,"DT")) {
			if (r.w=="given") return "VBN";
			if (r.w=="considered" && r.n(1,0,"the")) return "VBN";
			return "VBD";
		}
		if (r.n(-2,1,"NNP") && r.n(-1,1,"RB")) {
			if (r.n(1,0,"by")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"WDT")) return "VBD";
		if (r.n(-2,1,"PRP") && r.n(-1,1,"RB")) {
			if (r.w=="been" && r.n(-2,0,"it")) return "VBN";
			return "VBD";
		}
		if (r.n(-2,0,"The")) {
			if (r.n(-1,1,"RB")) return "VBN";
			if (r.s(-4,"cted")) return "VBN";
			if (r.n(1,1,"IN") && r.n(2,1,"CD")) return "VBN";
			if (r.w=="estimated" && r.n(2,0,"the")) return "VBN";
			return "VBD";
		}
		if (r.w=="increased" && r.n(1,1,"CD")) return "VBD";
		if (r.n(-1,1,"NN") && r.n(1,1,"JJ")) {
			if (r.n(2,1,"TO")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"CC") && r.n(1,1,"DT")) {
			if (r.s(-2,"en")) return "VBN";
			if (r.w=="set" && r.n(1,1,"DT") && r.n(2,1,"NN")) return "VB";
			if (r.n(-2,0,"stocks") && r.n(-1,0,"and")) return "VBP";
			return "VBD";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"PRP$")) return "VBD";
		if (r.n(-1,1,"TO")) {
			if (r.s(-3,"sed")) return "VBN";
			if (r.s(-3,"ned")) return "VBN";
			if (r.s(-3,"ted")) {
				if (r.n(-2,1,"NNS") && r.n(-1,1,"TO")) return "JJ";
				return "VBN";
			}
			if (r.s(-3,"ved")) return "VBN";
			if (r.n(2,1,"VBN")) return "JJ";
			return "VB";
		}
		if (r.n(-2,1,"NN") && r.n(-1,1,"RB")) {
			if (r.n(1,0,"by")) return "VBN";
			if (r.n(1,0,"in")) return "VBN";
			if (r.n(-1,0,"ever")) return "VBN";
			if (r.n(1,0,"at")) return "VBN";
			if (r.n(-2,0,"%")) return "VBN";
			if (r.n(1,0,"for") && r.n(2,0,"the")) return "VBN";
			if (r.w=="used" && r.n(-1,0,"once") && r.n(1,0,"to")) return "VBN";
			if (r.n(1,0,"to") && r.n(2,0,"the")) return "VBN";
			if (r.s(-2,"en")) return "VBN";
			if (r.w=="considered" && r.n(-1,1,"RB")) return "VBN";
			if (r.n(-1,0,"already") && r.n(1,0,"to")) return "VBN";
			if (r.n(2,1,"VBZ")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"NNS")) return "VBD";
		if (r.n(-2,0,",") && r.n(-1,0,"and")) {
			if (r.n(-1,0,"and") && r.n(1,0,"with")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNPS")) {
			if (r.n(2,0,"World")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"NN")) {
			if (r.s(-4,"ured")) return "JJ";
			if (r.n(2,1,"CC")) return "VBN";
			if (r.w=="called" && r.n(-2,0,"a")) return "VBN";
			if (r.n(1,0,"yesterday") && r.n(2,0,"by")) return "VBN";
			if (r.n(-2,1,"TO")) return "VBN";
			if (r.n(-2,1,"VBG") && r.n(-1,1,"NN")) return "VBN";
			if (r.n(-2,1,"VBN")) return "VBN";
			if (r.w=="listed" && r.n(-2,0,"the") && r.n(-1,0,"closing")) return "JJ";
			return "VBD";
		}
		if (r.n(-1,1,"MD")) {
			if (r.n(-1,0,"'d")) return "VBN";
			return "VB";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"PRP")) return "VBD";
		if (r.n(-1,1,",") && r.n(1,1,"PRP$")) return "VBD";
		if (r.n(-1,1,"NNS") && r.n(1,1,"PRP$")) return "VBD";
		if (r.n(-1,1,"NN") && r.n(1,1,"CD")) return "VBD";
		if (r.n(-1,1,"NNS") && r.n(1,1,"NN")) {
			if (r.w=="called" && r.n(-2,1,"JJ") && r.n(-1,1,"NNS")) return "VBN";
			if (r.w=="released" && r.n(1,0,"yesterday")) return "VBN";
			if (r.n(-1,0,"companies")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"JJ")) {
			if (r.n(2,0,"week")) return "VBN";
			if (r.s(-2,"en")) return "VBN";
			if (r.n(1,0,"full")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"NNP")) {
			if (r.w=="called" && r.n(-1,1,"NNS") && r.n(1,1,"NNP")) return "VBN";
			if (r.w=="issued" && r.n(-1,1,"NNS") && r.n(1,1,"NNP")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"PRP")) return "VBD";
		if (r.w=="set" && r.n(1,0,"of")) return "NN";
		if (r.n(-1,1,"CC") && r.n(1,1,"PRP")) return "VBD";
		if (r.w=="increased" && r.n(-1,1,"NNS")) {
			if (r.w=="increased" && r.n(1,1,"IN") && r.n(2,1,"CD")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"DT") && r.n(1,1,"DT")) return "VBD";
		if (r.n(-1,0,"more")) {
			if (r.s(-4,"fied")) return "VBN";
			if (r.n(-2,1,"NNP")) return "VBN";
			return "JJ";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"RP")) {
			if (r.n(-2,1,"PRP$")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"JJR")) return "VBD";
		if (r.n(-2,1,"NNP") && r.n(-1,1,"JJ")) return "VBD";
		if (r.n(-1,1,"CC") && r.n(1,1,"PRP$")) return "VBD";
		if (r.n(-1,1,"CC") && r.n(1,1,"NNP")) return "VBD";
		if (r.n(-1,1,"NN") && r.n(1,1,"RP")) {
			if (r.n(1,0,"out") && r.n(2,0,"by")) return "VBN";
			if (r.n(2,1,"RB")) return "VBN";
			if (r.n(1,0,"up") && r.n(2,0,"for")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"CD") && r.n(1,1,"DT")) return "VBD";
		if (r.n(-2,1,"WP") && r.n(-1,1,"RB")) return "VBD";
		if (r.w=="expected" && r.n(-2,0,"at")) return "JJ";
		if (r.w=="increased" && r.n(-1,1,"NN")) return "VBD";
		if (r.n(-1,1,",") && r.n(1,1,"PRP")) {
			if (r.w=="provided" && r.n(-1,1,",")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"CD")) {
			if (r.w=="aged" && r.n(1,1,"CD")) return "VBN";
			if (r.s(-4,"ated")) return "JJ";
			return "VBD";
		}
		if (r.n(-1,0,"government")) return "VBD";
		if (r.n(-2,1,"MD") && r.n(-1,1,"RB")) return "VB";
		if (r.n(-2,1,"WDT") && r.n(-1,1,"RB")) return "VBD";
		if (r.n(-1,1,",") && r.n(1,1,"CD")) return "VBD";
		if (r.n(-2,0,"the") && r.n(-1,0,"company")) return "VBD";
		if (r.n(-2,1,"POS") && r.n(-1,1,"NNS")) return "VBD";
		if (r.n(-1,1,"NNS") && r.n(1,1,"$")) return "VBD";
		if (r.n(-1,1,"VB") && r.n(1,1,"NNS")) {
			if (r.s(-3,"red")) return "VBN";
			return "JJ";
		}
		if (r.w=="insured" && r.n(1,1,"NNS")) return "JJ";
		if (r.n(-1,1,"NN") && r.n(1,1,"$")) return "VBD";
		if (r.n(-2,1,".")) return "VBD";
		if (r.w=="estimated" && r.n(1,0,"that")) {
			if (r.n(-2,1,"PRP")) return "VBN";
			if (r.w=="estimated" && r.n(-1,1,"VBP") && r.n(1,1,"IN")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,",") && r.n(1,1,"RP")) {
			if (r.n(2,0,"in")) return "VBN";
			return "VBD";
		}
		if (r.w=="proposed" && r.n(-1,0,",")) {
			if (r.n(1,0,"by")) return "VBN";
			return "VBD";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"VBG")) return "VBD";
		if (r.w=="alleged" && r.n(1,1,"JJ")) return "JJ";
		if (r.w=="required" && r.n(-1,1,"DT") && r.n(1,1,"NN")) return "JJ";
		if (r.w=="merged" && r.n(-1,1,"DT") && r.n(1,1,"NN")) return "JJ";
		if (r.n(-2,1,"NNP") && r.n(-1,1,"``")) return "VBD";
		if (r.n(-1,0,"also") && r.n(1,0,"the")) return "VBD";
		if (r.n(-1,0,"court")) return "VBD";
		if (r.n(-1,0,"others")) return "VBD";
		if (r.n(-1,0,"and") && r.n(1,0,"at")) return "VBD";
		if (r.w=="led" && r.n(-1,1,"NN") && r.n(1,1,"TO")) return "VBD";
		if (r.n(-2,1,":") && r.n(-1,1,"CC")) return "VBD";
		if (r.n(1,0,"down") && r.n(2,0,"the")) return "VBD";
		if (r.n(-1,0,"family")) return "VBD";
		if (r.w=="reduced" && r.n(-1,0,"and")) return "JJ";
		if (r.w=="held" && r.n(1,1,"NN") && r.n(2,1,"IN")) return "JJ";
		if (r.n(-2,0,"of") && r.n(-1,0,"a")) return "JJ";
		if (r.w=="extended" && r.n(1,1,"NN")) return "JJ";
		if (r.n(-1,0,"remains") && r.n(1,0,"to")) return "JJ";
		if (r.w=="proposed" && r.n(1,0,"acquisition")) return "JJ";
		if (r.n(-2,0,"million") && r.n(-1,0,"of")) return "JJ";
		if (r.w=="proven" && r.n(-1,0,"with")) return "JJ";
		if (r.n(-2,0,"In") && r.n(-1,0,"a")) return "JJ";
		if (r.w=="expected" && r.n(1,1,"NN") && r.n(2,1,"NN")) return "JJ";
		if (r.n(-2,0,"because") && r.n(-1,0,"of")) {
			if (r.w=="prolonged" && r.n(-2,0,"because")) return "VBN";
			return "JJ";
		}
		if (r.n(-1,0,"go")) return "JJ";
		if (r.n(1,0,"area")) return "JJ";
		if (r.n(-2,0,"does") && r.n(-1,0,"n't")) return "VB";
		if (r.n(-1,0,"helped")) return "VB";
		if (r.w=="left" && r.n(-1,0,"the")) return "NN";
		if (r.w=="believed" && r.n(-1,1,"NNS") && r.n(1,1,"IN")) return "VBD";
		if (r.w=="called" && r.n(-2,1,"NNP") && r.n(-1,1,",")) return "VBD";
		if (r.n(-2,0,"however") && r.n(-1,0,",")) return "VBD";
		if (r.w=="sought" && r.n(1,1,"TO") && r.n(2,1,"VB")) return "VBD";
		if (r.w=="returned" && r.n(-1,1,"NNS")) return "VBD";
		if (r.n(-1,0,"yesterday")) return "VBD";
		if (r.n(-1,1,"NN") && r.n(1,1,"JJR")) return "VBD";
		if (r.w=="managed" && r.n(-1,1,"NNS") && r.n(1,1,"TO")) return "VBD";
		if (r.w=="caused" && r.n(1,1,"NNP")) return "VBD";
		if (r.w=="returned" && r.n(-1,1,"NN")) return "VBD";
		if (r.w=="sought" && r.n(-1,0,"and")) return "VBD";
		if (r.n(-1,0,"police")) return "VBD";
		if (r.w=="produced" && r.n(1,1,"JJ")) return "VBD";
		if (r.w=="tripled" && r.n(-1,1,"IN") && r.n(1,1,"TO")) return "VBD";
		if (r.w=="changed" && r.n(-1,1,"NN")) return "VBD";
		if (r.w=="followed" && r.n(-1,1,"NN")) return "VBD";
		if (r.w=="filed" && r.n(1,0,"for")) {
			if (r.w=="filed" && r.n(-1,1,"VBP")) return "VBN";
			return "VBD";
		}
		if (r.w=="left" && r.n(-1,0,",")) return "VBD";
		if (r.w=="offered" && r.n(-1,1,",") && r.n(1,1,"$")) return "VBD";
		if (r.w=="acquired" && r.n(-1,1,"NN")) return "VBD";
		if (r.n(-1,0,",") && r.n(1,0,"financing")) return "VBD";
		if (r.n(-1,0,"lawmakers")) return "VBD";
		if (r.n(-1,0,"traders")) return "VBD";
		if (r.w=="believed" && r.n(-1,1,",")) return "VBD";
		if (r.n(-1,0,"giant")) return "VBD";
		if (r.w=="settled" && r.n(-1,1,"NN")) return "VBD";
		if (r.w=="determined" && r.n(-1,1,"NN")) return "VBD";
		if (r.n(-1,0,"eventually")) return "VBD";
		if (r.w=="offered" && r.n(-1,1,"NN") && r.n(1,1,"TO")) return "VBD";
		if (r.w=="calculated" && r.n(-1,1,"DT")) return "JJ";
		if (r.w=="hidden" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="damaged" && r.n(-1,1,"RB") && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="related" && r.n(-1,1,"CC")) {
			if (r.n(2,0,",")) return "VBN";
			return "JJ";
		}
		if (r.n(-2,1,"VB") && r.n(-1,1,"JJR")) return "JJ";
		if (r.w=="unified" && r.n(1,1,"NN") && r.n(2,1,"IN")) return "JJ";
		if (r.w=="convinced" && r.n(-1,0,"became")) return "JJ";
		if (r.w=="scheduled" && r.n(-2,0,"before") && r.n(-1,0,"the")) return "JJ";
		if (r.w=="experienced" && r.n(-1,1,"JJS")) return "JJ";
		if (r.w=="worried" && r.n(-2,1,"PRP") && r.n(-1,1,"VBP")) return "JJ";
		if (r.n(1,0,"restructuring")) return "JJ";
		if (r.w=="improved" && r.n(-1,1,"IN") && r.n(1,1,"NNS")) return "JJ";
		if (r.n(-2,0,"that") && r.n(-1,0,"a")) return "JJ";
		if (r.w=="diminished" && r.n(1,1,"NN")) return "JJ";
		if (r.n(-1,0,"two")) return "JJ";
		if (r.w=="crowded" && r.n(1,1,"NN")) return "JJ";
		if (r.n(1,0,"nation")) return "JJ";
		if (r.n(-1,0,"so")) {
			if (r.n(-2,0,",")) return "VBN";
			return "JJ";
		}
		if (r.n(-2,0,"is") && r.n(-1,0,"the")) return "JJ";
		if (r.w=="used" && r.n(-2,0,"the") && r.n(-1,0,"widely")) return "JJ";
		if (r.n(-2,1,"JJ") && r.n(-1,1,"CC")) {
			if (r.s(-3,"red")) return "VBN";
			if (r.n(2,0,"a")) return "VBN";
			return "JJ";
		}
		if (r.w=="combined" && r.n(1,0,"companies")) return "JJ";
		if (r.n(-2,1,"VBZ") && r.n(-1,1,"PRP$")) return "JJ";
		if (r.n(-2,0,"such")) return "JJ";
		if (r.w=="retired" && r.n(1,1,"NN") && r.n(2,1,"IN")) return "JJ";
		if (r.w=="prepared" && r.n(-1,1,"RB") && r.n(1,1,"TO")) return "JJ";
		if (r.n(-2,1,"DT") && r.n(-1,1,"JJS")) {
			if (r.n(2,1,"NN")) return "VBN";
			return "JJ";
		}
		if (r.n(-1,0,"the") && r.n(1,0,",")) return "JJ";
		if (r.w=="estimated" && r.n(-2,1,"VBD") && r.n(-1,1,"DT")) return "JJ";
		if (r.n(-1,0,"little") && r.n(1,0,".")) return "JJ";
		return "VBN";
	}
	if (r.t=="POS") {
		if (r.w=="'s" && r.n(-1,1,"PRP")) return "VBZ";
		if (r.w=="'s" && r.n(1,1,"DT")) return "VBZ";
		if (r.w=="'s" && r.n(-1,0,"that")) return "VBZ";
		if (r.w=="'s" && r.n(-1,0,"That")) return "VBZ";
		if (r.w=="'s" && r.n(-1,1,"EX")) return "VBZ";
		if (r.w=="'s" && r.n(-1,1,"WP")) return "VBZ";
		if (r.n(-1,1,"NN") && r.n(1,1,"IN")) return "VBZ";
		if (r.n(1,1,"RB") && r.n(2,1,"VB")) return "PRP";
		return "POS";
	}
	if (r.t=="''") return "''";
	if (r.t=="VBP") {
		if (r.n(-1,1,"MD")) return "VB";
		if (r.n(-1,1,"TO")) return "VB";
		if (r.n(-1,0,"n't")) return "VB";
		if (r.n(-2,1,"MD")) {
			if (r.w=="are" && r.n(-2,0,"can")) return "VBP";
			return "VB";
		}
		if (r.n(-1,0,"the")) return "NN";
		if (r.n(-1,0,"not")) return "VB";
		if (r.n(-2,0,"n't")) return "VB";
		if (r.w=="need" && r.n(1,1,"IN")) {
			if (r.w=="need" && r.n(-1,1,"PRP") && r.n(1,1,"IN")) return "VBP";
			return "NN";
		}
		if (r.n(-1,0,"does")) return "VB";
		if (r.w=="say" && r.n(-1,1,",") && r.n(1,1,",")) return "VB";
		if (r.w=="say" && r.n(-1,0,"and")) return "VB";
		if (r.n(-1,0,"did")) return "VB";
		if (r.n(-1,0,"do")) return "VB";
		if (r.n(-1,0,"a")) return "NN";
		if (r.n(-2,0,"make")) return "VB";
		if (r.w=="need" && r.n(1,1,"RB") && r.n(2,1,"VB")) return "MD";
		if (r.n(-2,0,"does")) return "VB";
		if (r.n(-2,0,"Do")) return "VB";
		if (r.n(-1,1,"PRP$")) return "NN";
		if (r.n(-1,1,"POS")) return "NN";
		if (r.n(-1,1,"JJ") && r.n(1,1,".")) return "NN";
		if (r.w=="regard" && r.n(-1,1,"IN")) return "NN";
		if (r.n(-2,0,"not")) return "VB";
		if (r.n(-2,0,"do")) return "VB";
		if (r.w=="wonder" && r.n(-1,1,"DT")) return "NN";
		if (r.w=="stand" && r.n(-1,1,"VB")) return "VB";
		if (r.w=="do" && r.n(-1,1,"CC") && r.n(1,1,"DT")) return "VB";
		if (r.w=="do" && r.n(1,1,"JJR")) return "VB";
		if (r.n(1,0,"?")) return "VB";
		if (r.n(-1,0,"me")) return "VB";
		if (r.n(-2,1,"TO") && r.n(-1,1,"RB")) return "VB";
		if (r.n(-1,0,"no")) return "NN";
		if (r.n(-2,0,"a")) {
			if (r.w=="are" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "VBP";
			return "NN";
		}
		if (r.n(-1,0,"is")) return "JJ";
		if (r.w=="Am" && r.n(-1,1,"NNP") && r.n(1,1,"NNP")) return "NNP";
		return "VBP";
	}
	if (r.t=="WDT") return "WDT";
	if (r.t=="JJ") {
		if (r.n(-1,1,"DT") && r.n(1,1,"IN")) {
			if (r.w=="first" && r.n(-1,1,"DT")) return "JJ";
			if (r.s(-2,"me")) return "JJ";
			if (r.s(-3,"her")) return "JJ";
			if (r.w=="last" && r.n(1,1,"IN")) return "JJ";
			if (r.w=="third" && r.n(1,1,"IN") && r.n(2,1,"DT")) return "JJ";
			if (r.w=="few" && r.n(-1,1,"DT")) return "JJ";
			if (r.w=="fourth" && r.n(-1,1,"DT")) return "JJ";
			if (r.w=="little" && r.n(-1,0,"a")) {
				if (r.n(1,0,"for")) return "RB";
				return "JJ";
			}
			if (r.w=="high" && r.n(1,1,"IN") && r.n(2,1,"CD")) return "JJ";
			if (r.w=="third" && r.n(-2,0,"and") && r.n(-1,0,"the")) return "JJ";
			if (r.w=="poor" && r.n(-1,1,"DT") && r.n(1,1,"IN")) return "JJ";
			if (r.n(-1,0,"the") && r.n(1,0,"with")) return "JJ";
			if (r.w=="high" && r.n(2,0,"$")) return "JJ";
			if (r.w=="low" && r.n(-2,0,"from") && r.n(-1,0,"a")) return "JJ";
			if (r.n(-1,0,"those")) return "JJ";
			if (r.w=="high" && r.n(2,0,"the")) return "JJ";
			if (r.w=="third" && r.n(-2,1,"RB") && r.n(-1,1,"DT")) return "JJ";
			if (r.n(-1,0,"all")) return "JJ";
			if (r.n(-1,0,"each")) return "JJ";
			if (r.n(1,0,"by")) return "JJ";
			if (r.w=="Republican" && r.n(-1,1,"DT")) return "NNP";
			return "NN";
		}
		if (r.w=="much" && r.n(1,1,"JJR")) return "RB";
		if (r.w=="Soviet" && r.n(1,1,"NNP")) return "NNP";
		if (r.n(-1,1,"MD")) {
			if (r.n(1,1,"VB")) {
				if (r.w=="further" && r.n(-2,1,"PRP") && r.n(-1,1,"MD")) return "RBR";
				return "RB";
			}
			if (r.s(-3,"ely")) return "RB";
			if (r.s(-4,"ther")) {
				if (r.n(-1,0,"would")) return "RB";
				if (r.n(2,1,"JJ")) return "RB";
				return "RBR";
			}
			if (r.n(1,1,"NNS") && r.n(2,1,"NN")) return "JJ";
			return "VB";
		}
		if (r.w=="British" && r.n(1,1,"NNP")) {
			if (r.n(1,0,"Deloitte")) return "JJ";
			return "NNP";
		}
		if (r.n(-1,1,"JJ") && r.n(1,1,"IN")) {
			if (r.w=="such" && r.n(1,0,"as")) return "JJ";
			if (r.n(-1,0,"distant")) return "JJ";
			if (r.n(-1,0,"little")) return "JJ";
			if (r.n(-2,0,"was")) return "JJ";
			if (r.w=="low" && r.n(1,0,"of")) return "JJ";
			if (r.w=="late" && r.n(-1,1,"JJ")) return "RB";
			if (r.w=="Republican" && r.n(-1,1,"JJ") && r.n(1,1,"IN")) return "NNP";
			return "NN";
		}
		if (r.n(-1,1,"TO") && r.n(1,1,"DT")) return "VB";
		if (r.n(-1,1,"JJ") && r.n(1,1,".")) {
			if (r.w=="outstanding" && r.n(2,0,"")) return "JJ";
			if (r.s(-3,"tic")) return "JJ";
			if (r.n(-1,0,"little") && r.n(1,0,".")) return "JJ";
			if (r.w=="Republican" && r.n(1,0,".")) return "NNP";
			return "NN";
		}
		if (r.n(-1,1,"DT") && r.n(1,1,".")) {
			if (r.w=="other" && r.n(1,1,".")) return "JJ";
			if (r.s(-2,"me")) return "JJ";
			if (r.s(-3,"ese")) return "NNPS";
			if (r.w=="little" && r.n(-1,0,"a")) return "JJ";
			if (r.w=="latter" && r.n(1,1,".") && r.n(2,1,"")) return "JJ";
			if (r.w=="first" && r.n(-1,1,"DT")) return "JJ";
			if (r.s(-3,"ing")) return "JJ";
			return "NN";
		}
		if (r.n(1,1,"VBD")) {
			if (r.s(-4,"irst")) {
				if (r.n(-1,0,"at")) return "JJ";
				if (r.n(-1,1,"DT") && r.n(1,1,"VBD")) return "JJ";
				return "RB";
			}
			if (r.s(-3,"ong")) return "RB";
			if (r.s(-2,"ny")) return "JJ";
			if (r.n(-1,0,"a")) return "JJ";
			if (r.n(1,0,"hit")) return "JJ";
			if (r.n(-2,1,"NN") && r.n(-1,1,"IN")) return "JJ";
			if (r.w=="outstanding" && r.n(1,1,"VBD")) return "JJ";
			if (r.s(-3,"her")) {
				if (r.w=="further") {
					if (r.n(-1,1,"VBD")) return "RBR";
					return "RB";
				}
				return "JJ";
			}
			if (r.n(-1,1,"CC") && r.n(1,1,"VBD")) return "JJ";
			if (r.n(1,0,"thought")) return "JJ";
			if (r.w=="French") return "NNP";
			if (r.w=="Chinese" && r.n(1,1,"VBD")) return "NNP";
			if (r.n(-1,1,"RB")) {
				if (r.s(-4,"")) return "RB";
				return "JJ";
			}
			if (r.w=="few" && r.n(-1,1,",") && r.n(1,1,"VBD")) return "JJ";
			if (r.w=="general" && r.n(-1,0,"in")) return "JJ";
			if (r.w=="net" && r.n(-2,0,"Express") && r.n(-1,0,"said")) return "JJ";
			if (r.s(-2,"xt")) return "JJ";
			if (r.w=="net" && r.n(-2,0,"unit") && r.n(-1,0,",")) return "JJ";
			if (r.w=="old") return "JJ";
			if (r.s(-3,"tic")) return "JJ";
			return "NN";
		}
		if (r.w=="European" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="long" && r.n(1,1,"VBN")) return "RB";
		if (r.w=="early" && r.n(1,1,"IN")) return "RB";
		if (r.n(1,1,"POS")) {
			if (r.w=="other" && r.n(1,0,"'s")) return "JJ";
			return "NN";
		}
		if (r.n(1,0,"Airways")) return "NNP";
		if (r.w=="long" && r.n(1,1,"IN")) {
			if (r.n(1,1,"IN") && r.n(2,1,"CD")) return "JJ";
			return "RB";
		}
		if (r.w=="past" && r.n(1,0,",")) return "NN";
		if (r.n(1,0,"of") && r.n(2,0,"$")) {
			if (r.w=="net" && r.n(-2,0,"concern")) return "JJ";
			return "NN";
		}
		if (r.w=="chief" && r.n(-1,1,"NN")) return "NN";
		if (r.w=="Canadian" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="next" && r.n(-1,1,"NNS")) return "IN";
		if (r.n(-2,1,"MD") && r.n(-1,1,"RB")) return "VB";
		if (r.w=="such" && r.n(1,1,"DT")) {
			if (r.w=="such" && r.n(-1,0,"from")) return "JJ";
			if (r.w=="such" && r.n(-2,0,"been")) return "JJ";
			if (r.n(2,0,"accord")) return "JJ";
			if (r.w=="such" && r.n(-1,0,"'s") && r.n(1,0,"a")) return "JJ";
			if (r.w=="such" && r.n(-2,1,"JJ") && r.n(-1,1,"IN")) return "JJ";
			if (r.n(2,0,"great")) return "JJ";
			if (r.w=="such" && r.n(-2,0,"likelihood")) return "JJ";
			return "PDT";
		}
		if (r.w=="open" && r.n(-1,1,"TO")) return "VB";
		if (r.w=="slow" && r.n(-1,1,"TO")) return "VB";
		if (r.w=="top" && r.n(1,1,"IN")) return "NN";
		if (r.w=="early" && r.n(1,1,"DT") && r.n(2,1,"NN")) return "RB";
		if (r.n(1,0,"operating") && r.n(2,0,"officer")) return "NN";
		if (r.n(-1,1,"DT") && r.n(1,1,"MD")) {
			if (r.s(-2,"se")) return "NNPS";
			if (r.n(2,0,"take")) return "JJ";
			return "NN";
		}
		if (r.w=="light" && r.n(1,0,"of")) return "NN";
		if (r.w=="giant" && r.n(-1,1,"NN")) return "NN";
		if (r.n(-1,1,"TO") && r.n(1,1,"RP")) return "VB";
		if (r.w=="key" && r.n(1,1,"TO")) return "NN";
		if (r.w=="future" && r.n(1,0,",")) return "NN";
		if (r.n(1,0,"changed")) return "RB";
		if (r.w=="late" && r.n(1,1,"IN")) {
			if (r.w=="late" && r.n(-1,0,"until")) return "JJ";
			return "RB";
		}
		if (r.w=="own" && r.n(-1,1,"RB")) {
			if (r.w=="own" && r.n(-2,1,"NNS") && r.n(-1,1,"RB")) return "VBP";
			if (r.w=="own" && r.n(-2,1,"CC") && r.n(-1,1,"RB")) return "JJ";
			return "VB";
		}
		if (r.w=="average" && r.n(-1,0,"on")) return "NN";
		if (r.w=="chief" && r.n(1,1,"IN")) {
			if (r.w=="chief" && r.n(-1,0,"as") && r.n(1,0,"of")) return "JJ";
			return "NN";
		}
		if (r.w=="worth" && r.n(1,0,"of")) return "NN";
		if (r.n(-1,0,"attorney")) return "NN";
		if (r.w=="overseas" && r.n(-1,1,"NNS")) return "RB";
		if (r.w=="complete" && r.n(-1,0,"to")) return "VB";
		if (r.w=="much" && r.n(-1,0,"very")) {
			if (r.n(1,0,",") && r.n(2,0,"''")) return "JJ";
			return "RB";
		}
		if (r.w=="future" && r.n(1,1,".")) return "NN";
		if (r.s(-4,"stry")) {
			if (r.n(2,0,",")) return "JJ";
			return "NN";
		}
		if (r.w=="little" && r.n(1,1,"JJR") && r.n(2,1,"IN")) return "RB";
		if (r.w=="further" && r.n(1,1,"IN")) return "RBR";
		if (r.w=="Japanese" && r.n(1,1,"VBP")) {
			if (r.n(-2,1,",")) return "NNS";
			if (r.w=="Japanese" && r.n(1,1,"VBP") && r.n(2,1,"RB")) return "NNP";
			return "NNPS";
		}
		if (r.n(-2,0,"expected") && r.n(-1,0,"to")) return "VB";
		if (r.w=="net" && r.n(1,1,"IN")) return "NN";
		if (r.w=="first" && r.n(-1,1,"NN")) {
			if (r.w=="first" && r.n(-1,1,"NN") && r.n(1,1,"NN")) return "JJ";
			return "RB";
		}
		if (r.s(-4,"iest")) return "JJS";
		if (r.w=="standard" && r.n(-1,1,"NN")) return "NN";
		if (r.n(-1,0,"in") && r.n(1,0,".")) return "NN";
		if (r.w=="early" && r.n(1,0,"trading") && r.n(2,0,"in")) return "RB";
		if (r.w=="overseas" && r.n(1,0,",")) return "RB";
		if (r.w=="further" && r.n(1,0,".")) {
			if (r.w=="further" && r.n(2,0,"''")) return "RBR";
			if (r.n(-2,1,"NNS")) return "RBR";
			return "RB";
		}
		if (r.w=="hard" && r.n(1,1,"IN")) return "RB";
		if (r.n(1,0,"Airlines")) return "NNP";
		if (r.w=="limited" && r.n(1,1,"TO")) return "VBN";
		if (r.n(-1,0,"due") && r.n(1,0,",")) return "CD";
		if (r.n(-1,0,"they")) {
			if (r.s(-2,"ed")) return "VBD";
			return "VBP";
		}
		if (r.w=="excess" && r.n(-1,0,"in") && r.n(1,0,"of")) return "NN";
		if (r.w=="public" && r.n(1,1,",")) return "NN";
		if (r.w=="Net" && r.n(1,1,"IN")) return "NN";
		if (r.w=="complex" && r.n(-1,1,"NN")) return "NN";
		if (r.w=="average" && r.n(-2,0,"the")) {
			if (r.n(2,0,"of")) return "JJ";
			return "NN";
		}
		if (r.w=="likely" && r.n(1,1,"MD")) return "RB";
		if (r.w=="first" && r.n(1,1,"VBN")) {
			if (r.n(-1,1,"DT")) return "JJ";
			return "RB";
		}
		if (r.w=="Small" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Second" && r.n(-1,1,"DT")) return "NNP";
		if (r.n(-1,1,"TO") && r.n(1,1,"PRP$")) return "VB";
		if (r.w=="principal" && r.n(1,1,"CC")) return "NN";
		if (r.w=="net" && r.n(1,0,"to")) return "NN";
		if (r.w=="chief" && r.n(-1,1,"NNP")) {
			if (r.n(2,0,"officer")) return "JJ";
			return "NN";
		}
		if (r.w=="much" && r.n(1,1,"RB")) return "RB";
		if (r.w=="overseas" && r.n(-1,1,"NN")) return "RB";
		if (r.w=="Swiss" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Municipal" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="further" && r.n(1,0,",")) return "RBR";
		if (r.w=="further" && r.n(1,1,"VBN")) {
			if (r.w=="further" && r.n(-1,1,"VBN")) return "RB";
			if (r.n(-1,1,"VBD") && r.n(1,1,"VBN")) return "RB";
			return "RBR";
		}
		if (r.w=="next" && r.n(-1,1,"NN") && r.n(1,1,"NNP")) return "IN";
		if (r.n(-1,0,"Series")) return "CD";
		if (r.n(-1,1,"TO") && r.n(1,1,"PRP")) return "VB";
		if (r.n(-1,1,"NNS") && r.n(1,1,"DT")) {
			if (r.s(-2,"ed")) return "VBD";
			if (r.n(1,0,"this")) return "RB";
			return "VBP";
		}
		if (r.w=="whole" && r.n(-2,0,"as") && r.n(-1,0,"a")) return "NN";
		if (r.w=="public" && r.n(-1,1,"DT") && r.n(1,1,"VBZ")) return "NN";
		if (r.w=="long" && r.n(-1,1,"RB") && r.n(1,1,"RB")) return "RB";
		if (r.w=="little" && r.n(-1,1,"DT") && r.n(1,1,"JJ")) return "RB";
		if (r.w=="Real" && r.n(1,0,"Estate")) return "NNP";
		if (r.w=="African" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Republican" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="many" && r.n(1,0,"of") && r.n(2,0,"whom")) return "DT";
		if (r.s(-4,"duct")) return "NN";
		if (r.n(1,1,"WP") && r.n(2,1,"VBD")) {
			if (r.s(-2,"an")) return "NNP";
			return "NN";
		}
		if (r.w=="worth" && r.n(-1,1,"JJ")) return "NN";
		if (r.w=="standard" && r.n(1,1,".") && r.n(2,1,"")) return "NN";
		if (r.n(-1,1,"PRP$") && r.n(1,1,"IN")) {
			if (r.w=="own" && r.n(-1,1,"PRP$")) return "JJ";
			return "NN";
		}
		if (r.n(-1,0,"a") && r.n(1,0,"to")) return "NN";
		if (r.w=="much" && r.n(-1,0,"pretty")) return "RB";
		if (r.w=="daily" && r.n(1,0,".")) return "RB";
		if (r.w=="double" && r.n(-1,1,"RB") && r.n(1,1,"DT")) return "RB";
		if (r.w=="short" && r.n(-1,1,"VBD") && r.n(1,1,"IN")) return "RB";
		if (r.w=="Asian" && r.n(1,1,"NNP") && r.n(2,1,"NNP")) return "NNP";
		if (r.w=="Indian" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Soviet" && r.n(-1,0,"Supreme")) return "NNP";
		if (r.n(1,0,"p.m.")) return "CD";
		if (r.w=="slow" && r.n(1,1,"RB")) return "VB";
		if (r.w=="future" && r.n(1,1,"VBZ")) return "NN";
		if (r.s(-3,"car")) return "NN";
		if (r.w=="average" && r.n(1,1,"IN")) return "NN";
		if (r.w=="public" && r.n(1,1,"CC")) {
			if (r.n(1,0,"and") && r.n(2,0,"congressional")) return "JJ";
			return "NN";
		}
		if (r.w=="rival" && r.n(1,0,",")) return "NN";
		if (r.n(-1,0,"of") && r.n(1,0,".")) {
			if (r.w=="late" && r.n(1,1,".")) return "RB";
			return "NN";
		}
		if (r.w=="potential" && r.n(1,1,",")) return "NN";
		if (r.s(-4,"pany")) return "NN";
		if (r.s(-4,"-law")) return "NN";
		if (r.w=="top" && r.n(1,0,",")) return "NN";
		if (r.w=="commercial" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "NN";
		if (r.s(-4,"sion")) {
			if (r.n(-1,0,"a")) return "JJ";
			if (r.n(2,1,"VBN")) return "JJ";
			return "NN";
		}
		if (r.w=="retail" && r.n(-1,0,"its")) return "NN";
		if (r.w=="longtime" && r.n(1,1,"NNP")) return "NN";
		if (r.w=="overseas" && r.n(1,0,".")) return "RB";
		if (r.w=="downward" && r.n(-1,1,"NN")) return "RB";
		if (r.w=="late" && r.n(-1,1,"VBD") && r.n(1,1,"JJ")) return "RB";
		if (r.w=="early" && r.n(-1,1,"NNS")) return "RB";
		if (r.w=="much" && r.n(1,1,"IN") && r.n(2,1,"PRP")) {
			if (r.n(-2,0,"n't")) return "JJ";
			return "RB";
		}
		if (r.w=="likely" && r.n(-1,0,"seem") && r.n(1,0,"to")) return "RB";
		if (r.w=="further" && r.n(2,0,"the")) return "RB";
		if (r.w=="straight" && r.n(2,0,"the")) return "RB";
		if (r.w=="daily" && r.n(1,1,"IN")) return "RB";
		if (r.n(-1,1,"NNP") && r.n(1,1,"NNPS")) return "NNP";
		if (r.w=="Swedish" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Democratic" && r.n(-1,1,"NNP") && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Japanese" && r.n(1,0,",")) {
			if (r.w=="Japanese" && r.n(1,1,",") && r.n(2,1,"WP")) return "NNPS";
			return "NNP";
		}
		if (r.w=="Australian" && r.n(1,1,"NNP") && r.n(2,1,"NNP")) return "NNP";
		if (r.w=="Corporate" && r.n(-1,1,"NNP")) return "NNP";
		if (r.w=="Private" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="weighted" && r.n(1,1,"IN")) return "VBN";
		if (r.w=="pleased" && r.n(2,0,"the")) return "VBN";
		if (r.w=="preferred" && r.n(-1,1,"NN")) {
			if (r.n(2,0,"will")) return "VBD";
			return "VBN";
		}
		if (r.w=="past" && r.n(-1,1,"NN")) return "IN";
		if (r.s(-3,"000")) return "CD";
		if (r.w=="striking" && r.n(1,1,"DT") && r.n(2,1,"NN")) return "VBG";
		if (r.n(-2,1,"") && r.n(-1,1,"PRP")) return "VBD";
		if (r.n(-1,1,"NNP") && r.n(1,1,"DT")) return "VBD";
		if (r.w=="open" && r.n(-2,0,"did") && r.n(-1,0,"n't")) return "VB";
		if (r.n(1,0,"their")) return "VB";
		if (r.w=="foster" && r.n(-1,0,"to")) return "VB";
		if (r.n(1,1,"RP") && r.n(2,1,"DT")) return "VB";
		if (r.w=="total" && r.n(1,1,"$")) {
			if (r.w=="total" && r.n(-2,0,"or")) return "JJ";
			return "VBP";
		}
		if (r.n(1,1,"VBN") && r.n(2,1,"NNP")) return "NN";
		if (r.w=="total" && r.n(-2,0,"the")) return "NN";
		if (r.s(-4,"alty")) return "NN";
		if (r.n(-2,0,"instructions") && r.n(-1,0,"per")) return "NN";
		if (r.w=="light" && r.n(1,0,".") && r.n(2,0,"")) return "NN";
		if (r.n(-1,0,"investing")) return "NN";
		if (r.w=="potential" && r.n(1,0,"to")) return "NN";
		if (r.w=="red" && r.n(-2,0,"in") && r.n(-1,0,"the")) return "NN";
		if (r.w=="public" && r.n(1,1,"TO")) return "NN";
		if (r.w=="total" && r.n(1,0,"of")) return "NN";
		if (r.w=="minimum" && r.n(1,1,"NN") && r.n(2,1,"NNS")) return "NN";
		if (r.n(-1,0,"the") && r.n(1,0,")")) return "NN";
		if (r.w=="future" && r.n(1,1,"IN")) return "NN";
		if (r.w=="fellow" && r.n(1,1,",")) return "NN";
		if (r.w=="public" && r.n(-2,0,"and") && r.n(-1,0,"the")) return "NN";
		if (r.w=="principal" && r.n(-1,1,"CC")) return "NN";
		if (r.n(1,0,"is") && r.n(2,0,"a")) return "NN";
		if (r.s(-4,"ency")) return "NN";
		if (r.w=="light" && r.n(1,1,"IN") && r.n(2,1,"DT")) return "NN";
		if (r.w=="average" && r.n(1,1,"RB")) return "NN";
		if (r.w=="past" && r.n(-1,1,"JJ")) return "NN";
		if (r.w=="public" && r.n(-1,1,"DT") && r.n(1,1,"VBN")) return "NN";
		if (r.w=="savings-and-loan" && r.n(1,1,"NNS")) return "NN";
		if (r.w=="minimum" && r.n(-1,1,"VBN")) return "NN";
		if (r.n(-1,0,"a") && r.n(1,0,";")) return "NN";
		if (r.n(-1,1,"JJ") && r.n(1,1,"PRP")) return "NN";
		if (r.w=="public" && r.n(1,1,":")) return "NN";
		if (r.w=="native" && r.n(-1,1,"NNP")) return "NN";
		if (r.n(-1,0,"inspector")) return "NN";
		if (r.w=="chief" && r.n(1,1,",") && r.n(2,1,"VBD")) return "NN";
		if (r.s(-3,"rgo")) return "NN";
		if (r.w=="military" && r.n(-1,0,"the") && r.n(1,0,"and")) return "NN";
		if (r.w=="future" && r.n(2,0,"be")) return "NN";
		if (r.n(1,0,"concern") && r.n(2,0,"said")) return "NN";
		if (r.w=="second" && r.n(-1,1,"JJ") && r.n(1,1,"TO")) return "NN";
		if (r.w=="high" && r.n(-1,0,"record")) return "NN";
		if (r.w=="loan-loss" && r.n(-1,1,"PRP$")) return "NN";
		if (r.w=="contrary" && r.n(-1,1,"DT")) return "NN";
		if (r.w=="minimum" && r.n(1,0,"price")) return "NN";
		if (r.s(-3,"icy")) return "NN";
		if (r.s(-3,"ser")) return "NN";
		if (r.w=="standard" && r.n(1,0,",")) return "NN";
		if (r.w=="potential" && r.n(1,1,"IN")) return "NN";
		if (r.n(-1,1,"PRP") && r.n(1,1,"VBZ")) return "RB";
		if (r.w=="first" && r.n(-1,1,"NNS")) return "RB";
		if (r.w=="long" && r.n(1,0,",")) return "RB";
		if (r.w=="due" && r.n(2,0,"1992")) return "RB";
		if (r.w=="long" && r.n(2,0,"")) return "RB";
		if (r.w=="long" && r.n(1,1,"JJ") && r.n(2,1,"TO")) return "RB";
		if (r.w=="little" && r.n(-1,1,"VBD") && r.n(1,1,"IN")) return "RB";
		if (r.w=="little" && r.n(-1,0,"a") && r.n(1,0,"more")) return "RB";
		if (r.w=="much" && r.n(-1,0,"be")) return "RB";
		if (r.w=="hard" && r.n(-1,1,"VBG")) return "RB";
		if (r.n(1,0,"largest") && r.n(2,0,"steelmaker")) return "RB";
		if (r.w=="much" && r.n(1,1,"IN") && r.n(2,1,"NNS")) return "RB";
		if (r.w=="first" && r.n(-1,1,"VB")) return "RB";
		if (r.w=="high" && r.n(-2,1,"NN") && r.n(-1,1,"NN")) return "RB";
		if (r.w=="late" && r.n(-2,1,"NN") && r.n(-1,1,"NN")) return "RB";
		if (r.w=="last" && r.n(1,1,"VBN") && r.n(2,1,"IN")) return "RB";
		if (r.w=="much" && r.n(-2,0,"are")) return "RB";
		if (r.w=="early" && r.n(-1,1,"NN")) return "RB";
		if (r.w=="much" && r.n(1,1,"MD")) return "RB";
		if (r.w=="first" && r.n(-1,0,"--")) return "RB";
		if (r.w=="much" && r.n(1,1,"TO") && r.n(2,1,"NN")) return "RB";
		if (r.w=="Japanese" && r.n(-1,1,"DT") && r.n(1,1,"RB")) {
			if (r.n(2,1,"IN")) return "NNPS";
			return "NNP";
		}
		if (r.w=="Senior" && r.n(1,1,"NNP")) return "NNP";
		if (r.n(2,0,"Inc.")) {
			if (r.n(1,0,"CBS")) return "JJ";
			return "NNP";
		}
		if (r.n(1,0,"Revolution")) return "NNP";
		if (r.w=="Common" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="NEW" && r.n(-1,1,"") && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="German" && r.n(2,0,"of")) return "NNP";
		if (r.w=="Good" && r.n(-1,1,"NNP")) return "NNP";
		if (r.w=="Israeli" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Chinese" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="further" && r.n(1,1,"CC")) return "RBR";
		if (r.w=="preferred" && r.n(-2,1,"DT") && r.n(-1,1,"JJ")) return "VBN";
		if (r.w=="troubled" && r.n(-1,1,"VBD") && r.n(1,1,"IN")) return "VBN";
		if (r.w=="troubled" && r.n(-2,1,"NN") && r.n(-1,1,"IN")) return "VBN";
		if (r.w=="preferred" && r.n(-2,1,"JJ") && r.n(-1,1,"JJ")) return "VBN";
		if (r.w=="detailed" && r.n(1,1,"IN")) return "VBN";
		if (r.w=="limited" && r.n(1,1,"NN") && r.n(2,1,"IN")) return "VBN";
		if (r.w=="limited" && r.n(1,0,"by")) return "VBN";
		if (r.w=="subordinated" && r.n(2,0,",")) return "VBN";
		if (r.w=="troubled" && r.n(1,1,"NNS") && r.n(2,1,"VBP")) return "VBN";
		if (r.w=="Outside" && r.n(1,1,"DT")) return "IN";
		if (r.w=="next" && r.n(-1,1,"VBN") && r.n(1,1,"NNP")) return "IN";
		return "JJ";
	}
	if (r.t=="WP") {
		if (r.n(-1,1,"RB") && r.n(1,1,"NN")) return "WDT";
		if (r.w=="what" && r.n(1,1,"NN") && r.n(2,1,"DT")) return "WDT";
		if (r.w=="what" && r.n(1,1,"NN") && r.n(2,1,",")) return "WDT";
		return "WP";
	}
	if (r.t=="VBZ") {
		if (r.n(-1,0,"the")) return "NNS";
		if (r.n(-1,1,"JJ") && r.n(1,1,"IN")) {
			if (r.w=="is") return "VBZ";
			if (r.w=="comes" && r.n(-1,1,"JJ") && r.n(1,1,"IN")) return "VBZ";
			if (r.n(1,0,"with") && r.n(2,0,"the")) return "VBZ";
			if (r.n(-1,0,"first")) return "VBZ";
			return "NNS";
		}
		if (r.w=="calls" && r.n(-1,0,"phone")) return "NNS";
		if (r.n(-1,1,"PRP$")) {
			if (r.s(-3,"")) return "VBZ";
			return "NNS";
		}
		if (r.n(-1,1,"JJ") && r.n(1,1,",")) return "NNS";
		if (r.w=="offers" && r.n(1,1,"IN")) return "NNS";
		if (r.w=="hopes" && r.n(1,1,"IN")) {
			if (r.w=="hopes" && r.n(-1,1,"NNP") && r.n(1,1,"IN")) return "VBZ";
			if (r.n(-1,1,"RB") && r.n(1,1,"IN")) return "VBZ";
			return "NNS";
		}
		if (r.n(-1,1,"JJ") && r.n(1,1,".")) return "NNS";
		if (r.n(1,0,"are")) return "NNS";
		if (r.n(-1,0,"telephone")) return "NNS";
		if (r.n(-1,0,"of")) return "NNS";
		if (r.w=="shows" && r.n(-1,1,"IN")) return "NNS";
		if (r.n(-1,0,"a") && r.n(1,0,"of")) return "NN";
		if (r.w=="'S" && r.n(-1,1,"NN")) return "POS";
		if (r.n(-1,1,"JJ") && r.n(1,1,"CC")) return "NNS";
		if (r.w=="counts" && r.n(-2,0,"on")) return "NNS";
		if (r.n(-1,1,"DT") && r.n(1,1,"CC")) return "NNS";
		if (r.w=="counts" && r.n(-1,0,"felony")) return "NNS";
		if (r.w=="starts" && r.n(-1,0,"housing")) return "NNS";
		if (r.w=="runs" && r.n(-1,0,"home")) return "NNS";
		if (r.w=="needs" && r.n(-1,1,"NN") && r.n(1,1,".")) return "NNS";
		if (r.n(-1,0,"by")) return "NNS";
		if (r.w=="shows" && r.n(-1,1,"JJ")) return "NNS";
		if (r.w=="offers" && r.n(1,1,",")) return "NNS";
		if (r.w=="shows" && r.n(2,0,"")) return "NNS";
		if (r.w=="means" && r.n(-2,0,"by")) return "NNS";
		if (r.n(1,1,"VBP") && r.n(2,1,"RB")) return "NNS";
		if (r.w=="calls" && r.n(-1,1,"VBG")) return "NNS";
		if (r.n(-1,0,"no")) return "NNS";
		if (r.w=="causes" && r.n(-2,0,"the")) return "NNS";
		if (r.n(-1,1,"JJ") && r.n(1,1,":")) return "NNS";
		return "VBZ";
	}
	if (r.t=="DT") {
		if (r.w=="all" && r.n(1,1,"DT")) {
			if (r.n(-2,1,"''")) return "DT";
			if (r.w=="all" && r.n(1,1,"DT") && r.n(2,1,"VB")) return "DT";
			if (r.w=="all" && r.n(-2,0,"had")) return "DT";
			return "PDT";
		}
		if (r.w=="no" && r.n(1,1,"RB")) {
			if (r.w=="no" && r.n(-2,1,"IN") && r.n(-1,1,"VBD")) return "DT";
			return "RB";
		}
		if (r.w=="A" && r.n(-1,1,"NNP")) return "NNP";
		if (r.w=="All" && r.n(-1,1,"") && r.n(1,1,"DT")) return "PDT";
		if (r.w=="a" && r.n(-1,1,"") && r.n(1,1,":")) return "SYM";
		if (r.w=="A" && r.n(1,1,"POS")) return "NNP";
		if (r.w=="all" && r.n(1,0,"his")) return "PDT";
		if (r.w=="all" && r.n(1,1,"RB") && r.n(2,1,"JJ")) return "RB";
		if (r.w=="all" && r.n(1,0,"right")) return "RB";
		if (r.n(1,0,"la")) return "FW";
		if (r.n(-1,0,"") && r.n(1,0,"Mr.")) return "CC";
		if (r.w=="all" && r.n(2,0,"again")) return "RB";
		if (r.w=="any" && r.n(1,0,"better")) return "RB";
		if (r.w=="no" && r.n(1,1,".")) return "UH";
		if (r.w=="A" && r.n(1,1,",")) return "NNP";
		if (r.w=="all" && r.n(-2,0,"had")) return "RB";
		if (r.w=="no" && r.n(-1,1,"VBD") && r.n(1,1,"JJR")) return "RB";
		if (r.w=="no" && r.n(-1,1,"VB") && r.n(1,1,"JJR")) return "RB";
		if (r.w=="A" && r.n(-2,1,"CD") && r.n(-1,1,"(")) return "NN";
		if (r.w=="neither" && r.n(-1,1,",")) return "CC";
		if (r.w=="That" && r.n(1,1,"VBN") && r.n(2,1,"DT")) return "WDT";
		return "DT";
	}
	if (r.t=="#") return "#";
	if (r.t=="RP") {
		if (r.n(-1,1,",")) {
			if (r.w=="out") return "IN";
			if (r.w=="up" && r.n(1,1,"TO") && r.n(2,1,"CD")) return "IN";
			if (r.n(1,0,"5")) return "IN";
			if (r.n(1,0,"9\/32")) return "IN";
			if (r.w=="up" && r.n(-2,0,"15\/32")) return "IN";
			if (r.w=="up" && r.n(-1,0,",") && r.n(1,0,"31")) return "IN";
			return "RB";
		}
		if (r.w=="out" && r.n(1,0,"of")) return "IN";
		if (r.n(-1,1,"VBD") && r.n(1,1,"CD")) {
			if (r.n(-1,0,"lay")) return "RP";
			if (r.w=="off" && r.n(1,1,"CD") && r.n(2,1,"IN")) return "JJ";
			if (r.n(-1,0,"was") && r.n(1,0,"60")) return "IN";
			return "RB";
		}
		if (r.w=="up" && r.n(1,1,"TO")) {
			if (r.n(1,1,"TO") && r.n(2,1,"VB")) return "RP";
			if (r.w=="up" && r.n(-1,0,"adds")) return "RP";
			if (r.w=="up" && r.n(1,1,"TO") && r.n(2,1,"PRP$")) return "RP";
			if (r.w=="up" && r.n(-2,1,"RB") && r.n(-1,1,"VB")) return "RP";
			if (r.n(-1,0,"move") && r.n(1,0,"to")) return "RB";
			return "IN";
		}
		if (r.n(-1,0,"were")) return "RB";
		if (r.w=="out" && r.n(1,1,"EX")) {
			if (r.w=="out" && r.n(-1,1,"VB")) return "RB";
			return "IN";
		}
		if (r.n(-1,1,"CC")) {
			if (r.w=="off" && r.n(-2,1,"NN") && r.n(-1,1,"CC")) return "IN";
			if (r.n(-2,0,"in")) return "IN";
			return "RB";
		}
		if (r.w=="up" && r.n(1,1,"CC")) {
			if (r.w=="up" && r.n(1,1,"CC") && r.n(2,1,"PRP")) return "RP";
			if (r.n(-2,1,"NN")) return "IN";
			if (r.n(-2,1,"VBG") && r.n(-1,1,"PRP")) return "RP";
			return "RB";
		}
		if (r.n(-1,0,"are")) {
			if (r.n(2,1,"DT")) return "IN";
			return "RB";
		}
		if (r.w=="off" && r.n(-1,1,"NNS")) {
			if (r.w=="off" && r.n(1,1,"IN")) return "RP";
			return "IN";
		}
		if (r.n(-1,1,"RB")) {
			if (r.n(-2,0,"to") && r.n(-1,0,"back")) {
				if (r.n(1,0,".") && r.n(2,0,"")) return "RB";
				return "RP";
			}
			if (r.n(-2,0,",") && r.n(-1,0,"also")) return "RB";
			return "IN";
		}
		if (r.w=="up" && r.n(-1,0,"is")) {
			if (r.n(-2,1,"NNP") && r.n(-1,1,"VBZ")) return "RB";
			return "IN";
		}
		if (r.w=="up" && r.n(-1,0,"was")) return "RB";
		if (r.n(-1,1,"TO")) return "RB";
		if (r.n(1,1,",") && r.n(2,1,"CC")) {
			if (r.n(-2,1,"DT")) return "RP";
			if (r.w=="out" && r.n(-1,1,"VBN") && r.n(1,1,",")) return "IN";
			return "RB";
		}
		if (r.n(2,0,"points")) return "RB";
		if (r.w=="up" && r.n(-1,0,"go")) return "RB";
		if (r.w=="out" && r.n(-1,0,"due")) {
			if (r.w=="out" && r.n(-2,1,",") && r.n(-1,1,"JJ")) return "RB";
			return "IN";
		}
		if (r.n(-1,0,"was") && r.n(1,0,",")) return "JJ";
		if (r.w=="out" && r.n(-2,1,"CD") && r.n(-1,1,"NN")) return "RB";
		if (r.w=="off" && r.n(-2,1,"VB") && r.n(-1,1,"VBG")) return "RB";
		if (r.n(-1,0,"day")) return "RB";
		if (r.w=="out" && r.n(1,0,"and")) return "RB";
		if (r.n(-1,0,"been")) return "RB";
		if (r.w=="off" && r.n(-2,1,"NN") && r.n(-1,1,"NN")) return "IN";
		if (r.w=="off" && r.n(-1,1,"CD")) return "IN";
		if (r.n(-1,0,"edged")) return "IN";
		if (r.n(-2,1,"JJ") && r.n(-1,1,"NN")) return "IN";
		if (r.w=="off" && r.n(-1,0,"get") && r.n(1,0,"the")) return "IN";
		return "RP";
	}
	if (r.t=="$") return "$";
	if (r.t=="NN") {
		if (r.n(-1,1,"TO")) {
			if (r.s(-3,"ity")) return "NN";
			if (r.s(-2,"th")) return "NN";
			if (r.n(-2,0,"according") && r.n(-1,0,"to")) return "NN";
			if (r.s(-2,"cy")) return "NN";
			if (r.s(-3,"ory")) return "NN";
			if (r.w=="approval" && r.n(1,1,"IN")) return "NN";
			if (r.n(-2,0,"related")) return "NN";
			if (r.n(-1,0,"to") && r.n(1,0,"'s")) return "NN";
			if (r.n(-2,0,"According") && r.n(-1,0,"to")) return "NN";
			if (r.n(-2,0,"access")) return "NN";
			if (r.s(-4,"ness")) return "NN";
			if (r.s(-3,"ime")) return "NN";
			if (r.n(1,1,"CC") && r.n(2,1,"JJ")) return "NN";
			if (r.w=="management" && r.n(-1,1,"TO")) return "NN";
			if (r.s(-3,"ism")) return "NN";
			if (r.w=="government") return "NN";
			if (r.w=="market" && r.n(-1,1,"TO") && r.n(1,1,".")) return "NN";
			if (r.s(-4,"ball")) return "NN";
			if (r.w=="date" && r.n(-2,1,"NN") && r.n(-1,1,"TO")) return "NN";
			if (r.n(-2,0,"led")) return "NN";
			if (r.w=="trial" && r.n(-1,1,"TO")) return "NN";
			if (r.w=="college" && r.n(-1,0,"to")) return "NN";
			if (r.w=="heart" && r.n(-1,0,"to")) return "NN";
			if (r.n(-2,0,"due") && r.n(-1,0,"to")) return "NN";
			if (r.w=="date" && r.n(-2,1,"NNS") && r.n(-1,1,"TO")) return "NN";
			if (r.s(-4,"uter")) return "NN";
			if (r.n(-2,0,"lead")) return "NN";
			if (r.n(1,0,"victims")) return "NN";
			if (r.w=="life") return "NN";
			if (r.s(-4,"hing")) return "NN";
			if (r.s(-4,"ting")) return "NN";
			if (r.n(-1,0,"To") && r.n(1,0,",")) return "NN";
			if (r.s(-4,"yone")) return "NN";
			if (r.w=="No." && r.n(1,1,"CD")) return "NN";
			if (r.w=="anybody") return "NN";
			if (r.w=="home" && r.n(-1,0,"to")) return "NN";
			if (r.w=="gold" && r.n(-1,1,"TO")) return "NN";
			if (r.w=="investment" && r.n(-1,0,"to")) return "NN";
			if (r.w=="insurance" && r.n(-1,1,"TO")) return "NN";
			if (r.w=="customer" && r.n(-1,1,"TO") && r.n(1,1,"NN")) return "NN";
			if (r.w=="cancer" && r.n(-1,1,"TO")) return "NN";
			if (r.w=="cable") return "NN";
			if (r.n(-2,0,"exposed")) return "NN";
			if (r.w=="drug") return "NN";
			if (r.w=="success" && r.n(-1,1,"TO")) return "NN";
			if (r.s(-4,"king")) return "NN";
			if (r.n(-1,0,"to") && r.n(1,0,"levels")) return "NN";
			if (r.n(-2,0,"flight")) return "NN";
			if (r.n(1,1,"CC") && r.n(2,1,"NNS")) return "NN";
			if (r.s(-4,"stry")) return "NN";
			if (r.n(-2,0,"tied") && r.n(-1,0,"to")) return "NN";
			if (r.n(-2,0,"damage")) return "NN";
			if (r.s(-4,"ding")) {
				if (r.w=="building") return "VBG";
				return "NN";
			}
			if (r.s(-3,"ery")) return "NN";
			if (r.s(-4,"sing")) return "NN";
			if (r.w=="market" && r.n(1,1,"NNS")) return "NN";
			if (r.n(-2,0,"chemicals")) return "NN";
			if (r.w=="double-C" && r.n(-1,1,"TO")) return "NN";
			if (r.w=="market" && r.n(1,1,"IN") && r.n(2,1,"NN")) return "NN";
			if (r.n(-1,0,"to") && r.n(1,0,"arbitrage")) return "NN";
			if (r.w=="none" && r.n(2,0,"")) return "NN";
			if (r.w=="power" && r.n(-1,0,"to") && r.n(1,0,",")) return "NN";
			if (r.s(-4,"rict")) return "NN";
			if (r.w=="par") return "NN";
			if (r.w=="air" && r.n(1,1,"CD") && r.n(2,1,"NNS")) return "NN";
			if (r.n(-1,0,"to") && r.n(1,0,"cancer")) return "NN";
			if (r.n(-2,0,"listen") && r.n(-1,0,"to")) return "NN";
			if (r.w=="fruition" && r.n(-1,1,"TO") && r.n(1,1,".")) return "NN";
			if (r.s(-4,"rage")) return "NN";
			if (r.w=="farm" && r.n(-1,0,"to")) return "NN";
			if (r.w=="execution" && r.n(1,1,"IN")) return "NN";
			if (r.w=="service" && r.n(-1,1,"TO") && r.n(1,1,"NNS")) return "NN";
			if (r.s(-4,"rter")) return "NN";
			if (r.w=="abortion" && r.n(-1,0,"to")) return "NN";
			if (r.n(1,0,"countries")) return "NN";
			if (r.w=="cash" && r.n(1,0,"flow")) return "NN";
			if (r.w=="production" && r.n(-1,1,"TO")) return "NN";
			if (r.w=="tax" && r.n(-2,1,"NN") && r.n(-1,1,"TO")) return "NN";
			if (r.n(-2,0,"sentenced")) return "NN";
			if (r.w=="takeover" && r.n(1,1,"NNS")) return "NN";
			if (r.w=="year" && r.n(-1,0,"to") && r.n(1,0,".")) return "NN";
			if (r.n(2,0,"abroad")) return "NN";
			if (r.w=="head" && r.n(-2,0,"head")) return "NN";
			if (r.n(-2,0,"sent") && r.n(-1,0,"to")) return "NN";
			if (r.w=="completion" && r.n(-1,1,"TO") && r.n(1,1,"IN")) return "NN";
			if (r.w=="television" && r.n(-1,1,"TO")) return "NN";
			if (r.n(-1,0,"to") && r.n(1,0,"speculation")) return "NN";
			if (r.w=="competition" && r.n(-1,1,"TO")) return "NN";
			if (r.n(-2,0,"loans") && r.n(-1,0,"to")) return "NN";
			if (r.n(-2,0,"attributable") && r.n(-1,0,"to")) return "NN";
			if (r.w=="market" && r.n(1,1,"IN") && r.n(2,1,"IN")) return "NN";
			if (r.n(1,0,"value") && r.n(2,0,",")) return "NN";
			if (r.s(-2,"od")) return "NN";
			if (r.n(2,0,"says")) return "NN";
			if (r.n(-2,0,"referring") && r.n(-1,0,"to")) return "NN";
			if (r.s(-2,"ny")) return "NN";
			if (r.s(-2,"lf")) return "NN";
			if (r.n(-2,0,"taken")) return "NN";
			if (r.n(-2,0,"addition") && r.n(-1,0,"to")) return "NN";
			if (r.n(1,0,"items") && r.n(2,0,".")) return "NN";
			if (r.s(-4,"town")) return "NN";
			if (r.s(-3,"ier")) return "NN";
			return "VB";
		}
		if (r.n(-1,1,"MD")) {
			if (r.s(-3,"one")) return "NN";
			return "VB";
		}
		if (r.n(-1,0,"n't")) {
			if (r.s(-3,"ing")) {
				if (r.n(-1,1,"RB") && r.n(1,1,"RP")) return "VBG";
				if (r.s(-4,"ding")) return "VBG";
				return "NN";
			}
			if (r.w=="part" && r.n(-1,1,"RB") && r.n(1,1,"IN")) return "NN";
			if (r.n(-2,0,"is")) {
				if (r.s(-3,"ing")) {
					if (r.s(-4,"hing")) return "NN";
					return "VBG";
				}
				return "JJ";
			}
			if (r.n(-2,0,"are") && r.n(-1,0,"n't")) return "NN";
			if (r.n(-2,0,"ai")) return "NN";
			if (r.n(-2,0,"was") && r.n(-1,0,"n't")) return "NN";
			return "VB";
		}
		if (r.n(-1,1,"PRP")) {
			if (r.n(-1,0,"it")) {
				if (r.s(-3,"")) return "VBD";
				if (r.w=="work" && r.n(-2,1,"VB") && r.n(-1,1,"PRP")) return "VB";
				if (r.n(-2,0,"let")) return "VB";
				if (r.w=="right" && r.n(-1,1,"PRP")) return "RB";
				return "NN";
			}
			if (r.n(-1,0,"he")) return "VB";
			if (r.n(-1,0,"him")) {
				if (r.n(-1,1,"PRP") && r.n(1,1,"IN")) return "NN";
				return "VB";
			}
			if (r.n(-1,0,"them") && r.n(1,0,"a")) return "VB";
			if (r.s(-3,"ght")) return "RB";
			if (r.s(-4,"hing")) return "NN";
			if (r.n(-2,1,"VBZ")) return "NN";
			if (r.w=="access" && r.n(1,1,"TO")) return "NN";
			if (r.s(-4,"ound")) return "VB";
			if (r.n(-2,0,"did")) return "VB";
			if (r.s(-2,"me")) return "NN";
			if (r.s(-4,"ball")) return "NN";
			return "VBP";
		}
		if (r.n(-2,1,"MD") && r.n(-1,1,"RB")) return "VB";
		if (r.n(-2,1,"NNS") && r.n(-1,1,"RB")) {
			if (r.s(-3,"ing")) return "VBG";
			if (r.w=="part" && r.n(-1,1,"RB") && r.n(1,1,"IN")) return "NN";
			if (r.s(-3,"day")) return "NN";
			return "VBP";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"DT")) {
			if (r.s(-3,"ing")) return "VBG";
			if (r.n(2,0,"year")) return "NN";
			if (r.w=="study" && r.n(1,1,"DT")) return "VB";
			if (r.s(-2,"ul")) return "VB";
			return "VBP";
		}
		if (r.n(-1,0,"who")) {
			if (r.s(-2,"ay")) return "NN";
			return "VBP";
		}
		if (r.w=="TV" && r.n(-1,0,"SCI")) return "NNP";
		if (r.w=="half" && r.n(1,1,"DT")) return "PDT";
		if (r.w=="executive" && r.n(1,1,"NN") && r.n(2,1,"IN")) {
			if (r.w=="executive" && r.n(-2,0,"'s")) return "NN";
			if (r.w=="executive" && r.n(1,0,"officer") && r.n(2,0,"at")) return "NN";
			return "JJ";
		}
		if (r.w=="official" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="right" && r.n(1,1,"RB")) return "RB";
		if (r.n(-1,1,"CC") && r.n(1,1,"DT")) {
			if (r.w=="offer" && r.n(-2,0,",")) return "VBP";
			if (r.s(-2,"ng")) return "VBG";
			if (r.n(1,0,"all")) return "NN";
			if (r.w=="yesterday" && r.n(1,0,"the")) return "NN";
			return "VB";
		}
		if (r.w=="right" && r.n(1,1,"NN")) return "JJ";
		if (r.n(-2,1,"TO") && r.n(-1,1,"RB")) return "VB";
		if (r.n(-2,0,",") && r.n(-1,0,"which")) return "VBP";
		if (r.w=="executive" && r.n(1,0,"vice")) {
			if (r.n(-2,1,",") && r.n(-1,1,"NNP")) return "NN";
			if (r.n(-2,1,"VBN") && r.n(-1,1,"JJ")) return "NN";
			if (r.w=="executive" && r.n(-2,1,",") && r.n(-1,1,"JJ")) return "NN";
			return "JJ";
		}
		if (r.n(1,1,"NNPS")) {
			if (r.n(1,1,"NNPS") && r.n(2,1,"NN")) return "NN";
			if (r.n(1,1,"NNPS") && r.n(2,1,"MD")) return "NN";
			if (r.n(1,0,"Republicans")) return "NN";
			return "NNP";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,"RP")) {
			if (r.s(-2,"ot")) return "VBD";
			return "VBP";
		}
		if (r.w=="official" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="show" && r.n(-1,1,"NNS")) return "VBP";
		if (r.n(-1,1,"VBZ") && r.n(1,1,"DT")) {
			if (r.n(-1,0,"has")) return "VBN";
			if (r.n(-2,1,"PRP") && r.n(-1,1,"VBZ")) return "NN";
			return "VBG";
		}
		if (r.s(-2,"ky")) return "JJ";
		if (r.n(-1,1,"") && r.n(1,1,"NNP")) return "NNP";
		if (r.n(1,0,"Service")) return "NNP";
		if (r.n(-1,0,"began")) {
			if (r.w=="yesterday") return "NN";
			return "VBG";
		}
		if (r.n(-1,0,"companies")) return "VBP";
		if (r.w=="half" && r.n(1,1,"NN")) return "JJ";
		if (r.n(1,0,"Corp.")) return "NNP";
		if (r.n(-1,0,"officials")) return "VBP";
		if (r.w=="offering" && r.n(-1,1,"IN")) return "VBG";
		if (r.w=="closing" && r.n(-1,0,",")) return "VBG";
		if (r.w=="building" && r.n(1,1,"DT")) return "VBG";
		if (r.w=="account" && r.n(1,0,"for")) {
			if (r.w=="account" && r.n(-1,1,"NN") && r.n(1,1,"IN")) return "NN";
			return "VBP";
		}
		if (r.n(-2,1,"PRP") && r.n(-1,1,"RB")) return "VBP";
		if (r.n(-1,0,"rates")) return "VBP";
		if (r.w=="planning" && r.n(1,0,"to")) return "VBG";
		if (r.w=="offering" && r.n(-1,0,"is")) return "VBG";
		if (r.n(-1,1,"VBP") && r.n(1,1,"DT")) {
			if (r.n(-1,0,"have")) return "VBN";
			return "VBG";
		}
		if (r.w=="note" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="equivalent" && r.n(1,0,"to")) return "JJ";
		if (r.s(-4,"nary")) return "JJ";
		if (r.w=="firm" && r.n(1,1,"NN")) {
			if (r.n(-1,0,"law")) return "NN";
			return "JJ";
		}
		if (r.n(-1,1,"RB") && r.n(1,1,"DT")) {
			if (r.n(-2,1,"DT") && r.n(-1,1,"RB")) return "NN";
			if (r.s(-3,"ing")) return "VBG";
			if (r.n(-2,0,"had")) return "VBN";
			return "VB";
		}
		if (r.w=="spending" && r.n(1,1,"$") && r.n(2,1,"CD")) return "VBG";
		if (r.n(1,0,"their")) {
			if (r.s(-2,"ng")) return "VBG";
			if (r.w=="half" && r.n(-1,1,"IN")) return "PDT";
			if (r.s(-2,"ty")) return "NN";
			return "VBP";
		}
		if (r.w=="crude" && r.n(1,1,"NN")) {
			if (r.n(-2,1,"NNS")) return "NN";
			return "JJ";
		}
		if (r.w=="executive" && r.n(-1,1,"DT") && r.n(1,1,"NN")) return "JJ";
		if (r.n(-1,0,"that") && r.n(1,0,"the")) return "VBP";
		if (r.w=="fear" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="range" && r.n(1,0,"from")) return "VBP";
		if (r.w=="work" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="bottom" && r.n(1,0,"line")) return "JJ";
		if (r.s(-4,"ular")) return "JJ";
		if (r.s(-3,"men")) return "NNS";
		if (r.n(1,0,"Inc.")) return "NNP";
		if (r.n(-1,0,"help")) return "VB";
		if (r.n(-1,1,"NNS") && r.n(1,1,"PRP")) {
			if (r.n(1,1,"PRP") && r.n(2,1,"VBN")) return "NN";
			return "VBP";
		}
		if (r.w=="hope" && r.n(1,1,"TO")) return "VBP";
		if (r.w=="right" && r.n(1,1,"NNS")) return "JJ";
		if (r.n(1,0,"Co.")) return "NNP";
		if (r.n(-1,1,"CC") && r.n(1,1,"PRP$")) return "VB";
		if (r.w=="offering" && r.n(1,1,"NNS")) return "VBG";
		if (r.n(-1,0,"considering")) return "VBG";
		if (r.w=="use" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="caution" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="face" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="plan" && r.n(-1,1,"NNS") && r.n(1,1,"TO")) return "VBP";
		if (r.w=="offer" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="front" && r.n(1,1,"NN")) {
			if (r.n(2,0,",")) return "NN";
			return "JJ";
		}
		if (r.n(1,0,"Act")) return "NNP";
		if (r.w=="Trading" && r.n(1,1,"NNP")) return "NNP";
		if (r.n(1,0,"them")) {
			if (r.s(-2,"ng")) return "VBG";
			return "VB";
		}
		if (r.w=="building" && r.n(1,1,"PRP$")) return "VBG";
		if (r.w=="reading" && r.n(-1,1,"IN")) return "VBG";
		if (r.w=="forecast" && r.n(-1,1,"VBD")) return "VBN";
		if (r.n(-1,0,"people")) return "VBP";
		if (r.n(-1,0,"are") && r.n(1,0,".")) {
			if (r.s(-3,"ing")) return "VBG";
			return "JJ";
		}
		if (r.w=="middle" && r.n(1,1,"NN")) return "JJ";
		if (r.n(1,0,"Group")) return "NNP";
		if (r.w=="trading" && r.n(-1,1,"VBD") && r.n(1,1,"IN")) return "VBG";
		if (r.w=="opening" && r.n(1,0,"up")) return "VBG";
		if (r.w=="offering" && r.n(1,1,"JJ")) return "VBG";
		if (r.w=="warning" && r.n(1,0,"that")) return "VBG";
		if (r.w=="heating" && r.n(1,1,"RP")) return "VBG";
		if (r.w=="spending" && r.n(1,1,"RB")) return "VBG";
		if (r.w=="trading" && r.n(-1,0,"been")) return "VBG";
		if (r.n(-1,0,"rules")) return "VBP";
		if (r.w=="result" && r.n(-1,1,"NNS") && r.n(1,1,"IN")) return "VBP";
		if (r.w=="change" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="rise" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="benchmark" && r.n(-2,1,"IN") && r.n(-1,1,"DT")) return "JJ";
		if (r.w=="alternative" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="fine" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="bulk" && r.n(1,1,"NN")) return "JJ";
		if (r.n(-1,0,"are") && r.n(1,0,",")) return "JJ";
		if (r.w=="official" && r.n(-1,1,"DT") && r.n(1,1,"NNP")) return "JJ";
		if (r.w=="a.m." && r.n(-2,0,"at")) return "RB";
		if (r.w=="police" && r.n(1,1,"IN")) return "NNS";
		if (r.n(1,0,"Association")) return "NNP";
		if (r.w=="Part" && r.n(1,1,"NNP")) return "NNP";
		if (r.n(1,0,"International")) return "NNP";
		if (r.w=="S&L" && r.n(-1,0,"Lincoln")) return "NNP";
		if (r.n(-2,0,"the") && r.n(-1,0,"First")) return "NNP";
		if (r.n(-2,0,"did") && r.n(-1,0,"not")) return "VB";
		if (r.n(-1,1,"CC") && r.n(1,1,"RP")) return "VB";
		if (r.n(-2,0,"to") && r.n(-1,0,"``")) {
			if (r.n(1,1,"NNS")) return "NN";
			if (r.n(-1,1,"``") && r.n(1,1,"NN")) return "NN";
			return "VB";
		}
		if (r.w=="opening" && r.n(1,1,"DT") && r.n(2,1,"NN")) return "VBG";
		if (r.w=="trading" && r.n(-1,1,"VB")) {
			if (r.n(1,1,"IN") && r.n(2,1,"NNS")) return "NN";
			return "VBG";
		}
		if (r.w=="building" && r.n(-1,0,"is")) return "VBG";
		if (r.w=="filing" && r.n(1,1,"IN") && r.n(2,1,"NN")) return "VBG";
		if (r.w=="building" && r.n(-1,1,",")) return "VBG";
		if (r.w=="consulting" && r.n(-1,1,"IN")) return "VBG";
		if (r.w=="offering" && r.n(1,1,"DT")) return "VBG";
		if (r.w=="closing" && r.n(-1,1,"IN") && r.n(1,1,"IN")) return "VBG";
		if (r.w=="processing" && r.n(-1,1,"VB")) return "VBG";
		if (r.w=="mining" && r.n(1,1,"CC") && r.n(2,1,"VBG")) return "VBG";
		if (r.w=="accounting" && r.n(1,0,"for")) {
			if (r.n(-2,0,"up") && r.n(-1,0,"their")) return "NN";
			return "VBG";
		}
		if (r.w=="backing" && r.n(-1,1,"IN")) return "VBG";
		if (r.n(-2,0,"will") && r.n(-1,0,"begin")) return "VBG";
		if (r.w=="voting" && r.n(-1,1,"IN")) return "VBG";
		if (r.w=="spread" && r.n(-1,1,"VBD")) return "VBN";
		if (r.w=="question" && r.n(-1,1,"NNS")) return "VBP";
		if (r.n(-1,1,"NNPS") && r.n(1,1,"DT")) return "VBP";
		if (r.w=="use" && r.n(-1,0,"that")) return "VBP";
		if (r.n(-2,1,"WRB") && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="hope" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="show" && r.n(1,0,"that")) return "VBP";
		if (r.w=="right" && r.n(-1,0,"is")) return "JJ";
		if (r.w=="bridge" && r.n(1,0,"loans")) return "JJ";
		if (r.s(-4,"iant")) return "JJ";
		if (r.w=="stock-index" && r.n(-1,0,"and")) return "JJ";
		if (r.w=="assistant" && r.n(1,1,"NNP")) return "JJ";
		if (r.w=="right" && r.n(-1,0,"all")) return "JJ";
		if (r.w=="alternative" && r.n(-1,1,"DT") && r.n(1,1,"NN")) return "JJ";
		if (r.w=="official" && r.n(1,1,"JJ") && r.n(2,1,"NN")) return "JJ";
		if (r.w=="front" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="assistant" && r.n(1,0,"director")) return "JJ";
		if (r.w=="right" && r.n(-1,1,"VBP")) return "JJ";
		if (r.s(-2,"fy")) return "JJ";
		if (r.n(1,0,"'s") && r.n(2,0,"a")) return "NNP";
		if (r.w=="Dollar" && r.n(-2,0,"Dreyfus")) return "NNP";
		if (r.n(2,0,"Inc.")) return "NNP";
		if (r.w=="Today" && r.n(-1,0,"USA")) return "NNP";
		if (r.n(-2,0,"does") && r.n(-1,0,"not")) return "VB";
		if (r.w=="reset" && r.n(-1,1,"VB")) return "VB";
		if (r.n(-1,0,"helped") && r.n(1,0,"the")) return "VB";
		if (r.n(-1,0,"Never")) return "VB";
		if (r.w=="support" && r.n(-1,1,"RB")) return "VB";
		if (r.w=="force" && r.n(-1,1,"CC")) return "VB";
		if (r.s(-4,"tier")) return "JJR";
		if (r.w=="funding" && r.n(1,1,"DT")) return "VBG";
		if (r.w=="advertising" && r.n(-1,1,"VBD")) return "VBG";
		if (r.w=="ruling" && r.n(-1,0,",")) return "VBG";
		if (r.w=="planning" && r.n(-1,1,"VB")) return "VBG";
		if (r.w=="ruling" && r.n(1,0,"party")) return "VBG";
		if (r.w=="consulting" && r.n(1,0,"firm") && r.n(2,0,",")) return "VBG";
		if (r.w=="spending" && r.n(1,1,"CD") && r.n(2,1,"NNS")) return "VBG";
		if (r.w=="manufacturing" && r.n(-2,0,"of") && r.n(-1,0,"the")) return "VBG";
		if (r.w=="filing" && r.n(1,1,"DT")) return "VBG";
		if (r.w=="trading" && r.n(-1,1,"NNS") && r.n(1,1,"IN")) {
			if (r.n(-2,1,",") && r.n(-1,1,"NNS")) return "NN";
			return "VBG";
		}
		if (r.n(1,0,"profit") && r.n(2,0,"rose")) return "VBG";
		if (r.w=="trading" && r.n(-1,1,"RB") && r.n(1,1,"IN")) return "VBG";
		if (r.w=="hearing" && r.n(-1,1,"VB")) return "VBG";
		if (r.w=="consulting" && r.n(-1,0,"and")) return "VBG";
		if (r.w=="bearing" && r.n(-1,1,"NN")) return "VBG";
		if (r.w=="understanding" && r.n(-1,1,"IN") && r.n(1,1,"NNS")) return "VBG";
		if (r.w=="spending" && r.n(-2,1,"NN") && r.n(-1,1,"VBZ")) return "VBG";
		if (r.w=="building" && r.n(-1,1,"RB")) return "VBG";
		if (r.w=="financing" && r.n(2,0,".")) return "VBG";
		if (r.w=="meeting" && r.n(-1,1,"IN") && r.n(1,1,"NN")) return "VBG";
		if (r.w=="refinancing" && r.n(-1,1,"IN")) return "VBG";
		if (r.w=="spending" && r.n(-1,1,",")) return "VBG";
		if (r.n(-1,0,"trouble")) return "VBG";
		if (r.n(-1,1,"VBZ") && r.n(1,1,"PRP$")) return "VBG";
		if (r.w=="refunding" && r.n(1,1,"NNS")) return "VBG";
		if (r.n(-2,0,"have") && r.n(-1,0,"been")) return "VBG";
		if (r.w=="meeting" && r.n(-1,1,"IN") && r.n(1,1,"DT")) return "VBG";
		if (r.n(-1,0,"'re")) return "VBG";
		if (r.n(-2,0,"Mr.")) {
			if (r.n(2,1,"NN")) return "VB";
			return "VBD";
		}
		if (r.w=="spread" && r.n(1,1,"RP")) return "VBN";
		if (r.w=="shot" && r.n(-1,1,"VBD")) return "VBN";
		if (r.w=="split" && r.n(1,1,"IN")) {
			if (r.n(-2,1,"DT") && r.n(-1,1,"JJ")) return "NN";
			return "VBN";
		}
		if (r.w=="broadcast" && r.n(-2,0,"to")) return "VBN";
		if (r.n(-1,1,"NNS") && r.n(1,1,"JJR")) return "VBP";
		if (r.w=="move" && r.n(-1,1,"NNS")) {
			if (r.n(-2,1,"NN") && r.n(-1,1,"NNS")) return "VB";
			return "VBP";
		}
		if (r.w=="claim" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="swing" && r.n(-1,0,",")) return "VBP";
		if (r.w=="estimate" && r.n(1,0,"that")) return "VBP";
		if (r.n(-1,1,"NNS") && r.n(1,1,"JJ")) {
			if (r.s(-3,"ing")) return "VBG";
			if (r.s(-4,"owth")) return "NN";
			return "VBP";
		}
		if (r.w=="show" && r.n(-1,1,"IN")) return "VBP";
		if (r.n(-1,1,",") && r.n(1,1,"DT")) {
			if (r.s(-3,"ing")) return "VBG";
			if (r.s(-2,"ay")) return "NN";
			return "VBP";
		}
		if (r.n(-1,0,"Democrats")) return "VBP";
		if (r.w=="fall" && r.n(-1,1,"NNS")) return "VBP";
		if (r.n(-2,1,"WP") && r.n(-1,1,"RB")) return "VBP";
		if (r.n(-1,0,"that") && r.n(1,0,"a")) return "VBP";
		if (r.n(-2,0,"the") && r.n(-1,0,"markets")) return "VBP";
		if (r.w=="fare" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="place" && r.n(-1,1,"NNS")) return "VBP";
		if (r.w=="approach" && r.n(-1,1,"NNS")) return "VBP";
		if (r.s(-4,"sory")) return "JJ";
		if (r.w=="stock-index" && r.n(-2,0,"S&P")) return "JJ";
		if (r.w=="right" && r.n(-1,0,"was")) return "JJ";
		if (r.w=="gold" && r.n(-1,1,"IN") && r.n(1,1,"NNS")) return "JJ";
		if (r.n(1,0,"number") && r.n(2,0,"of")) return "JJ";
		if (r.w=="interest-rate" && r.n(-1,1,"NN")) return "JJ";
		if (r.s(-4,"gone")) return "JJ";
		if (r.w=="benchmark" && r.n(-2,0,"") && r.n(-1,0,"The")) return "JJ";
		if (r.w=="representative" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="fossil" && r.n(-1,1,"IN") && r.n(1,1,"NNS")) return "JJ";
		if (r.s(-4,"tish")) return "JJ";
		if (r.w=="half-hour" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="foreign-exchange" && r.n(-1,1,"CC")) return "JJ";
		if (r.w=="one-third" && r.n(1,1,"IN") && r.n(2,1,"NNP")) return "JJ";
		if (r.w=="deputy" && r.n(-1,1,",") && r.n(1,1,"JJ")) return "JJ";
		if (r.w=="content" && r.n(1,1,"TO")) return "JJ";
		if (r.w=="veteran" && r.n(-2,1,"VBZ") && r.n(-1,1,"DT")) return "JJ";
		if (r.w=="middle" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="plastic" && r.n(-1,1,"IN")) return "JJ";
		if (r.n(-2,0,"a") && r.n(-1,0,"more")) return "JJ";
		if (r.s(-4,"like")) {
			if (r.w=="dislike" && r.n(1,0,"of")) return "NN";
			return "JJ";
		}
		if (r.w=="gold" && r.n(-1,1,"DT") && r.n(1,1,"JJ")) return "JJ";
		if (r.w=="right" && r.n(-1,1,"VB")) return "JJ";
		if (r.w=="health-care" && r.n(1,1,"NNS") && r.n(2,1,"IN")) return "JJ";
		if (r.w=="assistant" && r.n(-1,1,"DT") && r.n(1,1,"NN")) return "JJ";
		if (r.s(-3,"ngy")) return "JJ";
		if (r.n(1,0,"economic")) return "JJ";
		if (r.n(-1,0,"(") && r.n(1,0,".")) return "JJ";
		if (r.s(-3,"ten")) return "JJ";
		if (r.s(-4,"tine")) return "JJ";
		if (r.w=="reset" && r.n(-1,1,"JJ") && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="stock-index" && r.n(-1,1,"VB") && r.n(1,1,"NN")) return "JJ";
		if (r.w=="mine" && r.n(1,1,"NN")) return "JJ";
		if (r.s(-3,"ppy")) return "JJ";
		if (r.s(-3,"mpy")) return "JJ";
		if (r.w=="half" && r.n(-2,1,"NNS") && r.n(-1,1,"IN")) return "DT";
		if (r.w=="half" && r.n(1,1,"VBN")) return "RB";
		if (r.w=="right" && r.n(1,0,"after")) return "RB";
		if (r.w=="police" && r.n(1,1,"VBD")) return "NNS";
		if (r.w=="police" && r.n(1,1,"VBP")) return "NNS";
		if (r.w=="Dollar" && r.n(-2,0,"'s") && r.n(-1,0,"a")) return "NNP";
		if (r.w=="Company" && r.n(-1,1,"NNP")) return "NNP";
		if (r.n(1,0,"Trust")) return "NNP";
		if (r.n(1,1,"NNP") && r.n(2,1,"''")) {
			if (r.n(-1,0,"``") && r.n(1,0,"Cleopatra")) return "NN";
			return "NNP";
		}
		if (r.w=="Interest" && r.n(-2,0,"The")) return "NNP";
		if (r.n(1,0,"System")) return "NNP";
		if (r.w=="Currency" && r.n(-2,0,"of") && r.n(-1,0,"the")) return "NNP";
		if (r.w=="B-2" && r.n(-1,1,"DT")) return "NNP";
		if (r.n(1,0,"&")) {
			if (r.s(-2,"re")) return "NN";
			return "NNP";
		}
		if (r.n(1,0,"Channel")) return "NNP";
		if (r.n(1,0,"Industry")) return "NNP";
		if (r.n(1,0,"Report")) return "NNP";
		if (r.w=="move" && r.n(-1,1,"CC")) return "VB";
		if (r.n(-2,0,"will") && r.n(-1,0,"likely")) return "VB";
		if (r.n(-2,1,"MD") && r.n(-1,1,"``")) return "VB";
		if (r.n(-1,0,"always")) return "VB";
		if (r.s(-4,"dier")) return "JJR";
		return "NN";
	}
	if (r.t==")") return ")";
	if (r.t=="(") return "(";
	if (r.t=="FW") {
		if (r.w=="pro" && r.n(1,1,"NN")) return "JJ";
		if (r.n(-2,1,"NNP")) {
			if (r.w=="vs." && r.n(-1,1,"NNP") && r.n(1,1,"NNP")) return "IN";
			if (r.n(-2,0,"Banca") && r.n(-1,0,"Nazionale")) return "FW";
			if (r.n(-1,0,"'s")) return "NN";
			return "NNP";
		}
		if (r.w=="glasnost" && r.n(-1,0,"of") && r.n(1,0,",")) return "NN";
		if (r.w=="vs." && r.n(-1,1,"NNS")) return "CC";
		return "FW";
	}
	if (r.t==",") return ",";
	if (r.t==".") return ".";
	if (r.t=="TO") return "TO";
	if (r.t=="PRP") return "PRP";
	if (r.t=="RB") {
		if (r.n(-1,1,"DT") && r.n(1,1,"NN")) {
			if (r.s(-4,"nger")) {
				if (r.w=="longer" && r.n(-2,1,"IN") && r.n(-1,1,"DT")) return "JJR";
				if (r.w=="longer" && r.n(2,0,",")) return "RBR";
				return "RB";
			}
			if (r.s(-3,"lly")) return "RB";
			if (r.s(-3,"gly")) return "RB";
			if (r.w=="even" && r.n(-2,0,"")) return "RB";
			return "JJ";
		}
		if (r.w=="down" && r.n(-1,1,"VB")) {
			if (r.n(-2,0,"will") && r.n(-1,0,"be")) return "RB";
			if (r.w=="down" && r.n(1,0,"and") && r.n(2,0,"talk")) return "RB";
			if (r.n(-1,0,"shut") && r.n(1,0,".")) return "RB";
			if (r.n(1,1,"IN") && r.n(2,1,"PRP")) return "RB";
			if (r.n(-2,0,"n't") && r.n(-1,0,"look")) return "RB";
			return "RP";
		}
		if (r.w=="so" && r.n(1,1,"PRP")) return "IN";
		if (r.w=="enough" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="down" && r.n(1,1,"DT")) {
			if (r.n(2,0,"road")) return "IN";
			if (r.n(-1,1,"VBZ")) return "RB";
			if (r.w=="down" && r.n(1,0,"the") && r.n(2,0,"street")) return "IN";
			if (r.n(-2,1,"JJ")) return "IN";
			return "RP";
		}
		if (r.w=="back" && r.n(-1,1,"TO")) return "VB";
		if (r.w=="only" && r.n(-1,1,"DT")) {
			if (r.w=="only" && r.n(-2,0,"to") && r.n(-1,0,"the")) return "RB";
			return "JJ";
		}
		if (r.w=="so" && r.n(1,1,"DT")) return "IN";
		if (r.w=="enough" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="back" && r.n(-1,0,"the")) return "NN";
		if (r.w=="so" && r.n(1,0,"that")) {
			if (r.n(-2,1,"IN")) return "RB";
			return "IN";
		}
		if (r.w=="down" && r.n(-1,1,"NN")) {
			if (r.n(-1,0,"way")) return "IN";
			if (r.w=="down" && r.n(1,1,"CD")) return "RB";
			if (r.w=="down" && r.n(-1,0,"right")) return "IN";
			return "RP";
		}
		if (r.w=="back" && r.n(-1,1,"IN")) return "JJ";
		if (r.w=="once" && r.n(1,1,"PRP")) return "IN";
		if (r.w=="down" && r.n(-1,1,"PRP")) return "RP";
		if (r.w=="down" && r.n(-1,1,"VBN")) {
			if (r.w=="down" && r.n(-2,1,"PRP") && r.n(-1,1,"VBN")) return "RB";
			if (r.n(1,1,"RB")) return "RB";
			if (r.n(2,1,"NN")) return "RB";
			return "RP";
		}
		if (r.w=="down" && r.n(-1,1,"VBG")) {
			if (r.n(1,1,"JJ")) return "RB";
			if (r.n(-2,0,"are") && r.n(-1,0,"going")) return "RB";
			if (r.n(2,0,"neck")) return "IN";
			if (r.n(-1,0,"coming")) return "IN";
			return "RP";
		}
		if (r.w=="So" && r.n(1,1,"DT")) return "IN";
		if (r.w=="longer" && r.n(1,1,"IN")) return "RBR";
		if (r.w=="so" && r.n(-1,1,",") && r.n(1,1,"NNS")) return "IN";
		if (r.w=="back" && r.n(1,1,"DT")) {
			if (r.w=="back" && r.n(2,0,"confidence")) return "RB";
			return "RP";
		}
		if (r.n(-1,0,"give")) return "RP";
		if (r.n(-1,0,"the") && r.n(1,0,",")) return "NN";
		if (r.n(-1,1,"PRP$") && r.n(1,1,"NN")) return "JJ";
		if (r.w=="down" && r.n(-1,1,"JJ")) return "RP";
		if (r.n(-1,1,"VBG") && r.n(1,1,"PRP$")) return "RP";
		if (r.w=="only" && r.n(1,1,"NN") && r.n(2,1,"NN")) {
			if (r.w=="only" && r.n(1,0,"half")) return "RB";
			return "JJ";
		}
		if (r.w=="upward" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="prior" && r.n(-1,1,"IN")) return "JJ";
		if (r.w=="only" && r.n(1,1,"JJ") && r.n(2,1,"NN")) {
			if (r.w=="only" && r.n(1,0,"limited")) return "RB";
			return "JJ";
		}
		if (r.w=="down" && r.n(1,1,"IN") && r.n(2,1,"IN")) return "IN";
		if (r.w=="back" && r.n(-1,1,"MD")) return "VB";
		if (r.n(-1,0,"scaled")) return "RP";
		if (r.n(-1,0,"the") && r.n(1,0,".")) return "NN";
		if (r.w=="longer" && r.n(1,1,"NNS")) return "JJR";
		if (r.n(-2,0,"30") && r.n(-1,0,"years")) return "IN";
		if (r.w=="ago" && r.n(-2,1,"IN") && r.n(-1,1,"NNS")) return "IN";
		if (r.w=="ago" && r.n(1,1,",") && r.n(2,1,"NN")) return "IN";
		if (r.w=="Right" && r.n(1,0,"to") && r.n(2,0,"Life")) return "NNP";
		if (r.w=="back" && r.n(1,1,"NNS")) {
			if (r.w=="back" && r.n(1,1,"NNS") && r.n(2,1,"IN")) return "JJ";
			return "RP";
		}
		if (r.n(1,0,"roughly")) return "RP";
		if (r.n(-1,0,"bounced")) return "RP";
		if (r.w=="down" && r.n(1,1,"PRP$") && r.n(2,1,"NN")) return "RP";
		if (r.w=="back" && r.n(1,0,"from") && r.n(2,0,"program")) return "RP";
		if (r.w=="down" && r.n(-1,1,"NNS") && r.n(1,1,"IN")) return "RP";
		if (r.w=="down" && r.n(-1,0,"back")) return "RP";
		if (r.w=="down" && r.n(-1,1,"VBD") && r.n(1,1,"NNS")) return "RP";
		if (r.w=="away" && r.n(-2,1,"VBP") && r.n(-1,1,"VBN")) return "RP";
		if (r.n(-1,0,"the") && r.n(1,0,"of")) return "NN";
		if (r.w=="Yet" && r.n(-1,1,"") && r.n(1,1,"PRP")) return "CC";
		if (r.w=="Yet" && r.n(1,0,"some")) return "CC";
		if (r.w=="well" && r.n(-1,0,",") && r.n(1,0,",")) return "UH";
		if (r.w=="enough" && r.n(-1,1,"VBZ")) return "JJ";
		if (r.w=="only" && r.n(-2,1,"IN") && r.n(-1,1,"VBG")) return "JJ";
		if (r.w=="enough" && r.n(-1,1,"IN")) return "JJ";
		if (r.w=="upward" && r.n(-1,1,"IN") && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="later" && r.n(1,0,"years")) return "JJ";
		if (r.w=="very" && r.n(-1,1,"DT") && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="south" && r.n(1,1,"NNP")) return "JJ";
		if (r.w=="only" && r.n(1,1,"NNS")) {
			if (r.w=="only" && r.n(1,0,"hours")) return "RB";
			return "JJ";
		}
		if (r.w=="so" && r.n(-1,1,"NNS") && r.n(1,1,"NNS")) return "IN";
		if (r.w=="once" && r.n(-1,1,"NNS") && r.n(1,1,"DT")) return "IN";
		if (r.w=="So" && r.n(1,0,"we")) return "IN";
		if (r.w=="Currently" && r.n(1,1,",") && r.n(2,1,"NNP")) return "NNP";
		if (r.w=="Well" && r.n(-1,1,"DT")) return "NNP";
		return "RB";
	}
	if (r.t==":") return ":";
	if (r.t=="NNS") {
		if (r.n(-1,1,"PRP")) {
			if (r.n(-2,1,"VB")) return "NNS";
			if (r.n(-1,0,"them")) return "NNS";
			if (r.n(-1,0,"we")) return "NNS";
			if (r.s(-3,"ple")) return "NNS";
			if (r.n(-2,1,"VBG") && r.n(-1,1,"PRP")) return "NNS";
			return "VBZ";
		}
		if (r.s(-2,"us")) {
			if (r.s(-3,"nus")) return "NN";
			if (r.n(-1,1,"DT") && r.n(1,1,".")) return "NN";
			if (r.n(-2,0,"in") && r.n(-1,0,"the")) return "NN";
			if (r.s(-3,"cus")) return "NN";
			if (r.s(-3,"eus")) return "NN";
			if (r.w=="gurus" && r.n(1,1,"NNP")) return "NNS";
			return "JJ";
		}
		if (r.n(-2,0,",") && r.n(-1,0,"which")) {
			if (r.s(-3,"ers")) return "NNS";
			return "VBZ";
		}
		if (r.n(-2,0,"Mr.")) return "VBZ";
		if (r.s(-2,"ss")) {
			if (r.w=="fiberglass") return "NNS";
			if (r.n(1,1,"PRP")) return "VB";
			if (r.n(2,0,"for")) return "VB";
			if (r.n(-1,0,"'s")) return "NN";
			if (r.n(1,1,"CC") && r.n(2,1,"VBZ")) return "NN";
			return "JJ";
		}
		if (r.n(-1,0,"who")) return "VBZ";
		if (r.w=="plans" && r.n(-1,1,"NNP")) return "VBZ";
		if (r.n(-2,1,"NN") && r.n(-1,1,"RB")) {
			if (r.n(2,1,"JJR")) return "NNS";
			return "VBZ";
		}
		if (r.n(-2,1,"PRP") && r.n(-1,1,"RB")) return "VBZ";
		if (r.n(1,1,"PRP$")) {
			if (r.n(-2,1,"IN")) return "NNS";
			if (r.n(1,0,"my")) return "NNS";
			if (r.s(-2,"rs")) return "NNS";
			return "VBZ";
		}
		if (r.w=="Investors" && r.n(1,1,"NNP")) {
			if (r.n(-2,1,"NNP") && r.n(-1,1,"NNP")) return "NNP";
			if (r.w=="Investors" && r.n(1,0,"Service") && r.n(2,0,"said")) return "NNP";
			return "NNPS";
		}
		if (r.n(-2,1,"NNP") && r.n(-1,1,"RB")) return "VBZ";
		if (r.w=="yen" && r.n(-1,1,"DT")) return "NN";
		if (r.n(-1,1,",") && r.n(1,1,"DT")) return "VBZ";
		if (r.w=="estimates" && r.n(1,0,"that")) return "VBZ";
		if (r.n(-1,1,"NNP") && r.n(1,1,"DT")) {
			if (r.s(-2,"rs")) return "NNS";
			if (r.n(2,0,"month")) return "NNS";
			if (r.n(-1,0,"American")) return "NNS";
			if (r.n(1,0,"this") && r.n(2,0,"year")) return "NNS";
			return "VBZ";
		}
		if (r.n(-2,1,",") && r.n(-1,1,"''")) {
			if (r.s(-2,"rs")) return "NNS";
			return "VBZ";
		}
		if (r.w=="plans" && r.n(-1,1,"NN") && r.n(1,1,"TO")) return "VBZ";
		if (r.n(-1,1,"RB") && r.n(1,1,"DT")) return "VBZ";
		if (r.n(-1,0,"that") && r.n(1,0,"the")) return "VBZ";
		if (r.w=="plans" && r.n(-1,1,",")) return "VBZ";
		if (r.w=="accounts" && r.n(1,0,"for")) return "VBZ";
		if (r.w=="CDs" && r.n(-1,0,"zero-coupon")) return "NNPS";
		if (r.n(-1,1,"CC") && r.n(1,1,"DT")) {
			if (r.s(-3,"ers")) return "NNS";
			return "VBZ";
		}
		if (r.s(-3,"sis")) return "NN";
		if (r.w=="amounts" && r.n(1,1,"TO")) {
			if (r.n(-2,1,"POS") && r.n(-1,1,"NN")) return "NNS";
			return "VBZ";
		}
		if (r.w=="costs" && r.n(1,0,"about")) return "VBZ";
		if (r.w=="increases" && r.n(1,1,"NN")) return "VBZ";
		if (r.n(1,0,"Inc.")) {
			if (r.s(-2,"ns")) return "NNPS";
			return "NNP";
		}
		if (r.n(1,1,"PRP") && r.n(2,1,"IN")) return "VBZ";
		if (r.w=="Investors" && r.n(-1,1,"NNP")) return "NNPS";
		if (r.w=="yen" && r.n(-1,0,"million")) return "NN";
		if (r.w=="data" && r.n(-2,1,"DT") && r.n(-1,1,"JJ")) return "NN";
		if (r.w=="declines" && r.n(1,0,"to")) return "VBZ";
		if (r.w=="values" && r.n(1,1,"NNP")) return "VBZ";
		if (r.w=="sets" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "VBZ";
		if (r.w=="claims" && r.n(1,0,"that")) {
			if (r.w=="claims" && r.n(-1,1,"IN")) return "NNS";
			return "VBZ";
		}
		if (r.n(-1,0,"Congress")) return "VBZ";
		if (r.n(1,1,"NNP") && r.n(2,1,"POS")) return "VBZ";
		if (r.n(-1,0,"now")) {
			if (r.n(2,1,"VBG")) return "NNS";
			return "VBZ";
		}
		if (r.w=="increases" && r.n(1,0,"the")) return "VBZ";
		if (r.n(-2,0,"of") && r.n(-1,0,"Securities")) return "NNPS";
		if (r.w=="Banks" && r.n(-1,1,"NNP")) {
			if (r.w=="Banks" && r.n(1,1,"IN") && r.n(2,1,"NNP")) return "NNP";
			return "NNPS";
		}
		if (r.w=="Dealers" && r.n(-2,1,"NNP") && r.n(-1,1,"NNP")) return "NNPS";
		if (r.w=="electronics" && r.n(-2,1,"DT") && r.n(-1,1,"JJ")) return "NN";
		if (r.w=="yen" && r.n(-1,0,"141.45")) return "NN";
		if (r.w=="yen" && r.n(-1,0,"141.90") && r.n(1,0,",")) return "NN";
		if (r.w=="yen" && r.n(-1,0,"one")) return "NN";
		if (r.w=="centers" && r.n(1,0,"on")) return "VBZ";
		if (r.n(-2,0,"the") && r.n(-1,0,"government")) return "VBZ";
		if (r.w=="trades" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "VBZ";
		if (r.w=="marks" && r.n(1,0,"the")) return "VBZ";
		if (r.n(-1,0,"This")) return "VBZ";
		if (r.w=="features" && r.n(1,1,"DT")) return "VBZ";
		if (r.w=="claims" && r.n(1,0,"he")) return "VBZ";
		if (r.n(-1,1,",") && r.n(1,1,"NNP")) {
			if (r.s(-4,"ists")) return "NNS";
			return "VBZ";
		}
		if (r.n(-2,0,"the") && r.n(-1,0,"company")) return "VBZ";
		if (r.w=="plans" && r.n(-1,1,"CC") && r.n(1,1,"TO")) return "VBZ";
		if (r.w=="notes" && r.n(1,0,"that")) return "VBZ";
		if (r.w=="Companies" && r.n(-1,1,"NNP")) return "NNPS";
		if (r.n(1,0,"Commission")) return "NNPS";
		if (r.w=="Sandinistas" && r.n(1,1,"VBD")) return "NNPS";
		if (r.n(1,0,"base")) return "NN";
		if (r.n(-1,0,"141.70")) return "NN";
		if (r.w=="telecommunications" && r.n(-1,0,"other")) return "NN";
		if (r.w=="yen" && r.n(1,0,"late") && r.n(2,0,"Friday")) return "NN";
		if (r.w=="mid-1970s" && r.n(1,0,",")) return "CD";
		if (r.w=="1970s" && r.n(-2,0,"the") && r.n(-1,0,"early")) return "CD";
		if (r.n(1,0,"taxes") && r.n(2,0,".")) return "JJ";
		if (r.n(-2,0,"") && r.n(-1,0,"That")) return "VBZ";
		if (r.n(-1,0,"suit")) return "VBZ";
		if (r.n(1,0,"new")) return "VBZ";
		if (r.w=="places" && r.n(-1,1,"NN") && r.n(1,1,"DT")) return "VBZ";
		if (r.w=="moves" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "VBZ";
		if (r.w=="designs" && r.n(1,1,"NN")) return "VBZ";
		if (r.w=="figures" && r.n(1,1,"PRP")) return "VBZ";
		if (r.w=="cuts" && r.n(1,1,"NN")) return "VBZ";
		if (r.w=="controls" && r.n(-1,1,"NNP")) return "VBZ";
		if (r.n(1,1,"PRP") && r.n(2,1,"TO")) return "VBZ";
		if (r.n(-2,1,"WDT") && r.n(-1,1,"RB")) return "VBZ";
		if (r.w=="matters" && r.n(1,1,"VBZ")) return "VBZ";
		if (r.w=="moves" && r.n(-1,1,"NNP") && r.n(1,1,"IN")) return "VBZ";
		if (r.w=="votes" && r.n(-1,1,"NNP")) return "VBZ";
		if (r.w=="flows" && r.n(-1,1,"NN") && r.n(1,1,"IN")) return "VBZ";
		if (r.w=="worries" && r.n(1,0,"that") && r.n(2,0,"the")) return "VBZ";
		if (r.w=="controls" && r.n(-1,0,"group")) return "VBZ";
		if (r.n(-1,0,"proposal") && r.n(1,0,"the")) return "VBZ";
		if (r.w=="rises" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "VBZ";
		if (r.s(-4,"fies")) {
			if (r.w=="satisfies" && r.n(1,1,"DT")) return "NNS";
			return "VBZ";
		}
		if (r.w=="sets" && r.n(1,1,"RP")) return "VBZ";
		if (r.n(-2,0,"the") && r.n(-1,0,"bill")) return "VBZ";
		if (r.w=="attempts" && r.n(-1,1,"NN") && r.n(1,1,"TO")) return "VBZ";
		if (r.n(1,0,"Association") && r.n(2,0,",")) return "NNP";
		if (r.w=="Rates" && r.n(1,0,"for")) return "NNP";
		if (r.w=="Institutions" && r.n(-1,1,"NNP")) return "NNP";
		return "NNS";
	}
	if (r.t=="NNP") {
		if (r.w=="American" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="American" && r.n(1,1,"NNS")) return "JJ";
		if (r.n(1,0,"German")) {
			if (r.n(1,0,"German") && r.n(2,0,"distributor")) return "NNP";
			return "JJ";
		}
		if (r.s(-3,"sed")) return "JJ";
		if (r.n(-1,1,"") && r.n(1,1,"NNS")) {
			if (r.n(-1,0,"") && r.n(1,0,"shares")) return "NNP";
			if (r.w=="U.S.") return "NNP";
			if (r.w=="FEDERAL" && r.n(-2,0,"")) return "JJ";
			if (r.s(-3,"ial")) return "JJ";
			if (r.w=="Tokyo" && r.n(-2,1,"") && r.n(-1,1,"")) return "NNP";
			if (r.s(-2,"gn")) return "JJ";
			if (r.w=="New" && r.n(-1,0,"")) return "JJ";
			if (r.s(-2,"ed")) return "JJ";
			if (r.w=="Treasury" && r.n(-2,0,"") && r.n(-1,0,"")) return "NNP";
			if (r.n(2,1,"NNP")) return "NNP";
			if (r.n(1,0,"plans") && r.n(2,0,"to")) return "NNP";
			if (r.w=="Big" && r.n(-2,1,"") && r.n(-1,1,"")) return "JJ";
			if (r.s(-3,"ual")) return "JJ";
			if (r.s(-3,"ord")) return "NNP";
			if (r.w=="Independent") return "JJ";
			if (r.s(-3,"ral")) return "JJ";
			if (r.w=="California" && r.n(-1,0,"")) return "NNP";
			if (r.s(-3,"ber")) return "NNP";
			if (r.w=="Medical" && r.n(-1,1,"") && r.n(1,1,"NNS")) return "JJ";
			if (r.s(-3,"nal")) return "JJ";
			if (r.w=="Environmental" && r.n(1,1,"NNS")) return "JJ";
			if (r.w=="Jaguar" && r.n(-2,0,"") && r.n(-1,0,"")) return "NNP";
			if (r.s(-2,"ue")) return "JJ";
			if (r.s(-3,"and")) return "NNP";
			if (r.s(-3,"lly")) return "NNP";
			if (r.n(-1,0,"") && r.n(1,0,"years")) return "CD";
			if (r.s(-2,"en")) return "CD";
			if (r.w=="White" && r.n(-1,1,"") && r.n(1,1,"NNS")) return "JJ";
			if (r.w=="Direct" && r.n(-1,0,"")) return "JJ";
			if (r.w=="Legal" && r.n(-1,1,"") && r.n(1,1,"NNS")) return "JJ";
			if (r.w=="Western" && r.n(-2,0,"") && r.n(-1,0,"")) return "JJ";
			if (r.s(-4,"NESE")) return "JJ";
			if (r.s(-2,"ar")) {
				if (r.w=="Jaguar" && r.n(-1,0,"")) return "NNP";
				return "JJ";
			}
			if (r.w=="GM") return "NNP";
			if (r.w=="Paribas" && r.n(-2,0,"")) return "NNP";
			if (r.w=="CBS" && r.n(-1,1,"")) return "NNP";
			if (r.w=="Kidder" && r.n(-2,0,"")) return "NNP";
			if (r.w=="Fed" && r.n(1,1,"NNS")) return "NNP";
			if (r.s(-3,"ica")) return "NNP";
			if (r.w=="Columbia" && r.n(-1,0,"") && r.n(1,0,"officials")) return "NNP";
			if (r.w=="Warner" && r.n(-2,0,"")) return "NNP";
			if (r.n(1,0,"rules")) return "NNP";
			if (r.w=="Frankfurt" && r.n(-2,0,"")) return "NNP";
			if (r.n(1,0,"officials") && r.n(2,0,"did")) return "NNP";
			if (r.w=="Health" && r.n(-1,1,"") && r.n(1,1,"NNS")) return "NNP";
			if (r.w=="Mobil" && r.n(1,1,"NNS")) return "NNP";
			if (r.w=="Frank" && r.n(1,1,"NNS") && r.n(2,1,"DT")) return "NNP";
			if (r.w=="Beijing") return "NNP";
			if (r.w=="Exxon" && r.n(1,1,"NNS")) return "NNP";
			if (r.n(1,0,"executives") && r.n(2,0,"were")) return "NNP";
			if (r.n(1,0,"controls")) return "NNP";
			if (r.s(-4,"nate")) return "NNP";
			if (r.s(-2,"ER")) return "NNP";
			return "NN";
		}
		if (r.w=="Western" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="Western" && r.n(1,1,"NN")) {
			if (r.n(-2,0,"&")) return "NNP";
			return "JJ";
		}
		if (r.w=="Average" && r.n(-2,0,"")) return "JJ";
		if (r.w=="South" && r.n(1,1,"JJ")) {
			if (r.n(1,1,"JJ") && r.n(2,1,"NNP")) return "NNP";
			return "JJ";
		}
		if (r.n(-1,1,"") && r.n(1,1,"VBP")) return "NNS";
		if (r.w=="American" && r.n(1,1,"JJ")) return "JJ";
		if (r.s(-4,"ians")) return "NNPS";
		if (r.w=="North" && r.n(1,0,"American")) {
			if (r.w=="North" && r.n(1,1,"NNP") && r.n(2,1,"NNPS")) return "NNP";
			return "JJ";
		}
		if (r.w=="Business" && r.n(-1,1,"")) return "NN";
		if (r.n(-1,1,"") && r.n(1,1,"DT")) return "VBG";
		if (r.w=="First" && r.n(-1,0,"") && r.n(1,0,",")) return "RB";
		if (r.w=="Costa" && r.n(1,1,"JJ")) return "JJ";
		if (r.w=="Communist" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="Sterling" && r.n(-1,0,"") && r.n(1,0,"was")) return "NN";
		if (r.w=="Personal" && r.n(-2,1,"") && r.n(-1,1,"")) return "JJ";
		if (r.n(1,0,"European")) return "JJ";
		if (r.n(1,0,"Asian")) return "JJ";
		if (r.w=="Third" && r.n(-2,0,"") && r.n(-1,0,"")) return "JJ";
		if (r.w=="Federal" && r.n(-1,1,"") && r.n(1,1,"NN")) return "JJ";
		if (r.w=="Latin" && r.n(1,0,"American")) return "JJ";
		if (r.s(-3,"led")) {
			if (r.n(-1,0,"")) return "VBN";
			return "JJ";
		}
		if (r.w=="State" && r.n(-1,1,"") && r.n(1,1,"NN")) return "NN";
		if (r.w=="Series" && r.n(1,0,"1989")) return "NN";
		if (r.w=="Index" && r.n(-2,0,"")) return "NN";
		if (r.w=="Manufacturers" && r.n(-2,0,"") && r.n(-1,0,"")) return "NNS";
		if (r.w=="de" && r.n(1,1,"NN")) return "FW";
		if (r.s(-4,"wned")) return "JJ";
		if (r.w=="North" && r.n(1,1,"JJ")) return "JJ";
		if (r.s(-4,"like")) return "JJ";
		if (r.w=="Big" && r.n(1,1,"NN")) return "JJ";
		if (r.s(-4,"tyle")) return "JJ";
		if (r.w=="Rights" && r.n(-2,0,"Bill")) return "NNPS";
		if (r.w=="de" && r.n(1,1,"NNP") && r.n(2,1,"CC")) return "FW";
		if (r.w=="de" && r.n(1,0,"Rothschild") && r.n(2,0,",")) return "FW";
		if (r.s(-4,"area")) return "JJ";
		if (r.w=="New" && r.n(-1,1,"") && r.n(1,1,"NN")) return "JJ";
		if (r.w=="Northern" && r.n(-1,1,"IN") && r.n(1,1,"NNP")) return "JJ";
		if (r.w=="Saudi" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="English" && r.n(1,1,"NNS")) return "JJ";
		if (r.n(2,0,"nations")) return "JJ";
		if (r.n(-1,0,"") && r.n(1,0,"production")) return "NN";
		if (r.w=="Credit" && r.n(-1,1,"") && r.n(1,1,"NN")) return "NN";
		if (r.w=="Capital" && r.n(1,1,"NN")) return "NN";
		if (r.w=="Class" && r.n(2,0,"common")) return "NN";
		if (r.w=="Money" && r.n(-2,1,"") && r.n(-1,1,"")) {
			if (r.w=="Money" && r.n(1,0,"Market")) return "NNP";
			return "NN";
		}
		if (r.w=="CD" && r.n(1,0,"yields")) return "NN";
		if (r.s(-3,"ets")) return "NNPS";
		if (r.n(-1,1,"") && r.n(1,1,"RP")) return "VBG";
		if (r.s(-3,"hed")) return "VBN";
		if (r.w=="High" && r.n(1,1,"NN") && r.n(2,1,"NNS")) return "JJ";
		if (r.w=="General" && r.n(1,0,"unsecured")) return "JJ";
		if (r.n(-1,0,"") && r.n(1,0,"trading")) return "JJ";
		if (r.w=="American" && r.n(1,1,"CC")) return "JJ";
		if (r.w=="Commercial" && r.n(-2,0,"")) return "JJ";
		if (r.w=="Average" && r.n(-1,1,":")) return "JJ";
		if (r.w=="Foreign" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="First" && r.n(-1,0,"``")) return "JJ";
		if (r.s(-3,"ype")) return "JJ";
		if (r.s(-4,"nted")) return "JJ";
		if (r.s(-4,"made")) return "JJ";
		if (r.w=="Scottish" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="Little" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="Western" && r.n(1,1,"JJ") && r.n(2,1,"NNS")) return "JJ";
		if (r.w=="Arab" && r.n(-1,1,"DT") && r.n(1,1,"NN")) return "JJ";
		if (r.s(-3,"ked")) {
			if (r.w=="Asset-Backed" && r.n(1,1,"NNPS")) return "NNP";
			return "JJ";
		}
		if (r.w=="Communist" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="English" && r.n(1,1,"NN")) return "JJ";
		if (r.s(-4,"ered")) {
			if (r.n(-2,1,"")) return "VBN";
			return "JJ";
		}
		if (r.w=="Big" && r.n(-1,1,"") && r.n(1,1,"JJ")) return "JJ";
		if (r.w=="CD" && r.n(-1,1,"JJ") && r.n(1,1,"VBD")) return "NN";
		if (r.w=="Market" && r.n(-2,0,"Friday")) return "NN";
		if (r.w=="Series" && r.n(-1,0,"a")) return "NN";
		if (r.w=="Litigation" && r.n(1,0,"consulting")) return "NN";
		if (r.w=="Investment" && r.n(-1,0,"")) return "NN";
		if (r.w=="Football" && r.n(-2,0,"")) return "NN";
		if (r.w=="Test" && r.n(1,0,"of") && r.n(2,0,"Basic")) return "NN";
		if (r.w=="Law" && r.n(-2,0,"")) return "NN";
		if (r.w=="Insurance" && r.n(-2,1,"") && r.n(-1,1,"``")) return "NN";
		if (r.w=="Market" && r.n(-1,1,"") && r.n(1,1,"NN")) return "NN";
		if (r.n(1,0,"shall") && r.n(2,0,"be")) return "NN";
		if (r.w=="Home" && r.n(-1,1,"") && r.n(1,1,"NN")) return "NN";
		if (r.w=="Management" && r.n(-2,0,"")) {
			if (r.w=="Management" && r.n(-1,1,"") && r.n(1,1,"NNP")) return "NNP";
			return "NN";
		}
		if (r.n(-1,0,"") && r.n(1,0,"to")) return "NN";
		if (r.w=="Labor" && r.n(1,1,"VBZ")) return "NN";
		if (r.n(2,0,"In")) return "NN";
		if (r.w=="East" && r.n(1,1,"NNPS") && r.n(2,1,",")) return "NNS";
		if (r.w=="CFCs" && r.n(-1,0,"of")) return "NNS";
		if (r.n(-1,0,"") && r.n(1,0,"it")) return "VB";
		if (r.w=="de" && r.n(-2,0,"the")) return "IN";
		if (r.w=="de" && r.n(-2,1,"NNP") && r.n(-1,1,"NNP")) return "IN";
		if (r.w=="Holdings" && r.n(-1,0,"IMA")) return "NNPS";
		if (r.n(-2,0,"Reliance") && r.n(-1,0,"Group")) return "NNPS";
		if (r.w=="Foods" && r.n(-1,1,"NNP") && r.n(1,1,"NN")) return "NNPS";
		if (r.w=="Utilities" && r.n(-2,1,"IN") && r.n(-1,1,"NNP")) return "NNPS";
		return "NNP";
	}
	if (r.t=="VB") {
		if (r.n(-1,1,"NNS")) {
			if (r.w=="close" && r.n(-2,0,"")) return "RB";
			if (r.w=="cut") {
				if (r.n(-2,1,"DT")) return "NN";
				if (r.w=="cut" && r.n(1,0,"into")) return "VBD";
				return "VBN";
			}
			if (r.n(-2,0,"help")) return "VB";
			if (r.w=="be" && r.n(-2,1,"DT") && r.n(-1,1,"NNS")) return "VB";
			if (r.w=="be" && r.n(-2,1,"NN") && r.n(-1,1,"NNS")) return "VB";
			if (r.n(-2,0,"make")) return "VB";
			if (r.w=="close" && r.n(-2,1,"TO") && r.n(-1,1,"NNS")) return "RB";
			if (r.w=="buy" && r.n(-2,0,"that")) return "VB";
			if (r.n(1,0,"on") && r.n(2,0,"time")) return "VB";
			if (r.n(-1,0,"orders")) return "VB";
			if (r.w=="be" && r.n(-2,1,"IN") && r.n(-1,1,"NNS")) return "VB";
			if (r.n(-2,0,"let")) return "VB";
			if (r.n(-2,0,"new") && r.n(-1,0,"crises")) return "VB";
			if (r.w=="go" && r.n(-1,1,"NNS") && r.n(1,1,",")) return "VB";
			if (r.w=="play" && r.n(-2,1,"NNP") && r.n(-1,1,"NNS")) return "VB";
			if (r.s(-4,"tify")) return "VB";
			if (r.w=="look" && r.n(-2,1,"PRP$") && r.n(-1,1,"NNS")) return "VB";
			if (r.n(-2,0,"helping")) return "VB";
			if (r.w=="be" && r.n(-2,1,"JJ") && r.n(-1,1,"NNS")) return "VB";
			if (r.n(1,1,"JJ") && r.n(2,1,"``")) return "VB";
			if (r.n(-2,0,"stock") && r.n(-1,0,"prices")) return "VB";
			if (r.w=="put" && r.n(1,1,"DT") && r.n(2,1,"NN")) return "VBD";
			if (r.w=="close" && r.n(-1,0,"people") && r.n(1,0,"to")) return "JJ";
			return "VBP";
		}
		if (r.n(-1,1,"PRP")) {
			if (r.n(-1,0,"it")) {
				if (r.w=="cut" && r.n(-2,0,"said") && r.n(-1,0,"it")) return "VBD";
				return "VB";
			}
			if (r.n(-2,0,"let")) return "VB";
			if (r.n(-2,0,"help")) return "VB";
			if (r.n(-1,0,"he")) {
				if (r.w=="cut") return "VBD";
				return "VB";
			}
			if (r.n(-2,0,"can")) return "VB";
			if (r.n(-1,0,"him")) return "VB";
			if (r.n(-2,0,"n't")) return "VB";
			if (r.n(-1,0,"He")) return "VBD";
			if (r.n(-2,0,"will")) return "VB";
			if (r.w=="make" && r.n(-2,1,"VBP") && r.n(-1,1,"PRP")) return "VB";
			if (r.n(-2,0,"would")) return "VB";
			if (r.n(1,0,"it") && r.n(2,0,"?")) return "VB";
			if (r.n(-2,0,"should") && r.n(-1,0,"I")) return "VB";
			if (r.n(-2,0,"Let")) return "VB";
			if (r.w=="put" && r.n(-1,1,"PRP") && r.n(1,1,"IN")) return "VBD";
			if (r.w=="put" && r.n(-1,0,"she")) return "VBD";
			return "VBP";
		}
		if (r.n(-1,1,"DT")) {
			if (r.w=="elaborate" && r.n(1,1,"NN")) return "JJ";
			if (r.s(-3,"ect")) return "JJ";
			if (r.n(-2,0,"") && r.n(-1,0,"Some")) return "VBP";
			if (r.w=="close" && r.n(-1,1,"DT") && r.n(1,1,"VB")) return "JJ";
			if (r.s(-3,"ome")) {
				if (r.s(-4,"come")) return "JJ";
				return "VB";
			}
			if (r.n(-1,0,"both")) {
				if (r.n(-2,0,"to") && r.n(-1,0,"both")) return "VB";
				return "VBP";
			}
			if (r.n(1,1,"JJ")) return "JJ";
			if (r.w=="live") return "JJ";
			if (r.n(-2,1,"MD")) return "VB";
			if (r.w=="put" && r.n(-2,0,"")) return "VBD";
			if (r.s(-2,"in")) return "VBP";
			if (r.n(1,1,"CD") && r.n(2,1,"NN")) return "VBP";
			if (r.n(-2,0,"we") && r.n(-1,0,"all")) return "VBP";
			if (r.s(-2,"ce")) return "VBP";
			if (r.n(-2,0,"") && r.n(-1,0,"These")) return "VBP";
			if (r.w=="lead" && r.n(1,0,"sponsor")) return "JJ";
			if (r.n(-1,0,"a") && r.n(1,0,"inspection")) return "JJ";
			if (r.n(2,0,"on")) return "JJ";
			return "NN";
		}
		if (r.n(-1,1,"JJ")) {
			if (r.n(-2,1,"MD")) return "VB";
			if (r.n(1,0,"the")) return "VB";
			if (r.n(-2,1,"TO")) return "VB";
			if (r.s(-2,"ow")) return "VBP";
			if (r.w=="be") return "VB";
			if (r.n(-1,0,"giant")) return "VB";
			if (r.w=="close" && r.n(1,0,"to")) return "RB";
			if (r.n(1,1,"PRP$")) {
				if (r.n(-1,0,"further")) return "VB";
				return "VBD";
			}
			if (r.n(1,1,"JJ")) {
				if (r.n(-2,1,"MD") && r.n(-1,1,"JJ")) return "VB";
				return "VBP";
			}
			if (r.w=="carry" && r.n(-1,1,"JJ")) return "VBP";
			if (r.s(-4,"main")) return "VBP";
			if (r.n(-1,0,"many")) return "VBP";
			if (r.n(1,1,"RB") && r.n(2,1,"JJR")) return "VBP";
			if (r.w=="close" && r.n(-1,0,"such")) return "JJ";
			return "NN";
		}
		if (r.n(-1,1,"IN")) {
			if (r.n(1,1,"DT")) {
				if (r.n(-1,0,"than")) return "VB";
				return "VBP";
			}
			if (r.n(-1,0,"that") && r.n(1,0,"to")) return "VBP";
			if (r.n(1,1,"JJ") && r.n(2,1,"NNS")) return "VBP";
			if (r.w=="live") return "JJ";
			if (r.w=="make" && r.n(-1,0,"that")) return "VBP";
			if (r.n(-1,1,"IN") && r.n(1,1,"PRP")) return "VBP";
			if (r.n(-1,0,"that") && r.n(1,0,"in")) return "VBP";
			if (r.n(-1,0,"that") && r.n(1,0,"on")) return "VBP";
			if (r.n(1,1,"PRP$")) {
				if (r.n(-2,1,"RB") && r.n(-1,1,"IN")) return "VB";
				return "VBP";
			}
			if (r.w=="go" && r.n(-1,1,"IN")) return "VBP";
			if (r.s(-4,"llow")) return "VBP";
			if (r.w=="sell" && r.n(-1,0,"that")) return "VBP";
			if (r.n(1,1,"JJ") && r.n(2,1,"JJ")) {
				if (r.n(-1,0,"that")) return "VBP";
				return "VB";
			}
			if (r.w=="break") return "VB";
			if (r.w=="be") return "VB";
			if (r.w=="cut") return "VBD";
			if (r.w=="cause" && r.n(-1,0,"that")) return "VBP";
			if (r.w=="spend" && r.n(1,0,"between")) return "VBP";
			if (r.s(-2,"in")) return "VBP";
			if (r.n(-2,0,"shares")) return "VBP";
			if (r.n(-1,0,"that") && r.n(1,0,"or")) return "VBP";
			if (r.s(-3,"lve")) return "VBP";
			if (r.w=="look" && r.n(-1,1,"IN")) return "VBP";
			if (r.n(-1,0,"that") && r.n(1,0,"through")) return "VBP";
			if (r.w=="close" && r.n(-1,1,"IN") && r.n(1,1,"NNS")) return "JJ";
			return "NN";
		}
		if (r.n(-1,1,"WP")) return "VBP";
		if (r.n(-1,1,"NN")) {
			if (r.w=="be" && r.n(-1,1,"NN")) return "VB";
			if (r.w=="put") return "VBD";
			if (r.n(1,0,"the")) {
				if (r.w=="put" && r.n(1,0,"the")) return "VBD";
				return "VBP";
			}
			if (r.n(1,0,"a")) {
				if (r.w=="put" && r.n(1,0,"a")) return "VBD";
				if (r.n(-2,1,"IN") && r.n(-1,1,"NN")) return "VBP";
				return "VB";
			}
			if (r.s(-3,"ome")) {
				if (r.w=="come" && r.n(-2,0,"and")) return "VBP";
				return "VBN";
			}
			if (r.w=="make" && r.n(-1,1,"NN")) return "VBP";
			if (r.s(-4,"inue")) {
				if (r.n(1,0,"to")) return "VBP";
				return "VB";
			}
			if (r.n(-1,0,"today")) return "VBP";
			if (r.n(1,0,"its")) return "VB";
			if (r.n(-1,0,"person") && r.n(1,0,"to")) return "RB";
			if (r.w=="give" && r.n(-1,1,"NN")) return "VBP";
			if (r.n(1,0,"us")) return "VBP";
			if (r.w=="appear" && r.n(-1,1,"NN")) return "VBP";
			if (r.n(-2,0,"some")) return "VB";
			if (r.s(-3,"ick")) return "VB";
			if (r.w=="take" && r.n(-2,1,"JJ") && r.n(-1,1,"NN")) return "VB";
			if (r.n(2,0,"?")) return "VB";
			if (r.n(-1,1,"NN") && r.n(1,1,"NNP")) return "VB";
			if (r.n(-2,0,"that")) return "VB";
			if (r.s(-2,"en")) return "VB";
			if (r.n(-2,0,"American")) return "VB";
			if (r.n(1,1,"DT") && r.n(2,1,"IN")) return "VB";
			if (r.s(-2,"nd")) {
				if (r.n(2,1,"DT")) return "VBP";
				return "VB";
			}
			if (r.w=="close" && r.n(-1,0,"source") && r.n(1,0,"to")) return "RB";
			if (r.w=="beat" && r.n(1,1,"RB")) return "VBD";
			if (r.w=="cut" && r.n(1,0,"into")) return "VBD";
			if (r.n(2,0,"for")) {
				if (r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "VB";
				return "VBD";
			}
			if (r.w=="read" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "VBN";
			if (r.w=="run" && r.n(-2,0,"a")) return "VBN";
			if (r.w=="turn" && r.n(-1,1,"NN")) {
				if (r.n(2,1,"NN")) return "VB";
				return "VBP";
			}
			if (r.s(-2,"de")) return "VBP";
			if (r.w=="go" && r.n(-1,1,"NN")) return "VBP";
			if (r.s(-3,"ain")) return "VBP";
			if (r.n(1,1,"PRP") && r.n(2,1,"IN")) {
				if (r.w=="put" && r.n(-1,1,"NN") && r.n(1,1,"PRP")) return "VBD";
				return "VBP";
			}
			if (r.n(-1,0,"yesterday")) return "VBP";
			if (r.n(1,1,"JJ") && r.n(2,1,"NNS")) return "VBP";
			if (r.n(1,1,"NNS") && r.n(2,1,".")) return "JJ";
			return "NN";
		}
		if (r.n(-1,0,"has")) return "VBN";
		if (r.n(-2,1,"NNS") && r.n(-1,1,"RB")) {
			if (r.s(-4,"lose")) return "RB";
			return "VBP";
		}
		if (r.n(-1,0,"'s")) {
			if (r.n(-2,1,"VB") && r.n(-1,1,"POS")) return "VB";
			if (r.n(-2,1,"PRP") && r.n(-1,1,"POS")) return "VBN";
			return "NN";
		}
		if (r.n(-1,0,"have")) return "VBN";
		if (r.n(-1,0,"which")) return "VBP";
		if (r.n(-2,1,"PRP") && r.n(-1,1,"RB")) {
			if (r.n(1,1,"VBN")) return "VB";
			if (r.w=="cut" && r.n(-2,1,"PRP") && r.n(-1,1,"RB")) return "VBD";
			if (r.n(2,0,"as")) return "VB";
			if (r.n(1,1,"DT") && r.n(2,1,"NNS")) return "VB";
			return "VBP";
		}
		if (r.n(-1,1,"PRP$")) {
			if (r.w=="buy" && r.n(-1,1,"PRP$")) return "JJ";
			if (r.w=="put") return "JJ";
			if (r.n(2,0,"with")) return "JJ";
			return "NN";
		}
		if (r.n(-1,0,"be")) return "VBN";
		if (r.n(-1,1,"NNPS")) return "VBP";
		if (r.w=="close" && r.n(1,0,"to")) {
			if (r.w=="close" && r.n(-2,1,"NNP") && r.n(-1,1,"VBZ")) return "JJ";
			if (r.n(1,0,"to") && r.n(2,0,"being")) return "JJ";
			return "RB";
		}
		if (r.n(-2,0,"a")) return "NN";
		if (r.n(-1,0,"had")) return "VBN";
		if (r.n(-1,1,"VBN")) {
			if (r.w=="put") return "VBN";
			if (r.w=="cut") return "VBN";
			return "NN";
		}
		if (r.n(-1,1,"VBG")) {
			if (r.n(-1,0,"helping")) return "VB";
			if (r.n(-1,0,"having")) return "VBN";
			if (r.n(-1,0,"being")) return "VBN";
			if (r.w=="rid" && r.n(1,1,"IN")) return "JJ";
			if (r.s(-4,"lose")) return "JJ";
			return "NN";
		}
		if (r.n(-1,1,"CD")) {
			if (r.n(-1,1,"CD") && r.n(1,1,"DT")) return "VBP";
			return "NN";
		}
		if (r.n(-2,1,"POS") && r.n(-1,1,"NNP")) return "NN";
		if (r.w=="cut" && r.n(-1,1,"NNP")) return "VBD";
		if (r.n(-2,1,"CC") && r.n(-1,1,"NNP")) {
			if (r.w=="put" && r.n(-2,0,"&")) return "VBD";
			return "VBP";
		}
		if (r.n(-2,1,"WP") && r.n(-1,1,"RB")) return "VBP";
		if (r.w=="comment" && r.n(-1,0,"declined")) return "NN";
		if (r.w=="put" && r.n(-1,1,"NNP")) return "VBD";
		if (r.n(-2,1,"NNP") && r.n(-1,1,"RB")) {
			if (r.s(-3,"")) return "VBD";
			return "VBP";
		}
		if (r.w=="yield" && r.n(-2,0,"the")) return "NN";
		if (r.w=="talk" && r.n(1,0,"of")) return "NN";
		if (r.n(-1,0,"more")) return "NN";
		if (r.n(-1,0,"are")) {
			if (r.n(1,0,".") && r.n(2,0,"")) return "JJ";
			return "VBN";
		}
		if (r.w=="put" && r.n(-1,1,"VBD")) return "VBN";
		if (r.w=="pay" && r.n(-1,0,"back")) return "NN";
		if (r.n(-1,0,"pay")) return "NN";
		if (r.n(-1,0,"'ve")) return "VBN";
		if (r.w=="run" && r.n(1,0,"by")) return "VBN";
		if (r.n(-2,1,"VBP") && r.n(-1,1,",")) return "VBP";
		if (r.n(-1,1,",") && r.n(1,1,"IN")) {
			if (r.n(1,0,"for")) return "VB";
			return "VBP";
		}
		if (r.n(-1,1,"NNP") && r.n(1,1,".")) return "NN";
		if (r.w=="put" && r.n(-1,0,"is")) return "VBN";
		if (r.w=="come" && r.n(-2,1,"VBZ") && r.n(-1,1,"RB")) return "VBN";
		if (r.n(-1,0,"usually")) return "VBP";
		if (r.n(-2,1,"WDT") && r.n(-1,1,"RB")) return "VBP";
		if (r.n(-1,1,"NNP") && r.n(1,1,"NNS")) return "VBP";
		if (r.n(-1,1,"NNP") && r.n(1,1,"JJ")) return "VBP";
		if (r.n(-1,1,"NNP") && r.n(1,1,",")) return "NNP";
		if (r.w=="counter" && r.n(1,0,"to")) return "RB";
		if (r.n(-1,1,"NNP") && r.n(1,1,"CC")) {
			if (r.n(-2,0,"via") && r.n(-1,0,"Dillon")) return "NNP";
			return "NN";
		}
		if (r.w=="restructure" && r.n(-1,0,"to") && r.n(1,0,"the")) return "NN";
		if (r.n(-1,1,"'")) return "NN";
		if (r.w=="sell" && r.n(1,0,"programs")) return "NN";
		if (r.n(-1,1,"") && r.n(1,1,"NNS")) return "NN";
		if (r.w=="put" && r.n(-1,1,"CC")) {
			if (r.w=="put" && r.n(-1,1,"CC") && r.n(1,1,"PRP$")) return "VB";
			return "VBD";
		}
		if (r.w=="put" && r.n(-1,1,"RB") && r.n(1,1,"IN")) return "VBD";
		if (r.w=="become" && r.n(-2,0,"have")) return "VBN";
		if (r.w=="cut" && r.n(-1,1,"VBD")) return "VBN";
		if (r.n(-2,1,"") && r.n(-1,1,"JJS")) return "VBP";
		if (r.n(-1,1,")") && r.n(1,1,"PRP")) return "VBP";
		if (r.n(-2,1,"IN") && r.n(-1,1,"RB")) return "VBP";
		if (r.n(-1,0,"typically")) return "VBP";
		if (r.w=="call" && r.n(-2,1,"VB") && r.n(-1,1,"CC")) return "JJ";
		if (r.w=="correct" && r.n(1,0,",")) return "JJ";
		if (r.n(-1,0,"were")) return "JJ";
		return "VB";
	}
	if (r.t=="WRB") return "WRB";
	if (r.t=="CC") {
		if (r.w=="either" && r.n(1,1,"NN")) return "DT";
		if (r.n(1,1,".")) {
			if (r.n(-1,1,"DT") && r.n(1,1,".")) return "NN";
			return "RB";
		}
		if (r.w=="either" && r.n(1,1,",")) return "RB";
		if (r.w=="either" && r.n(-1,1,"MD")) return "RB";
		if (r.w=="either" && r.n(-2,0,"that")) return "DT";
		if (r.w=="either" && r.n(-1,1,"VBZ")) return "RB";
		if (r.n(-1,1,"VBP") && r.n(1,1,"VBN")) return "RB";
		if (r.w=="either" && r.n(-1,1,"IN") && r.n(1,1,"IN")) return "DT";
		return "CC";
	}
	if (r.t=="LS") return "LS";
	if (r.t=="PDT") return "PDT";
	if (r.t=="RBS") {
		if (r.w=="hardest" && r.n(-1,1,"DT")) return "JJS";
		return "RBS";
	}
	if (r.t=="RBR") {
		if (r.n(-1,1,"DT")) return "JJR";
		if (r.n(1,1,"NNS")) return "JJR";
		if (r.n(1,1,"NN")) return "JJR";
		if (r.w=="earlier" && r.n(1,0,",") && r.n(2,0,"according")) return "RB";
		if (r.w=="earlier" && r.n(-1,0,"year") && r.n(1,0,"to")) return "JJR";
		if (r.n(1,1,"VBD") && r.n(2,1,"DT")) return "RB";
		if (r.n(-2,0,"the") && r.n(-1,0,"year")) return "RB";
		return "RBR";
	}
	if (r.t=="CD") {
		if (r.w=="one" && r.n(-1,0,"no")) return "NN";
		if (r.n(-1,0,"No")) return "NN";
		if (r.s(-3,"ned")) return "JJ";
		if (r.s(-2,"th")) return "JJ";
		if (r.n(-1,1,"") && r.n(1,1,".")) return "LS";
		if (r.w=="one" && r.n(1,0,"'s")) {
			if (r.n(-2,1,"IN") && r.n(-1,1,"VBG")) return "PRP";
			return "NN";
		}
		if (r.w=="one" && r.n(1,1,"MD")) return "PRP";
		if (r.n(-1,0,"") && r.n(1,0,")")) return "LS";
		if (r.n(-1,1,":") && r.n(1,1,")")) return "LS";
		if (r.n(-1,0,"Game")) return "NNP";
		if (r.w=="one" && r.n(-1,0,"the") && r.n(1,0,"that")) return "NN";
		if (r.s(-3,"ury")) return "JJ";
		if (r.w=="1990s" && r.n(-1,1,"JJ")) return "NNS";
		if (r.s(-4,"S\/2")) return "NNP";
		return "CD";
	}
	if (r.t=="EX") {
		if (r.n(1,1,".")) return "RB";
		if (r.n(1,1,",")) {
			if (r.w=="there" && r.n(-1,0,"lived")) return "EX";
			return "RB";
		}
		if (r.n(1,1,"IN")) return "RB";
		if (r.w=="there" && r.n(1,1,"CC")) return "RB";
		if (r.n(-1,1,"NNS")) {
			if (r.n(1,0,"were")) return "EX";
			return "RB";
		}
		if (r.w=="there" && r.n(1,1,"TO")) return "RB";
		if (r.n(-1,1,"RP")) {
			if (r.n(-2,1,"NNS")) return "EX";
			return "RB";
		}
		return "EX";
	}
	if (r.t=="IN") {
		if (r.w=="as" && r.n(2,0,"as")) return "RB";
		if (r.w=="that" && r.n(1,1,"VBZ")) {
			if (r.w=="that" && r.n(-1,1,"CC")) return "DT";
			if (r.w=="that" && r.n(1,0,"is") && r.n(2,0,",")) return "DT";
			if (r.n(-2,0,"")) return "DT";
			if (r.n(-2,0,"``")) return "DT";
			if (r.w=="that" && r.n(-1,0,"all")) return "DT";
			if (r.n(-1,0,"if")) return "DT";
			if (r.n(-1,0,"though")) return "DT";
			if (r.w=="that" && r.n(-2,0,"be")) return "DT";
			if (r.n(-2,1,"PRP")) return "DT";
			if (r.n(-1,0,"said")) return "DT";
			return "WDT";
		}
		if (r.w=="that" && r.n(1,1,"MD")) {
			if (r.n(-2,1,",") && r.n(-1,1,"CC")) return "DT";
			if (r.n(-1,0,"said")) return "DT";
			if (r.n(-2,0,"") && r.n(-1,0,"But")) return "DT";
			if (r.n(-2,1,"") && r.n(-1,1,"IN")) return "DT";
			if (r.w=="that" && r.n(-1,0,"because") && r.n(1,0,"would")) return "DT";
			if (r.w=="that" && r.n(-2,0,"of") && r.n(-1,0,"restructuring")) return "DT";
			return "WDT";
		}
		if (r.w=="that" && r.n(-1,1,"IN")) {
			if (r.n(-1,1,"IN") && r.n(1,1,"PRP")) return "IN";
			if (r.n(1,0,"the")) return "IN";
			if (r.n(1,1,"IN") && r.n(2,1,"NNS")) return "IN";
			return "DT";
		}
		if (r.w=="that" && r.n(1,1,"VBD")) {
			if (r.n(-1,0,"but")) return "DT";
			if (r.n(1,0,"was") && r.n(2,0,"n't")) return "DT";
			if (r.w=="that" && r.n(-1,1,"VBP")) return "DT";
			if (r.n(-1,0,"But") && r.n(1,0,"was")) return "DT";
			if (r.n(1,0,"was") && r.n(2,0,"the")) return "DT";
			if (r.w=="that" && r.n(-1,1,"RB") && r.n(1,1,"VBD")) return "DT";
			return "WDT";
		}
		if (r.w=="that" && r.n(1,1,"VBP")) return "WDT";
		if (r.w=="that" && r.n(1,1,"VB")) {
			if (r.w=="that" && r.n(-1,1,"VB") && r.n(1,1,"VB")) return "DT";
			return "WDT";
		}
		if (r.w=="that" && r.n(1,1,"VBN")) {
			if (r.w=="that" && r.n(-1,1,"VBD")) return "IN";
			if (r.n(2,0,"by")) return "DT";
			if (r.n(-2,1,"TO") && r.n(-1,1,"VB")) return "IN";
			if (r.w=="that" && r.n(-1,0,"market")) return "IN";
			if (r.n(-2,0,",")) return "IN";
			if (r.n(-1,0,"issues") && r.n(1,0,"changed")) return "IN";
			return "WDT";
		}
		if (r.w=="that" && r.n(1,1,"NN")) {
			if (r.w=="that" && r.n(2,0,"rates")) return "IN";
			if (r.n(2,0,"prices")) return "IN";
			if (r.w=="that" && r.n(1,0,"use")) return "WDT";
			if (r.n(-2,1,"VBG") && r.n(-1,1,"NNS")) return "WDT";
			if (r.n(1,1,"NN") && r.n(2,1,"PRP")) return "WDT";
			if (r.w=="that" && r.n(1,0,"anyone")) return "IN";
			if (r.w=="that" && r.n(2,0,"companies")) return "IN";
			if (r.w=="that" && r.n(1,0,"everyone")) return "IN";
			if (r.n(-2,0,"he")) return "IN";
			if (r.w=="that" && r.n(-1,0,"notes")) return "IN";
			if (r.w=="that" && r.n(-1,0,"adds")) return "IN";
			if (r.w=="that" && r.n(1,0,"investor")) return "IN";
			if (r.n(1,0,"state")) return "IN";
			if (r.n(1,0,"someone")) return "IN";
			if (r.n(-1,0,"found")) return "IN";
			if (r.n(1,0,"nobody")) return "IN";
			if (r.n(-1,0,"programs")) return "WDT";
			if (r.w=="that" && r.n(-2,1,"NNS") && r.n(-1,1,"NNS")) return "WDT";
			if (r.n(1,0,"work")) return "WDT";
			if (r.w=="that" && r.n(2,0,"a")) return "WDT";
			if (r.w=="that" && r.n(2,0,"from")) return "IN";
			if (r.w=="that" && r.n(2,0,"costs")) return "IN";
			if (r.w=="that" && r.n(-1,0,"claimed")) return "IN";
			if (r.n(1,0,"trading")) return "IN";
			if (r.w=="that" && r.n(-2,1,"VBD") && r.n(-1,1,"NNS")) return "IN";
			if (r.w=="that" && r.n(1,0,"trade")) return "WDT";
			if (r.n(-2,1,",") && r.n(-1,1,"NNS")) return "WDT";
			if (r.n(-2,1,"IN") && r.n(-1,1,"NNP")) return "WDT";
			if (r.w=="that" && r.n(-2,0,"all")) return "WDT";
			if (r.n(-1,0,"those")) return "WDT";
			if (r.w=="that" && r.n(1,1,"NN") && r.n(2,1,"JJR")) return "WDT";
			if (r.w=="that" && r.n(1,0,"none")) return "IN";
			if (r.w=="that" && r.n(2,0,"bonds")) return "IN";
			if (r.w=="that" && r.n(1,0,"everybody")) return "IN";
			if (r.n(-2,0,"'")) return "IN";
			if (r.w=="that" && r.n(1,0,"nothing")) return "IN";
			if (r.n(-1,0,"indicated")) return "IN";
			if (r.n(1,0,"emergency")) return "IN";
			if (r.n(-1,0,"signs")) return "IN";
			if (r.n(-1,0,"argued")) return "IN";
			if (r.n(1,0,"consumer") && r.n(2,0,"spending")) return "IN";
			if (r.n(-1,0,"shows")) return "IN";
			if (r.w=="that" && r.n(-1,0,"him")) return "IN";
			if (r.n(1,0,"mankind")) return "IN";
			if (r.n(2,0,"holders")) return "IN";
			if (r.n(1,0,"monitoring")) return "IN";
			if (r.n(2,0,"owners")) return "IN";
			if (r.n(1,0,"stock")) return "IN";
			if (r.w=="that" && r.n(-2,0,",") && r.n(-1,0,"noting")) return "IN";
			if (r.w=="that" && r.n(1,0,"something")) return "IN";
			if (r.w=="that" && r.n(-1,0,"so")) return "IN";
			if (r.n(2,0,"members")) return "IN";
			return "DT";
		}
		if (r.n(1,0,"'s")) {
			if (r.w=="that" && r.n(-2,1,"DT") && r.n(-1,1,"NN")) return "WDT";
			if (r.n(-2,1,"IN") && r.n(-1,1,"NN")) return "WDT";
			if (r.n(-2,1,"JJ") && r.n(-1,1,"NN")) return "WDT";
			return "DT";
		}
		if (r.w=="like" && r.n(1,1,"TO")) {
			if (r.w=="like" && r.n(-2,1,"PRP") && r.n(-1,1,"POS")) return "JJ";
			if (r.w=="like" && r.n(-1,0,"We")) return "VBP";
			if (r.w=="like" && r.n(-1,1,"NNS") && r.n(1,1,"TO")) return "VBP";
			return "VB";
		}
		if (r.w=="though" && r.n(-1,1,",") && r.n(1,1,",")) return "RB";
		if (r.n(-1,0,"the")) {
			if (r.n(-1,1,"DT") && r.n(1,1,"IN")) return "NN";
			if (r.n(-1,0,"the") && r.n(1,0,",")) return "NN";
			return "JJ";
		}
		if (r.n(1,0,"well") && r.n(2,0,".")) return "RB";
		if (r.n(-1,0,"a")) {
			if (r.s(-2,"ar")) return "JJ";
			return "NN";
		}
		if (r.w=="that" && r.n(-1,1,"NNS") && r.n(1,1,"RB")) {
			if (r.w=="that" && r.n(1,0,"nearly")) return "IN";
			if (r.n(2,1,"IN")) return "IN";
			return "WDT";
		}
		if (r.w=="that" && r.n(1,0,".")) return "DT";
		if (r.w=="over" && r.n(-1,0,"take")) return "RP";
		if (r.w=="that" && r.n(1,1,"RB") && r.n(2,1,"VBZ")) return "WDT";
		if (r.w=="As" && r.n(2,0,"as")) return "RB";
		if (r.w=="outside" && r.n(1,1,"NN")) return "JJ";
		if (r.w=="outside" && r.n(1,1,"NNS")) return "JJ";
		if (r.w=="in" && r.n(1,0,"on")) return "RP";
		if (r.w=="before" && r.n(1,0,".")) return "RB";
		if (r.w=="as" && r.n(1,1,"JJ") && r.n(2,1,"DT")) return "RB";
		if (r.n(-1,0,"took")) return "RP";
		if (r.w=="over" && r.n(-1,1,"VBN") && r.n(1,1,"IN")) {
			if (r.w=="over" && r.n(1,0,"whether")) return "IN";
			return "RP";
		}
		if (r.w=="over" && r.n(1,1,"TO")) return "RP";
		if (r.w=="about" && r.n(-2,0,"will")) return "RB";
		if (r.w=="before" && r.n(1,0,",")) return "RB";
		if (r.w=="as" && r.n(1,1,"JJ") && r.n(2,1,"TO")) return "RB";
		if (r.w=="that" && r.n(1,1,"NNS") && r.n(2,1,"DT")) return "WDT";
		if (r.w=="that" && r.n(-1,1,"TO")) return "DT";
		if (r.n(-1,0,"taking")) {
			if (r.w=="in") return "IN";
			return "RP";
		}
		if (r.n(-1,1,",") && r.n(1,1,".")) return "RB";
		if (r.w=="about" && r.n(-2,1,"NNP") && r.n(-1,1,"IN")) return "RB";
		if (r.w=="that" && r.n(-1,0,"do")) return "DT";
		if (r.w=="like" && r.n(-1,1,"MD")) return "VB";
		if (r.w=="on" && r.n(1,1,"TO")) {
			if (r.n(1,1,"TO") && r.n(2,1,"NN")) return "IN";
			return "RP";
		}
		if (r.w=="on" && r.n(-1,0,"take")) return "RP";
		if (r.w=="in" && r.n(1,0,"to")) return "RP";
		if (r.w=="in" && r.n(-1,0,"lock")) return "RP";
		if (r.w=="that" && r.n(1,1,":")) return "DT";
		if (r.w=="in" && r.n(-1,0,"called")) return "RP";
		if (r.w=="in" && r.n(-1,0,"turned")) return "RP";
		if (r.w=="along" && r.n(-1,1,"VB")) {
			if (r.w=="along" && r.n(1,1,"DT")) return "IN";
			return "RP";
		}
		if (r.w=="around" && r.n(-1,1,"VBG") && r.n(1,1,"IN")) {
			if (r.n(2,0,"the")) return "RP";
			return "RB";
		}
		if (r.n(1,0,"again")) return "RB";
		if (r.w=="about" && r.n(1,0,"15") && r.n(2,0,"%")) return "RB";
		if (r.w=="over" && r.n(1,0,",")) return "RB";
		if (r.w=="as" && r.n(1,1,"RB") && r.n(2,1,"IN")) return "RB";
		if (r.w=="about" && r.n(-2,0,"sales")) return "RB";
		if (r.w=="that" && r.n(-1,1,"DT")) return "DT";
		if (r.w=="over" && r.n(-1,0,"turn")) return "RP";
		if (r.n(-1,0,"rein")) return "RP";
		if (r.n(-1,0,"bring")) {
			if (r.w=="in" && r.n(-2,0,"could")) return "IN";
			return "RP";
		}
		if (r.n(-1,0,"turning")) return "RP";
		if (r.w=="as" && r.n(-1,1,"IN") && r.n(1,1,"JJ")) {
			if (r.n(-1,0,"that")) return "IN";
			return "RB";
		}
		if (r.w=="about" && r.n(1,0,"200")) return "RB";
		if (r.w=="about" && r.n(-2,0,"to") && r.n(-1,0,"yield")) return "RB";
		if (r.w=="about" && r.n(-1,1,"RB") && r.n(1,1,"$")) return "RB";
		if (r.w=="because" && r.n(-1,1,"VBN") && r.n(1,1,"IN")) return "RB";
		if (r.w=="over" && r.n(1,0,".") && r.n(2,0,"")) {
			if (r.n(-2,1,"VB")) return "RP";
			return "RB";
		}
		if (r.w=="as" && r.n(1,1,"RB") && r.n(2,1,"VBN")) {
			if (r.n(-2,1,"IN")) return "IN";
			return "RB";
		}
		if (r.n(-2,0,"do") && r.n(-1,0,"n't")) return "VB";
		if (r.w=="across" && r.n(1,1,"IN")) return "RP";
		if (r.w=="on" && r.n(1,1,"IN") && r.n(2,1,"NNS")) return "RP";
		if (r.n(-1,0,"putting")) return "RP";
		if (r.w=="on" && r.n(-1,1,"VBN") && r.n(1,1,"IN")) return "RP";
		if (r.w=="in" && r.n(1,1,",") && r.n(2,1,"CC")) return "RP";
		if (r.w=="as" && r.n(1,1,"RB") && r.n(2,1,"JJ")) {
			if (r.n(-1,1,"VBD")) return "IN";
			return "RB";
		}
		if (r.n(1,0,"are") && r.n(2,0,"a")) return "RB";
		if (r.w=="as" && r.n(-1,0,"n't")) return "RB";
		if (r.w=="about" && r.n(-2,0,"account") && r.n(-1,0,"for")) return "RB";
		if (r.w=="as" && r.n(1,1,"RB") && r.n(2,1,"TO")) return "RB";
		if (r.w=="that" && r.n(1,1,"JJ") && r.n(2,1,".")) return "RB";
		if (r.w=="as" && r.n(-1,0,"be")) return "RB";
		if (r.w=="over" && r.n(1,0,"and")) return "RB";
		if (r.w=="around" && r.n(1,0,"to")) {
			if (r.n(2,1,"VB")) return "RP";
			return "RB";
		}
		if (r.w=="about" && r.n(-1,1,"CC") && r.n(1,1,"$")) return "RB";
		if (r.w=="as" && r.n(-1,0,"have")) return "RB";
		if (r.w=="behind" && r.n(1,1,"IN")) {
			if (r.w=="behind" && r.n(-1,1,"VBN") && r.n(1,1,"IN")) return "RP";
			return "RB";
		}
		if (r.w=="about" && r.n(-1,0,"with")) {
			if (r.w=="about" && r.n(-2,1,"NNS") && r.n(-1,1,"IN")) return "IN";
			return "RB";
		}
		if (r.w=="as" && r.n(-1,1,"RP") && r.n(1,1,"JJ")) return "RB";
		if (r.w=="that" && r.n(1,1,"RB") && r.n(2,1,"VBN")) return "WDT";
		if (r.w=="that" && r.n(1,1,"NNS") && r.n(2,1,"PRP$")) return "WDT";
		if (r.w=="that" && r.n(1,1,"NNS") && r.n(2,1,"JJ")) return "WDT";
		if (r.w=="that" && r.n(-1,0,"reported") && r.n(1,0,"net")) return "DT";
		if (r.w=="around" && r.n(-1,0,"turned")) return "RP";
		if (r.w=="over" && r.n(-1,0,"taken") && r.n(1,0,"the")) return "RP";
		if (r.w=="around" && r.n(-2,0,"n't")) return "RP";
		if (r.w=="around" && r.n(1,0,",") && r.n(2,0,"''")) return "RP";
		if (r.n(-1,0,"throw")) return "RP";
		if (r.w=="in" && r.n(-1,0,"brought")) return "RP";
		if (r.w=="around" && r.n(-1,1,"NN") && r.n(1,1,".")) return "RP";
		if (r.w=="on" && r.n(1,0,"in")) return "RP";
		if (r.w=="about" && r.n(-1,0,"brought")) return "RP";
		if (r.w=="through" && r.n(1,1,"IN") && r.n(2,1,"DT")) return "RP";
		if (r.w=="about" && r.n(-2,0,"is") && r.n(-1,0,"just")) return "RB";
		if (r.w=="about" && r.n(1,0,"a") && r.n(2,0,"quarter")) return "RB";
		if (r.w=="about" && r.n(1,0,"15,000")) return "RB";
		if (r.w=="about" && r.n(-1,0,"has")) return "RB";
		if (r.w=="about" && r.n(-1,0,"bought")) return "RB";
		if (r.w=="that" && r.n(1,1,"RB") && r.n(2,1,".")) return "RB";
		if (r.w=="about" && r.n(-2,0,"yield") && r.n(-1,0,"of")) return "RB";
		if (r.w=="along" && r.n(-1,1,"VBG")) return "RB";
		if (r.w=="about" && r.n(1,0,"4") && r.n(2,0,"%")) return "RB";
		if (r.n(-1,1,"RB") && r.n(1,1,".")) return "RB";
		if (r.w=="as" && r.n(-2,0,"is") && r.n(-1,0,"just")) return "RB";
		if (r.w=="as" && r.n(-1,0,"is")) return "RB";
		if (r.w=="about" && r.n(1,0,"a") && r.n(2,0,"week")) return "RB";
		if (r.w=="about" && r.n(-1,1,"VBZ") && r.n(1,1,"RB")) return "RB";
		if (r.w=="about" && r.n(2,0,"20")) return "RB";
		if (r.w=="through" && r.n(-2,1,"NN") && r.n(-1,1,"VBD")) return "RB";
		if (r.w=="about" && r.n(-1,1,"JJ") && r.n(1,1,"CD")) return "RB";
		if (r.w=="about" && r.n(1,1,"CD") && r.n(2,1,"NNP")) return "RB";
		if (r.w=="because" && r.n(-2,1,"NNS") && r.n(-1,1,"VBD")) return "RB";
		if (r.w=="about" && r.n(1,0,"0.5")) return "RB";
		if (r.w=="per" && r.n(-1,1,"NNP")) return "FW";
		if (r.w=="like" && r.n(-1,0,"I")) return "VBP";
		if (r.w=="that" && r.n(1,1,"NNS") && r.n(2,1,"RP")) return "WDT";
		if (r.w=="that" && r.n(2,0,"''")) return "DT";
		if (r.w=="that" && r.n(1,1,",") && r.n(2,1,"NNP")) return "DT";
		if (r.w=="Though" && r.n(-1,1,"") && r.n(1,1,"NNP")) return "NNP";
		return "IN";
	}
	if (r.t=="WP$") return "WP$";
	if (r.t=="MD") {
		if (r.w=="will" && r.n(-1,0,"good")) return "NN";
		if (r.w=="will" && r.n(-1,0,"the")) return "NN";
		if (r.w=="'d" && r.n(-1,0,"maitre")) return "NNP";
		if (r.w=="will" && r.n(-1,1,"PRP$")) return "NN";
		return "MD";
	}
	if (r.t=="NNPS") {
		if (r.n(-2,1,"") && r.n(-1,1,"")) {
			if (r.n(1,1,"NNP")) return "NNPS";
			if (r.w=="Democrats" && r.n(-1,1,"")) return "NNPS";
			if (r.w=="Dataproducts") return "NNPS";
			if (r.w=="Americans" && r.n(-1,0,"") && r.n(1,0,"are")) return "NNPS";
			if (r.w=="Americans" && r.n(1,1,"MD")) return "NNPS";
			if (r.w=="Republicans" && r.n(1,1,"VBD")) return "NNPS";
			if (r.w=="Americans" && r.n(1,1,"VBD")) return "NNPS";
			if (r.w=="Republicans" && r.n(1,0,"have")) return "NNPS";
			return "NNS";
		}
		if (r.n(-2,0,"") && r.n(-1,0,"``")) return "NNS";
		if (r.w=="Brothers" && r.n(-1,0,"Salomon") && r.n(1,0,"Inc.")) {
			if (r.n(2,1,"CC")) return "NNPS";
			return "NNP";
		}
		if (r.w=="Communications" && r.n(-2,1,"") && r.n(-1,1,"NNP")) return "NNP";
		if (r.w=="Securities" && r.n(1,0,"Corp.")) return "NNP";
		if (r.n(-1,1,"JJ") && r.n(1,1,"")) return "NNS";
		if (r.n(-1,1,":")) return "NNS";
		if (r.n(-1,0,"Rock")) return "NNP";
		if (r.n(1,0,"added")) return "NNP";
		if (r.n(-1,0,"Information")) return "NNP";
		if (r.w=="Industries" && r.n(-2,1,"IN") && r.n(-1,1,"NNP")) {
			if (r.w=="Industries" && r.n(1,0,"Inc") && r.n(2,0,".")) return "NNPS";
			return "NNP";
		}
		if (r.n(-1,1,"NN") && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Technologies" && r.n(-1,0,"Star")) return "NNP";
		if (r.w=="Services" && r.n(2,0,",")) return "NNP";
		if (r.w=="Resources" && r.n(-1,0,"Integrated")) return "NNP";
		if (r.w=="Bankers" && r.n(1,1,"NNP") && r.n(2,1,"VBD")) return "NNP";
		if (r.n(-1,0,"East") && r.n(1,0,",")) return "NNS";
		if (r.w=="Democrats" && r.n(2,0,"a")) return "NNS";
		if (r.w=="Americans" && r.n(1,1,"VBG")) return "NNS";
		if (r.w=="Americans" && r.n(1,0,"are")) return "NNS";
		if (r.w=="Relations" && r.n(-2,0,"Senate") && r.n(-1,0,"Foreign")) return "NNP";
		if (r.w=="Securities" && r.n(1,0,"Co.") && r.n(2,0,"Ltd.")) return "NNP";
		if (r.w=="Telecommunications" && r.n(-2,0,"New") && r.n(-1,0,"England")) return "NNP";
		if (r.w=="Associates" && r.n(-1,0,"&")) {
			if (r.w=="Associates" && r.n(-2,0,"Weil")) return "NNPS";
			return "NNP";
		}
		if (r.n(1,1,"NNPS") && r.n(2,1,"NNP")) return "NNP";
		if (r.n(-1,0,"Management")) return "NNP";
		if (r.w=="Airlines" && r.n(-1,1,"JJ")) {
			if (r.n(2,1,"NNP")) return "NNPS";
			return "NNP";
		}
		if (r.w=="Systems" && r.n(-1,0,"Profit")) return "NNP";
		if (r.w=="Futures" && r.n(-2,1,"IN") && r.n(-1,1,"NNPS")) return "NNP";
		if (r.w=="Dynamics" && r.n(1,1,"NNP")) return "NNP";
		if (r.w=="Industries" && r.n(-1,0,"Imo")) return "NNP";
		if (r.w=="Markets" && r.n(-1,0,"Capital") && r.n(1,0,"Inc.")) return "NNP";
		if (r.w=="Resources" && r.n(-1,0,"Data")) return "NNP";
		if (r.w=="Brothers" && r.n(-2,0,"at")) return "NNP";
		if (r.w=="Partners" && r.n(-1,0,"Acadia")) return "NNP";
		if (r.w=="Airways" && r.n(-2,0,"that") && r.n(-1,0,"British")) return "NNP";
		if (r.n(1,0,"Group") && r.n(2,0,".")) return "NNP";
		if (r.w=="Enterprises" && r.n(-2,1,"IN") && r.n(-1,1,"NNP")) return "NNP";
		if (r.w=="Industries" && r.n(1,0,"PLC")) return "NNP";
		return "NNPS";
	}
	if (r.t=="'") return "'";
	if (r.t=="JJS") {
		if (r.w=="most" && r.n(1,1,"JJ")) {
			if (r.w=="most" && r.n(1,0,"major")) return "JJS";
			if (r.n(-1,0,"for")) return "JJS";
			if (r.w=="most" && r.n(-2,1,"VBD") && r.n(-1,1,"IN")) return "JJS";
			if (r.n(-2,0,"suspension")) return "JJS";
			if (r.w=="most" && r.n(-1,0,"'s") && r.n(1,0,"prestigious")) return "JJS";
			if (r.w=="most" && r.n(-1,0,"in")) return "JJS";
			if (r.n(1,0,"basic")) return "JJS";
			return "RBS";
		}
		if (r.w=="most" && r.n(1,1,"RB")) return "RBS";
		if (r.w=="most" && r.n(1,1,"VBN")) return "RBS";
		if (r.w=="Most" && r.n(2,0,",")) return "RBS";
		if (r.w=="most" && r.n(-2,1,"NN") && r.n(-1,1,"POS")) return "RBS";
		if (r.w=="best" && r.n(-1,1,"VBD")) return "RBS";
		if (r.w=="best" && r.n(1,1,"VBN") && r.n(2,1,"TO")) return "RB";
		return "JJS";
	}
	if (r.t=="JJR") {
		if (r.w=="more" && r.n(1,1,"JJ")) {
			if (r.w=="more" && r.n(-1,1,"CD") && r.n(1,1,"JJ")) return "JJR";
			if (r.w=="more" && r.n(-2,1,"CD") && r.n(-1,1,"CC")) return "JJR";
			if (r.w=="more" && r.n(-1,0,"that")) return "JJR";
			if (r.w=="more" && r.n(1,0,"straight")) return "JJR";
			return "RBR";
		}
		if (r.n(1,1,"RB")) {
			if (r.s(-4,"nger")) return "JJR";
			if (r.n(-2,0,"will") && r.n(-1,0,"be")) return "JJR";
			return "RBR";
		}
		if (r.w=="less" && r.n(1,1,"JJ")) {
			if (r.n(-1,0,"annually") && r.n(1,0,"full")) return "CC";
			if (r.n(-2,0,"7\/8") && r.n(-1,0,"%")) return "CC";
			if (r.w=="less" && r.n(-2,1,"NN") && r.n(-1,1,"IN")) return "JJR";
			return "RBR";
		}
		if (r.n(1,1,"VBN")) {
			if (r.w=="higher" && r.n(1,1,"VBN")) return "JJR";
			if (r.w=="better" && r.n(2,0,"to")) return "RB";
			return "RBR";
		}
		if (r.w=="lower" && r.n(-1,1,"TO")) {
			if (r.n(-2,1,"NN") && r.n(-1,1,"TO")) return "JJR";
			return "VB";
		}
		if (r.w=="more" && r.n(1,0,"than") && r.n(2,0,"doubled")) {
			if (r.n(-1,1,"NNS")) return "JJR";
			return "RBR";
		}
		if (r.w=="more" && r.n(1,1,"IN") && r.n(2,1,"VBN")) return "RBR";
		if (r.w=="More" && r.n(-1,1,"") && r.n(1,1,"JJ")) return "RBR";
		if (r.w=="lower" && r.n(-1,1,"MD")) return "VB";
		if (r.n(2,0,"ever")) return "RBR";
		if (r.w=="less" && r.n(1,1,"NNS")) return "CC";
		if (r.w=="more" && r.n(1,0,"than") && r.n(2,0,"double")) return "RBR";
		if (r.w=="better" && r.n(-1,1,"NN")) {
			if (r.n(2,1,"''")) return "RB";
			return "RBR";
		}
		if (r.w=="better" && r.n(-1,1,"VBD")) return "RBR";
		if (r.w=="harder" && r.n(1,1,"IN")) return "RBR";
		if (r.n(1,0,"on") && r.n(2,0,"the")) return "RBR";
		if (r.w=="more" && r.n(1,1,"VBG")) {
			if (r.w=="more" && r.n(-1,0,"the")) return "JJR";
			return "RBR";
		}
		if (r.w=="more" && r.n(1,0,"like") && r.n(2,0,"a")) return "RBR";
		if (r.n(-1,0,"care")) return "RBR";
		if (r.w=="lower" && r.n(-1,1,"NN") && r.n(1,1,".")) return "RBR";
		if (r.n(-2,1,"NN") && r.n(-1,1,"RB")) {
			if (r.n(-1,1,"RB") && r.n(1,1,"NN")) return "JJR";
			if (r.n(-2,0,"level")) return "JJR";
			return "RBR";
		}
		if (r.n(-1,1,"NNS") && r.n(1,1,".")) return "RBR";
		if (r.w=="better" && r.n(1,1,"VB")) return "RB";
		if (r.w=="better" && r.n(1,1,"IN") && r.n(2,1,"PRP")) return "RB";
		if (r.w=="more" && r.n(1,1,"IN") && r.n(2,1,"VBG")) return "RBR";
		if (r.w=="lower" && r.n(1,1,"IN") && r.n(2,1,"RB")) return "RBR";
		if (r.n(-2,1,"VBN") && r.n(-1,1,"RP")) return "RBR";
		if (r.w=="more" && r.n(-2,1,"VBD") && r.n(-1,1,"VBN")) return "RBR";
		if (r.n(1,1,",") && r.n(2,1,"VBN")) return "RBR";
		if (r.n(-1,0,"matters")) return "RBR";
		if (r.w=="more" && r.n(1,0,"than") && r.n(2,0,"five")) return "RBR";
		if (r.w=="better" && r.n(-1,0,"any")) return "RBR";
		if (r.n(-1,0,"moved")) return "RBR";
		if (r.w=="lower" && r.n(-1,0,"moderately")) return "RBR";
		if (r.n(-1,0,"go")) return "RBR";
		if (r.w=="better" && r.n(-2,1,"NNP") && r.n(-1,1,"VBZ")) return "RBR";
		if (r.w=="Lower" && r.n(1,1,"NNP")) return "NNP";
		return "JJR";
	}
	if (r.t=="SYM") return "SYM";
	if (r.t=="UH") return "UH";
	return false;
};