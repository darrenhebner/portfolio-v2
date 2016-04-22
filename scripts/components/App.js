import React from 'react';
import Nav from './Navigation';
import Social from './Social';
import TweenMax from 'gsap';
import TransitionGroup from 'react-addons-transition-group';

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Nav></Nav>
				<Social></Social>
				<TransitionGroup
		          component="div"
		        >
		          {React.cloneElement(this.props.children, {
		            key: this.props.location.pathname
		          })}
		        </TransitionGroup>
			</div>
		)
	}
})

export default App