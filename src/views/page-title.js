/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="text!templates/components/page-title.html" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "underscore", "views/base", "text!templates/components/page-title.html"], function (require, exports, _, BaseView) {
    "use strict";
    /**
     * PageTitle view class
     */
    var PageTitle = (function (_super) {
        __extends(PageTitle, _super);
        /**
         * Constructor for the view.
         * @method constructor
         * @param {Backbone.ViewOptions} options The view options
         */
        function PageTitle(options) {
            if (options === void 0) { options = {}; }
            var _this;
            _this.template = require('text!templates/components/page-title.html');
            _this = _super.call(this, _.defaults(options, { tagName: _.uniqueId('page-title-') })) || this;
            return _this;
        }
        return PageTitle;
    }(BaseView));
    return PageTitle;
});
