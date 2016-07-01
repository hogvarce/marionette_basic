import Marionette from 'backbone.marionette';
import FormView from './form';
import ListView from './list';
import TableView from './table';


const Layout = Marionette.LayoutView.extend({
  el: '#main',

  template: require('../templates/layout.html'),

  regions: {
    form: '.form',
    list: '.list',
    table: '.table'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onShow: function() {
    let formView = new FormView({model: this.model});
    let listView = new ListView({collection: this.collection});
    let tableView = new TableView({
        collection: this.options.table,
        model: new Backbone.Model({
          total: this.options.table.length
        })
    });

    this.showChildView('form', formView);
    this.showChildView('list', listView);
    this.showChildView('table', tableView);
  },

  onChildviewAddTodoItem: function(child) {
    this.model.set({
      assignee: child.ui.assignee.val(),
      text: child.ui.text.val()
    }, {validate: true});
    if (!this.model.isValid()) {
        this.model.trigger('change');
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
