let express = require("express");
let session = require('express-session');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'supaSecretz',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/result', function (req, res) {
    console.log(req.body);
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    res.redirect('/result');
})

app.get('/result', function (req, res) {
    console.log(req.body);
    let context = {
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment
    }
    res.render('result', context);
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
})
