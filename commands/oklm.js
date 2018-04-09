const { prefix } = require('../config.json');
module.exports = {
    name: 'oklm',
    aliases: ['aucalme', 'tranquille', 'pepere', 'sanspression'],
    usage: ' ',
    description: 'oklm quoi',
    execute(message, args) { 
        let rare = parseInt(Math.random() * 10);
        let msg = `O.K.L.M. 👌`;
        if (rare==0) {
            msg += `\nJ'suis dans mon jaccuzzi...`;
        }
    	message.channel.send(msg);
    },
};