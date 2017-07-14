exports.run = async (client, msg, [type]) => {
  let roles = msg.guild.roles.array().join(' | ');
  let roles1 = msg.guild.roles.map(r => r.name).join(', ')
  var embed = new client.methods.Embed()
  if (!msg.guild.member(client.user).hasPermission("EMBED_LINKS")) {
    return msg.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get permission to send embed.");
  }
  switch (type) {
    case "color":
    embed.setAuthor(`${msg.guild.name} Roles`)
    .setDescription(roles)
    .setColor(client.funcs.hex())
    .setFooter(`There are ${msg.guild.roles.filter(r => r.name).size} roles in ${msg.guild.name}`)
    msg.channel.send('', {embed}).catch((err) => {msg.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
    break;
    case "words":
    embed.setAuthor(`${msg.guild.name} Roles`)
    .setDescription(roles1)
    .setColor("#53A6F3")
    .setFooter(`There are ${msg.guild.roles.filter(r => r.name).size} roles in ${msg.guild.name}`)
    msg.channel.send('', {embed}).catch((err) => {msg.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
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
  name: "roles",
  description: "Show all the roles on the server.",
  usage: "<color|words>",
  usageDelim: "|",
};
