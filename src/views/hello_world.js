import Marionette from 'backbone.marionette';

const HelloWorld = Marionette.LayoutView.extend({
  el: '#main',
  template: require('../templates/hello_world.html')
});

export default HelloWorld;
