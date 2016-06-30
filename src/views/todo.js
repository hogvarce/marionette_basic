import Marionette from 'backbone.marionette';

const ToDo = Marionette.LayoutView.extend({
    className: 'list-group-item',
    tagName: 'li',
    template: require('../templates/todoitem.html')
});

export default ToDo;
