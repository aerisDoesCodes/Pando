exports.run = (client, msg, [reason]) => {
    var channel = client.channels.get('280288162876751873');
    var embed = new client.methods.Embed()
    var guild = msg.guild
    client.forceLeave = true


    embed.setAuthor('Guild Removed')
        .addField("Guild Name", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .setColor("#E71515")
        .setTimestamp()
        .addField("Owner Name", `${guild.owner.user.username}`, true)
        .addField("Owner ID", `${guild.owner.id}`, true)
        .addField('Reason for Removal', reason)




        channel.send('', {
          embed,
          disableEveryone: true
        })

};

exports.help = {
  name: "leaveGuild",
  description: "Makes the bot leave a guild, Reason Required.",
  usage: "<reason:str> [...]",
  usageDelim: "",
  category: "Developer"
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};
