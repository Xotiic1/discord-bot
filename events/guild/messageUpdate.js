module.exports = async (client, Discord, config, newMessage, oldMessage) => {

   if (config["logging_config"].messageupdatelogging = "true") {
           const channels = client.channels.cache.get(`${config["logging_config"].logchannel}`)
           if (channels) {
                   const embed = new Discord.MessageEmbed()
                           .setTitle(`Message edited`)
                           .setDescription(`**The user ${oldMessage.author} has edited a message in <#${oldMessage.channel.id}>**`)
                           .addField(`Old Content`, `${oldMessage.content}`, false)
                           .addField(`New Content`, `${newMessage.content}`, false)
                           .setColor(config["main_config"].colour)
                           .setTimestamp();
                   channels.send(embed);
           }
   }
}