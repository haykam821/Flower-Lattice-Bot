const commando = require("discord.js-commando");
const actlog = require("discord.js-action-logger");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "kick",
			group: "moderation",
			memberName: "kick",
			description: "Kicks a member.",
			args: [{
				key: "toKick",
				type: "member",
				prompt: "Who should I kick?",
			}, {
				key: "reason",
				type: "string",
				prompt: "What is the reason for this action?",
			}],
			clientPermissions: [
				"KICK_MEMBERS",
			],
			userPermissions: [
				"KICK_MEMBERS",
			],
		});
	}

	async run(msg, args) {
		await args.toKick.kick(`Triggered by ${msg.author.tag}: "${args.reason}".`);
		await actlog("Kick", msg.guild.channels.get(msg.guild.settings.get("actionlogs")), msg, args.toKick, args.reason);

		msg.reply("That user was kicked. ;)");
	}
};