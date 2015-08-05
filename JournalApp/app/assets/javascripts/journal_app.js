window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.PostsRouter($('#root'));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
