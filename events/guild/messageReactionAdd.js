const fs = require('fs')
const fetchAll = require('discord-fetch-all');

module.exports = async (client, Discord, config, reaction, user, message) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        const allowedperms = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']
        if (reaction.emoji.name === "🎟️") {
                const supportrole = reaction.message.guild.roles.cache.get(`${config["main_config"].ticketeam}`);
                reaction.message.guild.channels.create(`ticket-${user.username}`, {
                                type: 'text',
                                reason: 'Someone Created a ticket through the panel',
                                parent: `${config["ticket_config"].ticketcategory}`,
                                permissionOverwrites: [{
                                                id: user.id,
                                                allow: allowedperms
                                        },
                                        {
                                                id: reaction.message.guild.id,
                                                deny: allowedperms
                                        },
                                        {
                                                id: supportrole.id,
                                                allow: allowedperms
                                        }
                                ],
                        })

                        .then(async channel => {
                                const thankyou = new Discord.MessageEmbed()
                                        .setColor(config["main_config"].colour)
                                        .setAuthor('Welcome to support!')
                                        .setDescription(
                                                `**Thank you for contacting our support team! We will respond shortly**`)
                                channel.send(thankyou)
                        })
        }
        if (reaction.emoji.name === "🔴") {
                if (!reaction.message.channel.name.includes("ticket-")) return reaction.channel.send("You cannot use that here!")
                const transcriptchannel = client.channels.cache.get(`${config["ticket_config"].transcriptchannel}`)
                if (!reaction.message.channel.name.includes('ticket-')) return reaction.message.channel.send('**You cannot use this in here**')
                if (!reaction.message.member.roles.cache.has(config["ticket_config"].ticketteam)) return reaction.message.channel.send(
                        '**You cannot use this command**')
                const msg = await fetchAll.messages(reaction.message.channel, {
                        reverseArray: true
                })

                const content = msg.map(m => `${new Date(m.createdAt).toLocaleString('en-US')} ${m.author.tag} - ${m.content}`)
                fs.writeFileSync(`${reaction.message.channel.name}.txt`, content.join('\n'), error => {
                        if (error) console.log(error)
                })
                const embed = new Discord.MessageEmbed()
                        .setTitle(`Transcript for channel ${reaction.message.channel.name}`)
                        .setDescription(`This is a archive for a ticket that was closed`)
                        .setColor(config["main_config"].colour)
                        .setTimestamp();
                const dmembed = new Discord.MessageEmbed()
                        .setTitle(`Transcript for Your ticket ${reaction.message.channel.name}`)
                        .setDescription(`This is a archive for a ticket that you made`)
                        .setColor(config["main_config"].colour)
                        .setTimestamp();
                transcriptchannel.send(new Discord.MessageAttachment(`${reaction.message.channel.name}.txt`,
                        `${reaction.message.channel.name}.txt`));
                await
                transcriptchannel.send(embed)
                        .then(async userdm => {
                                user.send(new Discord.MessageAttachment(`${reaction.message.channel.name}.txt`,
                                        `${reaction.message.channel.name}.txt`));
                                await
                                user.send(dmembed)

                        })
                        .then(async channel => {
                                reaction.message.channel.delete()
                        })

        }
}