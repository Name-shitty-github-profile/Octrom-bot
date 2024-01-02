const slashSync = require('../core/slashsync');

function Status(client) {
    const possible_status = [
        'Sarah Cooper',
        "Lily"
    ];
    client.user.setPresence({ activities: [{ name: possible_status[Math.floor(Math.random() * possible_status.length)], type: ActivityType.Watching }] });
}

const { ApplicationCommandType, ActivityType } = require('discord.js');
module.exports = async (client) => {
    await slashSync(client, client.register_arr.map((command) => ({
        name: command.name,
        description: command.description,
        options: command.options,
        type: ApplicationCommandType.ChatInput
    })));
    setInterval(() => {
        Status(client);
    }, 80_000);
};