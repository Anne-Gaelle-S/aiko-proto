const { prefix } = require('../config.json');
module.exports = {
    name: 'hello',
    aliases: ['coucou', 'salut', 'plop', 'hoy', 'lu', 'hi', 'bonjour', 'hey', 'plop', 'hola', 'konnichiwa', 'ohayo'],
    usage: ' ',
    description: 'hello!',
    execute(message, args) {
    	alea = parseInt(Math.random() * 4);
    	//console.log("Alea: "+alea);
    	switch (alea) {
    		case 0 : 
    			message.channel.send(`Bonjour ${message.author}`);
    			break;

    		case 1 : 
    			message.channel.send('Coucou.');
    			break;

    		case 2 : 
    			message.channel.send('Konnichiwa mina-san !');
    			break;

    		case 3 :
    			message.channel.send(`Salut ${message.author}`);
    			break;

    		default : 
    			message.channel.send('Hello.');
    	}
        
    },
};