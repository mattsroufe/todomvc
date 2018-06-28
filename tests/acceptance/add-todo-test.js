import config from '../../config/environment';
import { module, test } from 'qunit';
import { visit, fillIn, triggerKeyEvent, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | add todo', function(hooks) {
  setupApplicationTest(hooks);

  hooks.before(function() {
    window.localStorage.setItem(config.APP.localStorage, '[]');
  });

  test('it saves a valid todo', async function(assert) {
    await visit('/');
    await fillIn('input#new-todo', 'foobar');
    await triggerKeyEvent('input#new-todo', 'keydown', 13)
    assert.equal(find('.todo-list li:first-child').textContent.trim(), 'foobar');
  });

  test('it still exists after refresh', async function(assert) {
    await visit('/');
    assert.equal(find('.todo-list li:first-child').textContent.trim(), 'foobar');
  });
});
