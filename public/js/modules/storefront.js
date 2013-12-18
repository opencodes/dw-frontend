/**
@class storefront
*/
var jcarousel = 'js/lib/jquery/jcarousel/jquery.jcarousel.min.js';

define(['jquery',jcarousel], function ($,jcarousel) {
	var $cache = {};
	storefront = {
		init : function () {
			$cache = {
				slide : $('.slide'),
				slider : $('#homepage-slider'),
				wrapper : $('#wrapper')
			};

			/**
			 * @function
			 * @description Triggers the scroll event on a carousel element
			 * @param {Object} carousel
			 */
			function slideCarousel_initCallback(carousel) {

				// create navigation for slideshow
				var numSlides = $('#homepage-slider li').size();
				var slideShowNav = '<div class="jcarousel-control">';
				for( i=1; i <= numSlides; i++) {
					slideShowNav = slideShowNav + '<a href="#" class="link-'+i+'">' + i + '</a>';
				}
				slideShowNav = slideShowNav + '</div>';
				$('#homepage-slider .jcarousel-clip').append(slideShowNav);

			   $('.jcarousel-control a').bind('click', function() {
			        carousel.scroll(jQuery.jcarousel.intval($(this).text()));
			        return false;
			    });

			   $cache.slide.width($cache.wrapper.width());

			}
			/**
			 * @function
			 * @description Activates the visibility of the next element in the carousel
			 * @param {Object} carousel -- necessity needs TBD!
			 * @param {Object} item --  necessity needs TBD!
			 * @param {Number} idx Index of the item which should be activated
			 * @param {Object} state --  necessity needs TBD!
			 */
			function slideCarousel_itemVisible(carousel, item, idx, state) {
			    //alert('Item #' + idx + ' is visible');
				$('.jcarousel-control a').removeClass('active');
				$('.jcarousel-control').find('.link-'+idx).addClass('active');
			}

			$cache.slider.jcarousel({
				scroll: 1,
				auto: 4,
				buttonNextHTML: null,
				buttonPrevHTML: null,
				itemFallbackDimension: '100%',
				initCallback: slideCarousel_initCallback,
				itemFirstInCallback: slideCarousel_itemVisible
			});
		}
	};
	return storefront;
});
