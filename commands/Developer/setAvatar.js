exports.run = (client, msg, [avatarLink, force]) => {

  var color = client.funcs.hex()
  var cAbort = new client.methods.Embed()
  .addField('Aborted', 'You said no :(')
  .setColor(color)

  var cSuccess = new client.methods.Embed()
  .addField('Alright', 'The avatar should change soon')
  .setColor(color)

  var cTime = new client.methods.Embed()
  .addField('Times Up', 'You didn\'t answer in time')
  .setColor(color)


  var requestR = new client.methods.Embed()
  .addField('Change Avatar?', 'Type io.ryes or io.rno!')
  .setColor(color)


  if (force) {
    msg.channel.send({embed: cSuccess})
    return client.user.setAvatar(avataLink)
  } else {
    msg.channel.send({embed: requestR})
    const collector = msg.channel.createMessageCollector(m => m.author.id === msg.author.id,{time: 15000})
    collector.on('collect', m => {
        var mr = m.content.replace('io.r', '')
        if (mr.toUpperCase() === 'YES') {
          return collector.stop("SUCCESS")
        } else if (mr.toUpperCase() === "NO") {
          return collector.stop("ABORTED")
        }
        })

        collector.on('end', (c,r) => {
          if (r === "SUCCESS") {
            msg.channel.send('', { embed: cSuccess})
            client.user.setAvatar(avatarLink)
          } else if (r === "ABORTED") {
            return msg.channel.send('', { embed: cAbort})
          } else {
            return msg.channel.send('', { embed: cTime})
          }
        })
  }










 }

 exports.conf = {
 enabled: true,
 runIn: ['text', 'dm'],
 aliases: ['sa', 'ca', 'setProfile'],
 permLevel: 10,
 botPerms: [],
 requiredFuncs: [],
 }

 exports.help = {
 name: "setAvatar",
 description: "Changes the bots avatar",
 usage: "<avatarLink:url> [force:boolean]",
 usageDelim: " ",
 category: ""
 }
