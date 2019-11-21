const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello This is a Build Demo for CloudPak event!");
});
 
module.exports.app = app;
