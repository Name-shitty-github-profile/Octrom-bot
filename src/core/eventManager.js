const fs = require('fs');
const path = require('path');

export default (client) => {
    const eventFiles = fs.readdirSync(`${__dirname}/../Events`).filter(file => file.endsWith('.ts'));
    let i = 0;
    for (const file of eventFiles) {
        const event = require(`${__dirname}/../Events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
        i++;
    }
    console.log(`Event : ${i} has been loaded!`);
};