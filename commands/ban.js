module.exports = {
    name: 'ban',
    async execute(client, message, args, Discord, config) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || memberTarget.user.id;
        const reason = args.slice(1).join(" ") || "No reason"
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            const no = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`,
                `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(
                `You dont have any permissions to execute this command!`)
                .setColor(config["main_config"].colour)
            message.channel.send(no)
        }
        if (!member) {
            message.channel.send('Please mention someone')
        }
        if (member.bannable) {
            const dmuser = new Discord.MessageEmbed()
                    .setDescription(
                    `**You have been banned from ${message.guild.name} for reason**`)
                    .setAuthor(`${message.author.tag}`,
                    `${message.author.displayAvatarURL({ dynamic: true})}`)
                    .setImage(config["main_config"].imageban)
                    .setColor(config["main_config"].colour)
            member.send(dmuser)
            const done = new Discord.MessageEmbed()
            .setTitle('Success!')
            .setAuthor(`${client.user.username}`,
                    `${client.user.displayAvatarURL({ dynamic: true})}`)
                    .setDescription(`Banned ${member} for ${reason}.`)
                    .setFooter(`Requested by: ${message.author.username}`)
                    .setImage(config["main_config"].imageban).setColor(config[
                    "main_config"].colour)
            message.channel.send(done).then(() => member.ban({
                reason: reason
            }))
        }
    }
}