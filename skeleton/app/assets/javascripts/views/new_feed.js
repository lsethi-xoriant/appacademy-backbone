NewsReader.Views.FeedNew = Backbone.View.extend({
  template: JST["new_feed"],

  tagName: "form",

  events: {
    "submit": "submit"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var feed = new NewsReader.Models.Feed();
    feed.save(formData.feed, {
      success: function () {
        this.collection.add(feed);
      }.bind(this)
    });
  }
})
