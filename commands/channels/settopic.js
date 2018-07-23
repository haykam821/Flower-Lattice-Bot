const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "settopic",
			group: "channels",
			memberName: "settopic",
			description: "Sets the channel topic.",
			args: [{
				type: "string",
				key: "newTopic",
				prompt: "What should the new topic be?",
			}],
			clientPermissions: [
				"MANAGE_CHANNELS",
			],
			userPermissions: [
				"MANAGE_CHANNELS",
			],
		});
	}

	async run(msg, args) {
		msg.channel.setTopic(args.newTopic);
		return msg.reply(`The topic of this channel has been changed to \`${args.newTopic}\`.`);
	}
};