import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return formatDate(date);
});
