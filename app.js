const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Pak Agus, Selamat Malam, terima kasih!");
});
 
module.exports.app = app;
