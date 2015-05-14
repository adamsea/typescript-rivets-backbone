/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import _ = require('underscore');
import $ = require('jquery');

/**
 * This is a base view for defining a common
 * render pattern and common view disposal pattern.
 */
class BaseView<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	/**
	 * The selector for the element to use
	 * when inserting the view into the DOM.
	 * @property container
	 * @type {jQuery}
	 */
	container: JQuery
	
	/**
	 * Options to add to the view instance.
	 * @property optionNames
	 * @type {Array}
	 */
	optionNames: Array<string> = ['container']
	
	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		super(options);
		this.optionNames.forEach((o) => {
			if (_.has(options, o)) {
				this[o] = options[o];
			}
		});
		this.container = $(this.container);
	}
	
	/**
	 * Render the view.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<TModel> {
		this.container.append(this.$el);
		return super.render();
	}
	
}

export = BaseView;