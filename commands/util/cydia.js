const commando = require("discord.js-commando");
const cydia = require("cydia-api-node");

module.exports = class extends commando.Command {
	constructor(client) {
		super(client, {
			name: "cydia",
			group: "util",
			memberName: "cydia",
			description: "Searches a package from Cydia.",
			examples: [
				"cydia com.ziph0n.pickpocket",
				"cydia PickPocket",
			],
			args: [{
				key: "id",
				type: "string",
				prompt: "Which package would you like to search for by its name or bundle ID?",
			}],
		});
	}

	async run(msg, args) {
		cydia.getAllInfo(args.id).then(info => {
			if (info) {
				console.log(info);
				return msg.reply("", {
					embed: {
						title: `${info.display} (${info.repo.name})`,
						description: info.summary,
						fields: [{
							name: "Version",
							value: info.version,
							inline: true,
						}, {
							name: "Price",
							value: "$" + info.price,
							inline: true,
						}, {
							name: "Category",
							value: info.section,
							inline: true,
						}],
						footer: {
							text: info.name,
						},
					},
				});
			} else {
				return msg.reply("That package could not be found.");
			}
		}).catch(() => {
			return msg.reply("An error occured while trying to fetch the package.");
		});
	}
};