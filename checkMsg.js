module.exports = {
   checkMsg: function(message, mutes) {
   		//nep if necessary
   		let neeep = parseInt(Math.random() * 1000);
		if (neeep==0)  { 
			let nep = "nep";
	        do { continu = (parseInt(Math.random() * 5) == 0); 
	            nep += " nep";
	        } while (continu)
	        message.channel.send(nep);
		}

		for(var i=0; i < mutes.length; i++)
		{
			if(message.author == mutes[i]){
				if(message.author.username.toUpperCase() != "KRYSTHALIA"){
					message.delete();
				}
			}
		}

		let msg = message.toString().substring(1);
		let motifs = msg.split(' ');
		let res = 0;
		let reponse = "";
		
		motifs.forEach(function(word) { 
		   	if(word.toUpperCase() == "QUAND"){ res++; }
			if(word == '?'){ res++; }
		});

		if(res>1){
			message.reply(", dans 10 minuuuuutes !!!");
		}

   }
}