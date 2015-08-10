TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST["list_show"],

  className: "list",

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
