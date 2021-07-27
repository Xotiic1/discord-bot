
module.exports = {
    name: "botinfo",
    async execute(client, message, args, Discord, config){
    const embed = new Discord.MessageEmbed()
        .setTitle(`Current Prefix: ${config["main_config"].prefix}`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField(`Yeet:`, )
    message.channel.send(embed)
    }
}