/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');
import ButtonItem = require('components/button-item');

/**
 * This is a simple button view.
 */
class ButtonView<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	/**
	 * The component instance for this view.
	 * @property component
	 * @type {Object}
	 */
	component: Object
	
	/**
	 * The template for the button view.
	 * @property template
	 * @type {String}
	 */
	template: string
	
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
	 * Initialization logic for the View.
	 * Sets up a component instance based on the provided template.
	 * @method initialize
	 */
	initialize(options: Backbone.ViewOptions<TModel>) {
		this.template = '<button rv-text="model:text"></button>';
		this.component = new ButtonItem(this);
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