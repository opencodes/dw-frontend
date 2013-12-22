/**
 *
 * All java script logic for the application.
 *    (c) 2009-2012 Demandware Inc.
 *    Subject to standard usage terms and conditions
 * The code relies on the jQuery JS library to
 * be also loaded.
 *    For all details and documentation:
 *    https://github.com/Demandware/Site-Genesis
 */
/** @namespace */
define(['jquery','util', 'searchsuggest', 'jquery.tooltip', 'tooltip','minicart','jquery.validate','validator','components','searchplaceholder'], function ($) {
//,'page','jquery.ui',	
	//allows the use of $ within this function without conflicting with other JavaScript libraries which are using it (JQuery extension)
	document.cookie="dw=1";
	/******** private functions & vars **********/

	/**
	 * @private
	 * @function
	 * @description Cache dom elements which are being accessed multiple times.<br/>app.ui holds globally available elements.
	 */
	function initUiCache() {
		app.ui = {
			searchContainer : $("#navigation .header-search"),
			printPage		: $("a.print-page"),
			reviewsContainer: $("#pwrwritediv"),
			main			: $("#main"),
			primary			: $("#primary"),
			secondary		: $("#secondary"),
			// elements found in content slots
			slots : {
				subscribeEmail : $(".subscribe-email")
			}
		};
	}

	/**
	 * @private
	 * @function
	 * @description Apply dialogify event handler to all elements that match one or more of the specified selectors.
	 */
	function initializeEvents() {
		var controlKeys = ["8", "13", "46", "45", "36", "35", "38", "37", "40", "39"];

		$("body").on("click", ".dialogify, [data-dlg-options], [data-dlg-action]", util.setDialogify)
		.on("keydown", "textarea[data-character-limit]", function(e) {
			var text = $.trim($(this).val()),
				charsLimit = $(this).data("character-limit"),
				charsUsed = text.length;

				if ((charsUsed >= charsLimit) && (controlKeys.indexOf(e.which.toString()) < 0)) {
					e.preventDefault();
				}
		})
		.on("change keyup mouseup", "textarea[data-character-limit]", function(e) {
			var text = $.trim($(this).val()),
				charsLimit = $(this).data("character-limit"),
				charsUsed = text.length,
				charsRemain = charsLimit - charsUsed;

			if(charsRemain < 0) {
				$(this).val( text.slice(0, charsRemain) );
				charsRemain = 0;
			}

			$(this).next('div.char-count').find('.char-remain-count').html(charsRemain);
		});


		//initialize search suggestions
		searchsuggest.init(app.ui.searchContainer, app.resources.SIMPLE_SEARCH);

		// print handler
		app.ui.printPage.on("click", function () { window.print(); return false; });


		// add show/hide navigation elements
		$('.secondary-navigation .toggle').click(function(){
			$(this).toggleClass('expanded').next('ul').toggle();
		});

		// add generic toggle functionality
		$('.toggle').next('.toggle-content').hide();
		$('.toggle').click(function(){
			$(this).toggleClass('expanded').next('.toggle-content').toggle();
		});

		// subscribe email box
		if (app.ui.slots.subscribeEmail.length > 0)	{
			app.ui.slots.subscribeEmail.focus(function () {
				var val = $(this.val());
				if(val.length > 0 && val !== app.resources.SUBSCRIBE_EMAIL_DEFAULT) {
					return; // do not animate when contains non-default value
				}

				$(this).animate({ color: '#999999'}, 500, 'linear', function () {
					$(this).val('').css('color','#333333');
				});
			}).blur(function () {
				var val = $.trim($(this.val()));
				if(val.length > 0) {
					return; // do not animate when contains value
				}

				$(this).val(app.resources.SUBSCRIBE_EMAIL_DEFAULT)
					   .css('color','#999999')
					   .animate({color: '#333333'}, 500, 'linear');

			});
		}
	}
	/**
	 * @private
	 * @function
	 * @description Adds class ('js') to html for css targeting and loads js specific styles.
	 */
	function initializeDom() {
		// add class to html for css targeting
		$('html').addClass('js');
		if (app.clientcache.LISTING_INFINITE_SCROLL){
			$('html').addClass('infinite-scroll');
		}
		// load js specific styles
		util.limitCharacters();
	}


	/**
	 * @property {Object} _app "inherits" app object via $.extend() at the end of this seaf (Self-Executing Anonymous Function)
	 */
	var _app = {
		containerId		: "content",
		ProductCache	: null,  // app.Product object ref to the current/main product
		ProductDetail	: null,
		clearDivHtml	: '<div class="clear"></div>',
		currencyCodes	: app.currencyCodes || {}, // holds currency code/symbol for the site

		/**
		 * @name init
		 * @function
		 * @description Master page initialization routine
		 */
		init: function (callback) {

			if (document.cookie.length===0) {
				$("<div/>").addClass("browser-compatibility-alert").append($("<p/>").addClass("browser-error").html(app.resources.COOKIES_DISABLED)).appendTo("#browser-check");
			}


			// init global cache
			initUiCache();

			// init global dom elements
			initializeDom();

			// init global events
			initializeEvents();

			// init specific global components
			tooltips.init();
			minicart.init();
			validator.init();
			components.init();
			searchplaceholder.init();
			
			return callback();
		}
	};

	return _app;
})

