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

   }
}