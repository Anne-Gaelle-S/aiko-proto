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

const articles = 'LA LE LES DE DU UN UNE DES';

function correspondance(msg, msgAlea){
	//let tailleMsg = msg.length;

	msgAlea = encode(msgAlea);
	msg = encode(msg);
	let motifs = msg.split(' ');
	let taille = motifs.length;
	let res = motifs.reduce( function(acc, val) {
		if(val!='?' && val!='!' && val != '.' && val != ',' ){
			let reg = new RegExp("("+val+")");

			if (!articles.match(reg)){
				if(msgAlea.match(reg)) {acc++; console.log("Amelio. Val : "+val+"\tAcc: "+acc);}
			} else {
				taille--;
			}
		} else {
			if( ((msgAlea.indexOf('?')>(-1)) && (msg.indexOf('?')>(-1)))) {
				acc++; acc+=0.5;
			}
		}
		return acc;
	} , 0);

	/*if(tailleMsg<30 && (res>=1)){
		res = res - 1;
	}*/

	res = res / taille;
	
	return res;
}

function timeQuestion (msg){
	let motifs = msg.split(' ');
	let taille = motifs.length;
	let res = 0;
	
	motifs.forEach(function(word) { 
	   	if(word.toUpperCase() == "QUAND"){ res++; }
		if(word == '?'){ res++; }
	});
	
	
	return (res>1);
}


module.exports = {
   cherchePattern: function(msg) {
   		msg = msg.toString().substring(1);

		var fs = require('fs');
		var mesDonnees = JSON.parse(fs.readFileSync('./data/out/data.json', 'utf8'));

		let h = 0; let nbAmelio = 0; let reponse = ""; 
		let reste = mesDonnees.length;
		//console.log("Nb de reste : "+reste);
		let nonFinFichier = (reste!=0);
	   
	   	if(timeQuestion(msg)){
			reponse = "Dans 10 minuuuutes !!";
		} else {
			while( nonFinFichier && nbAmelio<10 ){
				let nbAlea = getRandomInt(reste);
				let msgAlea = mesDonnees[nbAlea].input;

				let hbis = correspondance(msg, msgAlea);
				if (hbis>=0.8){
					if(hbis>h){
						h = hbis;
						reponse = mesDonnees[nbAlea].output;
						nbAmelio ++;
					}
				}

				mesDonnees.splice(nbAlea, 1);

				reste --;
				nonFinFichier = (reste!=0);
			}

			//console.log("\nFin fichier : "+!nonFinFichier);
			console.log("Taux de ressemblance: "+h);
			console.log("Nombre d'amélioration : "+nbAmelio);
		}

		if(!reponse) {
			reponse = "désolé je ne sais pas quoi répondre ... ";
		} 

		return reponse;
   }
}
