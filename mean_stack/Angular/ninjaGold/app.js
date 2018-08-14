let express = require("express");
let app = express();
let bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninjaGold');
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
mongoose.Promise = global.Promise;

const GameSchema = new mongoose.Schema({
    gold: Number,
    logs: { type: Array, default: [] }
}, {timestamps: true})
mongoose.model('Game', GameSchema);
let Game = mongoose.model('Game');

app.route('/api/start_game')
    .get(function(req,res) {
        let newGame = new Game({gold: 0});
        newGame.save(function(err, game) {
            if (err) {
                res.json({'error': err});
            }
            else {
                res.json(game);
            }
        })
    })

app.route('/api/process_money')
    .post(function(req,res) {
        console.log(req.body);
        let earnedGold = Math.floor(Math.random() * (req.body.upper + 1 - req.body.lower) + req.body.lower);
        let msg = 'You ';
        if (earnedGold >= 0) {
            msg += 'earned ';
        }
        else {
            msg += 'lost ';
        }
        msg += `${Math.abs(earnedGold)} gold at the ${req.body.location}.`;
        res.json({earnedGold: earnedGold, msg: msg});
    })

app.route('/api/game/:id')
    .get(function(req, res) {
        Game.findById(req.params.id, function(err, data) {
            if (err) {
                console.log(err);
            }
            res.json(data);
        })
    })
    .post(function(req, res) {
        console.log(req.body);
        let game = Game.findByIdAndUpdate(req.params.id, {$inc: { gold: req.body.earnedGold }, $push: { logs: req.body.msg }} , (err, data) => {
            if (err) {
                console.log(err);
            }
            res.json(data);
        })
    })

const server = app.listen(8000, function () {
    console.log("listening on port 8000");
});