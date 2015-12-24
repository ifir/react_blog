var React = require('react');
var ReactDOM = require('react-dom');

var Buttons = require('./btns/btns.js');
//var Routes = require('./routes/index.js');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

/*var Routes = (
	<Router>
		<Route path="/" component={Index}>
			<Route path="login" component={Login}/>
		<Route>
	</Route>
)*/


var Index = React.createClass({
	render : function (){
		return (
			<div>
				<Buttons />
				<Link to="/login">Login</Link>
				{this.props.children}
			</div>

		)
	}
})


var Login = React.createClass({
	render : function (){
		return (
			<h2>我是第二个页面</h2>
		)
	}
})




ReactDOM.render(
 (
	<Router>
		<Route path="/" component={Index}>
			<Route path="login" component={Login} />
		</Route>
	</Router>
),
  document.getElementById('app')
);