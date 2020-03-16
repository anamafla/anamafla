import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBContainer, MDBRow } from "mdbreact"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MDBContainer>
      <h1 className="gray-text text-center mt-5">NOT FOUND</h1>
      <MDBRow className="mt-5">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </MDBRow>
    </MDBContainer>
  </Layout>
)
export default NotFoundPage
