'use strict';

var express = require('express'),
    path = require('path'),
    http = require('http');
var fs = require('fs');

const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser'); 
const cors = require('cors');


module.exports = function() {
    let server = express(),
      create,
      start;
  
    create = function(config) {
      let routes = require('./routes');
  
      // Server settings
      server.set('env', config.env);
      server.set('port', config.port);
      server.set('hostname', config.hostname);
      server.set('viewDir', config.viewDir);
  
      // Returns middleware that parses json
      server.use(cors());
      server.use(bodyParser.json());
      server.use(bodyParser.urlencoded({ extended: false }));
      server.use(cookieParser());
      server.use(logger('dev'));
//      server.use(passport.initialize());
    /*  mongoose.connect(db.database, {
        useNewUrlParser: true,
        useCreateIndex: true
      });**/

    //  require('../configs/passport')(passport);
  
      server.use('/uploads', express.static('uploads'));
  
      server.set('views', server.get('viewDir'));
  
      // Set up routes
      routes.init(server);
    };
  
    start = function() {
      let hostname = server.get('hostname'),
        port = server.get('port');
  
      server.listen(port, function () {
        console.log('Express server listening on - http://' + hostname + ':' + port);
      });
    };
  
    return {
      create: create,
      start: start
    };
  };

