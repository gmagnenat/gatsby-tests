import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.hero_image);

	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="h-96 mb-10">
						<GatsbyImage
							className="w-full h-full object-cover rounded-lg"
							image={image}
							alt={data.mdx.frontmatter.hero_image_alt}
						/>
						<p className="text-xs text-gray-400 text-right font-thin">
							Photo Credit:{' '}
							<a
								className="text-gray-400"
								href={data.mdx.frontmatter.hero_image_credit_link}
							>
								{data.mdx.frontmatter.hero_image_credit_text}
							</a>
						</p>
					</div>
					<div className="w-full mx-auto">
						<h2 className="mb-5 text-3xl font-semibold font-heading">
							{data.mdx.frontmatter.title}
						</h2>
						<p className="text-normal text-blue-600 mb-10">
							{data.mdx.frontmatter.date}
						</p>

						<MDXRenderer className="mb-6 text-xl text-gray-500">
							{data.mdx.body}
						</MDXRenderer>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
				hero_image_alt
				hero_image_credit_link
				hero_image_credit_text
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
			body
		}
	}
`;

export default BlogPost;
