module.exports.config = {
	name: "rs",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "chom",
	description: "Khα»i Δα»ng LαΊ‘i Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("π¨ πππ«πͺ_βπ£π ππππ₯ π»πππ πππ ΜΜπ π»π Μ£Μππ ππΜ£π π¨", event.threadID, () =>process.exit(1))