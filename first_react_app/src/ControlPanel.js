import React, { Component } from 'react'
import Counter from './Counter'
import Actions from './Actions.js'
import Summary from './Summary.js'

class ControlPanel extends Component {
  constructor(props){
    super(props)

    this.initValues = [0, 10, 20]
    const initSum = this.initValues.reduce((a, b)=> a+b, 0)
    this.state = {
      sum: initSum
    }

  }

  render() {

    return (
      <div className="">
        <Counter caption="First" />
        <Counter caption="Second"  />
        <Counter caption="Third"  />
        <hr/>
        <Summary />

      </div>
    );
  }
}

export default ControlPanel
