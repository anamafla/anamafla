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
    <>
      <MDBCard className="mb-4 mx-auto" style={{ width: "22rem" }}>
        <Image fluid={imageData} alt={title} />

        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>

          <MDBCardText>{description}</MDBCardText>

          <MDBCardText>
            <strong>Built using: </strong>
            <span>{tools}</span>
          </MDBCardText>

          <MDBBtn
            className="btn btn-outline-secondary"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            {"   "}Github
          </MDBBtn>
          <MDBBtn
            className="btn btn-outline-secondary"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaptopCode />
            {"   "}Site
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

export default ProjectCard
