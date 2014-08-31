window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
 this.resource('welcome',{path: '/'});
 this.resource('kingdoms');
 this.route('king', { path: ':name' });
 this.route('resources');
});

App.WelcomeController = Ember.Controller.extend({
	message: 'Welcome to the Kingdom'
});


App.KingdomsController = Ember.ArrayController.extend({

	actions: {
		rollStats: function() {
			stone = Math.floor((Math.random() * 10) + 1);
			wood = Math.floor((Math.random() * 10) + 1);
			gold = 1000;
			this.set('stone',stone);
			this.set('wood',wood);
			this.set('gold',gold);
		},
		saveStats: function() {

			var record = this.store.createRecord('resources', {
				
				stone: this.get('stone'),
				wood: this.get('wood'),
				gold: this.get('gold')
			
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
		controller.set('stone',stone);
		controller.set('wood',wood);
		controller.set('gold',gold);

    },
	model: function() {
		return this.store.findAll('resources');
	}
});



App.store = DS.Store.extend({


});
App.King = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string')
	resources: belongsTo('resources')

});

App.Resources = DS.Model.extend({
	stone: DS.attr('number'),
	wood: DS.attr('number'),
	gold: DS.attr('number'),
	id:belongsTo('king')

});


App.People = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number'),
	id:belongsTo('king')

});

App.Buildings = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number'),
	id:belongsTo('king')

});

