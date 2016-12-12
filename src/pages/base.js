/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "underscore", "views/base"], function (require, exports, _, BaseView) {
    "use strict";
    var BasePage = (function (_super) {
        __extends(BasePage, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The page options
         */
        function BasePage(options) {
            if (options === void 0) { options = {}; }
            return _super.call(this, _.defaults(options, { container: '#application' })) || this;
        }
        /**
         * No-op the template binding since we do
         * not have a custom component for the page.
         * @method bindTemplate
         * @protected
         */
        BasePage.prototype.bindTemplate = function () { };
        /**
         * Remove the view.
         * Will also remove subviews.
         * @method remove
         */
        BasePage.prototype.remove = function () {
            // Destroy all subviews
            this.views.forEach(function (v) { return v.remove(); });
            return _super.prototype.remove.call(this);
        };
        /**
         * Render the view.
         * Will also render subviews.
         * @method render
         * @return {Backbone.View} The view instance
         */
        BasePage.prototype.render = function () {
            // Render all subviews
            this.views.forEach(function (v) { return v.render(); });
            return _super.prototype.render.call(this);
        };
        return BasePage;
    }(BaseView));
    return BasePage;
});
