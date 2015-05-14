/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'underscore', 'views/base'], function (require, exports, _, BaseView) {
    /**
     * This is a simple button view.
     */
    var ButtonView = (function (_super) {
        __extends(ButtonView, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The application options
         */
        function ButtonView(options) {
            if (options === void 0) { options = {}; }
            _.defaults(options, { tagName: _.uniqueId('button-item-') });
            _super.call(this, options);
        }
        /**
         * Declarative events for the view.
         * @method events
         * @type {Object}
         */
        ButtonView.prototype.events = function () {
            return {
                'click button': function () { return alert('button clicked'); }
            };
        };
        return ButtonView;
    })(BaseView);
    return ButtonView;
});
