/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />
define(["require", "exports", "rivets", "rivets-backbone"], function (require, exports) {
    var ButtonItem = (function () {
        /**
         * Constructor for the component.
         * @method constructor
         * @param {Backbone.View} view The Backbone.View instance
         */
        function ButtonItem(view) {
            var rivets = require('rivets');
            rivets.components['button-item'] = {
                initialize: function () { return view; },
                template: function () { return view.template; }
            };
        }
        return ButtonItem;
    })();
    return ButtonItem;
});
