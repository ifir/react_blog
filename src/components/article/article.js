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
					<div className="article-content">
						<p>先从漫画整体来说，因为本周漫画最后大妈的实力尾随到了象岛导致现在局面比较混乱。路飞现在看来惹到了除红发以外的所谓四皇，首先在鱼人岛跟大妈结下了梁子。这次因为抢夺凯撒可能又会惹到大妈。其次就是凯多，因为击败小唐已经惹到了凯多。而在象岛山治击败了凯多的一个手下。而路飞在这话也说了要打飞凯多。在德雷斯罗萨冠军和黑胡子跟路飞以往的那些事情，跟黑胡子也有梁子。而黑胡子已经摸到了革命军的总部，而那里有路飞的老爸和萨博。</p>
					</div>
				</section>
				<section className="article-img">
					<div className="user-img text-center">
						<img src="img/pic1.jpg" alt="" />
					</div>
				</section>
				<footer className="article-footer">
				</footer>
			</article>
		)
	}
})