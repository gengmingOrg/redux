import { createStore } from 'redux'

import reducer from './Reducer.js'

const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 20,
}

//第一个参数 更新状态 第二个参数状态的初始值
const store = createStore(reducer, counterValues)

export default store
