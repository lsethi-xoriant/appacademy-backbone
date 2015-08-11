TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: "/api/cards",

  model: TrelloClone.Models.Card,

  getOrFetch: function (id) {
    var card = this.get(id);
    if (card) {
      card.fetch();
    } else {
      card = new TrelloClone.Models.Card({ id: id });
      this.add(card);
      card.fetch({
        error: function () {
          this.remove(card);
        }.bind(this)
      });
    }

    return card;
  }
});
