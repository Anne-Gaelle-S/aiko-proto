module.exports = {
    name: 'ez',
    aliases: ['easy', 'dealwithit', 'simple', 'basique'],
    usage: ``,
    description: 'c\'était trop simple...',
    execute(message, args) {

		message.channel.send('Simple.', {
            file : "https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/ez.gif"
        });

    },
};