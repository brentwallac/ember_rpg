App.WelcomeController = Ember.Controller.extend({
	message: 'Welcome to RPG Ember'
});



App.characterController = Ember.ObjectController.extend({
	name: 'Welcome to RPG Ember',
	createName: function() {

	}
});

App.WelcomeController = Ember.Controller.extend({
	message: 'Welcome to RPG Ember'
});



App.characterController = Ember.ObjectController.extend({
	name: 'Welcome to RPG Ember',
	createName: function() {

	}
});

App.ApplicationAdapter = DS.FixtureAdapter;
App.Route = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }

});
