import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    console.log('enter constructor: ' + props.caption)
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
    this.updateCount = this.updateCount.bind(this)
    this.state = {
      count: props.initValue
    }
  }


  onClickIncrementButton() {
    this.updateCount(true)
  }

  onClickDecrementButton() {
    this.updateCount(false)
  }
  //更新数据的条件
  updateCount(isIncrement) {
    const previousValue = this.state.count
    const newValue = isIncrement? previousValue + 1: previousValue - 1

    this.setState({count: newValue})
    this.props.onUpdate(newValue, previousValue)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  render() {
    console.log('enter render ' + this.props.caption)
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
