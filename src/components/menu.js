import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        <Link
          to="/"
          style={{
            color: `white`,
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          style={{
            color: `white`,
          }}
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
