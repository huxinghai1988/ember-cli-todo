var fs = require('fs'),
  path = require('path');

var products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf8'));

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var productsRouter = express.Router();

  productsRouter.get('/', function(req, res) {
    res.send({
      'products': products
    });
  });

  productsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  productsRouter.get('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.put('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/products', require('body-parser'));
  app.use('/api/v1/products', productsRouter);
};
