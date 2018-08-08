const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1955API');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
mongoose.Promise = global.Promise;

let PersonSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2}
}, {timestamps: true});
mongoose.model('Person', PersonSchema);
let Person = mongoose.model('Person');

app.get('/', function(req, res) {
    Person.find({}, function(err, data) {
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})

app.get('/new/:name', function(req, res) {
    console.log(req.params.name);
    let person = new Person({name: req.params.name});
    person.save(function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('successfully added a person!');
        }
        res.redirect('/');
    })
})

app.get('/remove/:name', function(req, res) {
    Person.findOneAndRemove({name: req.params.name}, function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    })
})

app.get('/:name', function(req, res) {
    Person.findOne({name: req.params.name}, function(err, data) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})



app.listen(8000, function () {
    console.log("listening on port 8000");
})
