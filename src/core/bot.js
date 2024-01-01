const { 
    Client,
    GatewayIntentBits, 
    Partials
} = require('discord.js');

const client = new Client(
    {
        intents: [
            GatewayIntentBits.AutoModerationConfiguration, 
            GatewayIntentBits.AutoModerationExecution, 
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.DirectMessageTyping,
            GatewayIntentBits.GuildBans,
            atewayIntentBits.GuildEmojisAndStickers, 
            GatewayIntentBits.GuildIntegrations, 
            GatewayIntentBits.GuildInvites, 
            GatewayIntentBits.GuildMembers, 
            GatewayIntentBits.GuildMessageReactions, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.GuildMessageTyping, 
            GatewayIntentBits.GuildModeration, 
            GatewayIntentBits.GuildPresences, 
            GatewayIntentBits.GuildScheduledEvents, 
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.MessageContent
        ],
        partials: [
            Partials.Channel,
            Partials.Message,
            Partials.Reaction 
        ],
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

const eventManager = require('./eventManager');

eventManager(client);

const slashFetcher = require('./slashFetcher');

slashFetcher(client);

const { token } = require(`../../privates_files/config`);

client.login(token);