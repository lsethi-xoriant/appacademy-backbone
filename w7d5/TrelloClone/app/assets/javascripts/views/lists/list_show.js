TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["list_show"],

  className: "list",

  initialize: function () {

  },

  addCard: function (card) {

  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
