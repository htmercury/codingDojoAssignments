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
let count = 0;

io.on('connection', function (socket) {
    io.emit('num', count);
    socket.on('add', function() {
        count++;
        io.emit('num', count);
    })
    socket.on('reset', function() {
        count = 0;
        io.emit('num', count);
    })
    
});
