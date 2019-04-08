import React from "react"
import { FaHtml5, FaJsSquare, FaReact, FaCss3Alt } from "react-icons/fa"

const Skills = () => (
  <div
    style={{
      margin: `0 auto`,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <section
      className="content-section bg-primary text-white text-center"
      id="services"
    >
      <div className="container ">
        <div className="content-section-heading">
          <h2 className="mb-5">Skills</h2>
        </div>
        <div
          className="row"
          style={{
            display: `flex`,
            justifyContent: "space-evenly",
            margin: `0 auto`,
            padding: `1.45rem 1.0875rem`,
            color: `#04254E`,
          }}
        >
          <div>
            <FaHtml5 />
            <h4>Html</h4>
          </div>
          <div>
            <FaJsSquare />

            <h4>JavaScript</h4>
          </div>
          <div>
            <FaReact />

            <h4>
              <strong>React</strong>
            </h4>
          </div>
          <div>
            <FaCss3Alt />

            <h4>
              <strong>CSS</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Skills
