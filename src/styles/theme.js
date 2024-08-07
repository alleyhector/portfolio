import { hex2rgba } from '@utils';

const ACCENT = '#7AA34B'; // Links on both dark & light backgrounds
const DARK_BG = '#273A52'; // Intro bg only
const BG = '#223246';

const theme = {
  colors: {
    darkBg: DARK_BG,
    bg: BG,
    lightBg: '#2D435F', // Featured sections bg & client rollover bg
    lightestBg: '#2D435F', // Small line accents only
    text: '#cbb496', // Text on main bg
    lightText: '#cbb496', // Text on featured sections & socials
    lightestText: '#b49369', // Main header text & nav
    white: '#FAF1CF',
    accent: ACCENT,
    overlay: hex2rgba(ACCENT, 0.7),
    transAccent: hex2rgba(ACCENT, 0.07),
    shadowBg: hex2rgba(DARK_BG, 0.7),
    alphaBg: hex2rgba(BG, 0.9),
  },

  fonts: {
    Main: 'Roboto Condensed, Roboto, Lato, Arial, sans-serif',
    Highlight: 'Raleway, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif', // old main
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace', // old highlight
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 175,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;
