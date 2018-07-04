import * as ActionTypes from './ActionTypes.js';
//只管怎么修改数据
export default (state, action) => {
  console.log(state,'state');
  const {counterCaption} = action;
  console.log(counterCaption,'counterCaption');
  switch (action.type) {
    case ActionTypes.INCREMENT:
      //return {...state, [counterCaption]: state[counterCaption] + 1};
      //return {...state, [counterCaption]: state[counterCaption]+1}
      //合并对象形成新的对象
      var newValues = Object.assign({}, state)
      newValues[counterCaption] ++
      return newValues
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
