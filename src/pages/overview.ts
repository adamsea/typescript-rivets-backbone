/// <reference path="../../typings/tsd.d.ts" />

import BasePage = require('pages/base');
import ButtonItem = require('components/button-item');

class OverviewPage<TModel extends Backbone.Model> extends BasePage<TModel> {
	
	/**
	 * Initialization logic for the view.
	 * Will construct components for the page.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The page options
	 */
	initialize(options: Backbone.ViewOptions<TModel>) {
		super.initialize(options);
		
		// Set up page components
		this.components.push(new ButtonItem({
			container: this.el,
			model: this.model
		}));
	}
	
}

export = OverviewPage;