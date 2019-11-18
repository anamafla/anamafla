---
path: "/how-to-create-a-blog-with-gatsby"
date: "2019-09-1"
title: "How to create a blog with Gatsby"
content: "Here is a guide on how to create your blog using Gatsby"
image: undraw_blogging_vpvv.png
author: "Ana Mafla"
---

Searching about how to create my blog, I found that many people were using a tool named Gatsby.

Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

Gatsby follow the latest web standards, and are optimized to be highly performant. It makes use of the latest and popular technologies including ReactJS, Webpack, GraphQL, modern ES6+ JavaScript and CSS.
Here’s a guide on how to create a blog using Gatsby. Make sure you have Node.js installed and updated.

## Step 1: Create the project with gatsby

Open your terminal and enter:

`npx gatsby new [SITE_DIRECTORY_NAME][URL_OF_STARTER_GITHUB_REPO]`

- `npx`: Starting with npx executes an npm package binary without installing it locally
- `gatsby`: tells to npx that we want to use the gatsby-cli tool
- `new`: is a gatsby command to create a new gatsby project.
- `[URL_OF_STARTER_GITHUB_REPO]`: The Github URL specified points to a code repository that holds the starter code you want to use. If you omit a URL from the end, Gatsby will generate a site based on the default starter.

Once the Gatsby site is finished installing all the packages and dependencies, you can now go into the directory and run the site locally

`cd [SITE_DIRECTORY_NAME]`
`npm run develop`

Now you can go to localhost: 8000 to see your new site.

## Step 2: Customize your App

Once you open your project in the editor, there are several files and folders that Gatbsy have created for you.

<img width=50% src="files.png" alt="file structure" />

For now we are going to focus on these files:

a.gatsby-config.js:
In this file you will find two sections:

- siteMetadata: Information of the site ( like your name, photo, title, etc.)

- plugins: All the Gatsby plugins that will be run when the application starts.

b.pages:
In this folder you can create content for your page. Inside you’ll find markdown files, images and any other resources for your pages.

## Step 3: Install plugins

We can add functionality to Gatsby site through its plugin system. Gatsby plugins are Node.js packages that are able to extend and modify what Gatsby does.

Of the many possibilities, plugins can:

- Add external data or content (e.g. your CMS, static files, a REST API) to your Gatsby GraphQL data
- Transform data from other formats (e.g. Markdown, YAML, CSV) to JSON objects
- Add third-party services (e.g. Google Analytics, Instagram) to your site

Use these plugins is simple:

a. First install the plugin at the root of the project

`npm i gatsby-transformer-remark`

b. After we install it we need to configure it in gatsby-config.js. The config file accepts an array of plugins. Some plugins may need only to be listed by name, while others may take options

gatsby-config.js

```
module.exports = {
siteMetadata: {
title: `anamafla`,
description: `In this space you will learn more about my work.`,
author: `Ana Mafla`,
},
plugins: [
`gatsby-plugin-react-helmet`,
`gatsby-plugin-catch-links`,
{
resolve: `gatsby-source-filesystem`,
options: {
name: `images`,
path: `${__dirname}/src/images`,
},
},
{
resolve: `gatsby-source-filesystem`,
options: {
name: `pages`,
path: `${__dirname}/src/pages`,
},
},
{
resolve: `gatsby-source-filesystem`,
options: {
name: `project`,
path: `./data`,
},
},

`gatsby-transformer-json`,
`gatsby-transformer-sharp`,
`gatsby-plugin-sharp`,
{
resolve: `gatsby-plugin-manifest`,
options: {
name: `gatsby-starter-default`,
short_name: `starter`,
start_url: `/`,
background_color: `#663399`,
theme_color: `#663399`,
display: `minimal-ui`,
icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
},
},
{
resolve: `gatsby-plugin-google-analytics`,
options: {
trackingId: process.env.GATSBY_GA_TRACKING_ID,
},
},
{
resolve: "gatsby-transformer-remark",
options: {
plugins: [
{
resolve: "@weknow/gatsby-remark-codepen",
options: {
theme: "dark",
height: 400,
},
},
{
resolve: `gatsby-remark-images`,
options: {
maxWidth: 300,
},
},
],
},
},
],
}
```

## Step 4: Create pages

### Markdown Pages

In Gatsby we can use markdown files to create pages. We need to add plugins to read and understand folders with markdown files and from them create pages automatically.

- Read files into Gatsby from the filesystem

Use the plugin `gatsby-source-filesystem` to read files.

- Transform the markdown to HTML and the YAML frontmatter to JSON

Use the plugin `gatsby-transformer-remark` to recognise

- Create a page template for the markdown data

blogTemplate.js

```
import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"

export default function Template({ data }) {
const post = data.markdownRemark
console.log(post)

return (
typeof window !== `undefined` && (
<Layout>
<MDBContainer className="mt-5 pt-5">
<br />
<Link to="/blog">Go Back</Link>

         <h1>{post.frontmatter.title}</h1>
         <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
         <div dangerouslySetInnerHTML={{ __html: post.html }} />
         <p>
           Posted by {post.frontmatter.author} on {post.frontmatter.date}
         </p>
       </MDBContainer>
     </Layout>

)
)
}
export const postQuery = graphql`query BlogPostByPath($path: String!) { markdownRemark(frontmatter: { path: { eq: $path } }) { html frontmatter { path title content author date image { childImageSharp { fluid(maxWidth: 400, maxHeight: 250) { ...GatsbyImageSharpFluid } } } } } }`

```

In the file above we can see two parts:

- A GraphQL query: Is made in the second half of the file to get the Markdown data.
- The result of the query is injected by Gatsby into the Template component as data. `markdownRemark` is the property that we find has all the details of the markdown file.

### Gatsby’s Node API

To create the markdown pages, we need to use GatsbyAPI `createPages`.

To implement an API, we export a function with the name of the API from gatsby-node.js

Gatsby calls the createPages API (if present) at build time with injected parameters, `actions` and `graphql`.

First use the `graphql` to query Markdown file data
Next use `createPage` action creator to create a page for each of the markdown files using the template we created before.

```
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
const { createPage } = actions
const postTemplate = path.resolve("src/templates/blog-post.js")

return graphql(`{ allMarkdownRemark { edges { node { html id frontmatter { path title content date author } } } } }`).then(res => {
console.log("res", res)

if (res.errors) {
return Promise.reject(res.errors)
}

res.data.allMarkdownRemark.edges.forEach(({ node }) => {
createPage({
path: node.frontmatter.path,
component: postTemplate,
})
})
})
}
```
