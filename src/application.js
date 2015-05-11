/// <reference path="../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone'], function (require, exports, Backbone) {
    /**
     * This is the application loader for Blopboard Analytics.
     * @class Application
     * @extends Backbone.View
     * @uses Backbone
     */
    var Application = (function (_super) {
        __extends(Application, _super);
        /**
         * Constructor for the application.
         * @method constructor
         * @param {Backbone.ViewOptions} options The application options
         */
        function Application(options) {
            _super.call(this, options);
        }
        /**
         * Application initialization logic.
         * @method initialize
         * @param {Backbone.ViewOptions} options The application options
         */
        Application.prototype.initialize = function (options) {
            console.log('here');
        };
        /**
         * Run the application.
         * @method run
         */
        Application.prototype.run = function () {
            console.log('running');
        };
        return Application;
    })(Backbone.View);
    return Application;
});
