exports.run = (client, msg) => {
  var gid = msg.content.split(" ")[1]
  // msg.channel.send(args, {reply:msg.author.id})

  if (client.guilds.has(gid)) {
    
      client.guilds.get(gid).createInvite({maxUses: 1}).then(invite => {
        var i = invite.code
        msg.reply(`http:\/\/discord.gg/${i}`)
      })
    }

  } else {
    msg.reply(`I am not in the guild\: \'${gid}\' Please try again.`)
  }

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
