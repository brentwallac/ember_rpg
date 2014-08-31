window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
 this.resource('welcome',{path: '/'});
 this.resource('characters');
 this.route('king', { path: ':name' });
 this.route('resources');
});

App.WelcomeController = Ember.Controller.extend({
	message: 'Welcome to the Kingdom'
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
	


App.ResourcesRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller,model); // Remember this keeps the default behaviour.
		stone = Math.floor((Math.random() * 10) + 1);
		wood = Math.floor((Math.random() * 10) + 1);
		gold = 500;
		controller.set('strength',strength);
		controller.set('hp',hp);
		controller.set('dex',dex);

    },
	model: function() {
		return this.store.findAll('king');
	}
});



App.store = DS.Store.extend({


});
App.King = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string')
	resources: belongsTo('Resources')

});

App.Resources = DS.Model.extend({
	stone: DS.attr('number'),
	wood: DS.attr('number'),
	gold: DS.attr('number'),
	id:belongsTo('King')

});


App.People = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number'),
	id:belongsTo('King')

});

App.Buildings = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number'),
	id:belongsTo('King')

});

