import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav className="navbar is-fixed-top is-hoverable">
      <div className="container">
        <div className="navbar-brand">
          <Link to="#projects-section" className="navbar-item">
            <a className="navbar-brand" href="/">
              <div className="nav-button">
                ABOUT ME
              </div>
            </a>
          </Link>
          <Link to="#tech-section" className="navbar-item">
            <a className="navbar-brand" href="/">
              <div className="nav-button">
                TECH SKILLS
              </div>
            </a>
          </Link>
          <Link to="#projects-section" className="navbar-item">
            <a className="navbar-brand" href="/">
              <div className="nav-button">
                PROJECTS
              </div>
            </a>
          </Link>
          <Link to="#contact-section" className="navbar-item">
            <a className="navbar-brand" href="/">
              <div className="nav-button">
                CONTACT
              </div>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )

}

export default Nav