import Ember from 'ember';

export default Ember.Controller.extend({
  moniker: 'chef',
  cooks: [
    {name: 'Gordon Ramsay', isCookingToday: true},
    {name: 'Anthony Bourdain', isCookingToday: false},
    {name: 'Rachael Ray', isCookingToday: true},
    {name: 'Jamie Oliver', isCookingToday: false},
    {name: 'Guy Fieri', isCookingToday: true}
  ],
  actions:{
    toggleEnterExit(cook){
      Ember.set(cook, 'isCookingToday', !cook.isCookingToday);
    }
  }
});
