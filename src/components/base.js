/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />
define(["require", "exports", "rivets", "rivets-backbone"], function (require, exports) {
    var BaseComponent = (function () {
        /**
         * Constructor for the component.
         * Right now this is empty but will
         * eventually contain view init logic.
         */
        function BaseComponent(options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var rivets = require('rivets');
            rivets.components[this.view.tagName] = {
                initialize: function () { return _this.view; },
                template: function () { return _this.template; }
            };
        }
        return BaseComponent;
    })();
    return BaseComponent;
});
