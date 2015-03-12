import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var model = this.modelFor('foods/edit');

    if (model.get('isDirty')) {
      model.rollback();
    }
  },
  resetController: function (controller, isExiting) {
    if (isExiting) {
      controller.set('date', null);
    }
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    var date = controller.get('model.expiration').toISOString().slice(0,10);
    controller.set('date', date);
  }
});
