module.exports = {
    name: "new",
    async execute(client, message, args, Discord, config) {
        const supportrole = message.guild.roles.cache.get(`${config["main_config"].ticketeam}`);
        const prefix = config["main_config"].prefix;
        const allowedperms = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']
        message.guild.channels.create(`ticket-${message.author.username}`, {
                type: 'text',
                reason: `Some one created a ticket using ${prefix}`,
                parent: `${config["ticket_config"].ticketcategory}`,
                permissionOverwrites: [{
                        id: message.author,
                        allow: allowedperms
                    },
                    {
                        id: message.guild.id,
                        deny: allowedperms
                    }
                ],
            })
            .then(async message => {
                const thankyou = new Discord.MessageEmbed()
                    .setColor(config["main_config"].colour)
                    .setAuthor('Welcome to support!')
                    .setDescription(`**Thank you for contacting our support team! We will respond shortly**`)
                message.send(thankyou)
            })
    }
}