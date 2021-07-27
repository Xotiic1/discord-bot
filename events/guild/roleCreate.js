module.exports = async (client, Discord, config, role) => {
  if (config["logging_config"].rolecreatelogging = "true") {
          const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
          if (channels) {
                  const embed = new Discord.MessageEmbed()
                          .setColor(config["main_config"].colour)
                          .setTimestamp();
                  channels.send(embed)
          }
  }
}