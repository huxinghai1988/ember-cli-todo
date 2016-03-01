import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  name: attr(),
  price: attr('number', {defaultValue: 0}),
  amount: attr('number', {defaultValue: 0})
});
