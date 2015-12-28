var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup  = require('react/lib/ReactCSSTransitionGroup');

//react-router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

//引入组件
var Nav = require('./nav/nav.js');
var Footer = require('./footer/footer.js');
var Login = require('./login/login.js');
//组件
var Main = React.createClass({
	render : function (){
		return (
			<div>
				<div className="home-page">
					<Nav />
					<Footer />
				</div>
				<ReactCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
					{this.props.children}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
})

//设置react路由
var R = (
	<Router>
		<Route path="/" component={Main}>
			<Route path="login" component={Login} />
		</Route>
	</Router>
);

ReactDOM.render(
 R, document.getElementById('app')
);