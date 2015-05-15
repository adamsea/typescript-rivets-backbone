/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import BaseView = require('views/base');
import BaseComponent = require('components/base');
import ButtonItem = require('components/button-item');

class OverviewPage<TModel extends Backbone.Model> extends BaseView<TModel> {

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
		_.defaults(options, {container: '#page', id: 'components'});
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
		
		// Set up page components
		this.components = [];
		this.components.push(new ButtonItem({
			container: this.el,
			model: this.model
		}));
	}
	
	/**
	 * Remove the view.
	 * Will also remove subviews.
	 * @method remove
	 */
	remove(): Backbone.View<TModel> {
		// Destroy all subcomponents
		this.components.forEach((i) => i.view.remove());
		return super.remove();
	}
	
	/**
	 * Render the view.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<TModel> {
		// Render all subcomponents
		this.components.forEach((i) => i.view.render());
		return super.render();
	}
	
}

export = OverviewPage;