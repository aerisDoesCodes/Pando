const Sherlock = require('sherlockjs');
const moment = require('moment');
let embed = new client.methods.Embed()

exports.run = async (client, msg, [action, value]) => {
  const s = Sherlock.parse(msg.content);
  const relative = s.startDate.getTime() - Date.now();
  s.eventTitle = s.eventTitle.replace(/^me to ?|^me ?|^to ?/, '');
  msg.channel.send(`I will remind you to ${s.eventTitle} ${moment().add(relative, 'ms').fromNow()}.`);
  setTimeout(() => {
    let final = `${s.eventTitle}`;
    embed.setAuthor("REMINDER")
    .setDescription(final)
    .setTimestamp()
    msg.author.send('', ${embed}).catch(() => msg.channel.send(`${msg.author} ${final}`));
  }, relative);
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
  name: "remindme",
  description: "Set something to remind.",
  usage: "<seconds|minutes|hours> [str:str]",
  usageDelim: "",
};
