import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('chefs', function(){
    this.route('chef', {path: ':chef_id'}, function() {
      this.route('edit');
    });
    this.route('chef.edit', {path: ':chef_id/edit'});
  });
  this.route('about');
  this.route('training');
  this.route('restaurants', function() {
    this.route('restaurant', {path: ':restaurant_id'});
    this.route('restaurant.edit', {path: ':restaurant_id/edit'});
  });
});

export default Router;
