/// <reference path="../typings/tsd.d.ts" />
define(["require", "exports", 'router'], function (require, exports, Router) {
    //
    // Run the application
    //
    var router = new Router();
    Backbone.history.start({ pushState: true, root: '/' });
});
