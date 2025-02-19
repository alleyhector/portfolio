import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';
import { getSrc } from 'gatsby-plugin-image';
import { theme } from '@styles';
const { colors } = theme;

const BackgroundGradient = styled.div`
  background: linear-gradient(${colors.alphaBg}, ${colors.alphaBg});
`;

const FullBackground = ({ children }) => {
  const { pompidou, thailand, norte, amsterpool, batllo, glacier, sagrada, wine } = useStaticQuery(
    graphql`
      query {
        pompidou: file(relativePath: { eq: "bg/pompidou.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
        thailand: file(relativePath: { eq: "bg/thailand.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
        norte: file(relativePath: { eq: "bg/norte.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
        glacier: file(relativePath: { eq: "bg/glacier.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
        amsterpool: file(relativePath: { eq: "bg/amsterpool.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
        sagrada: file(relativePath: { eq: "bg/sagrada.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
        batllo: file(relativePath: { eq: "bg/batllo.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
        wine: file(relativePath: { eq: "bg/wine.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 3024, quality: 90, placeholder: BLURRED)
          }
        }
      }
    `,
  );

  const images = [pompidou, thailand, norte, glacier, amsterpool, sagrada, batllo, wine];
  const backgroundImages = images.map(getSrc);

  return (
    <BackgroundGradient>
      {children}
      <BackgroundSlider images={backgroundImages} duration={5} transition={3} />
    </BackgroundGradient>
  );
};

const StyledFullBackground = styled(FullBackground)``;

export default StyledFullBackground;
