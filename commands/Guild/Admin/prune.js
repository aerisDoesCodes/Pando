exports.run = (client, msg) => {
  let amount = msg.content.split(" ").splice(1, 2).join(" ");
  if(amount < 1) {
    return msg.reply("The amount of messages to remove is 1-100.");
  }
  if(amount >100) {
    return msg.reply("Choose a number between 1-100.");
  }
  msg.channel.bulkDelete(amount);
  msg.delete()
  msg.channel.send("Pruned: " + amount + " Messages").then(m => m.delete(2500));
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "prune",
  description: "Prune a number of message on the current channel.",
  usage: "<number:int>", /* 🤔 I think I am right */
  usageDelim: " ",
};
