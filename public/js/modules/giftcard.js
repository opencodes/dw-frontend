/**
 * @class app.giftcard
 * @description Loads gift certificate details
 */
define(['jquery'], function ($) {

	giftcard = {
		/**
		 * @function
		 * @description Load details to a given gift certificate
		 * @param {String} id The ID of the gift certificate
		 * @param {Function} callback A function to called
		 */
		checkBalance : function (id, callback) {
			// load gift certificate details
			var url = app.util.appendParamToURL(app.urls.giftCardCheckBalance, "giftCertificateID", id);

			app.ajax.getJson({
				url: url,
				callback: callback
			});
		}
	};
	return giftcard;
}(window.app = window.app || {}, jQuery));
