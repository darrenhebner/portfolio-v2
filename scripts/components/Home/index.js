import React from 'react';
import TweenMax from 'gsap';
import ReactTransitionGroup from 'react-addons-transition-group';

TweenMax.defaultEase = Expo.easeOut;
var tweenLength = 1;

var Home = React.createClass({
	componentWillAppear: function(callback) {
        var h = this.refs.logo__h;
        var b = this.refs.logo__b;
        var n = this.refs.logo__n;
        var r = this.refs.logo__r;

        var line = this.refs.line;
        var diagonal = this.refs.diagonal;
        var image = this.refs.image;

        TweenMax.fromTo(h, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(b, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: (tweenLength + 0.15), ease:Expo.easeOut});
        TweenMax.fromTo(n, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: (tweenLength + 0.1), ease:Expo.easeOut});
        TweenMax.fromTo(r, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: (tweenLength + 0.05), ease:Expo.easeOut});

        TweenMax.fromTo(line, tweenLength, {width: 0}, {width:"50%", onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(diagonal, tweenLength, {alpha: 0}, {alpha:1, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(image, tweenLength, {alpha: 0}, {alpha:1, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeInOut});
	},
	componentWillEnter: function(callback) {
        var h = this.refs.logo__h;
        var b = this.refs.logo__b;
        var n = this.refs.logo__n;
        var r = this.refs.logo__r;

        var line = this.refs.line;
        var diagonal = this.refs.diagonal;
        var image = this.refs.image;

        TweenMax.fromTo(h, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(b, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: (tweenLength + 0.15), ease:Expo.easeOut});
        TweenMax.fromTo(n, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: (tweenLength + 0.1), ease:Expo.easeOut});
        TweenMax.fromTo(r, tweenLength, {alpha: 0, rotationX:60, y:10}, {alpha:1, rotationX:0, y:0, onComplete: callback, onCompleteScope: this, delay: (tweenLength + 0.05), ease:Expo.easeOut});

        TweenMax.fromTo(line, tweenLength, {width: 0}, {width:"50%", onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(diagonal, tweenLength, {alpha: 0}, {alpha:1, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeOut});
        TweenMax.fromTo(image, tweenLength, {alpha: 0}, {alpha:1, onComplete: callback, onCompleteScope: this, delay: tweenLength, ease:Expo.easeInOut});
	},
	componentWillLeave: function(callback) {
		var h = this.refs.logo__h;
        var b = this.refs.logo__b;
        var n = this.refs.logo__n;
        var r = this.refs.logo__r;

        var line = this.refs.line;
        var diagonal = this.refs.diagonal;
        var image = this.refs.image;

        TweenMax.to(h, tweenLength, {alpha:0, rotationX:60, y:10, onComplete: callback, onCompleteScope: this, ease:Expo.easeIn});
        TweenMax.to(b, tweenLength, {alpha:0, rotationX:60, y:10, onComplete: callback, onCompleteScope: this, delay: 0.15, ease:Expo.easeIn});
        TweenMax.to(n, tweenLength, {alpha:0, rotationX:60, y:10, onComplete: callback, onCompleteScope: this, delay: 0.1, ease:Expo.easeIn});
        TweenMax.to(r, tweenLength, {alpha:0, rotationX:60, y:10, onComplete: callback, onCompleteScope: this, delay: 0.05, ease:Expo.easeIn});

        TweenMax.to(line, tweenLength, {width:0, alpha:0, onComplete: callback, onCompleteScope: this, ease:Expo.easeIn});
        TweenMax.to(diagonal, tweenLength, {alpha:0, onComplete: callback, onCompleteScope: this, ease:Expo.easeIn});
        TweenMax.to(image, tweenLength, {alpha:0, onComplete: callback, onCompleteScope: this, ease:Expo.easeInOut});

	},
	render: function() {
		return (
			<div className="container home__container" >
				<span ref="logo__h" className="logo__h">H</span>
				<span ref="logo__b" className="logo__b">B</span>
				<span ref="logo__n" className="logo__n">N</span>
				<span ref="logo__r" className="logo__r">R</span>

				<div ref="line" className="home__line"></div>
				<div ref="diagonal" className="home__diagonal"></div>
				<div ref="image" className="home__image"></div>
			</div>
		)
	}
})

export default Home