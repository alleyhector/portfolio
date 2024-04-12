import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';
import { theme } from '@styles';
const { colors } = theme;

const BackgroundGradient = styled.div`
  background: linear-gradient(${colors.alphaBg}, ${colors.alphaBg});
`;

const FullBackground = ({ children }) => {
  const { pompidou, thailand, norte, amsterpool, batllo, glacier, sagrada, wine } =
    useStaticQuery(graphql`
    query {
      pompidou: file(relativePath: { eq: "bg/pompidou.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      thailand: file(relativePath: { eq: "bg/thailand.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      norte: file(relativePath: { eq: "bg/norte.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      glacier: file(relativePath: { eq: "bg/glacier.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      amsterpool: file(relativePath: { eq: "bg/amsterpool.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sagrada: file(relativePath: { eq: "bg/sagrada.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      batllo: file(relativePath: { eq: "bg/batllo.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      wine: file(relativePath: { eq: "bg/wine.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const backgroundFluidImages = [
    pompidou.childImageSharp.fluid.src,
    thailand.childImageSharp.fluid.src,
    norte.childImageSharp.fluid.src,
    glacier.childImageSharp.fluid.src,
    amsterpool.childImageSharp.fluid.src,
    sagrada.childImageSharp.fluid.src,
    batllo.childImageSharp.fluid.src,
    wine.childImageSharp.fluid.src,
  ];

  return (
    <BackgroundGradient>
      {children}
      <BackgroundSlider images={backgroundFluidImages} duration={5} transition={3} />
    </BackgroundGradient>
  );
};

const StyledFullBackground = styled(FullBackground)``;

export default StyledFullBackground;
