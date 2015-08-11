TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST["list_show"],

  className: "list",

  events: {
    "click .add": "appendCard"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.model.cards().each(function (card) {this.addCard(card)}.bind(this));
  },

  addCard: function (card) {
    var cardView = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview(".cards", cardView);
  },

  appendCard: function (event) {

  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
