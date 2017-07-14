exports.run = async (client, msg, [type]) => {
  let channels = msg.guild.channels.map(r => r.name).join(' \n ')
  let embed = new client.methods.Embed()
  if (!msg.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return msg.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get permission to send embed.");
  }
  switch (type) {
    case "list"
    .setAuthor(`${msg.guild.name} channels`)
    .setDescription(`#${channels}`)
    .setColor(client.funcs.hex())
    .setFooter(`There are ${msg.guild.channels.map(r => r.name).size} channels in ${msg.guild.name}`)
    msg.channel.send(' ', {embed}).catch((err) => {msg.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
    break;
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["r"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "channels",
  description: "Show all the channels on the server.",
  usage: "<list:str>",
  usageDelim: "",
};
