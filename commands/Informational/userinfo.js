const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  msg.channel.sendCode("asciidoc", `= STATISTICS =

  • Name           :: ${msg.author.username}
  • Discrim        :: #${msg.author.discriminator}
  • ID             :: ${msg.author.id}
  • Status         :: ${msg.author.presence.status}
  • Game           :: ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}
  • Joined Discord :: ${moment(msg.author.createdAt).format('ddd MMM Do YYYY')}
  • Roles          :: ${msg.member.roles.filter(r => {return r.name != '@everyone'}).map(r => r.name).join(', ')}`);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["u", "ui"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "userinfo",
  description: "Provides some details about the user.",
  usage: "",
  usageDelim: "",
};
