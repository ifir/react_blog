var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<article className="container article-box">
				<section className="article-info">
					<div className="clearfix">
						<div className=" pull-left head-box img-radius text-center">
							<img className="img-radius" src="img/head1.jpg" alt="" />
						</div>
						<div className="name-box">
							<h3>FIR</h3>
							<p>来自PC</p>
						</div>
					</div>
				</section>
				<section className="article-info">
					<div ></div>
				</section>
				<section className="article-img">
					<div>
						<img src="" alt="" />
					</div>
				</section>
				<footer className="article-footer">
				</footer>
			</article>
		)
	}
})