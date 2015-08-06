NewsReader.Views.EntryListItem = Backbone.View.extend({
  template: JST['entry_list_item'],

  tagName: "li",

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var entryListItemContent = this.template({ entry: this.model });
    this.$el.html(entryListItemContent);
    return this;
  }
});
