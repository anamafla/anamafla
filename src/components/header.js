import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBContainer,
} from "mdbreact"

import image from "../images/favicon_anamafla.png"

const Header = ({ siteTitle, transparent }) => (
  <>
    {transparent ? (
      <MDBNavbar
        color="mdb-color darken-3"
        expand="md"
        fixed="top"
        scrolling
        transparent
      >
        <MDBContainer>
          <MDBNavbarBrand className="h2-responsive deep-purple-text ">
            <Link to="/">
              <img
                src={image}
                style={{ width: "60px" }}
                alt="logo"
                className="img-fluid"
              />
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarNav right>
            {/* <MDBNavItem>
              <Link to="/" className="link-menu">
                Home
              </Link>
            </MDBNavItem> */}
            <MDBNavItem>
              <Link to="/#projects" className="link-menu">
                Projects
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link to="/blog" className="link-menu">
                Blog
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    ) : (
      <MDBNavbar color="mdb-color darken-3" expand="md" fixed="top" scrolling>
        <MDBContainer>
          <MDBNavbarBrand className="h2-responsive deep-purple-text ">
            <Link to="/">
              <img
                src={image}
                style={{ width: "60px" }}
                alt="logo"
                className="img-fluid"
              />
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarNav right>
            {/* <MDBNavItem>
              <Link to="/" className="link-menu">
                Home
              </Link>
            </MDBNavItem> */}
            <MDBNavItem>
              <Link to="/#projects" className="link-menu">
                Projects
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link to="/blog" className="link-menu">
                Blog
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    )}
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
