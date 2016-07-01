import Marionette from 'backbone.marionette';

const Row = Marionette.LayoutView.extend({
    tagName: 'tr',
    template: require('../templates/row.html')
});

const Table = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: require('../templates/table.html'),
    childView: Row,
    childViewContainer: 'tbody'
});

export default Table;
