import React from "react"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact"

import Image from "gatsby-image"
import { FaLaptopCode, FaGithub } from "react-icons/fa"

const ProjectCard = ({ title, description, tools, imageData, github, url }) => {
  return (
    <MDBCard className="mb-4 mx-auto" style={{ width: "22rem" }}>
      <Image fluid={imageData} alt={title} />

      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          <div>{description}</div>

          <div>
            <strong>Built using: </strong>
            <p>{tools}</p>
          </div>
        </MDBCardText>

        <MDBBtn
          color="cyan"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          {"   "}Github
        </MDBBtn>
        <MDBBtn
          color="cyan"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLaptopCode />
          {"   "}Site
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default ProjectCard
