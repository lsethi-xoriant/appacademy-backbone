JournalApp.Views.PostsIndexItems = Backbone.View.extend({

  events: {
    'click .delete-btn': 'delete'
  },

  tagName: "li",
  template: JST["posts_index_item"],

  delete: function () {
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }
});
