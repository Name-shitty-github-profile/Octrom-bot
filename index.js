const { ShardingManager } = require('discord.js');
const Config = require('./privates_files/config');
const manager = new ShardingManager("./src/core/bot.js", { totalShards: "auto", token: Config.token});
manager.on("shardCreate", (shard) => console.log(`Hello! The bot has started! (Shard[${shard.id}])`));
manager.spawn();