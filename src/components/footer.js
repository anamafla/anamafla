import React from "react"
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact"

import SocialLinks from "./sociallinks"

const Footer = () => {
  return (
    <MDBFooter color="cyan lighten-4" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <SocialLinks />
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>&copy; {new Date().getFullYear()}</MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
