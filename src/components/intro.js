import React from "react"
import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact"
import "./layout.css"
import image from "../images/undraw_freelancer_dev2.png"
import SocialLinks from "./sociallinks"
import PatternHalfTriangleGradients from "./patternHalfTriangle"

const Intro = () => (
  <>
    <section id="intro">
      <PatternHalfTriangleGradients
        position={"left"}
        direction={"up"}
        className="col-sm-2"
      />
      <div className="intro-content">
        <h2
          style={{
            display: `inline`,
          }}
        >
          Hi. I'm Ana.
        </h2>
        <h2>Front End Developer</h2>

        <h5 className="mt-4 mb-4 lead">
          I love writing code, learning new technologies, and taking on new
          challenges
        </h5>
      </div>
      <PatternHalfTriangleGradients
        position={"right"}
        direction={"up"}
        className="col-sm-2"
      />
    </section>
  </>
)

export default Intro
