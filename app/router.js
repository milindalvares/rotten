import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('foods', function(){
    this.route('new');

    this.route('edit', {
      path: ':food_id/edit'
    });
  });
});

export default Router;
