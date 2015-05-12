/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'underscore', 'components/button-item', "rivets", "rivets-backbone"], function (require, exports, Backbone, _, ButtonItem) {
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
            _.defaults(options, { el: 'button-item' });
            _super.call(this, options);
        }
        /**
         * Initialization logic for the View.
         * Sets up a component instance based on the provided template.
         * @method initialize
         */
        ButtonView.prototype.initialize = function (options) {
            this.template = '<button rv-text="model:text"></button>';
            this.component = new ButtonItem(this);
        };
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
    })(Backbone.View);
    return ButtonView;
});
