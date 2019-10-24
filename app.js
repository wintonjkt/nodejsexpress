const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Hybrid Cloud Integration, good evening!");
});
 
module.exports.app = app;
