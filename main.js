const Discord = require('discord.js');
const client = new Discord.Client({
        partials: ['MESSAGE', 'USER', 'REACTION', 'CHANNEL']
});
const config = require('./config.json');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['Command', 'Event'].forEach(handler => {
        require(`./handlers/${handler}`)(client, Discord, config)
})

client.login(config["main_config"].token)