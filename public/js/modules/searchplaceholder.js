/**
 * @class app.searchplaceholder
 */
define(['jquery'], function ($) {
	/**
	 * @private
	 * @function
	 * @description Binds event to the place holder (.blur)
	 */
	function initializeEvents() {
		$('#q').focus(function () {
			var input = $(this);
			if (input.val() === input.attr("placeholder")) {
				input.val("");
			}
		})
		.blur(function () {
			var input = $(this);
			if (input.val() === "" || input.val() === input.attr("placeholder")) {
				input.val(input.attr("placeholder"));
			}
		})
		.blur();
	}

	/******* app.searchplaceholder public object ********/
	searchplaceholder = {
		/**
		 * @function
		 * @description Binds event to the place holder (.blur)
		 */
		init : function () {
			initializeEvents();
		}
	};
	return searchplaceholder;
});
