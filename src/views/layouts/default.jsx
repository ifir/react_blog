var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
        	<meta charSet = "UTF-8" />
        	<title>{this.props.title}</title>
        </head>
        <body>
          {this.props.children}
          <div id="app"></div>
        	<script src="bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;