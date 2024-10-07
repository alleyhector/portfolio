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

const TechTemplate = ({ pageContext, data, location }) => {
  const { tech } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <StyledTagsContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/tech">View all technologies</Link>
        </span>

        <h1>
          <span>#{tech}</span>
        </h1>

        <ul className="fancy-list">
          {edges.map(({ node }) => {
            const { title, slug, date, tech } = node.frontmatter;
            return (
              <li key={slug}>
                <h2>
                  <Link to={slug}>{title}</Link>
                </h2>
                <p className="subtitle">
                  <time>{`${new Date(date).getFullYear()}`}</time>
                  {tech &&
                    tech.length > 0 &&
                    tech.map((tech, i) => (
                      <Link key={i} to={`/tech/${kebabCase(tech)}/`} className="tech">
                        <br />#{tech}
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

export default TechTemplate;

TechTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tech: PropTypes.string.isRequired,
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
  query ($tech: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tech: { in: [$tech] } } }
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
