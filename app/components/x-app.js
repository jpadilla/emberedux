import Ember from 'ember';

function select(state) {
  return { counter: state.counter };
}

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    var redux = this.get('attrs.redux').value;
    this.set('redux', redux);

    // set actions
    this.set('actions', redux.actions);

    // set initial state
    this.setProperties(select(redux.instance.getState()));

    // subscribe to change events
    redux.instance.subscribe(() => {
      var state = select(redux.instance.getState());
      this.setProperties(state);
    });
  }
});
