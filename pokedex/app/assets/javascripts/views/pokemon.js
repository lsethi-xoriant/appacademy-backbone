Pokedex.Views.Pokemon = Backbone.View.extend({
  initialize: function () {
    this.$pokeList = this.$el.find('.pokemon-list');
    this.$pokeDetail = this.$el.find('.pokemon-detail');
    this.$newPoke = this.$el.find('.new-pokemon');
    this.$toyDetail = this.$el.find('.toy-detail');
    this.pokemon = new Pokedex.Collections.Pokemon();
    this.$pokeList.on("click", "li.poke-list-item", this.selectPokemonFromList.bind(this));
    this.$newPoke.on("submit", this.submitPokemonForm.bind(this));
  },

  addPokemonToList: function (pokemon) {
    var $li = $("<li class='poke-list-item'>")
      .text(pokemon.escape("name") + ", " + pokemon.escape("poke_type"));
    $li.data("id", pokemon.id);
    this.$pokeList.append($li);
  },

  refreshPokemon: function () {
    var that = this;
    this.pokemon.fetch({
      success: function (collection) {
        that.pokemon.forEach(that.addPokemonToList.bind(that));
      }
    })
  },

  renderPokemonDetail: function (pokemon) {
    var $detail = $("<div class='detail'>");
    var $img = $("<img>").attr("src", pokemon.escape("image_url"));
    $detail.append($img);
    var $attrUl = $("<ul>");
     _.each(pokemon.attributes, function (value, attr) {
      if (_.contains(["image_url"], attr)) { return; }
      var $li = $("<li>").text(attr + ": " + value);
      $attrUl.append($li);
    });

    $detail.append($attrUl);
    this.$pokeDetail.html($detail);
    this.$pokeDetail.append($("<ul class='toys'>"));

    var that = this;
    pokemon.fetch({
      success: function (fetchedPokemon) {
        _.each(fetchedPokemon.toys().models, function (toy) {
          that.addToyToList(toy);
        });
      }
    })
  },

  addToyToList: function (toy) {
    $li = $("<li class='toy-list-item'>");
    $li.text("Name: " + toy.escape("name") + ", " +
              "Happiness: " + toy.escape("happiness") + ", " +
              "Price: " + toy.escape("price"));
    $li.data("toy-id", toy.id).data("pokemon-id",toy.escape("pokemon_id"));
    $li.on("click", this.selectToyFromList.bind(this));
    this.$pokeDetail.find("ul.toys").append($li);
  },

  renderToyDetail: function (toy) {
    var $div = $("<div class='detail'>");
    var $img = $("<img>").attr("src", toy.escape("image_url"));
    $div.append($img);
    var $ul = $("<ul>");
    _.each(toy.attributes, function (value, attr) {
      if (_.contains(["image_url"], attr)) { return; }
      var $li = $("<li>").text(attr + ": " + value);
      $ul.append($li);
    });
    $div.append($ul);
    this.$toyDetail.html($div);

    var $select = $("<select>");
    $select.data("pokemon-id", toy.escape("pokemon_id")).data("id",toy.id);
    _.each(this.pokemon.models, function (pokemon) {
      var $option;
      if (pokemon.id == $select.data("pokemon-id")) {
        $option = $("<option selected>");
      } else {
        $option = $("<option>");
      }
      $option.val(pokemon.id).html(pokemon.get("name"));
      $select.append($option);
    });

    $select.change(this.reassignToy.bind(this));
    this.$toyDetail.append($select);
  },

  selectToyFromList: function (event) {
  var id = $(event.currentTarget).data("toy-id");
  var pokemonId = $(event.currentTarget).data("pokemon-id");
  var owner = this.pokemon.get(pokemonId);
  var selectedToy = owner.toys().get(id);
  this.renderToyDetail(selectedToy);
  },

  reassignToy: function (event) {
    var oldPokeId = $(event.currentTarget).data("pokemon-id")
    var newPokeId = $(event.currentTarget).val();
    var toyId = $(event.currentTarget).data("id")
    var owner = this.pokemon.get(oldPokeId);
    var toy = owner.toys().get(toyId);
    toy.set("pokemon_id", newPokeId);
    var that = this;

    toy.save({patch: true}, {
      success: function () {
        // delete owner.toys().get(toyId);
        that.renderPokemonDetail(owner);
        that.$toyDetail.empty();
      }
    });
  },

  selectPokemonFromList: function (event) {
    var id = $(event.currentTarget).data("id");
    var selectedPokemon = this.pokemon.get(id);
    this.renderPokemonDetail(selectedPokemon);
  },

  createPokemon: function (attributes, callback) {
    var newPokemon = new Pokedex.Models.Pokemon();
    var that = this;
    newPokemon.save(attributes, {
      success: function (model) {
        that.pokemon.add(model);
        that.addPokemonToList(model);
        that.$newPoke.find("input").val("");
        callback(model);
      }
    });
  },

  submitPokemonForm: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    this.createPokemon(
      $target.serializeJSON().pokemon,
      this.renderPokemonDetail.bind(this)
    );
  }
});
