const Talks = require(`${process.cwd()}/utils/GetEventData`)("talk");

module.exports = {
    name: "talk",
    func: async function(client, interaction) {
        await Talks[Math.floor(Math.random() *Talks.length)](client, interaction);
    }
}