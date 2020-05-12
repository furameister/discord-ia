module.exports = {
	name: 'avatar',
	description: 'Mostra la teva imatge de perfil.',
	execute(message) {
		message.reply(message.author.displayAvatarURL());
	},
};