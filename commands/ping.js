module.exports = {
    name: 'ping',
    description: 'Pings the bot.',
    cooldown: 120,
    async execute(client, message, args, Discord, config){
        await message.delete();
        const ping = new Discord.MessageEmbed()
        .setColor(config["main_config"].colour)
        .setTitle(`Your Bot's Ping is:`)
        .setDescription(`Bot Latency is **${Math.floor(message.createdTimestamp - message.createdTimestamp)}ms** \n API Latency is**${Math.round(client.ws.ping)}ms**`)
    
        message.channel.send(ping)
     
    },
}
