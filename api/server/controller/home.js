'use strict';

//This can be used to push pages from the server to the client
function index(request, response) {
  response.json('This is home route');
}

module.exports = {
  index: index
};