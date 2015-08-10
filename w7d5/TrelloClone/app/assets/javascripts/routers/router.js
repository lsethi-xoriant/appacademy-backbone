TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "boards/new": "newBoard",
    "boards/:id": "showBoard"
  },

  initialize: function (options) {
    this.boards = options.collection;
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    this.boards.fetch();
    var boardIndexView = new TrelloClone.Views.BoardIndex({ collection: this.boards });
    this._swapView(boardIndexView)
  },

  newBoard: function () {
    var newBoardView = new TrelloClone.Views.BoardNew({ collection: this.boards });
    this._swapView(newBoardView);
  },

  showBoard: function (id) {
    var board = this.boards.getOrFetch(id);
    var showView = new TrelloClone.Views.BoardShow({ model: board });
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.render().$el);
  }
});
