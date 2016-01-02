var React = require('react');
var ReactDOM = require('react-dom');


var TabControl = React.createClass({
	getInitialState: function(){
		return {
			currentIndex:0,
			tabnav:[{title:'标题一', content:'内容一',active:"active"},
					{title:'标题二', content:'内容二',active:""},
					{title:'标题三', content:'内容三',active:""}
			],
			active:'active'
		}
	},
	handleClick:function(e){
		var index = e.target.getAttribute('data-id');
		this.setState({
			currentIndex:index
		});
		console.log(this.state.currentIndex)
	},
	// classIndex:function(){
	// 	var c = index === this.state.currentIndex ? 'active' : '';
	// 	return c;
	// },
	// getConIndex:function(){
	// 	return index === this.state.currentIndex ? 'active' : '';
	// },
	render:function(){

		var self = this;
		var navmap = this.state.tabnav.map(function(arr, index){
			var cn = index==this.state.currentIndex ? 'active' : '';
			return <Spannav active={cn} handleClick={this.handleClick} key={index} titles={arr.title} index={index}/>
		}.bind(this));
		var conmap = this.state.tabnav.map(function(arr, index){
			//return (<span key={index} onClick={this.handleClick}>{arr.title}</span>)
			return (<Contentnav key={index} con={arr.content} index={index} active={arr.active} />)
		});
		
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
	getInitialState: function() {
		return {
			contentIndex:this.props.index
		};
	},
	render: function() {
		return (
			<div>{this.props.con}</div>
		);
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
				<p>地址:{this.props.location.pathname }</p>
				<h2>标签页切换小Demo</h2>
				<TabControl />
			</div>
		)


	}
})