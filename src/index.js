import Marionette from 'backbone.marionette';
import Router from './router';

let initialData = {
  posts: [
    {
      author: 'Scott',
      title: 'Why Marionette is amazing',
      content: '...',
      id: 42,
      comments: [
        {
          author: 'Steve',
          content: '...',
          id: 56
        }
      ]
    },
    {
      author: 'Andrew',
      title: 'How to use Routers',
      content: '...',
      id: 17
    }
  ]
};

let App = new Marionette.Application({
  onStart: function(options) {
    let router = new Router(options);

    /** Starts the URL handling framework */
    Backbone.history.start();
  }
});

App.start({initialData: initialData});
