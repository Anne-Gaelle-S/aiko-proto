const fs = require('fs');
const Discord = require('discord.js'); // require the discord.js module
const { prefix } = require('./config.json');

const client = new Discord.Client(); // create a new Discord client
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => { 
    console.log('Prête!');
    client.user.setActivity(`se créer. (-aide)`);
});

client.on('message', message => {
	let neeep = parseInt(Math.random() * 2);
	if (neeep==0)  { client.commands.get(nep).execute(message, args); }

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) {
		const co = require('./cogite.js');
		if(message.toString()[1]!='>'){
			message.reply(co.cherchePattern(message));
		}
	} else {

		if (command.args && !args.length) {
			let reply = `Merci de mettre des arguments, ${message.author}!`;

			if (command.usage) {
				reply += `\nLe bon usage de la commande est: \`${prefix}${command.name} ${command.usage}\``;
			}

			return message.channel.send(reply);
		}

		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}

		//Timer entre les commandes
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

		if (!timestamps.has(message.author.id)) {
			timestamps.set(message.author.id, now);
			setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		}
		else {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`merci d'attendre ${timeLeft.toFixed(1)} seconde(s) avant de réutiliser la commande \`${command.name}\`.`);
			}

			timestamps.set(message.author.id, now);
			setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		}

		//Exécution de la commande
		try {
			command.execute(message, args);
		}
		catch (error) {
		    console.error(error);
		    message.reply('Il y a eu une erreur en essayant d\'exécuter cette commande!');
		}
	}

});

// login to Discord with your app's token
client.login(process.env.TOKEN); 