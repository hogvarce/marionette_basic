import Marionette from 'backbone.marionette';

const Entry = Marionette.LayoutView.extend({
  template: require('../templates/blog/item.html'),
  tagName: 'li',

  triggers: {
    click: 'select:entry'
  }
});

const BlogList = Marionette.CollectionView.extend({
  childView: Entry,
  tagName: 'ul',

  onChildviewSelectEntry: function(child, options) {
    this.triggerMethod('select:entry', child.model);
  }
});

export default BlogList;
