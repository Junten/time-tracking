var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var customerHandler = require('./controllers/customerHandler');

var app = express();
app.use(bodyParser.json());
var PORT = process.env.PORT || 8080
const mongodbUri = 'mongodb://testingJun:testing1@ds017852.mlab.com:17852/jun_develop';

var connection = mongoose.createConnection(mongodbUri);

connection.on('error', (err) => {
    console.error(`Connection error: ${err}`);
    process.exit(1);
});

connection.once('open', () => {
    console.log('Connected to MongoDB server.');
});

var model = require('./models/customerSchema');
const db = (req, res, next) => {
    req.db = {
        CustomerData: connection.model('CustomerData', model.CustomerData, 'CustomerData'),
        CustomerContact: connection.model('CustomerContact', model.CustomerContact, 'CustomerContact')
    };
    return next();
}

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/index.html')
});


app.post('/api/customer/', db, customerHandler.addCustomerData);
app.get('/api/customer/', db, customerHandler.getCustomerData);
app.get('/api/customer/:id', db, customerHandler.getCustomerIdData);

app.post('/api/customer-contact/', db, customerHandler.addCustomerContactData);
app.post('/api/customer-contact/:id', db, customerHandler.getCustomerContactData);

app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
});