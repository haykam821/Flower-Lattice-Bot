const commando = require("discord.js-commando");
const actlog = require("discord.js-action-logger");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ban",
			group: "moderation",
			memberName: "ban",
			description: "Bans a member.",
			args: [{
				key: "toBan",
				type: "member",
				prompt: "Who should I ban?",
			}, {
				key: "reason",
				type: "string",
				prompt: "What is the reason for this action?",
			}],
			clientPermissions: [
				"BAN_MEMBERS",
			],
			userPermissions: [
				"BAN_MEMBERS",
			],
		});
	}

	async run(msg, args) {
		await args.toBan.ban(`Triggered by ${msg.author.tag}: "${args.reason}".`);
		await actlog("Ban", msg.guild.channels.get(msg.guild.settings.get("actionlogs")), msg, args.toBan, args.reason);

		msg.reply("That user was banned. ;)");
	}
};