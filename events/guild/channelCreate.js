module.exports = async (client, Discord, config, channel) => {
  if (config["logging_config"].channelcreatelogging = "true") {
          if (!channel.partial) {
                  const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
                  if (channels) {
                          const embed = new Discord.MessageEmbed()
                                  .setTitle("channel created")
                                  .addField('Channel Name', `${channel.name}`, true)
                                  .addField('Channel Creator', channel.author, true)
                                  .setColor(config["main_config"].colour)
                                  .setTimestamp();
                          channels.send(embed)
                  }
          }
  }
}