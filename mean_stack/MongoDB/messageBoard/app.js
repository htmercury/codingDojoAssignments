let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
let path = require('path');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseDashboard');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;

let CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    comment: {type: String, required: true, minlength: 2}
}, {timestamps: true});

let PostSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    message: {type: String, required: true, minlength: 2},
    comments: [CommentSchema]
}, {timestamps: true});

mongoose.model('Post', PostSchema);
let Post = mongoose.model('Post');

mongoose.model('Comment', CommentSchema);
let Comment = mongoose.model('Comment');

app.get('/', function (req, res) {
    Post.find({}).sort('-createdAt').exec(function(err, data) {
        if (err) {
            console.log(err);
        }
        let context = {
            posts: data
        }
        res.render('index', context);
    })
})

app.post('/post', function (req, res) {
    let post = new Post(req.body);
    post.save(function (err) {
        if (err) {
            console.log('something went wrong');
        }
        else {
            console.log('successfully added a post!');
        }
        res.redirect('/');
    })
})

app.post('/comment/:id', function (req, res) {
    let comment = new Comment(req.body);
    comment.save(function (err) {
        if (err) {
            console.log('something went wrong');
        }
        else {
            console.log('successfully added a comment!');
        }
        Post.update({_id: req.params.id}, {$push: {comments: comment}}, function(err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        })
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})
