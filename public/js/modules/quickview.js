/**
 * @class app.quickview
 */
define(['jquery','product','quickview','jquery.ui'], function ($,product,quickView) {
	var $cache = {};
	/**
	 * @function
	 * @description Binds a 'click'-event to the quick view button
	 */
	function bindQvButton() {
		$cache.qvButton.one("click", function (e) {
			e.preventDefault();
			quickView.show({
				url : $(this).attr("href"),
				source : "quickview"
			});
		});
	}

	/******* app.quickView public object ********/
	quickView = {
		/**
		 * @function
		 * @description
		 */
		initializeButton : function (container, target) {
			// quick view button
			$(container).on("mouseenter", target, function (e) {
				if(!$cache.qvButton) {
					$cache.qvButton = $("<a id='quickviewbutton'/>");
				}
				bindQvButton();

				var link = $(this).children("a:first");
				$cache.qvButton.attr({
					"href" : link.attr("href"),
					"title" : link.attr("title")
				}).appendTo($(this));
			});
		},
		init : function () {
			if(quickView.exists()) {
				return $cache.quickView;
			}

			$cache.quickView = $("<div/>").attr("id", "#QuickViewDialog").appendTo(document.body);
			return $cache.quickView;
		},
		// show quick view dialog and send request to the server to get the product
		// options.source - source of the dialog i.e. search/cart
		// options.url - product url
		/**
		 * @function
		 * @description
		 */
		show : function (options) {
			options.target = quickView.init();
			options.callback = function () {
				product.init();
				dialog.create({
					target : $cache.quickView,
					options : {
						height : 'auto',
						width : 920,
						dialogClass : 'quickview',
						title : 'Product Quickview',
						resizable : false,
						position : 'center',
						open : function () {
							app.progress.hide();
						}
					}
				});
				$cache.quickView.dialog('open');
			};
			product.get(options);

			return $cache.quickView;
		},
		// close the quick view dialog
		close : function () {
			if($cache.quickView) {
				$cache.quickView.dialog('close').empty();
				return $cache.quickView;
			}
		},
		exists : function () {
			return $cache.quickView && ($cache.quickView.length > 0);
		},
		isActive : function () {
			return $cache.quickView && ($cache.quickView.length > 0) && ($cache.quickView.children.length > 0);
		},
		container : $cache.quickView
	};
	return quickView;

});
