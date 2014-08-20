window.App = Ember.Application.create();


App.Route = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
