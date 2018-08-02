let express = require("express");
let app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/cars', function(req, res) {
    res.render('cars');
})
app.get('/cats', function(req, res) {
    res.render('cats');
})
app.get('/cars/new', function(req, res) {
    res.render('form');
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
