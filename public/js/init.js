requirejs.config({
    paths: {
    	"module.loader"			: "./module.loader",
    	
    	/* Third-Party Plugins */
        "jquery"				: "./lib/jquery/jquery-1.7.1.min",       
        "jquery.jcarousel"		: "./lib/jquery/jcarousel/jquery.jcarousel.min",
        "jquery.tooltip"		: "./lib/jquery/tooltip/jquery.tooltip.min",
        "jquery.validate"		: "./lib/jquery/validate/jquery.validate.min-1.9.0",
        "jquery.ui"				: "./lib/jquery/ui/jquery-ui-1.8.17.min",
        "jquery.hashchange"		: "./lib/jquery/hashchange/jquery.ba-hashchange.min",
        "jquery.jqzoom"			: "./lib/jquery/zoom/jquery.jqzoom.dw",
        

        
        /* Utility Modules */
        "ajax"					: "./utils/ajax",
        "dialog"				: "./utils/util",
        "jquery.extension"		: "./utils/jquery.extension",
        "page"					: "./utils/util",
        "tooltip"				: "./utils/tooltip",
        "util"					: "./utils/util",
        "validator"				: "./utils/validator",
        
        /* Functional Modules */
        "account"				: "./modules/account",
        "bonusProductsView"		: "./modules/bonusProductsView",
        "cart"					: "./modules/cart",
        "checkout"				: "./modules/checkout",
        "compare"				: "./modules/compare",
        "components"			: "./modules/components",
        "core"					: "./modules/core",
        "giftcard"				: "./modules/giftcard",
        "giftcert"				: "./modules/giftcert",
        "minicart"				: "./modules/minicart",
        "product.compare"		: "./modules/product.compare",
        "product"				: "./modules/product",
        "product.tile"			: "./modules/product.tile",
        "progress"				: "./modules/progress",
        "quickview"				: "./modules/quickview",
        "registry"				: "./modules/registry",
        "search"				: "./modules/search",
        "searchplaceholder"		: "./modules/searchplaceholder",
        "searchsuggest"			: "./modules/searchsuggest",
        "sendToFriend"			: "./modules/sendToFriend",
        "storefront"			: "./modules/storefront",
        "storeinventory"		: "./modules/storeinventory",
        "wishlist"				: "./modules/wishlist",
        
        
    },
    shim: { }
});

require(["jquery","module.loader","jquery.extension"], function ($,module) {
	module.init(window.app);
});
