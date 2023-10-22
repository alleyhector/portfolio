import styled from 'styled-components';
import media from './media';
import { theme, mixins } from '@styles';
const { colors } = theme;

const Section = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
  &:focus {
    outline: ${colors.darkBg};
  }

  ${media.tablet`padding: 100px 0;`};
`;

export default Section;
