let express = require("express");
let app = express();

app.use(express.static(__dirname + "/static"));

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
