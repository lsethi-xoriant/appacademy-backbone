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
    var toy = this.model.toys().get(id);
    var toyDetailView = new Pokedex.Views.ToyDetail({ model: toy });
    $("#pokedex .toy-detail").hmtl(toyDetailView.render().$el);
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
