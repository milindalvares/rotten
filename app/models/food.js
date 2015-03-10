import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  expiration: DS.attr('date'),
  quantity: DS.attr('number')
});
