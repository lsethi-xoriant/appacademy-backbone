TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: "/api/boards/:board_id/lists/:list_id/cards"
});
