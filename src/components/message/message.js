var React = require('react');
var ReactDOM = require('react-dom');


var TabControl = React.createClass({
	getInitialState: function(){
		return {
			currentIndex:0,
			tabnav:[{title:'标题一', content:'内容一'},
					{title:'标题二', content:'内容二'},
					{title:'标题三', content:'内容三'}
			],
			active:'active'
		}
	},
	handleClick:function(index){
		//var index = e.target.getAttribute('data-id');
		this.setState({
			currentIndex:index
		});
	},
	render:function(){

		var self = this;
		var navmap = this.state.tabnav.map(function(arr, index){
			var cn = index === this.state.currentIndex ? 'active' : '';
				return ( <Spannav active={cn} handleClick={this.handleClick.bind(this,index)} key={index} titles={arr.title} index={index}/>)
			}.bind(this)) ;
		var conmap = this.state.tabnav.map(function(arr, index){
			var cn = index === this.state.currentIndex ? 'active' : '';
			return ( <Contentnav active={cn} key={index} con={arr.content} />)
		}.bind(this));

		return (
			<div>
				{navmap}
				{conmap}
			</div>
		)
	}
});

var Spannav = React.createClass({
	render:function(){
		return (
			<span data-id={this.props.index} className={this.props.active} onClick={this.props.handleClick}>{this.props.titles}</span>
		)
	}
});

var Contentnav = React.createClass({
	render: function() {
		return (
			<div className={this.props.active}>{this.props.con}</div>
		)
	}

});



module.exports = React.createClass({
	componentDidMount : function(){
		var box = ReactDOM.findDOMNode(this.refs.box);
		timer = setTimeout(function(){
			//$('.opacityup-enter').addClass('opacityup-enter-active');
			box.classList.add('opacityup-enter-active');
		},10);
	},
	componentWillUnmount:function(){
		clearTimeout(timer);
	},
	render:function(){
		return (
			<div ref="box" className="message-box opacityup-enter">
				{
					//获取url上的地址this.props.location.pathname
				}
				<p>地址:{this.props.location.pathname}</p>
				<h2>标签页切换小Demo</h2>
				<TabControl />
			</div>
		)


	}
})