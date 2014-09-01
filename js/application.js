window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
 this.resource('welcome',{path: '/'});
 this.resource('start');
 this.route('king', { path: ':name' });
 this.route('resources');
});

App.WelcomeController = Ember.Controller.extend({
	message: 'Welcome to the Kingdom'
});


App.StartController = Ember.ArrayController.extend({

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

			var record = this.store.createRecord('king', {
				name: this.get('name'),
				email: this.get('email')
			
			});
			record.save().then(function() {
				

			});

			
		},
	}
	

});
	
App.KingRoute = Ember.Route.extend({

model: function(param) {
	return this.store.find('king',param.id);
}
});



App.king = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	resources: DS.belongsTo('resources', {async:true})

});

App.resources = DS.Model.extend({
	stone: DS.attr('number'),
	wood: DS.attr('number'),
	gold: DS.attr('number'),
	king: DS.belongsTo('king', {async:true})

});


App.people = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number'),
	king: DS.belongsTo('king', {async:true})

});

App.buildings = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number'),
	king:DS.belongsTo('king')

});

App.StartRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller,model); // Remember this keeps the default behaviour.
		stone = Math.floor((Math.random() * 10) + 1);
		wood = Math.floor((Math.random() * 10) + 1);
		gold = 1000;
		controller.set('stone',stone);
		controller.set('wood',wood);
		controller.set('gold',gold);

    }
});
