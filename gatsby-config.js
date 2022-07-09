module.exports = {
  siteMetadata: {
    title: "Optimus Dental site",
    author: "Vicko Vitasovic",
    description: "Optimus dental webpages",
    other: 
    { googleMapsKey: "AIzaSyBbFgCgwOGf1cK5YACwl4WkNTfsblnHUwo" }
  },
  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/gallery/large`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`]
}
