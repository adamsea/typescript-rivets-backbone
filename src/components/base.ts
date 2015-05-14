/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import BaseView = require('views/base');

class BaseComponent {
	
	/**
	 * The template for the base view.
	 * @property template
	 * @type {String}
	 */
	template: string
	
	/**
	 * View instance that this component will encapsulate.
	 * @property view
	 * @type {ButtonView}
	 */
	view: BaseView<Backbone.Model>
	
	/**
	 * Constructor for the component.
	 * Creates the associated bound component for the provided view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		let rivets = require('rivets');
		rivets.components[this.view.tagName] = {
			initialize: () => this.view,
			template: () => this.template
		};
	}
	
}

export = BaseComponent;