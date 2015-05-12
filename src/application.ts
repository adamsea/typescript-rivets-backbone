/// <reference path="../typings/tsd.d.ts" />

import Backbone = require('backbone');
import _ = require('underscore');

/**
 * This is the application loader for Blopboard Analytics.
 * @class Application
 * @extends Backbone.View
 * @uses Backbone
 */
class Application<TModel extends Backbone.Model> extends Backbone.View<TModel> {
	
	events(): Object {
		return {
			'click button': () => {
				alert('hi there!');
			}
		};
	}

	/**
	 * Constructor for the application.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The application options
	 */
	constructor(options: Backbone.ViewOptions<TModel> = {}) {
		_.defaults(options, {
			el: '#application'
		});
		super(options);
	}

	/**
	 * Application initialization logic.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The application options
	 */
	public initialize(options?: Backbone.ViewOptions<TModel>): void {
		console.log('initialize');
	}
	
	/**
	 * Render the view.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	public render(): Backbone.View<TModel> {
		console.log('render');
		this.$el.html("<button>Click me</button>");
		return this;
	}

	/**
	 * Run the application.
	 * @method run
	 */
	public run(): void {
		console.log('run');
		this.render();
	}

}

export = Application;
