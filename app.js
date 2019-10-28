const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Jakarta, Selamat Pagi!");
});
 
module.exports.app = app;
