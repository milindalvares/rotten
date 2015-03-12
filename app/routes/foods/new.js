import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('food');
  },
  deactivate: function() {
    var model = this.modelFor('foods/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }

});
