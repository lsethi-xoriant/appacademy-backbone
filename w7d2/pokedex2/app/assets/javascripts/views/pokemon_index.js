Pokedex.Views.PokemonIndex = Backbone.View.extend({
  events: {
    "click li": "selectPokemonFromList"
  },

  initialize: function() {
    this.collection = new Pokedex.Collections.Pokemon();
    this.listenTo(this.collection, "sync add", this.render);
  },

  addPokemonToList: function (pokemon) {
    var content = JST['pokemonListItem']({ pokemon: pokemon });

    this.$el.append(content);
  },

  render: function() {
    this.$el.empty();
    this.collection.each(this.addPokemonToList.bind(this));
  },

  refreshPokemon: function(callback) {
    this.collection.fetch({
      success: function() {
        if (callback) { callback(); }
      }
    });
  },

  selectPokemonFromList: function(event) {
    event.preventDefault();
    var $li = $(event.currentTarget);
    var id = $li.data("id");
    Backbone.history.navigate("pokemon/" + id, {trigger: true});
  }
});
