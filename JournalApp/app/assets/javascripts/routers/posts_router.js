JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts": "index",
    "posts/new": "newPost",
    "posts/:id": "displayPost",
    "posts/:id/edit": "editPost"
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch({reset: true});
  },

  index: function () {
    this.swap(new JournalApp.Views.PostsIndex({
      collection: this.collection
    }));
  },

  displayPost: function (id) {
    var post = this.collection.getOrFetch(id);
    this.swap(new JournalApp.Views.PostShow({
      model: post
    }));
  },

  editPost: function (id) {
    var post = this.collection.getOrFetch(id);
    this.swap(new JournalApp.Views.PostForm({
      model: post,
      collection: this.collection,
      caption: 'Update Post'
    }));
  },

  newPost: function () {
    var post = new JournalApp.Models.Post();
    this.swap(new JournalApp.Views.PostForm({
      model: post,
      caption: 'Create Post',
      collection: this.collection
    }));
  },

  swap: function (newView) {
    this._view && this._view.remove();
    this.$rootEl.html(newView.render().$el);
    this._view = newView;
  }
});
