var React = require('react');
var DefaultLayout = require('./layouts/default');
 
var HelloWorld = React.createClass({
  render: function() {
    return (
    	<DefaultLayout title={this.props.title}>  		
	        <h1>Hello {this.props.name}</h1>
	    </DefaultLayout>
    )
  }
});

module.exports = HelloWorld;