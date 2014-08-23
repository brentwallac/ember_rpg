window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;
App.Route = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
