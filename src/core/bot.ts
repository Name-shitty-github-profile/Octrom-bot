import { Client } from 'discord.js';
import { token } from `../../privates_files/config`;
import settings from './settings';
const client = new Client({intents: settings.Intents, partials: settings.Partials, ws: {properties: {browser: 'Discord iOS'}}});
import CoreAction from "../core";
CoreAction(client);
client.login(token);