const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Dexa, good evening!");
});
 
module.exports.app = app;
