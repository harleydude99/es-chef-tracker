import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCookingToday: DS.attr('boolean'),
  hasCulinaryDegree: DS.attr('boolean'),
  culinarySchoolAttended: DS.attr('string'),
  numOfStudents: DS.attr('number', {defaultValue: 0}),
  description: DS.attr('string'),
  imageUrl: DS.attr('string')
});
