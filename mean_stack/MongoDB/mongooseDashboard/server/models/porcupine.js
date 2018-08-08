const mongoose = require('mongoose');

module.exports = function() {
    let PorcupineSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 2},
        age: {type: Number, min: 1, max: 10},
        favoriteSpot: {type: String, required: true, minlength: 2}
    }, {timestamps: true});
    
    mongoose.model('Porcupine', PorcupineSchema);
}