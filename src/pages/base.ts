/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import BaseView = require('views/base');

class BasePage extends BaseView {

	/**
	 * No-op the template binding since we do
	 * not have a custom component for the page.
	 * @method bindTemplate
	 * @protected
	 */
	protected bindTemplate(): void {}

	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The page options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		super(_.defaults(options, {container: '#application'}));
	}

	/**
	 * Remove the view.
	 * Will also remove subviews.
	 * @method remove
	 */
	remove(): Backbone.View<Backbone.Model> {
		// Destroy all subviews
		this.views.forEach((v) => v.remove());
		return super.remove();
	}

	/**
	 * Render the view.
	 * Will also render subviews.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<Backbone.Model> {
		// Render all subviews
		this.views.forEach((v) => v.render());
		return super.render();
	}

}

export = BasePage;
