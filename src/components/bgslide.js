import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundSlider from 'gatsby-image-background-slider';

/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const FullBgSlider = ({ children }) => {

  return (
    <BackgroundSlider
      Tag="section"
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "images"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      images={['pompidou.jpg', 'bike.jpg', 'camino.jpg', 'glacier.jpg', 'nerja.jpg', 'norte.jpg', 'sagrada.jpg', 'sunset.jpg', 'thailand.jpg']} 
      style={{
        // Defaults are overwrite-able by setting one of the following:
        position: 'fixed',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        // backgroundRepeat: '',
        backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </BackgroundSlider>
  );

};

const StyledFullBgSlider = styled(FullBgSlider)`

`;

export default StyledFullBgSlider;