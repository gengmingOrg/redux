import React, { Component } from 'react'
import Counter from './Counter'


class ControlPanel extends Component {
  constructor(props){
    super(props)

    this.initValues = [0, 10, 20]
    const initSum = this.initValues.reduce((a, b)=> a+b, 0)
    this.state = {
      sum: initSum
    }
    this.onCounterUpdate = this.onCounterUpdate.bind(this)
  }
  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue
    this.setState({sum: this.state.sum + valueChange})
  }




  render() {
    console.log('enter ControlPanel render');
    return (
      <div className="">
        <Counter caption="First" onUpdate={this.onCounterUpdate}/>
        <Counter caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initValues[1]} />
        <Counter caption="Third" onUpdate={this.onCounterUpdate} initValue={this.initValues[2]} />
        <div>
          总数: {this.state.sum}
        </div>
        <button onClick={ () => this.forceUpdate() }>
          Click me to re-render!
        </button>
      </div>
    );
  }
}

export default ControlPanel
