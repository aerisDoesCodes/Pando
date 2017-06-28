exports.run = async (client, msg, [feedback]) => {
    var channel = client.channels.get('329550112785301504');
    var tag = msg.author.tag;
    if (msg.author.respond) return msg.channel.send('You have already sent feedback recently. Please wait a while.')

    var embed = client.methods.Embed()
    .setTitle(tag + ' suggested:')
    .setDescription(feedback)




    channel.send({embed})
    msg.author.respond = true
    setTimeout(() => {
      msg.author.respond = false
    }, 45000)
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
 name: "feedback",
 description: "Sends feedback to the developers",
 usage: "<feedback:str> [...]",
 usageDelim: "",
 category: ""
 }
