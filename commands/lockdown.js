module.exports = {
    name: 'lock',
    description: 'Locks Down a channel.',
    async execute(client, message, args, Discord, config){
        if (message.member.hasPermission(['MANAGE_MESSAGES'])) {
            const member = message.guild.roles.cache.find(role => role.name === 'member');
            const channel = message.guild.id
            message.channel.updateOverwrite(channel,{'SEND_MESSAGES': false})
            message.channel.updateOverwrite(member,{'SEND_MESSAGES': false})
            const lockdown = new Discord.MessageEmbed()
            .setColor(config["main_config"].colour)
            .setDescription(`This channel has been locked by ${message.author} :lock:`)
            message.channel.send(lockdown)
            }
            else {
                message.channel.send('You Cannot do this command')
        }
    }
}