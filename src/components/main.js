var React = require('react');
var ReactDOM = require('react-dom'); //render react

//react-router
// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router
// var Route = ReactRouter.Route;
// var Link = ReactRouter.Link; //链接模块  可看成<a>
// var IndexRoute = ReactRouter.IndexRoute; //默认加载的路由
// var IndexLink = ReactRouter.IndexLink; //默认加载的link
// var browserHistory = ReactRouter.browserHistory;
//redux
// var createStore = require('redux').createStore;
// var Provider = require('react-redux').Provider;
// var connect  = require('react-redux').connect;
//引入组件
var Nav = require('./nav/nav.js'); //顶部导航栏
var Footer = require('./footer/footer.js'); //底部导航栏
var Home = require('./home/home.js'); //首页页面
var Login = require('./login/login.js'); //登陆页面
var Message = require('./message/message.js'); //消息页面

// action creator
//action：对行为（如用户行为）的抽象，在redux里是一个普通的js对象。
//redux对action的约定比较弱，除了一点，action必须有一个type字段来标识这个行为的类型。
// var opActions = function(){
// 	return {
// 		type: 'opacity'
// 	}
// }
// reducer方法, 传入的参数有两个
// state: 当前的state,（可通过store.getState()获得
// action: 当前触发的行为, {type: 'xx'}（通过store.dispatch(action)调用触发）
// 返回值: 新的state
//var opacityReducers = function(state, action){
// var opacityReducers = function(state, action){
// 	if(typeof state === 'undefined'){
//         return '';
//     }
//     switch(action.type){
//     	case 'opacity':
//     		return {opacity: opacity == '' ? 'opacity' : ''}
//     	default:
//     		return state
//     }
// }
// 创建store, 传入两个参数
// 参数1: reducer 用来修改state
// 参数2(可选): [], 默认的state值,如果不传, 则为undefined
//store在这里代表的是数据模型，内部维护了一个state变量，用例描述应用的状态。
//store有两个核心方法，分别是getState、dispatch。
//getState用来获取store的状态（state），dispatch用来修改store的状态。
//var store = createStore(opacityReducers);

// Map Redux state to component props
// function mapStateToProps (state) {
//   return {
//     value: state.count
//   }
// }

// Map Redux actions to component props
// function mapDispatchToProps (dispatch) {
//   return {
//     handleClick: function(){
//     	dispatch(opActions)
//     }
//   }
// }

// Connected Component
//var App = connect(mapDispatchToProps)(Main)

//组件总容器

var Main = React.createClass({
	//声明初始状态
	getInitialState : function(){
		return {
			opacity : '',
			route: window.location.hash.substr(2)
		}
	},
	componentDidMount:function() {
		var _this = this;
		window.addEventListener('hashchange', function(){
		  _this.setState({
		    route: window.location.hash.substr(2)
		  })
		})
	},
	handleClick:function(){
		this.setState({
			opacity:this.state.opacity == '' ? 'opacity' : ''
		})
	},
	render : function (){
		var Child;
		switch (this.state.route){
			case '/message': Child = Message; break;
			case '/login': Child = Login; break;
			default:      Child = Home;
		}
		return (
			<div className="main-box">
				<Nav />
				{/*React.cloneElement(this.props.children, {
		            animate:this.state.opacity,
		            classOpacity:this.state.opacity,
		            handleClick:this.handleClick
		          })*/
				}
				<Child route={this.state.route} handleClick={this.handleClick} classOpacity={this.state.opacity}/>
				<Footer />
			</div>
		)
	}
});

//设置react路由
/*var R = (
	<Router histroy={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="home/:id" component={Home} />
			<Route path="message" component={Message} />
			<Route path="login" component={Login} />
		</Route>
	</Router>
);*/

ReactDOM.render(
	<Main />,
 document.getElementById('app')
);