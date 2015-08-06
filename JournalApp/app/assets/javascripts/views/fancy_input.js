JournalApp.Views.FancyInput = Backbone.View.extend({
  template: JST['fancy_input'],

  events: {
    "dblclick .fancy": "editMode",
    "blur .fancy": "showMode"
  },

  initialize: function (options) {
    this.propertyName = options.propertyName;
    this.oldText = this.model.get(this.propertyName)
    this.tagType = options.tagType;
    this.inputType = options.inputType;
    this.editing = false;
  },

  editMode: function () {
    var newEl = $('<' + this.inputType + ' class="fancy">');
    this.$el.empty();

    if (this.inputType === 'input') {
      newEl.attr("type", "text");
      newEl.attr("value", this.currentText());
    } else {
      // textarea
      newEl.text(this.currentText());
    }

    this.$el.append(newEl);
  },

  currentText: function () {
    return this.model.escape(this.propertyName);
  },

  widgetText: function () {
    if (this.inputType === "textarea") {
      return this.$(".fancy").text();
    } else {
      return this.$(".fancy").val();
    }
  },

  showMode: function () {
    var that = this;
    var data = {};
    data[this.propertyName] = this.widgetText();

    this.model.save(data, {

      error: function () {
        that.render();
        this.$('.fancy').text(this.oldText);
      }.bind(this)

      //   var el = that.$(".fancy");
      //   if (that.inputType === 'input') {
      //     el.attr("value", oldText);
      //   } else {
      //     el.text(oldText);
      //   }
      // }
    });
  },

  render: function () {
    var newEl = $('<'+ this.tagType +' class="fancy">');
    newEl.text(this.currentText());
    this.$el.html(newEl);
    return this;
  }
});
