const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'Llista de les comandes del servidor.',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `Comanda: ${command.name}, Descripció: ${command.description} \n`;
		}

		message.channel.send(str);
	},
};