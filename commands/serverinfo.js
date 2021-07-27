module.exports = {
    name: "serverinfo",
    async execute(client, message, args, Discord, config) {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }
        const members = message.guild.members.cache;
        const newEmbed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({
                dynamic: true
            }))
            .setColor(config["main_config"].colour)
            .setTitle(`${message.guild.name} server stats`)
            .addFields({
                    name: "Owner: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                }, {
                    name: "Channel Count: ",
                    value: message.guild.channels.cache.size,
                    inline: true
                }, {
                    name: "Verification Level: ",
                    value: message.guild.verificationLevel,
                    inline: true
                }, {
                    name: "Members: ",
                    value: `There are ${message.guild.memberCount} users!`,
                    inline: true
                }, {
                    name: 'Presence',
                    value: `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                    inline: true

                }, {
                    name: "Total Bots: ",
                    value: message.guild.members.cache.filter(m => m.user.bot).size >= 1 ? `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots` : `There are no bots in this server`,
                    inline: true
                }, {
                    name: "Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-gb"),
                    inline: true
                }, {
                    name: "Roles Count: ",
                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                }, {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                }, {
                    name: `Verified: `,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                }, {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },

            )
        message.channel.send(newEmbed);
    }
}