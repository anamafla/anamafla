import React from "react"
import Image from "gatsby-image"
import { FaLaptopCode, FaGithub } from "react-icons/fa"

function project({ title, description, tools, imageData, github, url }) {
  return (
    <div className="project">
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>

        <div>
          <strong>Built using: </strong>
          <p>{tools}</p>
        </div>
        <div className="link-project">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaLaptopCode /> Site
          </a>
        </div>

        <div className="link-project">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Github
          </a>
        </div>
      </div>

      <div className="image">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image fluid={imageData} alt={title} />
        </a>
      </div>
    </div>
  )
}

export default project
