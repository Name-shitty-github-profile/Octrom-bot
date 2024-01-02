module.exports = async function(client, interaction) {
    if (!interaction.isCommand() || !interaction.guild.channels || interaction.user.bot) return;
    const command = client.interactions.get(interaction.commandName);
    if (!command) {
        interaction.reply({ content: "Connection error.", ephemeral: true });
        return;
    }
    try {
        await command.func(client, interaction);
    } catch (e) {
        try {
            console.log(e);
            await interaction.reply({content: "Something went wrong!", ephemeral: true});
        } catch (e) {
            console.log(e);
        }
    }
}