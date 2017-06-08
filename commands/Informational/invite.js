exports.run = (client, msg) => {
  if (!client.config.selfbot) {
    var embed = new client.methods.Embed()
    .setTimestamp()
    .addField('Information', 'I know that all of these permissons may not be right. So please feel free to uncheck some of them. If you ask the bot to do more than it is granted it will inform you of such.')
    .addField('---', `[Click here to invite me](https://discordapp.com/oauth2/authorize?permissions=2146958591&scope=bot&client_id=268345323607293952)`)
    msg.channel.send('', {embed})
  } else {
    msg.reply("Why would you need an invite link for a selfbot...");
  }
};

exports.help = {
  name: "invite",
  description: "Displays the join server link of the bot.",
  usage: "",
  usageDelim: "",
  category: "Informational"
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};
