import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { theme } from '@styles';
const { colors } = theme;

/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const FullBackground = ({ children }) => {
  const { desktop } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "bg/bike.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    desktop.childImageSharp.fluid,
    `linear-gradient(${colors.alphaNavy}, ${colors.alphaNavy})`,
  ].reverse();

  return (
    <BackgroundImage
      Tag="section"
      fluid={backgroundFluidImageStack}
      // title="Fullscreen Background"
      id="fullscreenbg"
      role="img"
      aria-label="Fullscreen Background"
      preserveStackingContext={true}
      style={{
        // Defaults are overwrite-able by setting one of the following:
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        // backgroundRepeat: '',
        backgroundAttachment: 'fixed',
      }}>
      {children}
    </BackgroundImage>
  );
};

const StyledFullBackground = styled(FullBackground)``;

export default StyledFullBackground;
