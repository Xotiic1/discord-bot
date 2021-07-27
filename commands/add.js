module.exports = {
    name: 'add',
    async execute(client, message, args, Discord, config){
        if (!message.member.roles.cache.has(config["ticket_config"].ticketteam)) return message.channel.send(`You can't do this command`)
    if(!message.channel.name.includes('ticket-')) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || memberTarget.user.id;
        if(!member){
            return message.channel.send(`You did the command wrong`);
        }
        try {
            message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
            }).then(() => {
                message.channel.send(`Added ${member} to this channel`)
            });

        }
        catch(e) {
            return message.channel.send('An error occured');  
            }
        }
    },
};
