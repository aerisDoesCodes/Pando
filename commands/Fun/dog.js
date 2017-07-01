exports.run = async (client, msg) => {
const response = await this.request('https://random.dog/woof.json'),

  body = JSON.parse(response.body),

  imageURL = body.url;



msg.channel.send({

  files: [{

    attachment: imageURL,

    name: 'woof.png'

  }]

});
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
