var express = require("express");
var app = express();
var path = require('path');
var EJS = require('ejs');
app.engine('html', EJS.renderFile);

// otetaan EJS käyttöön
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Tällä pakotetaan sivupohja tuottamaan sisennettyä, kaunista HTML:ää. Tuotantokäytössä asetus voi olla false jolloin sivujen koko pienenee hieman
app.locals.pretty = true;

app.get("/", function (req, res) {
    res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
    res.render("pages/about", {
        new_heading: "This was passed from the JS file",
        new_paragraph: __dirname,
        new_footer: "Here is the new footer"
    });
});

// Passing an array as data
var seconddata = [

    { name: 'John', age: 25 },
    { name: 'Mike', age: 42 },
    { name: 'Samantha', age: 51 }
];

app.get('/users', function (req, res) {
    res.render('pages/anotherusers', { users: seconddata });
});


app.listen(8081);
console.log("8081 is the magic port");

