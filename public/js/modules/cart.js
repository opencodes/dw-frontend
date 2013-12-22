/**
 * @class app.cart
 */
define(['jquery'], function ($) {
	var $cache = {};
	/**
	 * @private
	 * @function
	 * @description Updates the cart with new data
	 * @param {Object} postdata An Object representing the the new or uptodate data
	 * @param {Object} A callback function to be called
	 */
	function updateCart(postdata, callback) {
		var url = app.util.ajaxUrl(app.urls.addProduct);
		$.post(url, postdata, callback || app.cart.refresh);
	}
	/**
	 * @private
	 * @function
	 * @description Cache initialization of the cart page
	 */
	function initializeCache() {
		$cache = {
			cartTable : $("#cart-table"),
			itemsForm : $("#cart-items-form"),
			addCoupon : $("#add-coupon"),
			couponCode : $("form input[name$='_couponCode']")
		};
	}
	/**
	 * @private
	 * @function
	 * @description Binds events to the cart page (edit item's details, bonus item's actions, coupon code entry )
	 */
	function initializeEvents() {
		$cache.cartTable.on("click", ".item-edit-details a", function (e) {
			e.preventDefault();
			app.quickView.show({
				url : e.target.href,
				source : "cart"
			});
		})
		.on("click", ".bonus-item-actions a", function (e) {
			e.preventDefault();
			app.bonusProductsView.show(this.href);
		});

		// override enter key for coupon code entry
		$cache.couponCode.on("keydown", function (e) {
			if (e.which === 13 && $(this).val().length===0) { return false; }
		});
	}
	/******* app.cart public object ********/
	cart = {
		/**
		 * @function
		 * @description Adds new item to the cart
		 * @param {Object} postdata An Object representing the the new or uptodate data
		 * @param {Object} A callback function to be called
		 */
		add : function (postdata, callback) {
			updateCart(postdata, callback);
		},
		/**
		 * @function
		 * @description Hook for removing item from the cart
		 *
		 */
		remove : function () {
			return;
		},
		/**
		 * @function
		 * @description Updates the cart with new data
		 * @param {Object} postdata An Object representing the the new or uptodate data
		 * @param {Object} A callback function to be called
		 */
		update : function (postdata, callback) {
			updateCart(postdata, callback);
		},
		/**
		 * @function
		 * @description Refreshes the cart without posting
		 */
		refresh : function () {
			// refresh without posting
			app.page.refresh();
		},
		/**
		 * @function
		 * @description Initializes the functionality on the cart
		 */
		init : function () {
			// edit shopping cart line item
			initializeCache();
			initializeEvents();
			if(app.enabledStorePickup){
				app.storeinventory.init();
			}
		}
	};
	return cart;

}(window.app = window.app || {}, jQuery));
