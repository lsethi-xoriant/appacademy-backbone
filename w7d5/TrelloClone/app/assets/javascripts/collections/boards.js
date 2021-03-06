TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",

  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    var board = this.get(id);
    if (!board) {
      board = new TrelloClone.Models.Board({ id: id });
      this.add(board);
      board.fetch({
        error: function() {
          this.remove(board);
        }.bind(this)
      });
    } else {
      board.fetch();
    }
    return board;
  }

  // getOrFetch: function (id) {
  //   var collection = this;
  //   var widget = collection.get(id);
  //
  //   if (widget) {
  //     widget.fetch();
  //   } else {
  //     widget = new collection.model({ id: id });
  //     collection.add(widget);
  //     widget.fetch({
  //       error: function () { collection.remove(widget); }
  //     });
  //   }
  //
  //   return widget;
  // }
});
