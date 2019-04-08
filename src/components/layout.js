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
import Menu from "../components/menu"

import { FaLaptopCode, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import "./layout.css"

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

        <div className="container">
          <main>{children}</main>
          <footer>
            <div className="social-links">
              <div>
                <a href="https://github.com/anamafla" target="_blank">
                  {" "}
                  <FaGithub />
                </a>
              </div>

              <a href="https:www.linkedin.com/in/anamafla" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/AnaMeMafla" target="_blank">
                <FaTwitter />
              </a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
