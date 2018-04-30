const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "setstatus",
			alias: [
				"setgame",
			],
			ownerOnly: true,
			group: "util",
			memberName: "setstatus",
			description: "Changes the playing message of the bot.",
			args: [
				{
					key: "status",
					prompt: "The new game the bot is playing.",
					type: "string",
				},
			],
		});
	}

	async run(msg, args) {
		await msg.client.user.setPresence({
			game: {
				name: args.status,
			},
		});
		return msg.reply("Changed the bot's status.");
	}
};