const request = require('request');
exports.run = async (client, msg) => {
  const response = await request('https://random.dog/woof.json', (e,r,b) => {
    var imageURL = JSON.parse(b).url




    var embed = new client.methods.Embed()
    .setImage(imageURL)
    .setColor(client.funcs.hex())
    .setTitle('Random Dog')
    msg.channel.send({embed})

  })

}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "dog",
  description: "Send random dog image API",
  usage: "",
  usageDelim: "",
};
