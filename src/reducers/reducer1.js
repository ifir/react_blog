// reducer方法, 传入的参数有两个
// state: 当前的state,（可通过store.getState()获得
// action: 当前触发的行为, {type: 'xx'}（通过store.dispatch(action)调用触发）
// 返回值: 新的state
var counter = function(state, action){
	if (typeof state === 'undefined') {
		return {count:0	}
	}
	var count = state.count;
	switch (action.type) {
		case 'num':
		  return {count: count + 1}
		default:
		  return state
	}
}
module.exports = counter;