/// <reference path="../typings/tsd.d.ts" />

import Backbone = require('backbone');

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
	constructor(options?: Backbone.ViewOptions<TModel>) {
		super(options);
	}

	/**
	 * Application initialization logic.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The application options
	 */
	public initialize(options?: Backbone.ViewOptions<TModel>) {
		console.log('here');
	}

	/**
	 * Run the application.
	 * @method run
	 */
	public run() {
		console.log('running');
	}

}

export = Application;
