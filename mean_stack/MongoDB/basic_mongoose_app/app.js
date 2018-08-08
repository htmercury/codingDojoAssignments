let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
let path = require('path');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;

let UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, min: 1, max: 150}
}, {timestamps: true});

mongoose.model('User', UserSchema);
let User = mongoose.model('User');

app.get('/', function (req, res) {
    let context = {users: []};
    User.find({}, function (err, users) {
        if (err) {  
            console.log(err);
            console.log('something went wrong');
        }
        else {
            console.log('successfully found some users!');
            context.users = users;
        }
    }).then(() => {res.render('index', context)});
    
})
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    let user = new User({ name: req.body.name, age: req.body.age });
    user.save(function (err) {
        if (err) {
            console.log('something went wrong');
        }
        else {
            console.log('successfully added a user!');
        }
    })
    res.redirect('/');
})
app.listen(8000, function () {
    console.log("listening on port 8000");
})
