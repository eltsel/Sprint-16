import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import Quote from "./models/quote.js";
console.log(Quote);

const app = express();
const PORT = 3000;
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/about", (req,res) => {
    res.render('about.ejs');
});

app.get("/404", (req,res) => {
    res.render('404.ejs');
});

app.get("/random", (req,res) => {
    res.render('random.ejs');
});

app.get("/create", (req,res) => {
    res.render('create.ejs');
});

app.post("/quotes/create", async (req,res) => {
    console.log(req.body)
    const newQuote = {
        author: req.body.author,
        snippet: req.body.snippet,
        body: req.body.body
    }

    let ress = await Quote.create(newQuote);
    console.log(ress);
    res.redirect("/");
});

app.get("/quotes", async (req, res) => {
    let quotes = await Quote.find();
    res.send(quotes);
});

app.get("/quotes/:id", async (req, res) => {
    let quote = await Quote.findById(req.params.id);
    res.render("details.ejs", {quote});
});

app.get("/", async (req,res) => {
    // res.send(`Your random quotes app is running!!"`);
    let quotes = await Quote.find();
    res.render("index.ejs", {quotes});
});

app.delete("/quotes/:id", async (req, res) => {
    let quote = await Quote.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

app.get('*', function(req, res){
    res.render('404.ejs');
});

mongoose.connect("mongodb://localhost:27017/Quotes",{ useNewUrlParser: true }, function (err) {
    app.listen(PORT, () => {
        console.log(`Your random_quotes server has been started, and is listening on port ${PORT}.`)
    });    
});
