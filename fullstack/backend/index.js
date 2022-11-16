const express = require('express')
const app = express();

var cors = require('cors')
app.use(cors());

/*app.get('/food', cors(), function(req, res, next){
    res.json({msg:'This is CORS-enabled for a Single Route'})
})*/

app.get("/", function(req, res){
    res.send("Hello! welcome to my application.");

});

app.get("/food", function (req, res){
    res.json(items);
});

app.use(function(req, res) {
    res.status(404);
    res.send("Oops! we didn't find what you are looking for.");
})

app.listen(3001, () => {
    console.log("Server Started on port 3001. Ctrl^C to quit.")
})





const items = [
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
    {
    id: "3",
    name: "salad",
    description: "uses seasonal local produce",
    price: "3.50",
    category: "side",
    available: "yes",
    },
    {
    id: "4",
    name: "hot chocolate",
    description: "with fully fat or skimmed milk",
    price: "2.00",
    category: "drinks",
    available: "yes",
    },
    {
    id: "5",
    name: "chocolate cake",
    description: "with cream",
    price: "2.50",
    category: "cake",
    available: "yes",
    },
    {
    id: "6",
    name: "soup",
    description: "ask for soups available today",
    price: "2.00",
    category: "snack",
    available: "yes",
    },
    {
    id: "7",
    name: "pizza",
    description: "ham and pineapple or four cheese",
    price: "5.00",
    category: "main",
    available: "yes",
    },
    {
    id: "8",
    name: "baked potato",
    description: "with cheese, coleslaw, beans or tuna",
    price: "4.50",
    category: "main",
    available: "yes",
    },
    {
    id: "9",
    name: "apple pie",
    description: "with cream or custard",
    price: "3.50",
    category: "pudding",
    available: "yes",
    },
    {
    id: "10",
    name: "cheesecake",
    description: "with cream",
    price: "3.00",
    category: "pudding",
    available: "yes",
    },
    {
    id: "11",
    name: "fish and chips",
    description: "locally caught ",
    price: "6.50",
    category: "main",
    available: "yes",
    },
    {
    id: "12",
    name: "lasagne",
    description: "with chips or garlic bread",
    price: "6.50",
category: "main",
available: "yes",
},
{
id: "13",
name: "ice cream",
description: "various flavours",
price: "2.50",
category: "pudding",
available: "yes",
},
{
id: "14",
name: "coffee",
description: "freshly ground",
price: "1.50",
category: "drinks",
available: "yes",
},
{
id: "15",
name: "tea",
description: "a range of varieties",
price: "1",
category: "drinks",
available: "yes",
},
{
id: "16",
name: "pasta",
description: "with a tomato and garlic sauce",
price: "5.50",
category: "main",
},
{
id: "17",
name: "chips",
description: "with ketchup or mayonnaise",
price: "3",
category: "side",
available: "yes",
}
];