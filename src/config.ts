//
// RequireJS config for the application.
//
requirejs.config({

	//
	// Main module to load for the app entry point
	//
	deps: ["main"],

	//
	// Path configs for the app.
	// These are path aliases, used to facilitate
	// loading relative urls, etc.
	//
	paths: {
		// Backbone & Friends
		"backbone": "../bower_components/backbone/backbone",
		"underscore": "../bower_components/underscore/underscore",

		// RequireJS extensions
		"i18n": "../bower_components/requirejs-i18n/i18n",
		"text": "../bower_components/requirejs-text/text",

		// jQuery & friends
		"jquery": "../bower_components/jquery/dist/jquery",

		// Data binding
		"rivets": "../bower_components/rivets/dist/rivets",
		"rivets-backbone": "../bower_components/rivets-backbone-adapter/rivets-backbone",
		"sightglass": "../bower_components/sightglass/index"
	}

});
