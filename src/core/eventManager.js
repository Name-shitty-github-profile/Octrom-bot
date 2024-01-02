const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    const eventFiles = fs.readdirSync(`${__dirname}/../Events`).filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        /*
        VARIABLES FOR FUNCTION (OPTIMIZED RAM USAGE) :
        event = require(`${__dirname}/../Events/${file}`);
        eventName = file.replace(".js", "");
        */
        client.on(file.replace(".js", ""), require(`${__dirname}/../Events/${file}`).bind(null, client));
    }
    console.log(`${eventFiles.length} events has been loaded!`);
};