const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restfulTaskAPI');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
mongoose.Promise = global.Promise;

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
}, {timestamps: true})
mongoose.model('Task', TaskSchema);
let Task = mongoose.model('Task');

app.get('/tasks', function(req, res) {
    Task.find({}, function(err, data) {
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})

app.get('/tasks/:id', function(req, res) {
    Task.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})

app.post('/tasks', function(req, res) {
    console.log('content',req.body);
    let task = new Task(req.body);
    task.save(function(err) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err});
        }
        else {
            console.log('successfully added a Task!');
            res.json({message: "Success", data: task});
        }
    })
})

app.put('/tasks/:id', function(req, res) {
    Task.updateOne({_id: req.params.id}, {$set: req.body} , function(err, data) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success", data: data});
        }
    })
})

app.delete('/tasks/:id', function(req, res) {
    Task.findOneAndRemove({_id: req.params.id}, function(err) {
        if (err) {
            console.log(err);
            res.json({message: "Error", error: err});
        }
        else {
            res.json({message: "Success"});
        }
    })
})


app.listen(8000, function () {
    console.log("listening on port 8000");
})
