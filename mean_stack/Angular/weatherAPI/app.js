const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const request = require('request');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

app.get('/api/seattle', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=c395a4da4f2778a1a76744076187eaec', function (err, resp, body) {
    if (!err && resp.statusCode == 200) {
      let info = JSON.parse(body)
      res.json(info);
    }
  })
})

app.get('/api/sanjose', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=c395a4da4f2778a1a76744076187eaec', function (err, resp, body) {
    if (!err && resp.statusCode == 200) {
      let info = JSON.parse(body)
      res.json(info);
    }
  })
})

app.get('/api/burbank', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/weather?q=Burbank&appid=c395a4da4f2778a1a76744076187eaec', function (err, resp, body) {
    if (!err && resp.statusCode == 200) {
      let info = JSON.parse(body)
      res.json(info);
    }
  })
})

app.get('/api/Dallas', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=c395a4da4f2778a1a76744076187eaec', function (err, resp, body) {
    if (!err && resp.statusCode == 200) {
      let info = JSON.parse(body)
      res.json(info);
    }
  })
})

app.get('/api/dc', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/weather?q=Washington&appid=c395a4da4f2778a1a76744076187eaec', function (err, resp, body) {
    if (!err && resp.statusCode == 200) {
      let info = JSON.parse(body)
      res.json(info);
    }
  })
})

app.get('/api/chicago', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=c395a4da4f2778a1a76744076187eaec', function (err, resp, body) {
    if (!err && resp.statusCode == 200) {
      let info = JSON.parse(body)
      res.json(info);
    }
  })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});


app.listen(8000, function () {
    console.log("listening on port 8000");
})
