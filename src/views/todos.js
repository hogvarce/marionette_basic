import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

const TodoList = Marionette.LayoutView.extend({
    el: '#main',
    template: require('../templates/todos.html')
});

export default TodoList;
