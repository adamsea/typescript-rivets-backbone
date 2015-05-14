/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'views/button', 'components/base'], function (require, exports, ButtonView, BaseComponent) {
    var ButtonItem = (function (_super) {
        __extends(ButtonItem, _super);
        /**
         * Constructor for the component.
         * @method constructor
         * @param
         */
        function ButtonItem(options) {
            if (options === void 0) { options = {}; }
            // Set the template and view for the component
            this.template = '<button rv-text="model:text"></button>';
            this.view = new ButtonView(options);
            // Call the parent constructor to bind the instance
            _super.call(this, options);
        }
        return ButtonItem;
    })(BaseComponent);
    return ButtonItem;
});
