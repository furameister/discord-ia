module.exports = {
	name: 'nowplaying',
	description: 'Et mostra la canço que ara mateix sona.',
	execute(message) {
		//Nom de la cançó que sona
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('No hi ha res sonant.');
		return message.channel.send(`Ara sona: ${serverQueue.songs[0].title}`);
	},
};