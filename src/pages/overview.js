/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="text!templates/pages/overview.html" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'pages/base', 'components/button-item', "text!templates/pages/overview.html"], function (require, exports, BasePage, ButtonItem) {
    var OverviewPage = (function (_super) {
        __extends(OverviewPage, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The page options
         */
        function OverviewPage(options) {
            if (options === void 0) { options = {}; }
            this.el = require('text!templates/pages/overview.html');
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
            this.components.push(new ButtonItem({
                container: this.$('#components'),
                model: this.model
            }));
        };
        return OverviewPage;
    })(BasePage);
    return OverviewPage;
});
