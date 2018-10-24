module.exports = {
    name: 'non',
    aliases: ['no', 'non.', 'no.', 'nein'],
    usage: ``,
    description: 'Non.',
    execute(message, args) {

		message.channel.send('', {
            file : "https://cdn.discordapp.com/attachments/385023746915827724/499495683879993344/non.png"
        });
    },
};
