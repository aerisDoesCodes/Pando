exports.run = (client, msg) => {
    var channel = client.channels.get('280288162876751873');
    var embed = new client.methods.Embed()
    if (client.guilds.has(msg.content.split(' ')[1])) {
      var guild = client.guilds.get(msg.content.split(' ')[1])
    } else {
      return msg.channel.send('I am not in that guild.')
    }
    var reason = msg.content.split(' ').slice(2).join(' ')
    
    if (!reason) return msg.channel.send('I require a reason')



    embed.setFooter('Guild Removed by ' + msg.author.tag)
        .addField("Guild Name", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .setColor("#E71515")
        .setTimestamp()
        .addField("Owner Name", `${guild.owner.user.username}`, true)
        .addField("Owner ID", `${guild.owner.id}`, true)
        .addField('Reason for Removal', reason)



        msg.channel.send('Bot developer has requested that I leave this server. \n'  + reason  + '\n-'+ msg.author.tag)
        msg.delete()
        channel.send('', {embed}).then(m => {
          guild.forceLeave = true
          guild.leave()

        })


};

exports.help = {
  name: "leaveGuild",
  description: "Makes the bot leave a guild, Reason Required.",
  usage: "",
  usageDelim: "",
  category: "Guild",
  subCategory: "Developer"

};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["lg"],
  permLevel: 9,
  botPerms: [],
  requiredFuncs: [],
};
