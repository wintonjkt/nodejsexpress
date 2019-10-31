const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Pak Agus, Selamat Malam!");
});
 
module.exports.app = app;
