JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['post_form'],
  tagName: 'form',

  events: {
    'click button': 'submitForm'
  },

  initialize: function (options) {
    this.caption = options.caption;
    this.listenTo(this.model, "sync", this.render);
  },

  submitForm: function(event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    var that = this;
    this.model.save(formData, {
      success: function(){
        that.collection.add(that.model);
        Backbone.history.navigate(that.model.url(), {trigger: true});
      },

      error: function(model, response, options) {
        var errors = response.responseText;
        that.render();
        that.$el.prepend($("<p>").html(errors));
      }
    });
  },

  render: function () {
    var content = this.template({
      caption: this.caption,
      post: this.model
    });

    this.$el.html(content);
    return this;
  }
});
