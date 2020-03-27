const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello test test");
});
 
module.exports.app = app;
