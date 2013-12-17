"use strict";
var util = require('util');
module.exports = function (app) {
	
  app.get('/', function(req, res){
    res.render('home.ejs',{ layout:'layout',title: 'Home'});
  });
  
  app.get('/storefront', function(req, res){
	    res.render('storefront.ejs',{ layout:'layout',title: 'Storefront'});
  });
  
  app.get('/search', function(req, res){
	    res.render('search.ejs',{ layout:'layout',title: 'Search'});
  });
  
  app.get('/product', function(req, res){
	    res.render('product.ejs',{ layout:'layout',title: 'Product'});
  });
  
  require('./module')(app);
};

