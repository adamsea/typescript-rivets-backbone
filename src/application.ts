/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');
import BasePage = require('pages/base');

// Import pages you'll be using here
import IndexPage = require('pages/index');

/**
 * This is the main controller for loading pages
 * and building layouts within the application.
 * @class Application
 * @extends Backbone.View
 * @uses Backbone
 */
class Application extends Backbone.View<Backbone.Model> {

	/**
	 * Bound application view instance.
	 * This is how rivets can bind and unbind an application.
	 * @property boundView
	 * @private
	 */
	private boundView: { unbind: Function }

	/**
	 * Page instance to render.
	 * This gets swapped based on navigation.
	 * @property page
	 * @type {BasePage}
	 */
	page: BasePage

	/**
	 * Constructor for the application.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		super(_.defaults(options, {el: '#application'}));
	}

	/**
	 * Build index page for the application.
	 * @method index
	 */
	index(): void {
		this.remove();
		this.page = new IndexPage();
		this.render();
	}

	/**
	 * Remove the view.
	 * Will also remove the page view and unbind rivets.
	 * @method remove
	 * @return {Backbone.View} The view instance
	 */
	remove(): Backbone.View<Backbone.Model> {
		// Destroy the page
		if (this.page) {
			this.page.remove();
		}

		// Unbind rivets
		if (this.boundView) {
			this.boundView.unbind();
		}

		// Return view instance for backbone compatibility
		return this;
	}

	/**
	 * Render the view.
	 * This will render the page that was created
	 * and bind the components created within the
	 * scope of the pages' view instances.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<Backbone.Model> {
		// Render the page
		if (this.page) {
			this.page.render();
		}

		// Bind the application to rivets
		let rivets = require('rivets');
		this.boundView = rivets.bind(this.$el);

		// Call afterRender cycle
		if (this.page) {
			this.page.afterRender();
		}

		// Return view instance
		return super.render();
	}

}

export = Application;
