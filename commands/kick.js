module.exports = {
    name: 'kick',
    description: 'Kicks a user via mention',
    async execute(client, message, args, Discord, config){
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || memberTarget.user.id;
    const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

    if (!message.member.hasPermission('KICK_MEMBERS')) {
        const no = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`You dont have any permissions to execute this command!`)
            .setColor(config["main_config"].colour)
            message.channel.send(no)
    } else {
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            const no2 = new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`I dont have permissions to kick!`)
                .setColor(config["main_config"].colour)
                message.channel.send(no2)
        } else {

            if (!member) {
                const members = new Discord.MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                    .setDescription(`Please mention someone to kick!`)
                    .setColor(config["main_config"].colour)
                    message.channel.send(members)
                } else {
                    if (member.kickable) {
                        const dmuser = new Discord.MessageEmbed()
                        .setDescription(`**You have been kicked from ${message.guild.name} for reason**`)
                        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
                        .setImage(config["main_config"].imagekick)
                        .setColor(config["main_config"].colour)
                        member.send(dmuser)
                        
                            const done = new Discord.MessageEmbed()
                            .setTitle('Success!')
                            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                            .setDescription(`Kicked ${member} for ${reason}.`)
                            .setFooter(`Requested by: ${message.author.username}`)
                            .setColor(config["main_config"].colour)
                            message.channel.send(done)
                          .then(() => member.kick(reason))
                   

                    } else {
                        const cantkick = new Discord.MessageEmbed()
                            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                            .setDescription("This user is either a **Moderator**, **Administrator** or has **some** sort of role higher than mine!")
                            .setColor(config["main_config"].colour)
                            message.channel.send(cantkick)
                        
                            }
                         }
                    }
                }
            }
        }
    
