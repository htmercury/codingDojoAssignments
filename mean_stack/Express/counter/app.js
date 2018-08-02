let express = require("express");
var session = require('express-session');
let app = express();

app.use(express.static(__dirname + "/static"));
app.use(session({
  secret: 'supaSecretz',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  if (req.session.count == null) {
    req.session.count = 0;
  }
  req.session.count++;
  res.render('index', {count: req.session.count});
})

app.get('/add_two', function (req, res) {
  if (req.session.count) {
    req.session.count ++;
  }
  res.redirect('/');
})

app.get('/reset', function (req, res) {
  if (req.session.count) {
    req.session.count = 0;
  }
  res.redirect('/');
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
  console.log("listening on port 8000");
})
