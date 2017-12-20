import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      let cook = this.get('model');
      console.log(cook.data);
      if(!cook.data.hasCulinaryDegree){
        Ember.set(cook, 'culinarySchoolAttended', '');
      }
      //Ember.set(cook, 'culinarySchoolAttended', !Ember.get(cook, 'isCookingToday'));
      //this.get('model').save();
      cook.save();
      this.transitionToRoute('chefs.chef', this.get('model.id'));
    }
  }
});
