const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Winton!");
});
 
module.exports.app = app;
