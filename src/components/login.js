var React = require('react');
var ReactDOM = require('react-dom');

//var Buttons = require('./btns/btns.js');

var Login = React.createClass({
	render : function (){
		return (
			<h2>我是第二个页面</h2>
		)
	}
})

ReactDOM.render(
 <Login />,
  document.getElementById('app')
);