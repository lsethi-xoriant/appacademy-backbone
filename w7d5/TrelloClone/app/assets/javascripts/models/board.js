TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists();
    }

    return this._lists
  },

  cards: function () {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards();
    }

    return this._cards;
  },

  parse: function (payload) {
    // if (payload.lists.cards) {
    //   this.cards().set(payload.lists.cards);
    //   delete payload.lists.cards;
    // }

    if (payload.lists) {
      this.lists().set(payload.lists);
      delete payload.lists;
    }

    return payload;
  }
});
