const Post = require("../models/post.schema");
const User = require('../models/user.schema')


class ArticleController {

    async userEmail (req, res, next) {
        try {
            let uP ={user: {
            email: req.body.user.email,
            title: req.body.user.title,
            text: req.body.user.text
            }};
            let post = Post(uP)
            post.save(function(err){
                if(err) return console.log(err.message);
                console.log("Сохранен объект: ", uP);

                res.send("Post is save")
            });
        } catch (error) {
            next(error);
        }
    }

    async g (req, res, next) {
        try {
            Post.find({}, function(err, user) {
            if (err) return console.log("error: " + err.message)
            res.send(user)
        })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ArticleController();