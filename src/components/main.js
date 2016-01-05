var React = require('react');
var ReactDOM = require('react-dom'); //render react

//react-router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var Link = ReactRouter.Link; //链接模块  可看成<a>
var IndexRoute = ReactRouter.IndexRoute; //默认加载的路由
var IndexLink = ReactRouter.IndexLink; //默认加载的link
var browserHistory = ReactRouter.browserHistory;
//redux
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var connect  = require('react-redux').connect;
//引入组件
var Nav = require('./nav/nav.js'); //顶部导航栏
var Footer = require('./footer/footer.js'); //底部导航栏
var Home = require('./home/home.js'); //首页页面
var Login = require('./login/login.js'); //登陆页面
var Message = require('./message/message.js'); //消息页面



//组件总容器

var Main = React.createClass({

	render : function (){
		var value = this.props.value;
		var handleClick = this.props.handleClick;
		return (
			<div className="main-box">
				<Nav />
				{/*React.cloneElement(this.props.children, {
		            animate:this.state.opacity,
		            classOpacity:this.state.opacity,
		            handleClick:this.handleClick
		          })*/
				}
				{this.props.children}
				<span>{value}</span>
        		<button onClick={handleClick}>Increase</button>
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
				<Footer />
			</div>
		)
	}
});



// action creator
//action：对行为（如用户行为）的抽象，在redux里是一个普通的js对象。
//redux对action的约定比较弱，除了一点，action必须有一个type字段来标识这个行为的类型。
var numAction  = function(){
	return {
		type: 'num'
	}
}
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
// 创建store, 传入两个参数
// 参数1: reducer 用来修改state
// 参数2(可选): [], 默认的state值,如果不传, 则为undefined
//store在这里代表的是数据模型，内部维护了一个state变量，用例描述应用的状态。
//store有两个核心方法，分别是getState、dispatch。
//getState用来获取store的状态（state），dispatch用来修改store的状态。
var store = createStore(counter);
// Map Redux state to component props
function mapStateToProps (state) {
	return {
		value: state.count
	}
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    handleClick: function(){
    	dispatch(numAction())
    }
  }
}

// Connected Component
var App = connect(mapStateToProps,mapDispatchToProps)(Main);



//设置react路由
var R = (
	<Provider store={store}>
		<Router histroy={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="home" component={Home} />
				<Route path="message" component={Message} />
				<Route path="login" component={Login} />
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(
	R,
 document.getElementById('app')
);