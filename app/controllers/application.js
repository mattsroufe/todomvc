import Controller from '@ember/controller';
import { isBlank } from '@ember/utils';

export default Controller.extend({
  actions: {
    addTodo(e) {
      if (e.keyCode === 13 && !isBlank(e.target.value)) {
        const todo = this.store.createRecord('todo', {
          type: 'todo',
          title: e.target.value.trim(),
          completed: false
        });
        todo.save();
        e.target.value = '';
      }
    },

    clearCompleted() {
    }
  }
});
