JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts_index'],

  initialize: function () {
    this.listenTo(this.collection, 'add remove reset sync', this.render);
    this.$ul = $("<ul>");
  },

  render: function () {
    var content = this.template({ posts: this.collection });
    this.$el.html(content);

    var view = this;
    this.$ul.empty();

    this.collection.each(function (post) {
      var item = new JournalApp.Views.PostsIndexItems({ model: post });
      view.$ul.append(item.render().$el);
    });

    this.$el.prepend(this.$ul);
    return this;
  }
});
