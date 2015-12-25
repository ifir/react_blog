var React = require('react');
var ReactDOM = require('react-dom');

//路由
var Buttons = require('./btns/btns.js');
var Login  = require('./login.js');
var Msg = require('./msg.js');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

//组件



var Index = React.createClass({
	render : function (){
		return (
			<div>
				<Link to="/login">Login</Link>

				{this.props.children}
			</div>

		)
	}
})

//设置react路由
var R = (
	<Router>
		<Route path="/" component={Index}>
			<Route path="/login" component={Login}>

				<Route path="msg" component={Msg} />
				<Route path="btn/:id" component={Buttons} />
			</Route>
		</Route>
	</Router>
);

ReactDOM.render(
 R,
  document.getElementById('app')
);