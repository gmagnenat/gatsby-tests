import React from 'react';
import { Link } from 'gatsby';

const navigation = () => {
	return (
		<ul className="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
			<li className="mr-2">
				<Link to="/">Home</Link>
			</li>
			<li className="mr-2">
				<Link to="/blog">Blog</Link>
			</li>
			<li className="mr-2">
				<Link to="/projects">Projects</Link>
			</li>
		</ul>
	);
};

export default navigation;
