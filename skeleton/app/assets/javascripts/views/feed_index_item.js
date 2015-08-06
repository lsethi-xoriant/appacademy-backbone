NewsReader.Views.FeedIndexItem = Backbone.View.extend({
    template: JST['feed_index_item'],

    events: {
      "click .destroy-feed": "delete"
    },

    tagName: 'li',

    render: function() {
      var feedIndexItemContent = this.template({ feed :this.model });
      this.$el.html(feedIndexItemContent);

      return this;
    },

    delete: function (event) {
      this.model.destroy();
      this.remove();
    }
});
