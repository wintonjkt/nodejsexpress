const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello this is Cloud Pak Automation Demonstration Testing");
});
 
module.exports.app = app;
