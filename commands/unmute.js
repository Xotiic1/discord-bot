module.exports=  {
    name : 'unmute', 
    async execute(client, message, args, Discord, config){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || memberTarget.user.id;

        if(!member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await member.roles.remove(role)

        message.channel.send(`${member.tag} is now unmuted`)
        
    }
}