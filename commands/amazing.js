module.exports = {
    name: 'e',
    aliases: ['amazing', 'maze', 'labyrinth', 'laby'],
    usage: ``,
    description: 'MAZING !!',
    execute(message, args) {

		message.channel.send('', {
            file : "https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/mazing.png"
        });
    },
};
