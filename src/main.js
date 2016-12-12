define(["require", "exports", "router"], function (require, exports, Router) {
    "use strict";
    //
    // Run the application
    //
    var router = new Router();
    Backbone.history.start({ pushState: true, root: '/' });
});
