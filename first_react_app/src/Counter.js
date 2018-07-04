import React, { Component } from 'react';
import CounterStore from './stores/CounterStore.js'
import * as Actions from './Actions.js'

class Counter extends Component {

  constructor(props) {

    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }
  componentDidMount() {
    CounterStore.addChangeListener(this.onChange)
  }
  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }

  onClickIncrementButton() {
    Actions.increment(this.props.caption)
  }

  onClickDecrementButton() {
    Actions.decrement(this.props.caption)
  }
  //更新数据的条件
  onChange(isIncrement) {
    const newCount = CounterStore.getCounterValues()[this.props.caption]

    this.setState({count: newCount})
  }



  render() {
    const {caption} = this.props;
    return (
      <div>
        <button  onClick={this.onClickIncrementButton}>+</button>
        <button  onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}



Counter.defaultProps = {
  initValue: 0
};
export default Counter
