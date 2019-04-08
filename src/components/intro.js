import React from "react"
import test from "../images/undraw_teacher3.png"

import { FaLaptopCode, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Intro = () => (
  <section className="intro-info">
    <img src={test} className="avatar" />
    <div className="info">
      <h2>Hi. I'm Ana. </h2>
      <h2
        style={{
          color: `#8A54A2`,
        }}
      >
        I'm Front End Developer
      </h2>

      <p>
        I love writing code, learning new technologies, and taking on new
        challenges.
      </p>
      <div className="social-links">
        <div>
          <a href="https://github.com/anamafla" target="_blank">
            <FaGithub />
          </a>
        </div>

        <a href="https:www.linkedin.com/in/anamafla" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/AnaMeMafla" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </div>
  </section>
)

export default Intro
