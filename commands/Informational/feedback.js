exports.run = async (client, msg) => {
    var channel = client.channels.get('329550112785301504');
    var feedback = msg.content.split(' ').slice(1).join(' ')
    var tag = msg.author.tag;
    var time = msg.createdTimestamp
    if (msg.author.respond) return msg.channel.send('You have already sent feedback recently. Please wait a while.'/* + `${msg.author.RespTime - time}*/`)
    if (!feedback) return msg.channel.send(`I need some stuff to say you know..`)
    var embed = new client.methods.Embed()
    .setTitle(tag + ' suggested:')
    .setDescription(feedback)




    channel.send({embed})
    msg.author.respond = true
    msg.author.respTime = msg.createdTimestamp()
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
 usage: "",
 usageDelim: "",
 category: ""
 }

 exports.init = (client) => {

 }
