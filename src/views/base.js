/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'underscore', 'jquery'], function (require, exports, Backbone, _, $) {
    /**
     * This is a base view for defining a common
     * render pattern and common view disposal pattern.
     */
    var BaseView = (function (_super) {
        __extends(BaseView, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The application options
         */
        function BaseView(options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            _super.call(this, options);
            /**
             * Options to add to the view instance.
             * @property optionNames
             * @type {Array}
             */
            this.optionNames = ['container'];
            this.optionNames.forEach(function (o) {
                if (_.has(options, o)) {
                    _this[o] = options[o];
                }
            });
            this.container = $(this.container);
        }
        /**
         * Render the view.
         * @method render
         * @return {Backbone.View} The view instance
         */
        BaseView.prototype.render = function () {
            this.container.append(this.$el);
            return _super.prototype.render.call(this);
        };
        return BaseView;
    })(Backbone.View);
    return BaseView;
});
