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

io.on('connection', function (socket) {
    socket.on('posting_form', function(data) {
        let submission = {};
        for (let entry of data) {
            submission[entry.name] = entry.value;
        }
        let context = {
            result:JSON.stringify(submission)
        }
        socket.emit('posting_form', context);
        let luckyNumber = Math.floor(Math.random() * 1000) + 1;
        socket.emit('lucky_number', {luckyNumber: luckyNumber});
    });
});

