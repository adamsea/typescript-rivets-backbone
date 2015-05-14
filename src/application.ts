/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');
import BaseComponent = require('components/base');
import ButtonItem = require('components/button-item');

/**
 * This is the application loader for Blopboard Analytics.
 * @class Application
 * @extends Backbone.View
 * @uses Backbone
 */
class Application<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	/**
	 * Array of components for the application.
	 * @property components
	 * @type {Array}
	 */
	components: BaseComponent[]
	
	/**
	 * Constructor for the application.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		_.defaults(options, {el: '#application'});
		super(options);
	}

	/**
	 * Application initialization logic.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The application options
	 */
	initialize(options: Backbone.ViewOptions<TModel>): void {
		this.components = [];
		this.components.push(new ButtonItem({
			container: '#components',
			model: new Backbone.Model({text: 'Component Button'})
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
		
		// Bind components to rivets
		let rivets = require('rivets');
		rivets.bind(this.$el, {collection: this.collection});
		return super.render();
	}
	
}

export = Application;
