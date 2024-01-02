const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    const eventFiles = fs.readdirSync(`${__dirname}/../Events`).filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        const event = require(`${__dirname}/../Events/${file}`);
        const eventName = file.replace(".js", "");
        client.on(eventName, event.bind(null, client));
    }
    console.log(`${eventFiles.length} events has been loaded!`);
};