import React from "react"
import Image from "gatsby-image"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact"

const PostCard = ({ id, title, content, image, date, path, slug }) => {
  return (
    <>
      <MDBCard className="mb-4 mt-4 mx-auto" style={{ width: "22rem" }}>
        <Image fluid={image.childImageSharp.fluid} />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{content}</MDBCardText>
          <MDBBtn className="btn btn-outline-secondary" href={slug}>
            Read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

export default PostCard
