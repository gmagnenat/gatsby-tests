import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Log Book'>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.datePublished}</p>
        </article>
      ))}
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
        slug
      }
    }
  }
`;

export default BlogPage;
