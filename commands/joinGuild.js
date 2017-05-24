exports.run = (client, msg) => {
  var gid = msg.content.split(" ")[1]
  // msg.channel.send(args, {reply:msg.author.id})

  if (client.guilds.has(gid)) {
    if (!client.guilds.get(gid).defaultChannel.permissionsFor(client.user).has('CREATE_INSTANT_INVITE')) {
      client.users.get(client.guilds.get(gid).ownerID).sendMessage(`One og my developers is trying to join your server. Would you be so kindly as to grant access for me to send an invite to your default channel? (Automated Message)\n
      Any Questions please join the Bot Support server.`)
    }
      client.guilds.get(gid).defaultChannel.createInvite({maxUses: 1}).then(invite => {
        var i = invite.code
        msg.reply(`http:\/\/discord.gg/${i}`)
      })


  } else {
    msg.reply(`I am not in the guild\: \'${gid}\' Please try again.`)
  }

};

exports.help = {
  name: "joinguild",
  description: "Generates an invite for you to join the guild by id",
  usage: "<id:number>",
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
