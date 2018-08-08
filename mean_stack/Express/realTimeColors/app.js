let express = require("express");
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});


const server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
const io = require('socket.io')(server);
let color = '#fff';

io.on('connection', function (socket) {
    socket.on('green', function() {
        color = '#28a745';
        io.emit('color', color);
    })
    socket.on('blue', function() {
        color = '#007bff';
        io.emit('color', color);
    })
    socket.on('yellow', function() {
        color = '#ffc107';
        io.emit('color', color);
    })
    io.emit('color', color);
    
});
