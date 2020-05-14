const fs = require('fs')
const Discord = require('discord.js');
const Client = require('./client/Client');

//Configuració token i comandes (/commands/*.js)
const {
	prefix,
	token,
} = require('./config.json');

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Estat del bot
console.log(client.commands);

client.once('ready', () => {
	console.log('Actiu!');
});

client.once('reconnecting', () => {
	console.log('Reconectant!');
});

client.once('disconnect', () => {
	console.log('Desconectat!');
});

client.on('message', message => {
	if (message.content === 'ping') {
	  message.channel.send('pong');
	}
  });

  //Comanda basica
client.on('message', message => {
	if (message.content === 'hola') {
	  message.reply('Hola!');
	}
  });

  //Missatge benvinguda
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;
	channel.send(`Benvingut al servidor ${member}`);
  });

// Comandes que requereixen ID
client.on('message', async message => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		if(commandName == "ban" || commandName == "userinfo") {
			command.execute(message, client);
		} else {
			command.execute(message);
		}
	} catch (error) {
		console.error(error);
		message.reply('Error al executar la comanda. Torna a provar!');
	}
});


client.login(token);