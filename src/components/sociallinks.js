import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const SocialLinks = () => (
  <div className="social-links">
    <a
      href="https://github.com/anamafla"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/anamafla"
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
)

export default SocialLinks
