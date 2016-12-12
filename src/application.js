/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone", "underscore", "pages/index", "rivets", "rivets-backbone"], function (require, exports, Backbone, _, IndexPage) {
    "use strict";
    /**
     * This is the main controller for loading pages
     * and building layouts within the application.
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
            return _super.call(this, _.defaults(options, { el: '#application' })) || this;
        }
        /**
         * Build index page for the application.
         * @method index
         */
        Application.prototype.index = function () {
            this.remove();
            this.page = new IndexPage();
            this.render();
        };
        /**
         * Remove the view.
         * Will also remove the page view and unbind rivets.
         * @method remove
         * @return {Backbone.View} The view instance
         */
        Application.prototype.remove = function () {
            // Destroy the page
            if (this.page) {
                this.page.remove();
            }
            // Unbind rivets
            if (this.boundView) {
                this.boundView.unbind();
            }
            // Return view instance for backbone compatibility
            return this;
        };
        /**
         * Render the view.
         * This will render the page that was created
         * and bind the components created within the
         * scope of the pages' view instances.
         * @method render
         * @return {Backbone.View} The view instance
         */
        Application.prototype.render = function () {
            // Render the page
            if (this.page) {
                this.page.render();
            }
            // Bind the application to rivets
            var rivets = require('rivets');
            this.boundView = rivets.bind(this.$el);
            // Call afterRender cycle
            if (this.page) {
                this.page.afterRender();
            }
            // Return view instance
            return _super.prototype.render.call(this);
        };
        return Application;
    }(Backbone.View));
    return Application;
});
