import Marionette from 'backbone.marionette';
import FormView from './form';
import ListView from './list';
import TableView from './table';
import ContactsView from './list_contacts';

const Layout = Marionette.LayoutView.extend({
  el: '#main',

  template: require('../templates/layout.html'),

  regions: {
    form: '.form',
    list: '.list',
    table: '.table',
    contacts: '.contacts'
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
    let contactsView = new ContactsView({
        collection: this.options.contacts
      });

    this.showChildView('form', formView);
    this.showChildView('list', listView);
    this.showChildView('table', tableView);
    this.showChildView('contacts', contactsView);
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
    this.model.clear();
  }
});

export default Layout;
