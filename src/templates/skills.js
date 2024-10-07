import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, Main } from '@styles';
const { colors, fontSizes } = theme;

const StyledTagsContainer = styled(Main)`
  max-width: 1000px;

  a {
    ${mixins.inlineLink};
  }

  h1 {
    ${mixins.flexBetween};
    margin-bottom: 50px;

    a {
      font-size: ${fontSizes.lg};
      font-weight: 400;
    }
  }

  ul {
    li {
      font-size: 24px;
      h2 {
        font-size: inherit;
        margin: 0;
        a {
          color: ${colors.lightText};
        }
      }
      .subtitle {
        color: ${colors.text};
        font-size: ${fontSizes.sm};

        .tag {
          margin-right: 10px;
        }
      }
    }
  }
`;

const SkillsTemplate = ({ pageContext, data, location }) => {
  const { skills } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <StyledTagsContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/skills">View all proficiencies</Link>
        </span>

        <h1>
          <span>#{skills}</span>
        </h1>

        <ul className="fancy-list">
          {edges.map(({ node }) => {
            const { title, slug, date, tech, skills } = node.frontmatter;
            return (
              <li key={slug}>
                <h2>
                  <Link to={slug}>{title}</Link>
                </h2>
                <p className="subtitle">
                  <time>{`${new Date(date).getFullYear()}`}</time>
                  {skills &&
                    skills.length > 0 &&
                    skills.map((skill, i) => (
                      <Link key={i} to={`/skills/${kebabCase(skill)}/`} className="skill">
                        <br />#{skill}
                      </Link>
                    ))}
                </p>
              </li>
            );
          })}
        </ul>
      </StyledTagsContainer>
    </Layout>
  );
};

export default SkillsTemplate;

SkillsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    skills: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query ($skills: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { skills: { in: [$skills] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
            slug
            tech
            skills
          }
        }
      }
    }
  }
`;
