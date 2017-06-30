var sqlite3 = require('sqlite3').verbose();
var db = new  sqlite3.Database('./bot.sqlite')

console.log(db.all("SELECT * from serverBlackList"))
