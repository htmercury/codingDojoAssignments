let express = require("express");
var session = require('express-session');
let app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

let db = {
  BlueBerry: {
    name: 'Blue Berry',
    favoriteFood: 'Not blue berry',
    age: 2,
    sleepingSpots: ['da couch', 'da plate']
  },
  Mushroom: {
    name: 'Mushroom',
    favoriteFood: 'Not mushroom',
    age: 3,
    sleepingSpots: ['da kitchen', 'da pot']
  }
}

app.get('/cats', function (req, res) {
  res.render('cats');
})

app.get('/cats/:name', function(req, res) {
  let context = db[req.params.name];
  res.render('details', context);
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
  console.log("listening on port 8000");
})
