import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(food) {
      food.destroyRecord();
    }
  }
});
