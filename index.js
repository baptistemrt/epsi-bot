const { Client, Intents } = require("discord.js");
require('dotenv').config();

const ConfigYaml = require('./config/config');
const Helper = require('./Helper/helper');

const conf = new ConfigYaml().conf;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
	console.log(conf.common.onLogin);
});

client.on("guildMemberAdd", member => {

});

client.on("messageCreate", message => {
	Helper.parse(message, client);
});

client.login(process.env.DISCORD_TOKEN);