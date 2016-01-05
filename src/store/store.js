var createStore = require('redux').createStore;
var counter = require('../reducers/reducer1.js');

// 创建store, 传入两个参数
// 参数1: reducer 用来修改state
// 参数2(可选): [], 默认的state值,如果不传, 则为undefined
//store在这里代表的是数据模型，内部维护了一个state变量，用例描述应用的状态。
//store有两个核心方法，分别是getState、dispatch。
//getState用来获取store的状态（state），dispatch用来修改store的状态。
var store = createStore(counter);
module.exports = store;