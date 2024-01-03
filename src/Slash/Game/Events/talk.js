const GetEventData = require(`${process.cwd()}/utils/GetEventData`);

const Talks = {
    normal: {
        Biurk: GetEventData("normal/Biurk/talk"),
        hometown: GetEventData("normal/hometown/talk")
    }
};

module.exports = {
    name: "talk",
    func: async function(client, interaction) {
        await Talks[Math.floor(Math.random() *Talks.length)](client, interaction);
    }
}