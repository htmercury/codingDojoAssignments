const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    getAuthors: (req, res) => {
        Author.find({}, (err, data) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },
    getAuthor: (req, res) => {
        Author.findById(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },
    createAuthor: (req, res) => {
        console.log(req.body);
        let author = new Author(req.body);
        author.save((err) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(author);
            }
        })
    },
    editAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, {$set: req.body} , (err, data) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },
    deleteAuthor: (req, res) => {
        Author.findByIdAndRemove(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    }
}