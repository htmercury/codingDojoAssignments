const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

module.exports = {
    index: function (req, res) {
        context = {
            first_name: (req.session.first_name) ? req.session.first_name : '',
            last_name: (req.session.last_name) ? req.session.last_name : '',
            birthday: (req.session.birthday) ? req.session.birthday : '',
            email: (req.session.email) ? req.session.email : '',
            emailLogin: (req.session.emailLogin) ? req.session.emailLogin : '',
        }
        req.session.first_name = '';
        req.session.last_name = '';
        req.session.birthday = '';
        req.session.email = '';
        req.session.emailLogin = '';
        res.render('index', context);
    },
    register: function (req, res) {
        let hashed_pw = null;
        let valid = true;
        if (req.body.password < 8) {
            req.flash('password', 'Password must be at least 8 characters.');
            valid = false;
        }
        else if (req.body.password != req.body.confirm_password) {
            req.flash('password', 'Passwords must match.');
            valid = false;
        }
        bcrypt.hash(req.body.password, 10)
        .then(hashed_password => {
            hashed_pw = hashed_password;
            let user = new User(
                {email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: hashed_pw, birthday: req.body.birthday}
            )
            if (!valid) {
                hashed_pw = null;
            }
            user.save(function (err) {
                if (err) {
                    console.log('something went wrong');
                    req.session.first_name = req.body.first_name;
                    req.session.last_name = req.body.last_name;
                    req.session.birthday = req.body.birthday;
                    req.session.email = req.body.email;
                    for(let key in err.errors){
                        console.log(key);
                        req.flash(key, err.errors[key].message);
                    }
                }
                else {
                    req.flash('success', 'You registered successfully!');
                    console.log('successfully added a user!');
                }
                res.redirect('/');
            })
        })
        .catch(err => {
            console.log(err);
        });
    },
    login: function (req, res) {
        User.find({email: new RegExp(req.body.email,'i')}, function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result.length == 0) {
                req.flash('login', 'Either email or password is incorrect');
                res.redirect('/');
            }
            else {
                bcrypt.compare(req.body.password, result[0].password)
                .then(result => {
                    if (result) {
                        req.flash('success', 'You logged in!');
                        console.log('correct!');
                    }
                    else {
                        req.session.emailLogin = req.body.email;
                        req.flash('login', 'Either email or password is incorrect');
                    }
                    res.redirect('/');
                }).catch(err => {
                    console.log(err);
                })
            }
        })
    }
}