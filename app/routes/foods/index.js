import Ember from 'ember';

export default Ember.Route.extend({
  // queryParams: {
  //   sortBy: {
  //     refreshModel: true
  //   },
  //   sortAscending: {
  //     refreshModel: true
  //   }
  // },
  model: function() {
    // console.log(params);
    return this.store.findAll('food');
  }});
