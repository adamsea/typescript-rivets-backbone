import Router = require('router');

//
// Run the application
//
let router = new Router();
Backbone.history.start({ pushState: true, root: '/' });