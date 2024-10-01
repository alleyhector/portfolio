import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Hero, About, Jobs, Featured, Writing, Projects, Contact } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Jobs data={data.jobs.edges} />
      <Featured data={data.featured.edges} />
      <Writing data={data.writing.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            attrs
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/featured/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#7AA34B" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            github
            external
            skills
          }
          html
        }
      }
    }
    writing: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/writing/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#7AA34B" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            publication
            external
            pubtitle
            release
            skills
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external
            pub
            skills
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }
  }
`;
