module.exports = {
    name: 'nep',
    aliases: [''],
    usage: ``,
    description: 'nep nep',
    execute(message, args) {
        let nep = "nep";

        do {
            continu = (parseInt(Math.random() * 5) == 0); 
            nep += " nep";
        } while (continu)
        
        message.channel.send(nep);
    },
};
