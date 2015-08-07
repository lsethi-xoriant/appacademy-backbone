TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["board_index"],

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var indexContent = this.template({ boards: this.collection });
    this.$el.html(indexContent);
    return this;
  }
});
