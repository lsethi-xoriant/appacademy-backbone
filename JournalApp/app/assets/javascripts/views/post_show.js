JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['post_show'],

  events: {
    'click .delete-btn': 'delete'
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  delete: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
    Backbone.history.navigate('', {trigger: true});
  }
});
