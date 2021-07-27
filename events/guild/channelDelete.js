module.exports = async (client, Discord, config, channel) => {
  if (config["logging_config"].channeldeleteloggging = "true") {
          if (!channel.partial) {
                  const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
                  if (channels) {
                          const embed = new Discord.MessageEmbed()
                                  .setTitle('A channel was deleted')
                                  .setDescription(`a text chanel ${channel.name} has been deleted by ${entry.executor}`)
                                  .setColor(config["main_config"].colour)
                                  .setTimestamp();
                          channels.send(embed)
                  }
          }
  }
}