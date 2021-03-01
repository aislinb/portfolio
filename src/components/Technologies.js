import React from 'react'


function Technologies() {
  return (
    <section className="technologies-section" id="technologies-section">
      <h3 className="heading">TECHNOLOGIES I LIKE USING</h3>
      <div className="technologies-wrapper">
        <div className="tech-block">
          <div className="tech-subtitle">TECH</div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Bulma</li>
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Python</li>-
            <li>Django</li>
          </ul>
        </div>
        <div className="tech-block">
          <div className="tech-subtitle">DATABASES</div>
          <ul>
            <li>Structured Query Language (SQL)</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className="tech-block">
          <div className="tech-subtitle">STORAGE & VERSION CONTROL</div>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div className="tech-block">
          <div className="tech-subtitle">PACKAGE MANAGERS</div>
          <ul>
            <li>Yarn</li>
            <li>Axios</li>
            <li>Npm</li>
            <li>Pip</li>
            <li>Pipenv</li>
          </ul>
        </div>
        <div className="tech-block">
          <div className="tech-subtitle">TOOLS</div>
          <ul>
            <li>TablePlus</li>
            <li>Insomnia</li>
            <li>Trello</li>
            <li>Excel</li>
            <li>Pip</li>
          </ul>
        </div>
      </div>
    </section>
  )

}

export default Technologies