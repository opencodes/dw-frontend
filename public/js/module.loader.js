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
    	element : '#wrapper',
    	/**
    	 * initialize module
    	 */
    	init : function(app){
    		var _this = this,
    			el	  = $(_this.element);
    		
    		require(['modules/core'],function(module){		
    			
				module.init();
				
				if(typeof app  && app.pagecontext ){
	    			//get modulename from page context 
	    			_module = app.pagecontext.ns;
	    			
	    			//initialize required module
	    			require(['modules/'+_module],function(module){
	    				
	    				module.init();
	    				
	    			});
	    		}
				
			});
    		
    		
    	}    	
    };
    
    return module;
});