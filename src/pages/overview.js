/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'underscore', 'views/base', 'components/button-item'], function (require, exports, _, BaseView, ButtonItem) {
    var OverviewPage = (function (_super) {
        __extends(OverviewPage, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The page options
         */
        function OverviewPage(options) {
            if (options === void 0) { options = {}; }
            _.defaults(options, { container: '#page', id: 'components' });
            _super.call(this, options);
        }
        /**
         * Initialization logic for the view.
         * Will construct components for the page.
         * @method initialize
         * @param {Backbone.ViewOptions} options The page options
         */
        OverviewPage.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
            // Set up page components
            this.components = [];
            this.components.push(new ButtonItem({
                container: this.el,
                model: this.model
            }));
        };
        /**
         * Remove the view.
         * Will also remove subviews.
         * @method remove
         */
        OverviewPage.prototype.remove = function () {
            // Destroy all subcomponents
            this.components.forEach(function (i) { return i.view.remove(); });
            return _super.prototype.remove.call(this);
        };
        /**
         * Render the view.
         * @method render
         * @return {Backbone.View} The view instance
         */
        OverviewPage.prototype.render = function () {
            // Render all subcomponents
            this.components.forEach(function (i) { return i.view.render(); });
            return _super.prototype.render.call(this);
        };
        return OverviewPage;
    })(BaseView);
    return OverviewPage;
});
