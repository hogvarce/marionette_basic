require('bootstrap');

import $ from 'jQuery';
import Backbone from 'backbone';
import TodoList from './views/todoList';
import ToDoModel from './models/todo';

var todo = new TodoList({
    collection: new Backbone.Collection([
        {assignee: 'Scott', text: 'Write a book about Marionette'},
        {assignee: 'Andrew', text: 'Do some coding'}
    ]),
    model: new ToDoModel()
});

todo.render();
