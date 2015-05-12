/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

class ButtonItem {

	/**
	 * Constructor for the component.
	 * @method constructor
	 * @param {Backbone.View} view The Backbone.View instance
	 */
	constructor(view: Backbone.View<Backbone.Model>) {
		let rivets = require('rivets');
		rivets.components['button-item'] = {
			initialize: () => view,
			template: () => view.template
		};
	}
	
}

export = ButtonItem;