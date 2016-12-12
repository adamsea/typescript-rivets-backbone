/// <amd-dependency path="text!templates/components/button-item.html" />

import _ = require('underscore');
import BaseView = require('views/base');

/**
 * ButtonItem view class
 */
class ButtonItem extends BaseView {

	/**
	 * Number of times clicked.
	 * @type {Number}
	 * @private
	 */
	clicks: number

	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The view options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		this.template = require('text!templates/components/button-item.html');
		this.clicks = 0;
		super(_.defaults(options, {tagName: _.uniqueId('button-item-')}));
	}

	/**
	 * Declarative events for the view.
	 * @method events
	 */
	events() {
		return {
			'click button': 'logClick'
		}
	}

	/**
	 * Log the click event on the button.
	 * @method logClick
	 */
	logClick(ev): void {
		console.log('Number of times clicked: ' + (++this.clicks));
	}

}

export = ButtonItem;
