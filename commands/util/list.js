const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "list",
			group: "util",
			memberName: "list",
			description: "Lists all commands.",
		});
	}

	async run(msg) {
		return msg.reply("**All commands:** " + msg.client.registry.commands.map(cmd => cmd.name).join(", "));
	}
};