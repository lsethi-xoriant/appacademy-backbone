NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/api/feeds",
  entries: function() {
    return new NewsReader.Collections.Entries( {feed:this} );
  }
})
