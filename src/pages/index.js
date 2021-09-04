import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <ul className='list'>
        <li className='list-item'>Tailwindcss added ✅</li>
        <li className='list-item'>Gatsby plugin image added ✅</li>
        <li className='list-item'>
          Optimise the image plugin to load resized image depending on viewport
          size
        </li>
        <li>Add custom font-face</li>
        <li>Handle FOUC for font loading</li>
      </ul>
      <StaticImage
        alt='Tre Cime, Dolimites, Italia'
        src='../images/dolomites-tre-cime.jpg'
        layout='fullWidth'
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;
