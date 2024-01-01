const settings = require('./settings');
const eventManager = require('./eventManager');
const slashFetcher = require('./slashFetcher');
const { Client } = require('discord.js');
const { token } = require(`../../privates_files/config`);


const client = new Client(
    {
        intents: settings.Intents,
        partials: settings.Partials,
        ws: {
            properties: {
                browser: 'Discord iOS'
            }
        }
    }
);

client.commands = new Map();

client.interactions = new Map();

client.register_arr = [];

eventManager(client),

slashFetcher(client);

client.login(token);