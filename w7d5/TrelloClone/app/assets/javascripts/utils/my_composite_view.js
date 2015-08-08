
Backbone.MyCompositeView = Backbone.View.extend({
  addSubview: function (selctor, subview) {
    //First, we want to add this subview to our this._subviews[selctor]
    this.subviews(selctor).push(subview);
    //Next, we want to render the subview, so that it actually contains content
    //and then attach that content to an element in the DOM.
    this.attachSubview(selector, subview.render())
  },

  attachSubview: function (selector, subview) {
    //This should append the content from the subview's $el to the selector.
    this.$(selector).append(subview.$el);
    //Next, we want to call delegateEvents so that
    subview.delegateEvents();

    //Lastly, if the subview is itself a subview, we want to attach all of its
    //subviews recursively. We can do this by checking to see if it has an
    //attachSubview method.
    if (subview.attachSubviews) {
      subview.attachSubviews();
    }
  },

  attachSubviews: function () {
    //This function is meant to take all of this view's subviews and insert their
    //content in to the appropriate places on the page. We want to go through all
    //subviews, empty out the $el, then attach subview
    var view = this;
    this.subviews().each(function (selectorSubviews, selector) {
      view.$(selector).empty();
      selectorSubviews.each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  remove: function () {
    //First we want to remove this (parent) view using Backbone.View.Prototype
    Backbone.View.prototype.remove.call(this);

    //Now we want to loop through each of the subviews and remove those!
    //Note that if any of those is also a compositeview, this will be recursively
    //called on those, removing any and all subviews of this current view.
    this.subviews().each(function (subviews, selector) {
      subviews.each(function (subview) {
        subview.remove();
      })
    });
  },

  removeSubview: function (selector, subview) {
    //We first start by removing the subview
    subview.remove();

    //next, we want to make sure that re remove it from this._subviews so that
    //it doesn't appear next time we refresh/navigate;
    var subviews = this.subviews(selector);
    subviews.splice(indexOf(subview), 1);
  },

  subviews: function(selector){
    // Defines the subviews of this view if they are not already.
    this._subviews = this._subviews || {};
    // If a selector has been provided, return the corresponding subviews or an
    // empty array. If there is no selector, return all subviews
    if (selector) {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    } else {
      return this._subviews;
    }
  }
});
