const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Mas Panji, Selamat Pagi!");
});
 
module.exports.app = app;
