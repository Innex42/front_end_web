const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

let database = [
    {
        name:"Fiona",
        work:"Software Engineer",
        password:"111",
    },
    {
        name:"Robert",
        work:"technical content writer",
        password:"abc",
    },
];
app.use("/login", (req, res) => {
    let username ="";
    if (req.body.username) username = req.body.username;
    let password = "";
    if (req.body.password) password = req.body.password;

    let isPresent = false;
    let isPresentIndex = null;

    for (let i =0; i < database.length; i++) {
        if (database[i].name === username && database[i].password === password) {
            isPresent = true;
            isPresentIndex = i;
            break;
        }
    }
    console.log(isPresent);

    if (isPresent) {
        //if credential are correct set and return a token "test123"
        //note in a production level app this could be jwt or could use other strategies
        res.json({ token: 'test123'})
    } else {
        // if isPresent is false return an error
        res.json({ error: 'error message'})
    }
});

app.listen(8080, () => 
    console.log("API is running on http://localhost:8080/login")
);