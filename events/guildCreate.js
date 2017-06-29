
exports.run = (client, guild) => {


  if (client.config.sBlackList.includes(guild.id)) {
    client.users.get(guild.ownerID).send(`Your guild ${guild.name} (${guild.id}) has been put on a blacklist from joining.`)
    guild.forceLeave = true
    var embed = new client.methods.Embed()
    embed.setFooter('Guild Removed by ' + client.user.tag + ' (AUTOMATIC VIA BLACKLIST)')
        .addField("Guild Name", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .setColor("#E71515")
        .setTimestamp()
        .addField("Owner Name", `${guild.owner.user.username}`, true)
        .addField("Owner ID", `${guild.owner.id}`, true)
        .addField('Reason for Removal', 'Is currently on a blacklist.')

    client.guilds.get('280285147805384704').channels.get('280288162876751873').send({embed})
    guild.leave()
  }
  var h = 0
  var b = 0


  guild.members.forEach(m => {
    if (m.user.bot) {
      b = b + 1
    } else if (!m.user.bot) {
      h = h + 1
    }

  })
  if (!guild.available) return;


  var pic = guild.iconURL ? guild.iconURL : client.users.get(guild.ownerID).avatarURL
  client.configuration.insert(client, guild);
  const conf = client.guildConfs.get(guild.id);
  var embed = new client.methods.Embed()
  .addField('Thank you.', `Thank you for choosing Pando from:\n${client.users.get(client.config.ownerID).username} and ${client.users.get(client.config.ownerIDo).username}`)
  .addField('Permissions Reminder', `Remember to set your Mod Role in the Config.\nUse ${conf['prefix'].data}conf set modRole`)
  .addField('In need of support?', `[Click Here](http://discord.gg/dfdvArY) to join our discord.`)

  var embedc = new client.methods.Embed()
  var moment = require('moment')
  embedc.setAuthor('New Guild Added')
      .addField("Guild Name", `${guild.name}`, true)
      .addField("Guild ID", `${guild.id}`, true)
      .setColor("#0033FF")
      .setTimestamp()
      .addBlankField()
      .addField("Owner Name", `${guild.owner.user.username}`, true)
      .addField("Owner ID", `${guild.owner.id}`, true)
      .addField('Humans : Bots',`${h} : ${b}`,false)
      .setThumbnail(pic)
  client.guilds.get("280285147805384704").channels.get("280288162876751873").send(
      '', {
          disableEveryone: true,
          embed: embedc
      }

  );
  client.funcs.log("Joined a guild " + `${guild.name} \| ${guild.id} and the owner id is ${guild.owner.id}`)
  guild.defaultChannel.send('',{embed})
};

function users(guild) {
  var h = 0
  var b = 0


  guild.members.forEach(m => {
    if (m.user.bot) {
      b = b + 1
    } else if (!m.user.bot) {
      h = h + 1
    }
    return [h, b]
  })
}
