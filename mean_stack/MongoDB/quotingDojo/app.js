const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

require('./server/config/mongoose')();

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(session({
    secret: 'supaSecretz',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./server/config/routes')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})
