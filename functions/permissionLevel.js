module.exports = (client, user, dm) => {
  let permlvl = 0;
  if (dm) {
    if (user.id === client.config.ownerID) permlvl = 10;
    if (user.id === client.config.ownerIDo) permlvl = 10;
    return permlvl;
  }
  const modRole = user.guild.roles.find("name", user.guild.conf.modRole);
  if (modRole && user.roles.has(modRole.id)) permlvl = 2;
  if (user.id === user.guild.owner.id) permlvl = 4;


  //Aditional Owners
  if (client.config.aowners.includes(user.id)) permlvl = 9



  if (user.id === client.config.ownerIDo) permlvl = 10;
  if (user.id === client.config.ownerID) permlvl = 10;
  return permlvl;
};
