import Backbone = require('backbone');
import _ = require('underscore');
import Application = require('application');

/**
 * The router is used to manage app navigation.
 * @class Router
 * @extends Backbone.Router
 * @uses Backbone
 */
class Router extends Backbone.Router {

	/**
	 * Application instance
	 * @property application
	 * @type {Backbone.View}
	 */
	application: Application

	/**
	 * Constructor for the router.
	 * Will set default routes.
	 * @method constructor
	 */
	constructor(options: Backbone.RouterOptions = { routes: void 0 }) {
		super(_.defaults(options, {

			// Insert application routes here...
			routes: {
				"": "index"
			}

		}));
	}

	/**
	 * Initialize the router.
	 * This will create the parent application instance for rendering.
	 * @method initialize
	 * @param {Backbone.RouterOptions} options The router options
	 */
	initialize(options: Backbone.RouterOptions): void {
		this.application = new Application();
	}

	/**
	 * Index page for the app.
	 * @method index
	 */
	index(): void {
		this.application.index();
	}

	/**
	 * Simple helper method to parse a query string.
	 * Doesn't parse deeply nested properties.
	 * @param {String} queryStr The query string to parse
	 * @return {Object} The JS object hash of key:value pairs
	 * @private
	 */
	private parseQueryStr(queryStr: string): {} {
		let queryObj = {};
		queryStr
			.split(/&/)
			.forEach((param: string) => {
				let params:string[] = param.split(/=/);
				queryObj[params[0]] = params[1];
			});
		return queryObj;
	}

}

export = Router;
