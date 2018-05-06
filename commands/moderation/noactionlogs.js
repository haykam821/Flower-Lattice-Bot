const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "noactionlogs",
			aliases: ["noalogs"],
			group: "moderation",
			memberName: "noactionlogs",
			description: "Disables action logs.",
			userPermissions: [
				"MANAGE_GUILD",
			],
		});
	}

	async run(msg) {
		msg.guild.settings.remove("actionlogs");
		msg.reply("The action logs have been disabled.");
	}
};