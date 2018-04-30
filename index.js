// Get config
const config = require("./config.json");

const cmdo = require("discord.js-commando");
const client = new cmdo.Client({
	owner: config.discord.owner,
});
const sqlite = require("sqlite");

const path = require("path");

client.setProvider(
	sqlite.open(path.join(__dirname, "settings.sqlite3")).then(db => new cmdo.SQLiteProvider(db))
);

client.registry.registerGroups([
	["pxls", "Pxls.space"],
	["info", "Info"],
]);
client.registry.registerDefaults();
client.registry.registerCommandsIn(path.join(__dirname, "commands"));

client.login(config.discord.token);