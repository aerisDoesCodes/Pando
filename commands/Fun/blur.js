var Jimp = require('jimp')
exports.run = (client, msg) => {
  if (msg.mentions.users.size === 0) {
    const res = msg.channel.send(':gear: generating...')
    Jimp.read(msg.author.avatarURL, (err, avatar) => {
      if (err) return msg.edit('failed to generate.')
      avatar.blur(5).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        msg.delete()
        msg.channel.send({
          files: [{
            attachment: buffer,
            name: 'bringBack-sendFile.png'
          }]
        })
      })
    })
  } else {
    const res = msg.channel.send(':gear: generating...')
    Jimp.read(msg.mentions.users.first().avatarURL, (err, avatar) => {
      if (err) return msg.edit('failed to generate.')
      avatar.blur(5).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        msg.delete()
        msg.channel.send({
          files: [{
            attachment: buffer,
            name: 'bringBack-sendFile.png'
          }]
        })
      })
    })
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "blur",
  description: "Blur avatar on user mentioned or your avatar.",
  usage: "",
  usageDelim: "",
};
