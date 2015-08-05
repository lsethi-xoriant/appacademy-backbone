Pokedex.Routers.Router = Backbone.Router.extend ({
  routes: {
    "": "pokemonIndex",
    "pokemon/:id": "pokemonDetail"
  },

  pokemonIndex: function () {
    var index = new Pokedex.Views.PokemonIndex();
    index.refreshPokemon();
    $('#pokedex .pokemon-list').html(index.$el);
    this._pokemonIndex = index;
  },

  pokemonDetail: function (id) {
    var poke = new Pokedex.Models.Pokemon({id: id});
    poke.fetch();
    var detail = new Pokedex.Views.PokemonDetail({ model: poke });
    $('#pokedex .pokemon-detail').html(detail.render().$el);
  }
});
