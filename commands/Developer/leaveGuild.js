exports.run = (client, msg) => {
    var channel = client.channels.get('280288162876751873');
    var embed = new client.methods.Embed()
    var guild = msg.guild
    var reason = msg.content.split(' ').slice(1).join(' ')
    if (!reason) return msg.channel.send('I require a reason')
    client.forceLeave = true


    embed.setFooter('Guild Removed by ' + msg.author.tag)
        .addField("Guild Name", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .setColor("#E71515")
        .setTimestamp()
        .addField("Owner Name", `${guild.owner.user.username}`, true)
        .addField("Owner ID", `${guild.owner.id}`, true)
        .addField('Reason for Removal', reason)




        channel.send('', {embed}).then(m => {
          client.forceLeave = true
          guild.leave()

        })
        client.forceLeave = false

};

exports.help = {
  name: "leaveGuild",
  description: "Makes the bot leave a guild, Reason Required.",
  usage: "",
  usageDelim: "",
  category: "Developer"
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["lg"],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};
