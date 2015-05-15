/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'pages/base', 'components/button-item'], function (require, exports, BasePage, ButtonItem) {
    var OverviewPage = (function (_super) {
        __extends(OverviewPage, _super);
        function OverviewPage() {
            _super.apply(this, arguments);
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
            this.components.push(new ButtonItem({
                container: this.el,
                model: this.model
            }));
        };
        return OverviewPage;
    })(BasePage);
    return OverviewPage;
});
