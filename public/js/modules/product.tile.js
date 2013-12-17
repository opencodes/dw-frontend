
/**
 * @class app.product.tile
 */
(function (app, $) {
	var $cache = {};

	/**
	 * @function
	 * @description Initializes the DOM of the Product Detail Page
	 */
	function initializeDom() {
		var tiles = $cache.container.find(".product-tile");
		if (tiles.length===0) { return; }
		$cache.container.find(".product-tile").syncHeight()
												.each(function (idx) {$(this).data("idx",idx);});
	}
	/**
	 * @private
	 * @function
	 * @description Initializes events on the product-tile for the following elements:<br/>
	 * <p>swatches</p>
	 * <p>thumbnails</p>
	 */
	function initializeEvents() {
		app.quickView.initializeButton($cache.container, ".product-image");
		$cache.container.on("mouseleave", ".swatch-list", function(e){
			// Restore current thumb image
			var tile = $(this).closest(".grid-tile");
			var thumb = tile.find(".product-image a.thumb-link img").filter(":first");
			var data = thumb.data("current");
			thumb.attr({
				src : data.src,
				alt : data.alt,
				title : data.title
			});
		});
		$cache.container.on("click", ".swatch-list a.swatch", function (e) {
			e.preventDefault();
			if ($(this).hasClass("selected")) { return; }

			var tile = $(this).closest(".grid-tile");
			$(this).closest(".swatch-list").find(".swatch.selected").removeClass("selected");
			$(this).addClass("selected");
			tile.find("a.thumb-link").attr("href", $(this).attr("href"));
			tile.find("a.name-link").attr("href", $(this).attr("href"));

			var swatchImg = $(this).children("img").filter(":first");
			var data = swatchImg.data("thumb");
			var thumb = tile.find(".product-image a.thumb-link img").filter(":first");
			var currentAtts = {
				src : data.src,
				alt : data.alt,
				title : data.title
			};
			thumb.attr(currentAtts);
			thumb.data("current", currentAtts);
		}).on("mouseenter", ".swatch-list a.swatch", function (e) {
			//if ($(this).hasClass("selected")) { return; }

			// get current thumb details
			var tile = $(this).closest(".grid-tile");
			var thumb = tile.find(".product-image a.thumb-link img").filter(":first");
			var swatchImg = $(this).children("img").filter(":first");
			var data = swatchImg.data("thumb");
			var current = thumb.data('current');

			// If this is the first time, then record the current img
			if(!current) {
			    thumb.data('current',{src:thumb[0].src, alt:thumb[0].alt, title:thumb[0].title});
			}

			// Set the tile image to the values provided on the swatch data attributes
			thumb.attr({
				src : data.src,
				alt : data.alt,
				title : data.title
			});

			//swatchImg.data("thumb", currentAtts);
		});
	}

	/*************** app.product.tile public object ***************/
	app.product.tile = {
		/**
		 * @function
		 * @description Cache, events and initialization
		 */
		init : function () {
			$cache = {
				container : $(".tiles-container")
			};
			initializeEvents();
			initializeDom();
		}
	};

}(window.app = window.app || {}, jQuery));

