module.exports = async (client, Discord, config, member) => {
    const channels = client.channels.cache.get(`${config["logging_config"].welcomechannel}`)
    const embed = new Discord.MessageEmbed()
            .setColor(config["main_config"].colour)
            .setAuthor("Someone has joined", `${member.user.displayAvatarURL()}`)
            .setDescription(`Welcome ${member.user} (${member.user.tag}) to ${member.guild.name}, Hope you have a great stay`)
            .setFooter(`Made By Xotiic#2533`)
            .setTimestamp();
    channels.send(embed)
}