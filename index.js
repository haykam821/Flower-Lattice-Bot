// Get config
const config = require("./config.json");

const cmdo = require("discord.js-commando");
const client = new cmdo.Client({
	owner: config.discord.owner,
});

const path = require("path");
client.registry.registerGroups([
	["pxls", "Pxls.space"],
	["info", "Info"],
	["random", "Chance"],
	["datetime", "Date & Time"],
	["moderation", "Mod Tools"],
]);
client.registry.registerDefaults();
client.registry.registerCommandsIn(path.join(__dirname, "commands"));

client.login(config.discord.token);