const commando = require("discord.js-commando");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "coords",
			aliases: ["coordinates", "pos"],
			group: "pxls",
			memberName: "coords",
			description: "Links to specified coordinates on Pxls.space.",
			details: "Gives you a link to Pxls.space with the coordinates filled in, so no manual positioning needs to be done.",
			examples: [
				"coords 500 500",
				"coords 500 500 5",
			],
			args: [
				{
					key: "xPos",
					label: "number",
					type: "float",
					prompt: "What X coordinate?",
					default: 0,
				},
				{
					key: "yPos",
					label: "number",
					type: "float",
					prompt: "What Y coordinate?",
					default: 0,
				},
				{
					key: "scale",
					label: "number",
					type: "float",
					prompt: "What scale?",
					default: 25,
				},
			],
		});
	}

	async run(msg, args) {
		return msg.reply(`Here is your link: <https://pxls.space/#x=${args.xPos}&y=${args.yPos}&scale=${args.scale}>`);
	}
};