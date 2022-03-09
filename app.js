var express = require("express");
var app = express();
var path = require('path');
const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
// otetaan EJS käyttöön
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));



// Tällä pakotetaan sivupohja tuottamaan sisennettyä, kaunista HTML:ää. Tuotantokäytössä asetus voi olla false jolloin sivujen koko pienenee hieman
app.locals.pretty = true;

app.get("/", function (req, res) {
    res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
    res.render("pages/about", {
        new_heading: "This was passed from the server",
        new_paragraph: __dirname,
        new_footer: "Here is the new footer"
    });
});

// Passing an array as data
var seconddata = [

    { name: 'John', age: 25 },
    { name: 'Sanna', age: 19 },
    { name: 'Sauli', age: 71 },
    { name: 'Iivo', age: 34 },
    { name: 'Kerttu', age: 29 }
];

app.get('/users', function (req, res) {
    res.render('pages/anotherusers', { users: seconddata });
});


app.listen(PORT);
console.log(PORT + " is the magic port");

