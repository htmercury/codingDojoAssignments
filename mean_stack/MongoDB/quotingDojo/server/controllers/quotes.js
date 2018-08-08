const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    show: function (req, res) {
        let context = {quotes: []};
        Quote.find({}, function (err, quotes) {
            if (err) {  
                console.log(err);
                console.log('something went wrong');
            }
            else {
                console.log('successfully found some quotes!');
                context.quotes = quotes;
                res.render('result', context);
            }
        })
    },
    create: function (req, res) {
        console.log("POST DATA", req.body);
        let quote = new Quote({ name: req.body.name, quote: req.body.quote });
        quote.save(function (err) {
            if (err) {
                console.log('something went wrong');
            }
            else {
                console.log('successfully added a quote!');
            }
        })
        res.redirect('/quotes');
    }
};