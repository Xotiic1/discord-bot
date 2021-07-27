module.exports = {
    name: 'remove',
    async execute(client, message, args, Discord, config)
    {
        if(!message.channel.name.includes('ticket-'))
        {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || memberTarget.user.id;
            if(!member)
            {
                return message.channel.send(`You did the command wrong`);
            }
            try
            {
                message.channel.updateOverwrite(member.user,
                {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false,
                    ATTACH_FILES: false,
                    READ_MESSAGE_HISTORY: false,
                }).then(() =>
                {
                    message.channel.send(`Removed ${member} from this channel`)
                });
            }
            catch (e)
            {
                return message.channel.send('An error occured');
            }
        }
    },
};