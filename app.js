const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Testing!");
});
 
module.exports.app = app;
