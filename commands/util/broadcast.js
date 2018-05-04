const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "broadcast",
			aliases: ["bc"],
			group: "util",
			memberName: "broadcast",
			ownerOnly: true,
			description: "Announces a message to all guilds the bot is in.",
			examples: [
				"broadcast Hello world!",
				"bc Hello world!",
			],
			args: [
				{
					key: "message",
					type: "string",
					prompt: "What message should be announced?",
				},
			],
		});
	}

	async run(msg, args) {
		for (const guild of msg.client.guilds) {
			guild.channels.array()[0].send(args.message);
		}
	}
};