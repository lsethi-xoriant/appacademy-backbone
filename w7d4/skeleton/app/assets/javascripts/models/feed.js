NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/api/feeds",
  entries: function() {
    this._entries = this._entries || new NewsReader.Collections.Entries( [], {feed:this} );
    return this._entries;
  },

  parse: function(payload) {
    this.entries().set(payload.latest_entries);
    delete payload.latest_entries;
    return payload;
  }
})
