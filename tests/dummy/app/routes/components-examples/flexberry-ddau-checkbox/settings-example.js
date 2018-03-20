import Ember from 'ember';

export default Ember.Route.extend({
  /**
    Returns model related to current route.

    @method model
  */
  /* eslint-disable no-unused-vars */
  model(params) {
    return this.get('store').createRecord('components-examples/flexberry-ddau-checkbox/settings-example/base', {
    });
  }
  /* eslint-enable no-unused-vars */
});
