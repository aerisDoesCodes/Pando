
exports.run = (client, guild) => {
  if (!guild.available) return;
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
      .addField("Owner Name", `${guild.owner.user.username}`, true)
      .addField("Owner ID", `${guild.owner.id}`, true)
  client.guilds.get("280285147805384704").channels.get("280288162876751873").sendEmbed(
      embedc, {
          disableEveryone: true
      }
  );

  guild.defaultChannel.sendEmbed(embed)
};
