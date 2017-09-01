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
      //Ember.set(cook, 'numOfStudents', Ember.get(cook, 'numOfStudents')-1);
      chef.decrementProperty('numOfStudents');
      cook.save();
    },
    increaseStudentCount(cook){
      //Ember.set(cook, 'numOfStudents', Ember.get(cook, 'numOfStudents')+1);
      Ember.incrementProperty('numOfStudents');
      cook.save();
    },
    modifyStudentCount(cook, operation){
      let currentVal = Ember.get(cook, 'numOfStudents');
      let newVal = 0
      if(operation === 'add'){
        newVal = currentVal+1;
      }else{
        if(currentVal > 0){
          newVal = currentVal-1;
        }
      }
      Ember.set(cook, 'numOfStudents', newVal);
      cook.save();
    }
  }
});
