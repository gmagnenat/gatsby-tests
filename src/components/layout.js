import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Seo />
      <nav className='w-full px-9'>
        <ul className='flex'>
          <li className='mr-2'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <main className='w-full px-9'>
        <h1 className='text-5xl my-8'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
