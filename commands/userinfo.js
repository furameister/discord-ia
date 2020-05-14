const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'userinfo',
	description: "Mostra informació sobre l'usuari seleccionat.",
	//Mostra nom de lusuari, id i avatar
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const user = getUserFromMention(args[0], client);
		message.channel.send(`Nom: ${user.username}, ID: ${user.id}, Avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}
};