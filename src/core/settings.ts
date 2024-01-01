import { GatewayIntentBits, Partials } from 'discord.js';

export default {
    Partials: [
        Partials.Channel,
        Partials.Reaction,
        Partials.Message
    ],
    Intents: [
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
    ]
};