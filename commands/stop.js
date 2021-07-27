module.exports = {
	name: 'stop',
	description: 'Stop all songs in the queue!',
	async execute(client, message, args, Discord, config){
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('You have to be in a voice channel to stop the music!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};