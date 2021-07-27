

module.exports ={
    name: "rename",
    async execute(client, message, args, Discord, config){
		if(!message.channel.name.includes("ticket-")) {
			return message.channel.send(
				new Discord.MessageEmbed()
					.setColor(config.err_colour)
					.setAuthor(message.author.username, message.author.displayAvatarURL())
					.setTitle('❌ **This isn\'t a ticket channel**')
					.setDescription('Use this command in the ticket channel you want to rename.')
					.setFooter(message.guild.name, message.guild.iconURL())
			);
		}

		if (!message.member.roles.cache.has(config["ticket_config"].ticketteam))
			return message.channel.send(
				new Discord.MessageEmbed()
				.setColor(config["main_config"].colour)
					.setAuthor(message.author.username, message.author.displayAvatarURL())
					.setDescription('You don\'t have permission to use this command.')
					.setFooter(message.guild.name, message.guild.iconURL())
			);

		message.channel.setName(args.join('-')); // new channel name

		message.channel.send(
			new Discord.MessageEmbed()
				.setColor(config["main_config"].colour)
				.setAuthor(message.author.username, message.author.displayAvatarURL())
				.setTitle('✅ **Ticket updated**')
				.setDescription('The name has been changed.')
				.setFooter(client.user.username, client.user.displayAvatarURL())
		);
	}
};

