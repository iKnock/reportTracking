'use strict';

const server = require('./server/index')();
const config = require('./config');

server.create(config);
server.start();