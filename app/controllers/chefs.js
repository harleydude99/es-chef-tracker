import Ember from 'ember';

export default Ember.Controller.extend({
  moniker: 'chef',
  newChef: null,
  chefLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isCookingToday', true),
  numOfStudentsArray: Ember.computed.mapBy('model', 'numOfStudents'),
  totalStudents: Ember.computed.sum('numOfStudentsArray'),
  //ALTERNATIVE USING Arrays.forEach
  /*
  totalStudents: Ember.computed('model@each.numOfStudents', function(){
    let chefs = this.get('model');
    let totalStudents = 0;
    chefs.forEach((chef)=>{
      totalStudents = totalStudents + chef.get('numOfStudents');
    })
    return totalStudents;
  }),
  */
  actions:{
    toggleEnterExit(cook){
      Ember.set(cook, 'isCookingToday', !Ember.get(cook, 'isCookingToday'));
      //could also do
      //cook.set('isCookingToday', !cook.get('isCookingToday'));
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
    lowerStudentCount(cook){
      //Ember.set(cook, 'numOfStudents', Ember.get(cook, 'numOfStudents')-1);
      cook.decrementProperty('numOfStudents');
      cook.save();
    },
    increaseStudentCount(cook){
      //Ember.set(cook, 'numOfStudents', Ember.get(cook, 'numOfStudents')+1);
      Ember.incrementProperty('numOfStudents');
      cook.save();
    }

  }
});
