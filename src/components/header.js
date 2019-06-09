import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
} from "mdbreact"

const Header = ({ siteTitle }) => (
  <header>
    <Router>
      <div>
        <MDBNavbar color="white" expand="md" fixed="top" scrolling transparent>
          <MDBContainer>
            <MDBNavbarBrand>
              <h1 className="h1-responsive deep-purple-text ">{siteTitle}</h1>
            </MDBNavbarBrand>

            <MDBNavbarNav left>
              <MDBNavItem>
                <Link to="/" style={{ marginLeft: "1.25rem", color: "purple" }}>
                  {" "}
                  Home
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  to="/blog"
                  style={{ marginLeft: "1.25rem", color: "purple" }}
                >
                  {" "}
                  Blog
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </Router>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
