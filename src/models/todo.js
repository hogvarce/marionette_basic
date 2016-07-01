import Backbone from 'backbone';

const ToDoModel = Backbone.Model.extend({
  defaults: {
    assignee: '',
    text: ''
  },
  events: {
    "validated:invalid": "invalid"
  },
  invalid: function(){
      console.log('asd');
  },
  validate: function(attrs) {
     let errors = {};
    var hasError = false;
    if (!attrs.assignee) {
      errors.assignee = 'assignee must be set';
      hasError = true;
    }
    if (!attrs.text) {
      errors.text = 'text must be set';
      hasError = true;
    }

    if (hasError) {
      return errors;
    }
  }
});

export default ToDoModel;
