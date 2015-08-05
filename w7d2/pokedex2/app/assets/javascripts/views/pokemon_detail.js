Pokedex.Views.PokemonDetail = Backbone.View.extend({
  template: JST['pokemonDetail'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click li": "selectToyFromList"
  },

  selectToyFromList: function(event) {

    var id = $(event.currentTarget).data("toy-id");
    var pokeId = $(event.currentTarget).data("pokemon-id");
    var toy = this.model.toys().get(id);

    Backbone.history.navigate("pokemon/" + pokeId + "/toys/" + id, {trigger: true});
  },

  render: function () {
    var content = this.template({ pokemon: this.model });

    this.$el.html(content);

    var $ul = this.$el.find("ul.toys");

    this.model.toys().each(function(toy){
      $ul.append(JST['toyListItem']({ toy: toy }));
    });

    return this;
  }
});
