/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
        <Footer />

        {/* <footer>
          <div className="social-links">
            <div>
              <a
                href="https://github.com/anamafla"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaGithub />
              </a>
            </div>
            <div>
              <a
                href="https:www.linkedin.com/in/anamafla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <a
              href="https://twitter.com/AnaMeMafla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
