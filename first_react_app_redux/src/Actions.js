import * as ActionTypes from './ActionTypes.js'
// 传递动作

export const increment = (counterCaption) => {
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption,
  }
}

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption,
  }
}
