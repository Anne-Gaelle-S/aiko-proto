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

	res = res / taille;
	
	return res;
}


function commandesAPart(message, mutes){
	let msg = message.toString().substring(1);
	let motifs = msg.split(' ');
	let res = 0;
	let reponse = "";
	
	motifs.forEach(function(word) { 

		if(word.toUpperCase() == "CHUT" || 
			   		word.toUpperCase() == "TG" ||
			   		word.toUpperCase() == "SHUTUP" )
			   		{ res=1; }

		if(word.toUpperCase() == "DECHUT" ||
			word.toUpperCase() == "PARLE" ||
			word.toUpperCase() == "LIBERE") 
			{ res=2; }

	});

	let auteur = (message.author.username).toUpperCase();
	const taggedUser = message.mentions.users.first();

	switch (res) {
		case 1:
			mutes[0]=0;
			//if(auteur == "KRYSTHALIA" || auteur=="KAINNALY"){
			if(auteur != "XELJIRA" && auteur != "ANDERSON" && auteur != "STALKER-SAN" && auteur != taggedUser.username.toUpperCase() ){
				if(taggedUser.username.toUpperCase()=="KRYSTHALIA"){
					message.channel.send("YOU SCHALL NOT MUTE !");
				} else {
					message.channel.send(taggedUser+", tu parles trop, tais toi un peu.");
        			mutes.push(taggedUser.toString());
        		}
        	}
			break;
		case 2:
			mutes[0]=0;
			//if(auteur == "KRYSTHALIA" || auteur=="KAINNALY"){
			if(auteur != "XELJIRA" && auteur != "ANDERSON" && auteur != "STALKER-SAN" && auteur != taggedUser.username.toUpperCase()){
				if(taggedUser.username.toUpperCase()=="KRYSTHALIA"){
					message.channel.send("YOU SCHALL NOT UNMUTE !");
				} else {
					message.channel.send(taggedUser+", tu peux à nouveau parler.");
		        	for(var i= 0; i < mutes.length; i++)
		        	{
		            	if(mutes[i]==taggedUser.toString()){
		            	    delete mutes[i];
		        	    }
		     	   }
		     	}
	    	}
			break;
		default: 
			mutes[0]=1;
	}
	
	if(auteur == "KRYSTHALIA"){
		console.log(message);
		if(message == "Soleil :sun_with_face: !") {
		   	message.channel.send("VOS GUEULE LES BOTS !");
			message.channel.send("*/flip_table");
	   	}
	}
	

	return mutes;
}

var fs = require('fs');
var mesDonnees = JSON.parse(fs.readFileSync('./data/out/data.json', 'utf8'));

module.exports = {
   cherchePattern: function(message, mutes) {
   		let msg = message.toString().substring(1);

		let h = 0; let nbAmelio = 0; let reponse = ""; 
		let reste = mesDonnees.length;
		let nonFinFichier = (reste!=0);

		mutes = commandesAPart(message, mutes);
	   
	   	if(mutes[0]==1){
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

			console.log("Taux de ressemblance: "+h);
			console.log("Nombre d'amélioration : "+nbAmelio);
			if(!reponse) {
				reponse = "désolé je ne sais pas quoi répondre ... ";
			} 
			message.reply(reponse);
		}


		return mutes;
   }
}
