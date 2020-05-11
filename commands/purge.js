module.exports = {
	name: 'cls',
	description: 'Neteja els missatges antics del xat.',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Especifica el numero de missatges que vols esborrar. (Maxim 100)')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('El numero ha de ser entre 2 i 100. Torna a provar');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Error. No he pogut esborrar els missatges: ${error}`));
	},
};