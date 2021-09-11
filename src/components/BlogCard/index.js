import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogCard = ({ title, date, hero_image, hero_image_alt, slug }) => {
  const image = getImage(hero_image);

  return (
    <div className='w-full md:w-1/2 lg:w-1/3 p-3' key={title}>
      <div className='p-6 border rounded-xl'>
        <div className='relative h-52 mb-6'>
          <span className='absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-800 bg-opacity-50 rounded-md uppercase z-10'>
            Development
          </span>
          <GatsbyImage
            className='w-full h-full object-cover rounded-lg'
            image={image}
            alt={hero_image_alt}
          />
        </div>
        <span className='inline-block mb-4 text-xs text-gray-600'>{date}</span>
        <div>
          <h2>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
