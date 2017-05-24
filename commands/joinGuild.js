exports.run = (client, msg) => {
  var args = msg.content.split(" ")[1]
  msg.channel.send(args, {reply:msg.author.id})
};

exports.help = {
  name: "joinguild",
  description: "Generates an invite for you to join the guild by id",
  usage: "[id]",
  usageDelim: "",
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};