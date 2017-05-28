exports.run = (client, msg, [gid]) => {
  // var gid = msg.content.split(" ")[1]
  // msg.channel.send(args, {reply:msg.author.id})

  if (client.guilds.has(gid)) {
    // var guild = client.guilds.get(gid)
    if (!client.guilds.get(gid).defaultChannel.permissionsFor(client.user).has('CREATE_INSTANT_INVITE')) {
      client.users.get(client.guilds.get(gid).ownerID).sendMessage(`One of my developers is trying to join your server. Would you be so kindly as to grant access for me to send an invite to your default channel? (Automated Message)\n
      Any Questions please join the Bot Support server.`)
    }
      client.guilds.get(gid).defaultChannel.createInvite({maxUses: 1}).then(invite => {
        var inv = invite.code
        msg.author.send(`Here is your invite to ${guild.name}\n http:\/\/discord.gg/${inv}`)
        msg.reply(`Check your DMs for the invite!`)
        client.funcs.log(`${msg.author.tag} has generated a single use invite for ${guild.name}. Code: ${i}`)
      })


  } else if (!client.guilds.has(gid)) {
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
