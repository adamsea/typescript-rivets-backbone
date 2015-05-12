/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');
import ButtonView = require('views/button');

/**
 * This is the application loader for Blopboard Analytics.
 * @class Application
 * @extends Backbone.View
 * @uses Backbone
 */
class Application<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	/**
	 * Array of subviews for the application.
	 * @property subviews
	 * @type {Array}
	 */
	subviews: {id:string, subview:Backbone.View<Backbone.Model>}[]
	
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
		this.subviews = [];
		this.subviews.push({
			id: 'button-item',
			subview: new ButtonView({
				el: 'button-item',
				model: new Backbone.Model({text: 'Component Button'})
			})
		});
	}
	
	/**
	 * Remove the view.
	 * Will also remove subviews.
	 * @method remove
	 */
	remove(): Backbone.View<TModel> {
		this.subviews.forEach((i) => i.subview.remove());
		return super.remove();
	}
	
	/**
	 * Render the view.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<TModel> {
		let rivets = require('rivets');
		rivets.bind(this.$el, {collection: this.collection});
		return this;
	}
	
}

export = Application;
