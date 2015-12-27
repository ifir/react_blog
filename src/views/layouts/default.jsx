var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
        	<meta charSet = "UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no; email=no" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" />
        	<title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="css/style.css" />
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