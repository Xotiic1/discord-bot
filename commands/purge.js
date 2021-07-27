module.exports = {
    name: 'purge',
    async execute(client, message, args, Discord, config){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permissions.`);
        await message.delete();

        if (!args[0]) return message.reply('Please enter an amount to delete')

        if (args[0] > 100) return message.reply('You can only delete up to 100 messages')

        if(args[0] < 1 ) return message.reply('You cant delete 1 message')
        
        message.channel.bulkDelete(args[0]);

    },
}