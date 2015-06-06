/// <reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="rivets" />
/// <amd-dependency path="rivets-backbone" />

import Backbone = require('backbone');
import _ = require('underscore');
import $ = require('jquery');

/**
 * This is a base view for defining a common
 * render pattern and common view disposal pattern.
 */
class BaseView extends Backbone.View<Backbone.Model> {

	/**
	 * Array of subviews to render within this view.
	 * @property views
	 * @type {Array}
	 */
	views: BaseView[]

	/**
	 * The selector for the element to use
	 * when inserting the view into the DOM.
	 * @property container
	 * @type {String|jQuery}
	 */
	container: string|JQuery

	/**
	 * Options to add to the view instance.
	 * @property optionNames
	 * @type {Array}
	 */
	optionNames: string[]

	/**
	 * The template for the view.
	 * @property template
	 * @type {String}
	 */
	template: string

	/**
	 * Bind the template for this view.
	 * @method bindTemplate
	 * @protected
	 */
	protected bindTemplate(): void {
		let rivets = require('rivets');
		rivets.components[this.tagName] = {
			initialize: () => this,
			template: () => this.template
		};
	}

	/**
	 * Setup event listeners for the dependencies
	 * of this view (e.g. model, collection, etc.)
	 * @method setupListeners
	 * @protected
	 */
	protected setupListeners(): void {}

	/**
	 * Constructor for the view.
	 * @method constructor
	 * @param {Backbone.ViewOptions} options The view options
	 */
	constructor(options: Backbone.ViewOptions<Backbone.Model> = {}) {
		(this.optionNames || ['container']).forEach((o) => {
			if (_.has(options, o)) {
				this[o] = options[o];
			}
		});
		this.container = $(this.container);
		this.views = [];
		super(options);
	}

	/**
	 * Initialization logic for base views.
	 * @method initialize
	 * @param {Backbone.ViewOptions} options The view options
	 */
	initialize(options: Backbone.ViewOptions<Backbone.Model>) {
		this.bindTemplate();
		this.setupListeners();
	}

	/**
	 * Render the view.
	 * @method render
	 * @return {Backbone.View} The view instance
	 */
	render(): Backbone.View<Backbone.Model> {
		(<JQuery>this.container).append(this.$el);
		return super.render();
	}

	/**
	 * Called after the view render cycle and data-binding cycle.
	 * This is what view subclasses should implement for plugins, etc.
	 * Sets the view element for bound/rendered subcomponents.
	 * @method afterRender
	 * @return {Backbone.View} The view instance
	 */
	afterRender(): Backbone.View<Backbone.Model> {
		this.views.forEach((v) => {
			v.setElement(this.$(v.tagName));
			v.afterRender();
		});
		return this;
	}

}

export = BaseView;
