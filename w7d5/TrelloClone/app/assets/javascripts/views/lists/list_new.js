TrelloClone.Views.ListNew = Backbone.View.extend({
  tagName: "form",

  template: JST["list_new"],

  events: {
    "submit": "submit"
  },

  render: function () {
    var content = this.template({ board: this.model })
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var data = $(event.currentTarget).serializeJSON();
    var list = new TrelloClone.Models.List();

    list.set(data);
    list.save({}, {
      success: function () {
        this.model.lists().add(list);
        Backbone.history.navigate("boards/" + this.model.get("id"), {trigger: true});
      }.bind(this)
    })
  }
});
