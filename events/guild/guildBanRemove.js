module.exports = async (client, Discord, config, guild, user) => {
    if (config["logging_config"].banlogging = "true") {
            const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
            const embed = new Discord.MessageEmbed()
                    .setColor(config["main_config"].colour)
                    .setAuthor("user unbanned", guild.iconURL)
                    .addField('unbanned user', user.tag, true)
                    .addField('user id', user.id, true)
                    .setTimestamp()
            channels.send(embed)
    }
}