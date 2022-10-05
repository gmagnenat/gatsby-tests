import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import Navigation from './navigation';

const Layout = ({ pageTitle, children }) => {
	return (
		<section className="pb-20 bg-white">
			<Seo />
			<nav className="main-navigation flex justify-between items-center py-8 px-4 xl:px-10">
				<Link className="text-lg font-semibold" to="/">
					Gwenaël Magnenat
				</Link>
				<div className="lg:hidden">
					<button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
						<svg
							className="block h-4 w-4"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<Navigation />
			</nav>
			<div className="container px-4 mx-auto pt-12">{children}</div>
		</section>
	);
};

export default Layout;
