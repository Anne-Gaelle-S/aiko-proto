module.exports = {
    name: 'insulte',
    aliases: [''],
    usage: `<user>`,
    description: 'baka baka baka baka ! ',
    execute(message, args) {
        var fs = require('fs');
        var mesInsultes = JSON.parse(fs.readFileSync('./data/insultes.json', 'utf8'));

        let alea = parseInt(Math.random() * mesInsultes.length); 
        let rare = parseInt(Math.random() * 50);

        if (rare==0) return message.channel.send("お前はもう死んでいる (Omae wa mo shindeiru!)");
       
        if (!message.mentions.users.size) {
            let msg = `${message.author} dit que quelqu'un est vraiment ${mesInsultes[alea]}.`;
            return message.channel.send(msg);
        }

        const avatarList = message.mentions.users.map(user => {
            let msg = `${user.username} tu es vraiment ${mesInsultes[alea]}`;
            return msg;
        });

        message.channel.send(avatarList);
    },
};
