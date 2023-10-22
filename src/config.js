module.exports = {
  siteTitle: 'Alley Hector | Developer, Designer, Content Creator',
  siteDescription:
    'Portfolio for Alley Hector content creator, editor, web developer & designer based in Portland, OR who can help imagine, create and built you or your online presence from beginning to end.',
  siteKeywords:
    'Alley Hector, Alley, Hector, qpdx, alleyhector, software engineer, front-end engineer, web developer, javascript, smith',
  siteUrl: 'https://alleyhector.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-11079764-4',
  googleVerification: '8ewKpV-UpRO4Zn1ITh_gNvwiE8UM0226Srz04Ti8o9g',
  name: 'Alley Hector',
  location: 'Portland, OR',
  email: 'alley@qpdx.com',
  github: 'https://github.com/alleyhector',
  twitterHandle: '@qpdx',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/alleyhector',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alleyhector',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alleyhector',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/qpdx',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Clients',
      url: '/#jobs',
    },
    {
      name: 'Web Solutions',
      url: '/#projects',
    },
    {
      name: 'Writing Samples',
      url: '/#writing',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    accent: '#7AA34B',
    bg: '#223246',
    darkBg: '#273A52',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
