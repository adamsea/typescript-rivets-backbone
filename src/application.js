/// <reference path="../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'underscore'], function (require, exports, Backbone, _) {
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
            if (options === void 0) { options = {}; }
            _.defaults(options, {
                el: '#application'
            });
            _super.call(this, options);
        }
        Application.prototype.events = function () {
            return {
                'click button': function () {
                    alert('hi there!');
                }
            };
        };
        /**
         * Application initialization logic.
         * @method initialize
         * @param {Backbone.ViewOptions} options The application options
         */
        Application.prototype.initialize = function (options) {
            console.log('initialize');
        };
        /**
         * Render the view.
         * @method render
         * @return {Backbone.View} The view instance
         */
        Application.prototype.render = function () {
            console.log('render');
            this.$el.html("<button>Click me</button>");
            return this;
        };
        /**
         * Run the application.
         * @method run
         */
        Application.prototype.run = function () {
            console.log('run');
            this.render();
        };
        return Application;
    })(Backbone.View);
    return Application;
});
