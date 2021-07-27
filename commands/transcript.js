const fs = require('fs')
const fetchAll = require('discord-fetch-all');

module.exports = {
	name: 'transcript',
    async execute(client, message, args, Discord, config){
        const transcriptchannel = client.channels.cache.get(`${config["ticket_config"].transcriptchannel}`)
            if(!message.channel.name.includes('ticket-')) return message.channel.send('**You cannot use this in here**')
            if (!message.member.roles.cache.has(config["ticket_config"].ticketteam)) return message.channel.send('**You cannot use this command**')
            const msg = await fetchAll.messages(message.channel, {
                reverseArray: true
            })
           const content = msg.map(m => `${new Date(m.createdAt).toLocaleString('en-US')} ${m.author.tag} - ${m.content}`)
                fs.writeFileSync(`${message.channel.name}.txt`, content.join('\n'), error => {
                    if (error) console.log(error)
                })
            const embed = new Discord.MessageEmbed()
                .setTitle(`Transcript for channel ${message.channel.name}`)
                .setDescription(`This is a archive for a ticket that was closed`)
                .setColor(config["main_config"].colour)
                .setTimestamp();
            transcriptchannel.send(new Discord.MessageAttachment(`${message.channel.name}.txt`, `${message.channel.name}.txt`)); await
            transcriptchannel.send(embed)

    }
}