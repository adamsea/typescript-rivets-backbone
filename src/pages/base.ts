/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import BaseView = require('views/base');
import BaseComponent = require('components/base');

class BasePage<TModel extends Backbone.Model> extends BaseView<TModel> {

	/**
	 * Array of components for the application.
	 * @property components
	 * @type {Array}
	 */
	components: BaseComponent[]
	
	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The page options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		_.defaults(options, {container: '#page'});
		super(options);
	}
	
	/**
	 * Initialization logic for the view.
	 * Will construct components for the page.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The page options
	 */
	initialize(options: Backbone.ViewOptions<TModel>) {
		super.initialize(options);
		
		// Initialize page components
		this.components = [];
	}
	
	/**
	 * Remove the view.
	 * Will also remove components.
	 * @method remove
	 */
	remove(): Backbone.View<TModel> {
		// Destroy all subcomponents
		this.components.forEach((i) => i.view.remove());
		return super.remove();
	}
	
	/**
	 * Render the view.
	 * Will also render components.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<TModel> {
		// Render all subcomponents
		this.components.forEach((i) => i.view.render());
		return super.render();
	}
	
}

export = BasePage;