import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    save(){
      this.get('model').save();
      this.transitionToRoute('restaurants.restaurant', this.get('model.id'));
    }
  }
});
