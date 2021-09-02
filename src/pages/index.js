import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <ul>
        <li>Tailwindcss added ✅</li>
        <li>Gatsby plugin image added ✅</li>
        <li>
          Optimise the image plugin to load resized image depending on viewport
          size
        </li>
      </ul>
      <StaticImage
        alt='Tre Cime, Dolimites, Italia'
        src='../images/dolomites-tre-cime.jpg'
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;
