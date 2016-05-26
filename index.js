import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import Counter from './components/counter'
import counterReducer from './reducers/counter-reducer';

// Store
const store = createStore(counterReducer)

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: state.count
  }
}

// Actions
const increaseAction = {type: 'increase'}
const decreaseAction = {type: 'decrease'}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
