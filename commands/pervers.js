module.exports = {
    name: 'pervers',
    aliases: ['lewd', 'smirk', 'lenny', 'wut', 'regard', 'cdur'],
    usage: '',
    description: '( ͡° ͜ʖ ͡°)',
    execute(message, args) {
	    
	let alea = parseInt(Math.random() * 2); 
	    
	if(alea==0) {
		message.channel.send('', {
		    file : "https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/aiko-lewd2.gif"
		});
   	
	} else {
		message.channel.send('', {
		    file : "https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/aiko-lewd.gif"
		});
	}
		
        
    },
};
