TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["board_index"],

  events: {
    "click .board": "showBoard"
  },

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addBoard);
    this.collection.each(this.addBoard.bind(this));
  },

  addBoard: function (board) {
    var boardView = new TrelloClone.Views.BoardView({ model: board });
    this.addSubview(".all-boards", boardView);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  showBoard: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("id");
    Backbone.history.navigate("boards/" + id, {trigger: true});
  }
});
