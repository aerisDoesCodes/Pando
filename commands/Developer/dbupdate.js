exports.run = async (client, msg) => {
  const snekfetch = require('snekfetch')
  snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
  .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MTIxNjQ4MzU5MjYzNDM2OCIsImlhdCI6MTQ5NzY5NDY4OX0.3ZlhfM7NCuXjjHH1oMS5phS0ZVvxVuy7BVNQ_GshuI8')
  .send({ server_count: client.guilds.size })
  .then(console.log('Updated dbots.org status.'))
  .catch((err) => {message.channel.send(`:warning: **An error occurred.**\n${err}`); console.log(err)});
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "dbupdate",
  description: "Update server count on discordbots.org",
  usage: "",
  usageDelim: "",
};

/* This works on Mix tho, I don't know if this work on komada. */
