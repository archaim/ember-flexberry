import { executeTest } from './execute-folv-test';

executeTest('check lock edit form', (store, assert, app) => {
  assert.expect(1);
  const path = 'components-acceptance-tests/flexberry-objectlistview/folv-paging';
  visit(path);
  andThen(() => {
    assert.equal(currentPath(), path);

    const model = 'ember-flexberry-dummy-suggestion-type';
    const prop = 'name';
    checkLockEditForm('[data-test-olv]', null, assert, store, model, prop, path);
  });
});
