const ms = require('ms');
exports.run = (client, msg, [force]) => {
  var color = client.funcs.hex()
  var cAbort = new client.methods.Embed()
  .addField('Aborted', 'You aborted the reboot.')
  .setColor(color)

  var cSuccess = new client.methods.Embed()
  .addField('Success', 'The bot will now reboot in five seconds.')
  .setColor(color)

  var cTime = new client.methods.Embed()
  .addField('Times Up', 'You didn\'t answer in time')
  .setColor(color)


  var requestR = new client.methods.Embed()
  .addField('Reboot', 'Type io.ryes or io.rno!')
  .setColor(color)

  const filter = m => {
    m.author.id.equals(msg.author.id)
  }

  if (force) {
    msg.channel.send('', {embed: cSuccess})
    return setTimeout(() => {
      process.exit()
    }, ms('5s'))
  } else  {
    msg.channel.send('', {embed: requestR})
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
      setTimeout(() => {
        process.exit()
      }, ms('5s'))
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
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 9,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "reboot",
  description: "Reboots the bot.",
  usage: "[force:boolean]",
  usageDelim: "",
};

exports.strings = {
  "Reboots the bot.": "Redémarre le bot",
  "Rebooting...": "Redémarrage",
};
