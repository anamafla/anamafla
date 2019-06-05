import React from "react"
import test from "../images/undraw_freelancer_dev2.png"

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Intro = () => (
  <section className="intro-info">
    <img src={test} className="avatar" alt="Woman at computer" />
    <div className="info">
      <h2>
        Hi{" "}
        <span role="img" aria-label="waving hand">
          👋{" "}
        </span>
        . I'm Ana.{" "}
      </h2>
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
          <a
            href="https://github.com/anamafla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="https:www.linkedin.com/in/anamafla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/AnaMeMafla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  </section>
)

export default Intro
