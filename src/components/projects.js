import React from "react"
import reefa from "../images/reefa.png"
import { FaLaptopCode, FaGithub } from "react-icons/fa"

function projects() {
  return (
    <section className="projects-info">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="projects">
        <div className="project">
          <div className="description">
            <h3>Reefa</h3>
            <p>
              Tool that allows you to choose a random winner from meet.com event
            </p>
            <div className="link-project">
              <a href="https://www.reefa.me/" target="_blank">
                <FaLaptopCode /> Site
              </a>
            </div>

            <div className="link-project">
              <a href="https://github.com/anamafla/Reefa" target="_blank">
                <FaGithub /> Github
              </a>
            </div>
          </div>

          <div className="image">
            <a href="https://www.reefa.me/" target="_blank">
              <img src={reefa} alt="Project" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default projects
