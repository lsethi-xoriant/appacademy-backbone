TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST["board_new"],

  tagName: "form",

  events: {
    "submit": "submit"
  },

  className: "new-form",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var board = new TrelloClone.Models.Board();
    
    board.save(formData, {
      success: function () {
        this.collection.add(board);
        Backbone.history.navigate("", {trigger: true});
      }.bind(this)
    })
  }
});
