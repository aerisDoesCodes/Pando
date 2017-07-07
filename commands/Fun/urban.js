const urban = require('urban');
exports.run = (client, msg) => {
  const args = msg.content.split(' ').slice(1).join(' ');
  urban(args).first((json) => {
    console.log(json)
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
