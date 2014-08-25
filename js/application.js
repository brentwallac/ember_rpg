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
		rollStats: function() {
			strength = Math.floor((Math.random() * 10) + 1);
			dex = Math.floor((Math.random() * 10) + 1);
			hp = Math.floor((Math.random() * 10) + 1) * strength;
			this.set('strength',strength);
			this.set('dex',dex);
			this.set('hp',hp);
		},
		saveStats: function() {

			var record = this.store.createRecord('characters', {
				name:this.get('name'),
				strength: this.get('strength'),
				dex: this.get('dex'),
				hp: this.get('hp'),
				age: this.get('age')
			});
			record.save();
			console.log('Saved');
		},
	}
	

});
	


App.CharactersRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller,model);
		strength =Math.floor((Math.random() * 10) + 1);
		dex = Math.floor((Math.random() * 10) + 1);
		hp = Math.floor((Math.random() * 10) + 1) * strength;
		controller.set('strength',strength);
		controller.set('hp',hp);
		controller.set('dex',dex);

    },
	model: function() {
		return this.store.findAll('characters');
	}
});



App.store = DS.Store.extend();
App.Characters = DS.Model.extend({
	name: DS.attr('string'),
	age: DS.attr('number'),
	str: DS.attr('number'),
  	dex: DS.attr('number'),
  	hp: DS.attr('number')
});

App.Characters.FIXTURES = [

{ 
	id:1,
	name:'frst users',
  	age: 15,
  	agi: 3,
  	str: 9,
  	dex: 9,
  	hp: 89

}
];
