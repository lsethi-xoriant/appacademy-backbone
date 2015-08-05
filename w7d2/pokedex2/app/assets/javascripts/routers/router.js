Pokedex.Routers.Router = Backbone.Router.extend ({
  routes: {
    "": "pokemonIndex",
    "pokemon/:id": "pokemonDetail"
  },

  pokemonIndex: function (callback) {
    var index = new Pokedex.Views.PokemonIndex();
    index.refreshPokemon(callback);
    $('#pokedex .pokemon-list').html(index.$el);
    this._pokemonIndex = index;
  },

  pokemonDetail: function (id, callback) {
    if (!this._pokemonIndex) {
      this.pokemonIndex(this.pokemonDetail.bind(this, id, callback));
      return;
    }
    var poke = new Pokedex.Models.Pokemon({id: id});
    poke.fetch();
    var detail = new Pokedex.Views.PokemonDetail({ model: poke });
    $('#pokedex .pokemon-detail').html(detail.render().$el);
  }
});
