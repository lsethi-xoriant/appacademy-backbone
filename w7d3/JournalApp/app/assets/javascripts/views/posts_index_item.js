JournalApp.Views.PostsIndexItems = Backbone.View.extend({

  events: {
    'click .delete-btn': 'delete'
  },

  tagName: "li",
  template: JST["posts_index_item"],

  delete: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
    Backbone.history.navigate('', {trigger: true});
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }
});
