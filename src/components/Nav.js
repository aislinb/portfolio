import React from 'react'
import { useLocation } from 'react-router-dom'

import { HashLink as Link } from 'react-router-hash-link'


function Nav()  {

  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname } = useLocation()

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="navbar is-fixed-top has-dropdown is-hoverable">
      <div className="container">
        <div className="navbar-brand">
          <span className="title"><Link to="#about-section">💫</Link></span>
          <span onClick={handleMenuToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start navbar-item">
            <Link to="#about-section" className="nav-button">ABOUT ME</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="#technologies-section" className="nav-button">TECH SKILLS</Link>
            </div>
            <div className="navbar-item">
              <Link to="#projects-section" className="nav-button">PROJECTS</Link>
            </div>
            <div className="navbar-item">
              <Link to="#contact-section" className="nav-button">CONTACT</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Nav