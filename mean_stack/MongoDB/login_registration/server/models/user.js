const validate = require('mongoose-validator');
const mongoose = require('mongoose');

module.exports = function() {
    let emailValidator = [
        validate({
            validator: 'isEmail',
            message: 'Email must be valid.'
        }),
        validate({
            validator: function(email) {
                return new Promise((resolve, reject) => {
                    console.log(email);
                    User.find({email: new RegExp(email,'i')}, function(err, result) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('query',result);
                        resolve(result.length == 0);
                    })
                })
            },
            message: 'Email has already been used.'
        })
    ]

    let UserSchema = new mongoose.Schema({
        email: {type: String, required: [true, 'Email can not be empty.'], validate: emailValidator},
        first_name: {type: String, required: [true, 'First name can not be empty.'], minlength: [2, 'First name must contain at least 2 characters.']},
        last_name: {type: String, required: [true, 'Last name can not be empty.'], minlength: [2, 'Last name must contain at least 2 characters.']},
        password: {type: String, required: [true, 'Password can not be empty.']},
        birthday: {type: Date, required: [true, 'Birthday can not be empty.']}
    }, {timestamps: true});

    mongoose.model('User', UserSchema);
    const User = mongoose.model('User');
}