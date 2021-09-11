import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import BlogCard from '../../components/BlogCard';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Log Book'>
      <section className='relative py-20'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap -m-3 mb-16'>
            {data.allMdx.nodes.map((node) => (
              <BlogCard
                title={node.frontmatter.title}
                slug={node.slug}
                date={node.frontmatter.date}
                hero_image={node.frontmatter.hero_image}
                hero_image_alt={node.frontmatter.hero_image_alt}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`;

export default BlogPage;
