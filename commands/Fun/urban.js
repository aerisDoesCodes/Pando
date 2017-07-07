exports.run = (client, msg) => {
  const unirest = require ('unirest') //Please install unirest (npm i -g unirest)
  const args = msg.content.split(' ').slice(1).join(' ');
  unirest.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${args.split('+')}`)
  .header("X-Mashape-Key", "kpkOWomvxOmshmL5UBLZYTjw7lWUp1LCls5jsnJhDLm4VjIPl6")
  .header("Accept", "text/plain")
  .end(function (result, err) {
    if(!result.body.list[0]) return msg.reply('No definition found!')
    //msg.channel.send(`\`Definition for ${args.join(' ')}\`\n\n**Definition**: ${result.body.list[0].definition}\n\n**Example**: ${result.body.list[0].example}\n\n**Author**: ${result.body.list[0].author}\n\n**Up / Down Ratio**: ${result.body.list[0].thumbs_up} :thumbsup: to ${result.body.list[0].thumbs_down} :thumbsdown:`)
    var embed = new client.methods.Embed()
    .setTitle(`Definition for ${args}`)
    .setURL(`https://urbandictionary.com/`)
    .setDescription(`${result.body.list[0].definition}`)
    .addField(`Example`, `${result.body.list[0].example}`, false)
    // .setColor(0xffffff) Please think for a hex color for our bot ^-^
    msg.channel.send('', {embed}).catch((err) => {msg.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
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
  usage: "<urban:str>",
  usageDelim: " ",
  category: ""
};
