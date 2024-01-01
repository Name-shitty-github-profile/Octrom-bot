import { ShardingManager } from 'discord.js';
import Config from './privates_files/config';
const manager = new ShardingManager("./src/core/bot.ts", { totalShards: "auto", token: Config.token});
manager.on("shardCreate", (shard) => console.log(`Hello! The bot has started! (Shard[${shard.id}])`));
manager.spawn();  