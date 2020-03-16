import React from "react"
import SocialLinks from "./sociallinks"

const Footer = () => {
  return (
    <footer
      className="font-small pt-4 mt-4"
      //   style={{ backgroundColor: "cyan" }}
    >
      <div className="container">
        <div className="row">
          <SocialLinks />
        </div>
        <div className="row py-3 justify-content-center">
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
