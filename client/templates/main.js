Template.layout.helpers({
	isActive: function(uri) {
		let pathUri =  Router.current().route.path(this);

		if (pathUri === uri) {
			console.log(pathUri, $(this));
			return true;
		} 
		return false;
	}
});

Template.layout.events({
	'click #tabs': function(event) {
		console.log('hello', event.target);
	}
});
