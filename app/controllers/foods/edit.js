import Ember from 'ember';

export default Ember.Controller.extend({
  date: '',
  isValid: Ember.computed(
    'model.quantity',
    'model.name',
    'model.expiration',
    function() {
      return !Ember.isEmpty(this.get('model.expiration')) && !Ember.isEmpty(this.get('model.name')) && !Ember.isEmpty(this.get('model.quantity'));
    } ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var newDate = new Date(this.get('date'));
        this.set('model.expiration', newDate);
        this.get('model').save();
        this.transitionToRoute('foods.index');
      } else {
        this.set('model.errorMessage', 'You have to fill all the fields');
      }
    },
    cancel: function() {
      this.transitionToRoute('foods');
    }
  }
});
