import React from "react"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact"

import Image from "gatsby-image"

const PostCard = ({ id, title, content, image, date, path }) => {
  return (
    <MDBCard className="mb-4 mt-4 mx-auto" style={{ width: "22rem" }}>
      {/* <MDBCardImage className="img-fluid" src={props.image} waves /> */}
      <Image fluid={image.childImageSharp.fluid} />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{content}</MDBCardText>
        <MDBBtn color="cyan" href={path}>
          Read more
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default PostCard
