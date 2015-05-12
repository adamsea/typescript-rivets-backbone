/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');

/**
 * This is a simple button view.
 */
class ButtonView<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		_.defaults(options, {el: 'button-item'});
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