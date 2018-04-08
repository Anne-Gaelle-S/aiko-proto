
module.exports = {
    name: 'aide',
    aliases: ['help', 'infos', 'commands', 'commandes'],
    description: 'liste toutes les commandes',
    usage: '[nom de la commande]',
    cooldown: 2,
    execute(message, args) {
    	const { prefix } = require('../config.json');
        const { commands } = message.client;
		const data = [];

		if (!args.length) {
		    data.push('Pour l\'instant je connais ces commandes : ');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nTu peux taper \`${prefix}aide [nom de la commande]\` pour avoir plus d'informations sur une commande en particulier.`);
		}
		else {
		    if (!commands.has(args[0])) {
			    return message.reply(', ce n\'est pas une commande valide.');
			}

			const command = commands.get(args[0]);

			data.push(`**Nom:** ${command.name}`);

			if (command.description) data.push(`**Description:** ${command.description}`);
			//if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
			if (command.usage) data.push(`**Usage:** \`${prefix}${command.name} ${command.usage}\``);

		}

		message.channel.send(data, {split: true});

    },
};