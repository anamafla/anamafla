import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Intro from "../components/intro"

import Project from "../components/project"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`developer`, `front-end`, `react`]} />

//     <Intro />
//     <Project
//      title={}
//      description={}
//      imageData={}
//      tools={}
//     />
//     <Projects />
//   </Layout>
// )

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
    <Layout>
      <SEO title="Home" keywords={[`developer`, `front-end`, `react`]} />
      <Intro />
      <hr />
      <section className="projects-info">
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div className="projects">
          {projects.map(({ node: project }) => {
            const { title, description, tools, github, url } = project
            const imageData = project.image.childImageSharp.fluid
            return (
              <Project
                title={title}
                description={description}
                imageData={imageData}
                tools={tools}
                github={github}
                url={url}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
