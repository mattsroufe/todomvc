import DS from 'ember-data';
import config from '../config/environment';
import { resolve } from 'rsvp';

export default DS.Model.extend({
  title: DS.attr(),
  completed: DS.attr(),
  save: function() {
    const todos = this.store.peekAll('todo').map((todo) => {
      return todo.getProperties('id', 'title', 'completed');
    });
    window.localStorage.setItem(config.APP.localStorage, JSON.stringify(todos));
    return resolve(this);
  },
});
