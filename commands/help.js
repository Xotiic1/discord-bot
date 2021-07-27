const pagination = require('discord.js-pagination')
module.exports = {
    name: "help",
    async execute(client, message, args, Discord, config){
        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .setDescription('`.kick`  \n `.ban`  \n `.purge` \n `.lockdown` \n `.unlockdown`')
        .setColor(config["main_config"].colour)
        .setTimestamp()
        const utility = new Discord.MessageEmbed()
        .setTitle('Utility')
        .setDescription('`.embed` \n `.serverinfo` \n `.userinfo`')
        .setColor(config["main_config"].colour)
        .setTimestamp()
        const ticket = new Discord.MessageEmbed()
        .setTitle('Ticket')
        .setDescription('`.new` \n `.close` \n `.add` \n `.remove` \n `.panel` \n `.transcript`')
        .setColor(config["main_config"].colour)
        .setTimestamp()

const pages = [
    moderation,
    utility,
    ticket
]
const emojilList = ["⏪", "⏩"];
const timeout = '120000';

pagination(message, pages, emojilList, timeout)
    }
}