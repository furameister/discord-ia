module.exports = {
	name: 'skip',
	description: 'Salta a la seguent cançó!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send("Has d'estar al canal de veu per escoltar música!");
		if (!serverQueue) return message.channel.send('No hi ha més cançons a la cua. No puc saltar');
		serverQueue.connection.dispatcher.end();
	},
};