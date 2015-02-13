App.Router.map(function() {
  this.resource('books', function() {
    this.route('show', {path: "/:book_id"});
  });

  this.resource('authors', function() {
    this.route('books');
  });

  // this.resource('book', function() {
  //   this.route('book', {path: "/:book_id"});
  // })

});

App.BooksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  }
});

App.AuthorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('author');
  }
});

// App.BookRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('book');
//   }
// });
