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
    var titleView = new JournalApp.Views.FancyInput({
      model: this.model,
      tagType: "h3",
      inputType: "input",
      propertyName: "title"
    });

    var bodyView = new JournalApp.Views.FancyInput({
      model: this.model,
      tagType: "p",
      inputType: "textarea",
      propertyName: "body"
    });

    this.$el.empty();
    this.$el.append(titleView.render().$el);
    this.$el.append(bodyView.render().$el);
    
    return this;
  },

  delete: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
    Backbone.history.navigate('', {trigger: true});
  }
});
