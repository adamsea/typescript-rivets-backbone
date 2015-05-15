/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');
import BaseView = require('views/base');

// Possible pages
import OverviewPage = require('pages/overview');

/**
 * This is the application loader for Blopboard Analytics.
 * @class Application
 * @extends Backbone.View
 * @uses Backbone
 */
class Application<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	/**
	 * Page instance to render.
	 * This gets swapped based on navigation.
	 * @property page
	 * @type {BaseView}
	 */
	page: BaseView<Backbone.Model>
	
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
		// Select the page
		this.page = new OverviewPage({
			model: new Backbone.Model({text: 'Component Button'})
		});
	}
	
	/**
	 * Remove the view.
	 * Will also remove subviews.
	 * @method remove
	 * @return {Backbone.View} The view instance
	 */
	remove(): Backbone.View<TModel> {
		// Destroy the page
		this.page.remove();
		return super.remove();
	}
	
	/**
	 * Render the view.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<TModel> {
		// Render the page
		this.page.render();
		
		// Bind components to rivets
		let rivets = require('rivets');
		rivets.bind(this.$el, {collection: this.collection});
		return super.render();
	}
	
}

export = Application;
