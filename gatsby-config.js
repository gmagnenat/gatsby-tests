module.exports = {
  siteMetadata: {
    title: 'Severus Snape',
    titleTemplate: '%s · The Real Hero',
    description:
      'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    url: 'https://www.doe.com', // No trailing slash allowed!
    image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@occlumency',
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
  ],
};
