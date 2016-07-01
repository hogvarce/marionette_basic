import Marionette from 'backbone.marionette';
import ToDo from './todo';

const TodoList = Marionette.CompositeView.extend({
     el: '#main',
     template: require('../templates/todolist.html'),

     childView: ToDo,
     childViewContainer: 'ul',

     ui: {
       assignee: '#id_assignee',
       form: 'form',
       text: '#id_text'
     },

     triggers: {
       'submit @ui.form': 'add:todo:item'
     },

     collectionEvents: {
       add: 'itemAdded'
     },

     modelEvents: {
       change: 'render'
     },

     onAddTodoItem: function(item) {
       this.model.set({
         assignee: this.ui.assignee.val(),
         text: this.ui.text.val()
       }, {validate: true});

       let items = this.model.pick('assignee', 'text');
       this.collection.add(items);
     },

     itemAdded: function() {
       this.model.set({
         assignee: '',
         text: ''
       });
     }
});

export default TodoList;
