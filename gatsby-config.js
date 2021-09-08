module.exports = {
  siteMetadata: {
    title: 'Gwenaël Magnenat',
    titleTemplate: '%s · Gatsby Starter Website',
    description:
      'Gatsby Starter Website with settings to hit 100% in lighthouse',
    url: 'https://www.doe.com', // No trailing slash allowed!
    image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@magnenatg',
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: 'async',
        enableListener: true,
        preconnect: ['https://fonts.gstatic.com'],
        custom: [
          {
            name: ['Karrik', 'Karrik Italik', 'Minipax Regular'],
            file: '/fonts/fonts.css',
          },
        ],
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: 'language-',
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: false,
        noInlineHighlight: false,
        prompt: {
          user: 'root',
          host: 'localhost',
          global: false,
        },
        escapeEntities: {},
      },
    },
  ],
};
