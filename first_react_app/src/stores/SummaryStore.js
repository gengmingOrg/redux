import AppDispatcher from '../AppDispatcher.js'
import * as ActionTypes from '../ActionTypes.js'
import CounterStore from './CounterStore.js'
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {

    let summary = 0;
    for(const key in counterValues) {
      key
      if(counterValues.hasOwnProperty(key)) {
        summary += counterValues[key]
      }
    }
    //console.log(summary, 'summary');
    return summary
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary: function(){
    return computeSummary(CounterStore.getCounterValues())
  },
  emitChange: function() {
    //可以广播特定事件
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
    //可以挂载一个事件到EventEmitter特定事件的处理函数
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})
// 把Stor注册到全局Dispatcher
SummaryStore.dispatcherToken = AppDispatcher.register((action)=> {

  if((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
    AppDispatcher.waitFor([CounterStore.dispatcherToken])
    SummaryStore.emitChange()
  }
})
export default SummaryStore;
