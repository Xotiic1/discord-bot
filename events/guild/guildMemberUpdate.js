module.exports = async (client, Discord, config, oldMember, newMember) => {
  if (config["logging_config"].nicknamelogging = "true") {
          const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
          if (!oldMember.nickname && newMember.nickname) {
                  const newnick = new Discord.MessageEmbed()
                          .setAuthor(`${newMember.user.tag}`, `${newMember.user.displayAvatarURL()}`)
                          .setDescription(`**${newMember} nickname added**`)
                          .setFooter(`${newMember.user.username}'s ID: ${newMember.id}`)
                          .setTimestamp()
                          .setColor(config["main_config"].colour)
                          .addField("New nickname", newMember.nickname)
                  channels.send(newnick)
                  return;
          }
  }
  if (oldMember.nickname && newMember.nickname) {

          const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
          const nickchanged = new Discord.MessageEmbed()
                  .setAuthor(`${newMember.user.tag}`, `${newMember.user.displayAvatarURL()}`)
                  .setDescription(`**${newMember} nickname changed**`)
                  .setFooter(`${newMember.user.username}'s ID: ${newMember.id}`)
                  .setColor(config["main_config"].colour)
                  .addField("Before", oldMember.nickname)
                  .addField("After", newMember.nickname)
                  .setTimestamp();
          channels.send(nickchanged)
          return;
  }
}