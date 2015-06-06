/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="text!templates/components/page-title.html" />

import _ = require('underscore');
import BaseView = require('views/base');

/**
 * PageTitle view class
 */
class PageTitle extends BaseView {

	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The view options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		this.template = require('text!templates/components/page-title.html');
		super(_.defaults(options, {tagName: _.uniqueId('page-title-')}));
	}

}

export = PageTitle;
