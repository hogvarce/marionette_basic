import Marionette from 'backbone.marionette';
import FormView from './form';
import ListView from './list';


const Layout = Marionette.LayoutView.extend({
  el: '#main',

  template: require('../templates/layout.html'),

  regions: {
    form: '.form',
    list: '.list'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onShow: function() {
    let formView = new FormView({model: this.model});
    let listView = new ListView({collection: this.collection});


    this.showChildView('form', formView);
    this.showChildView('list', listView);
  },

  onChildviewAddTodoItem: function(child) {
    this.model.set({
      assignee: child.ui.assignee.val(),
      text: child.ui.text.val()
    }, {validate: true});
    if (!this.model.isValid()) {
        return;
    }
    let items = this.model.pick('assignee', 'text');
    this.collection.add(items);
  },

  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: '',
      errors: {}
    });
  }
});

export default Layout;
