module.exports = {
  siteTitle: 'Alley Hector | Developer, Designer, Content Creator',
  siteDescription:
    'Portfolio for Alley Hector content creator, editor, web developer & designer based in Portland, OR who can help imagine, create and built you or your online presence from beginning to end.',
  siteKeywords:
    'Alley Hector, Alley, Hector, qpdx, alleyhector, software engineer, front-end engineer, web developer, javascript, smith',
  siteUrl: 'https://outandabout.space',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
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
      url: 'https://www.linkedin.com/in/allisonhector',
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
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#FAF1CF',
  navyColor: '#3F6844',
  darkNavyColor: '#3F6844',

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
