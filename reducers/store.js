import { createStore } from 'redux'
import counterReducer from './counter-reducer';

// Store
const store = createStore(counterReducer)
export default store;
