

const express = require("express");

const app = express();
app.use(express.static("public"));

const quotes = require("inspirational-quotes");


app.get("/", function(req, res)
{
    console.log("Quotes are on webpage!");
    var new_quotes = quotes.getRandomQuote();
    
    res.sendFile(__dirname+"/index.html");
});



app.listen(3000, function()
{
    console.log("Server is at work!");
});

