/** 
 * A module representing a module.
 * @module module-name
 */
define(function () {
    /**
     * @constructor
     * @alias module : module
     */
    var module = {
    	/**
    	 * initialize module
    	 */
    	init : function(app){
    		
    		require(['core'],function(module){		
    			
				module.init(function(){
					// Page Specific Module Initializations
					var ns = app._module;
					if (ns && typeof(ns)!=='undefined') {
						console.log(ns)
						require([ns],function(module){
		    				module.init();
		    				
		    			});
					}
				});				
			});    		
    	}    	
    };
    
    return module;
});