import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Skills from "../components/skills"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import TopNavbar from "../components/TopNavbar"
import { darkTheme, lightTheme } from "../components/DarkTheme"
export default ({ data }) => {
  const [theme, setTheme] = React.useState("dark")
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
    if (theme === "dark") {
      darkTheme(theme)
    } else {
      lightTheme(theme)
    }
  }
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <React.Fragment>
      <Layout>
        <TopNavbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Jobs />
        <Projects projects={projects} title="featured projects" showLink />
        <Skills />
      </Layout>
    </React.Fragment>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        descript {
          exp_descript
        }
        id
        url
        title
        strapiId
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
