exports.run = (client, msg, [nickname, force]) => {

  var color = client.funcs.hex()
  var cAbort = new client.methods.Embed()
  .addField('Aborted', 'You said no :(')
  .setColor(color)

  var cSuccess = new client.methods.Embed()
  .addField('Alright', 'The nickname has been change.')
  .setColor(color)

  var cTime = new client.methods.Embed()
  .addField('Times Up', 'You didn\'t answer in time')
  .setColor(color)


  var requestR = new client.methods.Embed()
  .addField('Change nickname?', 'Type io.ryes or io.rno!')
  .setColor(color)

  var nickname = msg.content.split(' ').slice(2).join(' ');

  var botnick = msg.content.split(' ').slice(1).join(' ');

  if (force) {
    msg.channel.send({embed: cSuccess})
    msg.guild.member(client.user).setNickname(botnick);
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
        msg.guild.member(client.user).setNickname(botnick);
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
  aliases: ['sn', 'cn', 'setNickname'],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "setNickname",
  description: "Changes the bot\'s nickname",
  usage: "<nickname:str> [force:boolean]",
  usageDelim: " ",
  category: ""
};
