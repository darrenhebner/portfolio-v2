import React from 'react';
import { Navigation, Link, History } from 'react-router';

var Nav = React.createClass({
	mixins: [History],
	render: function() {
		return (
			<header className="top-header">
				<nav>
					<ul className="main-nav">
						<Link to={'/'}><img src="/build/images/logo.svg" className="logo" alt="Darren Hebner"/></Link>
						<li><Link to={'/work'}>Work</Link></li>
						<li><Link to={'/about'}>About + Contact</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
})

export default Nav