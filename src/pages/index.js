/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="text!templates/pages/index.html" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'pages/base', 'views/page-title', 'views/button-item', "text!templates/pages/index.html"], function (require, exports, Backbone, BasePage, PageTitle, ButtonItem) {
    var IndexPage = (function (_super) {
        __extends(IndexPage, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The page options
         */
        function IndexPage(options) {
            if (options === void 0) { options = {}; }
            this.el = require('text!templates/pages/index.html');
            _super.call(this, options);
        }
        /**
         * Initialization logic for the view.
         * Will construct components for the page.
         * @method initialize
         * @param {Backbone.ViewOptions} options The page options
         */
        IndexPage.prototype.initialize = function (options) {
            // Add subviews
            this.views.push(new PageTitle({
                model: new Backbone.Model({ title: 'TypeScript Rivets Backbone' }),
                tagName: 'page-title'
            }));
            this.views.push(new ButtonItem({
                model: new Backbone.Model({ title: 'Button Item' }),
                tagName: 'button-item'
            }));
            // Bind the page elements
            _super.prototype.initialize.call(this, options);
        };
        return IndexPage;
    })(BasePage);
    return IndexPage;
});
