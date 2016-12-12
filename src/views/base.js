/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone", "underscore", "jquery", "rivets", "rivets-backbone"], function (require, exports, Backbone, _, $) {
    "use strict";
    /**
     * This is a base view for defining a common
     * render pattern and common view disposal pattern.
     */
    var BaseView = (function (_super) {
        __extends(BaseView, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The view options
         */
        function BaseView(options) {
            if (options === void 0) { options = {}; }
            var _this;
            (_this.optionNames || ['container']).forEach(function (o) {
                if (_.has(options, o)) {
                    _this[o] = options[o];
                }
            });
            _this.container = $(_this.container);
            _this.views = [];
            _this = _super.call(this, options) || this;
            return _this;
        }
        /**
         * Bind the template for this view.
         * @method bindTemplate
         * @protected
         */
        BaseView.prototype.bindTemplate = function () {
            var _this = this;
            var rivets = require('rivets');
            rivets.components[this.tagName] = {
                initialize: function () { return _this; },
                template: function () { return _this.template; }
            };
        };
        /**
         * Setup event listeners for the dependencies
         * of this view (e.g. model, collection, etc.)
         * @method setupListeners
         * @protected
         */
        BaseView.prototype.setupListeners = function () { };
        /**
         * Initialization logic for base views.
         * @method initialize
         * @param {Backbone.ViewOptions} options The view options
         */
        BaseView.prototype.initialize = function (options) {
            this.bindTemplate();
            this.setupListeners();
        };
        /**
         * Render the view.
         * @method render
         * @return {Backbone.View} The view instance
         */
        BaseView.prototype.render = function () {
            var container = this.container;
            if (container instanceof jQuery && container.length) {
                container.append(this.$el);
            }
            return _super.prototype.render.call(this);
        };
        /**
         * Called after the view render cycle and data-binding cycle.
         * This is what view subclasses should implement for plugins, etc.
         * Sets the view element for bound/rendered subcomponents.
         * @method afterRender
         * @return {Backbone.View} The view instance
         */
        BaseView.prototype.afterRender = function () {
            var _this = this;
            this.views.forEach(function (v) {
                v.setElement(_this.$(v.tagName));
                v.afterRender();
            });
            return this;
        };
        return BaseView;
    }(Backbone.View));
    return BaseView;
});
