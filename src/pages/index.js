import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout pageTitle='Web / Technologies'>
      <h4 className='mt-8 mb-6 lg:mb-12 font-semibold text-blue-600'>
        Web / Technologies
      </h4>
      <div className='flex flex-wrap items-center -mx-4'>
        <div className='w-full md:w-1/2 px-4 mb-6 md:mb-0'>
          <h2 className='mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold'>
            Learning 3D and animation on the web
          </h2>
          <div className='max-w-lg mb-6 lg:mb-12'>
            <p className='text-xl text-gray-600'>
              Learning how to use and create 3D animations with Three.js and
              implement them in a web page. Learning how to work with Gsap and
              other animation libraries.
            </p>
          </div>
          <div className='flex flex-wrap'>
            <Link
              className='primary-button inline-block px-6 py-4 mb-3 mr-4 text-sm leading-normal bg-blue-600 hover:bg-blue-400 text-white rounded transition duration-200 tracking-widest'
              to='/blog'
            >
              Learning logs
            </Link>
          </div>
          <div className='relative w-full md:w-1/2 px-4'></div>
        </div>
      </div>
      {/* <StaticImage
        alt='Tre Cime, Dolimites, Italia'
        src='../images/dolomites-tre-cime.jpg'
        layout='fullWidth'
      ></StaticImage> */}
    </Layout>
  );
};

export default IndexPage;
