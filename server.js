var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

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
    CustomerData: connection.model('CustomerData', model.CustomerDataSchema, 'CustomerData'),
    CustomerContactSchema: connection.model('CustomerContactSchema', model.CustomerContactSchema, 'CustomerContactSchema')
  };
  return next();
}

const addCustomerData = (req, res, next) => {
  if (req.body) {
    req.db.CustomerData.create({
      CustomerName: req.body.CustomerName,
      Email: req.body.Email,
      Address: req.body.Address,
      City: req.body.City,
      State: req.body.State,
      Zip: req.body.Zip,
      PoNumber: req.body.PoNumber
    }, (err, docs) => {
      if (err) {
        console.error(err);
        next(err);
      } else {
        res.status(200).json(docs);
      }
    });
  } else {
    next(new Error('No data'));
  }
};

const getCustomerData = (req, res, next) => {
  req.db.CustomerData.find({}, {}, (err, docs) => {
    if (err) {
      console.error(err);
      next(err);
      } else {
        res.status(200).json(docs);
      }
  });
};

const getCustomerIdData = (req, res, next) => {
  if (req.params.id) {

    req.db.CustomerData.findById(req.params.id, {
      CustomerName: true,
      Email: true,
      Address: true,
      City: true,
      State: true,
      Zip: true,
      PoNumber: true
    }, (err, docs) => {
      if (err) {
        console.error(err);
        next(err);
      } else {
        res.status(200).json(docs);
      }
    });
  } else {
    next(new Error('No this id'));
  }
};

const addCustomerContactData = (req, res, next) => {

}

const getCustomerContactData = (req, res, next) => {
  req.db.CustomerContactSchema.find({}, {}, (err, docs) => {
    if (err) {
      console.error(err);
      next(err);
    } else {
      res.status(200).json(docs);
    }

  });

};

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

app.post('/api/customer/', db, addCustomerData);
app.get('/api/customer/', db, getCustomerData);
app.get('/api/customer/:id', db, getCustomerIdData);

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});