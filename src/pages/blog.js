import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Log Book'>
      <div className='blog-posts lg:w-3/5 mx-auto'>
        {data.allMdx.nodes.map((node) => (
          <article className='mb-3 bg-white p-5 shadow-xl' key={node.id}>
            <p className='text-sm'>{node.frontmatter.datePublished}</p>
            <h2 className='text-4xl'>{node.frontmatter.title}</h2>
            <div className='my-3 border-b-2 border-gray-800 pb-5'>
              <MDXRenderer>{node.body}</MDXRenderer>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        frontmatter {
          title
          datePublished(formatString: "MMMM D, YYYY")
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
