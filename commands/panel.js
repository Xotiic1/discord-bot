module.exports = {
    name: "panel",
    async execute(client, message, args, Discord, config){
       // if (!message.member.roles.cache.has(config["ticket_config"].ticketteam)) return message.channel.send('You cannot do this command')
    const embed = new Discord.MessageEmbed()
    .setColor(config["main_config"].colour)
    .setDescription(`**React to make a ticket** `)
    .setFooter(`Made By Xotiic#2533`)
    .setTimestamp()
    message.channel.send(embed).then(message => {
        message.react('🎟️');
        });
    }
}