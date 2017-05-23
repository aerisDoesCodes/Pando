const komada = require("komada");

komada.start({
  botToken: require('../bot_logins.json').pando,
  ownerID: "241216483592634368",
  ownerIDo: "195223544186142727",
  clientID: "268345323607293952",
  prefix: "io.",
  clientOptions: {
    fetchAllMembers: true,
  },
});
