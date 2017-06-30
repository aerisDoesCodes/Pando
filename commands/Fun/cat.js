exports.run = async (client, msg) => {
  const {get} = require("snekfetch");
  get("https://random.cat/meow").then(response => {
    message.channel.send(response.body.file)
});
}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "cat",
  description: "Send random cat image API",
  usage: "",
  usageDelim: "",
};
