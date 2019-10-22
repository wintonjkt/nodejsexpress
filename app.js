const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Winton, good evening!");
});
 
module.exports.app = app;
