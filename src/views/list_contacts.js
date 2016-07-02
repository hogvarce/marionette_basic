import Marionette from 'backbone.marionette';

const Contact = Marionette.LayoutView.extend({
    tagName: 'li',
    className: 'list-group-item clearfix',
    template: require('../templates/list_contacts.html')
  });

const ContactList = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'list-group',
    childView: Contact
  });

export default ContactList;
