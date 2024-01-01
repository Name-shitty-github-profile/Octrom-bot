module.exports = async (client, commands) => {
    const ready = client.readyAt ? Promise.resolve() : new Promise(resolve => client.once('ready', resolve));
    await ready;
    console.log(`Synchronizing commands...`);
    for (let Command of commands) {
        await client.application.commands.create(Command);
    }
    console.log(`Created ${commands.length} commands!`);
    console.log(`Commands synchronized!`);
};