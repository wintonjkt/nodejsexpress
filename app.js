const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello this is Cloud Pak Automation Demonstration Testing 1234");
});
 
module.exports.app = app;
