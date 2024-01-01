const settings = require('./settings');
const eventManager = require('./eventManager');
const slashFetcher = require('./slashFetcher');

const { 
    Client,
    GatewayIntentBits, 
    Partials
} = require('discord.js');

const { token } = require(`../../privates_files/config`);

const client = new Client(
    {
        intents: [
            GatewayIntentBits.AutoModerationConfiguration, 
            GatewayIntentBits.AutoModerationExecution, 
            GatewayIntentBits.DirectMessageReactions, 
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.DirectMessages, 
            GatewayIntentBits.GuildBans, 
            GatewayIntentBits.GuildEmojisAndStickers, 
            GatewayIntentBits.GuildIntegrations, 
            GatewayIntentBits.DirectMessageTyping,
            GatewayIntentBits.GuildInvites, 
            GatewayIntentBits.GuildMembers, 
            GatewayIntentBits.GuildMessageReactions, 
            GatewayIntentBits.GuildMessageTyping, 
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.GuildModeration, 
            GatewayIntentBits.GuildPresences, 
            GatewayIntentBits.GuildScheduledEvents, 
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildVoiceStates
        ],
        partials: [
            Partials.Channel,
            Partials.Reaction,
            Partials.Message
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

eventManager(client),

slashFetcher(client);

client.login(token);