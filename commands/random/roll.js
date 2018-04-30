const commando = require("discord.js-commando");

function randInt(min = 1, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "roll",
			alias: [
				"dice",
			],
			ownerOnly: true,
			group: "random",
			memberName: "roll",
			description: "Rolls a die.",
			args: [
				{
					key: "sides",
					prompt: "How many sides should the die have?",
					type: "integer",
					default: 6,
				},
			],
		});
	}

	async run(msg, args) {
		if (args.sides === 0) {
			return msg.reply("The die landed in a black hole! Oops!");
		} else {
			return msg.reply(`The ${args.sides}-sided die landed on a ${randInt(1, args.sides)}!`);
		}
	}
};