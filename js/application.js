window.App = Ember.Application.create();


App.Route = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
App.WelcomeController = Ember.Controller.extend({
  welcome: 'My First Example'
});
