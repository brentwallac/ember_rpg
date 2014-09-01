window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.Store = DS.Store.extend();

App.Router.map(function() {
 this.resource('welcome',{path: '/'});
 this.resource('start');
 this.route('king', { path: ':name' });
  this.route('kings', { path: ':name' });
 this.route('resources');
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
				king_id = null;
				var stone = this.get('stone');
				var wood = this.get('wood');
				var gold = this.get('gold');

			var record = this.store.createRecord('king', {
				name: this.get('name'),
				email: this.get('email')
			});
			record.save().then(function(data) {
				console.log('saved');
				king_id = data.id;
			});
			var record = this.store.createRecord('resources',{
				stone:stone,
				wood:wood,
				gold:gold,
				king_id:king_id


			});
			record.save().then(function(data) {
				// Here I now have to push the data to the king file.
			});
			
		},
	}
	

});
App.WelcomeController = Ember.Controller.extend({
	message: 'Welcome to the Kingdom'
});



App.King = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	resources: DS.belongsTo('resources', {async:true})

});

App.King.FIXTURES = [{
	id: 1,
	name: 'kingexample',
	email: 'king@kingdon.com',
	resources_id: 1

}];


App.Resources = DS.Model.extend({
	stone: DS.attr('number'),
	wood: DS.attr('number'),
	gold: DS.attr('number'),
	king_id: 1

});


App.People = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number'),
	king: DS.belongsTo('king', {async:true})

});

App.Buildings = DS.Model.extend({
	soliders: DS.attr('number'),
	crafters: DS.attr('number')
	//king:DS.belongsTo('king')

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

    },
    model: function() {
	return this.store.findAll('king');
	},
});
App.KingRoute = Ember.Route.extend({
	model: function(params) {
	return king.findBy('id',params.king_id);
}
});

App.KingsRoute = Ember.Route.extend({
	model: function() {
	return this.store.findAll('king');
}
});


App.Resources.FIXTURES = [{
	id: 1,
	stone: 10,
	wood: 5,
	gold:100


}];
