import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// ES Modules syntax

export default {
  siteMetadata: {
    title: 'Slicks slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Jersey',
    twitter: '@somerandomhandle23845690294',
  },
  plugins: [
    // eslint-disable-next-line prettier/prettier
   'gatsby-plugin-react-helmet',
   'gatsby-plugin-styled-components',
   {
      // name of plugin you are adding
      resolve: 'gatsby-source-sanity',
       options: {
        projectId: '2jyhqqfu',
        dataset: 'production',
        // development mode - real time
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ]
};
