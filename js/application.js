window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.WelcomeController = Ember.Controller.extend({
	message: 'Welcome to RPG Ember'
});

App.Router.map(function() {
 this.resource('welcome',{path: '/'});
 this.resource('characters', function() { 
 	this.resource('character', { path: '/:name' });
 });
});

App.WelcomeController = Ember.Controller.extend({
	message: 'Hi there, welcome to ember RPG'
});

App.CharacterRoute = Ember.Route.extend({
	model: function () { 
		return App.Characters.findBy('name',params.name);
	}

});



App.CharactersController = Ember.ArrayController.extend({
	actions: {
		makecharacter: function() {
			var record = this.store.createRecord('characters', {
			  name: this.get('name'),
			  age: this.get('age')
			 
			});
		record.save().then(function() {
			console.log('record saved')
		});
		}
	}	
});
	

App.CharactersRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('characters');
	}
});

App.CharacterRoute = Ember.Route.extend({
	model: function() {
		return this.store.findBy('characters',param.name);
	}
});


App.Store = DS.Store.extend();
App.Characters = DS.Model.extend({
	name: DS.attr('string'),
	age: DS.attr('number')
});

App.Characters.FIXTURES = [

{ 
	id:1,
	name:'frst users',
  	age: 15
}
];
