module.exports = {
	name: 'stop',
	description: 'Para la reproducció de música.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send("Has d'estar al canal de veu per escoltar música!");
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};