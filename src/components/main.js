var React = require('react');
var ReactDOM = require('react-dom');

var Buttons = require('./btns/btns.js');

var Box = React.createClass({
	render : function (){
		return (
			
			<Buttons />

		)
		
	}
})

ReactDOM.render(
 <Box />,
  document.getElementById('app')
);