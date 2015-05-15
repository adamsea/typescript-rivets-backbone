/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="text!templates/pages/overview.html" />

import BasePage = require('pages/base');
import ButtonItem = require('components/button-item');

class OverviewPage<TModel extends Backbone.Model> extends BasePage<TModel> {
	
	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The page options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		this.el = require('text!templates/pages/overview.html');
		super(options);
	}
	
	/**
	 * Initialization logic for the view.
	 * Will construct components for the page.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The page options
	 */
	initialize(options: Backbone.ViewOptions<TModel>): void {
		super.initialize(options);
		
		// Set up page components
		this.components.push(new ButtonItem({
			container: this.$('#components'),
			model: this.model
		}));
	}
	
}

export = OverviewPage;