requirejs.config({
    paths: {
    	"module.loader"			: "module.loader",
    	
    	/* Third-Party Plugins */
        "jquery"				: "lib/jquery/jquery-1.7.1.min",       
        "jquery.jcarousel"		: "lib/jquery/jcarousel/jquery.jcarousel.min",
        "jquery.tooltip"		: "lib/jquery/tooltip/jquery.tooltip.min",
        "jquery.validate"		: "lib/jquery/validate/jquery.validate.min-1.9.0",
        "jquery.ui"				: "lib/jquery/ui/jquery-ui-1.8.17.min",

        
        /* Utility Modules */
        "util"					: "utils/util",
        "tooltips"				: "utils/tooltip",
        "jquery.extension"		: "utils/jquery.extension",
        "validator"				: "utils/validator",
        "page"					: "utils/page",
        
        /* Functional Modules */
        "searchsuggest"			: "modules/searchsuggest",
        "minicart"				: "modules/minicart",
        "components"			: "modules/components",
        "searchplaceholder"		: "modules/searchplaceholder",
        
        
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        }       
    }
});

require(["jquery","module.loader","jquery.extension"], function ($,module) {
	module.init(window.app);
});
