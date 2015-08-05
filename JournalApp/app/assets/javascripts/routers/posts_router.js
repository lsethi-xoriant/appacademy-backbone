JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts": "index",
    "posts/:id": "displayPost"
  },

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch({reset: true});
  },

  index: function () {
    this.swap(new JournalApp.Views.PostsIndex({
      collection: this.collection}));
  },

  displayPost: function (id) {
    var post = this.collection.getOrFetch(id);
    this.swap(new JournalApp.Views.PostShow({
      model: post }));
  },

  swap: function (newView) {
    this._view && this._view.remove();
    this.$rootEl.html(newView.render().$el);
    this._view = newView;
  }
});
