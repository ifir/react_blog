var React = require('react');
var ReactDOM = require('react-dom'); //render react
//react adds css animate
//var ReactCSSTransitionGroup  = require('react/lib/ReactCSSTransitionGroup');

//react-router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var Link = ReactRouter.Link; //链接模块  可看成a
var IndexRoute = ReactRouter.IndexRoute; //默认加载的路由
var IndexLink = ReactRouter.IndexLink; //默认加载的link
var browserHistory = ReactRouter.browserHistory;

//引入组件
var Nav = require('./nav/nav.js'); //顶部导航栏
var Footer = require('./footer/footer.js'); //底部导航栏
var Home = require('./home/home.js'); //首页页面
var Login = require('./login/login.js'); //登陆页面
var Message = require('./message/message.js'); //消息页面
//组件总容器
//this.props.location.pathname
var Main = React.createClass({
	//声明初始状态
	getInitialState : function(){
		return {
			opacity : ''
		}
	},
	handleClick:function(){
		this.setState({
			opacity:this.state.opacity == '' ? 'opacity' : ''
		})
	},
	
	render : function (){
		return (
			<div>
				<div className="home-page">
					<Nav />
					<Footer />
				</div>
				{/* 动画插件 */}
				{// <ReactCSSTransitionGroup component="div" transitionName="opacityup" transitionEnterTimeout={300} transitionLeave={false}>
					// 	{this.props.children}
				// </ReactCSSTransitionGroup>
				}
				{ 
				React.cloneElement(this.props.children, {
		            animate:this.state.opacity,
		            classOpacity:this.state.opacity,
		            handleClick:this.handleClick
		          }) 
				}
				{//this.props.children
				}
			</div>
		)
	}
});

//设置react路由
var R = (
	<Router histroy={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="home/:id" component={Home} />
			<Route path="message" component={Message} />
			<Route path="login" component={Login} />
		</Route>
	</Router>
);

ReactDOM.render(
 R, document.getElementById('app')
);