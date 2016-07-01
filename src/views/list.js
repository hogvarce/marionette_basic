import Marionette from 'backbone.marionette';

const ToDo = Marionette.LayoutView.extend({
    className: 'list-group-item',
    tagName: 'li',
    template: require('../templates/todoitem.html')
});

const TodoList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ToDo
});

export default TodoList;
