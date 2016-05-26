import React, { Component, PropTypes } from 'react'

// React component
export default class Counter extends Component {
  render () {
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <h1>Simple redux + react example</h1>
        <h1>{value}</h1>
        <button onClick={onDecreaseClick}>- </button>
        <button onClick={onIncreaseClick}> +</button>
      </div>
    )
  }
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}
