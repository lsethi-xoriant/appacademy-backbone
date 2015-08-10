TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "/api/boards/:board_id/lists",

  model: TrelloClone.Models.List,

  getOrFetch: function (id) {
    var list = this.get(id);
    if (list) {
      list.fetch()
    } else {
      list = new TrelloClone.Models.List({ id: id });
      this.add(list);
      list.fetch({
        error: function () {
          this.remove(list);
        }.bind(this)
      });
    }

    return list;
  }
});
