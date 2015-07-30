import Ember from 'ember';
import { createRedux, bindActionCreators } from '../../redux/index';
import CounterActions from '../../actions/CounterActions';
import CounterStore from '../../stores/counter';


function select(state) {
  return { counter: state.counter };
}

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    const stores = {
      counter: CounterStore
    };

    const redux = createRedux(stores);
    const actions = bindActionCreators(CounterActions, redux.dispatch);

    // set actions
    this.set('actions', actions);

    // set initial state
    this.setProperties(select(redux.getState()));

    // subscribe to change events
    redux.subscribe(() => {
      var state = select(redux.getState());
      this.setProperties(state);
    });
  }
});
