const urban = require('urban');
exports.run = (client, msg) => {
  const args = msg.content.split(' ').slice(1).join(' ');
  const link = msg.content.split(' ').slice(1).join('+');
  urban(args).first((json) => {
    var embed = new client.methods.Embed()
    .addField(json.word, json.definition)
    .addField('Example', json.example)
    .addField(`Learn more abour ${json.word}`, `[Click Here to go to Urban Dictionary](http://www.urbandictionary.com/define.php?term=${link})`)
    .setColor(client.funcs.hex(true))
    return msg.channel.send({embed})
  })

};

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: ['ur'],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "urban",
  description: "Displays definition from urban search.",
  usage: "",
  usageDelim: " ",
  category: ""
};
