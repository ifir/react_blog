var React = require('react');
var ReactDOM = require('react-dom');

var Box = React.createClass({
	render : function (){
		return (
			<h1>Hello World!</h1>
			)
	}
})

ReactDOM.render(
 <Box />,
  document.getElementById('app')
);