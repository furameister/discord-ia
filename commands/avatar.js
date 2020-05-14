module.exports = {
	name: 'avatar',
	description: 'Mostra la teva imatge de perfil.',
	//Mostrar imatge del usuari
	execute(message) {
		message.reply(message.author.displayAvatarURL());
	},
};