Router.configure({
	layoutTemplate: "layout"
});

Router.route('/', function() {
	this.redirect("/about");
});

Router.route("/about", function() {
	this.render("about");
});

Router.route("/visa", function() {
	this.render("visa");
});

Router.route("/services", function() {
	this.render("services");
});

Router.route("/realestate", function() {
	this.render("realestate");
});

Router.route("/leadership", function() {
	this.render("leadership");
});