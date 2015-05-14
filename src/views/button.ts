/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import BaseView = require('views/base');

/**
 * This is a simple button view.
 */
class ButtonView<TModel extends Backbone.Model> extends BaseView<TModel> {
	
	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		_.defaults(options, {tagName: 'button-item'});
		super(options);
	}
	
	/**
	 * Declarative events for the view.
	 * @method events
	 * @type {Object}
	 */
	events(): Object {
		return {
			'click button': () => alert('button clicked')
		};
	}
	
}

export = ButtonView;