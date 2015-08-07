NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = options.collection;
  },

  feedIndex: function () {
    this.feeds.fetch();
    var indexView = new NewsReader.Views.FeedIndex({collection: this.feeds});
    this.swap(indexView);
  },

  feedShow: function (id) {
    var feed = this.feeds.getOrFetch(id);
    var feedShowView = new NewsReader.Views.FeedShow({ model:feed });
    this.swap(feedShowView);
  },

  swap: function(view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.render().$el);
  }

});
