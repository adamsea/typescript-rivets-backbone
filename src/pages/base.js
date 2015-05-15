/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'underscore', 'views/base'], function (require, exports, _, BaseView) {
    var BasePage = (function (_super) {
        __extends(BasePage, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The page options
         */
        function BasePage(options) {
            if (options === void 0) { options = {}; }
            _.defaults(options, { container: '#page' });
            _super.call(this, options);
        }
        /**
         * Initialization logic for the view.
         * Will construct components for the page.
         * @method initialize
         * @param {Backbone.ViewOptions} options The page options
         */
        BasePage.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
            // Initialize page components
            this.components = [];
        };
        /**
         * Remove the view.
         * Will also remove components.
         * @method remove
         */
        BasePage.prototype.remove = function () {
            // Destroy all subcomponents
            this.components.forEach(function (i) { return i.view.remove(); });
            return _super.prototype.remove.call(this);
        };
        /**
         * Render the view.
         * Will also render components.
         * @method render
         * @return {Backbone.View} The view instance
         */
        BasePage.prototype.render = function () {
            // Render all subcomponents
            this.components.forEach(function (i) { return i.view.render(); });
            return _super.prototype.render.call(this);
        };
        return BasePage;
    })(BaseView);
    return BasePage;
});
