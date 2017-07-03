exports.run = (client, msg, [user]) => {
  const penischar = '\='
  var member;
  if (!user) {
    member = msg.author
  } else {
    member = user
  }

  msg.channel.send(`${member.tag}\'s Penis Length\n` +
  `8${penischar.repeat( + Math.floor(Math.random() * Math.random() * 10) * 2)}D`)
  // msg.channel.send(member.tag)
}

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
}

exports.help = {
  name: "penis",
  description: "gets the penis length of a user via mention, or if no mention the sender",
  usage: "[user:mention]",
  usageDelim: "",
}
