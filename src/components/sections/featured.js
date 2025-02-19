import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const StyledLabel = styled.h4`
  font-size: ${fontSizes.sm};
  font-weight: normal;
  color: ${colors.accent};
  font-family: ${fonts.Highlight};
  margin-top: 10px;
  padding-top: 0;
`;
const StyledProjectName = styled.h5`
  font-size: 28px;
  margin: 0 0 20px;
  color: ${colors.lightestText};
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${colors.white};`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const StyledDescription = styled.div`
  ${mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.lightBg};
  color: ${colors.lightText};
  font-size: ${fontSizes.lg};
  border-radius: ${theme.borderRadius};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 10px 0;
  }
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
  margin: 25px 0 10px;
  list-style: none;

  li {
    font-family: ${fonts.Highlight};
    font-size: ${fontSizes.sm};
    color: ${colors.text};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.lightestText};
      margin-right: 10px;
      font-weight: 700;
    `};
  }
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${colors.lightestText};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const StyledFeaturedImg = styled(GatsbyImage)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(95%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(95%) contrast(1) brightness(80%);
  `};
`;
const StyledImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${colors.accent};
  border-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.bg};
    mix-blend-mode: screen;
  }
`;
const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`
    margin-bottom: 70px;
    background-color: ${colors.lightBg};
    border: 1px solid ${colors.accent};
  `};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`;

const Featured = ({ data }) => {
  const featuredProjects = data.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledContainer id="featured">
      <Heading ref={revealTitle}>App Solutions</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, skills, github, cover } = frontmatter;
            const image = getImage(cover);

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <StyledContent>
                  <StyledLabel>Featured Project</StyledLabel>
                  <StyledProjectName>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledProjectName>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <StyledTechList>
                      {tech.map((tech, i) => (
                        <li key={i}>
                          <Link to={`/tech/${kebabCase(tech)}/`}>{tech}</Link>
                        </li>
                      ))}
                    </StyledTechList>
                  )}
                  {skills && (
                    <StyledTechList>
                      {skills.map((skill, i) => (
                        <li key={i}>
                          <Link to={`/skills/${kebabCase(skill)}/`}>{skill}</Link>
                        </li>
                      ))}
                    </StyledTechList>
                  )}

                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link">
                        <FormattedIcon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        <FormattedIcon name="External" />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={external ? external : github ? github : '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <StyledFeaturedImg image={image} alt={title} />
                </StyledImgContainer>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

Featured.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Featured;
