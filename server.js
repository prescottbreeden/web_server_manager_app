const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://localhost/node-angular')


//view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/routes')(app)

app.listen(8000, function() {
    console.log('Power Overwhelming...')
})