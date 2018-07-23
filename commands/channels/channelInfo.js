const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "channel",
			aliases: ["channelinfo"],
			group: "channels",
			memberName: "channel",
			description: "Retrieves information about a channel.",
			examples: ["channel #general", "channel general"],
			guildOnly: true,
			args: [
				{
					key: "channel",
					label: "textchannel",
					prompt: "What channel should be ",
					type: "channel",
				},
			],
		});
	}

	async run(msg, args) {
		const channel = args.channel;
		return msg.reply("", {
			embed: {
				title: `Channel: #${channel.name}`,
				description: channel.topic,
				footer: {
					text: `Channel ID: ${channel.id}`,
				},
			},
		});
	}
};