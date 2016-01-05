var React = require('react'); // react
var ReactDOM = require('react-dom'); //render react


var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute; //默认加载的路由
var browserHistory = ReactRouter.browserHistory;


var Provider = require('react-redux').Provider;

var store = require('../store/store.js');
var App = require('./home/app.js');
var Home = require('./home/home.js');
var Message = require('./message/message.js');
var Login = require('./login/login.js');

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