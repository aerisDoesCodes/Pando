exports.run = (client, msg) => {
  var moment = require('moment')
  msg.channel.sendCode("asciidoc", `= STATISTICS =

  • Server name        :: ${msg.guild.name}
  • Server ID          :: ${msg.guild.id}
  • Owner name         :: ${client.users.get(guild.ownerID).tag}
  • Owner ID           :: ${client.users.get(guild.ownerID).id}
  • MemberCount        :: ${msg.guild.memberCount.toLocaleString()}
  • Roles              :: ${msg.guild.roles.filter(r => r.name).size.toLocaleString()}
  • Region             :: ${msg.guild.region}
  • Channels           :: ${msg.guild.channels.filter(r => r.name).size.toLocaleString()}
  • Guild Created      :: ${moment(msg.guild.createdAt).format('ddd MMM Do YYYY')}
  • Verification Level :: ${msg.guild.verificationLevel}`);
};


exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["si"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "serverinfo",
  description: "Provides some details about the server.",
  usage: "",
  usageDelim: "",
};
