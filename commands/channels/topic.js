const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "topic",
			group: "channels",
			memberName: "topic",
			description: "Gets the channel topic.",
		});
	}

	async run(msg) {
		if (msg.channel.topic) {
			msg.reply(`The topic of this channel is \`${msg.channel.topic}\`.`);
		} else {
			msg.reply("There is no topic for this channel.");
		}
	}
};