import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleEnterExit(cook){
      Ember.set(cook, 'isCookingToday', !Ember.get(cook, 'isCookingToday'));
      //could also do
      //cook.set('isCookingToday', !cook.get('isCookingToday'));
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
    },
    toggleOpen(){
      this.set('isOpen', !this.get('isOpen'));
      //could also
      //this.toggleProperty('isOpen');
    }
  }
});
