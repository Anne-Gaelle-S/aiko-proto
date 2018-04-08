module.exports = {
    name: 'pdp',
    aliases: ['icon', 'avatar'],
    usage: `<user>`,
    description: 'affiche la photo de profil de l\'utilisateur',
    execute(message, args) {
        if (!message.mentions.users.size) {
			return message.channel.send(`Ta photo de profil: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `Photo de profil de ${user.username} : ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
    },
};