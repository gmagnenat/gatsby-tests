import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import BlogCard from '../../components/BlogCard';

const BlogPage = ({ data }) => {
	console.log(data);
	return <Layout pageTitle="Log Book"></Layout>;
};

export const query = graphql`
	query BlogPostList {
		allPrismicBlogPost {
			nodes {
				data {
					document_title {
						text
					}
				}
			}
		}
	}
`;

export default BlogPage;
