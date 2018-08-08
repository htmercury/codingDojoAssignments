const users = require('../controllers/users.js');

module.exports = function(app) {
    app.get('/', function (req, res) {
        users.index(req,res);
    })
    
    app.post('/register', function (req, res) {  
        users.register(req,res);
    })
    
    app.post('/login', function (req, res) {
        users.login(req,res);
    })
}