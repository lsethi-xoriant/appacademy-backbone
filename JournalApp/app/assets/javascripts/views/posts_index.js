JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['postsIndex'],

  tagName: "ul",

  initialize: function () {
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function () {
    var content = this.template({ posts: this.collection });
    this.$el.html(content);

    var view = this;

    this.collection.each(function (post) {
      var item = new JournalApp.Views.PostsIndexItems({ model: post });
      view.$el.append(item.render().$el);
    });

    return this;
  }
});
