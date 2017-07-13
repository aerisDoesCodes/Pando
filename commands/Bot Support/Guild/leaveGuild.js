exports.run = (client, msg) => {
  var channel = client.channels.get('280288162876751873');
  var guildID = msg.content.split(' ')[1];
  if (!guildID.match(/^\d{18}/g)) return msg.channel.send('A guild id has 18 numbers.')
  if (!guildID) return msg.channel.send('I require an ID.')
  var embed = new client.methods.Embed()
  if (client.guilds.has(guildID)) {
    var guild = client.guilds.get(guildID)
  } else {
    return msg.channel.send('I am not in that guild.')
  }
  var reason = msg.content.split(' ').slice(2).join(' ')
  if (!reason) return msg.channel.send('I require a reason')


  var pic = guild.iconURL ? guild.iconURL : client.users.get(guild.ownerID).avatarURL

  embed.setFooter('Guild Removed by ' + msg.author.tag)
  .addField("Guild Name", `${guild.name}`, true)
  .addField("Guild ID", `${guild.id}`, true)
  .setColor("#E71515")
  .setTimestamp()
  .addField("Owner Name", `${guild.owner.user.username}`, true)
  .addField("Owner ID", `${guild.owner.id}`, true)
  .addField('Reason for Removal', reason)
  .setThumbnail(pic)

  var gEmbed = new client.methods.Embed()
  .addField('Leaveing Guild', 'Bot Developer has requested that I leave this server.')
  .addField('Reason', reason)
  .addField('Appeal / Discussion', `[Click Here](http://discord.gg/dfdvArY)`)
  .setFooter(msg.author.tag, msg.author.avatarURL)

  guild.defaultChannel.send({embed: gEmbed})
  msg.delete(30)
  channel.send('', {embed}).then(m => {
    guild.forceLeave = true
    guild.leave()

  })


};

exports.help = {
  name: "leaveGuild",
  description: "Makes the bot leave a guild, Reason Required.",
  usage: "",
  usageDelim: "",
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["lg"],
  permLevel: 9,
  botPerms: [],
  requiredFuncs: [],
};
