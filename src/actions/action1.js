// action creator
//action：对行为（如用户行为）的抽象，在redux里是一个普通的js对象。
//redux对action的约定比较弱，除了一点，action必须有一个type字段来标识这个行为的类型。
exports.numAction = function numAction(){
	return {
		type: 'num'
	}
}