exports.run = (client, msg, [username, force]) => {

  var color = client.funcs.hex()
  var cAbort = new client.methods.Embed()
  .addField('Aborted', 'You said no :(')
  .setColor(color)

  var cSuccess = new client.methods.Embed()
  .addField('Alright', 'The username should change soon')
  .setColor(color)

  var cTime = new client.methods.Embed()
  .addField('Times Up', 'You didn\'t answer in time')
  .setColor(color)


  var requestR = new client.methods.Embed()
  .addField('Change username?', 'Type io.ryes or io.rno!')
  .setColor(color)

  var username = msg.content.split(' ').slice(1).join(' ');

  if (force) {
    msg.channel.send({embed: cSuccess})
    return client.user.setUsername(username)
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
        client.user.setUsername(username)
      } else if (r === "ABORTED") {
        return msg.channel.send('', { embed: cAbort})
      } else {
        return msg.channel.send('', { embed: cTime})
      }
    })
  }
};

exports.conf = {
  enabled: true,
  runIn: ['text', 'dm'],
  aliases: ['su', 'cu', 'setUsername'],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "setUsername",
  description: "Changes the bot\'s username.",
  usage: "<username:str> [force:boolean]",
  usageDelim: " ",
  category: ""
};

/*
Example:
Me: io.su Test
Bot: Type io.ryes or io.rno! (Not working)
*/
