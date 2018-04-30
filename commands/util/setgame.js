const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "setgame",
			alias: [
				"setstatus",
			],
			ownerOnly: true,
			group: "util",
			memberName: "setgame",
			description: "Changes the playing message of the bot.",
			args: [
				{
					key: "status",
					prompt: "What game should the bot start playing in its status?",
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