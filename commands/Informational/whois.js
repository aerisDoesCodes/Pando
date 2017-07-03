const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  let mention = msg.mentions.users.first();
  if(msg.mentions.users.size === 0) {
    return msg.channel.send("\`❌\` | Please mention a user.")
  }
  msg.channel.sendCode("asciidoc", `= STATISTICS =

  • Name       :: ${mention.username}
  • Discrim    :: #${mention.discriminator}
  • User ID    :: ${mention.id}
  • Joined at  :: ${moment(mention.joinedAt).format('ddd MMM Do YYYY')}
  • Status     :: ${mention.presence.game === null ? "No Game" : mention.presence.game.name}
  • Game       :: ${komada.version}
  • Joined Discord :: ${moment(message.mention.createdAt).format('ddd MMM Do YYYY')}`);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["w", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "whois",
  description: "Provides some details about the user mentioned.",
  usage: "",
  usageDelim: "",
};
