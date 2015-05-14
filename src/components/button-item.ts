/// <reference path="../../typings/tsd.d.ts" />

import ButtonView = require('views/button');
import BaseComponent = require('components/base');

class ButtonItem extends BaseComponent {
	
	/**
	 * View instance that this component will encapsulate.
	 * @property view
	 * @type {ButtonView}
	 */
	view: ButtonView<Backbone.Model>
	
	/**
	 * Constructor for the component.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		// Set the template and view for the component
		this.template = '<button rv-text="model:text"></button>';
		this.view = new ButtonView(options);
		
		// Call the parent constructor to bind the instance
		super(options);
	}
	
}

export = ButtonItem;