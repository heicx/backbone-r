requirejs.config({
	baseUrl	: "/",
	paths	: {
		"jquery"			: "bower_components/jquery/dist/jquery.min",
		"underscore"		: "bower_components/underscore/underscore-min",
		"backbone"			: "bower_components/backbone/backbone-min",
		"backbone_local"	: "bower_components/backbone.localStorage/backbone.localStorage-min"
	},
	shim	: {
		"underscore"		: {exports: "_"},
		"backbone"			: {deps : ["underscore", "jquery"], exports: "Backbone"}
	}
});

requirejs(["main.js"]);