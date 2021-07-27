module.exports = async (client, Discord, config, newChannel, oldChannel) => {
  if (config["logging_config"].channelupdatelogging = "true") {
          const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
          if (channels) {
                  const embed = new Discord.MessageEmbed()
                          .setTitle('New Channel Update')
                          .addField('author')
                          .addField()
                          .setColor(config["main_config"].colour)
                          .setTimestamp();
                  channels.send(embed)
          }
  }
}