NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feed_show'],

  events: {
    "click .refresh": "refresh"
  },

  initialize: function() {
    this._entries = this.model.entries();
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ feed:this.model });
    this.$el.html(content);
    this._entries.each(function(entry) {
      var entryListItemView = new NewsReader.Views.EntryListItem({ model: entry});
      this.$(".entries-list").append(entryListItemView.render().$el);
    }.bind(this));
    return this;
  },

  refresh: function(event) {
    this.model.fetch({ data: {force_reload: true} } );
  }
});
