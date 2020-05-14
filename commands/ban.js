const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'ban',
	description: "Prohibeix l'entrada d'una una persona al servidor.",
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = getUserFromMention(args[0], client);
		//Errors al banejar
		if (!member) {
			return message.reply('Necessites mencionar a la persona si la vols banejar');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('I can\'t ban this user.');
		}
		//Banejar
		return message.guild.members.ban(member)
			.then(() => message.reply(`${member.username} ha estat vetat d'entrar al servidor.`))
			.catch(error => message.reply('Error. Torna a provar'));
	},
};