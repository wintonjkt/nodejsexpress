const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello this is Cloud Pak Application event!");
});
 
module.exports.app = app;
