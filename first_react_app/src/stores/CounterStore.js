import AppDispatcher from '../AppDispatcher.js'
import * as ActionTypes from '../ActionTypes.js'
import {EventEmitter} from 'events';
var CHANGE_EVENT = 'changed'
const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 20,
}

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function(){
    return counterValues
  },
  emitChange: function() {
    //可以广播特定事件
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
    //可以挂载一个事件到EventEmitter特定事件的处理函数
    console.log(callback,'callback')
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})
// 把Stor注册到全局Dispatcher
CounterStore.dispatcherToken = AppDispatcher.register((action)=> {

  if(action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption] ++
    //console.log(counterValues[action.counterCaption], 'counterValues[action.counterCaption]');
    CounterStore.emitChange()
  }else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption] --
    CounterStore.emitChange()
  }
})

export default CounterStore
