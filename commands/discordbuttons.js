module.exports = {
    name:'test',
    async execute(Discord, client, message, args, config) {
            const { MessageButton } = require('discord-buttons')
            const { MessageEmbed } = require('discord.js')

            const TEST1 = new MessageButton()
            .setStyle('green')//COLOUR
            .setLabel('Next Page')//TEXT OF THE BUTTON
            .setID('TEST1')// the id you use to get a click event

            const ping = new Discord.MessageEmbed()
            .setColor(config["main_config"].colour)
            .setTitle(`Your Bot's Ping is:`)
            .setDescription(`Bot Latency is **${Math.floor(message.createdTimestamp - message.createdTimestamp)}ms** \n API Latency is**${Math.round(client.ws.ping)}ms**`)
            message.channel.send( ping)
            // message.channel.send({embed: helloEMBED, button:[TEST1]})

            client.on('clickButton', async(button) =>{
                    if(button.clicker.user.bot) return;
                    if(button.id == 'TEST1') return console.log('OH YES DADDY YOUR BUTTON WORKS')
            })
            
    }
} 

