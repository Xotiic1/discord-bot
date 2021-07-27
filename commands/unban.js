module.exports = {
    name: "unban",
    async execute(client, message, args, Discord, config) {
        const member = args[0];
        const logchannel = client.channels.cache.get(`${config["logging_config"].logchannel}`)

        if (!message) {
            return message.channel.send('Please enter a id to unban')
        }

        try {
            message.guild.fetchBans().then(bans => {
                const user = bans.find(bans => bans.user.id === member.id)
                message.guild.members.unban(member)
            })

            const unbanembed = new Discord.MessageEmbed()
                .setTitle('A user has been unbanned')
                .setcolor('RED')
                .addField('User', `${user.user.tag} (${user.user.id})`)
                .addField('Ban Reason,', user.reason != null ? user.reason : 'no reason')
                .addField('Administrator', message.autor.id)
                .setTimestamp()

            await logchannel.send(unbanembed)
        } catch (e) {
            return message.channel.send('An error has occured')

        }
    }
}