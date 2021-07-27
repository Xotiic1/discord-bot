module.exports = {
    name: 'close',
    async execute(client, message, args, Discord, config) {
        if (!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
        message.channel.send(`**By Reacting with the red circle this ticket will be closed and a transcript will be sent to our logs channel \nReact to confirm**`)
            .then(message => {
                message.react('🔴');
            });
    }
}