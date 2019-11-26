var app = require('express')();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/data', function(req, res) {
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    // Add these values to your MySQL database here
});

app.listen(3000);