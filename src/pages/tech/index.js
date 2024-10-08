import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, Main } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledTagsContainer = styled(Main)`
  max-width: 1000px;

  h1 {
    margin-bottom: 50px;
  }
  ul {
    color: ${colors.lightText};
    li {
      font-size: ${fontSizes.xxl};

      a {
        ${mixins.inlineLink};
        color: ${colors.lightText};
        .count {
          color: ${colors.text};
          font-family: ${fonts.Highlight};
          font-size: ${fontSizes.md};
        }
      }
    }
  }
`;

const TechPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <Helmet title={title} />

    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <Link to="/archive">View All Projects</Link>
      </span>

      <h1>Technologies</h1>
      <ul className="fancy-list">
        {group.map(tech => (
          <li key={tech.fieldValue}>
            <Link to={`/tech/${kebabCase(tech.fieldValue)}/`}>
              {tech.fieldValue} <span className="count">({tech.totalCount})</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledTagsContainer>
  </Layout>
);

TechPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
  location: PropTypes.object,
};

export default TechPage;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000, filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: { frontmatter: { tech: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
