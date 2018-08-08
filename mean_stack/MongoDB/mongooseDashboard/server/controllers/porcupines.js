const mongoose = require('mongoose');
const Porcupine = mongoose.model('Porcupine');

module.exports = {
    index: function (req, res) {
        let context = {porcupines: []};
        Porcupine.find({}, function (err, porcupines) {
            if (err) {  
                console.log(err);
                console.log('something went wrong');
            }
            else {
                console.log('successfully found some porcupines!');
            }
            context.porcupines = porcupines;
            res.render('index', context);
        })
    },
    add: function (req, res) {
        let context = {
            name: '',
            age: '',
            favoriteSpot: '',
            buttons: '<button type="submit" class="btn btn-primary">Add my porcupine!</button>\n<a href="/" role="button" class="btn btn-secondary">Back to home!</a>',
            prop: '',
            target: '/porcupines'
        };
        console.log(context);
        res.render('crud', context);
    },
    show: function (req,res) {
        Porcupine.findOne({_id: req.params.id}, function(err, data) {
            let context = data;
            context.buttons = '<a href="/" role="button" class="btn btn-secondary">Back to home!</a>';
            context.prop = 'readonly';
            context.target = '';
            res.render('crud', context);
        })
    },
    edit: function (req,res) {
        Porcupine.findOne({_id: req.params.id}, function(err, data) {
            let context = data;
            context.buttons = '<button type="submit" class="btn btn-primary">Edit my porcupine!</button>\n<a href="/" role="button" class="btn btn-secondary">Back to home!</a>';
            context.prop = '';
            context.target = req.url;
            res.render('crud', context);
        })
    },
    change: function (req,res) {
        Porcupine.update({_id: req.params.id}, {$set: req.body}, function(err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        })
    },
    destroy: function (req,res) {
        Porcupine.remove({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        })
    },
    create: function (req, res) {
        console.log("POST DATA", req.body);
        let porcupine = new Porcupine(req.body);
        porcupine.save(function (err) {
            if (err) {
                console.log('something went wrong');
            }
            else {
                console.log('successfully added a porcupine!');
            }
            res.redirect('/');
        })
    }
}