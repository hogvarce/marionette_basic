require('bootstrap');

import $ from 'jQuery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import TodoView  from './views/layout';
import ToDoModel from './models/todo';
import Table from './views/table';

let initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
];

let tableData = [
    {name: 'John Smith', gender: 'male', nationality: 'UK', url: '/items/1'},
    {name: 'Jane Doe', gender: 'female', nationality: 'USA', url: '/items/4'}
];

const app = new Marionette.Application({
  onStart: function(options) {
    let todo = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      table: new Backbone.Collection(options.tableData),
      model: new ToDoModel()
    });

    todo.render();
    todo.triggerMethod('show');
  }
});

app.start({
    initialData: initialData,
    tableData: tableData
});
