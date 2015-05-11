/// <reference path="../typings/tsd.d.ts" />

//
// RequireJS config for the application.
//
requirejs.config({

	/**
	 * Path configs for the app.
	 * These are path aliases, used to facilitate
	 * loading relative urls, etc.
	 * @type {Object}
	 */
	paths: {
		// Backbone & Friends
		"backbone": "../bower_components/backbone/backbone",
		"underscore": "../bower_components/lodash/dist/lodash.underscore",

		// RequireJS extensions
		"i18n": "../bower_components/requirejs-i18n/i18n",

		// jQuery & friends
		"jquery": "../bower_components/jquery/dist/jquery",

		// Other libs
		"rivets": "../bower_components/rivets/dist/rivets",
		"rivets-backbone": "../bower_components/rivets-backbone-adapter/rivets-backbone",
		"sightglass": "../bower_components/sightglass/index"
	}

});

//
// Run the application
//
require(['application'], (Application) => {
	let app = new Application();
	app.run();
});
