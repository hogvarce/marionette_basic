import Marionette from 'backbone.marionette';
import CommentList from '../collections/comment';

const Comment = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('../templates/blog/comment.html')
});

const CommentListView = Marionette.CollectionView.extend({
  tagName: 'ol',
  childView: Comment
});

const Blog = Marionette.LayoutView.extend({
  template: require('../templates/blog/blog.html'),

  regions: {
    comments: '.comment-hook'
  },

  ui: {
    back: '.back'
  },

  triggers: {
    'click @ui.back': 'show:blog:list'
  },

  onShow: function() {
    let comments = new CommentList(this.model.get('comments'));
    let commentView = new CommentListView({collection: comments});

    this.showChildView('comments', commentView);
  }
});

export default Blog;
