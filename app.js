const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello HCI Team, good evening!");
});
 
module.exports.app = app;
