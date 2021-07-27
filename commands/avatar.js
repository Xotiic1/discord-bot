module.exports = {
    name: 'avatar',
    description: 'Send the avatar of the user that you ping',
    aliases: ['logo', 'pfp'],
    async execute(client, message, args, Discord, config){
        await message.delete();
        const avatarembed = new Discord.MessageEmbed()
        .setColor(config["main_config"].colour)
        .setImage(message.author.displayAvatarURL())
        message.channel.send(avatarembed)

    },
}