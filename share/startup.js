if (Meteor.isClient) {

	Meteor.startup(function() {
	    Session.set("berkellp.user.lang", "en"); 
	    Session.set("showLoadingIndicator", true);
	});

}