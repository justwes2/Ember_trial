import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Alan Turing', 'Ada Lovelace', 'Grace Hopper']
  }
});
