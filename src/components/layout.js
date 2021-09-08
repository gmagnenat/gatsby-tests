import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';

const Layout = ({ pageTitle, children }) => {
  return (
    <section className='pb-20'>
      <Seo />
      <nav className='main-navigation flex justify-between items-center py-8 px-4 xl:px-10'>
        <Link className='text-lg font-semibold' to='/'>
          gM
        </Link>
        <div className='lg:hidden'>
          <button className='navbar-burger flex items-center p-3 hover:bg-gray-50 rounded'>
            <svg
              className='block h-4 w-4'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <ul className='hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12'>
          <li className='mr-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mr-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='mr-2'>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <div className='container px-4 mx-auto pt-12'>
        <h4 className='mt-8 mb-6 lg:mb-12 font-semibold text-blue-600'>
          {pageTitle}
        </h4>
        {children}
      </div>
    </section>
  );
};

export default Layout;
