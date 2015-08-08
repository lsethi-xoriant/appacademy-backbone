TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["board_index"],

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addBoard);
  },

  addBoard: function (board) {
    var boardView = new TrelloClone.Views.BoardView({ model: board });
    this.addSubview(".all-boards", boardView);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});
