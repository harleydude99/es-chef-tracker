import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      let cook = this.get('model.chef');
      if(!cook.data.hasCulinaryDegree){
        Ember.set(cook, 'culinarySchoolAttended', '');
      }
      //Ember.set(cook, 'culinarySchoolAttended', !Ember.get(cook, 'isCookingToday'));
      //this.get('model').save();
      cook.save();
      this.transitionToRoute('chefs.chef', this.get('model.chef.id'));
    },
    selectRestaurant(selection, component){
  		//selection is the NEW selection
  		//old is still in the chef
  		let chef = this.get('model.chef');
  		chef.get('restaurant').then((restaurant)=>{
  			chef.set('restaurant', selection);
  			selection.save();//save new
  			restaurant.save();//save old as well
  		});
	  }
  }
});
