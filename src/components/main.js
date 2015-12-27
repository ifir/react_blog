var React = require('react');
var ReactDOM = require('react-dom');


//react-router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
//引入组件
var Nav = require('./nav/nav.js');
var Login = require('./login/login.js');
//组件
var Main = React.createClass({
	render : function (){
		return (
			<div>
				<Nav></Nav>
				<Link to="/login">Login</Link>
				{this.props.children}
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