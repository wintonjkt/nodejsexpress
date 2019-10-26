const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Indonesian Developers, good evening!");
});
 
module.exports.app = app;
