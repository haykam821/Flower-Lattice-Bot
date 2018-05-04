const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "actionlogs",
			aliases: ["alogs"],
			group: "moderation",
			memberName: "actionlogs",
			description: "Sets the channel for action logs to be put into.",
			args: [{
				key: "logChannel",
				type: "channel",
				prompt: "Which channel should action logs be in?",
			}],
			userPermissions: [
				"MANAGE_GUILD",
			],
		});
	}

	async run(msg, args) {
		msg.guild.settings.set("actionlogs", args.logChannel.id);
		msg.reply(`The action logs channel has been set to <#${args.logChannel.id}>.`);
	}
};