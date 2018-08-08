const porcupines = require('../controllers/porcupines.js');

module.exports = function(app) {
    app.get('/', function (req, res) {
        porcupines.index(req, res);
    })
    
    app.get('/porcupines/new', function (req, res) {
        porcupines.add(req, res);
    })
    
    app.get('/porcupines/:id', function (req,res) {
        porcupines.show(req, res);
    })
    
    app.get('/porcupines/edit/:id', function (req,res) {
        porcupines.edit(req, res);
    })
    
    app.post('/porcupines/edit/:id', function (req,res) {
        porcupines.change(req, res);
    })
    
    app.get('/porcupines/destroy/:id', function (req,res) {
        porcupines.destroy(req, res);
    })
    
    app.post('/porcupines', function (req, res) {
        porcupines.create(req, res);
    })
}