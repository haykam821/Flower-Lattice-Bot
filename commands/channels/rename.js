const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "rename",
			aliases: ["rn"],
			group: "channels",
			memberName: "rename",
			guildOnly: true,
			description: "Renames a channel.",
			examples: [
				"rename #channel new-name",
				"bc Hello world!",
			],
			args: [{
				key: "target",
				type: "channel",
				prompt: "What channel should I rename?",
			}, {
				key: "newName",
				type: "string",
				prompt: "What is the new name for the channel?",
			}],
		});
	}

	async run(msg, args) {
		// Keep old name so we can use it after it is obsolete.
		const oldName = args.target.name;

		await args.target.setName(args.newName);
		return msg.reply(`I have changed the name of ${args.target} from \`${oldName}\` to \`${args.newName}\`.`);
	}
};