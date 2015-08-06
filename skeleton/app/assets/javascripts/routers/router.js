NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedIndex"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = options.collection;
    // debugger
  },

  feedIndex: function () {
    this.feeds.fetch();
    var indexView = new NewsReader.Views.FeedIndex({collection: this.feeds});
    this.$rootEl.html(indexView.render().$el);
  }
});
