const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello this is Cloud Pak Automation Demonstration Test 123 Test!");
});
 
module.exports.app = app;
