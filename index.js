const { ShardingManager } = require('discord.js');

const { token } = require('./privates_files/config');

const manager = new ShardingManager("./src/core/bot.js", { totalShards: "auto", token: token});

manager.on("shardCreate", (shard) => console.log(`Hello! The bot started! (Shard[${shard.id}])`));

manager.spawn();