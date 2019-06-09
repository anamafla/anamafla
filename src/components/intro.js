import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Link from "gatsby-link"
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact"
import "./layout.css"
import image from "../images/undraw_freelancer_dev2.png"
import SocialLinks from "./sociallinks"

const Intro = () => (
  <section id="apppage">
    <MDBView>
      <MDBMask className="d-flex justify-content-center align-items-center ">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" xl="5" className="mt-xl-5">
              <img src={image} alt="Woman at computer" className="img-fluid" />
            </MDBCol>
            <div className="text-center text-md-left col-md-6 mt-xl-5 mb-5">
              <h2 className="h2-responsive  mt-sm-5">
                Hi.{" "}
                <span role="img" aria-label="waving hand">
                  👋{" "}
                </span>{" "}
                I'm Ana
              </h2>
              <h2 className=" h2-responsive  deep-purple-text  font-weight-bolder mt-sm-5">
                I'm Front End Developer
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
)

export default Intro
