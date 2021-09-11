import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <h4 className='mt-8 mb-6 lg:mb-12 font-semibold text-blue-600'>
        About Me
      </h4>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby
      </p>
    </Layout>
  );
};

export default AboutPage;
