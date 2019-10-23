const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello HCI, good evening!");
});
 
module.exports.app = app;
