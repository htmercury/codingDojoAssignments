let express = require('express');
let session = require('express-session');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');
const flash = require('express-flash');

require('./server/config/mongoose.js')();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(flash());
app.set('trust proxy', 1);
app.use(session({
    secret: 'supaSecretz',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})
