const authors = require('../controllers/authors.js');
const path = require('path');

module.exports = function(app) {
    app.route('/api/authors')
        .get((req, res) => {
            authors.getAuthors(req, res);
        })
        .post((req, res) => {
            authors.createAuthor(req, res);
        })

    app.route('/api/authors/:id')
        .get((req, res) => {
            authors.getAuthor(req, res);
        })
        .put((req,res) => {
            authors.editAuthor(req, res);
        })
        .delete((req, res) => {
            authors.deleteAuthor(req, res);
        })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}