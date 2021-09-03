import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Learning Three.js log book'>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2 className='text-4xl'>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.datePublished}</p>
            <div className='my-3 border-b-2 border-gray-500 pb-5'>
              <MDXRenderer>{node.body}</MDXRenderer>
            </div>
          </article>
        ))}
      </ul>
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
