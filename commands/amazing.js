module.exports = {
    name: 'e',
    aliases: ['amazing', 'maze', 'labyrinth', 'laby'],
    usage: ``,
    description: 'C\'est deux labyrinthes côtes à côtes, qu\'est ce que tu voyais ?',
    execute(message, args) {

		message.channel.send('MAZING !!', {
            file : "https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/mazing.png"
        });
    },
};
