"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var discord_js_1 = require("discord.js");
var client = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
        discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
        discord_js_1.Intents.FLAGS.GUILD_PRESENCES,
        discord_js_1.Intents.FLAGS.GUILD_BANS,
        discord_js_1.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
});
client.login(process.env.TOKEN).then();
client.once("ready", function (client) {
    console.log("logged in!");
});
//# sourceMappingURL=index.js.map