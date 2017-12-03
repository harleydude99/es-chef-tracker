import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    fireChef(chef){
      chef.destroyRecord();
      this.transitionToRoute('chefs');
    }
  }
});
