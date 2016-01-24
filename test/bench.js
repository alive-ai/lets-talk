// generated from http://www.faux-texte.com/texte-alea-5.htm
var texts = 'Une voiture venait d’arriver de l’autre côté de la barrière. Une personne sorti. Un militaire. Il était comme dans les films de guerre pensa David. Les décorations remplissaient l’avant de sa veste. Il s’approcha de la voiture où se trouvait David. Le chauffeur ouvrit la fenêtre.\n'+
'Florence est très excité à l’idée de se brancher sur un réseau militaire, mais en même temps, elle sait que cela va lui apporter des ennuis. Au moins, elle saura. Elle saura si David l’aime. Et en préparant le matériel demandé par Prélude, tout en pensant à David, elle se rappelle comment elle en est arrivée là.\n'+
'Désormais, tous les ordinateurs lui étaient accessible. Les centrales nucléaires, les services informatiques des grandes compagnies, de l’eau, du téléphone, la télévision, l’électricité, la défense, la bourse...\n' +
'L’ascenseur démarra tout seul après que la porte se soit fermée. Il descendait. Il n’arrêtait pas de descendre. Puis, il s’arrêta enfin. La porte s’ouvrit. Et David eut la stupeur de sa vie. Devant lui se déployait un complexe informatique. Une vingtaine de personnes se déplaçaient d’un poste à l’autre regardant au passage les écrans géants muraux situés au fond de la salle. Il y avait bien une cinquantaine d’ordinateurs, cinq écrans géants et, situé entre les écrans géants et les ordinateurs, une machinerie impressionnante.\n'+
'Internet n’est pas le seul réseau. Il existe un autre réseau plus performant. Je ne t’apprendrais rien en te disant qu’Internet a été crée par l’armée Américaine dans un but militaire. Internet n’était que le prototype. Un autre réseau a été créé pour les militaires. Complètement indépendant d’Internet. Tirant des leçons du premier réseau, le petit frère d’Internet est devenue un grand frère.'
;

// checking
var lang = require('../index');
var found = 0;
var correct = 0;
var total = 0;
var result = lang.read(texts, 'fr');
for(var i = 0; i < result.length; i++) {
	var sentence = result[i];
	for(var w = 0; w < sentence.words.length; w++) {
		var word = sentence.words[w];
		total ++;
		if (word[2] > -1) {
			found ++;
			if (word[2] > 0) correct ++;
		}
	}
}

console.log('found ', total, 'words');
console.log('tagged ', Math.round(found / total * 100), '%');
console.log('corrected ', Math.round(correct / found * 100), '%');
var it = 100;
var startAt = process.hrtime();
for(var i = 0; i < it; i++) {
	result = lang.read(texts, 'fr');
}
var endAt = process.hrtime();
startAt = startAt[0] * 1000000 + startAt[1] / 1000;
endAt = endAt[0] * 1000000 + endAt[1] / 1000;
var duration = (endAt - startAt) / 1000000;
total = total * it;
console.log('run ', total, ' words in ', Math.round(duration * 100) / 100, ' secs');
var rate = total / duration;
console.log('parse ', Math.round(rate / 100) / 10, ' KWords/sec');