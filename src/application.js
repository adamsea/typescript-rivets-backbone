/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'underscore', 'components/button-item', "rivets", "rivets-backbone"], function (require, exports, Backbone, _, ButtonItem) {
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
            _.defaults(options, { el: '#application' });
            _super.call(this, options);
        }
        /**
         * Application initialization logic.
         * @method initialize
         * @param {Backbone.ViewOptions} options The application options
         */
        Application.prototype.initialize = function (options) {
            this.components = [];
            this.components.push(new ButtonItem({
                container: '#components',
                model: new Backbone.Model({ text: 'Component Button' })
            }));
        };
        /**
         * Remove the view.
         * Will also remove subviews.
         * @method remove
         */
        Application.prototype.remove = function () {
            // Destroy all subcomponents
            this.components.forEach(function (i) { return i.view.remove(); });
            return _super.prototype.remove.call(this);
        };
        /**
         * Render the view.
         * @method render
         * @return {Backbone.View} The view instance
         */
        Application.prototype.render = function () {
            // Render all subcomponents
            this.components.forEach(function (i) { return i.view.render(); });
            // Bind components to rivets
            var rivets = require('rivets');
            rivets.bind(this.$el, { collection: this.collection });
            return _super.prototype.render.call(this);
        };
        return Application;
    })(Backbone.View);
    return Application;
});
