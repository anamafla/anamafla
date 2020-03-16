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

const Header = ({ siteTitle }) => (
  // <nav
  //   className="navbar navbar-expand-md navbar-light sticky-top"
  //   // style={{ backgroundColor: "#8AD5EB" }}
  // >
  //   <a className="navbar-brand" href="/">
  //     <h1 className="h1-responsive deep-purple-text ">{siteTitle}</h1>
  //   </a>
  //   <button
  //     className="navbar-toggler"
  //     type="button"
  //     data-toggle="collapse"
  //     data-target="#navbarSupportedContent"
  //     aria-controls="navbarSupportedContent"
  //     aria-expanded="false"
  //     aria-label="Toggle navigation"
  //   >
  //     <span className="navbar-toggler-icon"></span>
  //   </button>

  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul className="navbar-nav mr-auto">
  //       <li className="nav-item">
  //         <Link to="/" style={{ marginLeft: "1.25rem", color: "purple" }}>
  //           {" "}
  //           Home
  //         </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link to="/blog" style={{ marginLeft: "1.25rem", color: "purple" }}>
  //           {" "}
  //           Blog
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>

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
          <Link to="/blog" style={{ marginLeft: "1.25rem", color: "purple" }}>
            {" "}
            Blog
          </Link>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBContainer>
  </MDBNavbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
