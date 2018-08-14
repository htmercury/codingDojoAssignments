const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rateMyCakes');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
mongoose.Promise = global.Promise;

const RatingSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
}, {timestamps: true})
mongoose.model('Rating', RatingSchema);
let Rating = mongoose.model('Rating');

const CakeSchema = new mongoose.Schema({
    baker_name: {type: String, minlength: 2},
    image_url: {type: String, minlength: 4},
    ratings: {type: Array, default: []}
}, {timestamps: true})
mongoose.model('Cake', CakeSchema);
let Cake = mongoose.model('Cake');

app.get('/cakes', function(req, res) {
    Cake.find({}, function(err, data) {
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})

app.get('/cakes/:id', function(req, res) {
    Cake.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})

app.post('/cakes', function(req, res) {
    console.log('content',req.body);
    let cake = new Cake(req.body);
    cake.save(function(err) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err});
        }
        else {
            console.log('successfully added a Cake!');
            res.json({message: "Success", data: cake});
        }
    })
})

app.put('/cakes/:id', function(req, res) {
    Cake.updateOne({_id: req.params.id}, {$set: req.body} , function(err, data) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})

app.delete('/cakes/:id', function(req, res) {
    Cake.findOneAndRemove({_id: req.params.id}, function(err) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success"});
        }
    })
})

app.post('/cakes/:id/ratings', function(req, res) {
    let rating = new Rating(req.body);
    rating.save(function(err) {
        if (err) {
            console.log(err);
            res.json(err);
        }
        else {           
            Cake.updateOne({_id: req.params.id}, {$push: {ratings: rating}} , function(err, data) {
                if (err) {
                    console.log(err);
                    res.json({message: "Error", error: err});
                }
                else {
                    res.json({message: "Success", data: data});
                }
            })
        }
    })
})


app.listen(8000, function () {
    console.log("listening on port 8000");
})
