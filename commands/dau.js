module.exports = {
	name: 'dau',
	description: 'Tira un dau.',
	execute(message) {
		//Joc dau (Treu valors 1-6)
		const dau = Math.floor(Math.random() * 6) + 1;
		return message.channel.send("Ha sortit el numero " + dau);
	},
};