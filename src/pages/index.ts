/// <amd-dependency path="text!templates/pages/index.html" />

import Backbone = require('backbone');
import BasePage = require('pages/base');

// Components for the page
import PageTitle = require('views/page-title');
import ButtonItem = require('views/button-item');

class IndexPage extends BasePage {

	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The page options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		this.el = require('text!templates/pages/index.html');
		super(options);
	}

	/**
	 * Initialization logic for the view.
	 * Will construct components for the page.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The page options
	 */
	initialize(options: Backbone.ViewOptions<Backbone.Model>): void {
		// Add subviews
		this.views.push(new PageTitle({
			model: new Backbone.Model({title: 'TypeScript Rivets Backbone'}),
			tagName: 'page-title'
		}));
		this.views.push(new ButtonItem({
			model: new Backbone.Model({title: 'Button Item'}),
			tagName: 'button-item'
		}));

		// Bind the page elements
		super.initialize(options);
	}

}

export = IndexPage;
