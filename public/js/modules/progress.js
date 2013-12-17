/**
 * @class app.progress
 */
(function (app, $) {
	var loader;
	app.progress = {
		/**
		 * @function
		 * @description Shows an AJAX-loader on top of a given container
		 * @param {Element} container The Element on top of which the AJAX-Loader will be shown
		 */
		show: function (container) {
			var target = (!container || $(container).length===0) ? $("body") : $(container);
			loader = loader || $(".loader");

			if (loader.length===0) {
				loader = $("<div/>").addClass("loader")
									.append($("<div/>").addClass("loader-indicator"), $("<div/>").addClass("loader-bg"));

			}
			return loader.appendTo(target).show();
		},
		/**
		 * @function
		 * @description Hides an AJAX-loader
		 */
		hide: function () {
			if (loader) { loader.hide(); }
		}
	};
}(window.app = window.app || {}, jQuery));
