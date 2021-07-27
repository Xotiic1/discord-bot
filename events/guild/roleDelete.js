module.exports = async (client, Discord, config, role) => {
  if (config["logging_config"].roledeletelogging = "true") {
          const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
          if (channels) {
                  const embed = new Discord.MessageEmbed()
                          .setTitle('Role Deleted')
                          .addField(`Role Deleter`, role.author, true)
                          .addField(`Role Name`, role.name, true)
                          .setColor(config["main_config"].colour)
                          .setTimestamp();
                  channels.send(embed)
          }
  }
}