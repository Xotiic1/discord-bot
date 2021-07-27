module.exports = {
    name: 'unlock',
    description: 'Unlocks Down a channel.',
    async execute(client, message, args, Discord, config){
        if (message.member.hasPermission(['MANAGE_MESSAGES'])) {
            const member = message.guild.roles.cache.find(role => role.name === 'member');
            const channel = message.guild.id
            message.channel.updateOverwrite(channel,{'SEND_MESSAGES': true})
            message.channel.updateOverwrite(member,{'SEND_MESSAGES': true})
            const unlockdown = new Discord.MessageEmbed()
            .setColor(config["main_config"].colour)
            .setDescription(`This channel has been unlocked by ${message.author} :unlock:`)
            message.channel.send(unlockdown)
            }
            else {
                message.channel.send('You Cannot do this command')
        }
    }
}