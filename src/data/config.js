require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  defaultTitle: `Ruijadom`,
  logo: 'https://ruijadomingues.netlify.app/favicon/favicon-512.png',
  legalName: `Rui Domingues`,
  siteUrl: `https://ruijadomingues.netlify.app/`,
  defaultDescription: `Portfolio`,
  socialLinks: [
    {
      name: `github`,
      url: `https://github.com/ruijadom`,
    },
    {
      name: `linkedin`,
      url: `https://www.linkedin.com/in/ruijadomingues/`,
    },
    {
      name: `instagram`,
      url: `https://www.instagram.com/ruijadomingues_/`,
    },
  ],
  background_color: `#141218`,
  theme_color: `#342065`,
  social: {
    facebook: 'appId',
    twitter: '@ruijadom',
  },
  address: {
    city: `Viana do Castelo`,
    country: `Portugal`,
  },
  contact: {
    email: `${process.env.CONTACT_EMAIL}`,
  },
}
