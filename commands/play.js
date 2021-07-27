const ytdl = require("ytdl-core");
const queue = new Map();
module.exports = {
    name: "play",
    async execute(client, message, args, Discord, config)
    {
        try
        {
            const args = message.content.split(" ");
            const serverQueue = queue.get(message.guild.id);
            const voiceChannel = message.member.voice.channel;
            if(!voiceChannel)
                return message.channel.send(
                    "**You need to be in a voice channel to play music!**"
                );
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if(!permissions.has("CONNECT") || !permissions.has("SPEAK"))
            {
                return message.channel.send(
                    '**I need the `CONNECT` and `SPEAk` and permissions to join and speak in your voice channel!**'
                );
            }
            const songInfo = await ytdl.getInfo(args[1]);
            const song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
            if(!serverQueue)
            {
                const queueContruct = {
                    textChannel: message.channel,
                    voiceChannel: voiceChannel,
                    connection: null,
                    songs: [],
                    volume: 3,
                    playing: true
                };
                queue.set(message.guild.id, queueContruct);
                queueContruct.songs.push(song);
                try
                {
                    var connection = await voiceChannel.join();
                    queueContruct.connection = connection;
                    this.play(message, queueContruct.songs[0]);
                }
                catch (err)
                {
                    console.log(err);
                    queue.delete(message.guild.id);
                }
            }
            else
            {
                serverQueue.songs.push(song);
                return message.channel.send(
                    `**${song.title} has been added to the queue!**`
                );
            }
        }
        catch (error)
        {
            console.log(error);
        }
    },
    play(message, song)
    {
        const guild = message.guild;
        const serverQueue = queue.get(message.guild.id);
        if(!song)
        {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on("finish", () =>
            {
                serverQueue.songs.shift();
                this.play(message, serverQueue.songs[0]);
            })
            .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        serverQueue.textChannel.send(`Start playing: **${song.title}**`);
    }
}