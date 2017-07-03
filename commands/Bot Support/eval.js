

exports.run = (client, msg, [code]) => {
  const content = code
  const result = new Promise((resolve, reject) => resolve(eval(content)));

  return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, {
      depth: 0
    });
    if (output.includes(client.token)) output = output.replace(client.token, 'Not for your eyes');
    if (output.length > 1990) console.log(output), output = 'Too long to be printed (content got console logged)';

    return msg.channel.send(output, {code:'js'});
  }).catch(err => {
    console.error(err);
    err = err.toString();

    if (err.includes(client.token)) err = err.replace(client.token, 'Not for your eyes');

    return msg.channel.send(err, {code:'js'});
  });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["ev"],
  permLevel: 9,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "eval",
  description: "Evaluates arbitrary Javascript. Reserved for bot owner.",
  usage: "<expression:str>",
  usageDelim: "",
};
