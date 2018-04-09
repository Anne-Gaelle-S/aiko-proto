const { prefix } = require('../config.json');
module.exports = {
    name: 'hello',
    aliases: ['coucou', 'salut', 'plop', 'hoy', 'lu', 'hi', 'bonjour', 'hey', 'plop', 
    'hola', 'konnichiwa', 'ohayo', 'halo', 'gutentag'],
    usage: ' ',
    description: 'hello!',
    execute(message, args) {
    	let alea = parseInt(Math.random() * 5);

    	let possibilites = [`Bonjour ${message.author}.`];
    	possibilites.push('Coucou.');
    	possibilites.push('Konnichiwa mina-san !');
    	possibilites.push(`Salut ${message.author}.`);
    	possibilites.push('...');

    	message.channel.send(possibilites[alea]);
        
    },
};