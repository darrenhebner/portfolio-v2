import React from 'react';
import { Navigation, Link, History } from 'react-router';
import TweenMax from 'gsap';
import ReactTransitionGroup from 'react-addons-transition-group';

var tweenLength = 1;

var Work = React.createClass({
	componentWillAppear: function(callback) {
        var container = this.refs.container;
        var inner = this.refs.inner;

        TweenMax.fromTo(container, tweenLength , {width: 0}, {width:"100%", onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(inner, tweenLength, {opacity: 0}, {opacity: 1, onComplete: callback, onCompleteScope: this, delay: (tweenLength * 2), ease:Expo.easeOut});
	},
	componentWillEnter: function(callback) {
        var container = this.refs.container;
        var inner = this.refs.inner;

        TweenMax.fromTo(container, tweenLength, {width: 0}, {width:"100%", onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(inner, tweenLength, {opacity: 0}, {opacity: 1, onComplete: callback, onCompleteScope: this, delay: (tweenLength * 2), ease:Expo.easeOut});
	},
	componentWillLeave: function(callback) {
		var container = this.refs.container;
		var inner = this.refs.inner;

        TweenMax.to(container, (tweenLength - 0.4), {width: 0, onComplete: callback, onCompleteScope: this, ease:Expo.easeOut, delay: 0.4});
        TweenMax.to(inner, 0.4, {opacity: 0, ease:Expo.easeOut});
	},
	render: function() {
		return (
			<div className="container">
				<div ref="container" className="work__container">
					<div ref="inner" className="work__inner">
						<h1>Selected<br></br>Works</h1>
						<ul className="work__list">
							<Link to={'/work/grapevine'}>
								<li data-num="1.">
									<span className="work__title">Grapevine</span>
									<span className="work__year">2015</span>
									<span className="work__arrow"></span>
								</li>
							</Link>
							<Link to={'/work/wilfred'}>
								<li data-num="2.">
									<span className="work__title">Wilfred</span>
									<span className="work__year">2015</span>
									<span className="work__arrow"></span>
								</li>
							</Link>
							<Link to={'/work/franglish'}>
								<li data-num="3.">
									<span className="work__title">Franglish</span>
									<span className="work__year">2015</span>
									<span className="work__arrow"></span>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		)
	}
})

export default Work