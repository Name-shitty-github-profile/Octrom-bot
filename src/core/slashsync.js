module.exports = async (client, commands) => {
    const ready = client.readyAt ? Promise.resolve() : new Promise(resolve => client.once('ready', resolve));
    await ready;
    console.log(`Synchronizing commands...`);
    for (let command of commands) {
        await client.application.commands.create(command);
    }
    console.log(`Created ${commands.length} commands!\nCommands Synchronized!`);
};