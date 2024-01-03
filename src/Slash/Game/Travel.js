const Talks = {
    normal: {
        Biurk: {
            "Republic of Solizesh": "3H"
        },
        Republic_of_Solizesh: {
            "Biurk": "3H",
            'Kingdom of Kopjinhs': "6H"
        },
        Kingdom_of_Kopjinhs: {
            "Republic of Solizesh": "6H",
            "Sham": "4H",
            "Eremkar": "16H"
        },
        Eremkar: {
            'Kingdom of Kopjinhs': "16H",
            'Jurlth': "20H",
            "Nushaph": "14H"
        },
        Nushaph: {
            "Eremkar": "14H"
        },
        Jurlth: {
            'Eremkar': "20H",
            'Ganarak': "14H",
            "Kuled": "18H",
            "klake": "15H"
        },
        Ganarak: {
            "Kuled": "23H",
            "Jurlth": "14H"
        },
        Kuled: {
            "Lrald": "22H",
            "Ganarak": "23H",
            "Ekh": "7H",
            "Irdrer": "15H"
        },
        Lrald: {
            "Kuled": "22H",
            "Irdrer": "6H",
            "Gurph": "12H"
        },
        Irdrer: {
            "Lrald": "6H",
            "Kuled": "15H",
            'Gurph': "3H",
            "Ekh": "8H",
            'Ghorm': '4H'
        },
        Gurph: {
            "Lrald": "12H",
            "Irdrer": "3H",
            "Ghorm": "2H"
        },
        Ghorm: {
            "Irdrer": "4H",
            'Gurph': "2H",
            "Ekh": "3H"
        },
        Ekh: {
            "Irdrer": "8H",
            "Kuled": "7H",
            "Ghorm": "3H"
        }
    }
};

module.exports = {
    name: "go",
    func: async function(client, interaction) {
        await Talks.normal.hometown[Math.floor(Math.random() *Talks.length)](client, interaction);
    }
}