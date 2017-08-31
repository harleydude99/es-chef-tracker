import Ember from 'ember';

export default Ember.Controller.extend({
  moniker: 'chef',
  newChef: null,
  chefLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isCookingToday', true),
  actions:{
    toggleEnterExit(cook){
      Ember.set(cook, 'isCookingToday', !Ember.get(cook, 'isCookingToday'));
      cook.save();
    },
    saveNewChef(){
      this.store.createRecord('chef', {
        isAvailable: false,
        name: this.get('newChef'),
        numOfStudents: 0
      }).save()
      this.set('newChef', '')
    },
    fireChef(chef){
      chef.destroyRecord()
    },
    lowerStudentCount(cook){
      Ember.set(cook, 'numOfStudents', Ember.get(cook, 'numOfStudents')-1);
      cook.save();
    },
    increaseStudentCount(cook){
      Ember.set(cook, 'numOfStudents', Ember.get(cook, 'numOfStudents')+1);
      cook.save();
    }
  }
});
