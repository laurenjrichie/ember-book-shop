App.Router.map(function() {
  this.resource('books');
});

App.BooksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  }
});
