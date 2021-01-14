'use strict';

const apiRoute = require('./apis');
const homeRoute = require('./home');
// const errorRoute = require('./error');

function init(server) {
  server.get('*', function (req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  });

  server.get('/', function (req, res) {    
    //res.redirect('../../client');
    res.redirect('/documentation');
  });

  server.use('/api', apiRoute);
  server.use('/documentation', homeRoute);
  // server.use('/error', errorRoute);
}

module.exports = {
  init: init
};