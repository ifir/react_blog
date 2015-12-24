var Router = require('react-router');
var Route = Router.Route;



//设置react路由

var Routes = (
	<Router>
		<Route path="/" component={Index}>
			<Route path="login" component={Login} />
		</Route>
	</Router>
)

module.exports = Routes;