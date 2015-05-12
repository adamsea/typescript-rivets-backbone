/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');

/**
 * This is the application loader for Blopboard Analytics.
 * @class Application
 * @extends Backbone.View
 * @uses Backbone
 */
class Application<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	/**
	 * Constructor for the application.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		let model1 = new Backbone.Model({text: 'Item 1'});
		let model2 = new Backbone.Model({text: 'Item 2'});
		let model3 = new Backbone.Model({text: 'A Button'});
		_.defaults(options, {
			collection: new Backbone.Collection([model1, model2]),
			el: '#application',
			model: model3
		});
		super(options);
	}
	
	/**
	 * Declarative events for the view.
	 * @method events
	 * @type {Object}
	 */
	events(): Object {
		return {
			'click button': () => {
				alert('button clicked');
			}
		};
	}
	
	/**
	 * Application initialization logic.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The application options
	 */
	initialize(options?: Backbone.ViewOptions<TModel>): void {
		console.log('initialize');
		
		// Set up subviews
	}
	
	/**
	 * Render the view.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<TModel> {
		console.log('render');
		
		let rivets = require('rivets');
		rivets.bind(this.$el, {collection: this.collection, model: this.model});
		
		// render subviews
		
		return this;
	}
	
}

export = Application;
