module.exports = {
    name:'giverole',
    async execute(client, message, args, Discord, config){
        const target = message.mentions.users.first() || message.guild.members.get(args[0])
        console.log(target)
    }
}