module.exports = async (client, Discord, config, message) => {
  if (config["logging_config"].messagedeletelogging = "true") {
          const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
          if (channels) {
                  const embed = new Discord.MessageEmbed()
                          .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
                          .setDescription(
                                  `A message has beeen deleted in ${message.channel} by ${message.author.tag} \n\n **Content** \n ${message.content}`
                                  )
                          .setFooter(`Message id -${message.channel.id}`)
                          .setColor(config["main_config"].colour)
                          .setTimestamp();
                  channels.send(embed);

          }
  }
}

//{ dynamic : true, format: 'png' }