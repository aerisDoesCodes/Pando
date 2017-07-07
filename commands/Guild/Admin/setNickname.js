exports.run = (client, msg, force) => {

  var color = client.funcs.hex()
  var cAbort = new client.methods.Embed()
  .addField('Aborted', 'You said no :(')
  .setColor(color)

  var cSuccess = new client.methods.Embed()
  .addField('Alright', 'The nickname has been channge.')
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
}

exports.conf = {
  enabled: true,
  runIn: ['text', 'dm'],
  aliases: ['sn', 'cn', 'setNickname'],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
}

exports.help = {
  name: "setNickname",
  description: "Changes the bots nickname",
  usage: "<nickname:str> [force:boolean]", // Check this out also (Leave some comments here so I know what to do next time)
  usageDelim: " ",
  category: ""
}

/*  Please leave some message on what I did wrong so next time I know what to do. Thanks ^-^ */


// var user = msg.mentions.users.first();
// var nickname = msg.content.split(' ').slice(2).join(' ');
//  var botnick = msg.content.split(' ').slice(1).join(' ');
// let role = msg.member.guild.roles.find('name', 'Bot Commander');
//     if (!msg.member.roles.exists('name', 'Bot Commander'))
//     if (msg.author.id !== "241216483592634368")
//     return msg.channel.send(`\`❌\` | Only people with the Bot Commander role, can execute this command.`)
//  if (!user) {
//      msg.guild.member(this.client.user).setNickname(botnick);
//      msg.channel.send(`${this.client.user.username}'s Name has been changed by ${msg.author}`)
//  } else {
//  msg.guild.member(user).setNickname(nickname);
//  msg.channel.send("success")
// }
