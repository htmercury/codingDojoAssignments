let express = require("express");
let session = require("express-session");
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'supaSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});


const server = app.listen(8000, function () {
    console.log("listening on port 8000");
});
const io = require('socket.io')(server);
let history = [];

class Message {
    constructor(name, msg) {
        this.sender = name;
        this.message = msg;
    }
}

io.on('connection', function (socket) {
    socket.emit('send', history);
    socket.on('message', function(data) {
        console.log(data);
        let obj = new Message(data.name,data.msg);
        history.push(obj);
        socket.emit('send', [obj]);
        socket.broadcast.emit('send', [obj]);
    })
});
