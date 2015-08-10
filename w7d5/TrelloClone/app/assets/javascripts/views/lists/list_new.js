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
    data["list"]["board_id"] = this.model.get("id");
    data["list"]["ord"] = 1;
    debugger;

    var list = new TrelloClone.Models.List();
    list.set(data);
    list.save({}, {
      success: function () {
        this.model.lists().add(list);
        Backbone.history.navigate("", {trigger: true});
      }.bind(this)
    })
  }
});