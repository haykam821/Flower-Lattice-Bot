const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "year",
			group: "datetime",
			memberName: "year",
			description: "Tells you the year.",
		});
	}

	async run(msg) {
		return msg.reply(`The year is ${new Date().getFullYear()}.`);
	}
};