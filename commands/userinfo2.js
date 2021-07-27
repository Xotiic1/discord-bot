 module.exports = {
     name: "userinfo2",
     async execute(client, message, args, Discord, config,)
     {
         const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || memberTarget.user.id;
         const userinfoembed = new Discord.MessageEmbed()
             .setTitle(`${user.user.username} stats`)
             .setColor(config["main_config"].colour)
             .setThumbnail(user.user.displayAvatarURL(
             {
                 dynamic: true
             }))
             .addFields(
             {
                 name: "Name: ",
                 value: `${user.user.tag}`,
                 inline: false
             },
             {
                 name: "user ID: ",
                 value: user.user.id,
             },
             {
                 name: 'Avatar link: ',
                 value: `[Click Here](${user.user.displayAvatarURL()})`
             },
             {
                 name: 'Account Created: ',
                 value: user.user.createdAt.toLocaleDateString("en-gb"),
                 inline: false
             },
             {
                 name: 'Joined Server: ',
                 value: user.joinedAt.toLocaleDateString("en-gb"),
                 inline: false
             },
             {
                 name: 'User Status: ',
                 value: user.presence.status,
                 inline: false
             },
             {
                 name: 'User Roles: ',
                 value: user.roles.cache.map(role => role.toString()).join(" ,"),
                 inline: false
             })
         await message.channel.send(userinfoembed);
   }
 }