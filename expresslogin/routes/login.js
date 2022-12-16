let express = require('express');
let router = express.Router();
let bcrypt = require("bcrypt");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', user: req.session.user});
});

router.post('/', function(req, res, next){
    let user = req.body.user;
    if(users[user]){
        bcrypt.compare(req.body.pass, users[user].hash, function(err, result){
            if(result){
                req.session.user = users[user];
                req.session.message = "Welcome!"
                res.redirect("/restricted");
            } else {
                req.session.error = "Incorrect user or password";
                res.redirect("/login");
            }
        });
    } else {
        req.session.error = "Incorrect user or password";
        res.redirect("/login");
    }
});

let users = {
    admin: {username: "admin"}
}

bcrypt.hash("admin", 10, function(err, hash){
    users["admin"].hash = hash;
});

module.exports = router;
