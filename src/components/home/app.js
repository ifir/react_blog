var React = require('react');
var connect  = require('react-redux').connect;

var numAction = require('../../actions/action1.js');

var Nav = require('../nav/nav.js');
var Footer = require('../footer/footer.js');

//组件总容器

var Main = React.createClass({

	render : function (){
		var value = this.props.value;
		var handleClick = this.props.handleClick;
		console.log(value)
		console.log(handleClick)
		return (
			<div className="main-box">
				<Nav />
				{/*React.cloneElement(this.props.children, {
		            animate:this.state.opacity,
		            classOpacity:this.state.opacity,
		            handleClick:this.handleClick
		          })*/
				}
				{this.props.children}
				<span>{value}</span>
        		<button onClick={handleClick}>Increase</button>
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
        		<br />
				<Footer />
			</div>
		)
	}
});
// Map Redux state to component props
function mapStateToProps (state) {
	return {
		value: state.count
	}
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    handleClick: function(){
    	dispatch(numAction.numAction())
    }
  }
}

// Connected Component
var App = connect(mapStateToProps,mapDispatchToProps)(Main);
module.exports = App;
