"use strict";
var util = require('util');

module.exports = function(app) {
	app.get('/module',function(req,res){
		res.render('module/module',{title:'Module'});
	});     
};
