const commando = require("discord.js-commando");

function randInt(min = 1, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "coinflip",
			alias: [
				"coin",
				"flip",
			],
			group: "random",
			memberName: "coinflip",
			description: "Flips a coin.",
		});
	}

	run(msg) {
		if (randInt(0, 1) > 0) {
			return msg.reply("The coin landed on heads!");
		} else {
			return msg.reply("The coin landed on tails!");
		}
	}
};