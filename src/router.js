/// <reference path="../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'underscore', 'application'], function (require, exports, Backbone, _, Application) {
    /**
     * The router is used to manage app navigation.
     * @class Router
     * @extends Backbone.Router
     * @uses Backbone
     */
    var Router = (function (_super) {
        __extends(Router, _super);
        /**
         * Constructor for the router.
         * Will set default routes.
         * @method constructor
         */
        function Router(options) {
            if (options === void 0) { options = { routes: void 0 }; }
            _super.call(this, _.defaults(options, {
                // Insert application routes here...
                routes: {
                    "": "index"
                }
            }));
        }
        /**
         * Initialize the router.
         * This will create the parent application instance for rendering.
         * @method initialize
         * @param {Backbone.RouterOptions} options The router options
         */
        Router.prototype.initialize = function (options) {
            this.application = new Application();
        };
        /**
         * Index page for the app.
         * @method index
         */
        Router.prototype.index = function () {
            this.application.index();
        };
        /**
         * Simple helper method to parse a query string.
         * Doesn't parse deeply nested properties.
         * @param {String} queryStr The query string to parse
         * @return {Object} The JS object hash of key:value pairs
         * @private
         */
        Router.prototype.parseQueryStr = function (queryStr) {
            var queryObj = {};
            queryStr
                .split(/&/)
                .forEach(function (param) {
                var params = param.split(/=/);
                queryObj[params[0]] = params[1];
            });
            return queryObj;
        };
        return Router;
    })(Backbone.Router);
    return Router;
});
