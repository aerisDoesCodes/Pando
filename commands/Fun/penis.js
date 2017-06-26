exports.run = (client, msg, [user]) => {
    const penischar = '='
    var member;
    if (!user) {
      member = msg.author
    } else {
      member = user
    }

    // msg.channel.send(penischar.repeat( + Math.floor(Math.random() * 10) * 2))
    msg.channel.send(member.tag)
 }

 exports.help = {
 enabled: true,
 runIn: ['text'],
 aliases: [],
 permLevel: 0,
 botPerms: [],
 requiredFuncs: [],
 }

 exports.conf = {
 name: "penis",
 description: "gets the penis length of a user via mention, or if no mention the sender",
 usage: "[user:mention]",
 usageDelim: "",
 category: "Fun"
 }
