import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.onClickButton = this.onClickButton.bind(this)
  }
  onClickButton() {
    this.setState({count: this.state.count + 1})
  }
  render() {
    var { count } = this.state
    return (
      <div class="">
        <button type="button" name="button" onClick={this.onClickButton}>点击</button>
        <div class="">
          点击数: {count}
        </div>
      </div>
    );
  }
}

export default ClickCounter;
