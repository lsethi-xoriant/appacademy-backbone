TrelloClone.Views.BoardView = Backbone.View.extend({
  template: JST["board_view"],

  className: "board",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
})
