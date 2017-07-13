exports.run = async (client, msg) => {
  const {get} = require("snekfetch");
  get("https://api.imgflip.com/get_memes").then(response => {
    msg.channel.send(response.body.file)
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
  name: "memes",
  description: "Send random memes image API",
  usage: "",
  usageDelim: "",
};
