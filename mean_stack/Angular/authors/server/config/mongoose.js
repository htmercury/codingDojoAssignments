const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

module.exports = function() {
    let models_path = path.join(__dirname, './../models');
    mongoose.connect('mongodb://localhost/authors');
    mongoose.Promise = global.Promise;

    fs.readdirSync(models_path).forEach(function (file) {
        if (file.indexOf('.js') >= 0) {
            require(models_path + '/' + file)(mongoose);
        }
    })
}