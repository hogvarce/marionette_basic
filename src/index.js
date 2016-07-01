require('bootstrap');

import $ from 'jQuery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import TodoView  from './views/layout';
import ToDoModel from './models/todo';

let initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
];

const app = new Marionette.Application({
  onStart: function(options) {
    let todo = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      model: new ToDoModel()
    });
    todo.render();
    todo.triggerMethod('show');
  }
});

app.start({initialData: initialData});
