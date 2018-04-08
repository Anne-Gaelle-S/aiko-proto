const { prefix } = require('../config.json');
module.exports = {
    name: 'hello',
    aliases: ['coucou', 'bonjour', 'hey', 'plop', 'hola', 'konnichiwa', 'ohayo'],
    usage: ' ',
    description: 'hello!',
    execute(message, args) {
        message.channel.send('Hello.');
    },
};