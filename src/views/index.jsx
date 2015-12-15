var React = require('react');
var DefaultLayout = require('./layouts/default');
 
var HelloWorld = React.createClass({
  render: function() {
    return (
    	<DefaultLayout title={this.props.title}>
	        <div>Hello {this.props.name}</div>
	    </DefaultLayout>
    )
  }
});

module.exports = HelloWorld;