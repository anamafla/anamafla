import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header>
    <div className="brand">
      <h1
        style={{
          fontSize: "1.45rem",
          margin: 0,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#8AD5EB`,
            textDecoration: `none`,
          }}
        >
          <span className="symbol-brand">&lt;</span> {siteTitle}
          <span className="symbol-brand">/&gt;</span>
        </Link>
      </h1>
    </div>

    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
