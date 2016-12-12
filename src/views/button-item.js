/// <amd-dependency path="text!templates/components/button-item.html" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "underscore", "views/base", "text!templates/components/button-item.html"], function (require, exports, _, BaseView) {
    "use strict";
    /**
     * ButtonItem view class
     */
    var ButtonItem = (function (_super) {
        __extends(ButtonItem, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The view options
         */
        function ButtonItem(options) {
            if (options === void 0) { options = {}; }
            var _this;
            _this.template = require('text!templates/components/button-item.html');
            _this.clicks = 0;
            _this = _super.call(this, _.defaults(options, { tagName: _.uniqueId('button-item-') })) || this;
            return _this;
        }
        /**
         * Declarative events for the view.
         * @method events
         */
        ButtonItem.prototype.events = function () {
            return {
                'click button': 'logClick'
            };
        };
        /**
         * Log the click event on the button.
         * @method logClick
         */
        ButtonItem.prototype.logClick = function (ev) {
            console.log('Number of times clicked: ' + (++this.clicks));
        };
        return ButtonItem;
    }(BaseView));
    return ButtonItem;
});
