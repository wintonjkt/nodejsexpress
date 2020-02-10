const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello this is Cloud Pak Automation Demonstration Test!");
});
 
module.exports.app = app;
