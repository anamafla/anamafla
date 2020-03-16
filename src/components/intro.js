import React from "react"
import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact"
import "./layout.css"
import image from "../images/undraw_freelancer_dev2.png"
import SocialLinks from "./sociallinks"

const Intro = () => (
  <>
    <section id="intro">
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center ">
          <MDBContainer>
            <MDBRow className="mt-2">
              <MDBCol md="6" xl="5" className="mt-xl-5 mt-sm-4  pt-sm-4">
                <img
                  src={image}
                  alt="Woman at computer"
                  className="img-fluid"
                />
              </MDBCol>
              <div className="text-center text-md-left col-md-6  mt-xl-5 mb-5">
                <h2
                  className="h2-responsive  mt-sm-5"
                  style={{
                    display: `inline`,
                  }}
                >
                  Hi
                </h2>
                <div role="img" aria-label="waving hand" className="hand">
                  👋
                </div>
                <h2
                  className="h2-responsive  mt-sm-5"
                  style={{
                    display: `inline`,
                  }}
                >
                  I'm Ana
                </h2>

                <h2 className=" h2-responsive  deep-purple-text  font-weight-bolder mt-sm-5">
                  I'm a Front End Developer
                </h2>

                <h5 className="mt-4 mb-4">
                  I love writing code, learning new technologies, and taking on
                  new challenges
                </h5>
                <SocialLinks />
              </div>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </section>
  </>
)

export default Intro
