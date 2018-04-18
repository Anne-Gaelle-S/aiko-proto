function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function ajouteEspace(maChaine, indice){
	if(maChaine[indice-1] != ' '){
		maChaine = maChaine.slice(0, (indice)) + ' ' + maChaine.slice((indice));
		indice++;
	}
   	if(maChaine[indice+1] != ' ')
		maChaine = maChaine.slice(0, (indice+1)) + ' ' +maChaine.slice((indice+1));
	
   	return maChaine;
}

function encode(maChaine){
   	var regAccentA = new RegExp('[àâä]', 'gi');
   	var regAccentE = new RegExp('[éèêë]', 'gi');
   	maChaine = maChaine.replace(regAccentA, 'a');
   	maChaine = maChaine.replace(regAccentE, 'e');

	var indices = [], i;
    for(i = 0; i < maChaine.length; i++){
        if (maChaine[i] == '!' || maChaine[i] == '?' || maChaine[i] == ',' || maChaine[i] == '.')
            maChaine = ajouteEspace(maChaine, i);
    }


	maChaine = maChaine.toUpperCase();

	return maChaine;
}


function correspondance(msg, msgAlea){
	msgAlea = encode(msgAlea);
	msg = encode(msg);
	let motifs = msg.split(' ');
	let res = motifs.reduce( function(acc, val) {
		if(val!='?' && val!='!' && val != '.' && val != ','){
			let reg = new RegExp("("+val+")");
			if(msgAlea.match(reg)) acc++; 
		}
		return acc;
	} , 0);
	res = res / (motifs.length);

	return res;
}


module.exports = {
   cherchePattern: function(msg) {
   		msg = msg.toString().substring(1);

		var fs = require('fs');
		var mesDonnees = JSON.parse(fs.readFileSync('./data/out/data.json', 'utf8'));

		let h = 0; let reponse = "";
		let reste = mesDonnees.length;
		let nonFinFichier = (reste!=0);

		while( h < 0.5 && nonFinFichier ){
			let nbAlea = getRandomInt(reste);
			let msgAlea = mesDonnees[nbAlea].input;

			let hbis = correspondance(msg, msgAlea);
			if (hbis>0.5){
				if(hbis>h){
					h = hbis;
					reponse = mesDonnees[nbAlea].output;
				}
			}

			mesDonnees.splice(nbAlea, 1);

			reste --;
			nonFinFichier = (reste!=0);
		}

		if(!reponse) {
			reponse = "Désolé je ne sais pas quoi répondre ... ";
		} 

		return reponse;
   }
}
