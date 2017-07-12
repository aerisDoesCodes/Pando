exports.run = async (client, msg) => {
  let pong = ["Pung!", "Peng!", "Pong!", "Pang!"]
  try {
    const message = await msg.channel.sendMessage("Ping?");
    await message.edit(pong[Math.floor(Math.random() * pong.length)] + " " + `(Roundtrip took: ${message.createdTimestamp - msg.createdTimestamp}ms. Heartbeat: ${Math.floor(client.ping)}ms.)`);
  } catch (e) {
    client.funcs.log(e, "error");
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "ping",
  description: "Ping/Pong/Pung/Peng/Pang command. I wonder what this does? /sarcasm",
  usage: "",
  usageDelim: "",
};
