const komada = require("komada");
const Discord = require('discord.js')
var olist = new Array()
olist.push('227110473466773504')
oist.push('253544423110082589')
var serverBlackList = new Array()
serverBlackList.push('328321964865486850')
serverBlackList.push('270331157156069376')
komada.start({
  botToken: require('../bot_logins.json').Pando,
  ownerID: "241216483592634368",
  ownerIDo: "195223544186142727",
  clientID: "268345323607293952",
  prefix: "io.",
  sBlackList: serverBlackList,
  aowners: olist,
  clientOptions: {
    fetchAllMembers: true,
  },
});
