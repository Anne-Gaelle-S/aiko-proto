const { prefix } = require('../config.json');
module.exports = {
    name: 'rip',
    aliases: ['rep'],
    usage: `<user>`,
    description: 'rip...',
    execute(message, args) {
        let alea = parseInt(Math.random() * 3); 
        let rare = parseInt(Math.random() * 100);

        let messageRip = [`Requiescat in pace... `];
        messageRip.push(`Reste en paix... `);
        messageRip.push(`Rest in peace... `);
       
        if (!message.mentions.users.size) {
            return message.channel.send(messageRip[alea]+` 🙏 💐 <:cercueil:432934894071709709>`);
        }

        const avatarList = message.mentions.users.map(user => {
            let msg = `${messageRip[alea]}${user.username}. 🙏 💐 <:cercueil:432934894071709709>`;
            if(rare == 0){
                msg+=` ............. ou pas 🖕`;
            } 
            return msg;
            
        });

        message.channel.send(avatarList);
    },
};