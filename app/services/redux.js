import Ember from 'ember';
import { createRedux, bindActionCreators } from '../redux/index';
import CounterActions from '../actions/CounterActions';
import CounterStore from '../stores/counter';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    const stores = {
      counter: CounterStore
    };

    const redux = createRedux(stores);
    const actions = bindActionCreators(CounterActions, redux.dispatch);

    this.setProperties({ instance: redux, actions });
  }
});
