TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: function (options) {
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    var boardIndexView = new TrelloClone.Views.BoardIndex();
    this.$rootEl.html(boardIndexView.render().$el);
  }
});
