const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "setpresence",
			ownerOnly: true,
			group: "util",
			memberName: "setpresence",
			description: "Changes the presence of the bot.",
			args: [
				{
					key: "status",
					prompt: "The new presence of the bot.",
					type: "string",
					oneOf: [

					],
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