const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello this is Cloud Pak Automation Demonstration Testing 123");
});
 
module.exports.app = app;
