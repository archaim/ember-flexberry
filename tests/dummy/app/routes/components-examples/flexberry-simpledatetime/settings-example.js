import Ember from 'ember';

export default Ember.Route.extend({
  /**
    Returns model related to current route.

    @method model
   */
  /* eslint-disable no-unused-vars */
  model(params) {
    var store = this.get('store');

    var base = store.createRecord('components-examples/flexberry-simpledatetime/settings-example/base', {});

    return base;
  }
  /* eslint-enable no-unused-vars */
});