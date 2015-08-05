Pokedex.Routers.Router = Backbone.Router.extend ({
  routes: {
    "": "pokemonIndex",
    "pokemon/:id": "pokemonDetail",
    "pokemon/:pokemonId/toys/:toyId": "toyDetail"
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

    this._pokemonDetail = detail;
  },

  toyDetail: function (pokemonId, toyId) {
    if (this._pokemonDetail === undefined) {
      this.pokemonDetail(pokemonId, this.toyDetail.bind(this, pokemonId, toyId));
      return;
    }
    var toy = this._pokemonDetail.model.toys().get(toyId);
    var toyDetail = new Pokedex.Views.ToyDetail({ model: toy });
    $('#pokedex .toy-detail').html(toyDetail.render().$el);
  }
});
