/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'underscore', "rivets", "rivets-backbone"], function (require, exports, Backbone, _) {
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
            var model1 = new Backbone.Model({ text: 'Item 1' });
            var model2 = new Backbone.Model({ text: 'Item 2' });
            var model3 = new Backbone.Model({ text: 'A Button' });
            _.defaults(options, {
                collection: new Backbone.Collection([model1, model2]),
                el: '#application',
                model: model3
            });
            _super.call(this, options);
        }
        /**
         * Declarative events for the view.
         * @method events
         * @type {Object}
         */
        Application.prototype.events = function () {
            return {
                'click button': function () {
                    alert('button clicked');
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
            // Set up subviews
        };
        /**
         * Render the view.
         * @method render
         * @return {Backbone.View} The view instance
         */
        Application.prototype.render = function () {
            console.log('render');
            var rivets = require('rivets');
            rivets.bind(this.$el, { collection: this.collection, model: this.model });
            // render subviews
            return this;
        };
        return Application;
    })(Backbone.View);
    return Application;
});
