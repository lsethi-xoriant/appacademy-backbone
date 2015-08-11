TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board_show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.model.lists().each(function (list) {this.addList(list)}.bind(this));
  },

  addList: function (list) {
    var listView = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".lists", listView);
  },

  render: function () {
    var content = this.template({ board: this.model })
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
