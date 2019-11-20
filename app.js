const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello This is a Build Demo for J2C event!");
});
 
module.exports.app = app;
