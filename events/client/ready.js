const config = require('../../config.json')
module.exports = (client, Discord) => {
        const Prefix = config["main_config"].prefix
        console.log('Your Bot is online')
        client.user.setPresence({
                activity: {
                        name: `Prefix ${Prefix}`,
                        type: `WATCHING`
                },
                status: `dnd`
        })
        const channel = client.channels.cache.get(config["main_config"].voicechanneltojoin);
        if (!channel) return console.error("The voice channel does not exist (change main_config's voicechanneltojoin)!");
        channel.join().then(() => {
                console.log("Successfully connected to the voice channel!");
        }).catch(e => {
                console.error(e);
        });
 
}