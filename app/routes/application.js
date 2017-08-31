import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('chef')
    /*
    return [
      {name: 'Gordon Ramsay', isCookingToday: true},
      {name: 'Anthony Bourdain', isCookingToday: false},
      {name: 'Rachael Ray', isCookingToday: true},
      {name: 'Jamie Oliver', isCookingToday: false},
      {name: 'Guy Fieri', isCookingToday: true}
    ]
    */
  }
});
