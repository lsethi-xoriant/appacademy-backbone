NewsReader.Views.FeedIndex = Backbone.View.extend({
  template: JST["feed_index"],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each(function(feed) {
      var feedIndexItemView = new NewsReader.Views.FeedIndexItem( {model:feed } );
      this.$(".feed-index-list").append(feedIndexItemView.render().$el);
    }.bind(this))

    return this;
  }
});
