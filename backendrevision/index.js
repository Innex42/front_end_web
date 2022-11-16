const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname,'public');

const bodyParser = require('body-parser');
const nedb = require('nedb');
const db= new nedb({filename:'comments.db', autoload:true});

app.use(express.static(public));

app.get('/', function(req, res) {
    res.send('Hello! Welcome to my Application');
})

app.get("/homepage", function (req, res){
    res.sendFile(path.join(public, "home.html"));
})

app.get('/guestbook', function(req, res){
    res.send('<h1>Guestbook Messages</h1><p>This is a page which, once implemented, will allow users to fill out a form to give feedback</p>')
})

app.get('/about', function(req, res){
    res.sendFile(path.join(public, 'about.html'));
})

app.get("/data", function (req, res){
    res.json([
        {
            id: "1",
            name: "carrot cake",
            description: "home made here",
            price: "2.50",
            category: "cake",
            available: "no",
        },
        {
            id: "2",
            name: "sandwiches",
            description: "with a variety of fillings",
            price: "2.50",
            category: "snack",
            available: "no",
        },
    ]);
});

app.get("/unfinished", function (req, res) {
    res.redirect("/");
})

app.get('/addcomment',function(req, res){
    res.sendFile(path.join(__dirname, './public/addcomment.html'));
});

app.post("/add", function (req, res) {
    db.insert(
    { name: req.body.name, comment: req.body.comment },
    function (err, newDoc) {
        if (err) {
            console.log("error", err);
        } else {
            console.log("document inserted", newDoc); //
        }
        res.send("New comment has been added into the database");
        }
    );
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res) {
    res.status(404);
    res.send("Oops!  V2 we Didn't find what you are looking for.");
})

app.use(function(err, req, res){
    res.status(500);
    res.prototype("text/plain");
    res.send("Internal Server Error.");
});

app.listen(3001, () => {
    console.log('Server Started on port 3001. Ctrl^C to Quit.');
})

