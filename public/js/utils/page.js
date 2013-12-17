/**
 * @class app.page
 */
define(['jquery','util'], function ($) {

	page = {
		title : "",
		type : "",
		setContext : function (o) {
			$.extend(page, o);
		},
		params : util.getQueryStringParams(window.location.search.substr(1)),
		redirect : function(newURL) {
			var t=setTimeout("window.location.href='"+newURL+"'",0);
		},
		refresh : function() {
			var t=setTimeout("window.location.assign(window.location.href);",500);

		}
	};
	return page;
});
