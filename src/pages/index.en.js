import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import Layout from "../components/layout"

import SEO from "../components/seo"
import ProjectCard from "../components/projectcard"
import Intro from "../components/intro"
import PatternHalfTriangleGradients from "../components/patternHalfTriangle"

function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            tools
            url
            description
            github
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <>
      <SEO title="anamafla" keywords={[`developer`, `front-end`, `react`]} />

      <Layout transparent={true}>
        <Intro />

        <section id={"projects"}>
          <MDBContainer className="mt-5 pt-5">
            <h2 className="gray-text text-center mt-5"> Projects</h2>
            <MDBRow className="mt-5">
              {projects.map(({ node: project }) => {
                const { title, description, tools, github, url } = project
                const imageData = project.image.childImageSharp.fluid
                return (
                  <>
                    <MDBCol md="6" xl="6" key={title}>
                      <ProjectCard
                        title={title}
                        description={description}
                        imageData={imageData}
                        tools={tools}
                        github={github}
                        url={url}
                      />
                    </MDBCol>
                  </>
                )
              })}
            </MDBRow>
          </MDBContainer>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
